# Konnect — Orders

## Order Lifecycle

Orders flow through these statuses in Fynd OMS:

| Konnect Status | Fynd OMS State | Description |
|---------------|----------------|-------------|
| `CREATED` | `placed` / `store_reassigned` | Newly placed order |
| `CONFIRMED` | `bag_confirmed` | All items confirmed, ready for invoice + courier |
| `PROCESSING` | `bag_invoiced` / `dp_assigned` | Post-confirmation, pre-dispatch |
| `COMPLETED` | `bag_packed` / `bag_not_picked` | Packed, ready for dispatch |
| `TRANSIT` | `bag_picked` | Picked up by courier, in transit |
| `HANDED_OVER_TO_CUSTOMER` | `handed_over_to_customer` | Delivered in-person / store pickup |
| `DELIVERED` | `delivery_done` | Successfully delivered to customer |
| `RETURN_PROCESSING` | `return_initiated` / `return_dp_assigned` | Return/RTO started, not yet back at seller |
| `RETURN_DELIVERED` | `return_bag_delivered` / `rto_bag_delivered` | Return/RTO delivered back to seller warehouse |
| `RETURN_COMPLETED` | `return_bag_accepted` / `rto_bag_accepted` | Return accepted by seller after QC |
| `CANCELLED` | — | Canceled by user, Fynd, or seller |
| `CREDIT_NOTE_GENERATED` | `credit_note_generated` | Credit note issued after return completion |

---

## Fetch Orders

**Endpoint:** `GET /oms/v3/shipment`  
**Auth:** `x-access-token`

### Query Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `orderStatus` | **Yes** | Filter by status (see table above) |
| `orderId` | No | Fetch specific shipment by ID — no other params needed |
| `orderingChannel` | No | Filter by sales channel (ECOMM, AMAZON_MLF, etc.) |
| `locationCode` | **Required if company-level auth** | Store/warehouse code |
| `pageNumber` | No | Pagination — page number |
| `pageSize` | No | Pagination — results per page |
| `orderDateFrom` | No | Filter start date (dd-mm-yyyy) |
| `orderDateTo` | No | Filter end date (dd-mm-yyyy) |

> **Tip:** Use `orderStatus` + `locationCode` + `pageSize` filters to manage data load. Schedule periodic polling — see `erp-wms.md` for recommended cron intervals.

---

## 18 Supported Ordering Channels

| Channel Code | Platform |
|-------------|---------|
| `FYND` | GoFynd online platform |
| `FYND-STORE` | Fynd StoreOS storefront |
| `ECOMM` | Seller website on Fynd Commerce |
| `AMAZON_MLF` | Amazon Multi-Location Fulfillment |
| `MYNTRA_IN` | Myntra India |
| `FLIPKART` | Flipkart general channel |
| `FLIPKARTASSURED` | Flipkart F-Assured (high quality/quick delivery) |
| `AJIO_VMS` | AJIO multi-brand apparel |
| `NYKAA` | Nykaa (cosmetics/lifestyle) |
| `NYKAA_FASHION` | Nykaa Fashion (apparel/accessories) |
| `TATACLIQ_IN` | Tata CLiQ |
| `TATACLIQ_LUXURY` | Tata CLiQ Luxury (premium segment) |
| `JIOMART` | JioMart (Reliance Retail) |
| `UNIKET` | Uniket B2B footwear marketplace |
| `SHOPIFY_IN` | Shopify India webstores |
| `TRELL` | Trell social commerce |
| `MAGICPIN` | Magicpin local discovery/ONDC |
| `FY_NEXUS` | Nexus 247 marketplace |

---

## Order Management APIs

### Fetch Order by ID
**Endpoint:** `GET /oms/v3/shipment?orderId={shipmentId}`  
Returns: order ID, item details, payment status, shipment info, timestamps

### Order Confirmation
**Endpoint:** `POST /oms/v3/shipment/confirm`  
Bulk confirm orders. Use during high-volume sales events. Validate data before confirming.

### Update Invoice
**Endpoint:** `POST /oms/v3/shipment/invoiceUpdate`  
Push customer invoices to Fynd. **Order must be confirmed first.** Max 20 orders per call.

### Order Pack
**Endpoint:** `POST /oms/v3/shipment/pack`  
Mark orders as packed and ready for dispatch. Check for cancellations before packing.

### Courier Details
**Endpoint:** `POST /oms/v3/shipment/courierDetails`  
Fetch AWB number and courier assignment for shipment tracking.

### Shipping Label
**Endpoint:** `POST /oms/v3/shipment/labels`  
Generate shipping labels in bulk. Contains destination/sender address, tracking number, barcode.

### Customer Invoice
**Endpoint:** `POST /oms/v3/shipment/invoice`  
Generate customer billing PDF including tax and pricing breakdown. Also used to fetch reverse invoice PDF for returns.

### Order Dispatch
**Endpoint:** `POST /oms/v3/shipment/dispatch`  
Mark orders as dispatched — left warehouse, en route to customer.

### Update AWB
**Endpoint:** `PUT /oms/v3/shipment/awb`  
Update the Air Waybill (courier tracking) number for a shipment.

### Order Cancellation
**Endpoint:** `POST /oms/v3/shipment/cancel`  
Cancel entire orders or specific bag items. Ensure order is not yet confirmed before canceling.

### Update Shipment Status (Self-Ship only)
**Endpoint:** `PUT /oms/v3/shipment/status`  
Push status milestones for self-ship orders (`is_self_ship: true`). Max 20 per call.

Allowed status transitions:
- **Forward:** `dp_assigned` → `bag_picked` → `delivery_done`
- **Return:** `return_dp_assigned` → `return_bag_in_transit` → `return_bag_delivered`
- **RTO:** `dp_assigned` → `bag_picked` → `rto_bag_delivered`

Set `autoDispatch: true` to skip `bag_picked` — only `delivery_done` is needed.

### Get Shipment Info
**Endpoint:** `GET /oms/v3/shipment/info`  
Detailed shipment metadata.

### Track Shipment
**Endpoint:** `POST /oms/v3/shipment/track`  
Real-time tracking of shipment. Provide `shipment_id` OR `awb_number`.

Returns: courier, current_status, last_updated, ETA, tracking_url, GPS location, events array

---

## Returns

### Fetch Returns
`GET /oms/v3/shipment?orderStatus=RETURN_DELIVERED`  
Retrieve customer returns and RTO shipments back at the seller warehouse.

### Update Return & QC
`POST /oms/v3/shipment/return` (implied via returns endpoint)  
Accept or reject return based on quality inspection. Updates inventory if accepted.

### Credit Note
`POST /oms/v3/shipment/invoiceUpdate`  
Issue credit note for accepted return/RTO. Order must be in `return_bag_accepted` or `rto_bag_accepted` state. Max 20 per call. Transitions to `credit_note_generated`.
