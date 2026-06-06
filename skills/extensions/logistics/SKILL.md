---
name: fynd-partner-logistics-extension
description: >-
  Fynd Logistics Extension assistant. Use for any question about building a
  delivery partner (DP) integration on Fynd Commerce — schemes, accounts,
  order journey, assign/cancel shipment events, status sync, TAT,
  serviceability, or troubleshooting a logistics extension.
---

# Logistics Extension Skill

## Modes

**Architecture / Concepts** — understanding the system
> Signs: "what is a logistics extension", "how does DP work", "scheme vs account", "order journey", "forward flow", "reverse flow", "RTO"

**Setup / Development** — building the extension
> Signs: "boilerplate", "create scheme", "createCourierPartnerScheme", "createCourierPartnerAccount", "fdk extension init", "logistics boilerplate"

**Webhooks / Events** — listening to shipment events
> Signs: "assign shipment", "cancel shipment", "webhook event", "courier-partners/assign", "courier-partners/cancel", "listen to events"

**Status Updates** — syncing shipment status back to Fynd
> Signs: "updateShipmentStatus", "dp_assigned", "shipment tracking", "updateShipmentTracking", "OMS status", "status sync"

**Extension Management** — scheme and account operations
> Signs: "get DP accounts", "getCourierPartnerAccounts", "update scheme", "getCourierPartnerSchemes", "account management"

**Debug** — something not working
> Signs: "scheme not showing", "account not created", "shipment not assigned", "status not updating", "webhook not received"

---

## Reference Files

| File | When to load |
|---|---|
| `references/overview.md` | What is a logistics ext, benefits, prerequisites |
| `references/architecture.md` | Order states, DP assignment flow, system design |
| `references/scheme.md` | Standard vs custom schemes, all scheme fields, feature flags |
| `references/order-journey.md` | Forward, Reverse, RTO flows with status transitions |
| `references/development.md` | Boilerplate, create scheme, create account, events, status sync |
| `references/troubleshooting.md` | Common errors, FAQs |

---

## Key Concepts Quick Reference

| Term | Meaning |
|---|---|
| **DP** | Delivery Partner — the logistics company (FedEx, Delhivery, etc.) |
| **Scheme** | A service offering by a DP (standard delivery, express, etc.) |
| **Account** | A seller + scheme combination. Created when seller enables a scheme |
| **Standard Scheme** | Predefined, one-to-many (one scheme → many accounts) |
| **Custom Scheme** | Per-seller contract, one-to-one (one scheme → one account) |
| **`extension_id`** | Your extension's API key — used as DP identifier |
| **Assign DP event** | Webhook from OMS → extension when shipment is ready for DP |
| **Cancel DP event** | Webhook from OMS → extension when shipment is cancelled |
| **`dp_assigned` status** | Status extension sends back to OMS after accepting shipment |

---

## Two Critical Webhook Events

```js
webhook_config: {
  api_path: '/api/webhook-events',
  notification_email: 'you@company.com',
  event_map: {
    'application/courier-partners/assign': {
      handler: handleAssignShipment,
      version: '1',
    },
    'application/courier-partners/cancel': {
      handler: handleCancelShipment,
      version: '1',
    },
  },
}
```
