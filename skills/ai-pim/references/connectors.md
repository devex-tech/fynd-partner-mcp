# AI PIM — Connectors

Connectors integrate AI PIM with external systems. Three types:

| Type | Direction | Purpose |
|------|-----------|---------|
| **Inbound** | External → AI PIM | Receive product data from SAP, Infibeam, or any system |
| **Outbound** | AI PIM → External | Push product events via webhook to your systems |
| **Mappers** | N/A (transform) | JS scripts that reshape outbound event payloads |

**Navigate:** Connectors tab → select Inbound / Outbound / Mappers

---

## Inbound Connectors

Inbound connectors let external systems push product data into AI PIM. Each connector generates a unique **app credential** (app ID + token) for authentication.

### Integration Types

| Type | Description |
|------|-------------|
| **SAP** | Receives SAP product, category, and tax payloads via type-specific endpoints |
| **Infibeam** | Ingests Infibeam category hierarchy |
| **Generic** | Accepts any JSON payload, transformed via JSONata expressions |

### Creating an Inbound Connector

**Connectors → Inbound → Create Inbound**

| Section | Field | Required | Notes |
|---------|-------|----------|-------|
| Info | Name | Yes | Unique within org |
| Info | Active | No | Default: enabled |
| Info | Sync to Production | No | If on, processed products go directly to PPD |
| Info | Integration Failure Threshold | No | Consecutive failures before alert fires (default: 1) |
| Alerts | Alert Type | Yes | Role / User Group / Members |
| Alerts | Members | Yes | User IDs to notify |
| Callback | URL | If callback set | HTTPS endpoint for failure notifications |
| Callback | Parameters / Headers / Cookies | No | Added to callback request |
| Multiple SKU | Flag | Yes | Enable if one payload = multiple SKUs |
| Multiple SKU | JSONata expression | If flag on | Extracts array of SKU objects from payload |
| Field Mapping | SKU Code | — | JSONata to extract primary identifier |
| Field Mapping | Category Tree ID | — | JSONata to extract category tree |
| Field Mapping | Parent-Child | — | JSONata + relationship ID |
| Field Mapping | Variant | — | Relationship ID + variant key JSONata |
| Field Mapping | Product Label | — | Map values from payload or assign fixed default |
| Attribute Alerts | Alert on value | No | Trigger alert when specific attribute value appears |
| Custom Error Fields | Field names | No | Extra fields included in error reports |

After creation, the **app credential (app ID + token)** is shown in the connector detail view. Share with the external system.

### Sending Product Data to an Inbound Connector

**Endpoint:**
```
POST {base_url}/service/public/catalog/v1.0/product/import
```

**Authentication headers:**
```
x-app-id: <app_id_from_connector>
x-app-token: <app_token_from_connector>
```

**Single-SKU payload:**
```json
{
  "sku": "PROD-001",
  "name": "Blue T-Shirt",
  "price": 499,
  "category": "apparel"
}
```

**Multi-SKU payload** (when `multiple_sku.flag = true`):
```json
{
  "items": [
    { "sku": "PROD-001", "name": "Blue T-Shirt", "price": 499 },
    { "sku": "PROD-002", "name": "Red T-Shirt", "price": 549 }
  ]
}
```
If `multiple_sku.jsonata = "items"`, AI PIM extracts the `items` array and processes each element separately.

**Response:**
```json
{
  "success": true,
  "total": 2,
  "message": "2 Products received and will be processed",
  "errors": []
}
```

### Product Processing Pipeline

| Stage | Meaning |
|-------|---------|
| **Pending** | Received, not yet picked up |
| **In Progress** | Currently processing |
| **Completed** | Successfully ingested |
| **Partial Complete** | Processed with non-critical errors |
| **Failed** | Processing failed — errors recorded on product record |

**Status** (separate from Stage):
- **Created** — first time this identifier was received
- **Updated** — re-send of an existing record

### Field Mapping (JSONata)
Mappings run **pre-script** (before transformation) or **post-script** (after). The JSONata expression is evaluated against the raw payload to extract the required value.

### Inbound API Reference
| Operation | Method + Path |
|-----------|--------------|
| Create connector | `POST /service/panel/integrations/v2.0/org/{orgId}/inbound` |
| List connectors | `GET /service/panel/integrations/v2.0/org/{orgId}/inbound` |
| Get connector | `GET /service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}` |
| Update connector | `PATCH /service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}` |
| Delete connector | `DELETE /service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}` |
| List external products | `GET /service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}/products` |
| Get product metadata | `GET /service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}/products/meta/{id}` |
| Start bulk export | `POST /service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}/bulk/export/{entity}` |
| Bulk export history | `GET /service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}/bulk/export/{entity}/history` |

---

## Outbound Connectors

Outbound connectors push AI PIM product events to external systems in real time.

### Integration Types

| Type | When to Use |
|------|------------|
| **Rest API** | Any HTTPS endpoint — your service, third-party, middleware |
| **Fynd Platform** | Push directly to a Fynd Platform store via SDK |

### Events (5 Categories × Create/Update/Delete)

| Category | Scope |
|----------|-------|
| Attribute | Organization |
| Category Mapping | Organization |
| Product | Company |
| Relationship Mapping | Organization |
| Template | Organization |

### Creating an Outbound Connector

