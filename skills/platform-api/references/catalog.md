# Catalog

**SDK Class:** `Catalog`  
**Total operations:** 162

## Groups

- **Brand**: A brand represents a specific brand or manufacturer associated with a product. Brands help customers identify and differ
- **Department**: A department categorizes products into different sections or categories based on their type or purpose. Departments help
- **Insights and Metrics**: The Insights and Metrics offers valuable data insights and metrics concerning your catalog information, specifically foc
- **Category**: Categories are hierarchical structure that enables a systematic organization of products for better discoverability of p
- **Collection**: The Collection is grouping of products together within an e-commerce platform, enabling sellers to curate and showcase t
- **Sales Channel Cataloging**: Sales Channel Cataloging is the customization of product listings, query filters, and catalog configuration for a sales 
- **Sales Channel Product**: Sales channel product is used for management of all the product listed on the sales Channel.

Sales channel products ref
- **Marketplaces**: A Marketplace is a sales platform where products from various sales channel and companies are listed, offering customers
- **HSN Code**: The HSN code  focuses on managing Harmonized System of Nomenclature (HSN) codes, which are internationally recognized co
- **Product**: The "Product" resource offers detailed insights into items available for sale on Sales Channels or Marketplaces. It prov
- **Search Keywords and Autocomplete**: This resource efficiently manages search keywords and autocomplete features. It offers intuitive functionalities such as
- **Product Template**: The Product Template used for efficient product data organization through predefined templates. Product templates serve 
- **Seller Onboarding**: The Seller Onboarding used for management of seller accounts and provide insights into company metrics related to brand 
- **Stores**: Obtain store details and access all attributes for comprehensive product information and categorization.
- **Product Bundle**: The Product Bundle  is dedicated to facilitating the creation, updating, and retrieval of various product bundles for a 
- **Size Guide**: Size Guide  facilitates the management of size-related information for products, aiding customers in making informed pur
- **Product Attribute**: Product Attribute are attributes associated with products, providing a structured way to define and categorize product c
- **Selling Location**: A selling location represents a geographical location where your stores,  pop-up stores, headquarters, and warehouses ex
- **Sales Channel**: A sales channel, also known as application, enables the seller to list and sell their products. Different types of sales
- **Taxation**: A group of API that are used to create tax. Taxation consists of two parts: Rule and Version.  The rule contains static 
- **PriceFactory**: A Price Factory is a resource that enables the creation and management of  pricing rules for products. It allows you to 

## Operations by Group

### Collections

#### `getApplicationFilterValues` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/filter-options/{filter_key}/values`

**List product filters**

This API is designed to retrieve the filter values for all available options within the selected filter, such as "red" for color.


**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `filter_key` — A `filter_key` is a filter key which returns all the available filter values. *(required)*

**Query params:**
- `c` — The search filter parameters for collection items. All the parameter filtered fr
- `collection_id` — A `collection_id` is a unique identifier for a particular collection.
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 10. (default: 10)
- `q` — The `q` parameter allows you to search and filter specific data within the filte

**Responses:** 200
  200 schema: `GetQueryFiltersValuesResponseSchema`

---

#### `getApplicationFilterKeys` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/filter-options/keys`

**List filter keys**

Retrieve the details of all applicable product filters, such as Color, Brand, and Category, indicating the criteria keys where filters can be applied.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `c` — The search filter parameters for collection items. All the parameter filtered fr

**Responses:** 200
  200 schema: `GetQueryFiltersKeysResponseSchema`

---

#### `addCollectionItems` — POST `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/collections/{id}/items/`

**Create items in a collection**

Adds items to a collection specified by its id

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `id` — A `id` is a unique identifier of a collection. *(required)*

**Request body:** `application/json`
  Schema: `CollectionItemUpdateSchema`

**Responses:** 200
  200 schema: `CommonResponseSchemaCollection`

---

#### `getCollectionItems` — GET `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/collections/{collection_id}/items/`

**List items of collection**

Get items from a collection specified by its collection_id with enhanced search capabilities.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `collection_id` — A `collection_id` is a unique identifier of a collection. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results (default: 1)
- `page_size` — Number of items to retrieve in each page. Default is 10. (default: 10)
- `q` — Query string to search collection items by substring match on item's name (case-

**Responses:** 200
  200 schema: `GetCollectionItemsResponseSchemaV2`

---

### General

#### `getCatalogInsights` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/analytics/insights/`

**Get catalog counts**

Retrieve the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `brand` — Brand slug that is to be searched.

**Responses:** 200
  200 schema: `CatalogInsightResponseSchema`

---

#### `updateAppBrand` — PATCH `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/brand/{brand_uid}`

**Update sales channel brand**

Modify data associated to the brand for that particular sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `brand_uid` — A `brand id` is a unique identifier for a particular brand. *(required)*

**Request body:** `application/json`
  Schema: `ApplicationBrandJson`

**Responses:** 200
  200 schema: `SuccessResponseObject`

---

#### `getCategories` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/categories`

**List categories**

Retrieve a list of categories associated to company and sales channel. user can filter on departments.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `department` — The name of the department. Use this parameter to filter products by a particula

**Responses:** 200
  200 schema: `CategoryListingResponseSchema`

---

#### `updateAppCategory` — PATCH `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/category/{category_uid}`

**Update sales channel category**

Modify category data related to the sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `category_uid` — A `category id` is a unique identifier for a particular category. *(required)*

**Request body:** `application/json`
  Schema: `ApplicationCategoryJson`

**Responses:** 200
  200 schema: `SuccessResponseObject`

---

#### `createCollection` — POST `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/collections/`

**Create a collection**

Create a collection for a sales channel linked to a company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `q` — Get collection list filtered by q string,
- `schedule_status` — Get collection list filtered by scheduled status,
- `type` — Type of the collections
- `tags` — Each response will contain next_id param, which should be sent back to make pagi
- `is_active` — Get collections filtered by active status.
- `page_no` — The page number to navigate through the given set of results.
- `page_size` — Number of items to retrieve in each page. Default is 12.

**Request body:** `application/json`
  Schema: `CreateCollection`

**Responses:** 200
  200 schema: `CollectionCreateResponseSchema`

---

#### `getQueryFilters` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/collections/query-options/`

**Get collection query filters**

Retrieve query filters to configure a collection for a company and a sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200
  200 schema: `GetQueryFiltersResponseSchema`

---

#### `deleteCollection` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/collections/{id}/`

**Delete a collection**

Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `id` — A `id` is a unique identifier of a collection. *(required)*

**Responses:** 200
  200 schema: `CommonResponseSchemaCollection`

---

#### `updateCollection` — PUT `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/collections/{id}/`

**Update a collection**

Update a collection by it's id. On successful request, returns the updated collection

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `id` — A `id` is a unique identifier of a collection. *(required)*

**Request body:** `application/json`
  Schema: `UpdateCollection`

**Responses:** 200
  200 schema: `UpdateCollection`

---

#### `getCollectionDetail` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/collections/{slug}/`

**Get a collection**

Get the details of a collection by its slug.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `slug` — A `slug` is a human readable, URL friendly unique identifier of an object. Pass  *(required)*

**Responses:** 200
  200 schema: `GetCollectionDetailResponseSchema`

---

#### `updateAppDepartment` — PATCH `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/department/{department_uid}`

**Update sales channel department**

Modify department data associated to the sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `department_uid` — A `department id` is a unique identifier for a particular department. *(required)*

**Request body:** `application/json`
  Schema: `ApplicationDepartmentJson`

**Responses:** 200
  200 schema: `SuccessResponseObject`

---

#### `getDepartments` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/departments`

**List departments**

Retrieve a list of departments associated with a comapny and sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200
  200 schema: `DepartmentResponseSchema`

---

#### `getAppInventory` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/inventory/`

**List sales channel inventory**

Retrieve inventory data related to the sales channel. this can be used  to get the Inventory status of products.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `item_ids` — The Item Id of the product.
- `store_ids` — The Store Id of products to fetch inventory.
- `brand_ids` — The Brand Id of products to fetch inventory.
- `seller_identifiers` — Unique seller_identifier of the product.
- `timestamp` — Timestamp in UTC format (2020-07-23T10:27:50Z)
- `page_size` — The number of items to retrieve in each page. (default: 12)
- `page_id` — Page ID to retrieve next set of results.
- `qty_gt` — This field allows you to filter for inventories that have quantity greater than 
- *(+ 4 more query params)*

**Responses:** 200
  200 schema: `InventoryStockResponseSchema`

---

#### `getConfigurations` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/product-configuration/`

**Get product configurations**

Retrieve a detailed configurations for product catalog specific to a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200
  200 schema: `GetAppCatalogConfiguration`

---

#### `createConfigurationProductListing` — POST `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/product-configuration/`

**Create product listing configuration**

Add configuration for products & listing specific to a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `AppConfiguration`

**Responses:** 200
  200 schema: `GetAppCatalogConfiguration`

---

#### `getCatalogConfiguration` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/product-configuration/metadata/`

**Get catalog configuration meta data**

Retrieve configuration meta data for the catalog specific to a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200
  200 schema: `GetCatalogConfigurationMetaData`

---

#### `getConfigurationByType` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/product-configuration/{type}/`

**Get configuration**

Retrieve configuration details based on a specific type in the catalog for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `type` — type can be brands, categories etc. *(required)*

