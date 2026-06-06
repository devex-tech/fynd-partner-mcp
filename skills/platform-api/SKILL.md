---
name: fynd-partner-platform-api
description: >-
  Fynd Platform API assistant for partners. Use when a Fynd partner asks about
  Platform REST APIs — finding the right endpoint, understanding parameters,
  debugging a failing call, auth setup, or getting starter code. Covers all
  843 operations across catalog, orders, payment, cart, content, logistic,
  user, communication, configuration, theme, and more. Triggers on: "which
  API", "platform API", "endpoint for", "fynd API", "company_id", "operationId",
  "access_token", "PlatformClient", "401 from fynd", "400 from fynd", any
  mention of a Fynd SDK class name (Catalog, Order, Payment, Cart, etc.).
---

# Fynd Platform API Skill

## Modes

Detect which mode the partner needs before answering:

**Discovery** — partner describes a use case in plain English and needs the right API.
> Signs: "how do I", "which API", "I want to", "find me an endpoint"

**Debug** — partner has a failing call and needs to know why.
> Signs: "getting 400/401/404/422", "error from", "not working", shares a payload or curl

---

## Mode: Discovery

1. Read `references/api-index.md` — find the domain and operationId that matches the use case.
2. If the match is in a large domain (catalog, content, logistic, orders, payment, cart), read the relevant domain file for full parameter and schema detail.
3. Respond with:
   - **Endpoint**: `METHOD /service/platform/{domain}/v1.0/company/{company_id}/...`
   - **operationId** and SDK call: `platformClient.{SdkClass}.{operationId}(...)`
   - **Required params**: list path + required query params with types
   - **Auth**: point to `references/auth.md` if they haven't set up auth yet
   - **Starter code snippet**: minimal working curl or JS/Python SDK call

### SDK call pattern (JavaScript)
```javascript
const { PlatformClient, PlatformConfig } = require("fdk-client-javascript");
const config = new PlatformConfig({ companyId: 1, apiKey: "...", apiSecret: "..." });
const client = new PlatformClient(config);

// Example: list products
const result = await client.catalog.getProducts({ pageNo: 1, pageSize: 20 });
```

### SDK call pattern (Python)
```python
from fdk_client.platform import PlatformClient, PlatformConfig
config = PlatformConfig(company_id=1, api_key="...", api_secret="...")
client = PlatformClient(config)

# Example: list products
result = client.catalog.get_products(page_no=1, page_size=20)
```

---

## Mode: Debug

1. Identify the HTTP status code and the endpoint being called.
2. Read `references/common-errors.md` for the error pattern.
3. If the error is schema/payload related, read the domain file for the operation's parameter list and request body schema.
4. Produce a specific diff: "your payload has X, the schema requires Y" — not a generic suggestion.

Common patterns:
- **401** → token expired or wrong company. Read `references/auth.md`.
- **404** → wrong resource ID or mismatched company_id / application_id.
- **400/422** → missing required field, wrong type, or business rule. Check the operation's parameters section.

---

## Reference Files

Load these on demand — don't load all at once:

| File | When to load |
|------|-------------|
| `references/api-index.md` | Always for discovery — fast domain+op lookup |
| `references/auth.md` | Auth setup questions or 401 errors |
| `references/catalog.md` | Catalog domain detail (162 ops) |
| `references/content.md` | Content/CMS detail (122 ops) |
| `references/logistic.md` | Serviceability/courier detail (84 ops) |
| `references/cart.md` | Cart detail (70 ops) |
| `references/orders.md` | Orders detail (74 ops) |
| `references/payment.md` | Payment detail (54 ops) |
| `references/communication.md` | Communication detail (62 ops) |
| `references/configuration.md` | Configuration detail (43 ops) |
| `references/user.md` | User/customer detail (38 ops) |
| `references/other-domains.md` | Theme, billing, webhook, discount, filestorage, etc. |
| `references/common-errors.md` | Any error debugging |
