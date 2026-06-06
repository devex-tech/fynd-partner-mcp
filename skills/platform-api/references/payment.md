# Payment

**SDK Class:** `Payment`  
**Total operations:** 54

## Groups

- **Payment link**: Payment link is a URL or hyperlink that directs users to a webpage where they can make a payment for their products. It'
- **Payment Gateway Configuration**: Manage the configuration of payment gateways and payout settings for your brand or business. You can retrieve the curren
- **Payout**: Payout refers to the process of disbursing funds to sellers or vendors for products or services sold through the platfor
- **Subscription Payment**: Manage subscription-related payment methods and configurations. Retrieve subscription payment methods, delete payment me
- **Refund**: A bank account for refund with IFSC code verification and secure OTP-based addition is a feature that allows customers t
- **Cash on Delivery**: Cash on Delivery (COD) refers to a payment method where customers have the option to pay for their purchases with cash a
- **EDC Device**: An Electronic Data Capture (EDC) device, also known as a card machine, card reader, or POS (Point of Sale) terminal, is 
- **POS Payment**: Efficiently manage Point of Sale (POS) payment modes and sessions, enabling seamless processing of payment initiation re
- **Payment gateway token**: Manage OAuth tokens. Obtain OAuth authorization URLs for authentication and revoke OAuth tokens when necessary.
- **Paylater**: PayLater, also known as "Buy Now, Pay Later" (BNPL), is a payment method that allows customers to make purchases and def
- **Seller payment mode**: Seller payment mode refers to the specific payment methods accepted by a seller for processing transactions. These payme
- **Aggregator**: Aggregator Configuration involves the setup and customization of payment aggregation services provided by a payment aggr
- **Payment**: Payment system refers to the mechanism by which customers can securely and conveniently pay for the products or services

## Operations by Group

### General

#### `getBrandPaymentGatewayConfig` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/aggregator/request`

**Get secrets for brand payment gateway**

Retrieve configuration settings like key, secret, webhook url, merchant salt for brand payment gateways.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Query params:**
- `aggregator` — aggregator slug *(required)*
- `config_type` — 

**Responses:** 200, 400
  200 schema: `PaymentGatewayConfigDetails`

---

#### `saveBrandPaymentGatewayConfig` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/aggregator/request`

**Save brand payment gateway config**

Store and update configuration settings for brand payment gateways i.e required for payment for a payment gateway like key, secret, merchant salt.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `PaymentGatewayConfigCreation`

**Responses:** 200, 400
  200 schema: `PaymentGatewayToBeReviewed`

---

#### `getPaymentModeRoutes` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options`

**Get payment modes**

Get available payment methods on the payment page, specifying the aggregator for each option, such as 'Netbanking powered by Juspay' and 'Card powered by Razorpay'.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Query params:**
- `refresh` — Flag to refresh the cache and retrieve the updated payment option
- `request_type` — type of payment request, i.e. self
- `order_id` — order id for the payment
- `shipment_id` — shipment id for the payment
- `amount` — amount for the payment

**Responses:** 200, 400
  200 schema: `PaymentOptionsDetails`

---

#### `getAllPayouts` — GET `/service/platform/payment/v1.0/company/{company_id}/payouts`

**List payouts**

Retrieve a list of all payout transactions.

**Path params:**
- `company_id` — Company Id *(required)*

**Query params:**
- `unique_external_id` — Fetch payouts using unique external id

**Responses:** 200, 400
  200 schema: `PayoutsDetails`

---

#### `savePayout` — POST `/service/platform/payment/v1.0/company/{company_id}/payouts`

**Save payout**

Store and process a payout transaction.

**Path params:**
- `company_id` — Company Id *(required)*

**Request body:** `application/json`
  Schema: `PayoutCreation`

**Responses:** 200, 400
  200 schema: `PayoutDetails`

---

#### `updatePayout` — PUT `/service/platform/payment/v1.0/company/{company_id}/payouts/{unique_transfer_no}`

