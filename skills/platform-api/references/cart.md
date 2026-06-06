# Cart

**SDK Class:** `Cart`  
**Total operations:** 70

## Groups

- **Cart**: The cart provides detailed information about selected items, including their name, quantity, price breakup, applied disc
- **Customer address**: A customer's address refers to the address where the ordered product is to be delivered. It usually includes details suc
- **Coupon**: Coupons are promotional tools offered by businesses to customers, providing discounts, incentives, or special offers on 
- **Payment mode**: Payment mode refers to the method used by customers to pay for their purchases during the checkout process. Payment mode
- **Promotion**: Promotion refers to a marketing campaign designed to incentivize customers to make purchases by offering discounts, bonu
- **Promotion offers**: Promotion offers are special incentives or discounts provided to customers to encourage purchases or enhance their shopp
- **Cart meta**: Cart meta includes configuration settings for customizing and optimizing the cart experience, such as adjusting item lim
- **Price adjustment**: Price adjustment refers to modification of product prices based on various factors such as user behavior, market conditi
- **Checkout**: Checkout refers to the final stage of the purchasing process where the customer completes their transaction by paying fo
- **Shipment**: Shipment refers to the process of delivering purchased items from the seller's location to the customer’s designated add
- **Selling Location**: A selling location represents a geographical location where your stores, pop-up stores, headquarters, and warehouses exi
- **Offer**: Represents a unified construct for applying benefits to the cart, encompassing both system-driven promotions  and user-a

## Operations by Group

### Address

#### `getAddresses` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/address`

**Get a list of addresses for a customer**

Retrieves a list of all addresses saved by the customer, simplifying the checkout process by offering pre-saved address options for delivery.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `cart_id` — 
- `buy_now` — 
- `mobile_no` — 
- `checkout_mode` — 
- `tags` — 
- `is_default` — 
- `user_id` — 

**Responses:** 200, 400
  200 schema: `PlatformGetAddressesDetails`

---

#### `getAddressById` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/address/{id}`

**Get details for a single customer address**

Retrieve a specific customer address stored in the system by providing its unique identifier. This API provides detailed information about the address, including the recipient's name, address, city, postal code, and other relevant details.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Query params:**
- `cart_id` — 
- `buy_now` — 
- `mobile_no` — 
- `checkout_mode` — 
- `tags` — 
- `is_default` — 
- `user_id` — 

**Responses:** 200, 400
  200 schema: `PlatformAddress`

---

#### `selectAddress` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/select-address`

**Select customer address for order processing**

Select an address from the saved customer addresses and validates the availability of items in the cart. Additionally, it verifies and updates the delivery promise based on the selected address.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `cart_id` — 
- `buy_now` — 
- `i` — 
- `b` — 

**Request body:** `application/json`
  Schema: `PlatformSelectCartAddress`

**Responses:** 201, 400

---

### Cart

#### `platformUpdateCart` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/detail`

**Update cart items**

Customers can modify added product attributes such as quantity and size, as well as remove items from the cart.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — The unique identifier of the cart
- `i` — This is a boolean value. Select `true` to retrieve all the items added in the ca
- `order_type` — The order type of shipment HomeDelivery - If the customer wants the order home-d
- `b` — This is a boolean value. Select `true` to retrieve the price breakup of cart ite
- `include_cart_calculation` — Set to `false` to skip recalculating and fetching the updated cart after the edi
- `buy_now` — This is a boolen value. Select `true` to set/initialize buy now cart

**Request body:** `application/json`
  Schema: `PlatformUpdateCartDetails`

**Responses:** 200
  200 schema: `UpdateCartDetailResult`

---

#### `updateCartBreakup` — PATCH `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/detail`

**Update cart breakup values**

Updates the cart breakup based on the enabled features and user preferences. This endpoint allows customers to modify how their cart totals are calculated — including options such as applying store credits, loyalty points, discounts, and other promotional benefits. The API recalculates and returns t

