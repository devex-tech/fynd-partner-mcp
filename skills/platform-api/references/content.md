# Content

**SDK Class:** `Content`  
**Total operations:** 122

## Groups

- **FAQs**: FAQs (Frequently Asked Questions) and FAQ Categories are features designed to help provide answers to common inquiries a
- **Announcement**: Announcements are banners or notifications that appear on top of your website or below the headers of navigation content
- **Blog**: Blogs serve as a multifaceted tool to engage with their audience, enhance their brand image, and drive sales. Through in
- **Legal**: Legal pages encompass essential documents required for e-commerce businesses to comply with legal regulations and establ
- **Navigation**: Navigations refers to the arrangement and organization of links and menus that guide visitors through the various pages 
- **Custom Page**: Custom pages allow Sellers to create unique web pages tailored to specific purposes or content needs within. These pages
- **Path Redirection Rules**: Path redirections are a functionality provided by Fynd Platform that enables you to redirect a customer visiting your we
- **Customer Support**: Customer support information on an ecommerce website encompasses various resources and channels through which customers 
- **Landing Page**: The landing Page Selection module extends versatility by enabling sellers to designate specific landing pages as the hom
- **Data Loaders**: Data loaders are a mechanism through which one can override the FDK(Fynd Platform SDK) method implementation. They are p
- **Sales Channel SEO**: SEO (Search Engine Optimization) in Fynd Platform encompasses a holistic approach to optimizing a website's digital foot
- **Legal Page**: Legal pages encompass essential documents required for e-commerce businesses to comply with legal regulations and establ
- **HTML Tags**: Third-party HTML tags encompass external HTML elements sourced from outside the application or website environment, ofte
- **Custom Fields**: Custom fields are a flexible way to attach additional information to a resource (e.g. Product, promotions, etc.). Some e
- **Custom Objects**: Custom objects refer to entities that are not currently present on the platform.
Sellers can create these custom data st

## Operations by Group

### AppAssociation

#### `getAppAssociation` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/app-association`

**Get app association**

Fetch the app-association configuration (Apple AASA + Google Asset Links payloads) for this application. Returns 404 if no record exists.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Responses:** 200, 404
  200 schema: `AppAssociationRecord`

---

#### `createAppAssociation` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/app-association`

**Create app association**

Create-only. Returns 409 if a record already exists for this application (caller should use PUT to update). 422 on shape/size violations. Body fields `ios_payload` (object|null) and `android_payload` (array|null) are both optional and independent.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Request body:** `application/json`
  Schema: `AppAssociationWriteBody`

**Responses:** 201, 409, 422

---

#### `updateAppAssociation` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/app-association`

**Update app association**

Update-only. Returns 404 if no record exists (caller should use POST to create). Partial-update semantics: keys present are written (explicit null clears the field); keys absent are no-op.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Request body:** `application/json`
  Schema: `AppAssociationWriteBody`

**Responses:** 200, 404, 422
  200 schema: `AppAssociationRecord`

---

#### `deleteAppAssociation` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/app-association`

**Delete app association**

Remove the app-association record entirely.

**Path params:**
- `company_id` —  *(required)*
- `application_id` —  *(required)*

**Responses:** 200, 404
  200 schema: `AppAssociationDeleted`

---

### General

#### `getAnnouncementsList` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/announcements`

**List announcements**

Lists all announcements

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results. Default value is 1 (default: 1)
- `page_size` — The number of items to retrieve in each page. Default value is 10. (default: 10)

**Responses:** 200
  200 schema: `GetAnnouncementListSchema`

---

#### `createAnnouncement` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/announcements`

**Create announcement**

Generate and add a new announcement.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `AdminAnnouncementSchema`

**Responses:** 200
  200 schema: `CreateAnnouncementSchema`

---

#### `getAnnouncementById` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/announcements/{announcement_id}`

**Get announcement**

Get detailed information about a specific announcement

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `announcement_id` — ID allotted to the announcement. *(required)*

**Responses:** 200
  200 schema: `AdminAnnouncementSchema`

---

#### `updateAnnouncement` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/announcements/{announcement_id}`

**Update announcement**

Modify the content and settings of a specific announcement.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `announcement_id` — ID allotted to the announcement. *(required)*

**Request body:** `application/json`
  Schema: `AdminAnnouncementSchema`

**Responses:** 200
  200 schema: `CreateAnnouncementSchema`

---

#### `updateAnnouncementSchedule` — PATCH `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/announcements/{announcement_id}`

**Update announcement schedule**

Modify the scheduling of a specific announcement.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `announcement_id` — ID allotted to the announcement. *(required)*

**Request body:** `application/json`
  Schema: `ScheduleSchema`

**Responses:** 200
  200 schema: `CreateAnnouncementSchema`

---

