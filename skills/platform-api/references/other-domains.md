# Other Domains

**SDK Class:** `Theme`  
**Total operations:** 134

## Groups

- **Theme Page**: Theme Pages API is a tool for developers to efficiently create dynamic and customizable web pages across various platfor
- **Sales Channel Theme**: Theme API provides a comprehensive set of tools to efficiently manage assets and global configurations for web themes. W
- **Seller Account Theme**: The Seller Account APIs for themes offer comprehensive functionality for managing themes added both publicly through mar
- **Extension Section**: Oversee the extension sections in your application through the CLI. This includes obtaining draft extension sections, pu
- **Languages**: Manage supported languages across the platform. This includes operations for creating, updating, and retrieving language
- **Company Languages**: Control language settings at the company level. Enables companies to configure their supported languages, set default la
- **Application Languages**: Handle language configurations for specific applications. Allows granular control over which languages are available in 
- **Translatable Resources**: Define and manage translatable content resources across the platform. This includes structured content types like produc
- **Resource Definitions**: Configure schemas and validation rules for translatable resources. Provides flexible definition of content structures, U
- **Translatable Sections**: Organize translatable resources into logical sections. Enables better content organization, simplified navigation, and c
- **Company Resource Translations**: Manage translations for company-specific resources. Supports localization of company-level content with version control,
- **Application Resource Translations**: Handle translations for application-specific resources. Enables localization of application content with support for mul
- **Ticket**: Tickets are user escalation events recorded to track and resolve customer queries or problems. They serve as a structure
- **Ticket History**: Tickets are user escalation events recorded to track and resolve customer queries or problems. Any interactions over the
- **Ticket Feedback**: A feedback on ticket refers to the response or evaluation provided by a user after their inquiry or issue has been addre
- **Custom Form**: A custom form in Fynd Platform refers to a tailored web form created from within the Fynd Platform platform to collect s
- **General Config**: Fynd Platform provides users with a comprehensive support toolkit for product-related assistance. This toolkit includes 
- **Seller Onboarding**: The Seller Onboarding used for  management of seller accounts and provide insights into company metrics related to brand
- **Insights and Metrics**: The Insights and Metrics offers valuable data insights and metrics concerning your catalog information, specifically foc
- **Brand**: The Brand resource encompasses operations related to managing and showcasing branding information for products or servic
- **Selling Location**: Handle company specific location-related operations, including creating locations in bulk, updating and retrieving locat
- **Discount**: Discount is used to offer special pricing or promotional offers to customers.Discounts can create new discounts for cust
- **Discount Items**: The Discount items focuses on managing discounts specifically for individual products or services within a business. A D
- **Discount File**: The Discount File  consolidates functionalities for managing discount-related files, including downloading and validatin
- **File Transfer Suite**: Enable seamless file management within application and across external sources. It copy files, ensuring data replication
- **File Upload and Management**: File upload is a feature that enables users to upload files from their device to a designated storage location in the sy
- **File Browse**: Browse files by fetching all files in a directory based on the provided namespace, query, and request body parameters. I
- **PDF and HTML Template Management**: Manage and customize PDF and HTML templates. Access various PDF types, retrieve default PDF data, obtain default HTML te
- **Webhook**: You can use webhooks to receive notifications about particular events in a sales channel or platform. After you've subsc
- **Billing & Subscription**: It manages various aspects of billing and subscriptions. It includes verify coupon validity, create, retrieve, and cance
- **QR Code & Short Link**: You can utilize this to create a shortened URL from a long URL, product slug, or collection slug. Given the character li
- **Data Query and Filtering**: Retrievs click events data for sales channel. Data can be fetched in paginated manner or can be downloaded by using job 
- **Extension Proxy Path**: Set up and control proxy paths for extensions. This allows you to add new paths, remove existing ones, get details about
- **Audit Logs**: An audit log, also referred to as an audit trail, functions like a chronological timeline, documenting events and activi
- **Translate Ui Labels**: Manage and organize Translate Ui Labels for themes, including localization files, configuration schemas, and other theme

## Operations by Group

### Analytics

#### `executeJobForProvidedParametersV2` — POST `/service/platform/insights/v2.0/company/{company_id}/application/{application_id}/job/execute`

**Executes given sql(Base64 Encoded) query**

Query click events data

**Request body:** `application/json`
  Schema: `JobExecute`

**Responses:** 200
  200 schema: `JobExecutionResult`

---

#### `startDownloadForQueryV2` — POST `/service/platform/insights/v2.0/company/{company_id}/application/{application_id}/job/download`

**Initiates download job**

Initiates download job and returns job name

**Request body:** `application/json`
  Schema: `FileDownloadRequestBody`

**Responses:** 201

---

#### `checkJobStatusByNameV2` — GET `/service/platform/insights/v2.0/company/{company_id}/application/{application_id}/job/{file_name}/status`

**Checks download job status**

Takes job name in path param to check the status of job Returns file URL if downloading is done else returns status of job

**Path params:**
- `file_name` — Download job name *(required)*

**Responses:** 200
  200 schema: `JobStatus`

---

### Billing

#### `getChargeDetails` — GET `/service/platform/billing/v1.0/company/{company_id}/extension/{extension_id}/charge/{charge_id}`

**Obtain charge details**

Retrieve comprehensive details about a specific billing charge.

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*
- `extension_id` — The unique identifier of the extension *(required)*
- `charge_id` — The unique identifier of the entity charge in the system. *(required)*

**Responses:** 200, 404
  200 schema: `ChargeDetails`

---

#### `getSubscriptionCharge` — GET `/service/platform/billing/v1.0/company/{company_id}/extension/{extension_id}/subscription/{subscription_id}`

**Retrieve subscription charge details**

Retrieve detailed information about subscription charges using this API.

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*
- `extension_id` — The unique identifier of the extension *(required)*
- `subscription_id` — The unique identifier of the subscription *(required)*

**Responses:** 200, 404
  200 schema: `SubscriptionChargeRes`

---

#### `cancelSubscriptionCharge` — POST `/service/platform/billing/v1.0/company/{company_id}/extension/{extension_id}/subscription/{subscription_id}/cancel`

**Cancel the extension subscription**

Cancel an ongoing extension subscription for the company.

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*
- `extension_id` — The unique identifier of the extension *(required)*
- `subscription_id` — The unique identifier of the subscription *(required)*

**Responses:** 200, 404
  200 schema: `SubscriptionChargeRes`

---

#### `createOneTimeCharge` — POST `/service/platform/billing/v1.0/company/{company_id}/extension/{extension_id}/one_time_charge`

**Generate a one-time charge**

Generate a one-time charge for specific services or products.

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*
- `extension_id` — The unique identifier of the extension *(required)*

**Request body:** `application/json`
  Schema: `CreateOneTimeCharge`

