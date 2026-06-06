# Logistic (Serviceability)

**SDK Class:** `Serviceability`  
**Total operations:** 84

## Groups

- **Courier Partner Setup & Rules**: Courier partners are organizations that offer delivery services for packages, parcels, documents, or goods.
This resourc
- **Delivery Zone**: A delivery zone is composed of specific localities and corresponding stores equipped to serve them. It represents predef
- **Selling Location**: A selling location is nothing but a geographical location where your stores and warehouses exists.
The Selling location 
- **Pincode-based Cash on Delivery**: Cash on delivery is a payment option available for customers when placing an order.

This feature allows sellers to acti
- **Order Routing Rules**: Order routing rules determine how orders are directed to fulfillment centers.
Order routing rules helps sellers to optim
- **Shipment Packaging**: Packaging material refers to the materials used to wrap and protect products during shipping or storage.
Shipments are c
- **Courier Partners**: Courier partners are organizations that specialize in providing delivery services for packages, parcels, documents, or g
- **Schemes**: This resource allows sellers to create schemes, update, get which are predefined plans with various pre-configured setti
- **Country & Locality Information**: Handle large-scale operations related to locality data. It retrieve bulk locality data history, import bulk locality dat
- **Fulfillment Options**: Fulfillment options define the different ways an order can be delivered or collected. 
These options include home delive

## Operations by Group

### ApplicationConfig

#### `getApplicationConfiguration` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/configuration`

**Get delivery configuration**

This API returns all the Application config that has been applied to the given company and application.

**Path params:**
- `company_id` — A `company_id` is a unique identifier of company. *(required)*
- `application_id` — A `application_id` is a unique identifier of a sales channel. *(required)*

**Responses:** 200, 400
  200 schema: `ApplicationConfigGetResult`

---

#### `patchApplicationConfiguration` — PATCH `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/configuration`

**To patch any config which can be applied to application**

Apply configs to application. Supports patching for buybox rule config and promise config. For reference, refer to examples

**Path params:**
- `company_id` — A `company_id` is a unique identifier of company. *(required)*
- `application_id` — A `application_id` is a unique identifier of sales channel. *(required)*

**Request body:** `application/json`
  Schema: `ApplicationConfigPatch`

**Responses:** 200, 404
  200 schema: `ApplicationConfigPatchResult`

---

### Bulk Delivery Zones

#### `createBulkExport` — POST `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/zones/bulk/export`

**Create Bulk Export of Zones**

Export zones defined at the application level.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `BulkCreateZoneExport`

**Responses:** 200
  200 schema: `ZoneBulkExport`

---

#### `getBulkExport` — GET `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/zones/bulk/export/{batch_id}`

**Get Bulk Export of Zones**

Get specific zone which is exported at the application level.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `batch_id` — A `batch_id` is a unique identifier for a particular zone. *(required)*

**Responses:** 200
  200 schema: `GetZoneBulkExport`

---

### Bulk Zone Products

#### `downloadZoneProductsBulkSampleFile` — GET `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/zones/bulk/products/sample`

**Download zone products bulk patch sample file**

Downloads a CSV sample template file for bulk patching zone products. The template includes headers for zone_id, product_type, products, and action.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200

---

#### `createZoneProductsBulkPatchJob` — POST `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/zones/bulk/products`

**Create bulk zone products patch job**

Initiates a bulk zone products patch operation by accepting a CSV file URL. The file is validated and a background job is created for processing zone product additions or removals.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `ZoneProductsBulkPatchDetails`

**Responses:** 200, 400
  200 schema: `ZoneBulkExport`

---

#### `getZoneProductsBulkPatchJobStatus` — GET `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/zones/bulk/products/{batch_id}`

**Get bulk zone products patch job status**

Retrieves the status and details of a specific bulk zone products patch job by its batch identifier.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `batch_id` — A unique identifier for the bulk zone products patch job. *(required)*

**Responses:** 200, 404
  200 schema: `GetZoneProductsBulkPatchResult`

---

### BulkGeoArea

#### `createBulkGeoArea` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas/regions/bulk`

**Bulk Creation of GeoArea Regions**

Allows to create and manage GeoAreas, representing groups of geographic regions in bulk.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `application_id` — The unique identifier for the sales channel. *(required)*

**Request body:** `application/json`
  Schema: `BulkGeoAreaDetails`

**Responses:** 200, 400
  200 schema: `BulkGeoAreaResult`

---

#### `getBulkGeoArea` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas/regions/bulk/{geoarea_id}`

**Get status of GeoAreas created in bulk**

Allows to Get GeoArea status which is created, representing groups of geographic regions in bulk.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `application_id` — The unique identifier for the sales channel. *(required)*
- `geoarea_id` — A unique identifier for the GeoArea. *(required)*

