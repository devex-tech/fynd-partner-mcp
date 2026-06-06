# Orders

**SDK Class:** `Order`  
**Total operations:** 74

## Groups

- **Reports**: Reports are summaries of various data points related to your orders. These can include order reports for example - New, 
- **Manifest**: A manifest is a document listing the contents of a shipment. It details each item included in the shipment, along with i
- **Bulk Operations**: Bulk operations allow you to perform actions on a large number of orders. This can save significant time compared to man
- **Shipment**: Shipment represents the physical movement of goods from the seller (or your warehouse) to the customer. It's associated 
- **Order**: Order represents a customer's intent to purchase a specific set of products from your platform. Here platform could be a
- **Announcements**: Announcements are a way to communicate important information to your platform users, which can be sellers. They could be
- **RMA**: Return Merchandise Authorization (RMA) enables you to create and manage rules that define the specific reasons and sub-r
- **Order State Manager**: The State Manager is responsible for handling state logic for entities such as Shipment and Bag.  It determines the beha
- **Payment**: The Payment module is responsible for handling payment methods operations. These will include updating payment mode of e
- **Account**: The Account module is responsible for managing channel accounts within a company. Channel accounts represent different s
- **Bag**: Bag represents a virtual entity to group same items which contains single or multi quantity. Bags are part of a shipment

## Operations by Group

### Account

#### `createAccount` — POST `/service/platform/order-manage/v1.0/company/{company_id}/account`

**Create channel account**

Creates a new channel account for the company. Channel accounts represent  different sales channels or marketplace integrations (e.g., Shopify, custom  marketplaces) through which the company receives and processes orders. Each  account is identified by a unique name and can be used to segregate ord

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `CreateAccount`

**Responses:** 200
  200 schema: `Account`

---

#### `listAccounts` — GET `/service/platform/order-manage/v1.0/company/{company_id}/account`

**Get channel accounts list**

Retrieves a paginated list of all channel accounts configured for the company.  Channel accounts represent different sales channels or marketplace integrations  from which orders are received. This endpoint returns account details including  the account ID, company ID, and channel account name for e

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `page` — The page number to retrieve in the paginated results. Default is page 1. (default: 1)
- `size` — Number of channel accounts to return per page. Default is 20 items per page. (default: 20)

**Responses:** 200
  200 schema: `AccountsList`

---

#### `getAccountById` — GET `/service/platform/order-manage/v1.0/company/{company_id}/account/{channel_account_id}`

**Get channel account details**

Retrieves detailed information about a specific channel account using its unique  identifier. This endpoint returns the complete account details including the  account ID, associated company ID, and the channel account name. Use this to  fetch information about a particular sales channel or marketpl

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `channel_account_id` — Unique identifier of the channel account to retrieve. *(required)*

**Responses:** 200
  200 schema: `Account`

---

#### `updateAccount` — PUT `/service/platform/order-manage/v1.0/company/{company_id}/account/{channel_account_id}`

**Update account**

Updates the details of a specific channel account.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `channel_account_id` — Unique identifier of the account. *(required)*

**Request body:** `application/json`
  Schema: `CreateAccount`

**Responses:** 200
  200 schema: `Account`

---

### Bulk

#### `bulkStateTransistion` — POST `/service/platform/order-manage/v1.0/company/{company_id}/jobs/state-transition`

**Upload bulk state transitions file**

Performs state transisiton in bulk using the CSV or excel file for the given shipments. The bulk transition CSV or excel template can be downloaded using the seller template download method. Current supported format is excel and CSV.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `BulkStateTransistionRequestSchema`

**Responses:** 200
  200 schema: `BulkStateTransistionResponseSchema`

---

#### `bulkListing` — GET `/service/platform/order-manage/v1.0/company/{company_id}/jobs`

**Lists bulk operations**

Get list of bulk operation that is initiated and completed as per the filters provided

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `page_size` — The number of records to return per page in the response. *(required)*
- `page_no` — The page number to fetch from the paginated results. *(required)*
- `start_date` — The start date for filtering the jobs, expressed in UTC format *(required)*
- `end_date` — The end date for filtering the jobs, expressed in UTC format *(required)*
- `status` — The status of the jobs to filter the results.
- `bulk_action_type` — pecifies the type of job action being requested.
- `search_key` — A key or keyword used to search for specific jobs.

**Responses:** 200
  200 schema: `BulkListingResponseSchema`

---

#### `jobDetails` — GET `/service/platform/order-manage/v1.0/company/{company_id}/jobs/{batch_id}`

**Get bulk operation details **

Fetches details of the job for the provided batch Id

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `batch_id` — A unique identifier for the batch associated with this bulk action. *(required)*