**Path params:**
- `company_id` — Unique identifier of the company associated with the current cart. *(required)*
- `application_id` — Unique identifier of the sales channel (e.g., website, app) for which the cart b *(required)*

**Query params:**
- `id` — Unique identifier of the cart for which the breakup needs to be updated.
- `i` — Set to `true` to include all items currently added to the cart in the response.
- `b` — Set to `true` to include the detailed price breakup of each cart item in the res
- `include_cart_calculation` — Set to `false` to skip recalculating and fetching the updated cart after the edi
- `buy_now` — Set to `true` to initialize a "Buy Now" cart flow, enabling direct checkout for 

**Request body:** `application/json`
  Schema: `UpdateCartBreakup`

**Responses:** 200, 400
  200 schema: `CartDetailResult`

---

### Cart Share

#### `getCartShareLink` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/share-cart`

**Share cart link**

Generate a unique shareable link for the customer's cart for a specific sales channel. This link enables easy sharing of the cart contents with other users, facilitating collaborative shopping experiences.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Request body:** `application/json`
  Schema: `GetShareCartLinkCreation`

**Responses:** 200
  200 schema: `GetShareCartLinkResult`

---

### Cart meta configuration

#### `fetchCartMetaConfig` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/cart_configuration`

**Get cart meta**

Retrieve meta configuration settings tailored for customizing the cart experience within a specific sales channel. Cart meta includes configuration settings such as allowed maximum cart value, allowed minimum cart value, maximum allowed cart items, delivery charges, etc.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Responses:** 200, 400
  200 schema: `CartMetaConfigAdd`

---

#### `createCartMetaConfig` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/cart_configuration`

**Create a new cart meta**

Create custom meta configurations for carts associated with a specific sales channel. By specifying the company ID and application ID, seller can define unique cart settings, including preferences, rules, and constraints, tailored to their business needs.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Request body:** `application/json`
  Schema: `CartMetaConfigAdd`

**Responses:** 201, 400

---

### General

#### `getCoupons` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/coupon`

**List of coupons**

Retrieve a list of all created coupons for specific sales channel. It also supports searching based on text search, pagination and other flags to filter coupons.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `page_no` —  (default: 0)
- `page_size` —  (default: 10)
- `is_archived` —  (default: False)
- `title` — 
- `is_public` — 
- `is_display` — 
- `type_slug` — 
- `code` — 
- *(+ 7 more query params)*

**Responses:** 200
  200 schema: `CouponsResult`

---

#### `createCoupon` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/coupon`

**Create a coupon**

Creates a new coupon based on the selected coupon type. Sellers can choose from multiple supported coupon types, including percentage value, fixed amount value, bundled discount, buy X get Y items, and more, along with customizable coupon criteria to meet specific business requirements.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Request body:** `application/json`
  Schema: `CouponAdd`

**Responses:** 201, 400

---

#### `getCouponById` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/coupon/{id}`

**Get a coupon**

Retrieve details of a specific coupon by providing its unique identifier to obtain information such as coupon type, rules, validity period and other related information.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `CouponUpdate`

---

#### `updateCoupon` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/coupon/{id}`

**Update a coupon**

Update the details of an existing coupon by specifying its unique identifier. This includes modifying coupon attributes such as discount percentage, validity period, and associated conditions. Leveraging this functionality allows businesses to quickly adapt their promotional strategies to changing m

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Request body:** `application/json`
  Schema: `CouponUpdate`

**Responses:** 200, 404
  200 schema: `CouponCreateResult`

---

#### `updateCouponPartially` — PATCH `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/coupon/{id}`

**Update a coupon partially **

Seller can make partial adjustments of an existing coupon by specifying its unique identifier. It enables businesses to modify specific attributes of the coupon while preserving other details intact.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Request body:** `application/json`
  Schema: `CouponPartialUpdate`

**Responses:** 200, 404
  200 schema: `SuccessMessage`

---

#### `deleteCoupon` — DELETE `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/coupon/{id}`