**Responses:** 200, 400
  200 schema: `BulkGeoAreaGetResult`

---

#### `updateBulkGeoArea` — PUT `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas/regions/bulk/{geoarea_id}`

**Update geoareas and their associated regions in bulk**

Update geoarea details and their associated regions through a CSV file in bulk.

**Path params:**
- `company_id` — Unique identifier for the company *(required)*
- `application_id` — Unique identifier for the sales channel *(required)*
- `geoarea_id` — A unique identifier for the GeoArea. *(required)*

**Request body:** `application/json`
  Schema: `BulkGeoAreaDetails`

**Responses:** 200, 400
  200 schema: `BulkGeoAreaResult`

---

### BulkTat

#### `bulkTat` — POST `/service/platform/logistics/v2.0/company/{company_id}/courier-partner/{extension_id}/scheme/{scheme_id}/tat`

**Locality TAT import or export**

Updates locality wise TAT(Turn Around Time) for particular courier scheme using CSV file.
Export locality wise CSV files.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `extension_id` — Unique Identifier of courier partner extension. *(required)*
- `scheme_id` — Unique identifier for the scheme, used to fetch or modify scheme details. *(required)*

**Request body:** `application/json`
  Schema: `BulkRegionJobDetails`

**Responses:** 200, 400
  200 schema: `BulkRegionResultItemData`

---

#### `getBulkTat` — GET `/service/platform/logistics/v2.0/company/{company_id}/courier-partner/{extension_id}/scheme/{scheme_id}/tat`

**Locality TAT change history**

Retrieves the history of changes made to TAT(Turn Around Time) for scheme.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `extension_id` — Unique Identifier of courier partner extension. *(required)*
- `scheme_id` — Unique identifier for the scheme, used to fetch or modify scheme details. *(required)*

**Query params:**
- `page_no` — The current page number for paginated results. (default: 1)
- `page_size` — Determines the items to be displayed in a page (default: 12)
- `batch_id` — Unique identifier of bulk job
- `action` — Import or export bulk type
- `status` — Status of the bulk actions
- `country` — Country for which bulk job is initiated
- `region` — Region for which bulk job is initiated
- `start_date` — Fetch job history after a particule date
- *(+ 1 more query params)*

**Responses:** 200
  200 schema: `BulkRegionResult`

---

### CourierAccount

#### `createCourierPartnerAccount` — POST `/service/platform/logistics/v1.0/company/{company_id}/courier-partner/account`

**Create courier account**

Retrieves a list of courier partner accounts.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `CourierAccountDetailsBody`

**Responses:** 200, 400
  200 schema: `CourierAccountDetailsBody`

---

#### `getCourierPartnerAccounts` — GET `/service/platform/logistics/v1.0/company/{company_id}/courier-partner/account`

**List courier accounts**

Retrieves a list of courier partner accounts.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `page_no` — The current page number for paginated results. (default: 1)
- `page_size` — Determines the items to be displayed in a page (default: 10)
- `stage` — Stage of the account.
- `payment_mode` — Filters dp accounts based on payment mode
- `transport_type` — Filters dp accounts based on transport_type
- `account_ids` — Filters dp accounts based on their ids
- `self_ship` — To filter self ship/non self ship dp accounts
- `own_account` — Filters seller owned or Fynd Managed dp accounts
- *(+ 1 more query params)*

**Responses:** 200
  200 schema: `CompanyCourierPartnerAccountListResult`

---

#### `updateCourierPartnerAccount` — PUT `/service/platform/logistics/v1.0/company/{company_id}/courier-partner/account/{account_id}`

**Update courier account**

Updates an existing courier partner account.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `account_id` — Unique ID of courier account *(required)*

**Request body:** `application/json`
  Schema: `CourierAccountDetailsBody`

**Responses:** 200, 400
  200 schema: `CourierAccountDetailsBody`

---

#### `getCourierPartnerAccount` — GET `/service/platform/logistics/v1.0/company/{company_id}/courier-partner/account/{account_id}`

**Get courier account**

Retrieves a single courier partner account.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `account_id` — Unique ID of courier account *(required)*

**Responses:** 200, 400
  200 schema: `CourierAccountResult`

---

### CourierCompanyRules

#### `updateCompanyConfiguration` — PUT `/service/platform/logistics/v1.0/company/{company_id}/configuration`

**Update delivery configuration**

Updates an existing delivery setup for a company, including the ability to adjust self-shipping preferences.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `fulfillment_option_slug` — Slug representing the fulfillment option. *(required)*

**Request body:** `application/json`
  Schema: `CompanyConfigurationSchema`

**Responses:** 200, 400
  200 schema: `CompanyConfig`

---

#### `getCompanyConfiguration` — GET `/service/platform/logistics/v1.0/company/{company_id}/configuration`

