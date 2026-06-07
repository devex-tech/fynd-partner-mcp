# Konnect — ERP/WMS Integration

## Overview

ERP/WMS systems integrate with Konnect via REST APIs to manage catalog, inventory, pricing, orders, and returns. The integration is bidirectional:

- **Inbound (ERP → Konnect):** Push inventory, pricing, catalog, order status updates
- **Outbound (Konnect → ERP):** Pull orders, returns, shipment data

---

## Live Partner Channels

| Partner | Type | Capabilities |
|---------|------|-------------|
| **Unicommerce** | WMS / OMS | Multi-channel orders, returns, inventory, warehouse management |
| **Vinculum** | WMS | Product listings, orders, multi-warehouse, returns |
| **Browntape** | WMS | Marketplace order syncing, inventory control |
| **EasyEcom** | OMS | Multichannel order routing, returns, inventory |
| **Eshopbox** | Fulfillment / WMS | End-to-end fulfillment, inventory, warehousing, returns |
| **Increff** | WMS | Inventory management, omnichannel fulfillment |
| **OMSGuru** | OMS | Multi-channel orders, returns, inventory |
| **SAP** | ERP | Enterprise resource planning via Konnect API suite |
| **Tally ERP** | ERP | Inventory + accounting via Konnect API suite |
| **Microsoft Dynamics 365** | ERP / OMS | Custom enterprise integration via Konnect APIs |

### Coming Soon
Edgistify, ElitesEcom, Revalsys, VasyERP

---

## Recommended Cron Polling Intervals

Use these industry-standard intervals when scheduling API calls to Fynd OMS:

| Operation | Recommended Interval | Notes |
|-----------|---------------------|-------|
| **Fetch new orders** (CREATED) | Every 15–30 minutes | Capture orders promptly |
| **Fetch confirmed orders** (CONFIRMED) | Every 15–30 minutes | Ready for invoice + packing |
| **Fetch processing orders** (PROCESSING) | Every 30–60 minutes | DP assigned, preparing dispatch |
| **Fetch returns** (RETURN_DELIVERED) | Every 30–60 minutes | Returns at warehouse |
| **Inventory update** (PUT /ims/v3/inventory) | At least once daily | Delta updates preferred |
| **Pricing update** (PUT /ims/v3/price) | As needed / daily | Sync with ERP price changes |

> Always use **delta updates** for inventory — send only changed quantities, not the full catalog.

---

## Webhook / Order Events

Konnect supports webhook-based order event delivery for ERP/WMS integrations:

### Supported Events

| Event Category | Event Types |
|----------------|------------|
| Order Created | New order placed |
| Order Confirmed | Order confirmation processed |
| Order Packed | Order packed and ready for dispatch |
| Order Dispatched | Courier picked up order |
| Order Delivered | Order delivered to customer |
| Order Cancelled | Order canceled |
| Return Initiated | Customer return started |
| Return Delivered | Return received at warehouse |
| RTO Initiated | Return-to-origin started |
| RTO Delivered | RTO received at seller warehouse |

Configure webhook endpoints in the channel settings to receive real-time push notifications instead of polling.

---

## Integration Architecture

```
ERP/WMS System
      ↕
Konnect REST APIs
      ↕
Fynd Commerce (OMS / Catalog / Inventory)
      ↕
Marketplaces / Webstores / Channels
```

**Auth flow:**
1. ERP generates access token: `GET /aggregator/v1/token` using Konnect credentials
2. Store token for all subsequent calls
3. Refresh token when expired

**Typical integration sequence:**
1. Push catalog / product data (`POST /v3/catalog/product`)
2. Push initial inventory (`PUT /ims/v3/inventory`)
3. Push pricing (`PUT /ims/v3/price`)
4. Poll for new orders (`GET /oms/v3/shipment?orderStatus=CREATED`)
5. Confirm + invoice → pack → dispatch
6. Poll for returns (`GET /oms/v3/shipment?orderStatus=RETURN_DELIVERED`)
7. Process QC → issue credit note

---

## API Best Practices

| Practice | Detail |
|----------|--------|
| **Batch size** | Max 500 for catalog/inventory/pricing; max 20 for order operations |
| **Delta inventory** | Only send changed SKUs, not full catalog |
| **LocationCode** | Always provide when using company-level auth for order APIs |
| **Error handling** | Check response for partial failures; retry failed records only |
| **Token refresh** | Implement automatic token refresh before expiry |
| **Rate limiting** | Respect max records per request; use pagination for large datasets |
| **Idempotency** | Use unique order IDs; don't double-confirm or double-invoice |
| **Pre-cancel check** | Always check `orderStatus` before packing — cancel before pack |

---

## Selling Locations

All stores/warehouses must be set up in Fynd Commerce and will appear in Konnect's Locations panel.

**Navigate:** Location (left nav)

**Per location, you can configure:**
- **Channel Location ID** — the external channel's identifier for this store
- **Buffer Stock** — override account-level buffer at location level
- **Account Status** — toggle active/inactive per channel per location

**Buffer priority:** Product-level > Location-level > Account-level
