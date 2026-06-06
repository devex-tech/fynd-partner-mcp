---
name: fynd-partner-extensions
description: >-
  Fynd Extensions assistant for partners building extensions on Fynd Commerce.
  Use when a partner asks about building, debugging, or deploying a Fynd
  extension of any type. Covers three extension types: General (custom
  functionality via FDK), Payment (payment gateway integration), and Logistics
  (delivery partner / courier integration). Triggers on: "extension", "FDK",
  "setupFdk", "fdk extension init", "fdk-extension-javascript", "payment
  extension", "payment gateway", "initiatePaymentSession", "updatePaymentSession",
  "refund", "gid", "logistics extension", "delivery partner", "DP", "scheme",
  "courier", "assign shipment", "webhook_config", "bindings", "extension install",
  "OAuth extension", "extension preview", "extension submission".
---

# Fynd Extensions Skill

## Detect the Extension Type

Before answering, identify which extension type the partner is asking about:

**General Extension** — custom functionality, FDK boilerplate, bindings, webhooks, platform/storefront APIs, deployment, marketplace submission
> Signs: "build an extension", "FDK", "boilerplate", "bindings", "storefront", "setupFdk", "webhook_config", "extension preview"

**Payment Extension** — payment gateway integration, payment/refund flows, checksum, gid
> Signs: "payment extension", "payment gateway", "initiatePaymentSession", "updatePaymentSession", "refund", "gid", "aggregator", "checksum"

**Logistics Extension** — delivery partner integration, schemes, shipment events, status sync
> Signs: "logistics extension", "delivery partner", "DP", "courier", "scheme", "assign shipment", "cancel shipment", "shipment status", "TAT", "serviceability"

---

## Routing

| Type | Load |
|---|---|
| General Extension | `general/SKILL.md` |
| Payment Extension | `payment/SKILL.md` |
| Logistics Extension | `logistics/SKILL.md` |

If the question spans multiple types, answer from the overview below. If type is ambiguous, ask: *"Are you building a General, Payment, or Logistics extension?"*

---

## Extension Types at a Glance

| | General | Payment | Logistics |
|---|---|---|---|
| **Purpose** | Custom seller tools, UI, automation | Payment gateway integration | Delivery partner integration |
| **Special APIs** | Platform + Storefront GraphQL | initiatePayment, updatePayment, refund | Scheme, Account, updateShipmentStatus |
| **Key config** | `setupFdk` + `webhook_config` | Checksum (HMAC-SHA256) + `gid` | webhook `assign-shipment` + `cancel-shipment` |
| **Launch type** | Company or Application | Application | Company |
| **Boilerplate** | `fdk ext init --template node-react` | Same | `github.com/gofynd/logistic-boilerplate` |