**Get delivery configuration**

Retrieves information about the delivery setup for a company

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200, 400
  200 schema: `CompanyConfig`

---

### CourierPartner

#### `createCourierPartnerScheme` — POST `/service/platform/logistics/v2.0/company/{company_id}/courier-partner/scheme`

**Create Scheme for courier partner extension**

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*

**Request body:** `application/json`
  Schema: `CourierPartnerSchemeDetailsModel`

**Responses:** 200, 400
  200 schema: `CourierPartnerSchemeModelSchema`

---

#### `getCourierPartnerSchemes` — GET `/service/platform/logistics/v2.0/company/{company_id}/courier-partner/scheme`

**Get created Schemes for courier partner**

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*

**Query params:**
- `extension_id` — Unique Identifier of courier partner extension.
- `scheme_type` — Indicates whether a scheme is created by an admin for global purposes or customi
- `payment_mode` — Indicates payment mode for a scheme.
- `capabilities` — Indicates whether the scheme possesses certain capabilities.
- `scheme_ids` — List of scheme ids which need to be returned in the response.
- `q` — The search string to search in the list of courier partners schemes by name.

**Responses:** 200, 422
  200 schema: `CourierPartnerSchemeList`

---

#### `updateCourierPartnerScheme` — PUT `/service/platform/logistics/v2.0/company/{company_id}/courier-partner/scheme/{scheme_id}`

**Update Scheme for courier partner extension**

**Path params:**
- `scheme_id` — Unique identifier for the scheme, used to fetch or modify scheme details. *(required)*
- `company_id` — The unique identifier of the company. *(required)*

**Request body:** `application/json`
  Schema: `CourierPartnerSchemeUpdateDetailsSchema`

**Responses:** 200, 400
  200 schema: `CourierPartnerSchemeModelSchema`

---

#### `getCourierPartnerScheme` — GET `/service/platform/logistics/v2.0/company/{company_id}/courier-partner/scheme/{scheme_id}`

**Get Scheme for courier partner extension by Id**

Update Scheme for courier partner extension by Id

**Path params:**
- `scheme_id` — Unique identifier for the scheme, used to fetch or modify scheme details. *(required)*
- `company_id` — The unique identifier of the company. *(required)*

**Responses:** 200, 404
  200 schema: `CourierPartnerSchemeModelSchema`

---

### CourierPartners

#### `getInstalledCourierPartnerExtensions` — GET `/service/platform/logistics/v1.0/company/{company_id}/courier-partner/list`

**Fetching of Package Material Rules from database.**

This API returns response of Package Materials Rules.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `page_no` — The current page number for paginated results. (default: 1)
- `page_size` — Determines the items to be displayed in a page (default: 10)
- `is_installed` — Filter to get installed extensions only

**Responses:** 200
  200 schema: `InstallCourierPartnerResponseSchema`

---

#### `getSelfShipDetails` — GET `/service/platform/logistics/v1.0/company/{company_id}/selfship`

**Get self-ship details**

Get the self-ship details such as TAT, activation status, and unit for a specified company.

**Path params:**
- `company_id` — Unique identifier of the company *(required)*

**Responses:** 200, 400
  200 schema: `SelfshipSchema`

---

#### `updateSelfShipDetails` — PATCH `/service/platform/logistics/v1.0/company/{company_id}/selfship`

**Update self-ship details**

Updates the self-ship details such as TAT, activation status, and unit for a specified company.

**Path params:**
- `company_id` — Unique identifier of the company *(required)*

**Request body:** `application/json`
  Schema: `SelfshipSchema`

**Responses:** 200, 400
  200 schema: `SelfshipSchema`

---

### CourierRules

#### `updateCourierRule` — PUT `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/courier-partner/rules/{rule_uid}`

**Update courier rule**

Updates an existing rule within the delivery configuration.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique Identifier of sales channel *(required)*
- `rule_uid` — Unique identifier of the courier partner rule. *(required)*

**Request body:** `application/json`
  Schema: `CourierPartnerRule`

**Responses:** 200, 400
  200 schema: `CourierPartnerRuleResult`

---

#### `getCourierPartnerRule` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/courier-partner/rules/{rule_uid}`

**Get courier rule**

Retrieves a single rule within the delivery configuration.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique Identifier of sales channel *(required)*
- `rule_uid` — Unique identifier of the courier partner rule *(required)*

**Responses:** 200, 400
  200 schema: `CourierPartnerRuleResult`

---

#### `createCourierPartnerRule` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/courier-partner/rules`

**Create courier rule**

Creates a rule within the delivery configuration.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique Identifier of sales channel *(required)*

**Request body:** `application/json`
  Schema: `CourierPartnerRule`