**Responses:** 200, 400
  200 schema: `CreateOneTimeChargeResponseSchemas`

---

#### `createSubscriptionCharge` — POST `/service/platform/billing/v1.0/company/{company_id}/extension/{extension_id}/subscription`

**Initiate subscription billing**

Initiates and registers a subscription charge for a specific extension for a given company.

**Path params:**
- `company_id` — The unique identifier of the company. *(required)*
- `extension_id` — The unique identifier of the extension *(required)*

**Request body:** `application/json`
  Schema: `CreateSubscriptionCharge`

**Responses:** 200, 400
  200 schema: `CreateSubscription`

---

### Brand

#### `editBrand` — PUT `/service/platform/company-profile/v1.0/company/{company_id}/brand/{brand_id}`

**update brand**

Modify brand details and meta of a specific brand.

**Path params:**
- `company_id` — Id of the company associated to brand that is to be viewed. *(required)*
- `brand_id` — Id of the brand to be viewed. *(required)*

**Request body:** `application/json`
  Schema: `UpdateBrandRequestSchema`

**Responses:** 200, 400, 404
  200 schema: `ProfileSuccessResponseSchema`

---

#### `createBrand` — POST `/service/platform/company-profile/v1.0/company/{company_id}/brand/`

**Create brand**

Allows to create a brand associated to a company.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Request body:** `application/json`
  Schema: `CreateBrandRequestSchema`

**Responses:** 201, 400, 409, 404

---

### Company

#### `cbsOnboardGet` — GET `/service/platform/company-profile/v2.0/company/{company_id}`

**Get company profile**

View the company profile of the seller account.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Responses:** 200, 400, 404
  200 schema: `GetCompanyProfileSerializerResponseSchema`

---

#### `updateCompany` — PATCH `/service/platform/company-profile/v2.0/company/{company_id}`

**Update company profile**

Allows to edit the company profile of the seller account.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Request body:** `application/json`
  Schema: `UpdateCompany`

**Responses:** 200, 400, 404, 409
  200 schema: `ProfileSuccessResponseSchema`

---

### Company Brand

#### `getBrands` — GET `/service/platform/company-profile/v2.0/company/{company_id}/company-brand`

**list company brands**

Retrieve a list of available brands associated to a company.

**Path params:**
- `company_id` — Id of the company. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results (default: 1)
- `page_size` — Number of items to retrieve in each page. Default is 10. (default: 20)
- `q` — Search term for name.

**Responses:** 200, 400, 404
  200 schema: `CompanyBrandListSchema`

---

#### `createCompanyBrandMapping` — POST `/service/platform/company-profile/v2.0/company/{company_id}/company-brand`

**Create company-brand mapping**

Establish a mapping between a company and a brand.

**Path params:**
- `company_id` — Id of the company inside which the brand is to be mapped. *(required)*

**Request body:** `application/json`
  Schema: `CompanyBrandPostRequestSchema`

**Responses:** 201, 400, 404

---

### Company Themes

#### `getCompanyLevelPrivateThemes` — GET `/service/platform/theme/v2.0/company/{company_id}/private_themes`

**List private company themes**

Retrieve a list of private themes added to a company.

**Path params:**
- `company_id` — The ID of the company to retrieve the themes associated with it. *(required)*

**Query params:**
- `search_text` — Search Text to match the Theme Names and return the response.

**Responses:** 200, 401

---

### CustomForm

#### `deleteCustomForm` — DELETE `/service/platform/lead/v1.0/company/{company_id}/application/{application_id}/form/{slug}`

**Delete a custom form**

Delete a custom form using it's slug

**Path params:**
- `company_id` — Company ID of the application *(required)*
- `application_id` — Application ID for the form *(required)*
- `slug` — Slug of form whose response is getting submitted *(required)*

**Responses:** 200, 404
  200 schema: `CustomForm`

---

### Discount

#### `getDiscounts` — GET `/service/platform/discount/v1.0/company/{company_id}/job/`

**List discounts**

Retrieve a list of discounts. You can also retrieve discounts using filter query parameters. There are additional optional parameters that can be specified in the parameters of the request when retrieving discount

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*

**Query params:**
- `view` — Specifies the format in which the discounts are displayed. Options are 'listing'
- `q` — The search query. This can be a partial or complete name of a discount.
- `page_no` — The page number to navigate through the given set of results. Default is 1.
- `page_size` — Number of items to retrieve in each page. Default is 12.
- `archived` — Indicates whether to include expired discounts in the results. Defaults to false
- `month` — The month for which discounts is requested. Defaults to the current month if not
- `year` — The year for which discounts is requested. Defaults to the current year if not s
- `type` — Specifies the type of disocunt to list, either 'basic' or 'custom'.
- *(+ 1 more query params)*

**Responses:** 200, 400
  200 schema: `ListOrCalender`

---

#### `createDiscount` — POST `/service/platform/discount/v1.0/company/{company_id}/job/`

**Create discount**

Creates a discount. There are additional optional parameters that can be specified in the body of the request when creating a discount

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*

**Request body:** `application/json`
  Schema: `CreateUpdateDiscount`

**Responses:** 200, 400
  200 schema: `DiscountJob`

---

#### `getDiscount` — GET `/service/platform/discount/v1.0/company/{company_id}/job/{id}/`

**Get discount**

Retrieve a single discount by its id.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*
- `id` — Unique identifier for the discount. *(required)*

**Responses:** 200, 400
  200 schema: `DiscountJob`

---

#### `updateDiscount` — PUT `/service/platform/discount/v1.0/company/{company_id}/job/{id}/`

**Update discount**

Update an existing discount by its id. Discount can only be updated after 5 min from last updated time stamp (modified_on).

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*
- `id` — Unique identifier for the discount. *(required)*

**Request body:** `application/json`
  Schema: `CreateUpdateDiscount`

**Responses:** 200, 400
  200 schema: `DiscountJob`

---

#### `upsertDiscountItems` — POST `/service/platform/discount/v1.0/company/{company_id}/job/{id}/items/`

**Upsert discount items**

Enables users to create custom discounts in bulk by providing the multiple products in requestBody. It allows for the efficient creation of multiple discounts simultaneously, streamlining the discount management process.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*
- `id` — Unique identifier for the discount. *(required)*

**Request body:** `application/json`
  Schema: `BulkDiscount`

**Responses:** 200, 400

---

#### `validateDiscountFile` — POST `/service/platform/discount/v1.0/company/{company_id}/file/validation/`

**Validate discount file**

Validates the discount file for any discrepancies. like item should be valid etc..

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*

**Query params:**
- `discount` — Unique identifier for the discount.

**Request body:** `application/json`
  Schema: `FileJobRequestSchema`

**Responses:** 200, 400
  200 schema: `FileJobResponseSchema`

---