#### `deleteAnnouncement` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/announcements/{announcement_id}`

**Delete an announcement**

Remove a specific announcement.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `announcement_id` — ID allotted to the announcement. *(required)*

**Responses:** 200
  200 schema: `CreateAnnouncementSchema`

---

#### `createBlog` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/blogs/`

**Create blog**

Generate and add a new blog.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `BlogPayload`

**Responses:** 200
  200 schema: `BlogSchema`

---

#### `getBlogs` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/blogs/`

**List blogs**

List all blogs

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results. Default value is 1 (default: 1)
- `page_size` — The number of items to retrieve in each page. Default value is 10. (default: 10)
- `tags` — Blogs retrieve based on the list of tags passed.
- `q` — Blogs retrieve based on the title or slug passed.
- `slug` — Blogs retrieve based on the slug passed.
- `title` — Blogs retrieve based on the title passed.
- `status` — Blogs retrieve based on the status passed.

**Responses:** 200
  200 schema: `BlogGetDetails`

---

#### `updateBlog` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/blogs/{id}`

**Update a blog**

Modify the content and settings of a specific blog.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id` — ID allotted to the blog. *(required)*

**Request body:** `application/json`
  Schema: `BlogPayload`

**Responses:** 200
  200 schema: `BlogSchema`

---

#### `deleteBlog` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/blogs/{id}`

**Delete a blog**

Remove a specific blog.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id` — ID allotted to the blog. *(required)*

**Responses:** 200
  200 schema: `BlogSchema`

---

#### `addDataLoader` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/data-loader`

**Create data loader**

Create and add a new data loader.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `DataLoaderSchema`

**Responses:** 200
  200 schema: `DataLoaderResponseSchema`

---

#### `getDataLoaders` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/data-loader`

**List data loaders**

List all Dataloaders

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `DataLoadersSchema`

---

#### `deleteDataLoader` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/data-loader/{data_loader_id}`

**Delete a data loader**

Remove a specific data loader.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `data_loader_id` — ID allotted to the data loader. *(required)*

**Responses:** 200
  200 schema: `DataLoaderResponseSchema`

---

#### `editDataLoader` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/data-loader/{data_loader_id}`

**Update a data loader**

Modify the settings of a specific data loader.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `data_loader_id` — ID allotted to the data loader. *(required)*

**Request body:** `application/json`
  Schema: `DataLoaderSchema`

**Responses:** 200
  200 schema: `DataLoaderResponseSchema`

---

#### `getDataLoadersByService` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/data-loader/service/{service_name}`

**List all data loaders**

Use this to get all data loaders of an application by service name

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `service_name` — Service name of the data loader.. *(required)*

**Responses:** 200
  200 schema: `DataLoaderResponseSchema`

---

#### `selectDataLoader` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/data-loader/{data_loader_id}/select`

**Select a data loader**

Choose and set a data loader for use.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `data_loader_id` — ID allotted to the data loader. *(required)*

**Responses:** 200
  200 schema: `DataLoaderResponseSchema`

---

#### `resetDataLoader` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/data-loader/{service}/{operation_id}/reset`

**Reset a data loader**

Clear and reset data loader settings.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `service` — Name of service. *(required)*
- `operation_id` — Name of operation id of the service. *(required)*

**Responses:** 200
  200 schema: `DataLoaderResetResponseSchema`

---

#### `getFaqCategories` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/faq/categories`

**List FAQ Categories**

List all FAQ Categories

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `GetFaqCategoriesSchema`

---

#### `getFaqCategoryBySlugOrId` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/faq/category/{id_or_slug}`

**Get FAQ category**

Get detailed information about a specific FAQ category

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id_or_slug` — ID or the slug allotted to an FAQ category. Slug is a short, human-readable, URL *(required)*

**Responses:** 200
  200 schema: `GetFaqCategoryBySlugSchema`

---

#### `createFaqCategory` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/faq/category`

**Create FAQ Category**

Generate and add a new FAQ category.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `CreateFaqCategoryRequestSchema`

**Responses:** 200
  200 schema: `CreateFaqCategorySchema`

---

#### `updateFaqCategory` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/faq/category/{id}`

**Update FAQ category**

Modify the content and settings of a specific FAQ category.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id` — ID allotted to an FAQ category. *(required)*

**Request body:** `application/json`
  Schema: `UpdateFaqCategoryRequestSchema`

**Responses:** 200
  200 schema: `CreateFaqCategorySchema`

---

#### `deleteFaqCategory` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/faq/category/{id}`

**Delete FAQ category**

Remove a specific FAQ category.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id` — ID allotted to an FAQ category. *(required)*

**Responses:** 200
  200 schema: `FaqSchema`

---

#### `getFaqsByCategoryIdOrSlug` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/faq/category/{id_or_slug}/faqs`

