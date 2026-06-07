# Konnect — Products & Channel Mapping

## Overview

The **Unified Products Panel** is where you map Fynd Commerce SKUs to channel-specific identifiers and manage inventory visibility per channel.

**Navigate:** Products → Channel Mapping

> Prerequisites: Channels must be configured and locations set up in Fynd Commerce before mapping.

---

## Channel Mapping

Channel Mapping links your Fynd Commerce **Seller Identifiers** to each channel's product codes. Without this mapping, inventory won't sync and orders can't be processed.

### Supported Seller Identifiers

| Identifier | Description |
|-----------|-------------|
| **SKU** | Internal stock keeping unit |
| **EAN** | European Article Number (13-digit) |
| **ALU** | Alternative Lookup (POS/custom systems) |
| **UPC** | Universal Product Code (12-digit, North America) |
| **ISBN** | International Standard Book Number (books) |

### Default Columns

| Column | Description |
|--------|-------------|
| Product Name | As it appears in Fynd Commerce |
| Seller Identifier | SKU/EAN/ALU/UPC/ISBN from Fynd Commerce |
| Size | Each variant shown as a separate row |
| Item Code | Unique code for inventory tracking in Fynd Commerce |
| Status | Active/Inactive at company level in Fynd Commerce |

### Channel-Specific Columns (via Column Selector)

After selecting Channel Type/Channels/Accounts, new columns appear:

| Column | Description |
|--------|-------------|
| **Channel Identifier** | The product code used on that specific channel |
| **Buffer Stock** | Qty withheld from channel to prevent overselling. E.g., stock=50, buffer=10 → channel sees 40 |
| **Channel Status** | Toggle Active/Inactive per channel-account |

### Editing a Mapping
Click the **Action** button on a row to edit:
- **Channel Identifier** — must match what's configured on the external channel
- **Buffer Stock** — set to 0 to send full inventory
- **Channel Status** — toggle off to pause inventory updates for that product on that channel

---

## Bulk Mapping

For large catalogs — update hundreds of products at once via XLSX upload.

**Navigate:** Products → Channel Mapping → Bulk Map

### Steps
1. Select **Mapping Type:** Account Specific (one channel-account) or Universal (coming soon)
2. Select **Channel** and **Account**
3. Select **Sample Type:**
   - All Products
   - Mapped-Only
   - Unmapped-Only
4. Click **Download Sample File** — get pre-filled XLSX with current data
5. Fill in the template:

| Column | Description |
|--------|-------------|
| Product Name | Product display name |
| SKU / Seller Identifier | Fynd Commerce product code |
| Brand ID | Brand identifier for the channel |
| Item ID | Product-level unique ID (size-independent) |
| Item Code | Inventory tracking code in Fynd Commerce |
| Size | Variant dimension |
| Product Status | Active / Inactive on the channel |
| Channel Identifier | **Fill this** to map to the Seller Identifier |

6. Upload file → Konnect validates format, headers, data types
7. Click **Confirm** → mapping applied in bulk

### Handling Errors
- Missing mandatory columns → fix and re-upload
- Duplicate/conflicting rows → review highlighted errors, re-upload
- Don't add extra columns or rearrange headers — upload will fail

### Bulk Mapping History
**Channel Mapping → Kebab (⋮) → Bulk Mapping History**

Shows: Channel, Account, Products Mapped (mapped/total), Triggered By, Start/End Time, Status (In-Progress / Success / Failed / Partial Success)

Actions: Retry, Download processed file, View summary

---

## Auto-Map

Automatically maps Fynd Commerce products to channel-specific identifiers when SKUs already align.

**Navigate:** Products → Channel Mapping → Kebab (⋮) → Auto-Map Products

### Steps
1. Select Channel and Account
2. Verify no other auto-map job is running for that account
3. Konnect matches products automatically

### Important Notes
- Only available on supported channels (check channel-specific docs)
- Once auto-mapped, **Channel Identifier cannot be manually edited** — only Buffer Stock and Status remain editable
- Partial matches are possible — review Auto-Map History for unmapped products

### Auto-Map History
**Channel Mapping → Kebab (⋮) → Auto-Map History**

Shows: Channel, Account, Products Mapped, Triggered By, Start/End Timestamp, Status

For Partial Success or Failed: hover over status for details, use Retry option, download processed file

---

## Exporting Channel Mapping Data

**Channel Mapping → Kebab (⋮) → Export Data**

1. Apply filters (e.g., only "Amazon-Mumbai" or "Unicommerce-WH-01")
2. Select columns to include
3. Export generates a `.csv` or `.xlsx` file
4. Check **Export History** for status (Pending / Success / Failed)
5. Download the file when ready

> Exported file reflects only your current filters and column selections — verify table settings before exporting.
