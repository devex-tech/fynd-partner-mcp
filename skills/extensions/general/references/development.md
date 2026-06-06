# General Extension — Development Guide

## setupFdk Configuration

Full configuration reference:
```js
const { setupFdk } = require("@gofynd/fdk-extension-javascript/express");

const fdkExtension = setupFdk({
  api_key: process.env.EXTENSION_API_KEY,
  api_secret: process.env.EXTENSION_API_SECRET,
  base_url: process.env.EXTENSION_BASE_URL,
  callbacks: {
    auth: async (data) => '/',           // redirect after install
    uninstall: async (data) => {},       // cleanup on uninstall
  },
  storage: new SQLiteStorage('ext.db'),  // dev: SQLite | prod: Redis
  access_mode: 'offline',               // 'online' | 'offline'
  webhook_config: { ... },              // optional
});

app.use(fdkExtension.fdkHandler);
app.use(fdkExtension.platformApiRoutes);
```

---

## Webhooks

### Register Events
```js
webhook_config: {
  api_path: '/api/webhooks',
  notification_email: 'dev@company.com',
  subscribe_on_install: false,          // true = auto-subscribe on install
  subscribed_saleschannel: 'specific',  // 'all' | 'specific'
  event_map: {
    'company/location/update': {
      version: '1',
      handler: handleLocationUpdate,
    },
    'application/coupon/create': {
      version: '1',
      handler: handleCouponCreate,
    },
    // Kafka-based event:
    'application/order/placed': {
      version: '1',
      topic: 'order_placed_topic',
      provider: 'kafka',
    },
  },
},
```

### Process Webhooks
```js
app.post('/api/webhooks', async (req, res, next) => {
  try {
    await fdkExtension.webhookRegistry.processWebhook(req);
    return res.status(200).json({ success: true });
  } catch(err) {
    return res.status(500).json({ success: false });
  }
});
```

Full list of webhook events: https://docs.fynd.com/partners/commerce/webhooks/overview

---

## Platform API

### Inside Express Routes
All routes under `fdkExtension.platformApiRoutes` automatically have `req.platformClient`:
```js
fdkExtension.platformApiRoutes.get('/tickets', async (req, res) => {
  const data = await req.platformClient.lead.getTickets();
  res.json(data);
});
```

### Background Tasks (requires `access_mode: 'offline'`)
```js
async function backgroundJob(company_id) {
  const platformClient = await fdkExtension.getPlatformClient(company_id);
  const products = await platformClient.catalog.getProducts({ page_size: 20 });
  // process products...
}
```

---

## Storefront GraphQL API

Used for customer-facing data (cart, catalog, checkout). Example query:
```js
// Fetch customer address details
const query = `
  query address($id: String!) {
    address(id: $id) {
      address
      city
      country
      area_code
    }
  }
`;
```
Full API reference: https://docs.fynd.com/partners/commerce/sdk/latest/graphql/application/client-libraries

---

## Bindings

Bindings expose extension UI at specific locations in Fynd Commerce. Three types:

### 1. Store OS Bindings
Integrates extension into the Store OS mobile app via embedded web view.
Config: Partners Panel → Extension → Bindings → Store OS

### 2. Storefront Bindings
Adds widgets/iframes to the customer storefront (product cards, banners, tracking widgets).

### 3. Platform Bindings
Adds sections to the Theme Editor so sellers can add extension UI alongside native theme sections.

All binding types support `props` and `blocks` — same as native theme sections.

---

## Best Practices
- **Code Quality**: SOLID principles, modular design
- **Security**: HMAC validation for webhooks, OAuth only via FDK library, validate all inputs
- **Dependency Management**: Use stable, actively maintained packages
- **API Compliance**: Use latest API versions, handle deprecations
- **UI Consistency**: Follow Fynd design guidelines for platform bindings
- **`access_mode: 'offline'`**: Required for any background job that needs Platform API