**Connectors → Outbound → Create Outbound**

**Information:**
| Field | Required | Notes |
|-------|----------|-------|
| Name | Yes | Max 24 characters |
| Integration Type | Yes | Rest API or Fynd Platform |
| Alert Email | Yes | Receives failure notifications |

**Authorization — Rest API:**
| Field | Required | Notes |
|-------|----------|-------|
| Webhook URL | Yes | Valid HTTPS. Use Test button to verify |
| Custom Headers | No | Key-value pairs sent with every request |
| Enable HMAC Auth | No | Signs payload with HMAC-SHA256, digest in `x-cc-signature` header |

**Authorization — Fynd Platform:**
| Field | Required |
|-------|----------|
| Domain | Yes |
| Company ID | Yes |
| Platform Client ID | Yes |
| Platform Client Secret | Yes |
| Select Version | No (1.9.4 or 1.10) |

**Events section:** One tab per category. For each tab:
1. Toggle **Enable events** on
2. Check Create / Update / Delete
3. Optionally select a **Mapper**
4. Optionally add **Tags** (Product tab only — filters by product tags)

### Outbound Status

| Status | Meaning |
|--------|---------|
| **Active** | Delivering events |
| **Inactive** | Paused by user |
| **Blocked** | Auto-blocked after repeated failures — contact support |

### Outbound API Reference
| Operation | Method + Path |
|-----------|--------------|
| Get subscribers | `GET /service/panel/webhook/v1.0/company/{company_id}/subscriber` |
| Register subscriber | `POST /service/panel/webhook/v1.0/company/{company_id}/subscriber` |
| Update subscriber | `PUT /service/panel/webhook/v1.0/company/{company_id}/subscriber` |
| Get by extension ID | `GET /service/panel/webhook/v1.0/company/{company_id}/extension/{extension_id}/subscriber` |
| Get by subscriber ID | `GET /service/panel/webhook/v1.0/company/{company_id}/subscriber/{subscriber_id}` |
| Delete subscriber | `DELETE /service/panel/webhook/v1.0/org/{company_id}/subscriber/{subscriber_id}` |
| Get all events | `GET /service/panel/webhook/v1.0/company/{company_id}/events` |

---

## Mappers

A Mapper is a reusable JavaScript transformation unit. It reshapes, filters, or enriches outbound event payloads before delivery.

### Components

| Component | Format | Purpose |
|-----------|--------|---------|
| **Script** | JavaScript | `transform(eventData)` function → returns transformed output |
| **Header Mapping** | JSON object | Accessible via `ctx.getHeaderMapping()` — field name lookups, static config |
| **Value Mapping** | JSON object | Accessible via `ctx.getValueMapping()` — code translations |

### Script Template

```javascript
async function transform(eventData) {
  const HEADER_MAPPING = ctx.getHeaderMapping();
  const VALUE_MAPPING = ctx.getValueMapping();

  return {
    sku: eventData.product_data?.sku,
    name: eventData.product_data?.name,
    category: VALUE_MAPPING[eventData.product_data?.category_code]
      || eventData.product_data?.category_code,
  };
}
```

### Context API (`ctx`)

| Method | Return | Description |
|--------|--------|-------------|
| `ctx.getHeaderMapping()` | Object | Returns parsed Header Mapping JSON |
| `ctx.getValueMapping()` | Object | Returns parsed Value Mapping JSON |
| `ctx.getProducts(skus)` | Promise\<Array\> | Fetch product master data for SKU array |
| `ctx.getCategoryMapping(code)` | Promise\<string\> | Fetch category mapping by code |

### Available Libraries

| Variable | Library |
|----------|---------|
| `_` | Lodash (full) |
| `CryptoJS` | crypto-js (AES, SHA256, HMAC) |
| `axios.get(url, config)` | axios — GET only |
| `axios.post(url, config)` | axios — POST only |
| `jsonata` | JSONata expression engine |

> Execution timeout: **60 seconds**. Scripts run in isolated VM.

### Header Mapping Example
```json
{ "product_name": "title", "category_code": "type" }
```

### Value Mapping Example
```json
{ "IN": "India", "US": "United States" }
```

> UI auto base64-encodes Script, Header Mapping, and Value Mapping before sending to the API. Write plain JS/JSON in the editors.

### Creating a Mapper

**Connectors → Mappers → Create Mapping**
1. Enter Name
2. Write `transform` function in Script tab
3. Add Header Mapping / Value Mapping JSON
4. Test with sample event payload → verify output
5. Save — mapper is immediately available in Outbound connector dropdowns

### Mapper API Reference
| Operation | Method + Path |
|-----------|--------------|
| Create mapper | `POST /service/panel/webhook/v1.0/org/{orgId}/mapper` |
| List mappers | `GET /service/panel/webhook/v1.0/org/{orgId}/mapper` |
| Execute mapper | `POST /service/panel/webhook/v1.0/org/{orgId}/mapper/execute` |
| Update mapper | `PATCH /service/panel/webhook/v1.0/org/{orgId}/mapper/{id}` |
| Get mapper | `GET /service/panel/webhook/v1.0/org/{orgId}/mapper/{id}` |
| Delete mapper | `DELETE /service/panel/webhook/v1.0/org/{orgId}/mapper/{id}` |