#### `downloadDiscountFile` — POST `/service/platform/discount/v1.0/company/{company_id}/file/{type}/download/`

**Get discount file**

Retrieve a discount file by its type, it could be product or inventory.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*
- `type` — The type of discount file to download, either 'product' or 'inventory'. *(required)*

**Request body:** `application/json`
  Schema: `DownloadFileJob`

**Responses:** 200, 400
  200 schema: `FileJobResponseSchema`

---

#### `getValidationJob` — GET `/service/platform/discount/v1.0/company/{company_id}/file/validation/{id}/`

**List validation job discount**

Retrieve a validation job of a discount by its id.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*
- `id` — Unique identifier for the discount. *(required)*

**Responses:** 200, 400
  200 schema: `FileJobResponseSchema`

---

#### `cancelValidationJob` — DELETE `/service/platform/discount/v1.0/company/{company_id}/file/validation/{id}/`

**deletel validation job discount**

Cancel validation job of a discount by its id.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*
- `id` — Unique identifier for the discount. *(required)*

**Responses:** 200, 400
  200 schema: `CancelJobResponseSchema`

---

#### `getDownloadJob` — GET `/service/platform/discount/v1.0/company/{company_id}/file/download/{id}/`

**List discount download job**

Retrieve a discount download job by its id.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*
- `id` — Unique identifier for the discount. *(required)*

**Responses:** 200, 400
  200 schema: `FileJobResponseSchema`

---

#### `cancelDownloadJob` — DELETE `/service/platform/discount/v1.0/company/{company_id}/file/download/{id}/`

**delete discount download job**

Cancel a discount download job by its id.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller *(required)*
- `id` — Unique identifier for the discount *(required)*

**Responses:** 200, 400
  200 schema: `CancelJobResponseSchema`

---

### Events

#### `fetchAllEventConfigurations` — GET `/service/platform/webhook/v1.0/company/{company_id}/events`

**List event configurations**

Retrieve all configurations for event handling.

**Responses:** 200
  200 schema: `EventConfigResult`

---

### FileStorage

#### `startUpload` — POST `/service/platform/assets/v2.0/company/{company_id}/namespaces/{namespace}/upload/start`

**Start file upload.**

Inititates the process of uploading a file to storage location, and returns a storage link in response.

**Request body:** `application/json`
  Schema: `FileUploadStart`

**Responses:** 200, 400
  200 schema: `FileUpload`

---

#### `completeUpload` — POST `/service/platform/assets/v2.0/company/{company_id}/namespaces/{namespace}/upload/complete`

**Complete file upload.**

Starts the process of uploading a file to storage location, and returns a storage link in response.

**Request body:** `application/json`
  Schema: `FileUpload`

**Responses:** 200, 400
  200 schema: `FileUploadComplete`

---

#### `appStartUpload` — POST `/service/platform/assets/v2.0/company/{company_id}/application/{application_id}/namespaces/{namespace}/upload/start`

**Application start upload.**

Start uploading a file from an application and returns a storage link in response.

**Request body:** `application/json`
  Schema: `FileUploadStart`

**Responses:** 200, 400
  200 schema: `FileUpload`

---

#### `appCompleteUpload` — POST `/service/platform/assets/v2.0/company/{company_id}/application/{application_id}/namespaces/{namespace}/upload/complete`

**Application complete upload.**

Finish uploading a file from an application.

**Request body:** `application/json`
  Schema: `FileUpload`

**Responses:** 200, 400
  200 schema: `FileUploadComplete`

---

#### `getSignUrls` — POST `/service/platform/assets/v1.0/company/{company_id}/sign-urls`

**Get signed URLs.**

Retrieve signed URLs for file access.

**Request body:** `application/json`
  Schema: `SignUrl`

**Responses:** 200
  200 schema: `SignUrlResult`

---

#### `copyFiles` — POST `/service/platform/assets/v1.0/company/{company_id}/uploads/copy`

**Copy files.**

Duplicate files to another location.

**Query params:**
- `sync` — 

**Request body:** `application/json`
  Schema: `CopyFiles`

**Responses:** 200, 400

---

#### `browse` — GET `/service/platform/assets/v1.0/company/{company_id}/namespaces/{namespace}/browse`

**Browse files.**

View and navigate through available files.

**Query params:**
- `page` — page no
- `limit` — Limit

**Responses:** 200, 400

---

#### `appbrowse` — GET `/service/platform/assets/v1.0/company/{company_id}/application/{application_id}/namespaces/{namespace}/browse`

**Application browse files.**

Browse files within an application.

**Query params:**
- `page` — page no
- `limit` — Limit
- `search` — Search

**Responses:** 200, 400

---

#### `browsefiles` — POST `/service/platform/assets/v1.0/company/{company_id}/application/{application_id}/namespaces/{namespace}/browse`

**Browse Files**

**Query params:**
- `page` — page no
- `limit` — Limit
- `search` — Search

**Request body:** `application/json`
  Schema: `ExtensionSlug`

**Responses:** 200, 400

---

#### `proxy` — GET `/service/platform/assets/v1.0/company/{company_id}/proxy`

**Proxy file access.**

Access files through a proxy.

**Query params:**
- `url` — url *(required)*

**Responses:** 200
  200 schema: `ProxyFileAccess`

---

### General

#### `getAllPages` — GET `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}/page`

**List pages of a theme **

Retrieve a list of all available pages.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*
- `theme_id` — ID of the theme to be retrieved *(required)*

**Responses:** 200
  200 schema: `AllAvailablePageSchema`

---

#### `createPage` — POST `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}/page`

**Create theme page**

Generate and add a new page to the selected theme of the Platform.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*
- `theme_id` — ID of the theme *(required)*

**Request body:** `application/json`
  Schema: `AvailablePageSchema`

**Responses:** 200
  200 schema: `AvailablePageSchema`

---

#### `updateMultiplePages` — PUT `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}/page`

**Update theme pages**

Modify multiple pages simultaneously of a theme.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*
- `theme_id` — ID of the theme to be retrieved *(required)*

**Request body:** `application/json`
  Schema: `AllAvailablePageSchema`

**Responses:** 200
  200 schema: `AllAvailablePageSchema`

---

#### `getPage` — GET `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}/{page_value}`

**Get a page**

Retrieve detailed information about a specific page of a theme.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*
- `theme_id` — ID of the theme to be retrieved *(required)*
- `page_value` — Value of the page to be retrieved *(required)*

**Responses:** 200
  200 schema: `AvailablePageSchema`

---

#### `deletePage` — DELETE `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}/{page_value}`

**Delete a page**

Remove a page from a theme of the platform.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*
- `theme_id` — ID of the theme *(required)*
- `page_value` — Value of the page to be updated *(required)*

**Responses:** 200
  200 schema: `AvailablePageSchema`

---

#### `updatePage` — PUT `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}/{page_value}/{socket_id}`