**Responses:** 200, 400
  200 schema: `CourierPartnerRuleResult`

---

#### `getCourierPartnerRules` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/courier-partner/rules`

**Get courier rules**

Retrieve a list of rules within the delivery configuration.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique Identifier of sales channel. *(required)*

**Query params:**
- `page_no` — The current page number for paginated results. (default: 1)
- `page_size` — Determines the items to be displayed in a page (default: 10)
- `status` — Filter rules based on rule status

**Responses:** 200
  200 schema: `CourierPartnerRulesListResult`

---

#### `updateCourierPartnerRulePriority` — PUT `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/courier-partner/rules/priority`

**Update courier partner rule priority**

Updates a courier partner rule priority for a single application

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*

**Request body:** `application/json`
  Schema: `RulePriorityDetails`

**Responses:** 200, 400
  200 schema: `RulePriorityResult`

---

### Delivery Zones

#### `createZone` — POST `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/zones`

**Create zone**

Creates a delivery zone.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `CreateZoneDataSchema`

**Responses:** 200, 400
  200 schema: `ZoneSchema`

---

#### `getZones` — GET `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/zones`

**Get zones**

Retrieves a list of delivery zones.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `stage` — Identifies the specific stage of zone bing requested.
- `page_size` — Defines the number of items displayed per page. (default: 10)
- `page_no` — Current page number. (default: 1)
- `fulfillment_option_slug` — Slug identifier for filtering by fulfillment option.
- `is_active` — Status of Zone (either active or inactive)
- `q` — Used to search for matching results based on the provided input.
- `country_iso_code` — ISO2 code of the country.
- `pincode` — PIN Code of the country.
- *(+ 3 more query params)*

**Responses:** 200, 400
  200 schema: `ListViewSchema`

---

#### `getZone` — GET `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/zones/{zone_id}`

**Get zone details**

Retrieves a single delivery zone

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `zone_id` — Unique identifier for a particular zone *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200, 400
  200 schema: `GetZoneByIdSchema`

---

#### `updateZone` — PATCH `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/zones/{zone_id}`

**Update details of a Zone to enable or disable**

Enable or Disable a Zone under that application.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `zone_id` — Unique identifier for a particular zone *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `UpdateZoneData`

**Responses:** 200, 400
  200 schema: `ZoneUpdateSuccessResult`

---

#### `deleteZone` — DELETE `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/zones/{zone_id}`

**Delete a Specific Zone**

Delete a Zone under that application.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `zone_id` — Unique identifier for a particular zone *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200, 400
  200 schema: `ZoneDeleteSuccessResult`

---

### General

#### `createGeoAreaExportJob` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas/bulk/export/{geoarea_id}`

**Create job for exporting Geoarea regions**

Create the job for exporting the regions in Geoarea in CSV format.

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*
- `application_id` — The unique identifier of the application. *(required)*
- `geoarea_id` — The unique identifier of the Geoarea. *(required)*

**Responses:** 200
  200 schema: `GeoAreaBulkCreationResult`

---

#### `getGeoAreaExportJobStatus` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas/bulk/export/{geoarea_id}`

**Get status of Geoarea export job**

Get the status and details of the Geoarea bulk export process.

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*
- `application_id` — The unique identifier of the application. *(required)*
- `geoarea_id` — The unique identifier of the Geoarea. *(required)*

**Responses:** 200, 404
  200 schema: `GeoAreaBulkExportResult`

---

#### `updatePincodeMopView` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/pincode-mop-update`

**Update pincode COD support**

Modify and update views related to pincode MOP (Mode of Payment).

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique Identifier of sales channel *(required)*

**Request body:** `application/json`
  Schema: `PincodeMopData`

**Responses:** 200, 400
  200 schema: `PincodeMOPResult`

---

#### `updatePincodeBulkView` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/pincode-mop-bulk-update`

**Bulk update pincode COD support**

Updates the cash on delivery settings for multiple specified pin codes simultaneously.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique Identifier of sales channel *(required)*

**Request body:** `application/json`
  Schema: `PincodeMopBulkData`

**Responses:** 200, 400
  200 schema: `PincodeBulkViewResult`

---

#### `updatePincodeCoDListing` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/pincode-mop-data`

**Get COD enabled pincodes**

Retrieves a list of pincodes along with the count based on whether cash on delivery settings.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique Identifier of sales channel *(required)*

**Query params:**
- `page_number` — Page number to be fetched. (default: 1)
- `page_size` — Determines the items to be displayed in a page (default: 100)

**Request body:** `application/json`
  Schema: `PincodeCodStatusListingDetails`

**Responses:** 200
  200 schema: `PincodeCodStatusListingResult`

---

#### `updatePincodeAuditHistory` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/history`

**Get audit trail**

