# Fynd Platform API Index
**Total operations:** 845 across 24 domains
Use this index for API discovery. For full schema details, read the domain reference file.

---
## Catalog (162 ops) — SDK: `Catalog` — [details](catalog.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getCatalogInsights` | Get catalog counts |  |
| GET | `getApplicationBrandListing` | List sales channel brands |  |
| PATCH | `updateAppBrand` | Update sales channel brand | yes |
| GET | `getApplicationBrands` | List brands |  |
| GET | `getCategories` | List categories |  |
| GET | `getApplicationCategoryListing` | List sales channel categories |  |
| PATCH | `updateAppCategory` | Update sales channel category | yes |
| GET | `getAllCollections` | List collections |  |
| POST | `createCollection` | Create a collection | yes |
| GET | `getApplicationFilterValues` | List product filters |  |
| GET | `getApplicationFilterKeys` | List filter keys |  |
| GET | `getQueryFilters` | Get collection query filters |  |
| DELETE | `deleteCollection` | Delete a collection |  |
| PUT | `updateCollection` | Update a collection | yes |
| POST | `addCollectionItems` | Create items in a collection | yes |
| GET | `getCollectionItems` | List items of collection |  |
| GET | `getCollectionDetail` | Get a collection |  |
| GET | `getApplicationDepartmentListing` | List sales channel departments |  |
| PATCH | `updateAppDepartment` | Update sales channel department | yes |
| GET | `getDepartments` | List departments |  |
| GET | `getAppInventory` | List sales channel inventory |  |
| GET | `getAppLocations` | Retrieve stores for a sales channel |  |
| GET | `getConfigurations` | Get product configurations |  |
| POST | `createConfigurationProductListing` | Create product listing configuration | yes |
| GET | `getCatalogConfiguration` | Get catalog configuration meta data |  |
| GET | `getConfigurationByType` | Get configuration |  |
| POST | `createConfigurationByType` | Create configuration | yes |
| GET | `getAppProduct` | Get sales channel product |  |
| PATCH | `updateAppProduct` | Update sales channel product | yes |
| GET | `getApplicationProducts` | List sales channel products |  |
| GET | `getDiscountedInventoryBySizeIdentifier` | Get discounted inventory |  |
| GET | `getProductDetailBySlug` | Get product details |  |
| GET | `getAppProducts` | List sales channel products |  |
| GET | `getAppProductPrices` | Get prices for specific raw product items |  |
| GET | `getAppReturnConfiguration` | Get product-return configuration |  |
| POST | `createAppReturnConfiguration` | Create product return configuration | yes |
| PUT | `updateAppReturnConfiguration` | Update product return configuration | yes |
| DELETE | `deleteAppCategoryReturnConfiguration` | Delete product return configuration | yes |
| GET | `getAppCategoryReturnConfig` | Get category return configuration |  |
| POST | `createAppCategoryReturnConfiguration` | Create return configuration | yes |
| PUT | `updateAppCategoryReturnConfiguration` | Update return Configuration | yes |
| GET | `getAutocompleteConfig` | Get autocomplete configuration |  |
| POST | `createCustomAutocompleteRule` | Create autocomplete configurations | yes |
| DELETE | `deleteAutocompleteKeyword` | Delete autocomplete keyword |  |
| GET | `getAutocompleteKeywordDetail` | Get autocomplete keyword |  |
| PUT | `updateAutocompleteKeyword` | Update autocomplete keyword | yes |
| DELETE | `deleteSearchConfiguration` | Delete search configuration |  |
| GET | `getSearchConfiguration` | Get Search configuration |  |
| POST | `createSearchConfiguration` | Create search configuration | yes |
| PUT | `updateSearchConfiguration` | Update search configuration | yes |
| GET | `getAllSearchKeyword` | List search keywords |  |
| POST | `createCustomKeyword` | Create search keywords | yes |
| DELETE | `deleteSearchKeywords` | Delete search keywords |  |
| GET | `getSearchKeywords` | Get search keywords |  |
| PUT | `updateSearchKeywords` | Update search keywords | yes |
| PATCH | `updateAppLocation` | Update sales channel location | yes |
| GET | `listCategories` | List categories |  |
| GET | `getCategoryData` | Get category by uid |  |
| GET | `getSellerInsights` | Get seller catalog counts |  |
| GET | `listDepartmentsData` | List company department  |  |
| GET | `getDepartmentData` | Get department by uid |  |
| GET | `listTemplateBrandTypeValues` | List template brand |  |
| POST | `bulkHsnCode` | Create Bulk update HSN | yes |
| GET | `getHsnCode` | List HSN code |  |
| PUT | `updateHsnCode` | Update HSN code | yes |
| GET | `getInventories` | List Inventory |  |
| GET | `getInventoryBulkUploadHistory` | List bulk inventory upload history |  |
| POST | `createBulkInventoryJob` | Create bulk inventory upload job | yes |
| DELETE | `deleteBulkInventoryJob` | Delete inventory bulk upload job |  |
| POST | `createBulkInventory` | Create bulk inventory | yes |
| GET | `getInventoryExport` | list product inventory |  |
| POST | `createInventoryExportJob` | Create inventory export job | yes |
| GET | `exportInventoryConfig` | Get export inventory configuration |  |
| GET | `downloadInventoryTemplateView` | Download inventory template data |  |
| GET | `validateProductTemplateSchema` | Validate product template schema |  |
| GET | `getMarketplaceOptinDetail` | Get opt-in |  |
| GET | `getCompanyBrandDetail` | list Company Brand of Optin |  |
| GET | `getCompanyDetail` | Get Company |  |
| GET | `getCompanyMetrics` | Get company metrics |  |
| GET | `getStoreDetail` | Get selling location |  |
| GET | `getProductAttributes` | List product attributes |  |
| GET | `getAttribute` | Get attribute detail by slug |  |
| GET | `getProductAssetsInBulk` | Get product assets |  |
| POST | `createProductAssetsInBulk` | Create product assets in bulk | yes |
| GET | `getProductBulkUploadHistory` | List product bulk upload history |  |
| POST | `createBulkProductUploadJob` | Create products bulk upload | yes |
| DELETE | `deleteProductBulkJob` | Delete product bulk-upload job |  |
| POST | `createProductsInBulk` | Create products in bulk | yes |
| GET | `listProductTemplateExportDetails` | List export product templates |  |
| GET | `listHSNCodes` | List HSN codes |  |
| GET | `getProductTags` | List product tags |  |
| GET | `listProductTemplate` | List product templates |  |
| GET | `listProductTemplateCategories` | List product template categories |  |
| GET | `downloadProductTemplateViews` | Download product template view  |  |
| GET | `validateProductTemplate` | Validate product template |  |
| GET | `validateProductGlobalTemplate` | Validate product template |  |
| GET | `getProductValidation` | Get valid products |  |
| GET | `getInventoryBySizeIdentifier` | List inventory by size  |  |
| GET | `getProductSize` | List product size |  |
| DELETE | `deleteSize` | Delete product size |  |
| POST | `addInventory` | Create Inventory | yes |
| GET | `getInventoryBySize` | List inventory by size |  |
| GET | `getVariantsOfProducts` | Get variants |  |
| GET | `getSizeGuides` | List size guides |  |
| POST | `createSizeGuide` | Create size guide | yes |
| GET | `getSizeGuide` | Get  size guide |  |
| PUT | `updateSizeGuide` | Update size guide | yes |
| POST | `updateAllowSingle` | Update 'Allow Single' setting | yes |
| POST | `updateDefaultSort` | Update default sorting | yes |
| GET | `getListingConfigurations` | Get listing configurations |  |
| POST | `createListingConfiguration` | Create listing configuration | yes |
| GET | `getGroupConfigurations` | Get group configurations |  |
| POST | `createGroupConfiguration` | Create group configuration | yes |
| DELETE | `deleteGroupConfiguration` | Delete group configuration |  |
| PUT | `updateGroupConfiguration` | Update group configuration | yes |
| DELETE | `deleteListingConfiguration` | Delete listing configuration |  |
| PUT | `updateListingConfiguration` | Update listing configuration | yes |
| GET | `getConfigurationMetadata` | Get configuration metadata |  |
| GET | `getAllProductHsnCodes` | List product HSN codes |  |
| GET | `getSingleProductHSNCode` | Get product HSN code |  |
| POST | `updateInventories` | Update inventories | yes |
| GET | `listInventoryExport` | List inventory export jobs |  |
| POST | `createInventoryExport` | Create inventory export | yes |
| GET | `getProducts` | List products |  |
| POST | `createProduct` | Create product | yes |
| POST | `createProductExportJob` | Create product export job | yes |
| GET | `getProductExportJobs` | Get product export jobs |  |
| PUT | `editProduct` | Update a product | yes |
| PATCH | `partialUpdateProduct` | Patch a product | yes |
| DELETE | `deleteProduct` | Delete product |  |
| GET | `getProduct` | Get a product |  |
| GET | `allSizes` | Get product sizes |  |
| DELETE | `deleteRealtimeInventory` | Delete an inventory  | yes |
| POST | `updateRealtimeInventory` | Update an inventory | yes |
| POST | `updateLocationPrice` | Update an Article Price | yes |
| POST | `updateLocationQuantity` | Update an Article Quantity | yes |
| GET | `getMarketplaces` | List marketplaces |  |
| PUT | `updateMarketplaceOptin` | Update marketplace optin | yes |
| POST | `createMarketplaceOptin` | Create or Update opt-in infomation | yes |
| POST | `createTax` | Create Tax Rule | yes |
| GET | `getAllTaxRules` | Get all tax rules of a company |  |
| PUT | `updateTaxRule` | Update Tax Rule | yes |
| DELETE | `deleteTaxRule` | Delete a tax rule |  |
| GET | `getTaxVersionDetails` | Get tax versions for a tax rule |  |
| POST | `createTaxVersion` | Create a tax version | yes |
| DELETE | `deleteTaxVersion` | Delete a tax version |  |
| PUT | `updateTaxVersion` | Update a tax version | yes |
| GET | `getHsCodes` | Get HS/SAC codes |  |
| POST | `createHsCode` | Create HS/SAC code | yes |
| GET | `getFollowedProducts` | Retrieve followed products by user |  |
| POST | `createTaxComponentName` | Create tax component name | yes |
| GET | `getTaxComponentNames` | Get component names |  |
| PUT | `followProductById` | Follow a Specific Product by ID |  |
| DELETE | `unfollowProductById` | Unfollow a Specific Product by ID |  |
| GET | `getPriceFactories` | Retrieve Price Factories for an Application |  |
| POST | `createPriceFactory` | Create a Price Factory for an Application | yes |
| GET | `getPriceFactory` | Retrieve a Specific Price Factory Configuration |  |
| PATCH | `updatePriceFactory` | Update an Existing Price Factory Configuration | yes |
| DELETE | `deletePriceFactory` | Delete a Price Factory Configuration |  |
| GET | `getPriceFactoryProducts` | Get Products associated with a Price Factory |  |
| GET | `getPriceFactoryProduct` | Update marketplace optin |  |
| PATCH | `updatePriceFactoryProduct` | Partially update price factory product configuration | yes |