**Update a page**

Modify and update the content of a page.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*
- `theme_id` — ID of the theme *(required)*
- `page_value` — Value of the page to be updated *(required)*
- `socket_id` — Unique socket id for websocket *(required)*

**Request body:** `application/json`
  Schema: `AvailablePageSchema`

**Responses:** 200
  200 schema: `AvailablePageSchema`

---

#### `getFonts` — GET `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/fonts`

**List theme fonts **

Retrieve a list of available fonts that can be used by themes in the platform.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `capability` — Filter fonts based on supported capabilities (e.g., "WOFF2").

**Responses:** 200
  200 schema: `FontsSchema`

---

#### `getCompanyLevelThemes` — GET `/service/platform/theme/v2.0/company/{company_id}/themes`

**List company themes**

Retrieve themes added to a company.

**Path params:**
- `company_id` — The ID of the company to retrieve the themes associated with it. *(required)*

**Query params:**
- `search_text` — Search Text to match the Theme Names and return the response.

**Responses:** 200, 401

---

#### `addMarketplaceThemeToCompany` — POST `/service/platform/theme/v2.0/company/{company_id}`

**Create a company theme**

Incorporate a marketplace theme into a company's profile.

**Path params:**
- `company_id` — The ID of the company to apply the theme to. *(required)*

**Request body:** `application/json`
  Schema: `ThemeReq`

**Responses:** 200, 401
  200 schema: `CompanyThemeSchema`

---

#### `deleteCompanyTheme` — DELETE `/service/platform/theme/v2.0/company/{company_id}/{theme_id}`

**Delete a company theme**

Remove a theme associated with a company.

**Path params:**
- `company_id` — The ID of the company. *(required)*
- `theme_id` — The ID of the theme. *(required)*

**Responses:** 200
  200 schema: `CompanyThemeSchema`

---

#### `getApplicationThemes` — GET `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/themes`

**List sales channel themes**

Retrieve all draft themes added to sales channel from theme collection.

**Path params:**
- `company_id` — The ID of the company *(required)*
- `application_id` — The ID of the application *(required)*

**Responses:** 200

---

#### `getApplicationThemesCount` — GET `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/application_themes_count`

**Get sales channel themes count**

Retrieve count of all draft themes added to sales channel from theme collection.

**Path params:**
- `company_id` — The ID of the company *(required)*
- `application_id` — The ID of the application *(required)*

**Responses:** 200

---

#### `getThemeById` — GET `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}`

**Get theme**

Retrieve a theme by its unique identifier. Response contains theme template data and data stored in theme editor.

**Path params:**
- `company_id` — The ID of the company *(required)*
- `application_id` — The ID of the application *(required)*
- `theme_id` — The ID of the theme *(required)*

**Responses:** 200
  200 schema: `ThemesSchema`

---

#### `updateTheme` — PUT `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}`

**Update theme**

Modify and update the content and settings of a theme.

**Path params:**
- `company_id` — The ID of the company. *(required)*
- `application_id` — The ID of the application. *(required)*
- `theme_id` — The ID of the theme. *(required)*

**Request body:** `application/json`
  Schema: `UpdateThemeRequestBody`

**Responses:** 200
  200 schema: `ThemesSchema`

---

#### `deleteTheme` — DELETE `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}`

**Delete theme**

Remove a theme from theme drafts of a sales channel.

**Path params:**
- `company_id` — The ID of the company. *(required)*
- `application_id` — The ID of the application. *(required)*
- `theme_id` — The ID of the theme to be deleted. *(required)*

**Responses:** 200
  200 schema: `ThemesSchema`

---

#### `addThemeToApplication` — POST `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/`

**Create theme in sales channel**

Include a theme in an application drafts from theme collection.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `ThemeReq`

**Responses:** 200
  200 schema: `ThemesSchema`

---

#### `updateThemeName` — PATCH `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/name`

**Update theme name**

Modify the name of the draft theme by theme Id.

**Path params:**
- `company_id` — The ID of the company. *(required)*
- `application_id` — The ID of the application. *(required)*
- `theme_id` — The ID of the theme to be updated. *(required)*

**Request body:** `application/json`
  Schema: `UpdateThemeNameRequestBody`

**Responses:** 200
  200 schema: `ThemesSchema`

---

#### `applyTheme` — PATCH `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/apply`

**Apply a theme**

Change current applied theme with new draft theme.

**Path params:**
- `company_id` — The ID of the company *(required)*
- `application_id` — The ID of the application *(required)*
- `theme_id` — The ID of the apply *(required)*

**Responses:** 200
  200 schema: `ThemesSchema`

---

#### `duplicateTheme` — POST `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/duplicate`

**Duplicate a theme**

Create a new copy of an existing theme by theme Id

**Path params:**
- `company_id` — The ID of the company *(required)*
- `application_id` — The ID of the application *(required)*
- `theme_id` — The ID of the theme to be duplicated *(required)*

**Responses:** 200
  200 schema: `ThemesSchema`

---

#### `getAppliedTheme` — GET `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}`

**Get applied theme**

Retrieve the currently applied theme of a sales channel using application Id.

**Path params:**
- `company_id` — The ID of the company *(required)*
- `application_id` — The ID of the application *(required)*

**Responses:** 200
  200 schema: `ThemesSchema`

---

#### `getThemeForPreview` — GET `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/preview`

**Get theme for preview**

Retrieve a theme by its unique identifier. Response contains theme template data and data stored in theme editor.

**Path params:**
- `company_id` — The ID of the company *(required)*
- `application_id` — The ID of the application *(required)*
- `theme_id` — The ID of the theme *(required)*

**Responses:** 200
  200 schema: `ThemesSchema`

---

#### `getThemeLastModified` — HEAD `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/polling`

**Get theme last modified date**

Retrieve the last modification of a theme used for polling and identifing cross user changes in a theme.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `theme_id` — ID allotted to the theme. *(required)*

**Responses:** 200

---

#### `isUpgradable` — GET `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/upgradable`

**Check theme is upgradable **

Determine if a public theme is eligible for an upgrade to a new version after any new version released in marketplace.

**Path params:**
- `company_id` — The ID of the company *(required)*
- `application_id` — The ID of the application *(required)*
- `theme_id` — The ID of the theme *(required)*

**Responses:** 200
  200 schema: `ThemeUpgradable`

---

#### `upgradeTheme` — PUT `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/upgrade`

**Upgrade theme**

Update a draft theme to a new version of the marketplace.

**Path params:**
- `company_id` — The ID of the company *(required)*
- `application_id` — The ID of the application *(required)*
- `theme_id` — The ID of the upgrade *(required)*

**Responses:** 200
  200 schema: `ThemesSchema`

---

#### `getExtensionSections` — GET `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/extension-section`

**Get extension sections**