**List FAQs**

Retrieve a list of FAQs within a specific category.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id_or_slug` — ID or the slug allotted to an FAQ category. Slug is a short, human-readable, URL *(required)*

**Responses:** 200
  200 schema: `GetFaqSchema`

---

#### `addFaq` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/faq/category/{category_id}/faq`

**Create FAQ**

Create and add a new FAQ.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `category_id` — ID allotted to an FAQ category. *(required)*

**Request body:** `application/json`
  Schema: `CreateFaqSchema`

**Responses:** 200
  200 schema: `CreateFaqResponseSchema`

---

#### `updateFaq` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/faq/category/{category_id}/faq/{faq_id}`

**Update FAQ**

Modify the content and settings of a specific FAQ.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `category_id` — ID allotted to an FAQ category. *(required)*
- `faq_id` — ID allotted to an FAQ. *(required)*

**Request body:** `application/json`
  Schema: `CreateFaqSchema`

**Responses:** 200
  200 schema: `CreateFaqResponseSchema`

---

#### `deleteFaq` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/faq/category/{category_id}/faq/{faq_id}`

**Delete FAQ**

Remove a specific FAQ.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `category_id` — ID allotted to an FAQ category. *(required)*
- `faq_id` — ID allotted to an FAQ. *(required)*

**Responses:** 200
  200 schema: `CreateFaqResponseSchema`

---

#### `getFaqByIdOrSlug` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/faq/{id_or_slug}`

**Get FAQ or slug**

Get detailed information about a specific FAQ

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id_or_slug` — ID or the slug allotted to an FAQ category. Slug is a short, human-readable, URL *(required)*

**Responses:** 200
  200 schema: `CreateFaqResponseSchema`

---

#### `generateSEOTitle` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/generate-seo/{type}`

**Generate SEO title**

Create an SEO-friendly title for content.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `type` — String representing the type of SEO content to be generated. Possible values are *(required)*

**Request body:** `application/json`
  Schema: `GenerateSEOContent`

**Responses:** 200
  200 schema: `GeneratedSEOContent`

---

#### `getLandingPages` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/landing-page/`

**Get landing pages**

Lists a list landing pages as per device types

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results. Default value is 1 (default: 1)
- `page_size` — The number of items to retrieve in each page. Default value is 10. (default: 10)

**Responses:** 200
  200 schema: `LandingPageGetDetails`

---

#### `createLandingPage` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/landing-page/`

**Create landing page**

Generate and add a new landing page.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `LandingPageSchema`

**Responses:** 200
  200 schema: `LandingPageSchema`

---

#### `updateLandingPage` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/landing-page/{id}`

**Update landing page**

Modify the content and settings of a specific landing page.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id` — ID allotted to a landing page. *(required)*

**Request body:** `application/json`
  Schema: `LandingPageSchema`

**Responses:** 200
  200 schema: `LandingPageSchema`

---

#### `deleteLandingPage` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/landing-page/{id}`

**Delete landing page**

Remove a specific landing page.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id` — ID allotted to a landing page. *(required)*

**Responses:** 200
  200 schema: `LandingPageSchema`

---

#### `getLegalInformation` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/legal`

**Get Legal Pages**

Get legal information and terms

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `ApplicationLegal`

---

#### `updateLegalInformation` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/legal`

**Update Legal Pages**

Modify legal information and terms.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `ApplicationLegal`

**Responses:** 200
  200 schema: `ApplicationLegal`

---

#### `getNavigations` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/navigations/`

**Get navigation items**

Retrieve a list of navigational elements.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `device_platform` — Filter navigations by platform. Acceptable values are: web, android, ios, all *(required)*
- `page_no` — The page number to navigate through the given set of results. Default value is 1 (default: 1)
- `page_size` — The number of items to retrieve in each page. Default value is 10. (default: 10)

**Responses:** 200
  200 schema: `NavigationGetDetails`

---

#### `createNavigation` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/navigations/`

**Create navigation items**

Generate and add a new navigation element.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `NavigationPayload`

**Responses:** 200
  200 schema: `NavigationSchema`

---

#### `getDefaultNavigations` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/navigations/default`

**Get default navigations**

Retrieve default navigation elements.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `DefaultNavigationDetails`

---

#### `getNavigationBySlug` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/navigations/{slug}`

**Get navigation by slug**

Retrieve detailed information about a specific navigation element.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `slug` — A short, human-readable, URL-friendly identifier of a navigation. You can get sl *(required)*

**Query params:**
- `device_platform` — Filter navigations by platform. Acceptable values are: web, android, ios.

**Responses:** 200
  200 schema: `NavigationSchema`

---

#### `updateNavigation` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/navigations/{id}`

**Update navigation**

