# Logistics Extension — Order Journey

## Overview

The order journey is the complete lifecycle of a shipment — from customer order through delivery, cancellation, or return. The DP extension must handle all three major flows.

```
Customer Order → OMS → Invoice → Assign DP Webhook
                                        ↓
                                Extension assigns DP
                                        ↓
                          ┌─────────────┴──────────────┐
                          ↓             ↓              ↓
                     Forward Flow   Reverse Flow    RTO Flow
```

## Three Flow Types

### 1. Forward Flow (most common)

Goods move from seller → customer.

```
Order confirmed
    → Seller invoices + packs
    → OMS: Assign DP event
    → Extension: respond dp_assigned (include AWB, tracking URL, label)
    → DP picks up → ships → delivers
    → Extension: sync status updates (out_for_delivery → delivered)
```

Key statuses to sync: `dp_assigned` → `out_for_delivery` → `delivered`

### 2. RTO Flow (Return to Origin)

Package not delivered → returned to seller. Triggers when:
- Incorrect address
- Multiple failed delivery attempts
- Customer refused delivery

```
Delivery attempt fails (or customer refuses)
    → DP initiates RTO
    → Extension: sync rto_initiated → in_transit_to_seller → rto_delivered
```

### 3. Reverse Flow

Customer initiates return after delivery.

```
Customer requests return
    → Seller approves
    → OMS: Assign DP event (for reverse pickup)
    → Extension: respond dp_assigned
    → DP picks up from customer → delivers to seller warehouse
    → Extension: sync return_bag_picked → return_delivered
```

## Webhook Events

### Assign Shipment (`application/courier-partners/assign`)

Triggered when OMS is ready to assign a shipment. Includes:

| Field | Description |
|-------|-------------|
| Extension ID | Your extension's API key |
| Scheme ID | Which scheme the seller subscribed to |
| Shipment type | Forward / Reverse / MPS / COD / QC required |

**MPS (Multi-Piece Shipment):** Multiple parcels under one tracking number. All parcels must be delivered together.

**Doorstep QC:** Quality check at customer location before accepting a return.

**COD:** Collect payment from customer at delivery.

**E-Way Bill:** Required for goods > ₹50,000 (India GST compliance).

**QR:** DP accepts payment via QR code at delivery point.

```js
async function courierPartnerAssignHandler(event_name, request_body, company_id, application_id) {
    // Assign shipment to DP
    // Then update OMS with dp_assigned status (see development.md)
    console.log(event_name, company_id, application_id);
    console.log(JSON.stringify(request_body));
}
```

Webhook payload: [application/courier-partners/assign](https://docs.fynd.com/partners/commerce/webhooks/latest/application#courier-partner)

### Cancel Shipment (`application/courier-partners/cancel`)

Triggered when seller or customer cancels a shipment.

```js
async function courierPartnerCancelHandler(event_name, request_body, company_id, application_id) {
    // Cancel with DP
    // Acknowledge to OMS
    console.log(event_name, company_id, application_id);
    console.log(JSON.stringify(request_body));
}
```

Webhook payload: [application/courier-partners/cancel](https://docs.fynd.com/partners/commerce/webhooks/latest/application#courier-partner)

## OMS State Reference

Use the state transition APIs to validate before updating:
- [`getStateTransitionMap`](https://docs.fynd.com/partners/commerce/sdk/1.9.0/platform/company/order#getStateTransitionMap)
- [`getAllowedStateTransition`](https://docs.fynd.com/partners/commerce/sdk/1.9.0/platform/company/order#getAllowedStateTransition)
- [Full OMS states list](https://docs.fynd.com/commerce/getting-started/oms-states)

## Status Update Timing

- Provide status updates **in real time** when possible
- If real-time is not feasible, agree on a polling interval with Fynd and stick to it
- Use `updateShipmentStatus` for OMS state changes
- Use `updateShipmentTracking` for tracking-only updates (location, ETA) without changing OMS state
