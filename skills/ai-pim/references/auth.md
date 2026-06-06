# AI PIM — Authentication

AI PIM uses three authentication methods depending on the API type.

---

## 1. Panel APIs — Session Cookie

**Used for:** All `/service/panel/` endpoints (managing connectors, taxonomy, templates, etc.)

**Mechanism:** Browser-based session cookie `cc.session`

The session cookie is set after the user logs into the AI PIM dashboard. For programmatic access to Panel APIs, the session cookie must be included in requests.

```bash
curl -X GET "https://api.aipim.fynd.com/service/panel/templates/v1.0/org/{orgId}/attribute" \
  -H "Cookie: cc.session=<your_session_value>"
```

> Session cookies expire after inactivity. Re-login to refresh the session.

---

## 2. Bearer Token — API Key

**Used for:** Machine-to-machine Panel API access (alternative to session cookie)

**Navigate:** Manage Account → Token page (Brand Admin only)

The Token page shows:
- **Token Name** — system-generated label
- **API Key** — click to view, or copy as Base64-encoded string

**Usage:**
```bash
curl -X GET "https://api.aipim.fynd.com/service/panel/..." \
  -H "Authorization: Bearer <base64_encoded_api_key>"
```

Include the token as a **Bearer token** in the `Authorization` header of every request.

> Only Brand Admins can create and manage API tokens.

---

## 3. App Credentials — Inbound Connector

**Used for:** External systems pushing product data to AI PIM

**Mechanism:** `x-app-id` + `x-app-token` headers

Each inbound connector gets a unique app credential automatically generated at creation time. Share with the external system:

```bash
curl -X POST "https://api.aipim.fynd.com/service/public/catalog/v1.0/product/import" \
  -H "Content-Type: application/json" \
  -H "x-app-id: <app_id>" \
  -H "x-app-token: <app_token>" \
  -d '{ "sku": "PROD-001", "name": "Blue T-Shirt" }'
```

**Key facts:**
- App credentials are **per-connector** — each connector has its own unique pair
- The app ID cannot be changed after connector creation
- Credentials are visible in the connector's detail view in the UI

---

## 4. Outbound HMAC Signing (optional)

**Used for:** Securing outbound webhook deliveries

When **Enable HMAC Auth** is turned on in an outbound connector:
- AI PIM signs each outbound request body with HMAC-SHA256
- The hex digest is sent in the `x-cc-signature` header
- Your receiving endpoint verifies the signature using your configured secret key

```python
import hmac, hashlib

def verify_signature(payload_body: bytes, secret: str, received_sig: str) -> bool:
    expected = hmac.new(secret.encode(), payload_body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, received_sig)
```

---

## Authentication by API Type

| API Type | Auth Method | Header / Cookie |
|----------|-------------|-----------------|
| Panel APIs (dashboard) | Session cookie | `Cookie: cc.session=...` |
| Panel APIs (programmatic) | Bearer token | `Authorization: Bearer <token>` |
| Public inbound endpoint | App credentials | `x-app-id` + `x-app-token` |
| Outbound webhook receiver | HMAC signature | `x-cc-signature` (verify on your end) |

---

## Getting the API Token (Step by Step)

1. Log in to AI PIM
2. Click your organization name (top-right)
3. Select **Manage Account**
4. In the sidebar, click **Token**
5. Click the API Key field to view or copy (Base64-encoded)
6. Use as: `Authorization: Bearer <token>`