## Content (122 ops) — SDK: `Content` — [details](content.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getAnnouncementsList` | List announcements |  |
| POST | `createAnnouncement` | Create announcement | yes |
| GET | `getAnnouncementById` | Get announcement |  |
| PUT | `updateAnnouncement` | Update announcement | yes |
| PATCH | `updateAnnouncementSchedule` | Update announcement schedule | yes |
| DELETE | `deleteAnnouncement` | Delete an announcement |  |
| GET | `getAppAssociation` | Get app association |  |
| POST | `createAppAssociation` | Create app association | yes |
| PUT | `updateAppAssociation` | Update app association | yes |
| DELETE | `deleteAppAssociation` | Delete app association |  |
| POST | `createBlog` | Create blog | yes |
| GET | `getBlogs` | List blogs |  |
| PUT | `updateBlog` | Update a blog | yes |
| DELETE | `deleteBlog` | Delete a blog |  |
| POST | `addDataLoader` | Create data loader | yes |
| GET | `getDataLoaders` | List data loaders |  |
| DELETE | `deleteDataLoader` | Delete a data loader |  |
| PUT | `editDataLoader` | Update a data loader | yes |
| GET | `getDataLoadersByService` | List all data loaders |  |
| PUT | `selectDataLoader` | Select a data loader |  |
| PUT | `resetDataLoader` | Reset a data loader |  |
| GET | `getFaqCategories` | List FAQ Categories |  |
| GET | `getFaqCategoryBySlugOrId` | Get FAQ category |  |
| POST | `createFaqCategory` | Create FAQ Category | yes |
| PUT | `updateFaqCategory` | Update FAQ category | yes |
| DELETE | `deleteFaqCategory` | Delete FAQ category |  |
| GET | `getFaqsByCategoryIdOrSlug` | List FAQs |  |
| POST | `addFaq` | Create FAQ | yes |
| PUT | `updateFaq` | Update FAQ | yes |
| DELETE | `deleteFaq` | Delete FAQ |  |
| GET | `getFaqByIdOrSlug` | Get FAQ or slug |  |
| POST | `generateSEOTitle` | Generate SEO title | yes |
| GET | `getLandingPages` | Get landing pages |  |
| POST | `createLandingPage` | Create landing page | yes |
| PUT | `updateLandingPage` | Update landing page | yes |
| DELETE | `deleteLandingPage` | Delete landing page |  |
| GET | `getLegalInformation` | Get Legal Pages |  |
| POST | `updateLegalInformation` | Update Legal Pages | yes |
| GET | `getNavigations` | Get navigation items |  |
| POST | `createNavigation` | Create navigation items | yes |
| GET | `getDefaultNavigations` | Get default navigations |  |
| GET | `getNavigationBySlug` | Get navigation by slug |  |
| PUT | `updateNavigation` | Update navigation | yes |
| DELETE | `deleteNavigation` | Delete navigation |  |
| GET | `getPageMeta` | Get page meta |  |
| GET | `getPageSpec` | Get page specification |  |
| PUT | `updatePagePreview` | Update page preview | yes |
| DELETE | `deletePage` | Delete page |  |
| POST | `addPathRedirectionRules` | Create path redirection rules | yes |
| GET | `getPathRedirectionRules` | List Path Redirection Rules |  |
| GET | `getPathRedirectionRule` | Get Path Redirection Rule |  |
| PUT | `updatePathRedirectionRules` | Update path redirection rule | yes |
| DELETE | `deletePathRedirectionRules` | Delete path redirection rule |  |
| GET | `getSEOConfiguration` | Get sales channel SEO |  |
| POST | `updateSEOConfiguration` | Update sales channel SEO information | yes |
| GET | `getDefaultSEOMarkupSchema` | List default SEO Markup Schemas |  |
| GET | `getSEOMarkupSchemas` | List default SEO Markup Schemas |  |
| POST | `createSEOMarkupSchema` | Create SEO Markup Schema | yes |
| GET | `getSEOMarkupSchema` | Get SEO Markup Schema |  |
| PUT | `editSEOMarkupSchema` | Get SEO Markup Schema | yes |
| DELETE | `deleteSEOMarkupSchema` | Delete SEO Markup Schema |  |
| GET | `getSupportInformation` | Get support information |  |
| POST | `updateSupportInformation` | Update Customer Support Information | yes |
| GET | `getInjectableTags` | Get all HTML tags |  |
| PUT | `addInjectableTag` | Create HTML tag | yes |
| PUT | `removeInjectableTag` | Remove HTML tag | yes |
| PUT | `editInjectableTag` | Update HTML tag | yes |
| GET | `getTagsTemplate` | Get Script Tags Templates |  |
| GET | `getBlogBySlug` | Get blog by slug |  |
| POST | `createPage` | Create page | yes |
| GET | `getPages` | Get pages |  |
| PUT | `updatePage` | Update page | yes |
| GET | `getPageBySlug` | Get page by slug |  |
| GET | `getCustomFieldTypes` | Get custom field types |  |
| GET | `getResources` | Get resources |  |
| GET | `getCustomFieldDefinitions` | Get custom fields definitions |  |
| GET | `getCustomFieldDefinitionByResource` | Get custom fields definitions for a given resource type |  |
| POST | `createCustomFieldDefinition` | Create custom field definition for a given resource type | yes |
| GET | `getCustomFieldDefinitionBySlug` | Get custom fields definition by resource, slug and namespace |  |
| PUT | `updateCustomFieldDefinitionBySlug` | Update custom field definition | yes |
| DELETE | `deleteCustomFieldDefinitionBySlug` | Delete custom fields definition |  |
| GET | `getCustomFieldsByResourceSlug` | Get list of custom fields of given resource and resource slug |  |
| PUT | `updateCustomFieldByResourceSlug` | Update custom field entries for gives resource and resource slug | yes |
| DELETE | `deleteCustomFieldsByResourceSlug` | delete custom fields of given resource and resource slug |  |
| POST | `createCustomObjectDefinition` | Create custom object definition | yes |
| GET | `getCustomObjectDefinitions` | Get custom object definitions |  |
| GET | `getCustomObjectDefinitionBySlug` | Get custom object definition |  |
| PUT | `updateCustomObjectDefinitionBySlug` | Update custom object definition | yes |
| DELETE | `deleteCustomObjectDefinitionBySlug` | Delete custom object definition |  |
| GET | `getCustomObjectsBySlug` | Get list of custom objects under a certain custom object definiti… |  |
| POST | `createCustomObjectBySlug` | Create custom object entries | yes |
| GET | `getCustomObjectBySlug` | Get custom object details |  |
| DELETE | `deleteCustomObjectBySlug` | Delete custom object |  |
| PUT | `updateCustomObjectBySlug` | Update custom object details | yes |
| GET | `getJobs` | Get bulk import and export job list |  |
| POST | `importCustomObjectEntriesBySlug` | Bulk custom object entries upload | yes |
| GET | `exportCustomObjectEntriesBySlug` | Initiate download for bulk custom object entries |  |
| GET | `sampleCustomObjectBulkEntryBySlug` | Download sample for custom object bulk entry |  |
| GET | `getAppCustomFieldTypes` | Get custom field types |  |
| GET | `getAppResources` | Get resources |  |
| GET | `getAppCustomFieldDefinitions` | Get custom fields definitions |  |
| GET | `getAppCustomFieldDefinitionByResource` | Get custom fields definitions for a given resource type |  |
| POST | `createAppCustomFieldDefinition` | Create custom field definition for a given resource type | yes |
| GET | `getAppCustomFieldDefinitionBySlug` | Get custom fields definition by resource, slug and namespace |  |
| PUT | `updateAppCustomFieldDefinitionBySlug` | Update custom field definition | yes |
| DELETE | `deleteAppCustomFieldDefinitionBySlug` | Delete custom fields definition |  |
| GET | `getAppCustomFieldsByResourceSlug` | Get list of custom fields of given resource and resource slug |  |
| PUT | `updateAppCustomFieldByResourceSlug` | Create custom field entries for gives resource and resource slug | yes |
| POST | `createAppCustomObjectDefinition` | Create custom object definition | yes |
| GET | `getAppCustomObjectDefinitions` | Get custom object definitions |  |
| GET | `getAppCustomObjectDefinitionBySlug` | Get custom object definition |  |
| PUT | `updateAppCustomObjectDefinitionBySlug` | Update custom object definition | yes |
| DELETE | `deleteAppCustomObjectDefinitionBySlug` | Delete custom object definition |  |
| GET | `getAppCustomObjectsBySlug` | Get list of custom objects |  |
| POST | `createAppCustomObjectBySlug` | Create custom object entries | yes |
| GET | `getAppCustomObjectBySlug` | Get custom object details |  |
| DELETE | `deleteAppCustomObjectBySlug` | Delete custom object |  |
| PUT | `updateAppCustomObjectBySlug` | Update custom object details | yes |
| GET | `getAppJobs` | Get bulk import and export job list |  |
| POST | `importAppCustomObjectEntriesBySlug` | Bulk custom object entries upload | yes |
| GET | `exportAppCustomObjectEntriesBySlug` | Initiate download for bulk custom object entries |  |
| GET | `sampleAppCustomObjectBulkEntryBySlug` | Download sample for custom object bulk entry |  |