**Delete a coupon which is in draft state**

Delete details of a draft coupon by providing its unique identifier to delete information such as coupon type, rules, validity period and other related information.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Application id of sales channel *(required)*
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `SuccessMessage`

---

#### `getPromotions` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/promotion`

**List of promotions**

Retrieve a list of all created promotions for specific sales channel. It also supports efficient text search and pagination functionalities, ensuring optimized promotion listing for streamlined navigation and management.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `page_no` —  (default: 0)
- `page_size` —  (default: 10)
- `q` — 
- `is_active` —  (default: True)
- `promo_group` — 
- `promotion_type` — 
- `fp_panel` — 
- `promotion_id` — 
- *(+ 7 more query params)*

**Responses:** 200
  200 schema: `PromotionsResult`

---

#### `createPromotion` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/promotion`

**Create a promotion**

Creates a new promotion based on the selected promotion type. Sellers can choose from multiple supported promotion types, including percentage value, fixed amount value, bundled discount, buy X get Y items, and more, along with customizable promotion criteria to meet specific business requirements.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Request body:** `application/json`
  Schema: `PromotionAdd`

**Responses:** 201, 400

---

#### `getPromotionById` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/promotion/{id}`

**Get a specific promotion**

Retrieve details of a specific promotion by providing its unique identifier to obtain information such as promotion type, rules, validity period and other related information.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `PromotionUpdateResult`

---

#### `updatePromotion` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/promotion/{id}`

**Update a promotion**

Update the details of an existing promotion by specifying its unique identifier. This includes modifying promotion attributes such as discount percentage, validity period, and associated conditions. Leveraging this functionality allows businesses to quickly adapt their promotional strategies to chan

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Request body:** `application/json`
  Schema: `PromotionUpdate`

**Responses:** 200, 404
  200 schema: `PromotionUpdateResult`

---

#### `updatePromotionPartially` — PATCH `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/promotion/{id}`

**Update a promotion partially **

Seller can make partial adjustments of an existing promotion by specifying its unique identifier. It enables businesses to modify specific attributes of the promotion while preserving other details intact.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Request body:** `application/json`
  Schema: `PromotionPartialUpdate`

**Responses:** 200, 404
  200 schema: `SuccessMessage`

---

#### `deletePromotion` — DELETE `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/promotion/{id}`

**Delete a promotion which is in draft state**

Delete details of a draft promotion by providing its unique identifier to delete information such as promotion type, rules, validity period and other related information.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Application id of sales channel *(required)*
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `SuccessMessage`

---

#### `getPromosCouponConfig` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/promo-coupons`

**Get promotion and coupon type**

Retrieve the configuration settings related to promotions and coupons for a specific seller. It provides details of the supported types of coupons and promotions along with their descriptions, examples, and related attributes.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `entity_type` — Entity type as promotion or coupon
- `is_hidden` — Promotion coupon config shown or not

**Responses:** 200
  200 schema: `ActivePromosResult`

---

#### `getPromotionOffers` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/available-promotions`

**List of all available promotion offers**

Retrieve a list of all promotional offers available for the items in the cart, including details such as offer text, unique promotion ID, and validity period.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id *(required)*

**Query params:**
- `slug` — A short, human-readable, URL-friendly identifier of a product. You can get slug 
- `page_size` — Number of offers to be fetched to show
- `promotion_group` — Type of promotion groups
- `store_id` — Unique identifier of a store
- `cart_type` — The type of cart
- `promotion_type` — Type of promotion to be fetched
- `cart_id` — The unique identifier of the user cart.
- `auto_apply` — Indicates whether to filter promotions based on their auto_apply status.

**Responses:** 200, 400
  200 schema: `PromotionOffersDetails`

---

#### `getPromotionPaymentOffers` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/available-payment-offers`

**Fetch available promotions payment offers**

Use this API to get top 5 payment offers available for current product

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — Cart id of the user cart
- `uid` — Cart uid of the user cart

