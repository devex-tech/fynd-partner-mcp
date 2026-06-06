# AI PIM — API Reference

**Base URL:** `https://api.aipim.fynd.com`

**Panel API prefix:** `/service/panel/`

**Authentication:** `cc.session` cookie (Panel APIs) or Bearer token in `Authorization` header.
See `auth.md` for full details.

---

## API Groups Summary

| Group | Ops | Base Path |
|-------|-----|-----------|
| Inbound | 9 | `/service/panel/integrations/v2.0/org/{orgId}/inbound` |
| Outbound (Subscribers) | 7 | `/service/panel/webhook/v1.0/company/{company_id}/subscriber` |
| Mapper | 6 | `/service/panel/webhook/v1.0/org/{orgId}/mapper` |
| Attribute | 6 | `/service/panel/templates/v1.0/org/{orgId}/attribute` |
| Category | 5 | `/service/panel/templates/v1.0/org/{orgId}/category` |
| Category Tree / Mapping | 11 | `/service/panel/templates/v1.0/org/{orgId}/category/mapping` |
| Template | 6 | `/service/panel/templates/v1.0/org/{orgId}/template` |
| **Total** | **50** | |

---

## 1. Inbound Connectors

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/service/panel/integrations/v2.0/org/{orgId}/inbound` | Create an Inbound Connector |
| `GET` | `/service/panel/integrations/v2.0/org/{orgId}/inbound` | List Inbound Connectors |
| `GET` | `/service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}` | Get Inbound Connector by ID |
| `PATCH` | `/service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}` | Update Inbound Connector |
| `DELETE` | `/service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}` | Delete Inbound Connector |
| `GET` | `/service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}/products` | List External Products |
| `GET` | `/service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}/products/meta/{id}` | Get Product Metadata |
| `POST` | `/service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}/bulk/export/{entity}` | Start Bulk Export |
| `GET` | `/service/panel/integrations/v2.0/org/{orgId}/inbound/{inboundId}/bulk/export/{entity}/history` | Get Bulk Export History |

**Data Push Endpoint (Public, not Panel):**
```
POST {base_url}/service/public/catalog/v1.0/product/import
Headers: x-app-id, x-app-token
```

---

## 2. Outbound (Subscribers + Events)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/service/panel/webhook/v1.0/company/{company_id}/subscriber` | Get Subscribers By Company ID |
| `POST` | `/service/panel/webhook/v1.0/company/{company_id}/subscriber` | Register Subscriber |
| `PUT` | `/service/panel/webhook/v1.0/company/{company_id}/subscriber` | Update Subscriber |
| `GET` | `/service/panel/webhook/v1.0/company/{company_id}/extension/{extension_id}/subscriber` | Get Subscribers By Extension ID |
| `GET` | `/service/panel/webhook/v1.0/company/{company_id}/subscriber/{subscriber_id}` | Get Subscriber By Subscriber ID |
| `DELETE` | `/service/panel/webhook/v1.0/org/{company_id}/subscriber/{subscriber_id}` | Delete Subscriber |
| `GET` | `/service/panel/webhook/v1.0/company/{company_id}/events` | Get All Webhook Events |

---

## 3. Mapper

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/service/panel/webhook/v1.0/org/{orgId}/mapper` | Create a Mapper |
| `GET` | `/service/panel/webhook/v1.0/org/{orgId}/mapper` | List Mappers |
| `POST` | `/service/panel/webhook/v1.0/org/{orgId}/mapper/execute` | Execute a Mapper |
| `GET` | `/service/panel/webhook/v1.0/org/{orgId}/mapper/{id}` | Get Mapper Details |
| `PATCH` | `/service/panel/webhook/v1.0/org/{orgId}/mapper/{id}` | Update a Mapper |
| `DELETE` | `/service/panel/webhook/v1.0/org/{orgId}/mapper/{id}` | Delete a Mapper |

---

## 4. Attribute

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/attribute` | Get all attributes |
| `POST` | `/service/panel/templates/v1.0/org/{orgId}/attribute` | Create a new attribute |
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/attribute/tags` | Get all attribute tags |
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/attribute/{id}` | Get an attribute by ID |
| `PATCH` | `/service/panel/templates/v1.0/org/{orgId}/attribute/{id}` | Update an attribute by ID |
| `DELETE` | `/service/panel/templates/v1.0/org/{orgId}/attribute/{id}` | Delete an attribute by ID |

---

## 5. Category

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/category` | Get all categories |
| `POST` | `/service/panel/templates/v1.0/org/{orgId}/category` | Create a new category |
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/category/{id}` | Get a category by ID |
| `PATCH` | `/service/panel/templates/v1.0/org/{orgId}/category/{id}` | Update a category by ID |
| `DELETE` | `/service/panel/templates/v1.0/org/{orgId}/category/{id}` | Delete a category by ID |

---

## 6. Category Mapping (Category Tree)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping` | Get all category mappings |
| `POST` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping` | Create a new category mapping |
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping/template` | Get categories mapped to a specific template |
| `POST` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping/bulk` | Get category mappings by codes in bulk |
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping/template-details` | Get template details for given mapping codes |
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping/code/{code}` | Get category mapping by code |
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping/{id}` | Get category mapping by ID |
| `PATCH` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping/{id}` | Update category mapping by ID |
| `DELETE` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping/{id}` | Delete category mapping by ID |
| `POST` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping/map/template` | Bulk map category mappings to a template |
| `POST` | `/service/panel/templates/v1.0/org/{orgId}/category/mapping/unmap/template` | Bulk unmap category mappings from a template |

---

## 7. Template

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/template` | List all templates |
| `POST` | `/service/panel/templates/v1.0/org/{orgId}/template` | Create a new template |
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/template/{id}` | Get template by ID |
| `PATCH` | `/service/panel/templates/v1.0/org/{orgId}/template/{id}` | Update template by ID |
| `DELETE` | `/service/panel/templates/v1.0/org/{orgId}/template/{id}` | Delete template by ID |
| `GET` | `/service/panel/templates/v1.0/org/{orgId}/template/validation/{id}` | Validate template completeness |

---

## URL Parameters

| Parameter | Description |
|-----------|-------------|
| `{orgId}` | Your AI PIM organization ID |
| `{company_id}` | Company ID (for outbound/webhook APIs) |
| `{inboundId}` | Inbound connector ID |
| `{id}` | Resource ID (attribute, category, template, mapper, etc.) |
| `{entity}` | Export entity type (e.g., `products`) |
| `{extension_id}` | Extension ID for outbound subscriber lookup |
| `{subscriber_id}` | Outbound subscriber ID |
| `{code}` | Category mapping code |

---

## Common Response Patterns

**Success (list):**
```json
{ "items": [...], "page": { "item_total": 10, "current": 1, "size": 20, "has_next": false } }
```

**Success (single):**
```json
{ "id": "...", ... }
```

**Inbound push success:**
```json
{ "success": true, "total": 3, "message": "3 Products received and will be processed", "errors": [] }
```

**Error (400):**
```json
{ "message": "Validation error", "errors": [{ "field": "name", "message": "Required" }] }
```
