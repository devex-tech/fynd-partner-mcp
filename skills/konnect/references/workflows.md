# Konnect — Order Workflows

## Two Logistics Models

| Model | Description |
|-------|-------------|
| **Marketplace/Fynd Managed Logistics** | Marketplace or Fynd handles courier assignment and delivery |
| **Seller-Managed Logistics (Self-Ship)** | Seller assigns their own courier and manages delivery |

Self-ship orders are identified by `"is_self_ship": true` in the order response.

---

## Marketplace/Fynd Managed Logistics

### Forward Flow (Customer Delivery)

```
Customer places order
        ↓
CREATED — order received in Fynd OMS
        ↓
ERP/WMS fetches order → POST /oms/v3/shipment/confirm
        ↓
CONFIRMED — POST /oms/v3/shipment/invoiceUpdate (push invoice)
        ↓
PROCESSING — DP assigned by Fynd/marketplace
        ↓
POST /oms/v3/shipment/pack (mark as packed)
        ↓
COMPLETED — POST /oms/v3/shipment/courierDetails (fetch AWB)
        ↓
POST /oms/v3/shipment/labels (print shipping label)
        ↓
Courier picks up → TRANSIT
        ↓
DELIVERED — delivery_done in Fynd OMS
```

### RTO Flow (Return to Origin)

Triggered when delivery fails (wrong address, refused delivery, multiple failed attempts):

```
Delivery fails → courier initiates RTO
        ↓
RETURN_PROCESSING — rto_initiated in Fynd OMS
        ↓
Courier returns package to seller warehouse
        ↓
RETURN_DELIVERED — rto_bag_delivered
        ↓
Seller accepts after QC → RETURN_COMPLETED (rto_bag_accepted)
        ↓
POST /oms/v3/shipment/invoiceUpdate (credit note) → credit_note_generated
```

### Customer Return Flow

Triggered when customer initiates a return after delivery:

```
Customer requests return
        ↓
RETURN_PROCESSING — return_initiated
        ↓
Courier picks up from customer → return_dp_assigned
        ↓
RETURN_DELIVERED — return_bag_delivered
        ↓
Seller performs QC → POST return QC endpoint
        ↓
RETURN_COMPLETED — return_bag_accepted
        ↓
POST /oms/v3/shipment/invoiceUpdate → credit_note_generated
```

---

## Seller-Managed Logistics (Self-Ship)

Identified by `is_self_ship: true` in order payload.

### Forward & RTO Flow

```
Order fetched → confirm → invoice → pack
        ↓
Seller assigns own courier → PUT /oms/v3/shipment/awb (set AWB)
        ↓
PUT /oms/v3/shipment/status with orderStatus: "dp_assigned"
        ↓
Courier picks up → PUT /oms/v3/shipment/status: "bag_picked"
  (skip if autoDispatch: true)
        ↓
Delivered → PUT /oms/v3/shipment/status: "delivery_done"
        ↓
RTO (if failed) → PUT /oms/v3/shipment/status: "rto_bag_delivered"
```

### Customer Return Flow (Self-Ship)

```
Return initiated by customer
        ↓
PUT /oms/v3/shipment/status: "return_dp_assigned"
        ↓
Return in transit → PUT /oms/v3/shipment/status: "return_bag_in_transit"
        ↓
Delivered to seller → PUT /oms/v3/shipment/status: "return_bag_delivered"
        ↓
QC → accept → credit note
```

---

## Self-Ship Status Transitions

### Forward Flow
`dp_assigned` → `bag_picked` → `delivery_done`

### Return Flow
`return_dp_assigned` → `return_bag_in_transit` → `return_bag_delivered`

### RTO Flow
`dp_assigned` → `bag_picked` → `rto_bag_delivered`

> Set `autoDispatch: true` in the status update to skip `bag_picked` — only `delivery_done` is required.

---

## Order Processing Checklist

| Step | API Call | Notes |
|------|----------|-------|
| 1. Fetch new orders | `GET /oms/v3/shipment?orderStatus=CREATED` | Poll on schedule |
| 2. Confirm orders | `POST /oms/v3/shipment/confirm` | Before invoice |
| 3. Push invoice | `POST /oms/v3/shipment/invoiceUpdate` | After confirmation |
| 4. Get AWB (marketplace logistics) | `POST /oms/v3/shipment/courierDetails` | After invoice |
| 5. Print label | `POST /oms/v3/shipment/labels` | Before packing |
| 6. Mark packed | `POST /oms/v3/shipment/pack` | Check cancellations first |
| 7. Mark dispatched | `POST /oms/v3/shipment/dispatch` | Coordinate with courier pickup |
| 8. Track shipment | `POST /oms/v3/shipment/track` | Monitor delivery progress |
| 9. Handle returns | `GET /oms/v3/shipment?orderStatus=RETURN_DELIVERED` | After return arrives |
| 10. Issue credit note | `POST /oms/v3/shipment/invoiceUpdate` | After return accepted |