## Logistic (84 ops) — SDK: `Serviceability` — [details](logistic.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| POST | `createZone` | Create zone | yes |
| GET | `getZones` | Get zones |  |
| GET | `getZone` | Get zone details |  |
| PATCH | `updateZone` | Update details of a Zone to enable or disable | yes |
| DELETE | `deleteZone` | Delete a Specific Zone |  |
| POST | `createBulkExport` | Create Bulk Export of Zones | yes |
| GET | `getBulkExport` | Get Bulk Export of Zones |  |
| POST | `createGeoArea` | Creation of GeoArea | yes |
| GET | `getGeoAreas` | Get all geoareas in the current application |  |
| GET | `getGeoArea` | Get details of the specific geoarea |  |
| PUT | `updateGeoArea` | Update the details of existing GeoArea | yes |
| POST | `createBulkGeoArea` | Bulk Creation of GeoArea Regions | yes |
| GET | `getBulkGeoArea` | Get status of GeoAreas created in bulk |  |
| PUT | `updateBulkGeoArea` | Update geoareas and their associated regions in bulk | yes |
| POST | `createGeoAreaExportJob` | Create job for exporting Geoarea regions |  |
| GET | `getGeoAreaExportJobStatus` | Get status of Geoarea export job |  |
| POST | `updatePincodeMopView` | Update pincode COD support | yes |
| POST | `updatePincodeBulkView` | Bulk update pincode COD support | yes |
| POST | `updatePincodeCoDListing` | Get COD enabled pincodes | yes |
| POST | `updatePincodeAuditHistory` | Get audit trail | yes |
| POST | `createCourierPartnerAccount` | Create courier account | yes |
| GET | `getCourierPartnerAccounts` | List courier accounts |  |
| PUT | `updateCourierPartnerAccount` | Update courier account | yes |
| GET | `getCourierPartnerAccount` | Get courier account |  |
| PUT | `updateCourierRule` | Update courier rule | yes |
| GET | `getCourierPartnerRule` | Get courier rule |  |
| POST | `createCourierPartnerRule` | Create courier rule | yes |
| GET | `getCourierPartnerRules` | Get courier rules |  |
| POST | `getCourierPartners` | Serviceable Courier Partners | yes |
| POST | `getCompanyCourierPartnersList` | Get available company courier partners | yes |
| POST | `getApplicationCourierPartnersList` | Get available application courier partners | yes |
| PUT | `updateCompanyConfiguration` | Update delivery configuration | yes |
| GET | `getCompanyConfiguration` | Get delivery configuration |  |
| GET | `getApplicationConfiguration` | Get delivery configuration |  |
| PATCH | `patchApplicationConfiguration` | To patch any config which can be applied to application | yes |
| POST | `bulkTat` | Locality TAT import or export | yes |
| GET | `getBulkTat` | Locality TAT change history |  |
| GET | `getApplicationConfig` | Get store rule configuration |  |
| POST | `insertApplicationConfig` | Create store rule configuration | yes |
| PUT | `updateStoreRulesConfig` | Update store rules configuration | yes |
| GET | `getStoreRules` | Get store rules |  |
| POST | `createStoreRules` | Create store rule | yes |
| GET | `getStoreRule` | Get store rule |  |
| PUT | `updateStoreRules` | Update store rule | yes |
| POST | `bulkServiceability` | Bulk update serviceability of localities | yes |
| GET | `getBulkServiceability` | Bulk update history |  |
| POST | `createPackageMaterial` | Create packaging material | yes |
| GET | `getPackageMaterialList` | Get packaging materials |  |
| POST | `createPackageMaterialRule` | Create packaging rule | yes |
| GET | `getPackageMaterialRule` | Get packaging material rule |  |
| PATCH | `updatePackageMaterialRule` | Update packaging rule | yes |
| PATCH | `updatePackageMaterials` | Update packaging material | yes |
| GET | `getPackageMaterials` | Get packaging material |  |
| PUT | `updateCourierPartnerRulePriority` | Update courier partner rule priority | yes |
| PUT | `updateStoreRulePriority` | Update Store Rule priority | yes |
| POST | `getOptimalLocations` | Get selling locations | yes |
| POST | `createCourierPartnerScheme` | Create Scheme for courier partner extension | yes |
| GET | `getCourierPartnerSchemes` | Get created Schemes for courier partner |  |
| PUT | `updateCourierPartnerScheme` | Update Scheme for courier partner extension | yes |
| GET | `getCourierPartnerScheme` | Get Scheme for courier partner extension by Id |  |
| POST | `sampleFileServiceability` | Sample File Download | yes |
| GET | `getSampleFileServiceabilityStatus` | Get Serviceability TAT sample files generator status |  |
| GET | `getCountries` | Get all countries and associated data |  |
| GET | `getInstalledCourierPartnerExtensions` | Fetching of Package Material Rules from database. |  |
| GET | `getSelfShipDetails` | Get self-ship details |  |
| PATCH | `updateSelfShipDetails` | Update self-ship details | yes |
| GET | `downloadGeoareaSampleFile` | Download geoarea sample file |  |
| POST | `createFulfillmentOption` | Create a new fulfillment option | yes |
| GET | `getFulfillmentOptionsList` | Retrieve fulfillment options with optional filters. |  |
| GET | `getFulfillmentOptions` | Get fulfillment options |  |
| DELETE | `deleteFulfillmentOptions` | Delete fulfillment options |  |
| PUT | `putFulfillmentOption` | Update an existing fulfillment option | yes |
| GET | `getFulfillmentOptionProducts` | Get products for a specific fulfillment option. |  |
| GET | `getFulfillmentOptionStores` | Get stores for a specific fulfillment option. |  |
| POST | `uploadBulkFulfillmentOptions` | Upload bulk fulfillment options. | yes |
| POST | `validateBulkFulfillmentOptions` | Validate bulk fulfillment options. | yes |
| GET | `getBulkFulfillmentValidationStatus` | Validate bulk fulfillment options. |  |
| POST | `createShipments` | Create and return shipments | yes |
| POST | `createPolygon` | Create polygon-based serviceability for stores | yes |
| GET | `getPolygon` | Get polygon-based serviceability for stores |  |
| PATCH | `updatePolygon` | Update polygon-based serviceability for stores | yes |
| GET | `downloadZoneProductsBulkSampleFile` | Download zone products bulk patch sample file |  |
| POST | `createZoneProductsBulkPatchJob` | Create bulk zone products patch job | yes |
| GET | `getZoneProductsBulkPatchJobStatus` | Get bulk zone products patch job status |  |