Retrieve the list of extension sections for a given application in the specified company.

**Path params:**
- `company_id` — The ID of the company *(required)*
- `application_id` — The ID of the application *(required)*

**Query params:**
- `type` — The type of the theme
- `company_mode` — The mode of the company

**Responses:** 200

---

#### `getCompanyLanguages` — GET `/service/platform/content/v1.0/company/{company_id}/languages`

**Get company languages**

Retrieve language configurations and settings for the specified company.

**Path params:**
- `company_id` —  *(required)*

**Responses:** 200

---

#### `addCompanyLanguage` — POST `/service/platform/content/v1.0/company/{company_id}/languages`

**Add company language**

Add new languages to company's supported language list.

**Path params:**
- `company_id` —  *(required)*

**Request body:** `application/json`
  Schema: `CompanyLanguageCreate`

**Responses:** 201, 400

---

#### `updateCompanyLanguageDefault` — PUT `/service/platform/content/v1.0/company/{company_id}/languages/{locale}`

**Set default language**

Update default language settings for the company.

**Path params:**
- `company_id` — Company ID *(required)*
- `locale` —  *(required)*

**Request body:** `application/json`
  Schema: `CompanyLanguageUpdate`

**Responses:** 200, 404
  200 schema: `CompanyLanguage`

---

#### `deleteCompanyLanguage` — DELETE `/service/platform/content/v1.0/company/{company_id}/languages/{locale}`

**Remove company language**

Remove a language from company's supported languages list.

**Path params:**
- `company_id` —  *(required)*
- `locale` —  *(required)*

**Responses:** 200, 404
  200 schema: `OperationResponseSchema`

---

#### `getApplicationLanguages` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/languages`

**Get app languages**

Fetch all languages configured for the specified application.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Responses:** 200

---

#### `addApplicationLanguage` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/languages`

**Add app language**

Add new languages to application's supported language list.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Request body:** `application/json`
  Schema: `ApplicationLanguageCreate`

**Responses:** 201, 400

---

#### `bulkUnPublishApplicationLanguage` — PATCH `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/languages`

**Unpublish all languages of sales channel.**

Unpublish all application's published languages of specific sales channel.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Request body:** `application/json`
  Schema: `unPublishApplicationLanguage`

**Responses:** 200, 400

---

#### `updateApplicationLanguageStatus` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/languages/{locale}`

**Set app language**

Update language status and settings for the application.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*
- `locale` —  *(required)*

**Request body:** `application/json`
  Schema: `ApplicationLanguageUpdate`

**Responses:** 200, 404
  200 schema: `ApplicationLanguage`

---

#### `deleteApplicationLanguage` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/languages/{locale}`

**Remove app language**

Remove a language from application's supported languages.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*
- `locale` —  *(required)*

**Responses:** 200, 404
  200 schema: `OperationResponseSchema`

---

#### `getAllTranslatableResources` — GET `/service/platform/content/v1.0/company/{company_id}/translatable/resources`

**List all translatable resources**

Retrieve all translatable content resources for the company.

**Responses:** 200

---

#### `getTranslatableResourceById` — GET `/service/platform/content/v1.0/company/{company_id}/translatable/resources/{id}`

**Get translatable resource details**

Fetch details of a specific translatable resource.

**Path params:**
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `TranslatableResource`

---

#### `getAllResourceDefinitions` — GET `/service/platform/content/v1.0/company/{company_id}/translatable/resource/definitions`

**Get all resource defination**

Retrieve translation schemas and configurations for resources.

**Query params:**
- `translatable_resource_id` — 

**Responses:** 200

---

#### `getResourceDefinitionById` — GET `/service/platform/content/v1.0/company/{company_id}/translatable/resource/definitions/{id}`

**Get resource definitions details**

Fetch specific resource definition and its translation schema.

**Path params:**
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `ResourceDefinition`

---

#### `getAllSections` — GET `/service/platform/content/v1.0/company/{company_id}/translatable/sections`

**List all translatable content sections**

Retrieve all translatable content sections for organization.

**Responses:** 200, 404

---

#### `getSectionById` — GET `/service/platform/content/v1.0/company/{company_id}/translatable/section/{id}`

**Retrieve details of a specific translatable section by its ID.**

Fetch details of a specific translatable section.

**Path params:**
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `TranslatableSection`

---

#### `getTranslatableResourcesBySectionId` — GET `/service/platform/content/v1.0/company/{company_id}/translatable/section/{id}/resources`

**Get section resources**

Retrieve all resources within a specific section.

**Path params:**
- `id` —  *(required)*

**Responses:** 200, 404

---

#### `getCompanyResourceTranslation` — GET `/service/platform/content/v1.0/company/{company_id}/resource/translations`

**Get company translations**

Fetch translations for company-level resources.

**Path params:**
- `company_id` —  *(required)*

**Query params:**
- `locale` —  *(required)*
- `type` —  *(required)*
- `resource_id` —  *(required)*

**Responses:** 200
  200 schema: `ResourceTranslation`

---

#### `createCompanyResourceTranslation` — POST `/service/platform/content/v1.0/company/{company_id}/resource/translations`

**Add company translation**

Create new translations for company resources.

**Path params:**
- `company_id` —  *(required)*

**Request body:** `application/json`
  Schema: `ResourceTranslationCreate`

**Responses:** 201, 400

---

#### `updateCompanyResourceTranslation` — PUT `/service/platform/content/v1.0/company/{company_id}/resource/translations/{id}`

**Update company translation**

Update existing translations for company resources.

**Path params:**
- `company_id` —  *(required)*
- `id` —  *(required)*

**Request body:** `application/json`
  Schema: `ResourceTranslationUpdate`

**Responses:** 200, 404
  200 schema: `ResourceTranslation`

---

#### `deleteCompanyResourceTranslation` — DELETE `/service/platform/content/v1.0/company/{company_id}/resource/translations/{id}`

**Remove company translation**

Remove translations for company resources.

**Path params:**
- `company_id` —  *(required)*
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `OperationResponseSchema`

---

#### `getApplicationResourceTranslations` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/resource/translations`

**Get app translations**

Fetch translations for application-level resources.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Query params:**
- `locale` —  *(required)*
- `type` —  *(required)*
- `resource_id` —  *(required)*

**Responses:** 200

---

#### `createApplicationResourceTranslation` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/resource/translations`

**Add app translation**

Create new translations for application resources.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Request body:** `application/json`
  Schema: `ResourceTranslationCreate`

**Responses:** 201, 400

---

#### `upsertApplicationResourceTranslationInBulk` — PATCH `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/resource/translations/bulk`

**Bulk update translations**

Create or update multiple translations in a single request.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Request body:** `application/json`
  Schema: `ResourceTranslationList`

**Responses:** 200, 400
  200 schema: `ResourceTranslationBulkUpsert`