**Update payout**

Modify the details of a payout transaction.

**Path params:**
- `company_id` — Company Id *(required)*
- `unique_transfer_no` — Unique transfer id *(required)*

**Request body:** `application/json`
  Schema: `PayoutCreation`

**Responses:** 200, 400
  200 schema: `UpdatePayoutDetails`

---

#### `activateAndDectivatePayout` — PATCH `/service/platform/payment/v1.0/company/{company_id}/payouts/{unique_transfer_no}`

**Activate/Deactivate payout**

Enable or disable payout functionality.

**Path params:**
- `company_id` — Company Id *(required)*
- `unique_transfer_no` — Unique transfer id *(required)*

**Request body:** `application/json`
  Schema: `UpdatePayoutCreation`

**Responses:** 200, 400
  200 schema: `UpdatePayoutDetails`

---

#### `deletePayout` — DELETE `/service/platform/payment/v1.0/company/{company_id}/payouts/{unique_transfer_no}`

**Delete payout**

Remove a payout transaction from the system.

**Path params:**
- `company_id` — Company Id *(required)*
- `unique_transfer_no` — Unique transfer id *(required)*

**Responses:** 200, 400
  200 schema: `DeletePayoutDetails`

---

#### `getSubscriptionPaymentMethod` — GET `/service/platform/payment/v1.0/company/{company_id}/subscription/methods`

**Get subscription payment method**

Retrieve payment methods for subscriptions.

**Path params:**
- `company_id` — Company Id *(required)*

**Query params:**
- `unique_external_id` — Unique external id

**Responses:** 200, 400
  200 schema: `SubscriptionPaymentMethodDetails`

---

#### `deleteSubscriptionPaymentMethod` — DELETE `/service/platform/payment/v1.0/company/{company_id}/subscription/methods`

**Delete subscription payment method**

Remove a payment method from subscription options.

**Path params:**
- `company_id` — Company Id *(required)*

**Query params:**
- `unique_external_id` —  *(required)*
- `payment_method_id` —  *(required)*

**Responses:** 200
  200 schema: `DeleteSubscriptionPaymentMethodDetails`

---

#### `getSubscriptionConfig` — GET `/service/platform/payment/v1.0/company/{company_id}/subscription/configs`

**Get subscription config**

Retrieve configuration settings for subscriptions.

**Path params:**
- `company_id` — Company Id *(required)*

**Responses:** 200, 400
  200 schema: `SubscriptionConfigDetails`

---

#### `saveSubscriptionSetupIntent` — POST `/service/platform/payment/v1.0/company/{company_id}/subscription/setup/intent`

**Save subscription setup intent**

Store and process setup intent for subscriptions.

**Path params:**
- `company_id` — Company Id *(required)*

**Request body:** `application/json`
  Schema: `SaveSubscriptionSetupIntentCreation`

**Responses:** 200, 400
  200 schema: `SaveSubscriptionSetupIntentDetails`

---

#### `getBankAccountDetailsOpenAPI` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/refund/account`

**Get bank account details**

Retrieve bank account information 

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Query params:**
- `order_id` —  *(required)*
- `request_hash` — 

**Responses:** 200, 400
  200 schema: `RefundAccountDetails`

---

#### `addRefundBankAccountUsingOTP` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/refund/account`

**Create refund account**

The addition of a bank account specifically for refunds, employing OTP verification for security

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `AddBeneficiaryDetailsOTPCreation`

**Responses:** 200, 400
  200 schema: `RefundAccountDetails`

---

#### `verifyIfscCode` — GET `/service/platform/payment/v1.0/company/{company_id}/ifsc-code/verify`

**Verify IFSC code**

Checks the validity of the provided IFSC code and returns bank details if valid.

**Path params:**
- `company_id` — Company Id *(required)*

**Query params:**
- `ifsc_code` —  *(required)*