**Responses:** 200
  200 schema: `JobDetailsResponseSchema`

---

#### `getFileByStatus` — GET `/service/platform/order-manage/v1.0/company/{company_id}/jobs/{batch_id}/file`

**Download file used for Bulk operation**

Get the file download URL used for performing bulk operation

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `batch_id` — Batch Id to identify the bulk operation request. *(required)*

**Query params:**
- `status` — The status of the jobs to filter the results. *(required)*
- `file_type` —  *(required)* (default: xlsx)
- `report_type` — The type of report to be downloaded. (default: generation_report)

**Responses:** 200
  200 schema: `JobFailedResponseSchema`

---

#### `getAllowedTemplatesForBulk` — GET `/service/platform/order/v1.0/company/{company_id}/jobs/templates`

**List bulk operation templates**

Gets all the allowed templates to perform bulk operations.

**Path params:**
- `company_id` —  *(required)*

**Responses:** 200
  200 schema: `AllowedTemplatesResponseSchema`

---

#### `getTemplate` — GET `/service/platform/order/v1.0/company/{company_id}/jobs/templates/{template_name}`

**Download bulk operation templates**

Get the excel or CSV file URL for the template.

**Path params:**
- `company_id` —  *(required)*
- `template_name` —  *(required)*

**Responses:** 200
  200 schema: `TemplateDownloadResponseSchema`

---

### Courier Partner

#### `requestCourierPartnerForShipment` — POST `/service/platform/order-manage/v1.0/company/{company_id}/shipment/{shipment_id}/courier-partner/request`

**Manually request a courier partner for a shipment.**

Use this API to manually assign a courier partner (delivery partner) to a shipment.


**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `shipment_id` — The unique identifier for the shipment. This ID is used to track and reference t *(required)*

**Request body:** `application/json`
  Schema: `ShipmentCourierPartnerRequestSchema`

**Responses:** 200, 400
  200 schema: `CourierPartnerResponseSchema`

---

#### `saveCourierPartnerPreferenceForShipment` — POST `/service/platform/order-manage/v1.0/company/{company_id}/shipment/{shipment_id}/courier-partner/preference`

**Save courier partner preference for a shipment.**

Use this API to save the preferred courier partner for a shipment. The preferred courier partner will be triggered automatically when the shipment moves to a state where delivery partner assignment is performed (for example, ready for DP assignment).


**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `shipment_id` — The unique identifier for the shipment. This ID is used to track and reference t *(required)*

**Request body:** `application/json`
  Schema: `ShipmentCourierPartnerPreference`

**Responses:** 200, 400
  200 schema: `CourierPartnerResponseSchema`

---

### Failed Orders

#### `failedOrderLogs` — GET `/service/platform/order-manage/v1.0/company/{company_id}/orders/failed`

**List failed order logs**

Get failed order logs listing for filters based on order Id, user contact number, user email Id and sales channel Id.

**Path params:**
- `company_id` — Company ID *(required)*

**Query params:**
- `application_id` — Application ID
- `page_no` — Page Number
- `page_size` — Page Size
- `search_type` — Search type for filter
- `search_value` — Search value for filter

**Responses:** 200
  200 schema: `FailedOrderLogs`

---

#### `failedOrderLogDetails` — GET `/service/platform/order-manage/v1.0/company/{company_id}/orders/failed/logs/{log_id}`

**Get failed order log**

Get the exact error trace from the log Id provided in the failed order list API response 

**Path params:**
- `company_id` — Company ID *(required)*
- `log_id` — Log Error ID *(required)*

**Responses:** 200
  200 schema: `FailedOrderLogDetails`

---

### General

#### `reassignLocation` — POST `/service/platform/order-manage/v1.0/company/{company_id}/store/reassign-internal`

**Reassign location**

Reassign the shipment to a another location and update its status to 'Store Reassigned.'

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `StoreReassign`

**Responses:** 200
  200 schema: `StoreReassignResponseSchema`

---

#### `updateShipmentLock` — POST `/service/platform/order-manage/v1.0/company/{company_id}/entity/lock-manager`

**Update a shipment lock**

Modify shipment/bag lock status and update lock/unlock messages.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `UpdateShipmentLockPayload`

**Responses:** 200
  200 schema: `UpdateShipmentLockResponseSchema`

---

#### `getAnnouncements` — GET `/service/platform/order-manage/v1.0/company/{company_id}/announcements`

**List announcements**

Retrieve announcements related to orders fulfilment configured by platform or company admin

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `date` — Date On which the announcement is Active.

**Responses:** 200
  200 schema: `AnnouncementsResponseSchema`

---

#### `updateShipmentStatus` — PUT `/service/platform/order-manage/v1.0/company/{company_id}/shipment/status-internal`