Modify the content and settings of a specific navigation element.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id` — ID allotted to the navigation. *(required)*

**Request body:** `application/json`
  Schema: `NavigationPayload`

**Responses:** 200
  200 schema: `NavigationSchema`

---

#### `deleteNavigation` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/navigations/{id}`

**Delete navigation**

Remove a specific navigation element.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id` — ID allotted to the navigation. *(required)*

**Responses:** 200
  200 schema: `NavigationSchema`

---

#### `getPageMeta` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/pages/meta`

**Get page meta**

Use this API to Get metadata for a specific page.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `PageMetaSchema`

---

#### `getPageSpec` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/pages/spec`

**Get page specification**

Use this API to Get specifications and details for a specific page

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `PageSpec`

---

#### `updatePagePreview` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/pages/publish/{slug}`

**Update page preview**

Modify the content and settings of a specific page preview.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `slug` — A short, human-readable, URL-friendly identifier of a page. You can get slug val *(required)*

**Request body:** `application/json`
  Schema: `PagePublishPayload`

**Responses:** 200
  200 schema: `PageSchema`

---

#### `deletePage` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/pages/{id}`

**Delete page**

Remove a page from the platform.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id` — ID allotted to the page. *(required)*

**Responses:** 200
  200 schema: `PageSchema`

---

#### `addPathRedirectionRules` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/path-mappings`

**Create path redirection rules**

Create and add rules for path redirection.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `PathMappingSchema`

**Responses:** 200
  200 schema: `PathMappingSchema`

---

#### `getPathRedirectionRules` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/path-mappings`

**List Path Redirection Rules**

Use this API to List Path Redirection Rules

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `page_size` — The number of items to retrieve in each page. Default value is 5.  (default: 5)
- `page_no` — The page number to navigate through the given set of results. Default value is 1 (default: 1)

**Responses:** 200
  200 schema: `PathMappingSchema`

---

#### `getPathRedirectionRule` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/path-mappings/{path_id}`

**Get Path Redirection Rule**

Use this API to Get detailed information about a specific path redirection rule

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `path_id` — ID allotted to the path redirection rule. *(required)*

**Responses:** 200
  200 schema: `PathMappingSchema`

---

#### `updatePathRedirectionRules` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/path-mappings/{path_id}`

**Update path redirection rule**

Modify settings for path redirection rules.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `path_id` — ID allotted to the path redirection rule. *(required)*

**Request body:** `application/json`
  Schema: `PathMappingSchema`

**Responses:** 200
  200 schema: `PathMappingSchema`

---

#### `deletePathRedirectionRules` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/path-mappings/{path_id}`

**Delete path redirection rule**

Remove specific path redirection rules.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `path_id` — ID allotted to the path redirection rule. *(required)*

**Responses:** 200

---

#### `getSEOConfiguration` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/seo`

**Get sales channel SEO**

Retrieve configuration settings for SEO.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `SeoComponent`

---

#### `updateSEOConfiguration` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/seo`

**Update sales channel SEO information**

Modify configuration settings for SEO.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `SeoComponent`

**Responses:** 200
  200 schema: `SeoSchema`

---

#### `getDefaultSEOMarkupSchema` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/seo/schema/default`

**List default SEO Markup Schemas**

Use this API to List default SEO Markup Schemas

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `page_type` — The type of page against which schema template was created

**Responses:** 200
  200 schema: `DefaultSchemaComponent`

---

#### `getSEOMarkupSchemas` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/seo/schema`

**List default SEO Markup Schemas**

Use this API to List default SEO Markup Schemas

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `title` — Title of the seo schema.
- `active` — Boolean value for fetching seo schema.
- `page_no` — The page number to navigate through the given set of results. Default value is 1 (default: 1)
- `page_size` — The number of items to retrieve in each page. Default value is 10. (default: 10)

**Responses:** 200
  200 schema: `SeoSchemaComponent`

---

#### `createSEOMarkupSchema` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/seo/schema`

**Create SEO Markup Schema**

Use this API to Create SEO Markup Schema

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `SEOSchemaMarkupTemplateRequestBody`

**Responses:** 200
  200 schema: `SEOSchemaMarkupTemplate`

---

#### `getSEOMarkupSchema` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/seo/schema/{id}`

**Get SEO Markup Schema**

Use this API to Get SEO Markup Schema

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `id` — Alphanumeric ID allotted to a SEO Markup Schema Template created within a busine *(required)*

**Responses:** 200
  200 schema: `SEOSchemaMarkupTemplate`

---

#### `editSEOMarkupSchema` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/seo/schema/{id}`

**Get SEO Markup Schema**

Use this API to Get SEO Markup Schema

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `id` — Alphanumeric ID allotted to a SEO Markup Schema Template created within a busine *(required)*

