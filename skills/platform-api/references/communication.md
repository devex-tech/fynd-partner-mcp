# Communication

**SDK Class:** `Communication`  
**Total operations:** 62

## Groups

- **Audience**: An audience is dataset that primiraily consists of records containing contact details of customers. This dataset can con
- **Provider**: To send communications to your customers, you'll require a messaging service provider. 

With this provider resource, yo
- **Campaign**: Campaigns are used to send message or content in the form of email or SMS message text to large number of people. These 
- **Email Template**: To send a email communication to your customer you need a email template.

A email template consists of a template defin
- **SMS Template**: To send a SMS communication to your customer you need a SMS template.

A SMS template consists of a template definition,
- **Synchronous Communication**: When you want to communicate with your customers, you can either send the message right away in real-time or in asynchro
- **Asynchronous Communication**: When you want to communicate with your customers, you can either send the message right away in real-time or or in async
- **System Notifications**: Notification are the important alerts that appear on top right corner of the platform.
These will generally display any 
- **OTP**: One time passwords(OTP) are an easy an secure way to authenticate customers.

OTP is a secret codeword which is randomly
- **Events**: An Event is a specific scenario that is responsible for dispatching certain actions. An event occurs when ertain conditi
- **Global Variables**: Variables are used in email and sms templates to make them dynamic and tailored to customer. There are variables that ar
- **Reports**: Communication Reports are records that provide information about all the communications across a sales channel.

A repor

## Operations by Group

### General

#### `getAppProviders` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/app-provider/get-provider`

**Get application providers**

Retrieve a list of providers associated with the sales channel.

**Responses:** 200
  200 schema: `AppProvider`

---

#### `updateAppProviders` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/app-provider/update-provider`

**Update application providers**

Modify provider configuration using provider object id.

**Request body:** `application/json`
  Schema: `AppProviderReq`

**Responses:** 200
  200 schema: `AppProvider`

---

#### `getGlobalProviders` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/app-provider/global-providers`

**Get global providers**

Retrieve a list of global communication providers associated with the sales channel..

**Responses:** 200
  200 schema: `GlobalProviders`

---

#### `getEmailProviders` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/providers`

**Get all email providers**

Retrieves a list of all email communication providers associated with the sales channel..

**Responses:** 200
  200 schema: `EmailProviders`

---

#### `createEmailProvider` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/providers`

**Create an email provider**

Creates a new email communication provider.

**Request body:** `application/json`
  Schema: `EmailProviderReq`

**Responses:** 200
  200 schema: `EmailProvider`

---

#### `getEmailProviderById` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/providers/{id}`

**Get a email provider**

Retrieves detailed information about a specific email communication provider.

**Responses:** 200, 404
  200 schema: `EmailProvider`

---

#### `updateEmailProviderById` — PUT `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/providers/{id}`

**Update email provider**

Modifys the configurations of a specific email communication provider.

**Request body:** `application/json`
  Schema: `EmailProviderReq`

**Responses:** 200, 404
  200 schema: `EmailProvider`

---

#### `deleteEmailProviderById` — DELETE `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/providers/{id}`

**Delete an email provider**

Removes a specific email communication provider from the platform permenantly.

**Responses:** 200, 400, 404
  200 schema: `GenericDelete`

---

#### `getSmsProviders` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/providers`

**Get all SMS providers**

Retrieves a list of SMS communication providers.

**Responses:** 200

---

#### `createSmsProvider` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/providers`

**Create SMS provider**

Creates a new SMS communication provider.

**Request body:** `application/json`
  Schema: `SmsProviderReq`

**Responses:** 200

---

#### `getDefaultSmsProviders` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/default-providers`

**Get all default SMS providers**

Retrieve all the default SMS communication providers.

**Responses:** 200

---

#### `getSmsProviderById` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/providers/{id}`

**Get a SMS provider**

Retrieve detailed information about a specific SMS communication provider.

**Responses:** 200, 404

---

#### `updateSmsProviderById` — PUT `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/providers/{id}`

**Update SMS provider**

Modifys the configurations of a specific SMS communication provider.