**Update a shipment's status**

It is used for updating the shipment in the following scenarios: Full Confirmation, Partial Confirmation, Change the status of a shipment, Full Cancellation, Partial Cancellation, Assign the shipment to DP. Click <a href='/commerce/miscellaneous/updateShipmentStatus'>here</a> to get the use case det

**Path params:**
- `company_id` — Company id from where are transitioning the shipment state or data *(required)*

**Request body:** `application/json`
  Schema: `UpdateShipmentStatusRequestSchema`

**Responses:** 200
  200 schema: `UpdateShipmentStatusResponseBody`

---

#### `getRoleBasedActions` — GET `/service/platform/order-manage/v1.0/company/{company_id}/roles`

**Get role-based actions**

Retrieve permissible actions based on user roles such as company_admin,  company_operation, customer_care, and read_only.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Responses:** 200
  200 schema: `GetActionsResponseSchema`

---

#### `getShipmentHistory` — GET `/service/platform/order-manage/v1.0/company/{company_id}/shipment/history`

**Get a shipment's history**

Get the history of the shipment

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `shipment_id` — Identifier for the shipment
- `bag_id` — Identifier for a bag or product.

**Responses:** 200
  200 schema: `ShipmentHistoryResponseSchema`

---

#### `postShipmentHistory` — POST `/service/platform/order-manage/v1.0/company/{company_id}/shipment/history`

**Create shipment history**

Used to add logs in history for a bag for the provided Shipment ID

**Path params:**
- `company_id` —  *(required)*

**Request body:** `application/json`
  Schema: `PostShipmentHistory`

**Responses:** 200
  200 schema: `ShipmentHistoryResponseSchema`

---

#### `sendSmsNinja` — POST `/service/platform/order-manage/v1.0/company/{company_id}/ninja/send-sms`

**Send SMS**

Send SMS to customer based on the template that is selected

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `SendSmsPayload`

**Responses:** 200
  200 schema: `BaseResponseSchema`

---

#### `updatePackagingDimensions` — POST `/service/platform/order-manage/v1.0/company/{company_id}/update-packaging-dimension`

**Update packaging dimensions**

Used to modify the packaging dimension of a shipment

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `UpdatePackagingDimensionsPayload`

**Responses:** 200
  200 schema: `UpdatePackagingDimensionsResponseSchema`

---

#### `getChannelConfig` — GET `/service/platform/order-manage/v1.0/company/{company_id}/order-config`

**Get channel configuration**

Retrieve configuration settings specific to orders for a channel

**Path params:**
- `company_id` —  *(required)*

**Responses:** 200
  200 schema: `CreateChannelConfigData`

---

#### `createChannelConfig` — POST `/service/platform/order-manage/v1.0/company/{company_id}/order-config`

**Create channel configuration**

Set up configuration for a channel specific to orders which has implications over how the order fulfilment happens in a channel

**Path params:**
- `company_id` —  *(required)*

**Request body:** `application/json`
  Schema: `CreateChannelConfigData`

**Responses:** 200
  200 schema: `CreateChannelConfigResponseSchema`

---

#### `orderUpdate` — PUT `/service/platform/order-manage/v1.0/company/{company_id}/order/validation`

**Update an order**

Used to update an order's meta information. These meta information can be accessed via order or shipment details API.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `PlatformOrderUpdate`

**Responses:** 200
  200 schema: `ResponseDetail`

---

#### `checkOrderStatus` — POST `/service/platform/order-manage/v1.0/company/{company_id}/debug/order_status`

**Debug order**

Used to verify the status of order. It queries error logs, resyncs the shipments if there was an issue with sync etc.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `OrderStatus`

**Responses:** 200
  200 schema: `OrderStatusResult`

---

#### `getStateTransitionMap` — GET `/service/platform/order-manage/v1.0/company/{company_id}/bag/state/transition`

**Get state transition map**

Retrieve a map of state transitions for orders

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Responses:** 200
  200 schema: `BagStateTransitionMap`

---

#### `getAllowedStateTransition` — GET `/service/platform/order-manage/v1.0/company/{company_id}/allowed/state/transition`

**Get allowed state transition**

Retrieve next possible states based on logged in user's role

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `ordering_channel` — The specific channel through which your order was placed. This field will be pha
- `ordering_source` — To uniquely identify the source through which order has been placed.
- `status` — The status key indicates the current status for which the API will provide a lis *(required)*

**Responses:** 200
  200 schema: `RoleBaseStateTransitionMapping`

---

#### `fetchRefundModeConfig` — POST `/service/platform/order-manage/v1.0/company/{company_id}/refund-mode-config`

**List refund modes**