Retrieves the history of changes made to cash on delivery settings for pincodes.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique Identifier of sales channel *(required)*

**Query params:**
- `page_number` — Page number to be fetched. (default: 1)
- `page_size` — Determines the items to be displayed in a page (default: 100)

**Request body:** `application/json`
  Schema: `PincodeMopUpdateAuditHistoryDetails`

**Responses:** 200, 400
  200 schema: `PincodeMopUpdateAuditHistoryResultData`

---

#### `getCountries` — GET `/service/platform/logistics/v2.0/company/{company_id}/countries`

**Get all countries and associated data**

Retrieve a list of countries for logistical purposes.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `onboard` — Only fetch countries which allowed for onboard on Platform.
- `page_no` — The page number to navigate through the given set of results. Default value is 1 (default: 1)
- `page_size` — The number of items to retrieve in each page. Default value is 12 (default: 12)
- `q` — The search string to search in the list of countries by name.
- `hierarchy` — The search filter to filter countries based on their available hierarchy.

**Responses:** 200, 400
  200 schema: `GetCountries`

---

#### `createFulfillmentOption` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/fulfillment-options`

**Create a new fulfillment option**

Creates a new fulfillment option for the specified company and application.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*

**Request body:** `application/json`
  Schema: `FulfillmentOption`

**Responses:** 200, 422
  200 schema: `FulfillmentOption`

---

#### `getFulfillmentOptionsList` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/fulfillment-options`

**Retrieve fulfillment options with optional filters.**

Fetches fulfillment options for an application. Queryable by product_slug, store_id, and status.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*

**Query params:**
- `product_slug` — The unique identifier (slug) of the product.
- `store_id` — The unique identifier of the store.
- `status` — Status of the fulfillment option. Must be either `ACTIVE` or `INACTIVE`.

**Responses:** 200, 422
  200 schema: `FulfillmentOptionsList`

---

#### `getFulfillmentOptions` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/fulfillment-options/{slug}`

**Get fulfillment options**

Fetches available fulfillment options for a given product and store.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*
- `slug` — Slug of the fulfillment option for retrieving details. *(required)*

**Query params:**
- `product_id` — The unique identifier of the product.
- `store_id` — The unique identifier of the store.

**Responses:** 200, 422
  200 schema: `FulfillmentOption`

---

#### `deleteFulfillmentOptions` — DELETE `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/fulfillment-options/{slug}`

**Delete fulfillment options**

Deletes fulfillment options for provided slug.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*
- `slug` — Slug of the fulfillment option for retrieving details. *(required)*

**Responses:** 200, 404
  200 schema: `OperationResponseSchema`

---

#### `putFulfillmentOption` — PUT `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/fulfillment-options/{slug}`

**Update an existing fulfillment option**

Updates the details of an existing fulfillment option for the specified company and application

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*
- `slug` — Slug of the fulfillment option for retrieving details. *(required)*

**Request body:** `application/json`
  Schema: `FulfillmentOption`

**Responses:** 200, 404
  200 schema: `FulfillmentOption`

---

#### `getFulfillmentOptionProducts` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/fulfillment-options/{slug}/products`

**Get products for a specific fulfillment option.**

Retrieves products available for a specific fulfillment option in an application.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*
- `slug` — Slug of the fulfillment option for retrieving details. *(required)*

**Query params:**
- `q` — Query to search product by name.
- `store_id` — The unique identifier of the store. *(required)*

**Responses:** 200, 400
  200 schema: `FulfillmentOptionProducts`

---

#### `getFulfillmentOptionStores` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/fulfillment-options/{slug}/stores`

**Get stores for a specific fulfillment option.**

Retrieves stores available for a specific fulfillment option in an application.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*
- `slug` — Slug of the fulfillment option for retrieving details. *(required)*

**Query params:**
- `q` — Query to search product by name.

**Responses:** 200, 400
  200 schema: `FulfillmentOptionStores`

---

#### `uploadBulkFulfillmentOptions` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/fulfillment-options/bulk`

**Upload bulk fulfillment options.**

Uploads a bulk list of fulfillment options for an application, allowing multiple fulfillment configurations to be processed at once.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*

**Request body:** `application/json`
  Schema: `FulfillmentOptionBulk`

**Responses:** 200, 400
  200 schema: `FulfillmentOptionBulkData`

---

#### `validateBulkFulfillmentOptions` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/fulfillment-options/bulk/validate/{type}`

**Validate bulk fulfillment options.**

Validates a bulk list of fulfillment options for an application before processing, ensuring correctness for stores or products.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*
- `type` — Type of entity being validated (stores or products). *(required)*

**Request body:** `application/json`
  Schema: `FulfillmentOptionBulkValidate`

**Responses:** 200, 400
  200 schema: `FulfillmentOptionBulkValidateData`