**Query params:**
- `include_inactive` — Pass the `include_inactive` parameter to retrieve inactive brand or category det (default: False)

**Responses:** 200
  200 schema: `GetAppCatalogEntityConfiguration`

---

#### `createConfigurationByType` — POST `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/product-configuration/{type}/`

**Create configuration**

Add configuration details based on a specific type in the catalog for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `type` — type can be brands, categories etc. *(required)*

**Request body:** `application/json`
  Schema: `AppConfiguration`

**Responses:** 200
  200 schema: `GetAppCatalogConfiguration`

---

#### `getAppProduct` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/product/{item_id}/`

**Get sales channel product**

Retrieve sales channel product details by its item_id and depending upon filters sent in request.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `item_id` — product id for a particular product. *(required)*

**Responses:** 200
  200 schema: `OwnerAppItemResponseSchema`

---

#### `updateAppProduct` — PATCH `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/product/{item_id}/`

**Update sales channel product**

Allows to update data associated to a item by its item_id for a sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `item_id` — A `item_id` is a unique identifier for a particular item. *(required)*

**Request body:** `application/json`
  Schema: `ApplicationItemMeta`

**Responses:** 200
  200 schema: `SuccessResponseObject`

---

#### `getProductDetailBySlug` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/products/{slug}`

**Get product details**

Retrieve detailed product information using a product slug. 

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `slug` — The unique identifier of a product. i.e; `slug` of a product. You can retrieve t *(required)*

**Responses:** 200
  200 schema: `ProductDetail`

---

#### `getAppProductPrices` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/raw-products/price`

**Get prices for specific raw product items**

Fetch pricing details for multiple raw products by their item IDs, scoped to a particular company and sales channel.

**Path params:**
- `company_id` — Unique identifier for the seller (company). *(required)*
- `application_id` — Unique identifier for the application (sales channel). *(required)*

**Query params:**
- `item_ids` — List of item IDs for which to retrieve pricing. *(required)*

**Responses:** 200
  200 schema: `AppProductPricesSchema`

---

#### `getAppReturnConfiguration` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/return-config`

**Get product-return configuration**

Get Product Return configuration set at an sales channel level

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200
  200 schema: `AppReturnConfigResponseSchema`

---

#### `createAppReturnConfiguration` — POST `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/return-config`

**Create product return configuration**

This allows you to configure all return-related settings, such as is_returnable and return window etc. for sales channel level

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `CreateUpdateAppReturnConfig`

**Responses:** 200
  200 schema: `SuccessResponseObject`

---

#### `updateAppReturnConfiguration` — PUT `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/return-config`

**Update product return configuration**

Update Return configuration level set for an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `CreateUpdateAppReturnConfig`

**Responses:** 200
  200 schema: `SuccessResponseObject`

---

#### `deleteAppCategoryReturnConfiguration` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/return-config/categories`

**Delete product return configuration**

Delete Category level sales channel Return Configuration setttings

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `DeleteAppCategoryReturnConfig`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `getAppCategoryReturnConfig` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/return-config/categories`

**Get category return configuration**

Get all category level configuration level set for an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sales channel. *(required)*

**Query params:**
- `q` — Get return configurations for categories by matching the search string with cate
- `page_no` — The page number to navigate through the given set of results (default: 1)
- `page_size` — Number of items to retrieve in each page. Default is 10. (default: 12)

**Responses:** 200
  200 schema: `BaseAppCategoryReturnConfigResponseSchema`

---

#### `createAppCategoryReturnConfiguration` — POST `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/return-config/categories`

**Create return configuration**

Create Category level sales channel Return Configuration setttings

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `BaseAppCategoryReturnConfig`

**Responses:** 200
  200 schema: `SuccessResponseObject`

---

#### `updateAppCategoryReturnConfiguration` — PUT `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/return-config/categories`

**Update return Configuration**

Update Category level sales channel Return Configuration setttings

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `BaseAppCategoryReturnConfig`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `getAutocompleteConfig` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/autocomplete/`

**Get autocomplete configuration**

Get custom autocomplete keyword configuration for a specific sales channel which allows you to map any endpoint with these keywords to give you the ultimate suggestion results.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200
  200 schema: `GetAutocompleteWordsResponseSchema`

---

#### `createCustomAutocompleteRule` — POST `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/autocomplete/`

**Create autocomplete configurations**

Create custom autocomplete keyword configurations for a specific sales channel to map any endpoint with these keywords.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `CreateAutocompleteKeyword`

**Responses:** 200
  200 schema: `CreateAutocompleteWordsResponseSchema`

---

#### `deleteAutocompleteKeyword` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/autocomplete/{id}/`

**Delete autocomplete keyword**

Delete custom autocomplete keyword configurations for a specific sales channel by its id.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `id` — A `id` is a unique identifier for a particular detail. Pass the `id` of the keyw *(required)*

**Responses:** 200
  200 schema: `DeleteResponseSchema`

---

#### `getAutocompleteKeywordDetail` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/autocomplete/{id}/`

**Get autocomplete keyword**

Retrieve detailed information about a specific autocomplete keyword for a specific sales channel by its id.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `id` — A `id` is a unique identifier for a particular detail. Pass the `id` of the keyw *(required)*

**Responses:** 200
  200 schema: `GetAutocompleteWordsResponseSchema`

---

#### `updateAutocompleteKeyword` — PUT `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/autocomplete/{id}/`

**Update autocomplete keyword**

Update a specific autocomplete keyword configuration by its id for a specific sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `id` — A `id` is a unique identifier for a particular detail. Pass the `id` of the keyw *(required)*

**Request body:** `application/json`
  Schema: `CreateAutocompleteKeyword`

**Responses:** 200
  200 schema: `GetAutocompleteWordsResponseSchema`

---

#### `deleteSearchConfiguration` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/configuration/`

**Delete search configuration**

Delete Search Configuration for a specific sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200
  200 schema: `DeleteSearchConfigurationResponseSchema`

---

#### `getSearchConfiguration` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/configuration/`

**Get Search configuration**

Get search configuration for a specific company and sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200
  200 schema: `GetSearchConfigurationResponseSchema`

---

#### `createSearchConfiguration` — POST `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/configuration/`

**Create search configuration**

Create search configuration for the catalog for a specific company and sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `CreateSearchConfigurationRequestSchema`

**Responses:** 200
  200 schema: `CreateSearchConfigurationResponseSchema`

---

#### `updateSearchConfiguration` — PUT `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/configuration/`

**Update search configuration**

Allows you to modify searchable attributes for an sales channel. searchable attributes are the fields on which the products are searched.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `UpdateSearchConfigurationRequestSchema`

**Responses:** 200
  200 schema: `UpdateSearchConfigurationResponseSchema`

---

#### `getAllSearchKeyword` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/keyword/`

**List search keywords**

Get all custom search keywords for a specific company and sales channel allows you to map certain conditions with the keywords to give you ultimate results.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Responses:** 200
  200 schema: `GetSearchWordsResponseSchema`

---

#### `createCustomKeyword` — POST `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/keyword/`

**Create search keywords**

Create a Custom Search Keywords for a specific company and sales channel allows you to map certail conditions with the keywords to give you ultimate results.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `CreateSearchKeyword`

**Responses:** 200
  200 schema: `GetSearchWordsData`

---

#### `deleteSearchKeywords` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/keyword/{id}/`

**Delete search keywords**

Delete a search keywords by its id for a specific company and sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `id` — A `id` is a unique identifier for a particular detail. Pass the `id` of the keyw *(required)*

**Responses:** 200
  200 schema: `DeleteResponseSchema`

---

#### `getSearchKeywords` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/keyword/{id}/`

**Get search keywords**

Retrieve a list of a specific list of keywords by its id for a specific company and sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `id` — A `id` is a unique identifier for a particular detail. Pass the `id` of the keyw *(required)*

**Responses:** 200
  200 schema: `GetSearchWordsDetailResponseSchema`

---

#### `updateSearchKeywords` — PUT `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/search/keyword/{id}/`

**Update search keywords**

Update a specific search keyword by its id for a specific company and sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `id` — A `id` is a unique identifier for a particular detail. Pass the `id` of the keyw *(required)*

**Request body:** `application/json`
  Schema: `CreateSearchKeyword`

**Responses:** 200
  200 schema: `GetSearchWordsData`

---

#### `updateAppLocation` — PATCH `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/store/{store_uid}`

**Update sales channel location**

Modify location data related to the sales channel.

**Path params:**
- `company_id` — Id of the company associated to location custom json. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `store_uid` — store id for which the custom_json is associated. *(required)*

**Request body:** `application/json`
  Schema: `ApplicationStoreJson`

**Responses:** 200
  200 schema: `SuccessResponseObject`

---

#### `getCategoryData` — GET `/service/platform/catalog/v1.0/company/{company_id}/category/{uid}/`

**Get category by uid**

Retrieve detailed information about a specific category by its uid for a specific company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `uid` — Category unique id *(required)*

**Responses:** 200
  200 schema: `SingleCategoryResponseSchema`

---

#### `getSellerInsights` — GET `/service/platform/catalog/v1.0/company/{company_id}/cross-selling/{seller_app_id}/analytics/insights/`

**Get seller catalog counts**