Get list of refund modes to trigger refunds

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `RefundModeConfigRequestPayload`

**Responses:** 200
  200 schema: `RefundModeConfigResponsePayload`

---

#### `attachOrderUser` — POST `/service/platform/order-manage/v1.0/company/{company_id}/user/attach`

**Attach order to a user**

Attach an anonymous order to a customer based on OTP verification

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `AttachOrderUser`

**Responses:** 200
  200 schema: `AttachOrderUserResponseSchema`

---

#### `sendUserMobileOTP` — POST `/service/platform/order-manage/v1.0/company/{company_id}/user/send/otp/mobile`

**Send user mobile OTP**

Send a one-time OTP to a customer mobile number

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `SendUserMobileOTP`

**Responses:** 200
  200 schema: `SendUserMobileOtpResponseSchema`

---

#### `verifyMobileOTP` — POST `/service/platform/order-manage/v1.0/company/{company_id}/user/verify/otp`

**Verify mobile OTP**

Perform OTP verification to link a user to an anonymous order

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `VerifyMobileOTP`

**Responses:** 200
  200 schema: `VerifyOtpResponseSchema`

---

#### `downloadLanesReport` — POST `/service/platform/order-manage/v1.0/company/{company_id}/reports/lanes/download`

**Download Lane report**

Downloads shipments/orders present in the provided lane

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `BulkReportsDownloadRequestSchema`

**Responses:** 200
  200 schema: `BulkReportsDownloadResponseSchema`

---

#### `generateProcessManifest` — POST `/service/platform/order-manage/v1.0/company/{company_id}/process-manifest`

**Process Order Manifest**

Endpoint to save and process order manifests.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `ProcessManifestRequestSchema`

**Responses:** 200
  200 schema: `ManifestResponseSchema`

---

#### `eInvoiceRetry` — POST `/service/platform/order-manage/v1.0/company/{company_id}/einvoice/retry/irn`

**Retry E-invoice**

Reattempt the generation of an E-invoice

**Path params:**
- `company_id` —  *(required)*

**Request body:** `application/json`
  Schema: `EInvoiceRetry`

**Responses:** 200, 400
  200 schema: `EInvoiceRetryResponseSchema`

---

#### `trackShipment` — GET `/service/platform/order-manage/v1.0/company/{company_id}/tracking`

**Track shipment**

Retrieve courier partner tracking details for a given shipment Id or AWB number

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `shipment_id` — Unique identifier of a shipment on the platform.
- `awb` — AWB number
- `page_no` — Page number for pagination.
- `page_size` — Number of records per page for pagination.

**Responses:** 200
  200 schema: `CourierPartnerTrackingResponseSchema`

---

#### `updateShipmentTracking` — POST `/service/platform/order-manage/v1.0/company/{company_id}/tracking`

**Update shipment tracking**

Modify courier partner tracking details for a given shipment Id or AWB number

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `CourierPartnerTrackingDetails`

**Responses:** 200
  200 schema: `CourierPartnerTrackingDetails`

---

#### `addStateManagerConfig` — POST `/service/platform/order-manage/v1.0/company/{company_id}/state/manager/config`

**Allows esm config updation**

Update ESM config

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `TransitionConfigPayload`

**Responses:** 200
  200 schema: `ConfigUpdatedResponseSchema`

---

#### `getStateManagerConfig` — GET `/service/platform/order-manage/v1.0/company/{company_id}/state/manager/config`

**Retrieves Entity State Manager configuration which includes flags, hooks, and filters, for a specific application within a company's setup.**

This endpoint retrieves the ESM (Entity State Manager) configuration for a specific application within a company. The retrieval is based on parameters such as application ID, ordering channel, and entity type.
The ESM config stores order processing configuration. Each document in the ESM config coll

**Path params:**
- `company_id` — The unique identifier of the company on the platform. *(required)*

**Query params:**
- `app_id` — The unique identifier of the application.
- `ordering_channel` — The channel through which orders are placed.
- `ordering_source` — To uniquely identify the source through which order has been placed.
- `entity` — The entity for which the configuration is applied.

**Responses:** 200

---

#### `getShipmentById` — GET `/service/platform/order/v1.0/company/{company_id}/shipment-details`

**Get shipment details**

Get detailed information about a specific shipment

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `channel_shipment_id` — The shipment ID used in the application, which can be used to reference specific
- `shipment_id` — The unique identifier for a shipment.
- `fetch_active_shipment` — flag to fetch active or deactivated shipments
- `allow_inactive` — Flag indicating whether inactive shipments are allowed (default: False)

**Responses:** 200
  200 schema: `ShipmentInfoResponseSchema`

---

#### `getLaneConfig` — GET `/service/platform/order/v1.0/company/{company_id}/lane-config/`