## Cart (70 ops) — SDK: `Cart` — [details](cart.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getCoupons` | List of coupons |  |
| POST | `createCoupon` | Create a coupon | yes |
| GET | `getCouponById` | Get a coupon |  |
| PUT | `updateCoupon` | Update a coupon | yes |
| PATCH | `updateCouponPartially` | Update a coupon partially  | yes |
| DELETE | `deleteCoupon` | Delete a coupon which is in draft state |  |
| GET | `getPromotions` | List of promotions |  |
| POST | `createPromotion` | Create a promotion | yes |
| GET | `getPromotionById` | Get a specific promotion |  |
| PUT | `updatePromotion` | Update a promotion | yes |
| PATCH | `updatePromotionPartially` | Update a promotion partially  | yes |
| DELETE | `deletePromotion` | Delete a promotion which is in draft state |  |
| GET | `getPromosCouponConfig` | Get promotion and coupon type |  |
| GET | `getPromotionOffers` | List of all available promotion offers |  |
| GET | `getPromotionPaymentOffers` | Fetch available promotions payment offers |  |
| PUT | `updateCartMetaConfig` | Update cart meta | yes |
| GET | `fetchCartMetaConfig` | Get cart meta |  |
| POST | `createCartMetaConfig` | Create a new cart meta | yes |
| PUT | `updatePriceAdjustment` | Update price adjustments | yes |
| DELETE | `removePriceAdjustment` | Remove price adjustments |  |
| POST | `addPriceAdjustment` | Create price adjustments | yes |
| GET | `getPriceAdjustments` | Get a list of all price adjustments associated with a cart |  |
| POST | `fetchAndvalidateCartItems` | Get and validate cart items | yes |
| POST | `checkCartServiceability` | Check cart serviceability | yes |
| POST | `checkoutCart` | Headless Checkout | yes |
| GET | `getAbandonedCart` | Get abandoned carts |  |
| GET | `getAbandonedCartDetails` | Get abandoned cart details |  |
| POST | `addItems` | Add items to cart | yes |
| PUT | `updateCart` | Update cart items | yes |
| GET | `getCouponOptionValues` | Get coupon option values |  |
| GET | `getCouponCodeExists` | Check coupon code exists |  |
| GET | `getPromotionCodeExists` | Check promotion code exists |  |
| POST | `overrideCart` | Update cart checkout | yes |
| POST | `getCartShareLink` | Share cart link | yes |
| GET | `getCartSharedItems` | List shared cart items |  |
| POST | `updateCartWithSharedItems` | Update shared cart items |  |
| GET | `getCartList` | List of carts |  |
| PUT | `updateCartUser` | Update user of a cart | yes |
| GET | `getCart` | Get a cart |  |
| POST | `platformAddItems` | Add items to cart | yes |
| PUT | `platformUpdateCart` | Update cart items | yes |
| PATCH | `updateCartBreakup` | Update cart breakup values | yes |
| PUT | `deleteCart` | Delete a cart | yes |
| GET | `getItemCount` | Get a cart items count |  |
| GET | `getAppCoupons` | List of coupons |  |
| POST | `applyCoupon` | Apply coupon | yes |
| DELETE | `removeCoupon` | Remove coupon |  |
| GET | `getAddresses` | Get a list of addresses for a customer |  |
| POST | `addAddress` | Creates a new address for a customer | yes |
| GET | `getAddressById` | Get details for a single customer address |  |
| PUT | `updateAddress` | Updates an existing customer address | yes |
| DELETE | `removeAddress` | Removes an address from a customer's address list |  |
| POST | `selectAddress` | Select customer address for order processing | yes |
| GET | `getShipments` | Get shipments details |  |
| PUT | `updateShipments` | Update shipments | yes |
| PUT | `updateCartMeta` | Update cart metadata | yes |
| POST | `platformCheckoutCart` | Checkout cart | yes |
| GET | `getAvailableDeliveryModes` | Get delivery modes |  |
| GET | `getStoreAddressByUid` | Get Store Address |  |
| PUT | `selectPaymentMode` | Select payment mode | yes |
| GET | `validateCouponForPayment` | Validate applied coupon |  |
| POST | `platformCheckoutCartV2` | Checkout cart | yes |
| PUT | `selectPaymentModeV2` | Select payment mode (latest) | yes |
| POST | `applyLoyaltyPoints` | Redeem loyalty points. | yes |
| GET | `getOffers` | List of offers |  |
| POST | `createOffer` | Create an offer | yes |
| GET | `getOfferById` | Get a specific offer |  |
| PUT | `updateOffer` | Update existing offer | yes |
| PATCH | `updateOfferPartially` | Partially update offer | yes |
| DELETE | `deleteOffer` | Delete draft offer |  |