Retrieve the count of catalog related data for sellers.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `seller_app_id` — Id of the seller application which is serving the invetory/catalog of the compan *(required)*

**Responses:** 200
  200 schema: `CrossSellingResponseSchema`

---

#### `getDepartmentData` — GET `/service/platform/catalog/v1.0/company/{company_id}/departments/{uid}/`

**Get department by uid**

Retrieve detailed information about a specific department for a specific company by uid.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `uid` — A `uid` is a unique identifier of a department. *(required)*

**Responses:** 200
  200 schema: `DepartmentsResponseSchema`

---

#### `listTemplateBrandTypeValues` — GET `/service/platform/catalog/v1.0/company/{company_id}/downloads/configuration/`

**List template brand**

Retrieve values related to template brand types for a specific company. The filter type query parameter defines what type of data to return. 

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Query params:**
- `filter` — A `filter` is the unique identifier of the type of value required. *(required)*
- `template_tag` — A `template_tag` is the identifier of the type of template required.
- `item_type` — A `item_type` is the identifier of the type of template required.

**Responses:** 200
  200 schema: `ProductConfigurationDownloads`

---

#### `bulkHsnCode` — POST `/service/platform/catalog/v1.0/company/{company_id}/hsn/bulk/`

**Create Bulk update HSN**

Execute bulk updates for HSN codes across multiple products.

**Path params:**
- `company_id` — company id *(required)*

**Request body:** `application/json`
  Schema: `BulkHsnUpsert`

**Responses:** 200
  200 schema: `BulkHsnResponseSchema`

---

#### `getHsnCode` — GET `/service/platform/catalog/v1.0/company/{company_id}/hsn/{id}/`

**List HSN code**

Retrieve the HSN code for a product.

**Path params:**
- `company_id` — company id *(required)*
- `id` — Unique id *(required)*

**Responses:** 200
  200 schema: `HsnCode`

---

#### `updateHsnCode` — PUT `/service/platform/catalog/v1.0/company/{company_id}/hsn/{id}/`

**Update HSN code**

Modify the HSN code associated with a product.

**Path params:**
- `company_id` — company id *(required)*
- `id` — Unique id *(required)*

**Request body:** `application/json`
  Schema: `HsnUpsert`

**Responses:** 200
  200 schema: `HsnCode`

---

#### `createBulkInventoryJob` — POST `/service/platform/catalog/v1.0/company/{company_id}/inventory/bulk/`

**Create bulk inventory upload job**

Helps to create a bulk Inventory upload job.

**Path params:**
- `company_id` — Company Id in which Inventory to be uploaded. *(required)*

**Request body:** `application/json`
  Schema: `BulkInventoryJob`

**Responses:** 200
  200 schema: `BulkResponseSchema`

---

#### `deleteBulkInventoryJob` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/inventory/bulk/{batch_id}/`

**Delete inventory bulk upload job**

Allows to delete bulk Inventory job associated with company.

**Path params:**
- `company_id` — Company Id of the company of which bulk Inventory job is to be deleted. *(required)*
- `batch_id` — Batch Id of the bulk delete job. *(required)*

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `createBulkInventory` — POST `/service/platform/catalog/v1.0/company/{company_id}/inventory/bulk/{batch_id}/`

**Create bulk inventory**

Helps to create products in bulk push to kafka for approval/creation.

**Path params:**
- `company_id` — Company Id in which Inventory is to be uploaded. *(required)*
- `batch_id` — Batch Id of the bulk create job. *(required)*

**Request body:** `application/json`
  Schema: `InventoryBulkRequestSchema`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `getInventoryExport` — GET `/service/platform/catalog/v1.0/company/{company_id}/inventory/download/`

**list product inventory**

Retrieves inventory for all products for that particular company

**Path params:**
- `company_id` — Company Id in which assets to be uploaded. *(required)*

**Responses:** 200
  200 schema: `InventoryExportJob`

---

#### `createInventoryExportJob` — POST `/service/platform/catalog/v1.0/company/{company_id}/inventory/download/`

**Create inventory export job**

Helps to create a Inventory export job.

**Path params:**
- `company_id` — Company Id in which assets to be uploaded. *(required)*

**Request body:** `application/json`
  Schema: `InventoryExportRequestSchema`

**Responses:** 200
  200 schema: `InventoryExportResponseSchema`

---

#### `exportInventoryConfig` — GET `/service/platform/catalog/v1.0/company/{company_id}/inventory/download/configuration/`

**Get export inventory configuration**

Retrieve List of different filters like brand, store, and type for inventory export.

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*

**Query params:**
- `filter_type` — filter type from any one of ['brand', 'store', 'type']

**Responses:** 200
  200 schema: `InventoryConfig`

---

#### `downloadInventoryTemplateView` — GET `/service/platform/catalog/v1.0/company/{company_id}/inventory/templates/download/`

**Download inventory template data**

Allows you to download inventory product template data for a specific company in formats like csv and excel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Query params:**
- `schema_type` — Specifies the type of template to download. Either quantity or price *(required)*
- `type` — File extension type *(required)*

**Responses:** 200

---

#### `validateProductTemplateSchema` — GET `/service/platform/catalog/v1.0/company/{company_id}/inventory/templates/validation/schema/`

**Validate product template schema**

Allows you to list all product templates validation values for all the fields present in the database for a specific company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Query params:**
- `item_type` — An `item_type` defines the type of item. The default value is standard. *(required)*
- `schema_type` — Schema of price or quantity template

**Responses:** 200
  200 schema: `InventoryValidationResponseSchema`

---

#### `getMarketplaceOptinDetail` — GET `/service/platform/catalog/v1.0/company/{company_id}/marketplaces/`

**Get opt-in**

Allows to fetch opt-in information for a company.

**Path params:**
- `company_id` —  *(required)*

**Responses:** 200
  200 schema: `GetOptInPlatform`

---

#### `getCompanyBrandDetail` — GET `/service/platform/catalog/v1.0/company/{company_id}/marketplaces/company-brand-details/`

**list Company Brand of Optin**

Get the details of the Brands associated with the given company_id passed which has opt-in.

**Path params:**
- `company_id` — The company id for which the detail needs to be retrieved. *(required)*

**Query params:**
- `is_active` — The is_active status for the optin id.
- `q` — The search value to filter the list.
- `page_no` — The number of page for the company id.
- `page_size` — Number of records that can be seen on the page for the company id.
- `marketplace` — The marketplace platform associated with the company id.

**Responses:** 200
  200 schema: `OptinCompanyBrandDetailsView`

---

#### `getCompanyDetail` — GET `/service/platform/catalog/v2.0/company/{company_id}/marketplaces/company-details/`

**Get Company**

Get the details of the company associated with the given company_id passed which has opt-in.

**Path params:**
- `company_id` — The company id for which the detail needs to be retrieved. *(required)*

**Responses:** 200
  200 schema: `OptinCompanyDetail`

---

#### `getCompanyMetrics` — GET `/service/platform/catalog/v1.0/company/{company_id}/marketplaces/company-metrics/`

**Get company metrics**

Allows viewing company metrics, including brand and store status, as well as the number of verified and unverified products, company documents, and store documents.

**Path params:**
- `company_id` — The company id for which the detail needs to be retrieved. *(required)*

**Responses:** 200
  200 schema: `OptinCompanyMetrics`

---

#### `getProductAttributes` — GET `/service/platform/catalog/v1.0/company/{company_id}/product-attributes/`

**List product attributes**

Retrieve attributes attached to products based on their L3 category.

**Path params:**
- `company_id` — The company id for which the detail needs to be retrieved. *(required)*

**Query params:**
- `category` — It is the name of the l3 cateogry *(required)*
- `filter` — If true, returns filtered values, else returns all the attributes

**Responses:** 200
  200 schema: `ProductAttributesResponseSchema`

---

#### `getAttribute` — GET `/service/platform/catalog/v1.0/company/{company_id}/product-attributes/{attribute_slug}`

**Get attribute detail by slug**

Retrieve the attribute detail for catalog listings by attribute slug passed for a specific company.

**Path params:**
- `company_id` — The company id for which the detail needs to be retrieved. *(required)*
- `attribute_slug` — Slug of the attribute for which you want to view the details *(required)*

**Responses:** 200
  200 schema: `AttributeDetail`

---

#### `createProductAssetsInBulk` — POST `/service/platform/catalog/v1.0/company/{company_id}/products/assets/bulk/`

**Create product assets in bulk**

Helps to create a bulk asset upload job.

**Path params:**
- `company_id` — Company Id in which assets to be uploaded. *(required)*

**Request body:** `application/json`
  Schema: `ProductBulkAssets`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `createBulkProductUploadJob` — POST `/service/platform/catalog/v1.0/company/{company_id}/products/bulk`

**Create products bulk upload**

This API helps to create a bulk products upload job.

**Path params:**
- `company_id` — Company Id in which assets to be uploaded. *(required)*

**Request body:** `application/json`
  Schema: `BulkJob`

**Responses:** 200
  200 schema: `BulkResponseSchema`

---

#### `deleteProductBulkJob` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/products/bulk/{batch_id}`

**Delete product bulk-upload job**

Allows to delete bulk product job associated with company.