**Get lane configuration**

Get configuration settings for lanes

**Path params:**
- `company_id` — Id of company *(required)*

**Query params:**
- `super_lane` — Name of lane for which data is to be fetched (default: unfulfilled)
- `group_entity` — Name of group entity (default: shipments)
- `from_date` — Start Date in DD-MM-YYYY format
- `to_date` — End Date in DD-MM-YYYY format
- `start_date` — UTC Start Date in ISO format
- `end_date` — UTC End Date in ISO format
- `dp_ids` — Comma separated values of delivery partner ids
- `stores` — Comma separated values of store ids
- *(+ 11 more query params)*

**Responses:** 200
  200 schema: `LaneConfigResponseSchema`

---

#### `trackShipmentPlatform` — GET `/service/platform/order/v1.0/company/{company_id}/application/{application_id}/orders/shipments/{shipment_id}/track`

**Track shipment**

Track shipment by shipment Id for an application

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `application_id` — A unique identifier for the application on the platform *(required)*
- `shipment_id` — The unique identifier for the shipment *(required)*

**Responses:** 200
  200 schema: `PlatformShipmentTrack`

---

#### `getfilters` — GET `/service/platform/order/v1.0/company/{company_id}/filter-listing`

**List filters**

Get supported filters for various listing operations

**Path params:**
- `company_id` — Id of company *(required)*

**Query params:**
- `view` — Name of view *(required)* (default: manifest)
- `group_entity` — Name of group entity (default: orders)

**Responses:** 200
  200 schema: `FiltersResponseSchema`

---

#### `getBulkShipmentExcelFile` — GET `/service/platform/order/v1.0/company/{company_id}/generate/file`

**Generate the report**

Generates the report which can be filled and uploaded to perform the bulk operation based on the filters provided

**Path params:**
- `company_id` — Id of company *(required)*

**Query params:**
- `sales_channels` — Comma separated values of sales channel ids
- `dp_ids` — Comma separated values of delivery partner ids
- `start_date` — Date time in UTC timezone as per ISO format.
- `end_date` — Date time in UTC timezone as per ISO format.
- `stores` — Comma separated values of store ids
- `tags` — Comma separated values of tags
- `bag_status` — Comma separated values of bag statuses
- `payment_methods` — Comma separated values of payment methods
- *(+ 4 more query params)*

**Responses:** 200
  200 schema: `FileResponseSchema`

---

#### `getBulkActionTemplate` — GET `/service/platform/order/v1.0/company/{company_id}/bulk-action/get-seller-templates`

**List supported templates**

Get list of templates so that users can download the required template

**Path params:**
- `company_id` — Id of company *(required)*

**Responses:** 200
  200 schema: `BulkActionTemplateResponseSchema`

---

#### `downloadBulkActionTemplate` — GET `/service/platform/order/v1.0/company/{company_id}/bulk-action/download-seller-templates`

**Download bulk template**

Download bulk seller templates which can be used to perform operations in bulk

**Path params:**
- `company_id` — Id of company *(required)*

**Query params:**
- `template_slug` — Slug name of template to be downloaded

**Responses:** 200
  200 schema: `FileResponseSchema`

---

#### `getShipmentReasons` — GET `/service/platform/order/v1.0/company/{company_id}/shipments/{shipment_id}/bags/{bag_id}/state/{state}/reasons`

**List bag cancellation reasons**

Get reasons to perform full or partial cancellation of a bag

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `shipment_id` — ID of the shipment. An order may contain multiple items and may get divided into *(required)*
- `bag_id` — ID of the bag. An order may contain multiple items and may get divided into one  *(required)*
- `state` — State for which reasons are required. *(required)*

**Responses:** 200
  200 schema: `PlatformShipmentReasonsResponseSchema`

---

#### `getPlatformShipmentReasons` — GET `/service/platform/order/v1.0/company/{company_id}/application/{application_id}/orders/shipments/reasons/{action}`

**List shipment cancellation reasons**

Get reasons to perform full or partial cancellation of a shipment

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*
- `action` —  *(required)*

**Responses:** 200
  200 schema: `ShipmentReasonsResponseSchema`

---

#### `getBagById` — GET `/service/platform/order/v1.0/company/{company_id}/bag-details/`

**Get bag**

Retrieve detailed information about a specific bag

**Path params:**
- `company_id` — Unique identifier of a company *(required)*

**Query params:**
- `bag_id` — Unique identifier of a bag
- `channel_bag_id` — Id of application bag
- `channel_id` — Id of application

**Responses:** 200
  200 schema: `BagDetailsPlatformResponseSchema`

---

#### `getBags` — GET `/service/platform/order/v1.0/company/{company_id}/bags`