**Request body:** `application/json`
  Schema: `SmsProviderReq`

**Responses:** 200, 404

---

#### `deleteSmsProviderById` — DELETE `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/providers/{id}`

**Delete an SMS provider**

Removes a specific SMS communication provider from the platform permenantly.

**Responses:** 200, 400, 404
  200 schema: `GenericDelete`

---

#### `getCampaigns` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/campaigns/campaigns`

**Get all campaigns**

Retrieves a list of communication campaigns.

**Query params:**
- `page_no` — Current page no
- `page_size` — Current request items count
- `sort` — To sort based on created_at

**Responses:** 200
  200 schema: `Campaigns`

---

#### `createCampaign` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/campaigns/campaigns`

**Create a campaign**

Creates a new communication campaign.

**Request body:** `application/json`
  Schema: `CampaignReq`

**Responses:** 200
  200 schema: `Campaign`

---

#### `getCampaignById` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/campaigns/campaigns/{id}`

**Get a campaign**

Retrieves detailed information about a specific communication campaign.

**Responses:** 200, 404
  200 schema: `Campaign`

---

#### `updateCampaignById` — PUT `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/campaigns/campaigns/{id}`

**Update a campaign**

Modify the configuration of a specific communication campaign.

**Request body:** `application/json`
  Schema: `CampaignReq`

**Responses:** 200, 404
  200 schema: `Campaign`

---

#### `getStatsOfCampaignById` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/campaigns/get-stats/{id}`

**Get campaign statistics**

Retrieves statistical data for a specific a communication campaign.

**Responses:** 200, 400
  200 schema: `GetStats`

---

#### `getAudiences` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sources/datasources`

**Get all the audiences**

Retrieves a list of all the audiences.

**Responses:** 200
  200 schema: `Audiences`

---

#### `createAudience` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sources/datasources`

**Create an audience**

Creates a new email audience.

**Request body:** `application/json`
  Schema: `AudienceReq`

**Responses:** 200
  200 schema: `Audience`

---

#### `getAudienceById` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sources/datasources/{id}`

**Get an audience**

Retrieves detailed information about an specific audience.

**Responses:** 200, 404
  200 schema: `Audience`

---

#### `updateAudienceById` — PUT `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sources/datasources/{id}`

**Update an audience**

Modify the configuration of a specific audience.

**Request body:** `application/json`
  Schema: `AudienceReq`

**Responses:** 200, 404
  200 schema: `Audience`

---

#### `deleteAudienceById` — DELETE `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sources/datasources/{id}`

**Delete an audience**

Remove a specific audience permenantly.

**Request body:** `application/json`
  Schema: `AudienceReq`

**Responses:** 200, 404
  200 schema: `Audience`

---

#### `getDummyDatasources` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sources/datasources/dummy-data-sources`

**Get dummy data sources**

Retrieve a list of dummy data sources.

**Responses:** 200

---

#### `getDummyDatasourcesMeta` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sources/datasources/dummy-data-sources-meta/{id}`

**Get dummy data sources metadata**

Retrieve metadata information about dummy data sources.

**Responses:** 200
  200 schema: `DummyDatasourcesMeta`

---

#### `getNSampleRecordsFromCsvByGet` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sources/get-n-records`

**Get N sample records of a CSV**

Retrieve a specified number of sample records from a CSV data source.

**Responses:** 200
  200 schema: `GetNRecordsCsvRes`

---

#### `getNSampleRecordsFromCsv` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sources/get-n-records`

**Get N sample records of a CSV**

Retrieve a specified number of sample records from a CSV data source.

**Request body:** `application/json`
  Schema: `GetNRecordsCsvReq`

**Responses:** 200
  200 schema: `GetNRecordsCsvRes`

---

#### `getEmailTemplates` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/templates`

**Get all email templates**

Retrieves a list of available email communication templates.

**Responses:** 200
  200 schema: `EmailTemplates`

---

#### `createEmailTemplate` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/templates`

**Creat an email template**

Creates a new email communication template.

**Request body:** `application/json`
  Schema: `EmailTemplateReq`

**Responses:** 200
  200 schema: `EmailTemplate`