**Responses:** 200, 400
  200 schema: `IfscCodeDetails`

---

#### `getUserOrderBeneficiaries` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/refund/accounts/order`

**Get user order beneficiaries**

Retrieve beneficiary details like bank name , ifsc code , branch name associated with a specific order for refund processing 

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Query params:**
- `order_id` —  *(required)*

**Responses:** 200, 400
  200 schema: `OrderBeneficiaryFetchResults`

---

#### `getUserBeneficiaries` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/refund/accounts/user`

**Get user beneficiaries**

Retrieves information about beneficiaries associated with the user for processing refunds, based on the provided order ID

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Query params:**
- `order_id` —  *(required)*

**Responses:** 200, 400
  200 schema: `OrderBeneficiaryFetchResults`

---

#### `confirmPayment` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/confirm`

**Payment confirmation**

Authentication and confirmation of a payment.It requires details such as the order ID and payment methods in the request body to authenticate and confirm the payment.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `PaymentConfirmationCreation`

**Responses:** 200, 400
  200 schema: `PaymentConfirmationDetails`

---

#### `getUserCODlimitRoutes` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/user-cod`

**Get user COD **

Retrieve user cod limt data of user i.e cod is active or not for user and remaining limit 

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Query params:**
- `merchant_user_id` —  *(required)*
- `mobile_no` —  *(required)*

**Responses:** 200, 400
  200 schema: `GetUserCODLimitDetails`

---

#### `setUserCODlimitRoutes` — PUT `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/user-cod`

**Set user COD**

This allows access to seller to enable disable cod of specific user

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `SetCODForUserCreation`

**Responses:** 200, 400
  200 schema: `SetCODOptionDetails`

---

#### `getPosPaymentModeRoutes` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/pos`

**List POS payment modes**

Available payment methods on the payment page for POS, specifying the aggregator for each option, such as 'CARD powered by Juspay' and 'QR powered by Razorpay'.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Query params:**
- `amount` — Payable amount. *(required)*
- `cart_id` — Identifier of the cart.
- `pincode` — The PIN Code of the destination address, e.g. 400059 *(required)*
- `checkout_mode` — Option to checkout for self or for others.
- `refresh` — This is a boolean value. Select `true` to remove temporary cache files on paymen
- `order_id` — 
- `card_reference` — Card reference id of user's debit or credit card.
- `order_type` — The order type of shipment * HomeDelivery - If the customer wants the order home *(required)*
- *(+ 5 more query params)*

**Responses:** 200, 400
  200 schema: `PaymentModeRouteDetails`

---

#### `initialisePayment` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/request`

**Start payment process**

Initiates the payment procedure for an order.Upon successful initiation, it returns a  details including the success status, aggregator information, payment method, status, merchant order ID aggregator order , polling URL, timeout, virtual ID, Razorpay payment ID, customer ID, and device ID.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `PaymentInitializationCreation`

**Responses:** 200, 400
  200 schema: `PaymentInitializationDetails`

---

#### `checkAndUpdatePaymentStatus` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/confirm/polling`

**Poll and update payment status**

Polling process to confirm the payment status. It periodically checks and updates the current status of a payment, ensuring timely and accurate confirmation of payment transactions.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `PaymentStatusUpdateCreation`

**Responses:** 200, 400
  200 schema: `PaymentStatusUpdateDetails`

---

#### `resendOrCancelPayment` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/cancel`

**Resend or cancel payment**

Enable you to perform actions related to the resending and cancellation of payment links through SMS or EMAIL. resend or cancel payment link that have been initiated but may require modification or cancellation for various reasons, ensuring flexibility and control in payment processing.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `ResendOrCancelPaymentCreation`

**Responses:** 200, 400
  200 schema: `ResendOrCancelPaymentDetails`

---

#### `paymentStatusBulk` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/payment-status-bulk/`

**Retrieve status of multiple payments in bulk**