**Request body:** `application/json`
  Schema: `SEOSchemaMarkupTemplateRequestBody`

**Responses:** 200
  200 schema: `SEOSchemaMarkupTemplate`

---

#### `deleteSEOMarkupSchema` — DELETE `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/seo/schema/{id}`

**Delete SEO Markup Schema**

Use this API to Delete SEO Markup Schema

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `id` — Alphanumeric ID allotted to a SEO Markup Schema Template created within a busine *(required)*

**Responses:** 200, 400
  200 schema: `SEOSchemaMarkupTemplate`

---

#### `getSupportInformation` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/support`

**Get support information**

Retrieve information related to customer support.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `Support`

---

#### `updateSupportInformation` — POST `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/support`

**Update Customer Support Information**

Modify information related to customer support.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `Support`

**Responses:** 200
  200 schema: `Support`

---

#### `getInjectableTags` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/tags`

**Get all HTML tags**

Retrieve a list of injectable tags.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `all` — Get all tags irrespective of the creator of tags (default: False)
- `search` — Keyword to filter and find tags by name.

**Responses:** 200
  200 schema: `TagsSchema`

---

#### `addInjectableTag` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/tags/add`

**Create HTML tag**

Create and add a new injectable tag.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `CreateTagRequestSchema`

**Responses:** 200
  200 schema: `TagsSchema`

---

#### `removeInjectableTag` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/tags/remove/handpicked`

**Remove HTML tag**

Delete a specific injectable tag.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `RemoveHandpickedSchema`

**Responses:** 200
  200 schema: `TagDeleteSuccessDetails`

---

#### `editInjectableTag` — PUT `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/tags/edit/handpicked/{tag_id}`

**Update HTML tag**

Modify settings for an injectable tag.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `tag_id` — ID allotted to the tag. *(required)*

**Request body:** `application/json`
  Schema: `UpdateHandpickedSchema`

**Responses:** 200
  200 schema: `TagsSchema`

---

#### `getTagsTemplate` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/tags/templates`

**Get Script Tags Templates**

Retrieve the available script tag templates

**Path params:**
- `company_id` — Numeric ID allotted to a business account. *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `TagsTemplateSchema`

---

#### `getBlogBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/blogs/{slug}`

**Get blog by slug**

Retrieve detailed information about a specific blog using its slug.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `slug` — A short, human-readable, URL-friendly identifier of a blog page. You can get slu *(required)*

**Responses:** 200
  200 schema: `BlogSchema`

---

#### `createPage` — POST `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/pages/`

**Create page**

Generate and add a new page to the platform.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `PagePayload`

**Responses:** 200
  200 schema: `PageSchema`

---

#### `getPages` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/pages/`

**Get pages**

Retrieve a list of available pages.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `page_no` — The page number to navigate through the given set of results. Default value is 1 (default: 1)
- `page_size` — The number of items to retrieve in each page. Default value is 10. (default: 10)

**Responses:** 200
  200 schema: `PageGetDetails`

---

#### `updatePage` — PUT `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/pages/{id}`

**Update page**

Modify and update the content of a page.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `id` — ID allotted to the page. *(required)*

**Request body:** `application/json`
  Schema: `PageSchema`

**Responses:** 200
  200 schema: `PageSchema`

---

#### `getPageBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/pages/{slug}`

**Get page by slug**

Get detailed information about a specific page using its slug.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform *(required)*
- `application_id` — Numeric ID allotted to an application created within a business account. *(required)*
- `slug` — A short, human-readable, URL-friendly identifier of a page. You can get slug val *(required)*

**Responses:** 200
  200 schema: `PageSchema`

---

#### `getCustomFieldTypes` — GET `/service/platform/content/v1.0/company/{company_id}/metafields/types`

**Get custom field types**

Each custom field and custom field definition has a type, which defines the type of information that it can store. The custom field types have built-in validation. This api will give list of supported custom fields types

**Responses:** 200, 400
  200 schema: `MetafieldTypesSchema`

---

#### `getResources` — GET `/service/platform/content/v1.0/company/{company_id}/metafields/resources`

**Get resources**

Use this API to retrieve the resources, such as products, collections, customers, selling locations, etc.

**Responses:** 200
  200 schema: `ResourcesSchema`

---

#### `getCustomFieldDefinitions` — GET `/service/platform/content/v2.0/company/{company_id}/customfields/definition`

**Get custom fields definitions**

Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list.

**Responses:** 200, 400
  200 schema: `CustomFieldDefinitionsSchema`

---

#### `getCustomFieldDefinitionByResource` — GET `/service/platform/content/v2.0/company/{company_id}/customfields/resource/{resource}/definition`

**Get custom fields definitions for a given resource type**

Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list.

**Responses:** 200, 400
  200 schema: `CustomFieldDefinitionsSchema`

