# Logistics Extension — Scheme

## What Is a Scheme?

A scheme is a DP's service offering — e.g., "surface delivery up to 5kg", "air express". Schemes are unique per extension and define capabilities, weight limits, transport type, and serviceability.

> Sellers subscribe to schemes. Each seller × scheme = one **Account**.

## Standard vs Custom Schemes

| Type | Use Case | Relationship |
|------|----------|--------------|
| **Standard** | General services for all sellers | One scheme → many accounts |
| **Custom** | Private contracts between seller and DP | One scheme → one account |

**Standard:** Predefined plans. Seller subscribes, all capabilities are inherited automatically.

**Custom:** Built for enterprise sellers with negotiated contracts. The extension UI lets the seller create a scheme, and an account is created behind the scenes via Platform APIs. Use your own internal APIs to validate credentials and prefill serviceability/TAT.

## Scheme API

- **Create:** [`createCourierPartnerScheme`](https://docs.fynd.com/partners/commerce/sdk/latest/partner/logistics#createCourierPartnerScheme)
- **Update:** [`updateCourierPartnerScheme`](https://docs.fynd.com/partners/commerce/sdk/latest/partner/logistics#updateCourierPartnerScheme)

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `delivery_type` | String | `standard`, `hyperlocal`, `sdd` (same-day), `ndd` (next-day) |
| `extension_id` | String | Extension API key |
| `feature` | Object | Capability flags (see below) |
| `name` | String | Human-readable service name |
| `payment_mode` | Array | `["prepaid"]`, `["COD"]`, or `["prepaid", "COD"]` |
| `region` | String | `intra-city`, `inter-city`, `inter-state`, `inter-country` |
| `scheme_id` | String | Unique ID you assign |
| `stage` | String | `enabled` or `disabled` |
| `transport_type` | String | `surface`, `air`, `waterways` |
| `weight` | Object | `{ gte, lte }` — dead weight limits |
| `volumetric_weight` | Object | `{ gte, lte }` — volumetric weight limits |

### Weight Range Keys

| Key | Meaning |
|-----|---------|
| `gt` | greater than |
| `gte` | greater than or equal to |
| `lt` | less than |
| `lte` | less than or equal to |

### Feature Flags

| Flag | Type | Description |
|------|------|-------------|
| `doorstep_qc` | Boolean | Quality check at customer doorstep for returns |
| `doorstep_return` | Boolean | DP accepts return at delivery point if customer rejects |
| `doorstep_exchange` | Boolean | Exchange at doorstep |
| `mps` | Boolean | Multi-Piece Shipment — multiple parcels under one tracking number |
| `ewaybill` | Boolean | Supports e-way bill (India GST, goods > ₹50,000) |
| `qr` | Boolean | DP provides QR code for payment collection at delivery |
| `ndr_attempts` | Number | Re-delivery attempts after first failed delivery |
| `cold_storage_goods` | Boolean | Refrigerated goods |
| `dangerous_goods` | Boolean | Hazardous/regulated items |
| `fragile_goods` | Boolean | Fragile handling |
| `restricted_goods` | Boolean | Regulated goods |
| `openbox_delivery` | Boolean | Package opened in front of customer on delivery |
| `product_installation` | Boolean | Installation service at delivery |
| `status_updates` | Boolean | DP provides real-time status push |
| `single_pick_multi_drop` | Boolean | One pickup, many delivery points |
| `multi_pick_single_drop` | Boolean | Many pickups, one delivery point |
| `multi_pick_multi_drop` | Boolean | Many pickups, many delivery points |

## Serviceability

Tells the platform which pincodes/regions the scheme can serve. Without serviceability data, the scheme won't receive order assignments.

**Steps:**
1. [`getCountries`](https://docs.fynd.com/partners/commerce/sdk/latest/partner/logistics#getCountries) — get country hierarchy
2. [`sampleFileServiceability`](https://docs.fynd.com/partners/commerce/sdk/latest/partner/logistics#sampleFileServiceability) — download CSV template (`type=serviceability`)
3. Fill CSV with pincode/state/city data
4. Upload file to CDN: `startUpload` → PUT data → `completeUpload` (filestorage SDK)
5. [`bulkServiceability`](https://docs.fynd.com/partners/commerce/sdk/latest/partner/logistics#bulkServiceability) — submit CDN URL
6. [`getSampleFileServiceabilityStatus`](https://docs.fynd.com/partners/commerce/sdk/latest/partner/logistics#getSampleFileServiceabilityStatus) — poll status

Upload body: `file_path` (CDN URL), `country`, `action` (`import`/`export`), `region` (`pincode`/`state`/`city`)

## TAT (Turn Around Time)

Defines estimated delivery timelines per region. Used to show delivery date estimates on PDP, cart, and checkout.

Same process as serviceability — use `type=TAT` for the sample file download:
- [`sampleFileServiceability`](https://docs.fynd.com/partners/commerce/sdk/latest/partner/logistics#sampleFileServiceability) with `type=TAT`
- [`bulkServiceability`](https://docs.fynd.com/partners/commerce/sdk/latest/partner/logistics#bulkServiceability) to upload
- [`getBulkTat`](https://docs.fynd.com/partners/commerce/sdk/latest/partner/logistics#getBulkTat) for upload history

## File Upload Pattern (CDN)

Used for serviceability CSVs, TAT CSVs, QC images, POD images, labels, invoices:

```js
// 1. Start upload
const startRes = await partnerClient.filestorage.startUpload({ body: { ... } });

// 2. PUT file to the returned URL
await fetch(startRes.upload.url, { method: 'PUT', body: fileBuffer });

// 3. Complete upload — returns cdn.url
const completeRes = await partnerClient.filestorage.completeUpload({ body: { ... } });
```