**Responses:** 200, 400
  200 schema: `PromotionPaymentOffersDetails`

---

#### `updateCartMetaConfig` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/cart_configuration/{cart_meta_id}`

**Update cart meta**

Modify the configuration settings for cart metadata associated with a specific sales channel. Cart meta includes configuration settings such as allowed maximum cart value, allowed minimum cart value, maximum allowed cart items, delivery charges, etc.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `cart_meta_id` — CartMeta id for fetching single cart meta data for editing *(required)*

**Request body:** `application/json`
  Schema: `CartMetaConfigUpdate`

**Responses:** 200, 400
  200 schema: `CartMetaConfigUpdate`

---

#### `updatePriceAdjustment` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/price-adjustment/{id}`

**Update price adjustments**

Modify price adjustments for specific items in the cart. By providing the seller ID, sales channel ID, and price adjustment ID, seller can apply discounts or other adjustments to the prices of cart items, facilitating dynamic pricing strategies.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Request body:** `application/json`
  Schema: `PriceAdjustmentUpdate`

**Responses:** 200, 400
  200 schema: `GetPriceAdjustmentResult`

---

#### `removePriceAdjustment` — DELETE `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/price-adjustment/{id}`

**Remove price adjustments**

Remove the applied price adjustments for specific items within the cart based on unique price adjustment ID.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Responses:** 200, 400
  200 schema: `SuccessMessage`

---

#### `addPriceAdjustment` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/price-adjustment`

**Create price adjustments**

Create custom price adjustments for items in the cart, facilitating the application of discounts or promotions. Price adjustments can be tailored based on specific sales channel contexts, enhancing flexibility in pricing strategies.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Request body:** `application/json`
  Schema: `PriceAdjustmentAdd`

**Responses:** 201, 400

---

#### `fetchAndvalidateCartItems` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/cart/validate`

**Get and validate cart items**

Retrieve cart details for a provided list of cart items and validate its contents. This ensures accuracy and completeness in cart information, including item quantities, prices, discounts, and applicable taxes.

**Path params:**
- `company_id` — Unique identifier of the company *(required)*
- `application_id` — Unique identifier of the sales channel application *(required)*

**Request body:** `application/json`
  Schema: `OpenapiCartDetailsCreation`

**Responses:** 200, 400
  200 schema: `OpenapiCartDetailsResult`

---

#### `checkCartServiceability` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/cart/serviceability`

**Check cart serviceability**

Verify the serviceability of items in the cart at a specific pin code and ensure accurate delivery promises. System checks each item's availability and delivery feasibility, providing real-time information on serviceability and estimated delivery times.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Request body:** `application/json`
  Schema: `OpenApiCartServiceabilityCreation`

**Responses:** 200
  200 schema: `OpenApiCartServiceabilityResult`

---

#### `checkoutCart` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/cart/checkout`

**Headless Checkout**

The checkout cart initiates the order creation process based on the selected address and payment method. It revalidates the cart details to ensure safe and seamless order placement.

**Path params:**
- `company_id` — Unique identifier of the company for which the cart checkout is being performed. *(required)*
- `application_id` — Unique identifier for the sales channel application *(required)*

**Request body:** `application/json`
  Schema: `OpenApiPlatformCheckoutReq`

**Responses:** 200, 400
  200 schema: `OpenApiCheckoutResult`

---

#### `getAbandonedCart` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/abandoned/carts`

**Get abandoned carts**

Retrieve the list of abandoned carts that have been active for the specified period of time and have not yet been archived for the specific sales channel.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `page_no` —  (default: 0)
- `page_size` —  (default: 10)
- `from_date` — 
- `to_date` — 
- `anonymous_cart` — 
- `last_id` — 
- `sort_on` — 

**Responses:** 200
  200 schema: `AbandonedCartResult`

---

#### `getAbandonedCartDetails` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/abandoned/cart/detail`

**Get abandoned cart details**