**List bags**

Get paginated list of bags based on provided filters

**Path params:**
- `company_id` — Id of company *(required)*

**Query params:**
- `bag_ids` — Comma separated values of bag ids
- `shipment_ids` — Comma separated values of shipment ids
- `order_ids` — Comma separated values of order ids
- `channel_bag_ids` — Comma separated values of app bag ids
- `channel_shipment_ids` — Comma separated values of app shipment ids
- `channel_order_ids` — Comma separated values of app order ids
- `channel_id` — Comma separated values of app ids
- `page_no` — Page number for paginated data (default: 1)
- *(+ 1 more query params)*

**Responses:** 200
  200 schema: `GetBagsPlatformResponseSchema`

---

#### `generatePOSReceiptByOrderId` — GET `/service/platform/order/v1.0/company/{company_id}/orders/{order_id}/generate/pos-receipt`

**Generate POS receipt by order Id**

Create a point-of-sale (POS) receipt for a specific order by order Id.

**Path params:**
- `company_id` —  *(required)*
- `order_id` —  *(required)*

**Query params:**
- `shipment_id` — 
- `document_type` —  (default: a4)

**Responses:** 200
  200 schema: `GeneratePosOrderReceiptResponseSchema`

---

### Generate Invoice ID

#### `generateInvoiceID` — POST `/service/platform/order-manage/v1.0/company/{company_id}/{invoice_type}/id/generate`

**Generate and attach invoice Id**

Generate and attach Invoice Ids against shipments.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `invoice_type` — mention the type of invoice id to generate *(required)*

**Request body:** `application/json`
  Schema: `GenerateInvoiceIDRequestSchema`

**Responses:** 200
  200 schema: `GenerateInvoiceIDResponseSchema`

---

### ManageAddress

#### `updateAddress` — PUT `/service/platform/order-manage/v1.0/company/{company_id}/shipment/{shipment_id}/address`

**Update shipment address**

Update the address details of an existing shipment based on the provided address_category. This operation allows the modification of critical shipment details, potentially affecting delivery/billing accuracy and customer communication.

**Path params:**
- `company_id` — ID of the company fulfilling the shipment *(required)*
- `shipment_id` — Unique shipment no. that is auto-generated *(required)*

**Request body:** `application/json`
  Schema: `UpdateAddressRequestBody`

**Responses:** 200
  200 schema: `BaseResponseSchema`

---

### Manifests

#### `getManifestShipments` — GET `/service/platform/order-manage/v1.0/company/{company_id}/manifest/shipments-listing`

**List manifest shipments**

Get list of shipments tagged to that manifest, the user can also search the shipments on the basis of shipment Id, order Id and AWB number

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `dp_ids` — Filter shipments with the specific Courier partner Ids which is a combination of *(required)*
- `stores` — Filter results based on specific store IDs. *(required)*
- `to_date` — End date for the shipment search range. *(required)*
- `from_date` — Start date for the shipment search range. *(required)*
- `dp_name` — Filter results based on specific courier partner name.
- `sales_channels` — Filter results based on comma-separated list of sales channels.
- `search_type` — Filter results based on search type.
- `search_value` — Filter results based on the search value.
- *(+ 2 more query params)*

**Responses:** 200
  200 schema: `ManifestShipmentListing`

---

#### `getManifests` — GET `/service/platform/order-manage/v1.0/company/{company_id}/manifest/listing`

**List manifests**

Get a list of manifest as per the filter provided

**Path params:**
- `company_id` — Unique identifier for the company on the platform. *(required)*

**Query params:**
- `status` — Filter for the status of manifests. (default: active)
- `start_date` — The starting date for filtering manifests in ISO format
- `end_date` — The end date for filtering manifests in ISO format
- `search_type` — Specifies the type of search to perform.
- `store_id` — Filter to fetch manifests for a specific store by its ID.
- `search_value` — The value to search for based on the selected search type.
- `dp_ids` — A comma-separated list of courier partner IDs (DP IDs) to filter the manifests.
- `page_no` — The number of the page to fetch data.
- *(+ 1 more query params)*

**Responses:** 200
  200 schema: `ManifestList`

---

#### `getManifestDetails` — GET `/service/platform/order-manage/v1.0/company/{company_id}/manifest/details`

**Get a manifest**

Get details regarding a manifest which can be used to perform further actions on it

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `manifest_id` — The unique identifier assigned to the manifest. *(required)*
- `dp_ids` — Filter shipments with the specific Courier partner Ids which is a combination of
- `end_date` — End date for the shipment search range in manifest.
- `start_date` — Start date for the shipment search range in manifest.
- `page_no` — Page number for pagination.
- `page_size` — Number of records per page for pagination.

