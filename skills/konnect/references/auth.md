# Konnect — Authentication

## Overview

All Konnect API calls require an `x-access-token` header. This token is obtained by calling the Generate Access Token endpoint using your Konnect credentials (username + password).

Two token levels are available:

| Level | Scope | Best For |
|-------|-------|---------|
| **Company Level** | All stores/warehouses under one company account | Centralized management, bulk operations |
| **Location Level** | Single store or warehouse only | Granular per-location control, multi-franchise setups |

---

## Environments

| Environment | Host URL Pattern | Example |
|-------------|-----------------|---------|
| **Staging (Non-Prod)** | `https://{{aggregator_name}}.uat.fyndx1.de/` | `https://api.konnect.uat.fyndx1.de/` |
| **Production** | `https://{{aggregator_name}}.extensions.fynd.com/` | `https://api.konnect.fynd.extensions.fynd.com/` |

> Contact the Fynd Konnect team to obtain staging environment credentials.

---

## Generate Access Token

**Endpoint:** `GET /aggregator/v1/token`  
**Auth:** None (this is the auth endpoint itself — pass credentials as query params)

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `username` | String | Yes | Company or store-level integration username |
| `password` | String | Yes | Company or store-level integration token/password |

### Example Request

```bash
curl -X GET "https://api.konnect.uat.fyndx1.de/aggregator/v1/token?username=YOUR_USERNAME&password=YOUR_PASSWORD"
```

### Response

Returns a time-bound `access_token`. Include this in all subsequent API calls as:

```
x-access-token: <access_token>
```

---

## Finding Your Credentials

### Company-Level Credentials
1. Open the **Fynd Konnect** extension
2. Go to **Settings**
3. Copy the **Username** and **Token** displayed there

### Location-Level Credentials
1. Go to **Selling Location** in the Fynd Konnect extension
2. Click **Show Token** next to the store/warehouse
3. Copy the **Username** and **Token** for that location

> If using company-level auth for order APIs, the `locationCode` field becomes **mandatory** in order requests to specify which warehouse to operate on.

---

## Using the Token

Include the token in every API request header:

```bash
curl -X GET "https://api.konnect.uat.fyndx1.de/oms/v3/shipment?orderStatus=CREATED" \
  -H "x-access-token: YOUR_ACCESS_TOKEN"
```

---

## Token Behavior

- Tokens are **time-bound** — they expire after a set duration
- Generate a new token when the current one expires
- Company-level tokens work across all store APIs
- Location-level tokens are restricted to that specific store's operations