---

#### `getSystemEmailTemplates` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/system-templates`

**Get all system email templates**

Retrieves system-defined email communication templates.

**Responses:** 200
  200 schema: `SystemEmailTemplates`

---

#### `getEmailTemplateById` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/templates/{id}`

**Get an email template**

Retrieves detailed information about a specific email communication template.

**Responses:** 200, 400, 404
  200 schema: `EmailTemplate`

---

#### `updateEmailTemplateById` — PUT `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/templates/{id}`

**Update an email template**

Modifys the content and settings of a specific email communication template.

**Request body:** `application/json`
  Schema: `EmailTemplateReq`

**Responses:** 200, 400, 404
  200 schema: `EmailTemplate`

---

#### `deleteEmailTemplateById` — DELETE `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/templates/{id}`

**Delete an email template**

Removes a specific email communication template from the platform permenantly.

**Responses:** 200, 400, 404
  200 schema: `GenericDelete`

---

#### `getSubscribedEmailTemplates` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/email/subscribedTemplates`

**Get all subscribed email templates**

Retrieves a list of email communication templates that are subscribed to an event.

**Responses:** 200
  200 schema: `EmailTemplates`

---

#### `getSmsTemplates` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/templates`

**Get all SMS templates**

Retrieve a list of all SMS communication templates.

**Responses:** 200
  200 schema: `SmsTemplates`

---

#### `createSmsTemplate` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/templates`

**Create a SMS template**

Creates a new SMS communication template.

**Request body:** `application/json`
  Schema: `SmsTemplateReq`

**Responses:** 200
  200 schema: `SmsTemplate`

---

#### `getSystemSmsTemplates` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/system-templates`

**Gets all system SMS templates**

Retrieves system-defined SMS communication templates.

**Responses:** 200
  200 schema: `SystemSmsTemplates`

---

#### `getSmsTemplateById` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/templates/{id}`

**Get a SMS template**

Retrieves detailed information about a specific SMS communication template.

**Responses:** 200, 400, 404
  200 schema: `SmsTemplate`

---

#### `updateSmsTemplateById` — PUT `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/templates/{id}`

**Update a SMS template**

Modifys the content and settings of a specific SMS communication template.

**Request body:** `application/json`
  Schema: `SmsTemplateReq`

**Responses:** 200, 400, 404
  200 schema: `SmsTemplate`

---

#### `deleteSmsTemplateById` — DELETE `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/templates/{id}`

**Delete an SMS template**

Removes a specific SMS communication template from the platform permenantly.

**Responses:** 200, 400, 404
  200 schema: `GenericDelete`

---

#### `getSubscribedSmsTemplates` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/sms/subscribedTemplates`

**Get all subscribed SMS templates**

Retrieve a list of SMS communication templates that are subscribed to an event.

**Responses:** 200
  200 schema: `SmsTemplates`

---

#### `sendCommunicationSynchronously` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/engine/send-instant`

**Send communication synchronously**

Sends real-time communications to sellers with immediate delivery.

**Request body:** `application/json`
  Schema: `EnginePayload`

**Responses:** 200
  200 schema: `EngineResult`

---

#### `sendCommunicationAsynchronously` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/engine/send-async`

**Send communication asynchronously**

Sends communications to sellers with deffered delivery.

**Request body:** `application/json`
  Schema: `EnginePayload`

**Responses:** 200
  200 schema: `EngineResult`

---

#### `getEventSubscriptions` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/event/event-subscriptions`

**Get all event subscriptions**

Retrieves a list of all event subscriptions.

**Responses:** 200, 404
  200 schema: `EventSubscriptions`

---

#### `getGlobalVariables` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/global-variables`

**Get all global variables**

Retrieves a list of communication global variables.

**Responses:** 200
  200 schema: `GetGlobalVariablesResult`

---

#### `postGlobalVariables` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/global-variables`

**Create global variables**

Updates and creates communication global variables.

**Request body:** `application/json`
  Schema: `GlobalVariablesReq`

**Responses:** 200
  200 schema: `CreateGlobalVariablesResult`

---