Retrieves abandoned cart details linked to a specific customer using a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — 
- `i` — 
- `b` — 
- `c` — 

**Responses:** 200
  200 schema: `CartDetailResult`

---

#### `addItems` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/abandoned/carts/{cart_id}`

**Add items to cart**

Add product items to the customer's existing shopping cart. If there is no existing cart associated with the customer, it creates a new one and adds the items to it.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `cart_id` — Current Cart id of user cart *(required)*

**Query params:**
- `b` — 

**Request body:** `application/json`
  Schema: `AddCartCreation`

**Responses:** 200
  200 schema: `AddCartDetailResult`

---

#### `updateCart` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/abandoned/carts/{cart_id}`

**Update cart items**

Customers can modify added product attributes such as quantity and size, as well as remove items from the cart.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `cart_id` — Current Cart id of user cart *(required)*

**Query params:**
- `b` — 

**Request body:** `application/json`
  Schema: `UpdateCartCreation`

**Responses:** 200
  200 schema: `UpdateCartDetailResult`

---

#### `getCouponOptionValues` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/coupon_options`

**Get coupon option values**

Retrieves the available values for coupon options used to create and update coupons.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Responses:** 200

---

#### `getCouponCodeExists` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/coupon_code_exists`

**Check coupon code exists**

Validates the presence of a coupon code for the specified sales channel to verify whether the provided code already exists or not.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `code` — 

**Responses:** 200, 400

---

#### `getPromotionCodeExists` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/promotion_code_exists`

**Check promotion code exists**

Validates the presence of a promotion code for the specified sales channel to verify whether the provided code already exists or not.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `code` — 

**Responses:** 200, 400

---

#### `overrideCart` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/checkout/over-ride`

**Update cart checkout**

Overrides the cart's checkout process with a new provided cart items. It provides flexibility in customizing checkout flows to meet specific business requirements, enhancing the user experience and optimizing order processing workflows.

**Path params:**
- `company_id` — Unique identifier of the company *(required)*
- `application_id` — Unique identifier of the sales channel application *(required)*

**Request body:** `application/json`
  Schema: `OverrideCheckoutReq`

**Responses:** 200
  200 schema: `OverrideCheckoutResult`

---

#### `getCartSharedItems` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/share-cart/{token}`

**List shared cart items**

Retrieve the cart items from the shared cart link based on unique token.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `token` — Token of the shared short link *(required)*

**Responses:** 200, 404
  200 schema: `SharedCartResult`

---

#### `updateCartWithSharedItems` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/share-cart/{token}/{action}`

**Update shared cart items**

Customer can either merge or replace shared cart items with existing cart.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `token` — Token of the shared short link *(required)*
- `action` — Operation to perform on the existing cart merge or replace. *(required)*

**Query params:**
- `cart_id` — 

**Responses:** 200
  200 schema: `SharedCartResult`

---

#### `getCartList` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/cart-list`

**List of carts**

Retrieve the list of active carts associated with a specific customer.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `from_date` — 
- `to_date` — 
- `filter_on` — 

**Responses:** 200
  200 schema: `MultiCartResult`

---

#### `updateCartUser` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/update-user`

**Update user of a cart**

Modify the cart user to a new valid customer for the provided customer ID.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — 

**Request body:** `application/json`
  Schema: `UpdateUserCartMapping`

**Responses:** 200
  200 schema: `UserCartMappingResult`

---

#### `getCart` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/detail`

**Get a cart**

Retrieve details of a cart linked to a specific customer using either the customer's ID or a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — The unique identifier of the cart
- `user_id` — Option to fetch cart for the provided user_id.
- `order_type` — The order type of shipment HomeDelivery - If the customer wants the order home-d
- `i` — This is a boolean value. Select `true` to retrieve all the items added in the ca
- `b` — This is a boolean value. Select `true` to retrieve the price breakup of cart ite
- `assign_card_id` — Token of user's debit or credit card
- `buy_now` — This is a boolen value. Select `true` to set/initialize buy now cart

