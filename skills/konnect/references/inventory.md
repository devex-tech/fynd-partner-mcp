# Konnect — Inventory

## Overview

Konnect provides three inventory management tools:

| Tool | Purpose |
|------|---------|
| **Inventory Sync** | Real-time stock updates pushed to channels via API |
| **Inventory Reconciliation** | Compare Fynd stock vs channel-reported stock, resolve gaps |
| **Inventory Snapshots** | Audit trail of all inventory updates — review, verify, troubleshoot |

---

## 1. Update Inventory (API)

Push real-time stock levels to Fynd Commerce for one or more SKUs across locations.

**Endpoint:** `PUT /ims/v3/inventory`  
**Max records per request:** 500  
**Auth:** `x-access-token` header

### Key Rules
- `quantity > 0` → SKU is in stock
- `quantity = 0` → stock-out (product hidden from channel)
- Negative quantities are **not supported**
- Use **delta updates** (only changed quantities) to minimize data load

### Best Practices
- Schedule at least **once daily** for real-time accuracy
- Use delta updates — only send changed SKUs, not full catalog
- Combine with `GET /ims/v3/listings/count` to verify totals before bulk updates
- Schedule updates at consistent intervals aligned with your ERP sync cycle

---

## 2. Inventory Reconciliation

Compares the sellable inventory in Fynd Commerce against the inventory reported by each channel. Identifies and helps resolve mismatches.

**Navigate:** Products → Inventory Reconciliation

### Why It Matters
- **Prevent Overselling** — catch channels showing more stock than available
- **Avoid Underselling** — catch channels showing less stock, missing potential sales
- **Maintain Trust** — reduces cancellations, refunds, disputes
- **Data Consistency** — spot slow sync or data errors early

### How to Use
1. Go to **Products → Inventory Reconciliation**
2. Select **Channel & Account** (e.g., FirstCry → FirstCry-Superdry)
3. Select **Locations** to include
4. Generate reconciliation details
5. Review discrepancies — Konnect shows side-by-side comparison
6. Take action: push corrected inventory, deactivate mismatched products, or investigate the gap

### Reconciliation Fields

| Field | Description |
|-------|-------------|
| Seller Identifier | Your Fynd Commerce SKU/EAN |
| Channel Identifier | How the channel identifies this product |
| Fynd Sellable Qty | Current stock in Fynd Commerce |
| Channel Reported Qty | What the channel currently shows |
| Discrepancy | The difference |
| Buffer Applied | Buffer stock deducted |

---

## 3. Inventory Snapshots

A full audit trail of inventory flows — from supply channels (ERP/WMS) through Fynd Commerce to demand channels (marketplaces/webstores).

**Navigate:** Products → Inventory Snapshots

### Two Panels

**Overview Panel:**
- End-to-end timeline of inventory updates
- Shows: initial inventory received → Fynd Commerce updates → final inventory pushed to channels
- Customize view via **Column Selector** (filter by channel, buffer stock, inventory, status)

**Reports Panel:**
- Aggregated inventory reports by date or product
- Access historical API call records and discrepancy data
- Use for audits and troubleshooting

### What Snapshots Show
- When inventory was sent or received
- Which API calls were made and their results
- Buffer stock applied per location
- Product status at the time of update
- Any discrepancies between systems

### Use Cases
- Audit why a specific SKU went out of stock on a channel
- Verify that a bulk inventory update was processed correctly
- Troubleshoot overselling incidents — trace the exact update timeline
- Regulatory or financial auditing of stock movements

---

## Buffer Stock Priority

Published inventory = Fynd Commerce sellable qty − buffer

Priority order (highest to lowest):
1. **Product-level buffer** (set in Channel Mapping)
2. **Location-level buffer** (set in Locations panel)
3. **Account-level buffer** (set during channel configuration)

---

## Inventory Sync Flow

```
ERP/WMS pushes stock → PUT /ims/v3/inventory
        ↓
Fynd Commerce updates sellable qty
        ↓
Buffer stock applied per location/product
        ↓
Channel receives updated inventory
        ↓
Snapshot recorded in Inventory Snapshots
```
