# Payment Extension — Payment Flow

## Overview

```
Customer clicks Pay on storefront
          ↓
Fynd Platform → POST initiatePaymentSession → Your Extension
          ↓
Your Extension → Payment Gateway (create session)
          ↓
Gateway returns payment page URL
          ↓
Your Extension → returns { redirect_url } to Fynd
          ↓
Fynd redirects Customer to redirect_url (Gateway hosted page)
          ↓
Customer completes / cancels payment
          ↓
Gateway sends callback → Your Extension
          ↓
Your Extension → PUT updatePaymentSession (status: complete/failed)
          ↓
Fynd redirects Customer to success_url or cancel_url
```

---

## Payment Status State Machine

Only 4 valid values for `updatePaymentSession`:

| Status | When to send |
|---|---|
| `started` | Transaction created (initial state) |
| `pending` | Payment status not yet received from gateway |
| `complete` | Gateway confirmed successful payment |
| `failed` | Gateway confirmed failed/cancelled payment |

**Never send any other status value.**

---

## API: initiatePaymentSession
**Direction:** Fynd → Your Extension (you implement this endpoint)

**Request from Fynd:**
```json
POST /your-extension/initiate-payment
Headers:
  checksum: <hmac_sha256_of_body>

Body:
{
  "gid": "unique_transaction_id",
  "success_url": "https://storefront.com/payment/success",
  "cancel_url": "https://storefront.com/payment/cancel",
  "amount": 50000,         // in paise/cents (smallest currency unit)
  "currency": "INR",
  "merchant_id": "...",
  "application_id": "app_id"
}
```

**Your Response:**
```json
{
  "redirect_url": "https://payment-gateway.com/pay/session_id"
}
```

**Steps:**
1. Verify `checksum` header (see security.md)
2. Create payment session with your payment gateway using merchant's credentials
3. Store `gid` → gateway session mapping in your DB
4. Return `redirect_url` from gateway

---

## API: getPaymentStatus (Cron Polling)
**Direction:** Fynd → Your Extension (you implement this endpoint)

```
GET /your-extension/payment-status?gid=<transaction_id>
```

**Your Response:**
```json
{
  "status": "complete",    // started | pending | complete | failed
  "gid": "transaction_id"
}
```

Fynd runs **cron jobs** that poll this endpoint to reconcile transactions. Always implement it.

---

## Payment Success Flow (detailed)

1. Customer completes payment on Gateway page
2. **Gateway → Your Extension** (payment callback): success notification
3. **Your Extension → Fynd** `PUT updatePaymentSession` with `status: complete` + `gid`
4. **Fynd → Your Extension**: acknowledges `complete`
5. **Your Extension → Customer**: redirects to `success_url`
6. **Gateway → Your Extension** (webhook): payment completion event
7. **Your Extension → Fynd** `PUT updatePaymentSession` again with `status: complete` (idempotent)

---

## Payment Failure Flow

1. Customer cancels or payment fails
2. **Gateway → Your Extension**: failure/cancellation callback
3. **Your Extension → Fynd** `PUT updatePaymentSession` with `status: failed`
4. **Your Extension → Customer**: redirects to `cancel_url`
5. **Gateway → Your Extension** (webhook): failure confirmation
6. **Your Extension → Fynd** `PUT updatePaymentSession` again with `status: failed` (idempotent)

---

## Payment Pending Flow

When payment status is not immediately known:
1. Send `status: pending` in `updatePaymentSession`, redirect to `success_url`
2. When Gateway sends webhook with final status (success/failure):
   - Send `status: complete` or `status: failed` via `updatePaymentSession`

---

## updatePaymentSession (SDK call from your extension)

```js
// Called from your extension to update Fynd about payment status
await platformClient.payment.updatePaymentSession({
  gid: transaction_gid,
  body: {
    status: "complete",  // or pending / failed
    checksum: generated_checksum,  // see security.md
  }
});
```