---

#### `updateApplicationResourceTranslation` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/resource/translations/{id}`

**Update app translation**

Update existing translations for application resources.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*
- `id` —  *(required)*

**Request body:** `application/json`
  Schema: `ResourceTranslationUpdate`

**Responses:** 200, 404
  200 schema: `ResourceTranslation`

---

#### `deleteApplicationResourceTranslation` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/resource/translations/{id}`

**Remove app translation**

Remove translations for application resources.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `OperationResponseSchema`

---

#### `getPlatformTickets` — GET `/service/platform/lead/v1.0/company/{company_id}/ticket`

**List tickets**

List all tickets created within the platform at company level

**Path params:**
- `company_id` — Company ID for which the data will be returned *(required)*

**Query params:**
- `items` — Decides that the reponse will contain the list of tickets
- `filters` — Decides that the reponse will contain the ticket filters
- `q` — Search through ticket titles and description
- `status` — Filter tickets on status
- `priority` — Filter tickets on priority
- `category` — Filter tickets on category
- `page_no` — The page number to navigate through the given set of results.
- `page_size` — Number of items to retrieve in each page. Default is 12. (default: 12)

**Responses:** 200
  200 schema: `TicketList`

---

#### `createTicket` — POST `/service/platform/lead/v1.0/company/{company_id}/ticket`

**Create ticket**

Create a new ticket at application level

**Path params:**
- `company_id` — Company ID for which the data will be returned *(required)*

**Request body:** `application/json`
  Schema: `AddTicketPayload`

**Responses:** 200
  200 schema: `Ticket`

---

#### `getPlatformTicket` — GET `/service/platform/lead/v1.0/company/{company_id}/ticket/{id}`

**Get a ticket**

Get detailed information about a specific ticket which is raised at company level

**Path params:**
- `company_id` — Company ID for which the data will be returned *(required)*
- `id` — Tiket ID of the ticket to be fetched *(required)*

**Responses:** 200
  200 schema: `Ticket`

---

#### `editPlatformTicket` — PUT `/service/platform/lead/v1.0/company/{company_id}/ticket/{id}`

**Update a ticket**

Modify the content and settings of a specific company level ticket.

**Path params:**
- `company_id` — Company ID for ticket *(required)*
- `id` — Ticket ID of ticket to be edited *(required)*

**Request body:** `application/json`
  Schema: `EditTicketPayload`

**Responses:** 200
  200 schema: `Ticket`

---

#### `createPlatformTicketHistory` — POST `/service/platform/lead/v1.0/company/{company_id}/ticket/{id}/history`

**Create ticket history**

Create futher interactions on a company level ticket such as changing it's status, priority or replying to a ticket via a thread.

**Path params:**
- `company_id` — Company ID for ticket *(required)*
- `id` — Ticket ID for which history is created *(required)*

**Request body:** `application/json`
  Schema: `TicketHistoryPayload`

**Responses:** 200
  200 schema: `TicketHistory`

---

#### `getPlatformTicketHistory` — GET `/service/platform/lead/v1.0/company/{company_id}/ticket/{id}/history`

**Get ticket history**

List history records for a company level ticket.

**Path params:**
- `company_id` — Company ID for ticket *(required)*
- `id` — Ticket ID for which history is to be fetched *(required)*

**Responses:** 200
  200 schema: `TicketHistoryList`

---

#### `getFeedbacks` — GET `/service/platform/lead/v1.0/company/{company_id}/ticket/{id}/feedback`

**List feedbacks**

Get feedback information related to a ticket.

**Path params:**
- `company_id` — Company ID for ticket *(required)*
- `id` — Ticket ID for which feedbacks are to be fetched *(required)*

**Responses:** 200
  200 schema: `TicketFeedbackList`

---

#### `submitFeedback` — POST `/service/platform/lead/v1.0/company/{company_id}/ticket/{id}/feedback`

**Submit feedback**

Provide feedback on a ticket and it's resolution.

**Path params:**
- `company_id` — Company ID for ticket *(required)*
- `id` — Ticket ID for which feedback is to be submitted *(required)*

**Request body:** `application/json`
  Schema: `TicketFeedbackPayload`

**Responses:** 200
  200 schema: `TicketFeedback`

---

#### `getCustomForm` — GET `/service/platform/lead/v1.0/company/{company_id}/application/{application_id}/form/{slug}`

**Get custom form**

Get information about a custom form which includes corresponding field details and any validation regex required against that field or not

**Path params:**
- `company_id` — Company ID of the application *(required)*
- `application_id` — Application ID for the form *(required)*
- `slug` — Slug of form whose response is getting submitted *(required)*

**Responses:** 200
  200 schema: `CustomForm`

---

#### `editCustomForm` — PUT `/service/platform/lead/v1.0/company/{company_id}/application/{application_id}/form/{slug}`

**Update custom form**

Modify the content and associated settings of a custom form.

**Path params:**
- `company_id` — Company ID of the application *(required)*
- `application_id` — Application ID for the form *(required)*
- `slug` — Slug of form whose response is getting submitted *(required)*

**Request body:** `application/json`
  Schema: `EditCustomFormPayload`

**Responses:** 200
  200 schema: `CustomForm`

---

#### `getCustomForms` — GET `/service/platform/lead/v1.0/company/{company_id}/application/{application_id}/form`

**Get custom forms**

List all available custom forms

**Path params:**
- `company_id` — Company ID of the application *(required)*
- `application_id` — Application ID for the form *(required)*

**Responses:** 200
  200 schema: `CustomFormList`

---

#### `createCustomForm` — POST `/service/platform/lead/v1.0/company/{company_id}/application/{application_id}/form`

**Create custom form**

Create a new custom form for application users to fill

**Path params:**
- `company_id` — Company ID of the application *(required)*
- `application_id` — Application ID for the form *(required)*

**Request body:** `application/json`
  Schema: `CreateCustomFormPayload`

**Responses:** 200
  200 schema: `CustomForm`

---

#### `getGeneralConfig` — GET `/service/platform/lead/v1.0/company/{company_id}/general-config`

**Get general configuration**

Get general configuration settings related to support system for company tickets

**Path params:**
- `company_id` — Company ID of the application *(required)*

**Responses:** 200
  200 schema: `GeneralConfigDetails`

---

#### `getCompanyMetrics` — GET `/service/platform/company-profile/v1.0/company/{company_id}/metrics`

**Get company metrics**

Allows viewing company metrics, including brand and store status, as well as the number of verified and unverified products, company documents, and store documents.

**Path params:**
- `company_id` — A `company_id` is a unique identifier for a particular seller account. *(required)*

**Responses:** 200, 400, 404
  200 schema: `MetricsSchema`

---

#### `getBrand` — GET `/service/platform/company-profile/v1.0/company/{company_id}/brand/{brand_id}`