**Responses:** 200
  200 schema: `ManifestDetails`

---

#### `dispatchManifests` — POST `/service/platform/order-manage/v1.0/company/{company_id}/manifest/dispatch`

**Dispatch manifest**

Updates the status of the manifest to processed and change the status of the shipments in the manifest to dispatch status

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `DispatchManifest`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `uploadConsents` — POST `/service/platform/order-manage/v1.0/company/{company_id}/manifest/uploadConsent`

**Upload consent**

Uploads the consent signed by courier partner and seller to keep records

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Request body:** `application/json`
  Schema: `UploadManifestConsent`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `getManifestfilters` — GET `/service/platform/order-manage/v1.0/company/{company_id}/filter/listing`

**List filters**

Get supported filter for listing manifests

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `view` — Name of View *(required)* (default: manifest)

**Responses:** 200
  200 schema: `ManifestFiltersResponseSchema`

---

### Order

#### `createOrder` — POST `/service/platform/order-manage/v1.0/company/{company_id}/orders`

**Create Order**

Creates an order in the OMS. Note: Use the Serviceability API (<a href='/commerce/sdk/latest/platform/company/serviceability#createShipments'>createShipments</a>) to determine shipments before creating an order.

**Path params:**
- `company_id` —  *(required)*

**Request body:** `application/json`
  Schema: `CreateOrderRequestSchema`

**Responses:** 200

---

### Ordering Source

#### `getOrderingSourceConfigBySlug` — GET `/service/platform/order-manage/v1.0/company/{company_id}/application/{application_id}/ordering-sources/{slug}`

**Get ordering source config for a given company and application.**

Retrieves the ordering source config for a given company and application.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*
- `slug` —  *(required)*

**Responses:** 200
  200 schema: `OrderingSourceConfig`

---

#### `updateOrderingSourceConfigBySlug` — PUT `/service/platform/order-manage/v1.0/company/{company_id}/application/{application_id}/ordering-sources/{slug}`

**Update ordering source config for a given company and application.**

Updates the ordering source config for a given company and application.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*
- `slug` —  *(required)*

**Request body:** `application/json`
  Schema: `OrderingSourceConfig`

**Responses:** 200
  200 schema: `OrderingSourceConfig`

---

#### `listOrderingSources` — GET `/service/platform/order-manage/v1.0/company/{company_id}/application/{application_id}/ordering-sources`

**List ordering sources for a given company and application.**

Retrieves the list of ordering sources for a given company and application.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Query params:**
- `type` — 
- `page_no` — 
- `page_size` — 

**Responses:** 200
  200 schema: `ListOrderingSources`

---

### Orders

#### `getOrderById` — GET `/service/platform/order/v1.0/company/{company_id}/order-details`

**Get order**

Get detailed information about a specific order

**Path params:**
- `company_id` — Id of company *(required)*

**Query params:**
- `order_id` —  *(required)* (default: FY6299E19701B4EAEFC2)
- `my_orders` — 
- `allow_inactive` — Flag to allow inactive shipments (default: False)

**Responses:** 200
  200 schema: `OrderDetailsResponseSchema`

---

### Packages

#### `getShipmentPackages` — GET `/service/platform/order-manage/v1.0/company/{company_id}/shipment/{shipment_id}/packages`

**Get shipment packages**

Retrieve all packages associated with a specific shipment. This endpoint supports  both single-piece and multi-piece shipments.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `shipment_id` — Unique identifier for the shipment whose packages are being retrieved. *(required)*

**Responses:** 200, 400
  200 schema: `PackagesResponseSchema`

---

#### `createShipmentPackages` — POST `/service/platform/order-manage/v1.0/company/{company_id}/shipment/{shipment_id}/packages`

**Create shipment packages**

Create new packages for a shipment, enabling Multi-Piece Shipment (MPS) functionality. This operation validates courier partner availability and performs bag breaking  as per number of packages. The system automatically validates MPS eligibility and store  configuration before creating packages. If 

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `shipment_id` — Unique identifier of the shipment. *(required)*

**Request body:** `application/json`
  Schema: `PackagesSchema`

**Responses:** 201, 400

---

#### `updateShipmentPackages` — PUT `/service/platform/order-manage/v1.0/company/{company_id}/shipment/{shipment_id}/packages`

**Update shipment packages**

Update existing packages for a shipment. This operation replaces all existing  packages with the provided package list. The system validates courier partner  availability and performs bag breaking as per number of packages. Any packages  without IDs will have new unique IDs generated.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `shipment_id` — Unique identifier for the shipment whose packages will be updated. *(required)*

**Request body:** `application/json`
  Schema: `PackagesSchema`