## Communication (62 ops) — SDK: `Communication` — [details](communication.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getAppProviders` | Get application providers |  |
| POST | `updateAppProviders` | Update application providers | yes |
| GET | `getGlobalProviders` | Get global providers |  |
| GET | `getEmailProviders` | Get all email providers |  |
| POST | `createEmailProvider` | Create an email provider | yes |
| GET | `getEmailProviderById` | Get a email provider |  |
| PUT | `updateEmailProviderById` | Update email provider | yes |
| DELETE | `deleteEmailProviderById` | Delete an email provider |  |
| GET | `getSmsProviders` | Get all SMS providers |  |
| POST | `createSmsProvider` | Create SMS provider | yes |
| GET | `getDefaultSmsProviders` | Get all default SMS providers |  |
| GET | `getSmsProviderById` | Get a SMS provider |  |
| PUT | `updateSmsProviderById` | Update SMS provider | yes |
| DELETE | `deleteSmsProviderById` | Delete an SMS provider |  |
| GET | `getCampaigns` | Get all campaigns |  |
| POST | `createCampaign` | Create a campaign | yes |
| GET | `getCampaignById` | Get a campaign |  |
| PUT | `updateCampaignById` | Update a campaign | yes |
| GET | `getStatsOfCampaignById` | Get campaign statistics |  |
| GET | `getAudiences` | Get all the audiences |  |
| POST | `createAudience` | Create an audience | yes |
| GET | `getAudienceById` | Get an audience |  |
| PUT | `updateAudienceById` | Update an audience | yes |
| DELETE | `deleteAudienceById` | Delete an audience | yes |
| GET | `getDummyDatasources` | Get dummy data sources |  |
| GET | `getDummyDatasourcesMeta` | Get dummy data sources metadata |  |
| GET | `getNSampleRecordsFromCsvByGet` | Get N sample records of a CSV |  |
| POST | `getNSampleRecordsFromCsv` | Get N sample records of a CSV | yes |
| GET | `getEmailTemplates` | Get all email templates |  |
| POST | `createEmailTemplate` | Creat an email template | yes |
| GET | `getSystemEmailTemplates` | Get all system email templates |  |
| GET | `getEmailTemplateById` | Get an email template |  |
| PUT | `updateEmailTemplateById` | Update an email template | yes |
| DELETE | `deleteEmailTemplateById` | Delete an email template |  |
| GET | `getSubscribedEmailTemplates` | Get all subscribed email templates |  |
| GET | `getSmsTemplates` | Get all SMS templates |  |
| POST | `createSmsTemplate` | Create a SMS template | yes |
| GET | `getSystemSmsTemplates` | Gets all system SMS templates |  |
| GET | `getSmsTemplateById` | Get a SMS template |  |
| PUT | `updateSmsTemplateById` | Update a SMS template | yes |
| DELETE | `deleteSmsTemplateById` | Delete an SMS template |  |
| GET | `getSubscribedSmsTemplates` | Get all subscribed SMS templates |  |
| POST | `sendCommunicationSynchronously` | Send communication synchronously | yes |
| POST | `sendCommunicationAsynchronously` | Send communication asynchronously | yes |
| GET | `getEventSubscriptions` | Get all event subscriptions |  |
| POST | `createEventSubscriptions` | Create an event subscription | yes |
| GET | `getEventSubscriptionsById` | Get an event subscription |  |
| PUT | `editEventSubscriptions` | Update an event subscriptions | yes |
| DELETE | `deleteEventSubscriptionsById` | Delete an event subscriptions |  |
| POST | `createEventSubscriptionsByBulk` | Create event subscriptions in bulk | yes |
| GET | `getGlobalVariables` | Get all global variables |  |
| POST | `postGlobalVariables` | Create global variables | yes |
| GET | `getJobs` | Get all campaign jobs |  |
| POST | `createJobs` | Create a campaign  jobs | yes |
| POST | `triggerCampaignJob` | Trigger a campaign job | yes |
| GET | `getJobLogs` | Get logs of all campaign job |  |
| GET | `getCommunicationLogs` | Get communication reports |  |
| GET | `getSystemNotifications` | Get system notifications |  |
| POST | `sendOtp` | Send OTP | yes |
| POST | `verfiyOtp` | Verify OTP | yes |
| GET | `getOtpConfiguration` | Get configuration of otp |  |
| PUT | `updateOtpConfiguration` | Update configuration of otp |  |

## Order (55 ops) — SDK: `Order` — [details](orders.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| POST | `reassignLocation` | Reassign location | yes |
| POST | `updateShipmentLock` | Update a shipment lock | yes |
| GET | `getAnnouncements` | List announcements |  |
| PUT | `updateAddress` | Update shipment address | yes |
| PUT | `updateShipmentStatus` | Update a shipment's status | yes |
| GET | `getRoleBasedActions` | Get role-based actions |  |
| GET | `getShipmentHistory` | Get a shipment's history |  |
| POST | `postShipmentHistory` | Create shipment history | yes |
| POST | `sendSmsNinja` | Send SMS | yes |
| POST | `updatePackagingDimensions` | Update packaging dimensions | yes |
| GET | `getChannelConfig` | Get channel configuration |  |
| POST | `createChannelConfig` | Create channel configuration | yes |
| PUT | `orderUpdate` | Update an order | yes |
| POST | `checkOrderStatus` | Debug order | yes |
| GET | `getStateTransitionMap` | Get state transition map |  |
| GET | `getAllowedStateTransition` | Get allowed state transition |  |
| POST | `fetchRefundModeConfig` | List refund modes | yes |
| POST | `attachOrderUser` | Attach order to a user | yes |
| POST | `sendUserMobileOTP` | Send user mobile OTP | yes |
| POST | `verifyMobileOTP` | Verify mobile OTP | yes |
| POST | `downloadLanesReport` | Download Lane report | yes |
| POST | `bulkStateTransistion` | Upload bulk state transitions file | yes |
| GET | `bulkListing` | Lists bulk operations |  |
| GET | `jobDetails` | Get bulk operation details  |  |
| GET | `getFileByStatus` | Download file used for Bulk operation |  |
| GET | `getManifestShipments` | List manifest shipments |  |
| GET | `getManifests` | List manifests |  |
| POST | `generateProcessManifest` | Process Order Manifest | yes |
| GET | `getManifestDetails` | Get a manifest |  |
| POST | `dispatchManifests` | Dispatch manifest | yes |
| POST | `uploadConsents` | Upload consent | yes |
| GET | `getManifestfilters` | List filters |  |
| POST | `eInvoiceRetry` | Retry E-invoice | yes |
| GET | `trackShipment` | Track shipment |  |
| POST | `updateShipmentTracking` | Update shipment tracking | yes |
| GET | `failedOrderLogs` | List failed order logs |  |
| POST | `generateInvoiceID` | Generate and attach invoice Id | yes |
| GET | `failedOrderLogDetails` | Get failed order log |  |
| POST | `addStateManagerConfig` | Allows esm config updation | yes |
| GET | `getStateManagerConfig` | Retrieves Entity State Manager configuration which includes flags… |  |
| POST | `getRules` | List of RMA rules based on the given input conditions. | yes |
| PUT | `updatePaymentInfo` | Update payment details for an order, its shipments and its bags. | yes |
| GET | `getOrderingSourceConfigBySlug` | Get ordering source config for a given company and application. |  |
| PUT | `updateOrderingSourceConfigBySlug` | Update ordering source config for a given company and application… | yes |
| POST | `createOrder` | Create Order | yes |
| GET | `listOrderingSources` | List ordering sources for a given company and application. |  |
| POST | `createAccount` | Create channel account | yes |
| GET | `listAccounts` | Get channel accounts list |  |
| GET | `getAccountById` | Get channel account details |  |
| PUT | `updateAccount` | Update account | yes |
| GET | `getShipmentPackages` | Get shipment packages |  |
| POST | `createShipmentPackages` | Create shipment packages | yes |
| PUT | `updateShipmentPackages` | Update shipment packages | yes |
| POST | `requestCourierPartnerForShipment` | Manually request a courier partner for a shipment. | yes |
| POST | `saveCourierPartnerPreferenceForShipment` | Save courier partner preference for a shipment. | yes |

