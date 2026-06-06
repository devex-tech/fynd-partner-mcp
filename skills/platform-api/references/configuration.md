# Configuration

**SDK Class:** `Configuration`  
**Total operations:** 43

## Groups

- **Brands and Companies**: The Brands and Companies serves as a central hub for managing company brands, which are essential for configuring invent
- **Build Configuration**: The build configuration resource centers on retrieving and adjusting the most recent build settings of the sales channel
- **Sales Channel Versions**: The sales channel versions focuses on accessing data about prior versions of the sales channel. It aids in version contr
- **Sales Channel Features**: The sales channel features resource enables to access and control sales channel functionalities. It supports retrieving 
- **Sales Channel Basic Details**: The sales channel basic details is focused on fetching and editing vital information regarding your sales channel. It of
- **Contact**: The Contact streamlines accessing and editing your sales channel contact details. It ensures precise communication with 
- **API Tokens**: The API Token focuses on the management and updating of API tokens for your sales channel. It ensures secure access to y
- **Company and Selling Location**: The Company and Selling Location assists in accessing information related to companies and selling location(also known a
- **Product Listing Configuration**: The product listing configuration oversees the management of product configuration tasks within the sales channel. It em
- **Currency Configuration**: The currency configuration is designed for handling every aspect of currency settings within the Sales channel. It offer
- **Ordering Stores**: Ordering Stores manages all aspects of ordering store configurations within the sales channel. It allows users to retrie
- **Domain**: A unique string that represents the address of a fynd store on the Internet. Check the availability of a domain name for
- **Sales Channel**: Sales Channel handles all operations for sales channel  management, encompassing tasks like creating sales channel, retr
- **Currency**: Currecny Standardized money system facilitating exchange, represented by codes/symbols, essential for financial transact
- **Other Seller Sales Channel**: Handle all operations concerning the cross-seller sales channel, which facilitates multiple sellers in selling their pro

## Operations by Group

### Deployment

#### `getOrderingStoreCookie` — POST `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/ordering-store/select`

**Get ordering store signed cookie**

Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `OrderingStoreSelectRequestSchema`

**Responses:** 200, 400
  200 schema: `SuccessMessageResponseSchema`

---

#### `removeOrderingStoreCookie` — DELETE `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/ordering-store/select`

**Delete Ordering Store signed cookie**

Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200
  200 schema: `SuccessMessageResponseSchema`

---

### General

#### `getBuildConfig` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/build/{platform_type}/configuration`

**Get Build Configuration**

Retrieve latest build configuration, such as app name, landing page image, splash image used in a mobile build.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*
- `platform_type` — The device platform for which the mobile app is built, e.g. android, ios. *(required)*

**Responses:** 200, 422
  200 schema: `MobileAppConfiguration`

---

#### `updateBuildConfig` — PUT `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/build/{platform_type}/configuration`

**Update build configuration**

Modify the existing build configuration, such as app name, landing page image, splash image used in a mobile build.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*
- `platform_type` — The device platform for which the mobile app is built, e.g. android, ios. *(required)*

**Request body:** `application/json`
  Schema: `MobileAppConfigRequestSchema`

**Responses:** 200, 422
  200 schema: `MobileAppConfiguration`

---

#### `getPreviousVersions` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/build/{platform_type}/versions`

**Get previous versions**

Retrieve version details of the app, this includes the build status, build date, version name, latest version, and a lot more.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*
- `platform_type` — The device platform for which the mobile app is built, e.g. android, ios. *(required)*

**Responses:** 200, 422
  200 schema: `BuildVersionHistory`

---

#### `getAppFeatures` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/feature`

**Get sales channel**

Shows feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200, 404
  200 schema: `AppFeatureResponseSchema`

---

#### `updateAppFeatures` — POST `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/feature`

**Update sales channel**

Modify the feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `AppFeatureRequestSchema`

**Responses:** 200, 400
  200 schema: `AppFeature`

---

#### `modifyAppFeatures` — PATCH `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/feature`

**update  sales channel features**

Modify the feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `AppFeatureRequestSchema`

**Responses:** 200, 400, 404
  200 schema: `AppFeature`

---

#### `getAppBasicDetails` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/detail`

**Get sales channel**

Shows basic sales channel details like name, description, logo, domain, company ID, and other related information.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200
  200 schema: `ApplicationDetail`

---

#### `updateAppBasicDetails` — PUT `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/detail`

**Update sales channel basic details**

Modify sales channel details like name, description, logo, domain, company ID, and other related information.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `ApplicationDetail`

**Responses:** 200
  200 schema: `ApplicationDetail`

---

#### `getAppContactInfo` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/information`

**Get sales channel contact**

Fetch data such as social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the sales channel.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200
  200 schema: `ApplicationInformation`

---

#### `updateAppContactInfo` — PUT `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/information`

**Update sales channel contact**

Modify the social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the sales channel.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `ApplicationInformation`

**Responses:** 200
  200 schema: `ApplicationInformation`

---

#### `getAppApiTokens` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/token`

**Get sales channel API tokens**

Retrieve the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google, and Facebook auth.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200
  200 schema: `TokenResponseSchema`

---

#### `updateAppApiTokens` — POST `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/token`

**Update sales channel API tokens**

Add and edit the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google and Facebook auth.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `TokenResponseSchema`

**Responses:** 200, 400
  200 schema: `TokenResponseSchema`

---

#### `getAppCompanies` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/companies`

**List sales channel companies**

Retrieve info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel sales channel

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Query params:**
- `uid` — UID of companies to be fetched
- `page_no` — The current page number to navigate through the given set of results. Default va
- `page_size` — The number of items to retrieve in each page. Default value is 10.

**Responses:** 200
  200 schema: `CompaniesResponseSchema`

---

#### `getAppStores` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/stores`

**list sales channel stores**

Retrieve information of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel sales channel

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Query params:**
- `page_no` — The current page number to navigate through the given set of results. Default va
- `page_size` — The number of items to retrieve in each page. Default value is 10.

**Responses:** 200
  200 schema: `StoresResponseSchema`

---

#### `getInventoryConfig` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/configuration`

**Get inventory configuration**

Retrieve configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200, 404
  200 schema: `ApplicationInventory`

---

#### `updateInventoryConfig` — PUT `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/configuration`

**Update inventory configuration**

Modify the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `ApplicationInventory`

**Responses:** 200, 429
  200 schema: `ApplicationInventory`

---

#### `partiallyUpdateInventoryConfig` — PATCH `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/configuration`

**Partially update inventory configuration**

Modify the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `AppInventoryPartialUpdate`

**Responses:** 200
  200 schema: `ApplicationInventory`

---

#### `getAppCurrencyConfig` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/currency`

**Get sales channel currency configuration**

Retrieve a list of currencies supported in the current sales channel. Moreover, get the cuurency that is set as the default one in the sales channel.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200, 404
  200 schema: `AppSupportedCurrency`

---

#### `updateAppCurrencyConfig` — POST `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/currency`

**Update sales channel currency configuration**

Modify currency configuration settings for the sales channel. Add and edit the currencies supported in the sales channel. Initially, INR will be enabled by default.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `AppSupportedCurrency`

**Responses:** 200
  200 schema: `AppSupportedCurrency`

---

#### `getAppSupportedCurrency` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/currency/supported`

**List supported currencies**

Retrieve a list of supported currencies for the sales channel. A list of currencies allowed in the current sales channel. Moreover, get the name, code, symbol, and the decimal digits of the currencies.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200, 404
  200 schema: `AppCurrencyResponseSchema`

---

#### `getOrderingStoresByFilter` — POST `/service/platform/configuration/v2.0/company/{company_id}/application/{application_id}/ordering-store/stores/filter`

**List ordering stores **

Retrieve ordering stores based on specified filters. Use filters and retrieve the details of the deployment stores (the selling locations where the sales channel will be utilised for placing orders).

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results. Default value is 1
- `page_size` — The number of items to retrieve in each page. Default value is 10.

**Request body:** `application/json`
  Schema: `FilterOrderingStoreRequestSchema`

**Responses:** 200
  200 schema: `OrderingStores`

---

#### `updateOrderingStoreConfig` — POST `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/ordering-store`

**Update ordering store configuration**

Modify configuration settings for ordering stores. Edit the details of the deployment stores (the selling locations where the sales channel will be utilised for placing orders)

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `OrderingStoreConfig`

**Responses:** 200, 400, 404
  200 schema: `DeploymentMeta`

---

#### `getOrderingStoreConfig` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/ordering-store`

**Get ordering store configuration**

Retrieve configuration settings for ordering stores. Retrieve the details of the deployment stores (the selling locations where the sales channel will be utilised for placing orders).

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200, 404
  200 schema: `OrderingStoreConfig`

---

#### `getStaffOrderingStores` — GET `/service/platform/configuration/v2.0/company/{company_id}/application/{application_id}/ordering-store/staff-stores`

**Get staff ordering stores**

Retrieve ordering stores accessible to staff members. Retrieve the details of all stores access given to the staff member (the selling locations where the sales channel will be utilized for placing orders).

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results. Default value is 1
- `page_size` — The number of items to retrieve in each page. Default value is 10.
- `q` — Store code or name of the ordering store.

**Responses:** 200
  200 schema: `OrderingStoresResponseSchema`

---

#### `getDomains` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/domain`

**List  domains**

Retrieve a list of existing domains by its sales channel.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200
  200 schema: `DomainsResponseSchema`

---

#### `addDomain` — POST `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/domain`

**Create domain**

Creates a domain for an sales channel. Note - Only 15 domains can be added to the sales channel

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `DomainAddRequestSchema`

**Responses:** 200, 400
  200 schema: `Domain`

---

#### `removeDomainById` — DELETE `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/domain/{id}`

**Remove domain**

Delete a specific domain from the sales channel. Delete a domain (secondary or shortlink domain) added to a sales channel. It will disable user's access to website, shared links, and other features associated with this domain.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*
- `id` — The unique identifier of the domain *(required)*

**Responses:** 200, 400, 404
  200 schema: `SuccessMessageResponseSchema`

---

#### `changeDomainType` — POST `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/domain/set-domain`

**Update domain**

Modify the type of a specific domain. Primary domain is used as the URL of your website. Short link domain is comparatively smaller and used while generating short links.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `UpdateDomainTypeRequestSchema`

**Responses:** 200, 404
  200 schema: `DomainsResponseSchema`

---

#### `getDomainStatus` — POST `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}/domain/domain-status`

**Get domain status**

Retrieve the status of a specific domain. Shows if the A records and TXT records of the domain correctly points to appropriate IP on Fynd Servers.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `DomainStatusRequestSchema`

**Responses:** 200
  200 schema: `DomainStatusResponseSchema`

---

#### `createApplication` — POST `/service/platform/configuration/v1.0/company/{company_id}/application`

**Create sales channel**

Generate and add a new sales channel. sales channels are sales channel websites which can be configured, personalized and customized. Use this API to create a new sales channel in the current company.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*

**Request body:** `application/json`
  Schema: `CreateApplicationRequestSchema`

**Responses:** 200, 400
  200 schema: `CreateAppResponseSchema`

---

#### `getApplicationById` — GET `/service/platform/configuration/v1.0/company/{company_id}/application/{application_id}`

**Get sales channel by id**

Retrieve detailed information about a specific sales channel. Use sales channel ID to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, token, etc.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Responses:** 200, 404
  200 schema: `ApplicationById`

---

#### `getCurrencies` — GET `/service/platform/configuration/v1.0/company/{company_id}/currencies`

**List currencies**

Retrieve a list of available currencies.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*

**Responses:** 200
  200 schema: `CurrenciesResponseSchema`

---

#### `getDomainAvailibility` — POST `/service/platform/configuration/v1.0/company/{company_id}/domain/suggestions`

**List suggestion domain**

Check the availability of a specific domain. Use this API to check the domain availability before linking it to sales channel. Also sends domain suggestions that are similar to the queried domain. Note - Custom domain search is currently powered by GoDaddy provider.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*

**Request body:** `application/json`
  Schema: `DomainSuggestionsRequestSchema`

**Responses:** 200
  200 schema: `DomainSuggestionsResponseSchema`

---

#### `getBrandsByCompany` — GET `/service/platform/configuration/v1.0/company/{company_id}/inventory/brands-by-companies`

**List brands by company**

Retrieve all the brands added in a company. Get all the brand names, along with URLs of their logo, banner, and portrait image. can be searched on brand_name.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*

**Query params:**
- `q` — Search text for brand name

**Responses:** 200, 422
  200 schema: `BrandsByCompanyResponseSchema`

---

#### `getCompanyByBrands` — POST `/service/platform/configuration/v1.0/company/{company_id}/inventory/companies-by-brands`

**List companies by brand**

Retrieve a paginated list of companies associated with specific brands. Can be searched using the brand ID and company name

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results. Default value is 1
- `page_size` — The number of items to retrieve in each page. Default value is 10.

**Request body:** `application/json`
  Schema: `CompanyByBrandsRequestSchema`

**Responses:** 200
  200 schema: `CompanyByBrandsResponseSchema`

---

#### `getStoreByBrands` — POST `/service/platform/configuration/v2.0/company/{company_id}/inventory/stores-by-brands`

**Get store by brands**

Retrieve stores associated with specific brands. Retrieve a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail. filtering can be done on brand id and brand names

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results. Default value is 1
- `page_size` — The number of items to retrieve in each page. Default value is 10.

**Request body:** `application/json`
  Schema: `StoreByBrandsRequestSchema`

**Responses:** 200
  200 schema: `StoreByBrandsResponseSchema`

---

#### `getOtherSellerApplications` — GET `/service/platform/configuration/v1.0/company/{company_id}/other-seller-applications`

**Get other sales channel**

Retrieve sales channels of  other sellers. Retrieve all other seller sales channels that were not created within the current company. but have opted for the current company's inventory.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results. Default value is 1
- `page_size` — The number of items to retrieve in each page. Default value is 10.

**Responses:** 200
  200 schema: `OtherSellerApplications`

---

#### `getOtherSellerApplicationById` — GET `/service/platform/configuration/v1.0/company/{company_id}/other-seller-applications/{id}`

**Get others sales. channel**

Retrieve details of a seller sales channel that was not created within the current company but has opted for the current company's inventory and searched via the sales channel ID of another sales channel

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `id` — Application Id *(required)*

**Responses:** 200, 404
  200 schema: `OptedApplicationResponseSchema`

---

#### `optOutFromApplication` — PUT `/service/platform/configuration/v1.0/company/{company_id}/other-seller-applications/{id}/opt_out`

**opt out of marketplaces**

This API allows businesses to opt out of sharing their inventory with external seller sales channels. By using this API, companies or stores can prevent specific seller sales channels from fetching their inventory data. This feature is useful for businesses that want to control who  can access their

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `id` — Alphanumeric ID allotted to an application (sales channel website) created withi *(required)*

**Request body:** `application/json`
  Schema: `OptOutInventory`

**Responses:** 200, 400, 404
  200 schema: `SuccessMessageResponseSchema`

---

#### `getCurrencyExchangeRates` — GET `/service/platform/configuration/v2.0/company/{company_id}/currency-exchange`

**Get currency exchange rates**

Retrieve a list of currency exchange rates, relative to a provided currency.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*

**Query params:**
- `currency_code` — The 3-letter ISO 4217 code representing the base currency for the exchange rates (default: INR)
- `exchange_currency_code` — A 3-letter ISO 4217 currency code for which exchange rates against the base curr
- `exchange_country_code` — The country code for which exchange rates against the base currency are requeste

**Responses:** 200, 422
  200 schema: `CurrencyExchangeResponseV2`

---

### Pagination

#### `getApplications` — GET `/service/platform/configuration/v1.0/company/{company_id}/application`

**List sales channel stores**

Retrieve a list of available sales channels. sales channels are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of sales channels created within a company.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*

**Query params:**
- `page_no` — 
- `page_size` — 
- `q` — Search param by name or domain

**Responses:** 200
  200 schema: `ApplicationsResponseSchema`

---

