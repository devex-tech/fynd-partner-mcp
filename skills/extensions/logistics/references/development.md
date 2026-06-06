# Logistics Extension — Development

## Setup (FDK CLI)

```bash
npm install -g @gofynd/fdk-cli
fdk login
fdk extension init   # Select "Logistics Extension"
```

Recommended stack: **Node + React.js + SQLite**

The boilerplate auto-registers a company-level extension in your Partners account, handles auth into Fynd Commerce, and wires up Platform API + webhook access.

```bash
cd your-extension-name
fdk populate          # Adds test products to dev company (once per company)
fdk extension preview # Exposes local extension via Cloudflare tunnel
```

For a custom tunnel:
```bash
fdk extension preview --tunnel-url https://your-tunnel-url --port 46456
```

## Development Workflow

1. Create **Schemes** (services your DP offers)
2. Upload **Serviceability** + **TAT** data per scheme
3. Handle seller **Account creation** when they subscribe
4. Implement **Webhook handlers** for Assign + Cancel events
5. Implement **Status sync** — push updates back to Fynd OMS

## Account Creation

When a seller subscribes to a scheme, create an account:

```js
// Get available schemes first
const schemes = await platformClient.serviceability.getCourierPartnerSchemes({
    companyId: companyId
});

// Create account for seller × scheme
const account = await platformClient.serviceability.createCourierPartnerAccount({
    companyId: companyId,
    body: {
        extension_id: process.env.EXTENSION_API_KEY,
        account_id: `${scheme_id}_company_id_${companyId}`,  // must be unique
        scheme_id: scheme_id,
        is_self_ship: false,
        stage: "enabled",
        is_own_account: true   // false only if Fynd admin manages credentials
    }
});
```

Other account APIs:
- [`getCourierPartnerAccounts`](https://docs.fynd.com/partners/commerce/sdk/latest/platform/company/serviceability#getCourierPartnerAccounts) — list seller accounts
- [`updateCourierPartnerAccount`](https://docs.fynd.com/partners/commerce/sdk/latest/platform/company/serviceability#updateCourierPartnerAccount) — update account
- [`getCourierPartnerAccount`](https://docs.fynd.com/partners/commerce/sdk/latest/platform/company/serviceability#getCourierPartnerAccount) — get single account status

## Webhook Setup

Register in `setupFdk()`:
```js
webhook_config: {
    api_path: "/api/webhook-events",
    notification_email: "you@yourcompany.com",
    event_map: {
        'application/courier-partners/assign': {
            handler: webhookHandler.courierPartnerAssign,
            version: '1',
        },
        'application/courier-partners/cancel': {
            handler: webhookHandler.courierPartnerCancel,
            version: '1',
        }
    }
}
```

Process in your route:
```js
app.post('/api/webhooks', async (req, res, next) => {
    try {
        await fdkExtension.webhookRegistry.processWebhook(req);
        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
});
```

> Webhook config changes don't auto-update existing subscribers. The extension must be opened by the seller at least once after any config change.

## Updating Shipment Status (dp_assigned)

After assigning to DP, update OMS immediately:

```js
const platformClient = await fdkExtension.getPlatformClient(companyId);
await platformClient.order.updateShipmentStatus({
    body: {
        task: false,
        force_transition: false,
        lock_after_transition: false,
        unlock_before_transition: false,
        resume_tasks_after_unlock: false,
        statuses: [{
            status: "dp_assigned",
            shipments: [{
                identifier: shipmentId,
                products: [],
                data_updates: {
                    entities: [{
                        filters: [],
                        data: {
                            meta: {
                                courier_partner_extension_id: process.env.EXTENSION_API_KEY,
                                courier_partner_scheme_id: schemeId,
                                waybill: ["AWB_NUMBER"],
                                tracking_url: "https://your-dp.com/track/AWB_NUMBER",
                                courier_partner_name: "Your DP Name",
                                label: "https://cdn.fynd.com/.../label.pdf",
                                is_own_account: true,
                                rider_details: { name: "Rider Name", phone: "+91XXXXXXXXXX" }
                            },
                            delivery_awb_number: "AWB_NUMBER",
                            pdf_links: { label: "https://cdn.fynd.com/.../label.pdf" }
                        }
                    }]
                }
            }]
        }]
    }
});
```

## Updating Shipment Status (dp_not_assigned)

When DP assignment fails:

```js
statuses: [{
    status: "dp_not_assigned",
    shipments: [{
        identifier: shipmentId,
        products: [],
        data_updates: {
            entities: [{ filters: [], data: { meta: {
                courier_partner_extension_id: process.env.EXTENSION_API_KEY,
                courier_partner_scheme_id: schemeId,
                courier_partner_name: "Your DP Name",
                is_own_account: false
            }}}]
        },
        transition_comments: [{
            title: "Delivery Partner Assignment Failed",
            message: "Reason: COD agreement not configured for this seller."
        }]
    }]
}]
```

## Updating Tracking Info (without OMS state change)

Use `updateShipmentTracking` for location/ETA updates:

```js
await platformClient.order.updateShipmentTracking({
    body: {
        awb: "AWB_NUMBER",
        shipment_id: shipmentId,
        dp_name: "Your DP Name",
        dp_status: "out_for_delivery",
        dp_status_updated_at: new Date().toISOString(),
        dp_location: "Mumbai",
        journey: "forward",   // "forward" | "reverse"
        estimated_delivery_date: "2024-12-10T10:15:30Z",
        promised_delivery_date: "2024-12-10T10:15:30Z",
        remark: "On route",
        meta: {}
    }
});
```

## Shipment Meta Fields

Send additional data in meta under `entities` (shipment-level) or `products` (item-level):

```js
meta: {
    qc_images: [],               // URLs — QC photos for returns
    pod: {
        delivery_pod: [],        // Proof of delivery images
        rev_pod: []
    },
    qr_code: { qr_url: "", qr_data: "" },
    label: "",                   // Shipping label URL
    export_invoice: "",          // Export invoice URL
    ewaybill_info: {
        forward: { ewayBillNo: 123, ewayBillDate: "...", success: true },
        reverse: { ewayBillNo: 456, ewayBillDate: "...", success: true }
    },
    waybills: [{ awb_number: "", seller_identifier: "" }],
    rider_details: { name: "", phone: "", image: "" },
    otp_details: { drop: "", pick: "" },
    location: { latitude: "", longitude: "" },
    is_own_account: true,
    QC: false
}
```

## FDK Method References

| Task | FDK Method |
|------|-----------|
| Get schemes | [`getCourierPartnerSchemes`](https://docs.fynd.com/partners/commerce/sdk/latest/platform/company/serviceability#getCourierPartnerSchemes) |
| Create account | [`createCourierPartnerAccount`](https://docs.fynd.com/partners/commerce/sdk/latest/platform/company/serviceability#createCourierPartnerAccount) |
| Update shipment status | [`updateShipmentStatus`](https://docs.fynd.com/partners/commerce/sdk/latest/platform/company/order#updateShipmentStatus) |
| Update tracking | [`updateShipmentTracking`](https://docs.fynd.com/partners/commerce/sdk/latest/platform/company/order#updateShipmentTracking) |
| State transition map | [`getStateTransitionMap`](https://docs.fynd.com/partners/commerce/sdk/1.9.0/platform/company/order#getStateTransitionMap) |
| Allowed transitions | [`getAllowedStateTransition`](https://docs.fynd.com/partners/commerce/sdk/1.9.0/platform/company/order#getAllowedStateTransition) |
