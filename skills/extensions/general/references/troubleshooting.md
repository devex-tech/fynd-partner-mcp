# General Extension — Troubleshooting

## Debug Mode
Enable verbose logging in `setupFdk`:
```js
const fdkExtension = setupFdk({
  // ...
  debug: true,
});
```

## Common Errors

### `Invalid extension_cluster_url`
**Cause**: Wrong `EXTENSION_CLUSTER_URL` — e.g. using SIT URL instead of UAT, or wrong cluster.

**Fix**: Check the cluster in your `.env`. Valid examples:
- `https://api.fynd.com` (production)
- `https://api.uat.fynd.com` (UAT)
- `https://api.uat.fyndx1.de` (fyndx1 UAT)

The API key/secret are cluster-specific — a key from one cluster won't work on another.

### `Invalid api_key or api_secret`
**Cause**: Using wrong credentials or wrong cluster URL.

**Fix**:
1. Check Partners Panel → Extension → Settings for correct key/secret
2. Verify `EXTENSION_CLUSTER_URL` matches the cluster your extension is registered on
3. Ensure no extra spaces in `.env` values

### Webhook Not Receiving Events
**Causes**:
1. Extension not opened after updating `webhook_config` — webhook subscriber on Fynd not updated until extension is launched once
2. Wrong `api_path` in config
3. `processWebhook` not called on the route

**Fix**:
1. After any `webhook_config` change, open extension in Fynd Platform once
2. Verify route matches `webhook_config.api_path`
3. Ensure route calls `fdkExtension.webhookRegistry.processWebhook(req)`

### `platformClient` undefined in background job
**Cause**: `access_mode` is `'online'` — background jobs can't get client.

**Fix**: Set `access_mode: 'offline'` in `setupFdk`. This stores refresh tokens for background use.

### Binding Not Showing in Theme Editor
**Cause**: Binding not configured in Partners Panel, or extension not installed on that sales channel.

**Fix**:
1. Partners Panel → Extension → Bindings → configure section
2. Seller must install extension on the specific sales channel
3. Binding appears in Theme Editor after install

### Extension Not Loading (Blank iframe)
**Causes**:
1. Extension URL not reachable (local dev: tunnel stopped)
2. Wrong `EXTENSION_BASE_URL` in `.env`
3. HTTPS required — HTTP URLs rejected

**Fix**: Restart tunnel, update Extension URL in Partners Panel, ensure HTTPS.

---

## FAQs

**What's the difference between PlatformClient and ApplicationClient?**
PlatformClient = authenticated seller data (products, orders). ApplicationClient = customer-facing data (cart, checkout). ApplicationClient is for storefront/theme code.

**Can I implement OAuth without fdk-extension-javascript?**
No. Currently OAuth for Fynd extensions requires the FDK extension library. No custom OAuth implementation is supported.

**How are extensions launched on Fynd Platform?**
Fynd opens an iframe at your extension's base URL. The seller sees your extension UI inside Fynd's platform panel.

**Where do I find webhook event details?**
Full list: https://docs.fynd.com/partners/commerce/webhooks/overview
Configuration guide: https://docs.fynd.com/partners/commerce/webhooks/configuration

**What's Extension URL / Base URL?**
The public HTTPS URL where you've hosted your extension. Fynd uses this to call your extension. Configure it in Partners Panel → Extension → Edit.

**Why does my webhook config not take effect immediately?**
Webhook subscriber on Fynd is only updated when the extension is opened (launched) at least once after the config change. Open it once in Fynd Platform to sync.