---

#### `getBulkFulfillmentValidationStatus` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/fulfillment-options/poll/validate/{bulk_id}`

**Validate bulk fulfillment options.**

Validates a bulk list of fulfillment options for an application before processing, ensuring correctness for stores or products.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*
- `bulk_id` — Unique id created by validate api. *(required)*

**Responses:** 200, 400
  200 schema: `FulfillmentOptionBulkValidate`

---

### GeoArea

#### `createGeoArea` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas`

**Creation of GeoArea**

Allows to create and manage GeoAreas, representing groups of geographic regions.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `application_id` — The unique identifier for the sales channel. *(required)*

**Request body:** `application/json`
  Schema: `GeoAreaRequestBody`

**Responses:** 200, 400
  200 schema: `GeoAreaResponseBody`

---

#### `getGeoAreas` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas`

**Get all geoareas in the current application**

Retrieves a listing view of created GeoAreas.

**Path params:**
- `application_id` — A `application_id` is a unique identifier for an application. *(required)*
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `page_size` — Determines the items to be displayed in a page (default: 10)
- `is_active` — Status of GeoAreas (either active or inactive)
- `page_no` — Current page number
- `type` — To fetch the type of a specific geoarea.
- `q` — Used to search for matching results based on the provided input.
- `country_iso_code` — ISO2 code of the country
- `state` — State name
- `city` — City name
- *(+ 2 more query params)*

**Responses:** 200
  200 schema: `GeoAreaGetResponseBody`

---

#### `getGeoArea` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas/{geoarea_id}`

**Get details of the specific geoarea**

This API Returns the data of the specific GeoArea which exists on the platform.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `geoarea_id` — A unique identifier for the GeoArea. *(required)*
- `application_id` — The unique identifier for the sales channel. *(required)*

**Responses:** 200, 404
  200 schema: `GeoAreaDetails`

---

#### `updateGeoArea` — PUT `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas/{geoarea_id}`

**Update the details of existing GeoArea**

Updates the GeoArea with a new name, regions, etc.

**Path params:**
- `company_id` — The unique identifier for the company. *(required)*
- `geoarea_id` — A unique identifier for the GeoArea. *(required)*
- `application_id` — The unique identifier for the sales channel. *(required)*

**Request body:** `application/json`
  Schema: `GeoAreaRequestBody`

**Responses:** 200, 404
  200 schema: `GeoAreaPutResponseBody`

---

#### `downloadGeoareaSampleFile` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas/regions/bulk/sample`

**Download geoarea sample file**

Download a sample file for geoarea data.

**Path params:**
- `company_id` — Unique identifier of the company *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*

**Responses:** 200

---

### Logistics

#### `getCompanyCourierPartnersList` — POST `/service/platform/logistics/v2.0/company/{company_id}/courier-partners`

**Get available company courier partners**

Retrieves a list of courier partners available for shipping based on serviceability criteria, shipment details.

**Path params:**
- `company_id` — The ID of the company. *(required)*

**Request body:** `application/json`
  Schema: `CourierPartnerDetails`

**Responses:** 200, 400
  200 schema: `GenerateShipmentsAndCourierPartnerResult`

---

#### `getApplicationCourierPartnersList` — POST `/service/platform/logistics/v2.0/company/{company_id}/application/{application_id}/courier-partners`

**Get available application courier partners**

Retrieves a list of courier partners available for shipping based on serviceability criteria, shipment details, and delivery rules.

**Path params:**
- `company_id` — The ID of the company. *(required)*
- `application_id` — The ID of the application. *(required)*

**Request body:** `application/json`
  Schema: `CourierPartnerDetails`

**Responses:** 200, 400
  200 schema: `GenerateShipmentsAndCourierPartnerResult`

---

#### `createShipments` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/shipments`

**Create and return shipments**

Create and return shipments.

**Path params:**
- `application_id` — Unique identifier of the sales channel. *(required)*
- `company_id` — The ID of the company. *(required)*

**Request body:** `application/json`
  Schema: `PlatformShipmentsRequestSchema`

**Responses:** 200, 400
  200 schema: `PlatformShipmentsResponseSchema`

---

### OptimalLocations

#### `getOptimalLocations` — POST `/service/platform/logistics/v1.0/company/{company_id}/optimal-locations`

**Get selling locations**

Retrieves a list selling locations which are best suited to fullfil an order for a customer.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `OptimlLocationsRequestSchema`

**Responses:** 200, 400
  200 schema: `OptimalLocationsResult`

---

### PackageMaterial

#### `createPackageMaterial` — POST `/service/platform/logistics/v1.0/company/{company_id}/packaging-materials`

**Create packaging material**

Creates a packaging material

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller. *(required)*

**Query params:**
- `page_no` — The current page number for paginated results.