---

#### `createCustomFieldDefinition` — POST `/service/platform/content/v2.0/company/{company_id}/customfields/resource/{resource}/definition`

**Create custom field definition for a given resource type**

You can create custom fields definition to any resource so you can extend property of resource.

**Request body:** `application/json`
  Schema: `CustomFieldDefinitionRequestSchema`

**Responses:** 200, 400
  200 schema: `CustomFieldDefinitionDetailResSchema`

---

#### `getCustomFieldDefinitionBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/customfields/resource/{resource}/namespace/{namespace}/definition/{slug}`

**Get custom fields definition by resource, slug and namespace**

Custom field definitions can be retrived from this using its slug, namespace and resource

**Responses:** 200, 400
  200 schema: `MetaFieldDefinitionDetailResSchema`

---

#### `updateCustomFieldDefinitionBySlug` — PUT `/service/platform/content/v2.0/company/{company_id}/customfields/resource/{resource}/namespace/{namespace}/definition/{slug}`

**Update custom field definition**

Custom fields definition can be update using this api, You can update custom field definition name and description.

**Request body:** `application/json`
  Schema: `CustomFieldDefinitionRequestSchema`

**Responses:** 200, 400
  200 schema: `CustomFieldDefinitionDetailResSchema`

---

#### `deleteCustomFieldDefinitionBySlug` — DELETE `/service/platform/content/v2.0/company/{company_id}/customfields/resource/{resource}/namespace/{namespace}/definition/{slug}`

**Delete custom fields definition**

Custom field definition and its assosiated custom fields value can be deleted using this api on the basis of definition id.

**Responses:** 200, 400
  200 schema: `CustomDataDeleteSchema`

---

#### `getCustomFieldsByResourceSlug` — GET `/service/platform/content/v2.0/company/{company_id}/customfields/resource/{resource}/{resource_slug}`

**Get list of custom fields of given resource and resource slug**

Retrieves a list of custom fields attached to a particular resource by using the resource and resource slug.

**Responses:** 200, 400
  200 schema: `CustomFieldsResponseByResourceIdSchema`

---

#### `updateCustomFieldByResourceSlug` — PUT `/service/platform/content/v2.0/company/{company_id}/customfields/resource/{resource}/{resource_slug}`

**Update custom field entries for gives resource and resource slug**

You can add a custom field using this endpoint to any resource by providing the resource slug.

**Request body:** `application/json`
  Schema: `CustomFieldRequestSchema`

**Responses:** 200, 400
  200 schema: `CustomFieldsResponseByResourceIdSchema`

---

#### `deleteCustomFieldsByResourceSlug` — DELETE `/service/platform/content/v2.0/company/{company_id}/customfields/resource/{resource}/{resource_slug}`

**delete custom fields of given resource and resource slug**

Use this API to delete the custom fields for given resource in param.

**Responses:** 200, 400
  200 schema: `CustomFieldsDeleteSchema`

---

#### `createCustomObjectDefinition` — POST `/service/platform/content/v2.0/company/{company_id}/customobjects/definition`

**Create custom object definition**

Create a custom object that will have a collection of custom fields and can be used anywhere in the custom field for any resource.

**Request body:** `application/json`
  Schema: `CustomObjectDefinitionRequestSchema`

**Responses:** 200, 400
  200 schema: `CustomObjectDefinitionSlugSchema`

---

#### `getCustomObjectDefinitions` — GET `/service/platform/content/v2.0/company/{company_id}/customobjects/definition`

**Get custom object definitions**

Custom object definition lists can be obtained using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomObjectDefinitionsSchema`

---

#### `getCustomObjectDefinitionBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{slug}`

**Get custom object definition**

Custom object definitions can be fetched using their custom object definition slug.

**Responses:** 200, 400
  200 schema: `CustomObjectDefinitionSlugSchema`

---

#### `updateCustomObjectDefinitionBySlug` — PUT `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{slug}`

**Update custom object definition**

Custom object definitions can be updated using this endpoint. You can update the name and description of the custom object and add more custom field definitions to the existing custom object.

**Request body:** `application/json`
  Schema: `CustomObjectDefinitionUpdateRequestSchema`

**Responses:** 200, 400
  200 schema: `CustomObjectDefinitionSlugSchema`

---

#### `deleteCustomObjectDefinitionBySlug` — DELETE `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{slug}`

**Delete custom object definition**

Custom object definitions can be deleted using this endpoint by providing the definition ID.

**Responses:** 200, 400
  200 schema: `CustomObjectDefinitionDeleteResponseSchema`

---

#### `getCustomObjectsBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{definition_slug}/entries`

**Get list of custom objects under a certain custom object definition**

Custom object entries can fetch using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomObjectsSchema`

---

