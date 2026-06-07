# Konnect — API Reference

**Base URL (Staging):** `https://{{aggregator_name}}.uat.fyndx1.de/`  
**Base URL (Production):** `https://{{aggregator_name}}.extensions.fynd.com/`  
**Auth header:** `x-access-token: <token>`  
**Content-Type:** `application/json`

**Rate Limits:**
- Catalog / Pricing / Inventory: max **500 records** per request
- Orders / Returns: max **20 records** per request

---

## 1. Authorization (1 op)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/aggregator/v1/token` | Generate access token (company or location level) |

**Query params:** `username` (required), `password` (required)  
**Returns:** time-bound `access_token`

---

## 2. Catalog (11 ops)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v3/catalog/departments` | Get all departments |
| `GET` | `/v3/catalog/category` | Get all categories |
| `GET` | `/v3/catalog/company-brand` | Get brands for the company |
| `GET` | `/v3/catalog/product/template` | Get product templates |
| `GET` | `/v3/catalog/product-attributes` | Get product attributes by product |
| `GET` | `/v3/catalog/taxes/hscodes` | Get HS codes (tax classification) |
| `GET` | `/v3/catalog/taxes/rules` | Get tax rule IDs |
| `GET` | `/ims/v3/listings` | Fetch product listings (paginated, filterable by SKU) |
| `GET` | `/ims/v3/listings/count` | Get total SKU count (use for catalog health checks) |
| `GET` | `/v3/catalog/product` | Get products |
| `POST` | `/v3/catalog/product` | Create product |
| `PUT` | `/v3/catalog/product` | Update product |
| `DELETE` | `/v3/catalog/product` | Delete product |
| `GET` | `/v3/catalog/status` | Get product status |

**Listings query params:** `page_no`, `page_size` (max 500), `skus` (comma-separated, max 10)

---

## 3. Pricing (1 op)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `PUT` | `/ims/v3/price` | Update MRP and ESP per location for multiple SKUs |

**Max:** 500 records per request  
**Use cases:** Promotional pricing, price sync across channels, seasonal adjustments

---

## 4. Inventory (1 op)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `PUT` | `/ims/v3/inventory` | Update stock levels for SKUs across locations |

**Max:** 500 records per request  
**Rules:** `quantity > 0` = in stock; `quantity = 0` = stock-out; negative not supported

---

## 5. Orders (14 ops)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/oms/v3/shipment` | Fetch orders by status (with pagination + filters) |
| `GET` | `/oms/v3/shipment/info` | Get detailed shipment info |
| `POST` | `/oms/v3/shipment/cancel` | Cancel order or specific bag items |
| `POST` | `/oms/v3/shipment/confirm` | Confirm orders (bulk) |
| `POST` | `/oms/v3/shipment/invoiceUpdate` | Push invoice / credit note to Fynd |
| `PUT` | `/oms/v3/shipment/awb` | Update AWB (Air Waybill) number |
| `POST` | `/oms/v3/shipment/pack` | Mark orders as packed |
| `POST` | `/oms/v3/shipment/courierDetails` | Fetch AWB + courier assignment |
| `POST` | `/oms/v3/shipment/labels` | Generate shipping labels |
| `POST` | `/oms/v3/shipment/invoice` | Generate customer invoice PDF |
| `POST` | `/oms/v3/shipment/dispatch` | Mark orders as dispatched |
| `PUT` | `/oms/v3/shipment/status` | Update shipment status (self-ship only) |
| `POST` | `/oms/v3/shipment/track` | Track shipment by ID or AWB |
| `POST` | `/oms/v3/shipment/return` | Process returns / RTO |

**Max for order mutation calls:** 20 records per request

---

## Fetch Orders — Query Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `orderStatus` | **Yes** | CREATED, CONFIRMED, PROCESSING, COMPLETED, TRANSIT, DELIVERED, RETURN_PROCESSING, RETURN_DELIVERED, RETURN_COMPLETED, CANCELLED, CREDIT_NOTE_GENERATED |
| `orderId` | No | Fetch single shipment by ID |
| `orderingChannel` | No | FYND, ECOMM, AMAZON_MLF, FLIPKART, AJIO_VMS, etc. |
| `locationCode` | Required with company-level auth | Store/warehouse code |
| `pageNumber` | No | Page number |
| `pageSize` | No | Results per page |
| `orderDateFrom` | No | Start date (dd-mm-yyyy) |
| `orderDateTo` | No | End date (dd-mm-yyyy) |

---

## Track Shipment — Request / Response

**Request body** (provide one):
```json
{ "shipment_id": "17618887002341430000" }
// OR
{ "awb_number": "FY12345" }
```

**Response fields:** `courier`, `current_status`, `last_updated`, `eta`, `tracking_url`, `location` (GPS JSON string), `operational_status`, `journey` (forward/reverse), `events[]`

**Event operational statuses (key ones):**

| Status | Description |
|--------|-------------|
| `bag_picked` | Courier picked up from warehouse |
| `out_for_delivery` | En route to customer |
| `delivery_done` | Delivered to customer |
| `rto_bag_delivered` | RTO delivered back to seller |
| `return_bag_delivered` | Customer return delivered to seller |

---

## Update Shipment Status (Self-Ship) — Body

```json
{
  "orderId": "shipment_id",
  "orderStatus": "bag_picked",
  "meta": {
    "remark": "optional note",
    "dpLocation": "Mumbai",
    "promised_delivery_date": "2025-12-10T10:00:00",
    "estimated_delivery_date": "2025-12-10T10:00:00"
  }
}
```

`orderStatus` values: `bag_picked`, `delivery_done`, `rto_bag_delivered`, `return_bag_in_transit`, `return_bag_delivered`
