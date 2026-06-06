# General Extension — Overview

## What is a General Extension?

A general extension adds custom functionality to Fynd Commerce. It runs as an iframe inside the seller's platform panel and can:
- Call Platform APIs for seller-facing operations (catalog, orders, inventory)
- Call Storefront GraphQL API for customer-facing features
- Subscribe to webhook events
- Add UI components to Theme Editor via Bindings

## Core Concepts

### Extension Scope
| Launch Type | Where it appears | Use cases |
|---|---|---|
| **Company** | Extensions tab → company | Catalog, orders, inventory, logistics |
| **Application** | Extensions tab → sales channel | Storefront UI, checkout, customer experience |

### Key Tooling
| Component | What it does |
|---|---|
| **FDK CLI** (`@gofynd/fdk-cli`) | Scaffolds boilerplate, local preview, test data |
| **fdk-extension-javascript** | OAuth, `platformClient`, webhook registry |
| **extension.context.json** | Managed by FDK CLI — do NOT edit manually |
| **setupFdk()** | Initializes credentials, callbacks, storage, webhooks |

### Access Modes
| Mode | Use when |
|---|---|
| `online` | API access only during active seller sessions |
| `offline` | Background jobs, consumers, cron — required for `getPlatformClient` outside routes |

### OAuth & Auth Flow
1. Seller installs → Fynd calls `{Extension_URL}/fp/install`
2. Extension builds OAuth handshake URL → redirects seller
3. Seller approves → Fynd sends `authorization_code` to `redirect_url`
4. Extension exchanges code for `access_token` + `refresh_token`
5. Token stored per `company_id`, auto-refreshed by FDK library

### PlatformClient vs ApplicationClient
| | PlatformClient | ApplicationClient |
|---|---|---|
| Access | Authenticated seller data | Customer-facing data |
| Examples | Products, orders, inventory | Cart, checkout, product listings |
| Where used | Backend routes, background jobs | Storefront/theme code |

### Extension URL (Base URL)
URL where Fynd calls your extension — for OAuth (`/fp/install`), webhooks, iframe launch.
- Dev: ngrok / Cloudflare tunnel
- Prod: deployed HTTPS server URL