Retrieve status of multiple payments in bulk and returns the status of each payment along with associated details such as payment ID, amount, currency, status, payment mode, and payment gateway in the response

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `PaymentStatusBulkHandlerCreation`

**Responses:** 200, 400
  200 schema: `PaymentStatusBulkHandlerDetails`

---

#### `oauthGetUrl` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/onboard/{aggregator}/`

**Get OAuth URL**

This has been used when merchant is setup their razorpay payment gateway, they will redirect to razorpay site after submitting all their secrets for authetication.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `aggregator` — aggregator *(required)*

**Query params:**
- `success_redirect_url` — 
- `failure_redirect_url` — 

**Responses:** 200, 400
  200 schema: `GetOauthUrlDetails`

---

#### `revokeOauthToken` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/revoke/{aggregator}/`

**Revoke OAuth token**

Revoke the creds  for payment aggregator razropay.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `aggregator` — aggregator_slug *(required)*

**Responses:** 200, 400
  200 schema: `RevokeOAuthToken`

---

#### `verifyCustomerForPayment` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/customer/validation`

**Validate customer for paylater**

Verify whether the user is eligible for pay-later payment from the payment aggregator's side using the customer's phone number

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `ValidateCustomerCreation`

**Responses:** 200, 400
  200 schema: `ValidateCustomerDetails`

---

#### `getPaymentLink` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/create-payment-link/`

**Get payment link**

Retrieve a payment link for making payments.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Query params:**
- `payment_link_id` —  *(required)*

**Responses:** 200, 400
  200 schema: `GetPaymentLinkDetails`

---

#### `createPaymentLink` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/create-payment-link/`

**Create payment link**

Generate a payment link for accepting payments.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `CreatePaymentLinkCreation`

**Responses:** 200, 400
  200 schema: `CreatePaymentLinkDetails`

---

#### `pollingPaymentLink` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/polling-payment-link/`

**Poll status of payment link**

Periodically checks the status of a payment link to monitor for any updates or changes.retrieve real-time information about the payment link's current status, such as whether it has been processed, cancelled, or expired. 

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Query params:**
- `payment_link_id` —  *(required)*

**Responses:** 200, 400
  200 schema: `PollingPaymentLinkDetails`

---

#### `resendPaymentLink` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/resend-payment-link/`

**Resend payment link**

Resends an existing payment link to the user to complete the payment.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `CancelOrResendPaymentLinkCreation`

**Responses:** 200, 400
  200 schema: `ResendPaymentLinkDetails`

---

#### `cancelPaymentLink` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/cancel-payment-link/`

**Cancel payment link**

Deactivate and cancel a payment link.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `CancelOrResendPaymentLinkCreation`

**Responses:** 200, 400
  200 schema: `CancelPaymentLinkDetails`

---

#### `getPaymentCodeOption` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/codes`

**Get payment mode codes**

Enables users to retrieve options for payment codes.users can access information such as payment method names, networks, and associated codes, facilitating seamless integration and management of payment modes

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Responses:** 200, 400
  200 schema: `GetPaymentCodeDetails`

---

#### `updatePaymentSession` — PUT `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/session/{gid}`

**Update payment session **

Update the details of a payment session associated with a given order ID or transaction ID.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `gid` — global identifier of the entity (e.g. order, cart etc.) against which payment_se *(required)*

**Request body:** `application/json`
  Schema: `PaymentSessionCreation`

**Responses:** 200, 400
  200 schema: `PaymentSessionPutDetails`

---

#### `updateRefundSession` — PUT `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/{gid}/refund/session/{request_id}`

**Update refund session**

Allows users to update the details of a refund session associated with a specific global identifier (GID) and request ID.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `gid` — global identifier of the entity (e.g. order, cart etc.) against which payment_se *(required)*
- `request_id` — A unique id that was used to initiate a refund session. This is generated by Fyn *(required)*

**Request body:** `application/json`
  Schema: `RefundSessionCreation`

**Responses:** 200, 400
  200 schema: `RefundSessionDetails`

