# Logistics Extension — Architecture

## Order State Flow

Orders go through the following stages from placement to delivery:

1. Customer places order → lands on Fynd OMS
2. Seller confirms → invoices → packs shipment
3. OMS emits **Assign DP event** to the extension
4. Extension acknowledges → responds with `dp_assigned` or `dp_not_assigned`
5. DP picks up → delivers → extension syncs status updates to OMS
6. If canceled → OMS emits **Cancel DP event** → extension handles

```
Customer Order
     ↓
Fynd OMS
     ↓  (invoice generated)
Assign DP Webhook ──→ Your Extension ──→ DP System
                              ↓
                    dp_assigned / dp_not_assigned
                              ↓
                    Real-time status sync ──→ Fynd OMS
                              ↑
                    Cancel DP Webhook (if canceled)
```

## Seller Discovery & Setup Flow

Three stages for sellers:

1. **Discovery** — seller finds your extension on the marketplace
2. **Configuration** — seller subscribes to a scheme, provides DP credentials via your extension UI
3. **Rule Engine (optional)** — seller configures per-channel DP priorities and assignment rules

> The extension must notify the platform of all create/update/disable account events in real time. The OMS routes shipment assignments based on this data.

## OMS State Transitions

Key states a DP extension must handle:

| State | Meaning |
|-------|---------|
| `dp_assigned` | DP successfully assigned, shipment handed over |
| `dp_not_assigned` | Assignment failed — include `transition_comments` explaining why |
| `out_for_delivery` | Shipment in transit to customer |
| `delivered` | Delivery confirmed |
| `rto_initiated` | Return-to-origin started |
| `return_initiated` | Reverse flow started |

FDK methods to validate transitions:
- [`getStateTransitionMap`](https://docs.fynd.com/partners/commerce/sdk/1.9.0/platform/company/order#getStateTransitionMap) — full map of states → allowed next states
- [`getAllowedStateTransition`](https://docs.fynd.com/partners/commerce/sdk/1.9.0/platform/company/order#getAllowedStateTransition) — check the next allowed state for a given current state

## Webhook Events

Two core events your extension must handle:

| Event | Trigger | Your Response |
|-------|---------|---------------|
| `application/courier-partners/assign` | OMS ready to assign shipment | Assign to DP, reply with `dp_assigned` or `dp_not_assigned` |
| `application/courier-partners/cancel` | Seller/customer canceled | Cancel with DP, acknowledge |

Register in `setupFdk()`:
```js
webhook_config: {
    api_path: "/api/webhook-events",
    notification_email: "your@email.com",
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

## Multi-Company Support

Each seller is a separate company. Use `fdkExtension.getPlatformClient(companyId)` to get a scoped client per seller. Never share state across company IDs.