**Get a brand**

Retrieve detailed information about a specific brand associated to a particular company.

**Path params:**
- `company_id` — Id of the company associated to brand that is to be viewed. *(required)*
- `brand_id` — Id of the brand to be viewed. *(required)*

**Responses:** 200, 400, 404
  200 schema: `GetBrandResponseSchema`

---

#### `createShortLink` — POST `/service/platform/share/v1.0/company/{company_id}/application/{application_id}/links/short-link/`

**Create short link**

Generate a shortened URL link for sharing.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application Id *(required)*

**Request body:** `application/json`
  Schema: `ShortLinkReq`

**Responses:** 200
  200 schema: `ShortLinkRes`

---

#### `getShortLinks` — GET `/service/platform/share/v1.0/company/{company_id}/application/{application_id}/links/short-link/`

**Get short links**

Retrieve a list of all generated short links.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application Id *(required)*

**Query params:**
- `page_no` — Current page number (default: 1)
- `page_size` — Current page size (default: 10)
- `created_by` — Short link creator
- `active` — Short link active status
- `short_url` — Search for short url
- `original_url` — Search for original url
- `title` — Search text for title

**Responses:** 200
  200 schema: `ShortLinkList`

---

#### `getShortLinkByHash` — GET `/service/platform/share/v1.0/company/{company_id}/application/{application_id}/links/short-link/{hash}/`

**Get short link by hash**

Retrieve a specific short link by its unique hash.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application Id *(required)*
- `hash` — Hash of short url *(required)*

**Responses:** 200
  200 schema: `ShortLinkRes`

---

#### `updateShortLinkById` — PATCH `/service/platform/share/v1.0/company/{company_id}/application/{application_id}/links/short-link/{id}/`

**Update short link**

Update details of a specific short link by its ID.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application Id *(required)*
- `id` — Short link document identifier *(required)*

**Request body:** `application/json`
  Schema: `ShortLinkReq`

**Responses:** 200
  200 schema: `ShortLinkRes`

---

#### `getShortLinkClickStats` — GET `/service/platform/share/v1.0/company/{company_id}/application/{application_id}/links/short-link/click-stats`

**Get short link click statistics**

Retrieve statistics and analytics for clicks on a short link.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application Id *(required)*

**Query params:**
- `surl_id` — Short link ID for which click statistics are to be retrieved. *(required)*

**Responses:** 200
  200 schema: `ClickStatsResult`

---

#### `addProxyPath` — POST `/service/platform/partners/v1.0/company/{company_id}/application/{application_id}/proxy/{extension_id}`

**Create extension proxy**

Use this endpoint to register a proxy for calling an extension's API from your storefront. This enables your storefront to interact with extension APIs seamlessly, helps enhance and extend your storefront's existing functionality using extensions, and simplifies integration by avoiding CORS issues w

**Path params:**
- `company_id` — Company ID for which proxy URL will be generated *(required)*
- `application_id` — Application (Storefront) unique identifier for which proxy URL will be generated *(required)*
- `extension_id` — Extension's unique identifier for which a proxy URL will be generated *(required)*

**Request body:** `application/json`
  Schema: `AddProxyReq`

**Responses:** 200, 400
  200 schema: `ExtensionProxyPathCreation`

---

#### `removeProxyPath` — DELETE `/service/platform/partners/v1.0/company/{company_id}/application/{application_id}/proxy/{extension_id}/{attached_path}`

**Remove extension proxy**

Remove the proxy that was created earlier for the extension.

**Path params:**
- `company_id` — Company ID for which proxy URL will be generated *(required)*
- `application_id` — Application (Storefront) unique identifier for which proxy URL will be generated *(required)*
- `extension_id` — Extension ID for which proxy URL needs to be removed *(required)*
- `attached_path` — Attached path slug *(required)*

**Responses:** 201, 404

---

#### `createAuditLog` — POST `/service/platform/webhook/v1.0/company/{company_id}/audit/logs/create`

**Create an audit log**

Generate and record an audit log entry for a specific event or action.

**Request body:** `application/json`
  Schema: `RequestBodyAuditLog`

**Responses:** 200
  200 schema: `CreateLogResp`

---

#### `getTranslateUILabels` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/translate-ui-labels`

**Get Translate Ui Labels**

Retrieves Translate Ui Labels with optional filtering by type, application, and company identifiers.

**Query params:**
- `type` — Filter Translate Ui Labels by type

**Responses:** 200, 400
  200 schema: `TranslateUiLabelsPage`

---

#### `createTranslateUILabels` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/translate-ui-labels`

**Add Translate Ui Labels**

Creates a new Translate Ui Labels entry with specified configuration and locale settings.

**Request body:** `application/json`
  Schema: `TranslateUiLabelsCreate`

**Responses:** 201, 400

---

#### `getTranslateUILabelsById` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/translate-ui-labels/{id}`

**Get Resource Detail**

Fetches detailed information for a specific Translate Ui Labels using its unique identifier.

**Path params:**
- `id` — ID of the Translate Ui Labels *(required)*

**Responses:** 200, 404
  200 schema: `TranslateUiLabels`

---

#### `updateTranslateUILabels` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/translate-ui-labels/{id}`

**Update Resource Detail**

Modifies existing Translate Ui Labels properties including locale, type, and associated configurations.

**Path params:**
- `id` — The unique identifier of the Translate Ui Labels to update *(required)*

**Request body:** `application/json`
  Schema: `StaticResourceUpdate`

**Responses:** 200, 400, 404
  200 schema: `TranslateUiLabels`

---

### Location

#### `getLocations` — GET `/service/platform/company-profile/v2.0/company/{company_id}/location`

**Get company specific stores**

Retrieve a list of locations associated with the company.

**Path params:**
- `company_id` — Id of the company whose locations are to fetched *(required)*

**Query params:**
- `store_type` — Helps to sort the location list on the basis of location type.
- `q` — Query that is to be searched.
- `stage` — to filter companies on basis of verified or unverified companies.
- `page_no` — The page number to navigate through the given set of results (default: 1)
- `page_size` — Number of items to retrieve in each page. Default is 10. (default: 20)
- `location_ids` — Helps to filter stores on the basis of uids.
- `types` — Helps to get the location list on the basis of multiple location type.
- `tags` — Helps to get the location list on the basis of multiple location tag.

**Responses:** 200, 400
  200 schema: `LocationListSchema`

---

#### `createLocation` — POST `/service/platform/company-profile/v2.0/company/{company_id}/location`

**Create company stores**

Create a new location associated to a company.

**Path params:**
- `company_id` — Id of the company inside which the location is to be created. *(required)*

**Request body:** `application/json`
  Schema: `LocationSchema`

**Responses:** 200, 400, 404
  200 schema: `ProfileSuccessResponseSchema`

---