**Path params:**
- `company_id` — Company Id of the company associated to size that is to be deleted. *(required)*
- `batch_id` — Batch Id of the bulk product job to be deleted. *(required)*

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `createProductsInBulk` — POST `/service/platform/catalog/v1.0/company/{company_id}/products/bulk/{batch_id}`

**Create products in bulk**

Helps to create products in bulk push to kafka for approval/creation.

**Path params:**
- `company_id` — Company Id in which assets to be uploaded. *(required)*
- `batch_id` — Batch Id in which assets to be uploaded. *(required)*

**Request body:** `application/json`
  Schema: `BulkProductRequestSchema`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `listProductTemplateExportDetails` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/downloads/`

**List export product templates**

Retrieve export details related to product templates for a specific company. Can view details including trigger data, task id , etc.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Responses:** 200
  200 schema: `ProductDownloadsResponseSchema`

---

#### `listHSNCodes` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/hsn/`

**List HSN codes**

Retrieve a list of Harmonized System Nomenclature (HSN) codes for a company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Responses:** 200
  200 schema: `HSNCodesResponseSchema`

---

#### `getProductTags` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/tags`

**List product tags**

Retrieve tags data associated to a particular company.

**Path params:**
- `company_id` — Company Id for which tags to be fetched. *(required)*

**Responses:** 200
  200 schema: `ProductTagsViewResponseSchema`

---

#### `listProductTemplate` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/templates/`

**List product templates**

Allows you to list all product templates for a specific company. also can filter by department.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Query params:**
- `department` — A `department` is the name of a particular department. *(required)*
- `page_no` — The page number to navigate through the given set of results (default: 1)
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)

**Responses:** 200
  200 schema: `TemplatesResponseSchema`

---

#### `listProductTemplateCategories` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/templates/categories/`

**List product template categories**

Allows you to list all product template categories values for the departments specified for a specific company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Query params:**
- `departments` — A `department` is name of a departments whose category needs to be listed. Can s *(required)*
- `item_type` — An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc. *(required)*

**Responses:** 200
  200 schema: `ProdcutTemplateCategoriesResponseSchema`

---

#### `downloadProductTemplateViews` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/templates/{slug}/download/`

**Download product template view **

Allows you to download product template data by its slug for a specific company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `slug` — A `slug` is a unique identifier for a particular template. *(required)*

**Query params:**
- `item_type` — An `item_type` defines the type of item. The default value is standard.
- `type` — Format type of the sample file. The default value is excel.

**Responses:** 200

---

#### `validateProductTemplate` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/templates/{slug}/validation/schema/`

**Validate product template**

Allows you to list all product templates validation values by its slug for all the fields present in the database for a specific company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `slug` — A `slug` is a unique identifier for a particular template. *(required)*

**Query params:**
- `item_type` — An `item_type` defines the type of item. The default value is standard.
- `bulk` — This specification determines the schema type to be retrieved. When set to true,

**Responses:** 200
  200 schema: `TemplatesValidationResponseSchema`

---

#### `validateProductGlobalTemplate` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/templates/validation/schema/`

**Validate product template**

Allows you to list all product templates global validation values for all the fields present in the database for a specific company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Query params:**
- `item_type` — An `item_type` defines the type of item. The default value is standard.
- `bulk` — This specification determines the schema type to be retrieved. When set to true,

**Responses:** 200, 422
  200 schema: `TemplatesGlobalValidationResponseSchema`

---

#### `getProductValidation` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/validation/`

**Get valid products**

Retrieve validation data for products at company level.

**Path params:**
- `company_id` — Validates data against given company *(required)*

**Responses:** 200
  200 schema: `ValidateProduct`

---

#### `getProductSize` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/{item_id}/sizes/`

**List product size**

Retrieve data associated to a particular product size.

**Path params:**
- `company_id` — Company Id of the product size. *(required)*
- `item_id` — Item Id of the product size. *(required)*

**Query params:**
- `item_code` — Item code of the product size.
- `brand_uid` — Brand Id of the product size.
- `uid` — Id of the product size.

**Responses:** 200
  200 schema: `ProductListingResponseSchema`

---

#### `deleteSize` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/products/{item_id}/sizes/{size}`

**Delete product size**

Allows to delete size associated with product.

**Path params:**
- `company_id` — Company Id of the company associated to size that is to be deleted. *(required)*
- `item_id` — Item Id of the product associated with size to be deleted. *(required)*
- `size` — size to be deleted. *(required)*

**Responses:** 200
  200 schema: `ProductSizeDeleteResponseSchema`

---

#### `addInventory` — POST `/service/platform/catalog/v1.0/company/{company_id}/products/{item_id}/sizes/{size}`

**Create Inventory**

Allows add Inventory for particular size and selling location.

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*
- `item_id` — Item id of the product of which size is to be get. *(required)*
- `size` — Size in which inventory is to be added. *(required)*

**Request body:** `application/json`
  Schema: `InventoryRequestSchema`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `getSizeGuides` — GET `/service/platform/catalog/v1.0/company/{company_id}/sizeguide`

**List size guides**

Allows to view all the size guides associated to the seller. Each size guide contains meta deta like header values like for shoulder, head, etc. and measurement unit like cm and values contains sizes for the same.

**Path params:**
- `company_id` — Id of the company for which the size guides are to be fetched. *(required)*

**Query params:**
- `active` — filter size guide on basis of active, in-active
- `q` — Query that is to be searched.
- `tag` — to filter size guide on basis of tag.
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 10. (default: 10)
- `brand_id` — Brand id that is to be searched.

**Responses:** 200
  200 schema: `ListSizeGuide`

---

#### `createSizeGuide` — POST `/service/platform/catalog/v1.0/company/{company_id}/sizeguide`

**Create size guide**

Allows to create a size guide associated to a seller

**Path params:**
- `company_id` — Id of the company inside which the size guide is to be created. *(required)*

**Request body:** `application/json`
  Schema: `ValidateSizeGuide`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `getSizeGuide` — GET `/service/platform/catalog/v1.0/company/{company_id}/sizeguide/{id}/`

**Get  size guide**

Retrieve data associated about a specific size guide. It contains meta deta like header values like for shoulder, head, etc. and measurement unit like cm and values contains sizes for the same.

**Path params:**
- `company_id` — Id of the company associated to size guide. *(required)*
- `id` — Id of the size guide to be viewed. *(required)*

**Responses:** 200
  200 schema: `SizeGuideResponseSchema`

---

#### `updateSizeGuide` — PUT `/service/platform/catalog/v1.0/company/{company_id}/sizeguide/{id}/`

**Update size guide**

Allows to edit a specific size guide.

**Path params:**
- `company_id` — Id of the company. *(required)*
- `id` — Identifier of the size guide to be edited *(required)*

**Request body:** `application/json`
  Schema: `ValidateSizeGuide`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `updateAllowSingle` — POST `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/filter/allow_single`

**Update 'Allow Single' setting**

Modify allow single flag for filters of the sales channel for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `AllowSingleRequestSchema`

**Responses:** 200
  200 schema: `ConfigSuccessResponseSchema`

---

#### `updateDefaultSort` — POST `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/sort/default_key`

**Update default sorting**

Modify the default sort key configuration for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Request body:** `application/json`
  Schema: `DefaultKeyRequestSchema`

**Responses:** 200
  200 schema: `ConfigSuccessResponseSchema`

---

#### `getListingConfigurations` — GET `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/{config_type}/`

**Get listing configurations**

Retrieve product listing configurations based on specific config_type for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `config_type` — A `config_type` is an identifier that defines a specific type of configuration. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results.
- `page_size` — Number of items to retrieve in each page. Default is 12.
- `search` — Get configuration list filtered by `search` string.

**Responses:** 200
  200 schema: `GetConfigResponseSchema`

---

#### `createListingConfiguration` — POST `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/{config_type}/`

**Create listing configuration**

Add configuration for product catalog listing specific to a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `config_type` — A `config_type` is a unique identifier for a particular listing configuration ty *(required)*

**Request body:** `application/json`
  Schema: `AppConfigurationsSort`

**Responses:** 200
  200 schema: `AppConfigurationsSort`

---

#### `getGroupConfigurations` — GET `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/{config_type}/groups`

**Get group configurations**

Retrieve the details of product group configurations based on config types for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `config_type` — A `config_type` is an identifier that defines a specific type of configuration. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results.
- `page_size` — Number of items to retrieve in each page. Default is 12.
- `search` — Get configuration list filtered by `search` string.
- `template_slug` — Get configuration list filtered by `template_slug` string. This is for the detai

**Responses:** 200
  200 schema: `GetConfigResponseSchema`

---

#### `createGroupConfiguration` — POST `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/{config_type}/groups`

**Create group configuration**

Create group configuration for a specific config_type for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `config_type` — A `config_type` is a unique identifier for a particular group configuration type *(required)*

**Request body:** `application/json`
  Schema: `AppConfigurationDetail`

**Responses:** 200
  200 schema: `AppConfigurationDetail`

---

#### `deleteGroupConfiguration` — DELETE `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/{config_type}/groups/{group_slug}`

**Delete group configuration**

Delete group configurations by its slug for a specific config_type for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `config_type` — A `config_type` is a unique identifier for a particular group configuration type *(required)*
- `group_slug` — A `group_slug` is a unique identifier of a particular configuration. *(required)*

**Responses:** 200
  200 schema: `ConfigSuccessResponseSchema`