## Order Read (19 ops) — SDK: `Order` — [details](orders.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getShipmentBagReasons` | Retrieve Reasons for Cancellation and Return journey |  |
| GET | `getShipments` | List shipments |  |
| GET | `getShipmentById` | Get shipment details |  |
| GET | `getOrderById` | Get order |  |
| GET | `getLaneConfig` | Get lane configuration |  |
| GET | `getOrders` | List orders |  |
| GET | `getApplicationShipments` | List sales channel shipments |  |
| GET | `trackShipmentPlatform` | Track shipment |  |
| GET | `getfilters` | List filters |  |
| GET | `getBulkShipmentExcelFile` | Generate the report |  |
| GET | `getBulkActionTemplate` | List supported templates |  |
| GET | `downloadBulkActionTemplate` | Download bulk template |  |
| GET | `getShipmentReasons` | List bag cancellation reasons |  |
| GET | `getPlatformShipmentReasons` | List shipment cancellation reasons |  |
| GET | `getBagById` | Get bag |  |
| GET | `getBags` | List bags |  |
| GET | `generatePOSReceiptByOrderId` | Generate POS receipt by order Id |  |
| GET | `getAllowedTemplatesForBulk` | List bulk operation templates |  |
| GET | `getTemplate` | Download bulk operation templates |  |

## Payment (54 ops) — SDK: `Payment` — [details](payment.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getBrandPaymentGatewayConfig` | Get secrets for brand payment gateway |  |
| POST | `saveBrandPaymentGatewayConfig` | Save brand payment gateway config | yes |
| GET | `getPaymentModeRoutes` | Get payment modes |  |
| GET | `getAllPayouts` | List payouts |  |
| POST | `savePayout` | Save payout | yes |
| PUT | `updatePayout` | Update payout | yes |
| PATCH | `activateAndDectivatePayout` | Activate/Deactivate payout | yes |
| DELETE | `deletePayout` | Delete payout |  |
| GET | `getSubscriptionPaymentMethod` | Get subscription payment method |  |
| DELETE | `deleteSubscriptionPaymentMethod` | Delete subscription payment method |  |
| GET | `getSubscriptionConfig` | Get subscription config |  |
| POST | `saveSubscriptionSetupIntent` | Save subscription setup intent | yes |
| GET | `getBankAccountDetailsOpenAPI` | Get bank account details |  |
| POST | `addRefundBankAccountUsingOTP` | Create refund account | yes |
| GET | `verifyIfscCode` | Verify IFSC code |  |
| GET | `getUserOrderBeneficiaries` | Get user order beneficiaries |  |
| GET | `getUserBeneficiaries` | Get user beneficiaries |  |
| POST | `confirmPayment` | Payment confirmation | yes |
| GET | `getUserCODlimitRoutes` | Get user COD  |  |
| PUT | `setUserCODlimitRoutes` | Set user COD | yes |
| GET | `getPosPaymentModeRoutes` | List POS payment modes |  |
| POST | `initialisePayment` | Start payment process | yes |
| POST | `checkAndUpdatePaymentStatus` | Poll and update payment status | yes |
| POST | `resendOrCancelPayment` | Resend or cancel payment | yes |
| POST | `paymentStatusBulk` | Retrieve status of multiple payments in bulk | yes |
| GET | `oauthGetUrl` | Get OAuth URL |  |
| POST | `revokeOauthToken` | Revoke OAuth token |  |
| POST | `verifyCustomerForPayment` | Validate customer for paylater | yes |
| GET | `getPaymentLink` | Get payment link |  |
| POST | `createPaymentLink` | Create payment link | yes |
| GET | `pollingPaymentLink` | Poll status of payment link |  |
| POST | `resendPaymentLink` | Resend payment link | yes |
| POST | `cancelPaymentLink` | Cancel payment link | yes |
| GET | `getPaymentModeControlRoutes` | Get offline/advance payment mode |  |
| PATCH | `setMerchantModeControlRoutes` | Update offline payment mode | yes |
| GET | `getPaymentModeCustomConfig` | Get advance payment custom configurations  |  |
| PATCH | `setPaymentModeCustomConfig` | Update advance payment custom configurations | yes |
| GET | `getPaymentCodeOption` | Get payment mode codes |  |
| GET | `getPaymentSession` | Get payment session |  |
| PUT | `updatePaymentSession` | Update payment session  | yes |
| PUT | `updateRefundSession` | Update refund session | yes |
| GET | `getMerchantPaymentOption` | Get merchant payment option |  |
| PATCH | `patchMerchantPaymentOption` | Update payment gateways and payment mode | yes |
| GET | `getMerchantAggregatorPaymentModeDetails` | Get merchant aggregator and their payment mode |  |
| PATCH | `patchMerchantAggregatorPaymentModeDetails` | Update merchant aggregator payment mode | yes |
| GET | `getPGConfigAggregators` | Get merchant aggregator payment mode |  |
| GET | `getMerchantRefundPriority` | Get merchant refund priority |  |
| POST | `createMerchantRefundPriority` | Create merchant refund priority | yes |
| PUT | `updateMerchantRefundPriority` | Update merchant refund priority | yes |
| POST | `createPaymentOrder` | Create Order | yes |
| GET | `getMerchantAggregatorAppVersion` | Get app version for  Aggregator |  |
| PATCH | `patchMerchantPaymentOptionVersion` | Update app version for Aggrgator | yes |
| POST | `validateCustomerAndCreditSummary` | Verify payment customer and show credit summary | yes |
| POST | `saveTokenForAggregator` | Save token details for a payment aggregator | yes |