#### `getLocationDetail` — GET `/service/platform/company-profile/v2.0/company/{company_id}/location/{location_id}`

**Get company stores**

Retrive detailed information about a specific location associated to a specific company.

**Path params:**
- `company_id` — Id of the company inside which the location lies. *(required)*
- `location_id` — Id of the location which you want to view. *(required)*

**Responses:** 200, 400, 404
  200 schema: `GetLocationSchema`

---

#### `updateLocation` — PUT `/service/platform/company-profile/v2.0/company/{company_id}/location/{location_id}`

**Update company stores**

Allows to edit a location associated to a company.

**Path params:**
- `company_id` — Id of the company inside which the location is to be created. *(required)*
- `location_id` — Id of the location which you want to edit. *(required)*

**Request body:** `application/json`
  Schema: `LocationSchema`

**Responses:** 200, 400, 404
  200 schema: `ProfileSuccessResponseSchema`

---

#### `createLocationBulk` — POST `/service/platform/company-profile/v1.0/company/{company_id}/location/bulk`

**Bulk create company stores**

Allows to create locations in bulk at once associated to a company

**Path params:**
- `company_id` — Id of the company inside which the location is to be created. *(required)*

**Request body:** `application/json`
  Schema: `BulkLocationSchema`

**Responses:** 200, 400, 404
  200 schema: `ProfileSuccessResponseSchema`

---

#### `getLocationTags` — GET `/service/platform/company-profile/v1.0/company/{company_id}/location/tags`

**Get company store tags**

Retrieve all the distinct tags associated to a company location.

**Path params:**
- `company_id` — Id of the company inside which the location is to be created. *(required)*

**Responses:** 200, 400, 404
  200 schema: `StoreTagsResponseSchema`

---

### Subscriber

#### `registerSubscriberToEventV2` — POST `/service/platform/webhook/v2.0/company/{company_id}/subscriber/`

**Register Subscriber.**

Register Subscriber.


**Request body:** `application/json`
  Schema: `SubscriberConfigPostRequestV2`

**Responses:** 200
  200 schema: `SubscriberConfigResult`

---

#### `updateSubscriberV2` — PUT `/service/platform/webhook/v2.0/company/{company_id}/subscriber/`

**Update Subscriber.**

Update Subscriber.


**Request body:** `application/json`
  Schema: `SubscriberConfigUpdateRequestV2`

**Responses:** 200
  200 schema: `SubscriberConfigResult`

---

#### `registerSubscriberToEvent` — POST `/service/platform/webhook/v1.0/company/{company_id}/subscriber/`

**Register subscriber to event**

Add a subscriber to receive events of a specific type.

**Request body:** `application/json`
  Schema: `SubscriberConfigPost`

**Responses:** 200
  200 schema: `SubscriberConfigResult`

---

#### `getSubscribersByCompany` — GET `/service/platform/webhook/v1.0/company/{company_id}/subscriber/`

**List subscribers by company**

Retrieve subscribers associated with a company.

**Responses:** 200
  200 schema: `SubscriberConfigList`

---

#### `updateSubscriberConfig` — PUT `/service/platform/webhook/v1.0/company/{company_id}/subscriber/`

**Update a subscriber config**

Modify and update subscriber configuration settings.

**Request body:** `application/json`
  Schema: `SubscriberConfigUpdate`

**Responses:** 200
  200 schema: `SubscriberConfigResult`

---

#### `upsertSubscriberEvent` — PUT `/service/platform/webhook/v3.0/company/{company_id}/subscriber/`

**Register Subscriber.**

Register Subscriber.


**Request body:** `application/json`
  Schema: `UpsertSubscriberConfig`

**Responses:** 200
  200 schema: `UpsertSubscriberConfigResult`

---

#### `getSubscriberById` — GET `/service/platform/webhook/v1.0/company/{company_id}/subscriber/{subscriber_id}`

**Get a subscriber**

Retrieve a subscriber's details by their unique identifier.

**Responses:** 200
  200 schema: `SubscriberDetails`

---

#### `getSubscribersByExtensionId` — GET `/service/platform/webhook/v1.0/company/{company_id}/extension/{extension_id}/subscriber/`

**List subscribers by extension ID**

Retrieve subscribers associated with a specific extension.

**Responses:** 200
  200 schema: `SubscriberConfigList`

---

### Tickets

#### `getNewTickets` — GET `/service/platform/lead/v1.0/company/{company_id}/application/{application_id}/ticket`

**List sales channel tickets **

Gets the list of Application level Tickets and/or ticket filters

**Path params:**
- `company_id` — Company ID of the application *(required)*
- `application_id` — Application ID for which the data will be returned *(required)*

**Query params:**
- `items` — Decides that the reponse will contain the list of tickets
- `filters` — Decides that the reponse will contain the ticket filters
- `q` — Search through ticket titles and description
- `status` — Filter tickets on status
- `priority` — Filter tickets on priority
- `category` — Filter tickets on category

**Responses:** 200
  200 schema: `TicketList`

---

#### `getNewTicket` — GET `/service/platform/lead/v1.0/company/{company_id}/application/{application_id}/ticket/{id}`

**Get Ticket Details**

Get ticket details of a application level ticket with ticket ID

**Path params:**
- `company_id` — Company ID of the application *(required)*
- `application_id` — Application ID for which the data will be returned *(required)*
- `id` — Tiket ID of the ticket to be fetched *(required)*

**Responses:** 200
  200 schema: `Ticket`

---

#### `editNewTicket` — PUT `/service/platform/lead/v1.0/company/{company_id}/application/{application_id}/ticket/{id}`

**Update Ticket Details**

Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes

**Path params:**
- `company_id` — Company ID of the application *(required)*
- `application_id` — Application ID for ticket *(required)*
- `id` — Ticket ID of ticket to be edited *(required)*

**Request body:** `application/json`
  Schema: `EditTicketPayload`

**Responses:** 200
  200 schema: `Ticket`

---

#### `createNewHistory` — POST `/service/platform/lead/v1.0/company/{company_id}/application/{application_id}/ticket/{id}/history`

**Create ticket history interaction**

Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

**Path params:**
- `company_id` — Company ID of the application *(required)*
- `application_id` — Application ID for ticket *(required)*
- `id` — Ticket ID for which history is created *(required)*

**Request body:** `application/json`
  Schema: `TicketHistoryPayload`

**Responses:** 200
  200 schema: `TicketHistory`

---

#### `getNewTicketHistory` — GET `/service/platform/lead/v1.0/company/{company_id}/application/{application_id}/ticket/{id}/history`

**Get ticket history interaction**

Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

**Path params:**
- `company_id` — Company ID of application *(required)*
- `application_id` — Application ID for ticket *(required)*
- `id` — Ticket ID for which history is to be fetched *(required)*

**Responses:** 200
  200 schema: `TicketHistoryList`

---