**Responses:** 200, 400
  200 schema: `CartDetailResult`

---

#### `platformAddItems` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/detail`

**Add items to cart**

Adds product items to a customer's shopping cart. If the customer does not have an existing cart, a new one is created automatically. - The `new_cart` flag forces creation of a new cart even if one already exists. - The `default_cart` flag determines whether the item is added to the user's default s

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `i` — This is a boolean value. Select `true` to retrieve all the items added in the ca
- `b` — This is a boolean value. Select `true` to retrieve the price breakup of cart ite
- `include_cart_calculation` — Set to `false` to skip recalculating and fetching the updated cart after the edi
- `buy_now` — This is a boolen value. Select `true` to set/initialize buy now cart
- `order_type` — The order type of shipment HomeDelivery - If the customer wants the order home-d
- `id` — The unique identifier of the cart

**Request body:** `application/json`
  Schema: `PlatformAddCartDetails`

**Responses:** 200
  200 schema: `AddCartDetailResult`

---

#### `deleteCart` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/cart_archive`

**Delete a cart**

Delete all items from the user's cart and resets it to its initial state, providing a clean slate for new selections.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — The unique identifier of the cart.

**Request body:** `application/json`
  Schema: `DeleteCartDetails`

**Responses:** 200
  200 schema: `DeleteCartDetailResult`

---

#### `getItemCount` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/basic`

**Get a cart items count**

Retrieve the total count of items currently present in the customer's cart.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — The unique identifier of the cart.
- `buy_now` — Boolean value to get buy_now cart.

**Responses:** 200
  200 schema: `CartItemCountResult`

---

#### `getAppCoupons` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/platform-pos-coupon`

**List of coupons**

Retrieve a list of all available coupons that customer can apply to their carts. It provides details about each coupon, including its code, discount amount, and applicable conditions.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — 
- `buy_now` — 
- `slug` — 
- `store_id` — 

**Responses:** 200
  200 schema: `GetCouponResult`

---

#### `applyCoupon` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/platform-pos-coupon`

**Apply coupon**

Apply a coupon code to the customer's cart to trigger discounts on eligible items

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `i` — 
- `b` — 
- `p` — 
- `id` — 
- `buy_now` — 

**Request body:** `application/json`
  Schema: `ApplyCouponDetails`

**Responses:** 201

---

#### `removeCoupon` — DELETE `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/platform-pos-coupon`

**Remove coupon**

Remove an applied coupon from the customer's cart, thereby removing the associated discount from the cart total.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `uid` — 
- `buy_now` — 

**Responses:** 200
  200 schema: `CartDetailResult`

---

#### `addAddress` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/address`

**Creates a new address for a customer**

Customers can add a new address to their cart to save details such as name, email, contact information, and address.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Request body:** `application/json`
  Schema: `PlatformAddress`

**Responses:** 200, 400, 422
  200 schema: `SaveAddressDetails`

---

#### `updateAddress` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/address/{id}`

**Updates an existing customer address**

Update the user address

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` — ID allotted to the selected address *(required)*

**Request body:** `application/json`
  Schema: `PlatformAddress`

**Responses:** 201, 400

---

#### `removeAddress` — DELETE `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/address/{id}`

**Removes an address from a customer's address list**

Remove an existing customer address from the system.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` — ID allotted to the selected address *(required)*

**Query params:**
- `user_id` — Option to delete address for the provided user_id.

**Responses:** 201, 400

---

#### `updateShipments` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/shipment`

**Update shipments**

Update the quantity or delivery type of the shipments. Customers can switch the order type from Home Delivery to Pick At Store and vice versa.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `i` — This is a boolean value. Select `true` to retrieve all the items added in the ca
- `p` — This is a boolean value. Select `true` for getting a payment option in response.
- `id` — The unique identifier of the cart
- `address_id` — ID allotted to an address
- `area_code` — The PIN Code of the destination address, e.g. 400059
- `order_type` — The order type of shipment HomeDelivery - If the customer wants the order home-d

