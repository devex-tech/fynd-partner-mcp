# Payment Extension — Refund Flow

## Overview

```
Customer cancels order or places return
          ↓
Fynd Platform → POST initiateRefundSession → Your Extension
          ↓
Your Extension → Payment Gateway (create refund request)
          ↓
Gateway processes refund → sends status
          ↓
Your Extension → responds to initiateRefundSession with refund status
          ↓
Fynd shows refund status to customer
          ↓
Gateway webhook → Your Extension (status update)
          ↓
Your Extension → PUT updateRefundSession (updated status)
```

---

## Refund Status State Machine

6 valid refund statuses:

| Status | Meaning |
|---|---|
| `refund_initiated` | Refund request created by Fynd (initial state) |
| `refund_pending` | Refund in progress / status not yet received from gateway |
| `refund_done` | Refund completed successfully |
| `refund_failed` | Refund failed |
| `refund_rejected` | Refund rejected by payment gateway |
| `refund_disputed` | Refund disputed |

---

## API: initiateRefundSession
**Direction:** Fynd → Your Extension (you implement this endpoint)

**Request from Fynd:**
```json
POST /your-extension/initiate-refund
Headers:
  checksum: <hmac_sha256_of_body>

Body:
{
  "gid": "original_payment_gid",
  "request_id": "unique_refund_request_id",
  "amount": 50000,          // amount to refund (paise/cents)
  "currency": "INR",
  "reason": "Customer request"
}
```

**Your Response:**
```json
{
  "gid": "original_payment_gid",
  "status": "refund_initiated",     // or refund_pending / refund_done / refund_failed
  "aggregator_payment_refund_details": [
    {
      "amount": 50000,
      "currency": "INR",
      "request_id": "unique_refund_request_id",
      "status": "refund_initiated"
    }
  ]
}
```

**Steps:**
1. Verify `checksum` header (see security.md)
2. Create refund with your payment gateway using original `gid` to locate the transaction
3. Return current refund status from gateway

---

## API: getRefundStatus (Cron Polling)
**Direction:** Fynd → Your Extension (you implement this endpoint)

```
GET /your-extension/refund-status?gid=<original_payment_gid>
```

**Your Response:**
```json
{
  "gid": "original_payment_gid",
  "aggregator_payment_refund_details": [
    {
      "request_id": "refund_request_id",
      "status": "refund_done",
      "amount": 50000,
      "currency": "INR"
    }
  ]
}
```

Fynd **cron jobs** poll this endpoint to check refund status. Always implement it.

---

## updateRefundSession (SDK call from your extension)

Called when gateway sends a webhook with updated refund status:

```js
await platformClient.payment.updateRefundSession({
  gid: original_payment_gid,
  body: {
    status: "refund_done",  // any of 6 refund statuses
    checksum: generated_checksum,  // see security.md
  }
});
```

---

## Partial Refunds

Each refund request has a unique `request_id`. A single `gid` (original payment) can have multiple refund requests (partial refunds). Track each `request_id` independently. Return an array of `aggregator_payment_refund_details` — one entry per refund request.