**Request body:** `application/json`
  Schema: `PackageMaterial`

**Responses:** 201, 400

---

#### `getPackageMaterialList` — GET `/service/platform/logistics/v1.0/company/{company_id}/packaging-materials`

**Get packaging materials**

Retrieves a list of packaging materials

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `page_no` — The current page number for paginated results. (default: 1)
- `page_size` — Determines the items to be displayed in a page (default: 10)
- `q` — Used to search for matching results based on the provided input.
- `size` — Filters items based on given size
- `package_type` — Filters items based on given package_type

**Responses:** 200, 400
  200 schema: `PackagesListResult`

---

#### `updatePackageMaterials` — PATCH `/service/platform/logistics/v1.0/company/{company_id}/packaging-material/{package_material_id}`

**Update packaging material**

Update an existing packaging material

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller. *(required)*
- `package_material_id` — A `package_material_id` is a unique identifier for a Package Material *(required)*

**Request body:** `application/json`
  Schema: `PackageMaterial`

**Responses:** 200, 400
  200 schema: `PackageMaterialResult`

---

#### `getPackageMaterials` — GET `/service/platform/logistics/v1.0/company/{company_id}/packaging-material/{package_material_id}`

**Get packaging material**

Retrieve a single packaging material

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `package_material_id` — A `package_material_id` is a unique identifier for a Package Material *(required)*

**Responses:** 200, 404
  200 schema: `PackageItem`

---

### PackageMaterialRules

#### `createPackageMaterialRule` — POST `/service/platform/logistics/v1.0/company/{company_id}/packaging-material/rules`

**Create packaging rule**

Creates a packaging rule

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller. *(required)*

**Request body:** `application/json`
  Schema: `PackageRule`

**Responses:** 201, 400

---

#### `getPackageMaterialRule` — GET `/service/platform/logistics/v1.0/company/{company_id}/packaging-material/rules/{rule_id}`

**Get packaging material rule**

Retrieve packaging rule details.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller. *(required)*
- `rule_id` — A `package_material_rule_id` is a unique identifier for a Package Material Rule *(required)*

**Responses:** 200, 404
  200 schema: `PackageRuleResult`

---

#### `updatePackageMaterialRule` — PATCH `/service/platform/logistics/v1.0/company/{company_id}/packaging-material/rules/{rule_id}`

**Update packaging rule**

Update an existing packaging rule

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller. *(required)*
- `rule_id` — A `package_material_rule_id` is a unique identifier for a Package Material Rule *(required)*

**Request body:** `application/json`
  Schema: `PackageRule`

**Responses:** 200, 400
  200 schema: `PackageRuleResult`

---

### RegionServiceability

#### `bulkServiceability` — POST `/service/platform/logistics/v2.0/company/{company_id}/courier-partner/{extension_id}/scheme/{scheme_id}/serviceability/bulk`

**Bulk update serviceability of localities**

Bulk operations involve either new serviceability settings or updating existing ones in large quantities.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `extension_id` — Unique Identifier of courier partner extension. *(required)*
- `scheme_id` — Unique identifier for the scheme, used to fetch or modify scheme details. *(required)*

**Request body:** `application/json`
  Schema: `BulkRegionJobDetails`

**Responses:** 200, 400
  200 schema: `BulkRegionResultItemData`

---

#### `getBulkServiceability` — GET `/service/platform/logistics/v2.0/company/{company_id}/courier-partner/{extension_id}/scheme/{scheme_id}/serviceability/bulk`

**Bulk update history**

Retrieves the history of changes made to serviceability settings for a scheme.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `extension_id` — Unique Identifier of courier partner extension. *(required)*
- `scheme_id` — Unique identifier for the scheme, used to fetch or modify scheme details. *(required)*

**Query params:**
- `page_no` — The current page number for paginated results. (default: 1)
- `page_size` — Determines the items to be displayed in a page (default: 12)
- `batch_id` — Unique identifier of bulk job
- `action` — Import or export bulk type
- `status` — Status of the bulk actions
- `country` — Country for which bulk job is initiated
- `region` — Region for which bulk job is initiated
- `start_date` — Fetch job history after a particule date
- *(+ 1 more query params)*

**Responses:** 200, 404
  200 schema: `BulkRegionResult`

---

#### `createPolygon` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/polygon`

**Create polygon-based serviceability for stores**

Creates polygon-based serviceability regions for one or more stores for quick commerce.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*

**Request body:** `application/json`
  Schema: `StorePolygonServiceabilityRequestBody`

**Responses:** 200, 400
  200 schema: `StorePolygonServiceabilityResult`

---

#### `getPolygon` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/polygon`

**Get polygon-based serviceability for stores**

Retrieves polygon-based serviceability configurations for stores for quick commerce.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*

