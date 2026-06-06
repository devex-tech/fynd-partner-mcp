# Common Errors & Schema Validation

## HTTP Status Codes

| Code | Count in spec | Meaning | Most common cause |
|------|--------------|---------|-------------------|
| `400` | 288 ops | Bad Request | Invalid payload, missing required field, wrong type |
| `404` | 104 ops | Not Found | Wrong company_id, product_id, or resource doesn't exist |
| `422` | 18 ops | Unprocessable Entity | Schema valid but business rule violated |
| `401` | 3 ops | Unauthorized | Token expired or missing |
| `429` | 1 op | Too Many Requests | Rate limit hit |

---

## Common Error Response Schemas

### `ValidationError` / `ValidationErrors` (422)
```json
{
  "message": "Validation failed",
  "errors": [
    { "field": "name", "message": "name is required" }
  ]
}
```
**Fix**: Check every required field in the request body schema. The `errors` array tells you exactly which field failed.

### `BadRequestObjectGet` / `CommonError` (400)
```json
{
  "message": "...",
  "status": 400,
  "code": "..."
}
```
**Fix**: Re-read path params (company_id, application_id format — integers vs strings matter).

### `GenericError` / `NotFound` / `ErrorResponseSchema` (404)
```json
{
  "message": "Resource not found",
  "status": 404
}
```
**Fix**: Verify the resource ID exists for the given `company_id`. Application-level resources also require matching `application_id`.

---

## Schema Validation Patterns

### Path parameter types
- `company_id` → integer in path, but declared as `string` in many specs. Always pass as number.
- `application_id` → 24-char hex string (MongoDB ObjectId), e.g. `64aed475db2cfb5b8a9f623d`
- `brand_uid`, `product_id`, `category_uid` → integers

### Pagination parameters
Standard across all listing endpoints:
- `page_no` — 1-indexed, default 1
- `page_size` — items per page, default usually 10 or 12
- Response always includes a `page` object:
```json
{
  "page": {
    "current": 1,
    "has_next": true,
    "has_previous": false,
    "item_total": 150,
    "total": 15,
    "type": "number"
  }
}
```

### Request body content type
All `requestBody` endpoints expect `Content-Type: application/json`. No multipart unless explicitly stated (file upload endpoints use `filestorage`).

### Date/time format
ISO 8601 strings: `"2024-01-15T10:30:00.000Z"`

---

## Debugging Checklist

When an API call fails:

1. **401** → Token expired? Re-generate. Wrong `company_id`? Token is company-scoped.
2. **404** → Does the resource exist? Is `company_id` correct? For app-level APIs, does `application_id` belong to this company?
3. **400** → Check required path params and their types. Check JSON body for missing required fields.
4. **422** → Business rule violation. Read the `message` field carefully — it describes the constraint.
5. **Unexpected 500** → Check if the endpoint is in `deprecated/` — you may be hitting a removed version.

---

## Deprecated Endpoints

A `deprecated/` folder exists in the spec with older versions of: `logistic`, `content`, `filestorage`, `rewards`, `companyprofile`, `communication`, `partner`, `configuration`, `payment`, `order`.

If you get unexpected errors on these domains, confirm you're not using a path from the deprecated spec. Current paths use `/v1.0/` — deprecated ones may use `/v1.0/` too but with different schemas.