#### `getJobs` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/jobs/jobs`

**Get all campaign jobs**

Retrieves a list of campaign jobs.

**Responses:** 200
  200 schema: `Jobs`

---

#### `triggerCampaignJob` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/jobs/trigger-job`

**Trigger a campaign job**

Initiates a job to execute a communication campaign.

**Request body:** `application/json`
  Schema: `TriggerJobPayload`

**Responses:** 200
  200 schema: `TriggerJobResult`

---

#### `getJobLogs` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/jobs/logs`

**Get logs of all campaign job**

Retrieve logs and details related to campaign jobs.

**Responses:** 200
  200 schema: `JobLogs`

---

#### `getCommunicationLogs` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/log`

**Get communication reports**

Retrieve a lsit of logs and records of communication activities.

**Query params:**
- `page_id` — Current page no
- `page_size` — Current request items count
- `sort` — To sort based on _id
- `query` — 

**Responses:** 200
  200 schema: `Logs`

---

#### `getSystemNotifications` — GET `/service/platform/communication/v1.0/company/{company_id}/notification/system-notifications/`

**Get system notifications**

Retrieves a list of system notifications.

**Query params:**
- `page_no` — 
- `page_size` — 

**Responses:** 200
  200 schema: `SystemNotifications`

---

#### `sendOtp` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/otp/send-otp-comms`

**Send OTP**

Sends a one-time password (OTP) for authentication or verification.

**Request body:** `application/json`
  Schema: `SendOtpCommsReq`

**Responses:** 200
  200 schema: `SendOtpCommsRes`

---

#### `verfiyOtp` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/otp/verify-otp-comms`

**Verify OTP**

Verifies the one-time password (OTP) for authentication or verification.

**Request body:** `application/json`
  Schema: `VerifyOtpCommsReq`

**Responses:** 200, 400
  200 schema: `VerifyOtpCommsSuccessRes`

---

### RawQuery

#### `createEventSubscriptions` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/event/event-subscriptions`

**Create an event subscription**

Creates a new event subscription.

**Request body:** `application/json`
  Schema: `SubscriptionsObject`

**Responses:** 200, 404
  200 schema: `EventSubscriptionsBulkUpdateResult`

---

#### `getEventSubscriptionsById` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/event/event-subscriptions/{id}`

**Get an event subscription**

Retrieves detailed information about a specific event subscription.

**Responses:** 200, 404
  200 schema: `EventSubscription`

---

#### `editEventSubscriptions` — PUT `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/event/event-subscriptions/{id}`

**Update an event subscriptions**

Modifys the configuration and settings of a specific event subscription.

**Request body:** `application/json`
  Schema: `SubscriptionsObject`

**Responses:** 200, 404
  200 schema: `EventSubscriptionsBulkUpdateResult`

---

#### `deleteEventSubscriptionsById` — DELETE `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/event/event-subscriptions/{id}`

**Delete an event subscriptions**

Removes a specific event subscription from the platform permenantly.

**Responses:** 200, 404
  200 schema: `GenericDelete`

---

#### `createEventSubscriptionsByBulk` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/event/event-subscriptions/bulkUpdate`

**Create event subscriptions in bulk**

Creates a new event subscription in bulk.

**Request body:** `application/json`
  Schema: `EventSubscriptionsBulkUpdatePayload`

**Responses:** 200, 404

---

### commmunications

#### `createJobs` — POST `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/jobs/jobs`

**Create a campaign  jobs**

Creates a new campaign  job.

**Request body:** `application/json`
  Schema: `CreateJobsReq`

**Responses:** 200
  200 schema: `CreateJobsRes`

---

#### `getOtpConfiguration` — GET `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/otp/otp-configuration`

**Get configuration of otp**

Retrieves all configurations related to OTP.

**Responses:** 200
  200 schema: `OtpConfiguration`

---

#### `updateOtpConfiguration` — PUT `/service/platform/communication/v1.0/company/{company_id}/application/{application_id}/otp/otp-configuration`

**Update configuration of otp**

Updates all configurations related to OTP.

**Responses:** 200
  200 schema: `OtpConfiguration`

---