---

#### `getMerchantPaymentOption` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/configuration`

**Get merchant payment option**

Retrieve available payment gateways and offline payment mode details for a merchant by providing company ID and application ID, returning a list of active payment gateways and their configurations, including online and offline options.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Responses:** 200, 400
  200 schema: `PlatformPaymentModeDetails`

---

#### `patchMerchantPaymentOption` — PATCH `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/configuration`

**Update payment gateways and payment mode**

Updated online/offline payment as active/inactive like disable offline payment mode will disable offline payment modes on checkout page on merchant's website

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `MerchnatPaymentModeCreation`

**Responses:** 200, 400
  200 schema: `PlatformPaymentModeDetails`

---

#### `getMerchantAggregatorPaymentModeDetails` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/aggregators/{aggregator_id}`

**Get merchant aggregator and their payment mode**

Get available payment gateways and payment mode and it's sub payment mode details like for razorpay their active/inactive payment modes netbanking , wallet, upi are shown. 

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `aggregator_id` — Aggregators Id *(required)*

**Query params:**
- `business_unit` —  *(required)*
- `device` —  *(required)*

**Responses:** 200, 400
  200 schema: `PaymentModeConfig`

---

#### `patchMerchantAggregatorPaymentModeDetails` — PATCH `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/aggregators/{aggregator_id}`

**Update merchant aggregator payment mode**

update payment gateway and it's payment mode and it's sub payment mode details like for razorpay update active/inactive payment modes.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `aggregator_id` — Aggregators Id *(required)*

**Request body:** `application/json`
  Schema: `PlatformConfigPaymentModeDetails`

**Responses:** 200, 400
  200 schema: `PlatformPaymentModeDetails`

---

#### `getPGConfigAggregators` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/configuration/aggregator`

**Get merchant aggregator payment mode**

Get payment gateway and it's payment mode and it's sub payment mode details like for razorpay update active/inactive payment modes.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Responses:** 200, 400
  200 schema: `PlatformPaymentModeDetails`

---

#### `getMerchantRefundPriority` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/refund_priority/config/{config_type}`

**Get merchant refund priority**

Retrieve merchant refund priority configurations, returning the status of the update and the refund sources priority with their descriptions and priorities.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `config_type` — configuration for merchant or customer *(required)*

**Responses:** 200, 400
  200 schema: `RefundPriorityDetails`

---

#### `createMerchantRefundPriority` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/refund_priority/config/{config_type}`

**Create merchant refund priority**

Create merchant refund priority configurations, with the provided refund sources priority details, and return the status of the operation.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `config_type` — configuration for merchant or customer *(required)*

**Request body:** `application/json`
  Schema: `RefundPriorityCreation`

**Responses:** 200, 400
  200 schema: `RefundPriorityDetails`

---

#### `saveTokenForAggregator` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/aggregators/{aggregator_id}/token`

**Save token details for a payment aggregator**

Save token and verification status for a specific payment aggregator, such as Apple Pay or others.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*
- `aggregator_id` — Payment aggregator identifier.
Supported values are:
- **1**: Razorpay
- **2**:  *(required)*

**Request body:** `application/json`
  Schema: `AggregatorToken`

**Responses:** 200, 400
  200 schema: `OperationResponseSchema`

---

### Payment

#### `getPaymentModeControlRoutes` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/modes/{mode}`

**Get offline/advance payment mode**

Get details of offline / advance payment mode like for cod  offline payment mode get user level cod limit, order level cod limit, cod charge.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `mode` — offline / advance  modes to get the payment modes *(required)*

**Responses:** 200, 400
  200 schema: `PlatformPaymentModeDetails`

---

#### `setMerchantModeControlRoutes` — PATCH `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/modes/{mode}`

**Update offline payment mode**

Update offline payment mode details for the merchant like update for cod  offline payment mode get user level cod limit, order level cod limit, cod charge, enable/disable device for cod.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application id *(required)*
- `mode` — offline / advance payment mode *(required)*

