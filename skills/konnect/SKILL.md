---
name: fynd-partner/konnect
description: >-
  Skill for Fynd Konnect — the multi-channel commerce hub. Use when a Fynd
  partner asks about connecting marketplaces (Amazon, AJIO, Flipkart, Meesho),
  ERP/WMS (Unicommerce, SAP, Vinculum), POS, inventory sync, order management,
  product mapping, or the Konnect REST API. Covers setup, workflows, and full
  API reference.
---

# Fynd Konnect Skill

## What This Skill Covers

Fynd Konnect is a multi-channel commerce hub that connects Fynd Commerce with marketplaces, webstores, ERP/WMS, POS, and inventory systems — centralizing order management, inventory sync, pricing, and returns in one place.

## Mode Detection

| If the question is about... | Load |
|-----------------------------|------|
| What Konnect is, how it works, channel types | `references/overview.md` |
| Token generation, company vs location auth, environments | `references/auth.md` |
| Connecting a channel, company auth, store auth, onboarding steps | `references/channels.md` |
| Channel mapping, buffer stock, bulk mapping, auto-map | `references/products.md` |
| Inventory sync, reconciliation, snapshots, logs | `references/inventory.md` |
| Order lifecycle, statuses, ordering channels, order APIs | `references/orders.md` |
| Forward / RTO / return flows, self-ship logistics | `references/workflows.md` |
| All 31 API endpoints, request/response, rate limits | `references/api-reference.md` |
| ERP/WMS integration, partner systems, cron best practices, webhooks | `references/erp-wms.md` |

## Key Terms

| Term | Meaning |
|------|---------|
| **Channel** | A sales or supply platform connected to Konnect (marketplace, ERP, POS, etc.) |
| **Company Auth** | Single credential authenticates all stores in a company |
| **Store Auth** | Each store authenticates with its own credentials |
| **Channel Mapping** | Links Fynd Commerce SKU identifiers to channel-specific product codes |
| **Buffer Stock** | Reserved quantity withheld from a channel to prevent overselling |
| **Inventory Reconciliation** | Compares Fynd stock vs channel-reported stock, resolves gaps |
| **Ordering Channel** | The marketplace or platform where the customer placed the order |
| **Self-Ship** | Seller manages their own logistics (vs marketplace/Fynd-managed) |
| **AWB** | Air Waybill number — the courier tracking number |
| **Location Code** | Identifier for a specific store or warehouse in Konnect |