---

#### `updateGroupConfiguration` — PUT `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/{config_type}/groups/{group_slug}`

**Update group configuration**

Modify group configurations by its slug for specific config_type for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `config_type` — A `config_type` is a unique identifier for a particular group configuration type *(required)*
- `group_slug` — A `group_slug` is a unique identifier of a particular configuration. *(required)*

**Request body:** `application/json`
  Schema: `AppConfigurationDetail`

**Responses:** 200
  200 schema: `AppConfigurationDetail`

---

#### `deleteListingConfiguration` — DELETE `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/{config_type}/item/{config_id}/`

**Delete listing configuration**

Remove a specific product listing configuration by its config_id for a specific config_type for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `config_type` — A `config_type` is a unique identifier for a particular listing configuration ty *(required)*
- `config_id` — A `config_id` is a unique identifier of a particular configuration. *(required)*

**Responses:** 200
  200 schema: `ConfigSuccessResponseSchema`

---

#### `updateListingConfiguration` — PUT `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/{config_type}/item/{config_id}/`

**Update listing configuration**

Modify a specific product listing configuration by its config_id for a specific config_type for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `config_type` — A `config_type` is a unique identifier for a particular listing configuration ty *(required)*
- `config_id` — A `config_id` is a unique identifier of a particular configuration. *(required)*

**Request body:** `application/json`
  Schema: `AppConfigurationsSort`

**Responses:** 200
  200 schema: `AppConfigurationsSort`

---

#### `getConfigurationMetadata` — GET `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/product-configuration/{config_type}/metadata/`

**Get configuration metadata**

Retrieve the configuraion metadata details for specific config_type for a company and an sales channel.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `config_type` — A `config_type` is an identifier that defines a specific type of configuration. *(required)*

**Query params:**
- `template_slug` — Get configuration list filtered by `template_slug` string. This is for the detai
- `page_no` — The page number to navigate through the given set of results.
- `page_size` — Number of items to retrieve in each page.
- `q` — Get configuration list filtered by `q` string.

**Responses:** 200
  200 schema: `GetConfigMetadataResponseSchema`

---

#### `getAllProductHsnCodes` — GET `/service/platform/catalog/v2.0/company/{company_id}/hsn/`

**List product HSN codes**

Retrieve all HSN codes associated with company products and provide search capabilities based on HSN code, reporting HSN, etc

**Path params:**
- `company_id` — Company Id for which HSN codes needs to be fetched *(required)*

**Query params:**
- `page_no` — indicates current page number (default: 1)
- `page_size` — indicates page size (default: 12)
- `q` — search using hsn code, description, reporting_hsn
- `type` — search using type

**Responses:** 200
  200 schema: `HsnCodesListingResponseSchemaV2`

---

#### `getSingleProductHSNCode` — GET `/service/platform/catalog/v2.0/company/{company_id}/hsn/{reporting_hsn}`

**Get product HSN code**

Retrieve HSN details associated with company ID and reporting HSN

**Path params:**
- `reporting_hsn` — reporting_hsn *(required)*
- `company_id` — Company Id for which HSN codes needs to be fetched *(required)*

**Responses:** 200
  200 schema: `HSNDataInsertV2`

---

#### `updateInventories` — POST `/service/platform/catalog/v2.0/company/{company_id}/inventory/`

**Update inventories**

Allows to add Inventory for particular size and selling location. for associated companies

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*

**Request body:** `application/json`
  Schema: `InventoryRequestSchemaV2`

**Responses:** 200, 400
  200 schema: `InventoryUpdateResponseSchema`

---

#### `listInventoryExport` — GET `/service/platform/catalog/v2.0/company/{company_id}/inventory/download/`

**List inventory export jobs**

Retrieve the history of inventory export jobs associated with the company

**Path params:**
- `company_id` — It is the unique identifier of the company. *(required)*

**Query params:**
- `status` — Status of the export job.(Pending, Running, Success)
- `from_date` — Inventory export history filtered according to from_date.
- `to_date` — Inventory export history filtered according to from_date.
- `q` — Inventory export history filtered according to task ID.
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)

**Responses:** 200
  200 schema: `InventoryExportJobListResponseSchema`

---

#### `createInventoryExport` — POST `/service/platform/catalog/v2.0/company/{company_id}/inventory/download/`

**Create inventory export**

creates export job for inventory data associated with a company

**Path params:**
- `company_id` — Company Id in which assets to be uploaded. *(required)*

**Request body:** `application/json`
  Schema: `InventoryCreateRequestSchema`

**Responses:** 200
  200 schema: `InventoryExportResponseSchema`

---

#### `createProduct` — POST `/service/platform/catalog/v3.0/company/{company_id}/products/`

**Create product**

Users can create a product using this API, associating it with the provided company ID

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*

**Request body:** `application/json`
  Schema: `ProductCreateSchemaV3`

**Responses:** 200
  200 schema: `SuccessResponseObject`

---

#### `createProductExportJob` — POST `/service/platform/catalog/v3.0/company/{company_id}/products/downloads/`

**Create product export job**

Allows to create a product export job for a company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Request body:** `application/json`
  Schema: `ProductTemplateDownloadsExport`

**Responses:** 200
  200 schema: `ProductDownloadsResponseSchema`

---

#### `getProductExportJobs` — GET `/service/platform/catalog/v2.0/company/{company_id}/products/downloads/`

**Get product export jobs**

Get product export jobs specific to a company based on queries like query param, date range and status. View details including trigger data, task id , etc.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Query params:**
- `status` — This is a parameter used to find all the jobs with the specified status.
- `from_date` — This is a parameter used to find the job from the date specified to the current 
- `to_date` — This is a parameter used to find the job from the from_date specified to the to_
- `q` — It is a query parameter to search the export job with the task ID.
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)

**Responses:** 200
  200 schema: `ProductDownloadsResponseSchema`

---

#### `editProduct` — PUT `/service/platform/catalog/v3.0/company/{company_id}/products/{item_id}/`

**Update a product**

Modify the details and settings of an existing product in the catalog.

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*
- `item_id` — Id of the product to be updated. *(required)*

**Request body:** `application/json`
  Schema: `ProductUpdateSchemaV3`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `partialUpdateProduct` — PATCH `/service/platform/catalog/v3.0/company/{company_id}/products/{item_id}/`

**Patch a product**

Partially update an existing product in the catalog using PATCH method. This operation allows you to modify specific fields of a product without affecting other attributes. Only the fields provided in the request body will be updated, while all other existing product data remains unchanged.
For obje

**Path params:**
- `company_id` — Id of the company associated. *(required)*
- `item_id` — Item ID of the product to be patched. *(required)*

**Request body:** `application/json`
  Schema: `ProductPatchSchemaV3`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `deleteProduct` — DELETE `/service/platform/catalog/v2.0/company/{company_id}/products/{item_id}/`

**Delete product**

Users can delete a product by providing the item_id and company_id.

**Path params:**
- `company_id` — Company Id of the company associated with the product to be deleted. *(required)*
- `item_id` — Id of the product to be deleted. *(required)*

**Responses:** 200, 404
  200 schema: `SuccessResponseSchema`

---

#### `getProduct` — GET `/service/platform/catalog/v2.0/company/{company_id}/products/{item_id}/`

**Get a product**

Retrieve data associated to a particular product.

**Path params:**
- `company_id` — Company Id of the product. *(required)*
- `item_id` — Item Id of the product. *(required)*

**Query params:**
- `brand_uid` — Brand Id of the product.
- `item_code` — Item code of the product.

**Responses:** 200
  200 schema: `SingleProductResponseSchema`

---

#### `allSizes` — GET `/service/platform/catalog/v2.0/company/{company_id}/products/{item_id}/all_sizes`

**Get product sizes**

Retrieve all available sizes for a product.

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*
- `item_id` — Id of the product to be updated. *(required)*

**Responses:** 200
  200 schema: `GetAllSizes`

---

#### `deleteRealtimeInventory` — DELETE `/service/platform/catalog/v2.0/company/{company_id}/products/{item_id}/inventory/{seller_identifier}`

**Delete an inventory **

You can use this API to delete inventory linked to a particular product size. When you make the API call, the inventory associated with that size will be removed as part of api process.

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*
- `item_id` — Item code of the product of which size is to be get. *(required)*
- `seller_identifier` — Size Identifier (Seller Identifier or Primary Identifier) of which inventory is  *(required)*

**Request body:** `application/json`
  Schema: `InventoryRequestSchemaV2`

**Responses:** 200, 400
  200 schema: `InventoryUpdateResponseSchema`

---

#### `updateRealtimeInventory` — POST `/service/platform/catalog/v2.0/company/{company_id}/products/{item_id}/inventory/{seller_identifier}`

**Update an inventory**

enables you to add inventory for a specific size and selling location (store). The inventory updates will be reflected instantly after the API call.

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*
- `item_id` — Item code of the product of which size is to be get. *(required)*
- `seller_identifier` — Size Identifier (Seller Identifier or Primary Identifier) of which inventory is  *(required)*

**Request body:** `application/json`
  Schema: `InventoryRequestSchemaV2`

**Responses:** 200, 400
  200 schema: `InventoryUpdateResponseSchema`

---

#### `updateLocationPrice` — POST `/service/platform/catalog/v1.0/company/{company_id}/store/{store_id}/identifier/{seller_identifier}/price`