**Request body:** `application/json`
  Schema: `UpdateCartShipmentCreation`

**Responses:** 200
  200 schema: `PlatformCartShipmentsResult`

---

#### `updateCartMeta` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/meta`

**Update cart metadata**

Add or modify metadata associated with a cart, which includes customer preferences, delivery instructions, or any special requirements related to the cart items.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — 
- `buy_now` — 

**Request body:** `application/json`
  Schema: `PlatformCartMetaCreation`

**Responses:** 200, 400
  200 schema: `CartMetaDetails`

---

#### `platformCheckoutCart` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/checkout`

**Checkout cart**

The checkout cart initiates the order creation process based on the selected address and payment method. It revalidates the cart details to ensure safe and seamless order placement.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application _id *(required)*

**Query params:**
- `id` — The unique identifier of the cart

**Request body:** `application/json`
  Schema: `PlatformCartCheckoutDetailCreation`

**Responses:** 200
  200 schema: `CartCheckoutResult`

---

#### `getAvailableDeliveryModes` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/available-delivery-mode`

**Get delivery modes**

Retrieve a list of delivery modes (home delivery/store pickup) along with a list of available pickup stores for a given cart at a specified PIN Code.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `area_code` —  *(required)*
- `id` — 

**Responses:** 200
  200 schema: `CartDeliveryModesDetails`

---

#### `getStoreAddressByUid` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/store-address`

**Get Store Address**

Retrieve store details by entering the unique identifier of the pickup stores. Store details include the seller's name, contact information such as email address or phone number and business address.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `store_uid` —  *(required)*

**Responses:** 200
  200 schema: `StoreDetails`

---

#### `selectPaymentMode` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/payment`

**Select payment mode**

Customers can select a preferred payment mode from available options during the cart checkout process to securely and efficiently complete their transaction.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — 
- `buy_now` — 
- `order_type` — 

**Request body:** `application/json`
  Schema: `CartPaymentUpdate`

**Responses:** 200
  200 schema: `CartDetailResult`

---

#### `validateCouponForPayment` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/payment/validate/`

**Validate applied coupon**

Validates the applicability of a coupon code for the selected payment mode for the existing cart. This ensures the coupon's validity before proceeding with the payment process, enhancing user experience and preventing potential errors during transactions.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — 
- `buy_now` — 
- `address_id` — 
- `payment_mode` — 
- `payment_identifier` — 
- `aggregator_name` — 
- `merchant_code` — 

**Responses:** 200
  200 schema: `PaymentCouponValidate`

---

#### `platformCheckoutCartV2` — POST `/service/platform/cart/v2.0/company/{company_id}/application/{application_id}/checkout`

**Checkout cart**

The checkout cart initiates the order creation process based on the items in the user’s cart, their selected address, and chosen payment methods. It also supports multiple payment method options and revalidates the cart details to ensure a secure and seamless order placement.

**Path params:**
- `company_id` — Unique identifier of the company *(required)*
- `application_id` — Unique identifier for the sales channel application *(required)*

**Query params:**
- `id` — Unique identifier of the cart

**Request body:** `application/json`
  Schema: `PlatformCartCheckoutDetailV2Creation`

**Responses:** 200, 400
  200 schema: `CartCheckoutDetails`

---

#### `selectPaymentModeV2` — PUT `/service/platform/cart/v2.0/company/{company_id}/application/{application_id}/payment`

**Select payment mode (latest)**

Selection of payment mode that supports multiple MOP(mode of payment).

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — 
- `buy_now` — 
- `order_type` — 

**Request body:** `application/json`
  Schema: `UpdateCartPaymentRequestV2`

**Responses:** 200, 400
  200 schema: `CartDetailResult`

---

#### `applyLoyaltyPoints` — POST `/service/platform/cart/v2.0/company/{company_id}/application/{application_id}/redeem`

**Redeem loyalty points.**

