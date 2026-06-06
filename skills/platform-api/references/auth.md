# Auth — Fynd Platform API

## Overview

All Platform API calls require a Bearer token obtained via OAuth 2.0 `client_credentials` flow. Tokens are **company-scoped**: one token per company, valid ~1 hour.

Two contexts:
- **Extension development**: implement OAuth so companies that install your extension grant access → you get a token per installing company.
- **Direct integration**: generate a token yourself from dashboard credentials (below).

---

## Getting Credentials

1. Fynd Commerce dashboard → your company → **Settings → Developers → Clients**
2. Note your `client_id` and `client_secret`

---

## Token Generation

```bash
# Step 1 – base64 encode credentials
base64TokenString=$(echo -n "<client_id>:<client_secret>" | base64)

# Step 2 – request token
curl -X POST "https://api.fynd.com/service/panel/authentication/v1.0/company/{company_id}/oauth/token" \
  -H "Authorization: Basic <base64TokenString>" \
  -H "Content-Type: application/json" \
  -d '{"grant_type":"client_credentials"}'
```

**Response:**
```json
{
  "access_token": "oa-12345fb123456b2ce111f43cdb55fd317def1234",
  "token_type": "Bearer",
  "expires_in": 3599,
  "expires_at": 1759834568.805,
  "scope": ["company/*", "company/application/*"]
}
```

Token lifetime: `expires_in` seconds (~3600). Cache and refresh before expiry.

---

## Using the Token

```bash
curl -X GET "https://api.fynd.com/service/platform/catalog/v1.0/company/{company_id}/products/" \
  -H "Authorization: Bearer {access_token}"
```

All platform API paths start with `/service/platform/{domain}/v1.0/company/{company_id}/...`

---

## Scope Model

Scopes returned are coarse-grained:
- `company/*` — full access to company-level endpoints
- `company/application/*` — access to application (sales channel) endpoints

The OpenAPI specs do **not** define per-operation scopes — auth is grant-level, not endpoint-level. If an operation returns `401`, the token is expired or wrong company. If it returns `403`, the credentials lack the required grant.

---

## SDK Auth (JavaScript/Python)

```javascript
const { PlatformClient } = require("fdk-client-javascript");

const config = new PlatformConfig({
  companyId: 1,
  domain: "https://api.fynd.com",
  apiKey: "<client_id>",
  apiSecret: "<client_secret>",
});
const client = new PlatformClient(config);
// Token is managed automatically by the SDK
```

---

## Common Auth Errors

| Code | Meaning | Fix |
|------|---------|-----|
| `401 Unauthorized` | Token expired or missing | Refresh token, re-check Authorization header |
| `403 Forbidden` | Wrong company_id or insufficient grant | Ensure token was generated for this company_id |
| `400 Bad Request` on /oauth/token | Wrong grant_type or bad base64 | Use `grant_type=client_credentials`, re-encode credentials |