**Update an Article Price**

enables you to update article price for a specific size and selling location (store). The price updates will be reflected instantly after the API call.

**Path params:**
- `company_id` — Id of the company associated to product for that article price to be updated. *(required)*
- `store_id` — The Store Id to update price of size for specific store. *(required)*
- `seller_identifier` — Size Identifier (Seller Identifier or Primary Identifier) of which article price *(required)*

**Request body:** `application/json`
  Schema: `LocationPriceRequestSchema`

**Responses:** 200, 422
  200 schema: `LocationPriceQuantitySuccessResponseSchema`

---

#### `updateLocationQuantity` — POST `/service/platform/catalog/v1.0/company/{company_id}/store/{store_id}/identifier/{seller_identifier}/quantity`

**Update an Article Quantity**

enables you to update article quantity for a specific size and selling location (store). The quantity updates will be reflected instantly after the API call.

**Path params:**
- `company_id` — Id of the company associated to product for that article quantity to be updated. *(required)*
- `store_id` — The Store Id to update quantity of size for specific store. *(required)*
- `seller_identifier` — Size Identifier (Seller Identifier or Primary Identifier) of which article quant *(required)*

**Request body:** `application/json`
  Schema: `LocationQuantityRequestSchema`

**Responses:** 200, 422
  200 schema: `LocationPriceQuantitySuccessResponseSchema`

---

#### `getMarketplaces` — GET `/service/platform/catalog/v1.0/company/{company_id}/channel`

**List marketplaces**

Allows to get all marketplaces information for a company.

**Path params:**
- `company_id` — Id of the company associated to the marketplace. *(required)*

**Responses:** 200
  200 schema: `GetAllMarketplaces`

---

#### `updateMarketplaceOptin` — PUT `/service/platform/catalog/v1.0/company/{company_id}/channel/{marketplace_slug}/opt-in`

**Update marketplace optin**

Allows to update marketplace optin for a company by marketplace_slug.

**Path params:**
- `company_id` — Id of the company associated to the marketplace. *(required)*
- `marketplace_slug` — Slug of the marketplace. *(required)*

**Request body:** `application/json`
  Schema: `UpdateMarketplaceOptinRequestSchema`

**Responses:** 200
  200 schema: `UpdateMarketplaceOptinResponseSchema`

---

#### `createMarketplaceOptin` — POST `/service/platform/catalog/v1.0/company/{company_id}/channel/{marketplace_slug}/opt-in`

**Create or Update opt-in infomation**

Allows to create opt-in information for a specific company.

**Path params:**
- `company_id` — The company id for which the detail needs to be retrieved. *(required)*
- `marketplace_slug` — The marketplace for which the detail needs to be retrieved. *(required)*

**Request body:** `application/json`
  Schema: `OptInPostRequestSchema`

**Responses:** 201

---

#### `getPriceFactories` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/price/list`

**Retrieve Price Factories for an Application**

Fetches a paginated list of price factories configured for the specified application within a company. Supports optional filters such as brand IDs, category IDs, seller identifier, item code, slug, and name to narrow down the results.


**Path params:**
- `company_id` — Unique identifier representing the seller's company account.
 *(required)*
- `application_id` — Unique identifier representing the application or sales channel.
 *(required)*

**Query params:**
- `q` — Optional q to filter price factories by name.


**Responses:** 200
  200 schema: `PriceFactoryListResponseSchema`

---

#### `createPriceFactory` — POST `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/price`

**Create a Price Factory for an Application**

Creates a new price factory configuration for the specified application under a given company. A price factory allows defining region-based or international pricing strategies using fixed or percentage-based adjustments per currency.


**Path params:**
- `company_id` — Unique identifier representing the seller's company account.
 *(required)*
- `application_id` — Unique identifier for the application or sales channel where the price factory w *(required)*

**Request body:** `application/json`
  Schema: `CreatePriceFactoryConfigSchema`

**Responses:** 200, 422
  200 schema: `SuccessResponseSchema`

---

#### `getPriceFactory` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/price/{price_factory_id}`

**Retrieve a Specific Price Factory Configuration**

Retrieves detailed information about a specific price factory configuration  for the given application and company, using the unique price factory ID.  This includes currency strategies, adjustment values, zone mapping, and audit metadata.


**Path params:**
- `company_id` — Unique identifier representing the seller's company account.
 *(required)*
- `application_id` — Unique identifier representing the application or sales channel.
 *(required)*
- `price_factory_id` — Unique identifier of the specific price factory to be retrieved.
 *(required)*

**Responses:** 200, 404
  200 schema: `PriceFactoryConfigSchema`

---

#### `updatePriceFactory` — PATCH `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/price/{price_factory_id}`

**Update an Existing Price Factory Configuration**

Allows partial update of an existing price factory configuration  for a specific application and company using the provided price factory ID.  Fields such as name, currencies, pricing strategies, or zone mapping can be modified.


**Path params:**
- `company_id` — Unique identifier representing the seller's company account.
 *(required)*
- `application_id` — Unique identifier representing the application or sales channel.
 *(required)*
- `price_factory_id` — Unique identifier of the specific price factory to be updated.
 *(required)*

**Request body:** `application/json`
  Schema: `UpdatePriceFactoryConfigSchema`

**Responses:** 200, 404
  200 schema: `SuccessResponseSchema`

---

#### `deletePriceFactory` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/price/{price_factory_id}`

**Delete a Price Factory Configuration**

Deletes a specific price factory configuration associated with a given company and application.  This action is typically irreversible and will remove the pricing logic tied to the specified price factory ID.


**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account.
 *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel.
 *(required)*
- `price_factory_id` — A `price_factory_id` is a unique identifier for a particular price factory confi *(required)*

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

#### `getPriceFactoryProducts` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/price/{price_factory_id}/products`

**Get Products associated with a Price Factory**

Retrieves a paginated list of products linked to a specific price factory configuration for the given application and company. This endpoint returns item-level details such as pricing by currency, delivery zones, seller identifiers, media, and size-level configurations. Useful for viewing how pricin

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account.
 *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sales channel.
 *(required)*
- `price_factory_id` — A `price_factory_id` uniquely identifies a price factory configuration for a spe *(required)*

**Query params:**
- `brand_ids` — Optional list of brand IDs to filter price factories associated with specific br
- `category_ids` — Optional list of category IDs to filter price factories related to specific prod
- `seller_identifier` — Optional seller identifier to filter price factories associated with a particula
- `item_code` — Optional item code to filter price factories configured for a specific product c
- `slug` — Optional slug to filter price factories by product slug.

- `name` — Optional name to filter price factories by product or configuration name.

- `active` — Optional name to filter price factories by product status.

- `page_no` — The page number to navigate through the given set of results
- *(+ 1 more query params)*

**Responses:** 200, 400
  200 schema: `PriceFactoryProductListResponseSchema`

---

#### `getPriceFactoryProduct` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/price/{price_factory_id}/products/{item_id}`

**Update marketplace optin**

get price related information of item for given price factory

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `price_factory_id` — A `price_factory_id` is a unique identifier for a particular sale channel. *(required)*
- `item_id` — A `item_id` is a unique identifier for a particular product. *(required)*

**Responses:** 200, 404
  200 schema: `PriceFactoryProductResponseSchema`

---

#### `updatePriceFactoryProduct` — PATCH `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/price/{price_factory_id}/products/{item_id}`

**Partially update price factory product configuration**

Updates specific fields in the price factory product configuration. Use this to partially update pricing or status for a given product and size without overwriting the entire configuration.


**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sales channel. *(required)*
- `price_factory_id` — A `price_factory_id` is a unique identifier for a specific price factory configu *(required)*
- `item_id` — A `item_id` is a unique identifier for a particular product. *(required)*

**Request body:** `application/json`
  Schema: `UpsertPriceFactoryProductSchema`

**Responses:** 200
  200 schema: `SuccessResponseSchema`

---

### Pagination

#### `getApplicationBrandListing` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/brand`

**List sales channel brands**

Retrieve brand listings related to the sales channel. A brand is the name under which a product is being sold

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)
- `q` — Search query with brand name. Use this parameter to search brands by  brand name

**Responses:** 200
  200 schema: `ApplicationBrandListingSchema`

---

#### `getApplicationBrands` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/brands`

**List brands**

List all the brands.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `department` — The name of the department. Use this parameter to filter products by a particula
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)
- `q` — Search query with brand name. Use this parameter to search brands by  brand name
- `brand_id` — Helps to sort the brands list on the basis of uid list.

**Responses:** 200
  200 schema: `BrandListingResponseSchema`

---

#### `getApplicationCategoryListing` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/category`

**List sales channel categories**

Retrieve category listings related to the sales channel , with the ability to filter results based on department ,category names etc.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `department_id` — A `department_id` is a unique identifier for a particular department.
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)
- `q` — A search query string. Use this parameter to filter results based on a keyword o

**Responses:** 200
  200 schema: `ApplicationCategoryListingSchema`

---

#### `getAllCollections` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/collections/`

**List collections**

Retrieve all collections based on criteria such as collection name, schedule status, and active status.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `q` — Get collection list filtered by q string,
- `schedule_status` — Get collection list filtered by scheduled status,
- `type` — Type of the collections
- `tags` — Each response will contain next_id param, which should be sent back to make pagi
- `is_active` — Get collections filtered by active status.
- `page_no` — The page number to navigate through the given set of results.
- `page_size` — Number of items to retrieve in each page. Default is 12.