## Configuration (43 ops) — SDK: `Configuration` — [details](configuration.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getBuildConfig` | Get Build Configuration |  |
| PUT | `updateBuildConfig` | Update build configuration | yes |
| GET | `getPreviousVersions` | Get previous versions |  |
| GET | `getAppFeatures` | Get sales channel |  |
| POST | `updateAppFeatures` | Update sales channel | yes |
| PATCH | `modifyAppFeatures` | update  sales channel features | yes |
| GET | `getAppBasicDetails` | Get sales channel |  |
| PUT | `updateAppBasicDetails` | Update sales channel basic details | yes |
| GET | `getAppContactInfo` | Get sales channel contact |  |
| PUT | `updateAppContactInfo` | Update sales channel contact | yes |
| GET | `getAppApiTokens` | Get sales channel API tokens |  |
| POST | `updateAppApiTokens` | Update sales channel API tokens | yes |
| GET | `getAppCompanies` | List sales channel companies |  |
| GET | `getAppStores` | list sales channel stores |  |
| GET | `getInventoryConfig` | Get inventory configuration |  |
| PUT | `updateInventoryConfig` | Update inventory configuration | yes |
| PATCH | `partiallyUpdateInventoryConfig` | Partially update inventory configuration | yes |
| GET | `getAppCurrencyConfig` | Get sales channel currency configuration |  |
| POST | `updateAppCurrencyConfig` | Update sales channel currency configuration | yes |
| GET | `getAppSupportedCurrency` | List supported currencies |  |
| POST | `getOrderingStoresByFilter` | List ordering stores  | yes |
| POST | `updateOrderingStoreConfig` | Update ordering store configuration | yes |
| GET | `getOrderingStoreConfig` | Get ordering store configuration |  |
| GET | `getStaffOrderingStores` | Get staff ordering stores |  |
| POST | `getOrderingStoreCookie` | Get ordering store signed cookie | yes |
| DELETE | `removeOrderingStoreCookie` | Delete Ordering Store signed cookie |  |
| GET | `getDomains` | List  domains |  |
| POST | `addDomain` | Create domain | yes |
| DELETE | `removeDomainById` | Remove domain |  |
| POST | `changeDomainType` | Update domain | yes |
| POST | `getDomainStatus` | Get domain status | yes |
| POST | `createApplication` | Create sales channel | yes |
| GET | `getApplications` | List sales channel stores |  |
| GET | `getApplicationById` | Get sales channel by id |  |
| GET | `getCurrencies` | List currencies |  |
| POST | `getDomainAvailibility` | List suggestion domain | yes |
| GET | `getBrandsByCompany` | List brands by company |  |
| POST | `getCompanyByBrands` | List companies by brand | yes |
| POST | `getStoreByBrands` | Get store by brands | yes |
| GET | `getOtherSellerApplications` | Get other sales channel |  |
| GET | `getOtherSellerApplicationById` | Get others sales. channel |  |
| PUT | `optOutFromApplication` | opt out of marketplaces | yes |
| GET | `getCurrencyExchangeRates` | Get currency exchange rates |  |

## User (38 ops) — SDK: `User` — [details](user.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getCustomers` | Get a List of Users |  |
| GET | `searchUsers` | Search an Existing Users |  |
| POST | `createUser` | Create User | yes |
| PUT | `blockOrUnblockUsers` | Block/Unblock Users | yes |
| PUT | `unDeleteUser` | Restore Deleted User | yes |
| GET | `getUserTimeline` | Get Deleted User Timeline |  |
| PUT | `updateUser` | Update User Details | yes |
| POST | `createUserSession` | Create User Session | yes |
| DELETE | `deleteSession` | Delete User Session |  |
| GET | `getActiveSessions` | Get User Active Sessions |  |
| DELETE | `deleteActiveSessions` | Delete User Active Sessions |  |
| PUT | `archiveUser` | Archive User | yes |
| GET | `getPlatformConfig` | Get Platform Config |  |
| POST | `updatePlatformConfig` | Update Platform Config | yes |
| POST | `createUserGroup` | Create User Group | yes |
| GET | `getUserGroups` | Get User Groups |  |
| PUT | `updateUserGroup` | Update User Group | yes |
| GET | `getUserGroupById` | Get User Group |  |
| PATCH | `updateUserGroupPartially` | Modify User Group | yes |
| DELETE | `deleteUserGroup` | Delete User Group |  |
| POST | `createUserAttributeDefinition` | Create a User Attribute Definition | yes |
| GET | `getUserAttributeDefinitions` | Get User Attribute Definitions |  |
| PUT | `updateUserAttributeDefinition` | Update User Attribute Definition | yes |
| DELETE | `deleteUserAttributeDefinitionById` | Delete User Attribute Definition |  |
| GET | `getUserAttributeDefinitionById` | Get User Attribute Definition |  |
| PUT | `updateUserAttribute` | Update Or Create User Attribute | yes |
| GET | `getUserAttribute` | Get User Attribute |  |
| DELETE | `deleteUserAttribute` | Delete User Attribute |  |
| GET | `getUserAttributesForUser` | Get All Customer Attributes |  |
| POST | `updateUserAttributes` | Create Or Update User Attribute | yes |
| DELETE | `deleteUserAttributesInBulk` | Delete User Attribute Values in Bulk | yes |
| GET | `getUserAttributeById` | Get User Attribute |  |
| POST | `bulkImportStoreFrontUsers` | Bulk import storefront customers using CSV and XLSX files. | yes |
| GET | `getBulkImportUsersList` | Get Bulk User's Import Lists for a specific Application. |  |
| POST | `createBulkExportUsers` | Bulk export storefront customers using CSV and XLSX files. | yes |
| GET | `getBulkExportUsersList` | Get Bulk User's Export Lists for a specific Application. |  |
| GET | `getUsersJobByJobId` | Retrieve Job Details by Job ID for a Specific Application, Includ… |  |
| POST | `filterUsersByAttributes` | Filter Users by Attribute Conditions | yes |

## Theme (26 ops) — SDK: `Theme` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getAllPages` | List pages of a theme  |  |
| POST | `createPage` | Create theme page | yes |
| PUT | `updateMultiplePages` | Update theme pages | yes |
| GET | `getPage` | Get a page |  |
| DELETE | `deletePage` | Delete a page |  |
| PUT | `updatePage` | Update a page | yes |
| GET | `getFonts` | List theme fonts  |  |
| GET | `getCompanyLevelThemes` | List company themes |  |
| GET | `getCompanyLevelPrivateThemes` | List private company themes |  |
| POST | `addMarketplaceThemeToCompany` | Create a company theme | yes |
| DELETE | `deleteCompanyTheme` | Delete a company theme |  |
| GET | `getApplicationThemes` | List sales channel themes |  |
| GET | `getApplicationThemesCount` | Get sales channel themes count |  |
| GET | `getThemeById` | Get theme |  |
| PUT | `updateTheme` | Update theme | yes |
| DELETE | `deleteTheme` | Delete theme |  |
| POST | `addThemeToApplication` | Create theme in sales channel | yes |
| PATCH | `updateThemeName` | Update theme name | yes |
| PATCH | `applyTheme` | Apply a theme |  |
| POST | `duplicateTheme` | Duplicate a theme |  |
| GET | `getAppliedTheme` | Get applied theme |  |
| GET | `getThemeForPreview` | Get theme for preview |  |
| HEAD | `getThemeLastModified` | Get theme last modified date |  |
| GET | `isUpgradable` | Check theme is upgradable  |  |
| PUT | `upgradeTheme` | Upgrade theme |  |
| GET | `getExtensionSections` | Get extension sections |  |