Users can redeem their accumulated loyalty points and apply them to the items in their cart, thereby availing discounts on their current purchases.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `id` — The unique identifier of the cart.
- `i` — Select `true` to retrieve all the items added in the cart.
- `b` — Select `true` to retrieve the price breakup of cart items.
- `buy_now` — This is boolean to get buy_now cart.

**Request body:** `application/json`
  Schema: `RedeemLoyaltyPoints`

**Responses:** 200
  200 schema: `CartDetailResult`

---

### Offer

#### `getOffers` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/offers`

**List of offers**

Retrieve a list of all created offers for specific sales channel. It also supports efficient text search and pagination functionalities, ensuring optimized offers listing for streamlined navigation and management.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `page_no` — Current page no as per pagination (default: 1)
- `page_size` — Offers max records fetched in single request (default: 10)
- `search` — Filter by offer name
- `mode` — Filter by offer mode
- `type` — Filter by offer type
- `promo_group` — 
- `exclude_contract_offers` — Filter non contract offers
- `offer_id` — Filter by offer id
- *(+ 7 more query params)*

**Responses:** 200
  200 schema: `OfferListResult`

---

#### `createOffer` — POST `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/offers`

**Create an offer**

Creates a new offer based on the selected offer type. Sellers can choose from multiple supported offer types, including percentage value, fixed amount value, bundled discount, buy X get Y items, and more, along with customizable offer criteria to meet specific business requirements.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Request body:** `application/json`
  Schema: `OfferSchema`

**Responses:** 201, 400

---

#### `getOfferById` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/offers/{id}`

**Get a specific offer**

Retrieve details of a specific offer by providing its unique identifier to obtain information such as offer type, rules, validity period and other related information.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `OfferSchema`

---

#### `updateOffer` — PUT `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/offers/{id}`

**Update existing offer**

Update the details of an existing offer by specifying its unique identifier. This includes modifying offer attributes such as discount percentage, validity period, and associated conditions.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Request body:** `application/json`
  Schema: `OfferSchema`

**Responses:** 200, 404
  200 schema: `OfferSchema`

---

#### `updateOfferPartially` — PATCH `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/offers/{id}`

**Partially update offer**

Seller can make partial adjustments of an existing offer by specifying its unique identifier. It enables businesses to modify specific attributes of the offer while preserving other details intact.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Request body:** `application/json`
  Schema: `OfferPartialUpdate`

**Responses:** 200, 404
  200 schema: `SuccessMessage`

---

#### `deleteOffer` — DELETE `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/offers/{id}`

**Delete draft offer**

Delete details of a draft offer by providing its unique identifier to delete information such as offer type, rules, validity period and other related information.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*
- `id` —  *(required)*

**Responses:** 200, 404
  200 schema: `SuccessMessage`

---

### Price Adjustment configuration

#### `getPriceAdjustments` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/price-adjustment`

**Get a list of all price adjustments associated with a cart**

This API helps to get price adjustments data associated to a particular cart

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `cart_id` — Cart id of user cart *(required)*

**Responses:** 200
  200 schema: `GetPriceAdjustmentResult`

---

### Review & Checkout

#### `getShipments` — GET `/service/platform/cart/v1.0/company/{company_id}/application/{application_id}/shipment`

**Get shipments details**

Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.

**Path params:**
- `company_id` — Current company id *(required)*
- `application_id` — Current Application id of sales channel *(required)*

**Query params:**
- `pick_at_store_uid` — 
- `ordering_store_id` — 
- `i` — This is a boolean value. Select `true` to retrieve all the items added in the ca
- `p` — This is a boolean value. Select `true` for getting a payment option in response.
- `id` — The unique identifier of the cart
- `address_id` — ID allotted to the selected address
- `area_code` — The PIN Code of the destination address, e.g. 400059
- `order_type` — The order type of shipment HomeDelivery - If the customer wants the order home-d

**Responses:** 200
  200 schema: `PlatformCartShipmentsResult`

---