**Responses:** 200
  200 schema: `GetCollectionListingResponseSchema`

---

#### `getApplicationDepartmentListing` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/department`

**List sales channel departments**

Retrieve department listings related to the sales channel. Departments are used to categorize similar products, and you can filter the results based on department names

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)
- `q` — A search query string. Use this parameter to filter results based on a keyword o

**Responses:** 200
  200 schema: `ApplicationDepartmentListingResponseSchema`

---

#### `getAppLocations` — GET `/service/platform/catalog/v2.0/company/{company_id}/application/{application_id}/locations`

**Retrieve stores for a sales channel**

Retrieve all stores associated with a sales channel, with support for searching by store name and filtering by store type and status.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `store_type` — Helps to sort the location list on the basis of location type.
- `uid` — Helps to sort the location list on the basis of uid list.
- `q` — Query that is to be searched.
- `stage` — to filter companies on basis of verified or unverified companies.
- `page_no` — The page number to navigate through the given set of results (default: 1)
- `page_size` — Number of items to retrieve in each page. Default is 20. (default: 20)
- `tags` — Get locations filtered by tags.
- `store_types` — Get locations filtered by store types.

**Responses:** 200
  200 schema: `LocationListSchema`

---

#### `getApplicationProducts` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/products`

**List sales channel products**

Retrieve products associated with the sales channel. List all the products associated with a brand, collection or category in a requested sort order.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `q` — The search query. This can be a partial or complete name of a either a product, 
- `f` — The search filter parameters. All the parameter filtered from filter parameters 
- `c` — The search filter parameters for collection items. All the parameter filtered fr
- `filters` — Pass `filters` parameter to fetch the filter details. This flag is used to fetch (default: True)
- `is_dependent` — This query parameter is used to get the dependent products in the listing. (default: True)
- `sort_on` — The order to sort the list of products on. Supported values include latest, popu
- `page_id` — Each response will contain **page_id** param, which should be sent back to make 
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)
- *(+ 3 more query params)*

**Responses:** 200
  200 schema: `ApplicationProductListingResponseSchema`

---

#### `getDiscountedInventoryBySizeIdentifier` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/products/{item_id}/inventory/{size_identifier}`

**Get discounted inventory**

Allows to retrieve Inventory data for particular company grouped by size and store.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*
- `item_id` — A `item_id` is a unique identifier for a specific product. *(required)*
- `size_identifier` — Size Identifier (Seller Identifier or Primary Identifier). *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)
- `location_ids` — Search by store ids.

**Responses:** 200
  200 schema: `ApplicationInventorySellerIdentifierResponsePaginated`

---

#### `getAppProducts` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/raw-products/`

**List sales channel products**

Retrieve products specific to the sales channel, with filtering options available for brand, category, department, tags, item IDs, product name, and pagination support

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*
- `application_id` — A `application_id` is a unique identifier for a particular sale channel. *(required)*

**Query params:**
- `brand_ids` — Get multiple products filtered by Brand Ids
- `category_ids` — Get multiple products filtered by Category Ids
- `department_ids` — Get multiple products filtered by Department Ids
- `tags` — Get multiple products filtered by tags
- `item_ids` — Get multiple products filtered by Item Ids
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 10. (default: 10)
- `q` — Search with Item Code, Name, Slug or Identifier.

**Responses:** 200
  200 schema: `RawProductListingResponseSchema`

---

#### `listCategories` — GET `/service/platform/catalog/v1.0/company/{company_id}/category/`

**List categories**

Retrieve a list of categories data associated to a specific company and queries passed in the request.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Query params:**
- `level` — Get category for multiple levels
- `department` — Get category for multiple departments filtered
- `q` — Get multiple categories filtered by search string
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 10. (default: 12)
- `uids` — Get multiple categories filtered by category uids.
- `slug` — Get category by slug

**Responses:** 200
  200 schema: `CategoryResponseSchema`

---

#### `listDepartmentsData` — GET `/service/platform/catalog/v1.0/company/{company_id}/departments/`

**List company department **

Allows you to list all departments data for a specific company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results
- `item_type` — A `item_type` is a type of product eg. set, standard, digital
- `page_size` — Number of items to retrieve in each page. Default is 10.
- `name` — Can search departments by passing name.
- `search` — Can search departments by passing name of the department in search parameter.
- `is_active` — Can query for departments based on whether they are active or inactive.
- `slug` — Can filter by slug

**Responses:** 200
  200 schema: `DepartmentsResponseSchema`

---

#### `getInventories` — GET `/service/platform/catalog/v1.0/company/{company_id}/inventories`

**List Inventory**

Allows to get Inventories data for particular company. 

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*

**Query params:**
- `item_id` — Item code of the product of which size is to be get.
- `size` — Size of which inventory is to get.
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)
- `page_id` — Alphanumeric Page ID to retrieve next set of results.
- `page_type` — Available pagination types are cursor or number. (default: number)
- `q` — Search with help of store code.
- `sellable` — Filter on whether product is in stock or not. (default: False)
- *(+ 9 more query params)*

**Responses:** 200
  200 schema: `GetInventoriesResponseSchema`

---

#### `getInventoryBulkUploadHistory` — GET `/service/platform/catalog/v1.0/company/{company_id}/inventory/bulk/`

**List bulk inventory upload history**

Helps to get bulk Inventory upload jobs status.

**Path params:**
- `company_id` — Company Id of of which Inventory Bulk Upload History to be obtained. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)
- `search` — Search string to filter the results by batch id
- `start_date` — Filter results by the job's start date.
- `end_date` — Filter results by the job's end date.
- `stage` — Filter results by the current stage of the import job.
- `tags` — Filter results by the tags of the import job.

**Responses:** 200
  200 schema: `BulkInventoryGet`

---

#### `getStoreDetail` — GET `/service/platform/catalog/v2.0/company/{company_id}/marketplaces/location-details/`

**Get selling location**

Retrieve the details of the selling location (store) associated with a specific company passed.

**Path params:**
- `company_id` — The company id for which the detail needs to be retrieved. *(required)*

**Query params:**
- `q` — The search related the store for the company id.
- `page_no` — The number of page for the company id.
- `page_size` — Number of records that can be seen on the page for the company id.

**Responses:** 200
  200 schema: `OptinStoreDetails`

---

#### `getProductAssetsInBulk` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/assets/bulk/`

**Get product assets**

Helps to retrieve bulk asset jobs data associated to a particular company.

**Path params:**
- `company_id` — Company Id of the product size. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)

**Responses:** 200
  200 schema: `BulkAssetResponseSchema`

---

#### `getProductBulkUploadHistory` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/bulk`

**List product bulk upload history**

Helps to get bulk product upload jobs data.

**Path params:**
- `company_id` — Company Id of of which Product Bulk Upload History to be obtained. *(required)*

**Query params:**
- `search` — Search string to filter the results by batch id
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)

**Responses:** 200
  200 schema: `ProductBulkRequestList`

---

#### `getInventoryBySizeIdentifier` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/{item_id}/inventory/{size_identifier}`

**List inventory by size **

Retrieve inventory data for a specific company, item ID, and seller identifier. The API supports search capabilities using store codes and location IDs.

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*
- `item_id` — Item code of the product of which size is to be get. *(required)*
- `size_identifier` — Size Identifier (Seller Identifier or Primary Identifier) of which inventory is  *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)
- `q` — Search with help of store code.
- `location_ids` — Search by store ids.

**Responses:** 200
  200 schema: `InventorySellerIdentifierResponsePaginated`

---

#### `getInventoryBySize` — GET `/service/platform/catalog/v2.0/company/{company_id}/products/{item_id}/sizes/{size}`

**List inventory by size**

Retrieve inventory data for a specific company, item ID, and size. The API supports search capabilities based on selling location (store) code and product availability (in stock or not)."

**Path params:**
- `company_id` — Id of the company associated to product that is to be viewed. *(required)*
- `item_id` — Item code of the product of which size is to be get. *(required)*
- `size` — Size of which inventory is to get. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)
- `q` — Search with help of store code.
- `sellable` — Filter on whether product is in stock or not. (default: False)

**Responses:** 200
  200 schema: `InventoryResponsePaginated`

---

#### `getVariantsOfProducts` — GET `/service/platform/catalog/v1.0/company/{company_id}/products/{item_id}/variants/{variant_type}`

**Get variants**

Retrieve variants of a specific product.

**Path params:**
- `company_id` — Get list of products filtered by company Id *(required)*
- `item_id` — Get list of variants of item Id *(required)*
- `variant_type` — Get multiple products filtered by variant type *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results
- `page_size` — Number of items to retrieve in each page. Default is 10. (default: 10)

**Responses:** 200
  200 schema: `ProductVariantsResponseSchema`

---

#### `getProducts` — GET `/service/platform/catalog/v2.0/company/{company_id}/products/`

**List products**

Retrieve a list of available products

**Path params:**
- `company_id` — Get list of products filtered by company Id *(required)*