#### `createCustomObjectBySlug` — POST `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{definition_slug}/entries`

**Create custom object entries**

Custom object entries against the custom object definition can be added using this API.

**Request body:** `application/json`
  Schema: `CustomObjectRequestSchemaWithoutId`

**Responses:** 200, 400
  200 schema: `CustomObjectSchema`

---

#### `getCustomObjectBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{definition_slug}/entries/{slug}`

**Get custom object details**

Details of a custom object entry can be obtained using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomObjectBySlugSchema`

---

#### `deleteCustomObjectBySlug` — DELETE `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{definition_slug}/entries/{slug}`

**Delete custom object**

Custom object entries can be deleted by providing the delete ID using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomDataDeleteSchema`

---

#### `updateCustomObjectBySlug` — PUT `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{definition_slug}/entries/{slug}`

**Update custom object details**

Custom object entries can be updated using this endpoint.

**Request body:** `application/json`
  Schema: `CustomObjectRequestSchemaWithoutId`

**Responses:** 200, 400
  200 schema: `CustomObjectBySlugSchema`

---

#### `getJobs` — GET `/service/platform/content/v1.0/company/{company_id}/metaobjects/jobs`

**Get bulk import and export job list**

Custom object bulk import and export jobs status and details can be obtained using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomObjectBulkEntry`

---

#### `importCustomObjectEntriesBySlug` — POST `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{slug}/bulk/upload`

**Bulk custom object entries upload**

Custom object bulk import of bulk entries can be performed using this endpoint.

**Request body:** `application/json`
  Schema: `CustomObjectBulkSchema`

**Responses:** 200, 400
  200 schema: `CustomObjectEntryBulkUploadDetails`

---

#### `exportCustomObjectEntriesBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{slug}/bulk/download`

**Initiate download for bulk custom object entries**

Custom object bulk export of bulk entries can be perform using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomObjectBulkEntryInitiateDownload`

---

#### `sampleCustomObjectBulkEntryBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/customobjects/definition/{slug}/bulk/sample`

**Download sample for custom object bulk entry**

Sample files for custom object bulk import can be obtained from this endpoint.

**Responses:** 200, 400

---

#### `getAppCustomFieldTypes` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/metafields/types`

**Get custom field types**

Each custom field and custom field definition has a type, which defines the type of information that it can store. The custom field types have built-in validation. This api will give list of supported custom fields types

**Responses:** 200, 400
  200 schema: `MetafieldTypesSchema`

---

#### `getAppResources` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/metafields/resources`

**Get resources**

Each custom fields is assosiated with a resource such as product, promotion, coupon, selling location etc, This will gives list of supported resource list.

**Responses:** 200, 400
  200 schema: `ResourcesSchema`

---

#### `getAppCustomFieldDefinitions` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customfields/definition`

**Get custom fields definitions**

Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list.

**Responses:** 200, 400
  200 schema: `CustomFieldDefinitionsSchema`

---

#### `getAppCustomFieldDefinitionByResource` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customfields/resource/{resource}/definition`

**Get custom fields definitions for a given resource type**

Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list.

**Responses:** 200, 400
  200 schema: `CustomFieldDefinitionsSchema`

---

#### `createAppCustomFieldDefinition` — POST `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customfields/resource/{resource}/definition`

**Create custom field definition for a given resource type**

You can create custom fields definition to any resource so you can extend property of resource.

**Request body:** `application/json`
  Schema: `CustomFieldDefinitionRequestSchema`

**Responses:** 200, 400
  200 schema: `CustomFieldDefinitionDetailResSchema`

---

#### `getAppCustomFieldDefinitionBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customfields/resource/{resource}/namespace/{namespace}/definition/{slug}`

**Get custom fields definition by resource, slug and namespace**

Custom field definitions can be retrived from this using its slug, namespace and resource

**Responses:** 200, 400
  200 schema: `MetaFieldDefinitionDetailResSchema`

---

#### `updateAppCustomFieldDefinitionBySlug` — PUT `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customfields/resource/{resource}/namespace/{namespace}/definition/{slug}`

**Update custom field definition**

Custom fields definition can be update using this api, You can update custom field definition name and description.

**Request body:** `application/json`
  Schema: `CustomFieldDefinitionRequestSchema`

**Responses:** 200, 400
  200 schema: `CustomFieldDefinitionDetailResSchema`

---

#### `deleteAppCustomFieldDefinitionBySlug` — DELETE `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customfields/resource/{resource}/namespace/{namespace}/definition/{slug}`

**Delete custom fields definition**

Custom field definition and its assosiated custom fields value can be deleted using this api on the basis of definition id.

**Responses:** 200, 400
  200 schema: `CustomDataDeleteSchema`

---

#### `getAppCustomFieldsByResourceSlug` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customfields/resource/{resource}/{resource_slug}`

