# Payment Extension — Troubleshooting & Best Practices

## Common Issues

### Order not generated on Fynd Platform
**Cause:** `updatePaymentSession` was not called with `status: "complete"` before redirecting to `success_url`.

**Fix:** Always call `updatePaymentSession` FIRST, wait for acknowledgment, THEN redirect:
```js
// ✅ Correct order
await platformClient.payment.updatePaymentSession({ gid, body: { status: 'complete', ... } });
res.redirect(success_url);  // only after update succeeds

// ❌ Wrong — redirecting before updating
res.redirect(success_url);
await platformClient.payment.updatePaymentSession(...); // never reached
```

### Payment stuck in "started" / cron not working
**Cause:** `getPaymentStatus` endpoint not implemented or returning wrong status.

**Fix:** Implement `GET {Extension_URL}/payment/{version}/pay/{gid}` — must return live status by looking up `gid` from your DB and checking with gateway.

### Checksum mismatch / 400 on incoming request
**Cause:** Body serialization differs between what Fynd sent and what you're hashing.

**Fix:**
1. Use the raw request body bytes — not a re-serialized version
2. Don't parse and re-stringify before hashing — bytes must match exactly
3. Use `JSON.stringify(req.body)` with same separators as Fynd

```js
// Use raw body middleware to ensure exact bytes
app.use(express.json({
  verify: (req, res, buf) => { req.rawBody = buf; }
}));
const computed = crypto.createHmac('sha256', secret)
  .update(req.rawBody)  // use raw bytes
  .digest('hex');
```

### `updatePaymentSession` rejected by Fynd
**Cause:** Missing or wrong checksum in request body.

**Fix:** Generate HMAC of the ENTIRE request body (including `gid`, `status`, `amount`, `currency`) and include as `checksum` field:
```js
const body = { gid, status, amount, currency };
body.checksum = generateChecksum(body);
await platformClient.payment.updatePaymentSession({ gid, body });
```

### Extension shows as "Available for activation" instead of "Inactive"
**Cause:** `getActivationReadiness` is returning `{ success: false }`.

**Fix:** `getActivationReadiness` should return `{ success: true }` only when you have valid, validated gateway credentials stored for the `application_id`. Check your credential storage logic.

### Refund not updating / stuck at `refund_initiated`
**Cause:** Gateway webhook not set up, or `updateRefundSession` not called when webhook arrives.

**Fix:**
1. Register webhook URL with your payment gateway
2. When gateway sends refund update → map status → call `updateRefundSession`
3. Also ensure `getRefundStatus` returns current status for cron polling

---

## Best Practices

### Validate Credentials Before Saving
```js
// Test credentials with a small API call to gateway before saving
try {
  await gatewayClient.verifyCredentials(merchantCreds);
  await db.save(encrypt(merchantCreds));
  res.json({ success: true });
} catch (e) {
  res.json({ success: false, message: 'Invalid credentials' });
}
```

### Include Audit Trail on Config Page
Show when credentials were last updated and by whom:
```
Last updated: 2024-01-15 by admin@merchant.com
```
This helps merchants know if credentials were changed unexpectedly.

### Idempotency for updatePaymentSession
Fynd may call `getPaymentStatus` multiple times (cron). Your `updatePaymentSession` should be idempotent — calling it twice with `status: "complete"` for the same `gid` should be safe.

### Handle All Gateway Callback Scenarios
```js
// Always handle: success, failure, pending, timeout
gateway.on('callback', async (data) => {
  const status = mapGatewayStatus(data.status);  // complete|failed|pending
  await platformClient.payment.updatePaymentSession({ gid: data.gid, body: { status, ... } });
  if (status === 'complete') redirect(success_url);
  else redirect(cancel_url);
});
```

### Database Schema for Payment Extension
```sql
-- Minimum required tables
CREATE TABLE payment_sessions (
  gid TEXT PRIMARY KEY,
  company_id TEXT,
  application_id TEXT,
  gateway_order_id TEXT,    -- gateway's reference ID
  amount INTEGER,
  currency TEXT,
  status TEXT DEFAULT 'started',
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE refund_sessions (
  request_id TEXT PRIMARY KEY,
  gid TEXT,                  -- references payment_sessions.gid
  gateway_refund_id TEXT,
  amount INTEGER,
  status TEXT DEFAULT 'refund_initiated',
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE merchant_credentials (
  company_id TEXT,
  application_id TEXT,
  enc_iv TEXT,               -- AES-256-GCM IV
  gateway_secret TEXT,       -- encrypted credentials
  auth_tag TEXT,             -- AES-256-GCM auth tag
  updated_by TEXT,
  updated_at TIMESTAMP,
  PRIMARY KEY (company_id, application_id)
);
```
