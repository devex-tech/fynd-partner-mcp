# AI PIM — Products

## Three Product Environments

| Environment | Abbreviation | What It Is |
|-------------|-------------|------------|
| **Staged Product Data** | SPD | Active working area — SKUs being enriched, audited, reviewed |
| **Production Product Data** | PPD | Live SKUs synced to sales channels / storefronts |
| **Archived Product Data** | APD | Deleted SKUs, retained for 30 days before auto-purge |

Navigate: **Products** tab → select sub-tab (Staged / Production / Archived)

---

## What Is an SKU?

A Stock Keeping Unit (SKU) is a unique internal identifier for a product. It can be alphanumeric (e.g., `BLK-123`). SKUs are the core unit in AI PIM — everything (enrichment, tasks, publishing) operates on SKUs.

---

## SKU Lifecycle (SPD)

| Stage | Meaning | Who Is Involved |
|-------|---------|----------------|
| **Raw** | SKU exists but has no data | Catalog Manager |
| **Enrichment** | Product data being enhanced | Content Enrichment team |
| **Audit** | Quality check (starts once Enrichment is Done) | Audit team |
| **Production** | Ready to sync live after audit is Done | Catalog Manager |

### SKU Statuses
- **Pending** — Task created, not yet accepted
- **In Progress** — Team accepted and is working
- **In Query** — Team needs clarification
- **Rejected** — Task rejected
- **Done** — Task fully completed

> ⚠️ SKUs in **In Progress** status cannot be deleted or overridden by rules.

---

## Creating SKUs

### Single SKU
**Products → Staged Product Data → Add Product**

| Field | Required | Notes |
|-------|----------|-------|
| **SKU** | Yes | Unique alphanumeric code (e.g., `BLK-123`) |
| **Grouped SKU** | No | Groups related products (similar to item code) |
| **Category Tree Code** | Yes | Determines which template/attributes apply |
| **Product Label** | No | Searchable tag (e.g., `appearance`) |

### Bulk Import (XLSX)
**Staged Product Data → Bulk Options → Bulk SKU Data (Import)**

1. Select template → download sample XLSX
2. Fill rows: SKU, Category Tree Code, Last Node of Category, Grouped SKU (optional), Product Label (optional)
3. Upload file (≤10 MB) or via URL
4. Review Validation Summary → fix errors → Submit

### Bulk Update
1. Select SKUs → Export → Export SKU(s) → download XLSX
2. Edit rows, set `Command` column to `Update` or `Delete`
3. Re-import via Bulk SKU Data (Import)

---

## Updating an SKU

Click SKU in SPD → Product Details Panel (PDP) opens → edit fields → Save.

---

## Publishing to Production

1. Select SKUs in **Audit Done** stage
2. Ellipsis menu (•••) → **Sync to Production**
3. SKUs move to Production Product Data

---

## Production Product Data (PPD)

**Who can use:** Brand Admin, Brand Supervisor

**PPD view columns:** SKU, Category, Product Label, SKU Stage, SKU Status, Created On, Modified On, Attribute Values

**SKU detail page shows:** SKU Name, Category Mapping, Brand, Images, Mandatory/Other Attribute Values, SKU Details (stage/status/label/assigned to/last modified), Change Log

### Creating Variants (PPD only)
Prerequisites: All SKUs use **same template**, same **category** and **category tree**.
1. Click SKU → PDP → ellipsis (•••) → SKU Grouping → Add Relationship
2. Type: **Variant** → select Relationship (e.g., Color) → select SKUs → Create Relationship

### Creating Product Bundles (PPD only)
1. Click parent SKU → PDP → ellipsis → SKU Grouping → Add Relationship
2. Type: **Parent-Child** → select Relationship → select child SKUs → specify quantities → Create Relationship

### Bulk Update Product Labels (PPD)
Only Product Labels can be updated in bulk in Production:
1. Select SKUs → Export → Export SKU(s) → download XLSX
2. Bulk Options → Bulk SKU Product Label (Import) → fill Product Label column → Upload

### Deleting in PPD
Deleted from PPD still appear in SPD. Select SKUs → ellipsis → Delete SKU(s)

---

## Archived Product Data (APD)

- SKUs deleted from SPD appear here
- Auto-purged after **30 days**
- **Restore:** Select → ellipsis (•••) → Restore → confirm → SKU returns to SPD
- **Purge early:** Select → ellipsis → Purge SKU → confirm

---

## SKU Grouping / Relationships

Two relationship types:

| Type | Use Case |
|------|----------|
| **Variant** | Same product, different attributes (color, size) — e.g., Red/White/Black T-shirts |
| **Parent-Child** | Hierarchical — parent product + component/accessory children with quantities |

Create via: SKU PDP → ellipsis → SKU Grouping → Add Relationship