**Get list of custom fields of given resource and resource slug**

Retrieves a list of custom fields attached to a particular resource by using the resource and resource slug.

**Responses:** 200, 400
  200 schema: `CustomFieldsResponseByResourceIdSchema`

---

#### `updateAppCustomFieldByResourceSlug` — PUT `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customfields/resource/{resource}/{resource_slug}`

**Create custom field entries for gives resource and resource slug**

You can add a custom field using this endpoint to any resource by providing the resource slug.

**Request body:** `application/json`
  Schema: `CustomFieldRequestSchema`

**Responses:** 200, 400
  200 schema: `CustomFieldsResponseByResourceIdSchema`

---

#### `createAppCustomObjectDefinition` — POST `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition`

**Create custom object definition**

Create a custom object that will have a collection of custom fields and can be used anywhere in the custom field for any resource.

**Request body:** `application/json`
  Schema: `CustomObjectDefinitionRequestSchema`

**Responses:** 200, 400
  200 schema: `CustomObjectDefinitionSlugSchema`

---

#### `getAppCustomObjectDefinitions` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition`

**Get custom object definitions**

Custom object definition lists can be obtained using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomObjectDefinitionsSchema`

---

#### `getAppCustomObjectDefinitionBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{slug}`

**Get custom object definition**

Custom object definitions can be fetched using their custom object definition slug.

**Responses:** 200, 400
  200 schema: `CustomObjectDefinitionSlugSchema`

---

#### `updateAppCustomObjectDefinitionBySlug` — PUT `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{slug}`

**Update custom object definition**

Custom object definitions can be updated using this endpoint. You can update the name and description of the custom object and add more custom field definitions to the existing custom object.

**Request body:** `application/json`
  Schema: `CustomObjectDefinitionUpdateRequestSchema`

**Responses:** 200, 400
  200 schema: `CustomObjectDefinitionSlugSchema`

---

#### `deleteAppCustomObjectDefinitionBySlug` — DELETE `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{slug}`

**Delete custom object definition**

Custom object definitions can be deleted using this endpoint by providing the definition ID.

**Responses:** 200, 400
  200 schema: `CustomObjectDefinitionDeleteResponseSchema`

---

#### `getAppCustomObjectsBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{definition_slug}/entries`

**Get list of custom objects**

Custom object entries can fetch using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomObjectsSchema`

---

#### `createAppCustomObjectBySlug` — POST `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{definition_slug}/entries`

**Create custom object entries**

Custom object entries against the custom object definition can be added using this API.

**Request body:** `application/json`
  Schema: `CustomObjectRequestSchemaWithoutId`

**Responses:** 200, 400
  200 schema: `CustomObjectSchema`

---

#### `getAppCustomObjectBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{definition_slug}/entries/{slug}`

**Get custom object details**

Details of a custom object entry can be obtained using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomObjectBySlugSchema`

---

#### `deleteAppCustomObjectBySlug` — DELETE `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{definition_slug}/entries/{slug}`

**Delete custom object**

A Custom object entry can be deleted by providing the custom object definition slug and custom object entry slug using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomDataDeleteSchema`

---

#### `updateAppCustomObjectBySlug` — PUT `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{definition_slug}/entries/{slug}`

**Update custom object details**

Custom object entries can be updated using this endpoint.

**Request body:** `application/json`
  Schema: `CustomObjectRequestSchemaWithoutId`

**Responses:** 200, 400
  200 schema: `CustomObjectBySlugSchema`

---

#### `getAppJobs` — GET `/service/platform/content/v1.0/company/{company_id}/application/{application_id}/metaobjects/jobs`

**Get bulk import and export job list**

Custom object bulk import and export jobs status and details can be obtained using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomObjectBulkEntry`

---

#### `importAppCustomObjectEntriesBySlug` — POST `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{slug}/bulk/upload`

**Bulk custom object entries upload**

Custom object bulk import of bulk entries can be performed using this endpoint.

**Request body:** `application/json`
  Schema: `CustomObjectBulkSchema`

**Responses:** 200, 400
  200 schema: `CustomObjectEntryBulkUploadDetails`

---

#### `exportAppCustomObjectEntriesBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{slug}/bulk/download`

**Initiate download for bulk custom object entries**

Custom object bulk export of bulk entries can be perform using this endpoint.

**Responses:** 200, 400
  200 schema: `CustomObjectBulkEntryInitiateDownload`

---

#### `sampleAppCustomObjectBulkEntryBySlug` — GET `/service/platform/content/v2.0/company/{company_id}/application/{application_id}/customobjects/definition/{slug}/bulk/sample`

**Download sample for custom object bulk entry**

Sample files for custom object bulk import can be obtained from this endpoint.

**Responses:** 200, 400

---