**Responses:** 200, 400
  200 schema: `BaseResponseSchema`

---

### Pagination

#### `getOrders` — GET `/service/platform/order/v1.0/company/{company_id}/orders-listing`

**List orders**

Get a list of orders based on the filters provided.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `lane` — lane refers to a section where orders are assigned, indicating its grouping.
- `search_type` — search_type refers to the field that will be used as the target for the search o
- `bag_status` — bag_status refers to status of the entity. Filters orders based on the status.
- `time_to_dispatch` — time_to_dispatch refers to estimated SLA time.
- `payment_methods` — Comma separated values of payment methods that were used to place order.
- `tags` — tags refers to additional descriptive labels associated with the order
- `search_value` — search_value is matched against the field specified by the search_type (default: 16854460524441037000)
- `from_date` — Date time in UTC timezone as per ISO format.
- *(+ 20 more query params)*

**Responses:** 200
  200 schema: `OrderListingResponseSchema`

---

### Payment

#### `updatePaymentInfo` — PUT `/service/platform/order-manage/v1.0/company/{company_id}/payment/update`

**Update payment details for an order, its shipments and its bags.**

Updates the payment mode for an order, its shipments and its bags. This endpoint allows for modifying payment methods, and associated details but not amount.

**Path params:**
- `company_id` —  *(required)*

**Request body:** `application/json`
  Schema: `UpdateShipmentPaymentMode`

**Responses:** 200, 422

---

### RuleListing

#### `getRules` — POST `/service/platform/order-manage/v1.0/company/{company_id}/application/{application_id}/rule_list`

**List of RMA rules based on the given input conditions.**

Retrieves a comprehensive list of RMA (Return Merchandise Authorization) rules associated with  a specific company and application. These rules dictate the processes for handling returns,  including actions, reasons, quality control (QC) types, and associated questions.  The endpoint allows for filt

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Request body:** `application/json`
  Schema: `RuleListRequestSchema`

**Responses:** 200, 400
  200 schema: `RuleListResponseSchema`

---

### ShipmentBagReasons

#### `getShipmentBagReasons` — GET `/service/platform/order/v1.0/company/{company_id}/application/{application_id}/orders/shipments/{shipment_id}/line_number/{line_number}/reasons`

**Retrieve Reasons for Cancellation and Return journey**

Allows users to retrieve a comprehensive list of reasons for cancellation  or returning a shipment. It provides both cancellation and return reasons, with an emphasis  on Quality Control (QC) evaluations.

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `application_id` — A unique identifier for the application on the platform *(required)*
- `shipment_id` — The unique identifier for the shipment *(required)*
- `line_number` — A unique identifier of the bag's line number. *(required)*

**Responses:** 200
  200 schema: `ShipmentBagReasons`

---

### ShipmentCrossSellingPlatformView

#### `getApplicationShipments` — GET `/service/platform/order/v1.0/company/{company_id}/application/{application_id}/shipments/`

**List sales channel shipments**

Get shipments of a particular sales channel based on the filters provided

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*
- `application_id` — A unique identifier for the application or system that is making the order reque *(required)*

**Query params:**
- `lane` — Optional parameter to specify the lane for filtering results.
- `search_type` — search_type refers to the field that will be used as the target for the search o
- `search_id` — Identifier used for the search operation based on the selected search type.
- `from_date` — Date time in UTC timezone as per ISO format.
- `to_date` — Date time in UTC timezone as per ISO format.
- `dp_ids` — Comma-separated list of delivery partner IDs to filter results.
- `ordering_company_id` — ID of the company placing the order, used for filtering results.
- `stores` — Comma-separated list of store IDs to filter results.
- *(+ 7 more query params)*

**Responses:** 200
  200 schema: `ShipmentInternalPlatformViewResponseSchema`

---

### Shipments

#### `getShipments` — GET `/service/platform/order/v1.0/company/{company_id}/shipments-listing`

**List shipments**

Get a list of shipments based on the filters provided

**Path params:**
- `company_id` — Unique identifier of a company on the platform. *(required)*

**Query params:**
- `lane` — Name of lane for which data is to be fetched
- `bag_status` — Comma separated values of bag statuses.
- `status_assigned` — Used to filter shipments based on status present in shipment_status_history. For
- `status_override_lane` — Use this flag to fetch by bag_status and override lane. (default: False)
- `time_to_dispatch` — Indicates the time to dispatch.
- `search_type` — Specifies the key used to determine the type of search being performed.
- `search_value` — The value corresponding to the search type, such as a specific shipment ID or or
- `from_date` — Start Date in DD-MM-YYYY format
- *(+ 31 more query params)*

**Responses:** 200
  200 schema: `ShipmentInternalPlatformViewResponseSchema`

---