**Request body:** `application/json`
  Schema: `MerchantPaymentModeCreation`

**Responses:** 200, 400
  200 schema: `PlatformPaymentModeDetails`

---

#### `getPaymentModeCustomConfig` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/modes/{mode}/custom-config`

**Get advance payment custom configurations **

Merchants to fetch detailed information regarding advance payment custom configurations tailored to their specific business needs. merchants can access settings such as customer restrictions, available payment modes for both pre-order and post-order transactions

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `mode` — offline / advance  mode *(required)*

**Responses:** 200, 400
  200 schema: `PaymentCustomConfigResponseSchema`

---

#### `setPaymentModeCustomConfig` — PATCH `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/modes/{mode}/custom-config`

**Update advance payment custom configurations**

Allows merchants to modify specific details of advance payment custom configurations tailored to their business requirements. By providing the company ID, application ID, and payment mode, merchants can update settings such as minimum order value, customer restrictions, and available payment modes f

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application id *(required)*
- `mode` — offline / advance payment mode *(required)*

**Request body:** `application/json`
  Schema: `PaymentCustomConfigRequestSchema`

**Responses:** 200, 400
  200 schema: `PaymentCustomConfigResponseSchema`

---

#### `getPaymentSession` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/session/{gid}`

**Get payment session**

Allows users to fetch the payment session details associated with a given order ID or transaction ID

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `gid` — global identifier of the entity (e.g. order, cart etc.) against which payment se *(required)*

**Query params:**
- `line-item` — A boolean flag to include detailed cart and line item information in the respons

**Responses:** 200, 400
  200 schema: `PaymentSessionFetchDetails`

---

#### `updateMerchantRefundPriority` — PUT `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/refund_priority/config/{config_type}`

**Update merchant refund priority**

Update merchant refund priority configurations, with the provided refund sources priority details, and return the status of the operation.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `config_type` — configuration for merchant or customer *(required)*

**Request body:** `application/json`
  Schema: `RefundPriorityCreation`

**Responses:** 200, 400
  200 schema: `RefundPriorityDetails`

---

#### `createPaymentOrder` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment-orders/`

**Create Order**

Create an order and payment on the aggregator side

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `PaymentOrderCreation`

**Responses:** 200, 400
  200 schema: `PaymentOrderDetails`

---

#### `getMerchantAggregatorAppVersion` — GET `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/aggregators/{aggregator_id}/version`

**Get app version for  Aggregator**

Get app version required for Payment Mode or sub payment mode for an Aggregator.if merchant required any PG payment mode after certain version for mobile app.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `aggregator_id` — Aggregators Id *(required)*

**Query params:**
- `business_unit` —  *(required)*
- `device` —  *(required)*
- `payment_mode_id` — 
- `sub_payment_mode` — 

**Responses:** 200, 400
  200 schema: `AggregatorVersionDetails`

---

#### `patchMerchantPaymentOptionVersion` — PATCH `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options/aggregators/{aggregator_id}/version`

**Update app version for Aggrgator**

Update app version required for Payment Mode or sub payment mode for an Aggregator.if merchant required any PG payment mode after certain version for mobile app.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*
- `aggregator_id` — Aggregators Id *(required)*

**Request body:** `application/json`
  Schema: `PatchAggregatorControl`

**Responses:** 200, 400
  200 schema: `PlatformPaymentModeDetails`

---

#### `validateCustomerAndCreditSummary` — POST `/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/validate/customer-credits`

**Verify payment customer and show credit summary**

Verify if the user is eligible for payment and also show credit summary if activated.

**Path params:**
- `company_id` — Company Id *(required)*
- `application_id` — Application id *(required)*

**Request body:** `application/json`
  Schema: `CustomerValidationSchema`

**Responses:** 200, 400
  200 schema: `ValidateCustomerCreditSchema`

---