## Translation (25 ops) — SDK: `Content` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getCompanyLanguages` | Get company languages |  |
| POST | `addCompanyLanguage` | Add company language | yes |
| PUT | `updateCompanyLanguageDefault` | Set default language | yes |
| DELETE | `deleteCompanyLanguage` | Remove company language |  |
| GET | `getApplicationLanguages` | Get app languages |  |
| POST | `addApplicationLanguage` | Add app language | yes |
| PATCH | `bulkUnPublishApplicationLanguage` | Unpublish all languages of sales channel. | yes |
| PUT | `updateApplicationLanguageStatus` | Set app language | yes |
| DELETE | `deleteApplicationLanguage` | Remove app language |  |
| GET | `getAllTranslatableResources` | List all translatable resources |  |
| GET | `getTranslatableResourceById` | Get translatable resource details |  |
| GET | `getAllResourceDefinitions` | Get all resource defination |  |
| GET | `getResourceDefinitionById` | Get resource definitions details |  |
| GET | `getAllSections` | List all translatable content sections |  |
| GET | `getSectionById` | Retrieve details of a specific translatable section by its ID. |  |
| GET | `getTranslatableResourcesBySectionId` | Get section resources |  |
| GET | `getCompanyResourceTranslation` | Get company translations |  |
| POST | `createCompanyResourceTranslation` | Add company translation | yes |
| PUT | `updateCompanyResourceTranslation` | Update company translation | yes |
| DELETE | `deleteCompanyResourceTranslation` | Remove company translation |  |
| GET | `getApplicationResourceTranslations` | Get app translations |  |
| POST | `createApplicationResourceTranslation` | Add app translation | yes |
| PATCH | `upsertApplicationResourceTranslationInBulk` | Bulk update translations | yes |
| PUT | `updateApplicationResourceTranslation` | Update app translation | yes |
| DELETE | `deleteApplicationResourceTranslation` | Remove app translation |  |

## Lead (19 ops) — SDK: `Lead` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getPlatformTickets` | List tickets |  |
| POST | `createTicket` | Create ticket | yes |
| GET | `getNewTickets` | List sales channel tickets  |  |
| GET | `getPlatformTicket` | Get a ticket |  |
| PUT | `editPlatformTicket` | Update a ticket | yes |
| GET | `getNewTicket` | Get Ticket Details |  |
| PUT | `editNewTicket` | Update Ticket Details | yes |
| POST | `createPlatformTicketHistory` | Create ticket history | yes |
| GET | `getPlatformTicketHistory` | Get ticket history |  |
| GET | `getFeedbacks` | List feedbacks |  |
| POST | `submitFeedback` | Submit feedback | yes |
| POST | `createNewHistory` | Create ticket history interaction | yes |
| GET | `getNewTicketHistory` | Get ticket history interaction |  |
| GET | `getCustomForm` | Get custom form |  |
| PUT | `editCustomForm` | Update custom form | yes |
| DELETE | `deleteCustomForm` | Delete a custom form |  |
| GET | `getCustomForms` | Get custom forms |  |
| POST | `createCustomForm` | Create custom form | yes |
| GET | `getGeneralConfig` | Get general configuration |  |

## Companyprofile (14 ops) — SDK: `CompanyProfile` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `cbsOnboardGet` | Get company profile |  |
| PATCH | `updateCompany` | Update company profile | yes |
| GET | `getCompanyMetrics` | Get company metrics |  |
| GET | `getBrand` | Get a brand |  |
| PUT | `editBrand` | update brand | yes |
| POST | `createBrand` | Create brand | yes |
| GET | `getBrands` | list company brands |  |
| POST | `createCompanyBrandMapping` | Create company-brand mapping | yes |
| GET | `getLocations` | Get company specific stores |  |
| POST | `createLocation` | Create company stores | yes |
| GET | `getLocationDetail` | Get company stores |  |
| PUT | `updateLocation` | Update company stores | yes |
| POST | `createLocationBulk` | Bulk create company stores | yes |
| GET | `getLocationTags` | Get company store tags |  |

## Discount (11 ops) — SDK: `Discount` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getDiscounts` | List discounts |  |
| POST | `createDiscount` | Create discount | yes |
| GET | `getDiscount` | Get discount |  |
| PUT | `updateDiscount` | Update discount | yes |
| POST | `upsertDiscountItems` | Upsert discount items | yes |
| POST | `validateDiscountFile` | Validate discount file | yes |
| POST | `downloadDiscountFile` | Get discount file | yes |
| GET | `getValidationJob` | List validation job discount |  |
| DELETE | `cancelValidationJob` | deletel validation job discount |  |
| GET | `getDownloadJob` | List discount download job |  |
| DELETE | `cancelDownloadJob` | delete discount download job |  |

## Filestorage (10 ops) — SDK: `FileStorage` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| POST | `startUpload` | Start file upload. | yes |
| POST | `completeUpload` | Complete file upload. | yes |
| POST | `appStartUpload` | Application start upload. | yes |
| POST | `appCompleteUpload` | Application complete upload. | yes |
| POST | `getSignUrls` | Get signed URLs. | yes |
| POST | `copyFiles` | Copy files. | yes |
| GET | `browse` | Browse files. |  |
| GET | `appbrowse` | Application browse files. |  |
| POST | `browsefiles` | Browse Files | yes |
| GET | `proxy` | Proxy file access. |  |

## Webhook (9 ops) — SDK: `Webhook` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `fetchAllEventConfigurations` | List event configurations |  |
| POST | `registerSubscriberToEventV2` | Register Subscriber. | yes |
| PUT | `updateSubscriberV2` | Update Subscriber. | yes |
| POST | `registerSubscriberToEvent` | Register subscriber to event | yes |
| GET | `getSubscribersByCompany` | List subscribers by company |  |
| PUT | `updateSubscriberConfig` | Update a subscriber config | yes |
| PUT | `upsertSubscriberEvent` | Register Subscriber. | yes |
| GET | `getSubscriberById` | Get a subscriber |  |
| GET | `getSubscribersByExtensionId` | List subscribers by extension ID |  |

## Billing (5 ops) — SDK: `Billing` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getChargeDetails` | Obtain charge details |  |
| GET | `getSubscriptionCharge` | Retrieve subscription charge details |  |
| POST | `cancelSubscriptionCharge` | Cancel the extension subscription |  |
| POST | `createOneTimeCharge` | Generate a one-time charge | yes |
| POST | `createSubscriptionCharge` | Initiate subscription billing | yes |

## Share (5 ops) — SDK: `Share` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| POST | `createShortLink` | Create short link | yes |
| GET | `getShortLinks` | Get short links |  |
| GET | `getShortLinkByHash` | Get short link by hash |  |
| PATCH | `updateShortLinkById` | Update short link | yes |
| GET | `getShortLinkClickStats` | Get short link click statistics |  |

## Analytics (3 ops) — SDK: `Analytics` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| POST | `executeJobForProvidedParametersV2` | Executes given sql(Base64 Encoded) query | yes |
| POST | `startDownloadForQueryV2` | Initiates download job | yes |
| GET | `checkJobStatusByNameV2` | Checks download job status |  |

## Partner (2 ops) — SDK: `Partner` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| POST | `addProxyPath` | Create extension proxy | yes |
| DELETE | `removeProxyPath` | Remove extension proxy |  |

## Audittrail (1 ops) — SDK: `AuditTrail` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| POST | `createAuditLog` | Create an audit log | yes |

## Static Resource (4 ops) — SDK: `Content` — [details](other-domains.md)
| Method | operationId | Summary | Body? |
|--------|-------------|---------|-------|
| GET | `getTranslateUILabels` | Get Translate Ui Labels |  |
| POST | `createTranslateUILabels` | Add Translate Ui Labels | yes |
| GET | `getTranslateUILabelsById` | Get Resource Detail |  |
| PUT | `updateTranslateUILabels` | Update Resource Detail | yes |