**Query params:**
- `brand_ids` — Get multiple products filtered by Brand Ids
- `category_ids` — Get multiple products filtered by Category Ids
- `item_ids` — Get multiple products filtered by Item Ids
- `department_ids` — Get multiple products filtered by Department Ids
- `item_code` — Get multiple products filtered by Item Code
- `name` — Get multiple products filtered by Name (Pattern Match)
- `slug` — Get multiple products filtered by Slug
- `all_identifiers` — Get multiple products filtered by All Identifiers
- *(+ 7 more query params)*

**Responses:** 200
  200 schema: `ProductListingResponseV2`

---

### Product

#### `getFollowedProducts` — GET `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/user/{user_id}/products/follow`

**Retrieve followed products by user**

List all product ids a user has wishlisted or is following for sales channel.


**Path params:**
- `company_id` — Unique identifier of the Company *(required)*
- `application_id` — The Application ID of the store front *(required)*
- `user_id` — User ID to fetch the followed list *(required)*

**Query params:**
- `page_id` — The identifier used to retrieve the next set of results. This parameter follows  (default: 1)
- `page_size` — Number of items per page (default: 12)

**Responses:** 200
  200 schema: `FollowedProducts`

---

#### `followProductById` — PUT `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/user/{user_id}/products/{item_id}/follow`

**Follow a Specific Product by ID**

This endpoint enables a user to follow a specific product identified by its unique item ID for a sales channel.


**Path params:**
- `company_id` — The Company ID *(required)*
- `application_id` — Application ID of the Store Front *(required)*
- `user_id` — User ID of User *(required)*
- `item_id` — Item ID of Product *(required)*

**Responses:** 200, 400
  200 schema: `FollowProduct`

---

#### `unfollowProductById` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/application/{application_id}/user/{user_id}/products/{item_id}/follow`

**Unfollow a Specific Product by ID**

This endpoint allows a user to unfollow a previously followed product using its unique item ID for a sales channel.         


**Path params:**
- `company_id` — The Company ID *(required)*
- `application_id` — Application ID of the Store Front *(required)*
- `user_id` — User ID of User *(required)*
- `item_id` — Item ID of Product *(required)*

**Responses:** 200, 400
  200 schema: `FollowProduct`

---

### Taxation

#### `createTax` — POST `/service/platform/catalog/v1.0/company/{company_id}/taxes/rules/versions`

**Create Tax Rule**

Create a tax rule in a company, including its initial (live) version.  The API supports both default (country-level) and region-specific versions by using optional  parameters such as 'region_type' and 'areas'. This enables granular taxation rules scoped to  different geographic regions.

**Path params:**
- `company_id` — Unique identifier of the company for which the tax rule will be created. *(required)*

**Request body:** `application/json`
  Schema: `CreateTaxRequestBody`

**Responses:** 200
  200 schema: `CreateTax`

---

#### `getAllTaxRules` — GET `/service/platform/catalog/v1.0/company/{company_id}/taxes/rules`

**Get all tax rules of a company**

Retrieves a list of all tax rules defined for a company, along with their details.

**Path params:**
- `company_id` — Unique identifier of the company whose tax rules are being retrieved *(required)*

**Query params:**
- `q` — Search query to filter tax rules
- `statuses` — Filter tax rules based on their lifecycle status.
- `page` — The page number to retrieve
- `limit` — Maximum number of tax rule items per page
- `version_status` — Filter tax rules to include only those with versions in the specified status.

**Responses:** 200
  200 schema: `TaxRules`

---

#### `updateTaxRule` — PUT `/service/platform/catalog/v1.0/company/{company_id}/taxes/rules/{rule_id}`

**Update Tax Rule**

Update the details of an existing tax rule for a company.

**Path params:**
- `company_id` — Unique identifier of the company for which the tax rule is being updated *(required)*
- `rule_id` — Unique identifier of the tax rule to update *(required)*

**Request body:** `application/json`
  Schema: `UpdateTaxRequestBody`

**Responses:** 200
  200 schema: `TaxRule`

---

#### `deleteTaxRule` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/taxes/rules/{rule_id}`

**Delete a tax rule**

Deletes a tax rule and all its associated versions. Note: A rule cannot be deleted if it is set as the default or is currently assigned to any product. 
To proceed with deletion, ensure you first assign another rule as the default and unlink this rule from all products.


**Path params:**
- `rule_id` — Unique identifier of the tax rule to be deleted *(required)*
- `company_id` — Unique identifier of the company associated with the tax rule to be deleted *(required)*

**Responses:** 200

---

#### `getTaxVersionDetails` — GET `/service/platform/catalog/v1.0/company/{company_id}/taxes/rules/{rule_id}/versions`

**Get tax versions for a tax rule**

Retrieve the versions of a tax rule. You can filter results by version status.

**Path params:**
- `company_id` — Unique identifier of the company for which the tax rule versoin is being retriev *(required)*
- `rule_id` — Unique identifier of the tax rule *(required)*

**Query params:**
- `version_status` — Filter by tax version status (default: ALL)
- `q` — Case-insensitive search by region name (e.g., "john", "New York") to find matchi
- `limit` — The number of items to return per page for paginated past versions (default: 10)
- `page` — The page number for paginated past versions. (default: 1)

**Responses:** 200
  200 schema: `TaxRuleVersion`

---

#### `createTaxVersion` — POST `/service/platform/catalog/v1.0/company/{company_id}/taxes/rules/{rule_id}/versions`

**Create a tax version**

Creates a tax version using the provided rule_id with support for scheduled applicability and optional region-level overrides.

**Path params:**
- `company_id` — Unique identifier of the company for which the tax rule is being created *(required)*
- `rule_id` — Unique identifier of the tax rule *(required)*

**Request body:** `application/json`
  Schema: `CreateTaxVersionRequestBody`

**Responses:** 200
  200 schema: `TaxVersion`

---

#### `deleteTaxVersion` — DELETE `/service/platform/catalog/v1.0/company/{company_id}/taxes/rules/{rule_id}/versions/{version_id}`

**Delete a tax version**

Deletes a tax rule using the provided rule_id. Only future/scheduled version can be deleted.

**Path params:**
- `rule_id` — Unique identifier of the tax rule to be deleted *(required)*
- `version_id` — Unique identifier of the tax version to be deleted *(required)*
- `company_id` — Unique identifier of the company for which the tax rule is being deleted *(required)*

**Responses:** 200

---

#### `updateTaxVersion` — PUT `/service/platform/catalog/v1.0/company/{company_id}/taxes/rules/{rule_id}/versions/{version_id}`

**Update a tax version**

When updating a tax version, the rules differ depending on whether it is a live version (that is, its applicable_date is now or in the past) or a scheduled version (with an applicable_date in the future). 
For live versions, only the component names may be modified and only when the corresponding _i

**Path params:**
- `rule_id` — Unique identifier of the tax rule to be updated *(required)*
- `version_id` — Unique identifier of the tax version to be updated *(required)*
- `company_id` — Unique identifier of the company for which the tax rule is being updated *(required)*

**Request body:** `application/json`
  Schema: `UpdateTaxVersionRequestBody`

**Responses:** 200
  200 schema: `TaxVersion`

---

#### `getHsCodes` — GET `/service/platform/catalog/v1.0/company/{company_id}/taxes/hscodes`

**Get HS/SAC codes**

Retrieve a list of Harmonized System (HS)) or Service Accounting Code (SAC)) codes for a company.
HS codes are used to classify goods in international trade, while SAC codes classify services for taxation purposes.
Supports optional filtering and pagination.


**Path params:**
- `company_id` — Unique identifier of the company for which to retrieve HS/SAC codes. *(required)*

**Query params:**
- `page` — The page number for pagination. (default: 1)
- `limit` — The number of items to return per page. (default: 50)
- `type` — Filter by HS/SAC code type.
- `q` — Search query to filter HS/SAC codes by code or description.

**Responses:** 200
  200 schema: `HSCodes`

---

#### `createHsCode` — POST `/service/platform/catalog/v1.0/company/{company_id}/taxes/hscodes`

**Create HS/SAC code**

Create a new Harmonized System (HS) or Service Accounting Code (SAC). These codes are used for product and service identification in taxation and compliance processes.

**Path params:**
- `company_id` — Unique identifier of the company for which the HS/SAC code is being created *(required)*

**Request body:** `application/json`
  Schema: `HSCodeItem`

**Responses:** 200
  200 schema: `HSCodeItem`

---

#### `createTaxComponentName` — POST `/service/platform/catalog/v1.0/company/{company_id}/taxes/component-names`

**Create tax component name**

Tax components represent different types of taxes that may be applied to products or transactions, 
such as sales tax, value-added tax (VAT), goods and services tax, consumption tax, 
or other region-specific taxation systems. This endpoint allows companies to define and 
customize the names of tax 

**Path params:**
- `company_id` — Unique identifier of the company for which tax component names are being defined *(required)*

**Request body:** `application/json`
  Schema: `CreateTaxComponentNameRequestSchema`

**Responses:** 200
  200 schema: `TaxComponentName`

---

#### `getTaxComponentNames` — GET `/service/platform/catalog/v1.0/company/{company_id}/taxes/component-names`

**Get component names**

Retrieve the list of all tax component names for a company.

**Path params:**
- `company_id` — Unique identifier of the company whose tax component names are to be fetched. *(required)*

**Responses:** 200
  200 schema: `GetTaxComponents`

---

