# Konnect — Channels

## What Is a Channel?

A channel is any platform or system connected to Konnect — marketplaces (Amazon, AJIO), webstores, ERP/WMS (Unicommerce, SAP), POS (Ginesys), or custom integrations.

**Navigate:** Left-hand nav → **Channels** → **All Channels**

---

## Channel Status Labels

| Status | Meaning |
|--------|---------|
| **Live** | Available to configure — click **Configure** to start |
| **Configured** | Already connected — click **Configure** to add accounts or edit |
| **Upcoming** | Not yet available — contact Konnect support for updates |

---

## Two Auth Types

### Company Auth
One set of credentials authenticates across **all stores** in the company.

- Best for: brands with centralized operations, same vendor code across all stores
- One credential → manages multiple locations
- `locationCode` becomes mandatory in order APIs when using company-level auth

### Store Auth
Each store authenticates with its **own credentials**.

- Best for: franchises or locations with independent accounts, different vendor codes per store
- Each location requires separate credential validation

---

## Configuring a Channel — Company Auth

**Channels → All Channels → Configure**

### Step 1: Account Details

| Field | Notes |
|-------|-------|
| **Account Name** | Unique name — **cannot be changed** after creation |
| **Order Sync** | Toggle on + set start date (orders before this date won't sync) |
| **Return Sync** | Toggle on + set start date for return syncing |
| **Product Mapping** | Sync product attributes (SKUs, titles, descriptions) |
| **Inventory Sync** | Real-time stock level updates |
| **Inventory Reconciliation** | Auto-detect and resolve stock mismatches |
| **Shipping Type** | Pre-populated: Ship by Marketplace or Ship by Seller |

### Step 2: Configure Locations
1. Validate company-level credentials
2. Konnect fetches all locations for the company
3. Enter **Channel Location ID** for each location (the channel's identifier for your warehouse)
4. Use **Apply to All** to map all locations to one channel location (⚠️ irreversible — consolidates all inventory to one location)
5. Toggle each location **Active/Inactive**
6. Use **Bulk Edit** for mass updates

### Step 3: Submit
Click **Submit** → channel appears in **Configured Channels**

---

## Configuring a Channel — Store Auth

**Channels → All Channels → Configure**

### Step 1: Account Details
Same fields as Company Auth (Account Name, Order Sync, Return Sync, Product Mapping, Inventory Sync, Inventory Reconciliation, Shipping Type).

### Step 2: Configure Locations
Each location row shows: Location Name, Location Code, Credentials, Channel Identifiers, Status.

For each location:
1. Click **Add** under Credentials → enter store-specific credentials → **Validate**
2. Add required **Channel Identifiers** (channel's identifier for this physical location)
3. Toggle **Status** to Active
4. Use **Bulk Edit** for mass credential/identifier updates

### Step 3: Submit
Click **Submit** → channel live under **Configured Channels**

---

## Editing a Configured Channel

**Channels → Configured Channels → Edit**

You can modify:
- **Account Details tab:** Order Sync date, Return Sync date, Product Mapping, Inventory Sync, Inventory Reconciliation toggles
- **Locations tab:** Remap Channel Location ID / Channel Identifiers, set Buffer Stock, toggle location Active/Inactive
- **Account toggle (top-right):** Inactivate the entire account

Click **Submit** to save changes.

---

## Supported Channels

### Marketplaces & Webstores
Amazon, AJIO, Meesho, Flipkart, FirstCry, Limeroad, Shopee, Trendyol, Google LIA, Nykaa, TataCliq, JioMart, Myntra

### ERP / WMS (Live)
Browntape, EasyEcom, Eshopbox, Increff, OMSGuru, Unicommerce, Vinculum, Microsoft Dynamics 365 (custom API), SAP (custom API), Tally ERP (custom API)

### ERP / WMS (Coming Soon)
Edgistify, ElitesEcom, Revalsys, VasyERP

### POS
Ginesys

---

## Buffer Stock Hierarchy

When calculating how much inventory to publish to a channel:

1. **Product-level buffer** (set in Channel Mapping) — takes priority
2. **Location-level buffer** (set in Locations panel) — used if no product buffer
3. **Account-level buffer** (set during channel config) — fallback

> Published inventory = Fynd Commerce sellable qty − applicable buffer
