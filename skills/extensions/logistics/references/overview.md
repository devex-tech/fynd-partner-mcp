# Logistics Extension — Overview

## What Is a Logistics Extension?

A Logistics Extension on Fynd Commerce integrates a third-party Delivery Partner (DP) into the Fynd ecosystem. It lets sellers choose from a range of DPs, manage fulfillment, and keep the Fynd OMS in sync with real-time shipment statuses.

> Logistics extensions are exclusively built by authorized Fynd Partners. Contact partner-support@fyndplatform.com for onboarding.

## Key Concepts

| Term | Meaning |
|------|---------|
| **DP (Delivery Partner)** | The logistics provider (e.g., BlueDart, Delhivery) whose services you are integrating |
| **Scheme** | A DP's service offering (e.g., surface delivery, air express). Unique per extension. Holds weight limits, features, transport type |
| **Account** | A seller × scheme combination. Created when a seller subscribes to a scheme. Tracks contracts and credentials |
| **OMS** | Fynd Order Management System — the source of truth for order states |

## Benefits for Sellers

- **Diverse DP options** — choose the right logistics partner for each use case
- **Varied delivery offerings** — standard, express, hyperlocal, same-day
- **Streamlined fulfillment** — automated order assignment via webhooks
- **Unified platform** — logistics stays in sync with catalog, OMS, payments

## High-Level Architecture

```
Seller installs extension → subscribes to a Scheme → Account created
        ↓
Order placed → OMS invokes → Assign DP webhook → Extension handles
        ↓
Extension assigns DP → sends dp_assigned status back to OMS
        ↓
DP picks up, delivers → Extension syncs status updates to OMS
        ↓
(Optional) Cancel DP webhook → Extension handles cancellation
```

## Extension Lifecycle

1. **Build** — set up boilerplate with FDK CLI (`fdk extension init` → select Logistics Extension)
2. **Scheme setup** — create schemes (services) with serviceability + TAT data
3. **Account creation** — handle seller onboarding, credential capture
4. **Webhook integration** — listen for Assign / Cancel shipment events
5. **Status sync** — push real-time shipment status updates to Fynd OMS
6. **Submit for review** — test → submit → Fynd review → live on marketplace

## Prerequisites

- Git + Node.js v22+
- Account on [Fynd Partners](https://partners.fynd.com)
- Development Company created in Partners panel

## Next Steps

- [Setup & development](./development.md)
- [Scheme types](./scheme.md)
- [Order journey flows](./order-journey.md)
- [Architecture deep dive](./architecture.md)