**Query params:**
- `page_number` — Page number to be fetched. (default: 1)
- `page_size` — Determines the items to be displayed in a page (default: 10)

**Responses:** 200, 400
  200 schema: `StorePolygonServiceabilityGetResult`

---

#### `updatePolygon` — PATCH `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/polygon`

**Update polygon-based serviceability for stores**

Updates polygon-based serviceability regions for one or more stores for quick commerce.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*

**Request body:** `application/json`
  Schema: `StorePolygonServiceabilityRequestBody`

**Responses:** 200, 400
  200 schema: `StorePolygonServiceabilityResult`

---

### SampleFileServiceability

#### `sampleFileServiceability` — POST `/service/platform/logistics/v2.0/company/{company_id}/localities/bulk-sample`

**Sample File Download**

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*

**Request body:** `application/json`
  Schema: `BulkRegionServiceabilityTatDetails`

**Responses:** 200, 400
  200 schema: `BulkRegionServiceabilityTatResultItemData`

---

#### `getSampleFileServiceabilityStatus` — GET `/service/platform/logistics/v2.0/company/{company_id}/localities/bulk-sample`

**Get Serviceability TAT sample files generator status**

Get Serviceability TAT sample file generator status

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*

**Query params:**
- `page_no` — The current page number for paginated results. (default: 1)
- `page_size` — Determines the items to be displayed in a page (default: 12)
- `batch_id` — Batch id of the execution

**Responses:** 200, 400
  200 schema: `BulkRegionServiceabilityTatResult`

---

### ShipmentsCourierPartners

#### `getCourierPartners` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/shipment/courier-partners`

**Serviceable Courier Partners**

Get all the serviceable courier partners of a destination and the shipments.

**Path params:**
- `company_id` — Unique identifier of the company. *(required)*
- `application_id` — Unique identifier of the sales channel. *(required)*

**Request body:** `application/json`
  Schema: `ShipmentCourierPartnerDetails`

**Responses:** 200, 400, 422
  200 schema: `ShipmentCourierPartnerResult`

---

### StoreRules

#### `getApplicationConfig` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/store/configuration`

**Get store rule configuration**

Retrieves information about the order routing setup for a single application

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*

**Responses:** 200, 400
  200 schema: `StoreRuleConfigData`

---

#### `insertApplicationConfig` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/store/configuration`

**Create store rule configuration**

Creates a order routing setup for an application, which involves updating sorting settings or rule priorities.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*

**Request body:** `application/json`
  Schema: `StoreRuleConfigData`

**Responses:** 200, 400
  200 schema: `StoreRuleConfigData`

---

#### `updateStoreRulesConfig` — PUT `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/store/configuration`

**Update store rules configuration**

Updates an existing order routing setup for a single application, which involves updating sorting settings or rule priorities.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*

**Request body:** `application/json`
  Schema: `StoreRuleConfigData`

**Responses:** 200, 400
  200 schema: `StoreRuleConfigData`

---

#### `getStoreRules` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/store/rules`

**Get store rules**

Retrieves an existing order routing setup for a single application

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*

**Query params:**
- `page_no` — The current page number for paginated results.
- `page_size` — Determines the items to be displayed in a page
- `status` — Filter rules based on rule status

**Responses:** 200
  200 schema: `GetStoreRulesApiResult`

---

#### `createStoreRules` — POST `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/store/rules`

**Create store rule**

Create a rule within the order routing rules

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*

**Request body:** `application/json`
  Schema: `CreateStoreRuleDetailsSchema`

**Responses:** 200, 400
  200 schema: `StoreRuleResultSchema`

---

#### `getStoreRule` — GET `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/store/rules/{rule_uid}`

**Get store rule**

Retrieves a single rule within the order routing rules

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*
- `rule_uid` — A `rule_uid` is a unique identifier for a particular rule object. *(required)*

**Responses:** 200, 400
  200 schema: `StoreRuleDataSchema`

---

#### `updateStoreRules` — PUT `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/store/rules/{rule_uid}`

**Update store rule**

Updates an existing rule within the order routing rules.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*
- `rule_uid` — A `rule_uid` is a unique identifier for a particular rule object. *(required)*

**Request body:** `application/json`
  Schema: `CreateStoreRuleDetailsSchema`

**Responses:** 200, 400
  200 schema: `StoreRuleUpdateResultSchema`

---

#### `updateStoreRulePriority` — PUT `/service/platform/logistics/v1.0/company/{company_id}/application/{application_id}/store/rules/priority`

**Update Store Rule priority**

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular sale channel. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular application channel. *(required)*

**Request body:** `application/json`
  Schema: `RulePriorityDetails`

**Responses:** 200, 400
  200 schema: `RulePriorityResult`

---

