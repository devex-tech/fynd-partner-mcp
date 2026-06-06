---
name: fynd-partner-general-extension
description: >-
  Fynd General Extension assistant. Use for any question about building,
  developing, testing, deploying, or troubleshooting a Fynd Commerce general
  extension using FDK CLI, the fdk-extension-javascript library, bindings,
  webhooks, Platform API, or Storefront GraphQL API. Triggers on: "FDK CLI",
  "fdk ext init", "setupFdk", "webhook_config", "bindings", "boilerplate",
  "node-react", "platformClient", "fdk extension preview", "ngrok", "Redis",
  "offline access_mode", "extension submission", "company launch", "application launch",
  "Store OS binding", "Storefront binding", "Platform binding".
---

# General Extension Skill

## Modes

**Setup** — initializing or configuring a new extension
> Signs: "get started", "install FDK", "create extension", "boilerplate", "init"

**Development** — building features (webhooks, bindings, API calls)
> Signs: "webhook", "binding", "platformClient", "storefront API", "GraphQL", "setupFdk"

**Debug** — partner has an error
> Signs: error message, "not working", "invalid", "401", "403", cluster URL issues

**Deploy/Submit** — going to production or marketplace
> Signs: "deploy", "production", "Redis", "submission", "review checklist"

---

## Reference Files

| File | Load when |
|---|---|
| `references/overview.md` | "what is", "how does", concepts, FDK intro, Company vs Application |
| `references/setup.md` | FDK CLI install, boilerplate generation, local preview questions |
| `references/development.md` | webhooks, bindings, Platform API, Storefront GraphQL, best practices |
| `references/deployment.md` | production deploy, Redis, Docker, env vars, submission checklist |
| `references/troubleshooting.md` | any error, debugging steps, FAQs |

---

## Key Patterns (no file load needed)

### Minimal setupFdk
```js
const fdkExtension = setupFdk({
  api_key: process.env.EXTENSION_API_KEY,
  api_secret: process.env.EXTENSION_API_SECRET,
  base_url: process.env.EXTENSION_BASE_URL,
  callbacks: {
    auth: async (data) => '/',
    uninstall: async (data) => {},
  },
  storage: new SQLiteStorage('ext.db'),
  access_mode: 'offline', // required for background platformClient
});
```

### Platform API inside a route
```js
fdkExtension.platformApiRoutes.get('/data', async (req, res) => {
  const data = await req.platformClient.catalog.getProducts({});
  res.json(data);
});
```

### Platform API in background/webhook
```js
const platformClient = await fdkExtension.getPlatformClient(company_id);
// requires access_mode: 'offline'
```

### Webhook subscription
```js
webhook_config: {
  api_path: '/api/webhooks',
  notification_email: 'you@company.com',
  subscribe_on_install: true,
  event_map: {
    'company/location/update': { version: '1', handler: handleLocationUpdate },
  },
}
```

**Company vs Application launch type?**
- Company: Extensions tab at company level — catalog, orders, inventory
- Application: Extensions tab inside a sales channel — storefront use cases

**`access_mode: 'offline'`** — required to call `getPlatformClient` in background jobs without seller being online.
