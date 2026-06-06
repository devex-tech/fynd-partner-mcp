# User

**SDK Class:** `User`  
**Total operations:** 38

## Groups

- **Customer**: Manage customer interactions within the application, including retrieving customer data, getting specific customers via 
- **Customer Session**: Handles unique sessions representing a logged-in customer, including creating new sessions with configurable expiration 
- **Website Authentication**: Manage authentication configurations for platform-wide sales channels, offering flexibility to mandate either email, mob
- **Customer Group**: Customer groups allow the creation of targeted audience segments based on specific attributes or manual inclusion via ph
- **Customer Attributes**: Customer attributes enable the tagging of custom values against any customer. This allows the tagging of customer behavi

## Operations by Group

### Customers

#### `getUserTimeline` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/{user_id}/timeline`

**Get Deleted User Timeline**

Fetches the timeline for the user who has made a data erase request. The timeline will show when the request was raised and when the request will be completed. It will also show if request has been cancelled before completion.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*
- `user_id` — User ID *(required)*

**Responses:** 200, 400
  200 schema: `GetUserTimeline`

---

#### `archiveUser` — PUT `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/archive`

**Archive User**

Delete user from sales channel, allowing re-registration with the same mobile/email for a new user account.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*

**Request body:** `application/json`
  Schema: `ArchiveUserRequestSchema`

**Responses:** 200, 400
  200 schema: `ArchiveUserSuccess`

---

### General

#### `getCustomers` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/list`

**Get a List of Users**

Retrieve details of users registered in the sales channel

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `q` — The search query. Mobile number or email ID of a customer.
- `page_size` — The number of items to retrieve in each page. Default value is 10. (default: 10)
- `page_no` — The page number to navigate through the given set of results. Default value is 1 (default: 1)

**Responses:** 200, 400
  200 schema: `CustomerListResponseSchema`

---

#### `searchUsers` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/search`

**Search an Existing Users**

Search and filter users details registered in the sales channel

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `q` — The search query. Mobile number or email ID of a customer.
- `query` — The search queries. Mobile numbers or email IDs of customers.

**Responses:** 200
  200 schema: `UserSearchResponseSchema`

---

#### `createUser` — POST `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers`

**Create User**

Register and add a new user to the sales channel.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*

**Query params:**
- `verified` — Controls whether newly created emails and phone numbers are marked as verified. 

**Request body:** `application/json`
  Schema: `CreateUserRequestSchema`

**Responses:** 200, 400
  200 schema: `CreateUserResponseSchema`

---

#### `blockOrUnblockUsers` — PUT `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/activation`

**Block/Unblock Users**

Manage user access by blocking or unblocking their accounts, restricting login for blocked accounts and allowing login for unblocked accounts.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*

**Request body:** `application/json`
  Schema: `BlockUserRequestSchema`

**Responses:** 200, 400
  200 schema: `BlockUserSuccess`

---

#### `unDeleteUser` — PUT `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/undelete`

**Restore Deleted User**

Restore a previously deleted user account.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*

**Request body:** `application/json`
  Schema: `UnDeleteUserRequestSchema`

**Responses:** 200, 400
  200 schema: `UnDeleteUserSuccess`

---

#### `updateUser` — PUT `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/{user_id}`

**Update User Details**

Modify and update user profile information.

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*
- `user_id` — User ID *(required)*

**Request body:** `application/json`
  Schema: `UpdateUserRequestSchema`

**Responses:** 200, 400
  200 schema: `CreateUserResponseSchema`

---

#### `createUserSession` — POST `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/session`

**Create User Session**

Create session for user interactions

**Path params:**
- `company_id` — Company ID *(required)*
- `application_id` — Application ID *(required)*

**Request body:** `application/json`
  Schema: `CreateUserSessionRequestSchema`

**Responses:** 200, 400
  200 schema: `CreateUserSessionResponseSchema`

---

#### `deleteSession` — DELETE `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/session`

**Delete User Session**

Terminate an active user session.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `id` — ID of a customer. *(required)*
- `session_id` — Session ID of a customer. *(required)*
- `reason` — Reason for deleting session. *(required)*

**Responses:** 200, 400
  200 schema: `SessionDeleteResponseSchema`

---

#### `getActiveSessions` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/sessions`

**Get User Active Sessions**

Retrieve a list of currently active user sessions.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `id` — ID of a customer. *(required)*

**Responses:** 200, 400
  200 schema: `SessionListResponseSchema`

---

#### `deleteActiveSessions` — DELETE `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/customers/sessions`

**Delete User Active Sessions**

Terminate all active user sessions.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `id` — ID of a customer. *(required)*
- `reason` — Reason to delete sessions. *(required)*

**Responses:** 200, 400
  200 schema: `SessionsDeleteResponseSchema`

---

#### `getPlatformConfig` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/platform/config`

**Get Platform Config**

Retrieve platform sales channel authentication configuration.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `PlatformSchema`

---

#### `updatePlatformConfig` — POST `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/platform/config`

**Update Platform Config**

Modify and update platform sales channel authentication configuration.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `PlatformSchema`

**Responses:** 200
  200 schema: `PlatformSchema`

---

#### `createUserGroup` — POST `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_group`

**Create User Group**

Form and add a new user group.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `CreateUserGroup`

**Responses:** 201

---

#### `getUserGroups` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_group`

**Get User Groups**

Retrieve a list of user groups.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `page_no` — page number for pagination result
- `page_size` — page size for pagination result
- `name` — to search for User Groups which contains given string in their name
- `type` — to search for User Groups with given type
- `status` — to get User Groups with given status
- `group_uid` — to get User Groups with given uid

**Responses:** 200
  200 schema: `UserGroupListResponseSchema`

---

#### `updateUserGroup` — PUT `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_group/{group_id}`

**Update User Group**

Modify and update user group details.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `group_id` — Numeric ID allotted to a User Group *(required)*

**Request body:** `application/json`
  Schema: `UpdateUserGroupSchema`

**Responses:** 200, 404
  200 schema: `UserGroupResponseSchema`

---

#### `getUserGroupById` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_group/{group_id}`

**Get User Group**

Retrieve a user group by its unique identifier.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `group_id` — Numeric ID allotted to a User Group *(required)*

**Responses:** 200, 404
  200 schema: `UserGroupResponseSchema`

---

#### `updateUserGroupPartially` — PATCH `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_group/{group_id}`

**Modify User Group**

Update user group partially on the platform.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `group_id` — Numeric ID allotted to a User Group *(required)*

**Request body:** `application/json`
  Schema: `PartialUserGroupUpdateSchema`

**Responses:** 200, 404
  200 schema: `UserGroupResponseSchema`

---

#### `deleteUserGroup` — DELETE `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_group/{group_id}`

**Delete User Group**

Permanently delete a user group by its unique identifier.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*
- `group_id` — Unique ID allotted to a User Group *(required)*

**Responses:** 200, 404
  200 schema: `DeleteUserGroupSuccess`

---

#### `getUserAttributeDefinitions` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/definition`

**Get User Attribute Definitions**

Retrieve user attribute definitions.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Query params:**
- `excluding_ids` — Exclude attribute definitions by Ids
- `slug` — Filter by attribute slug.
- `type` — Filter by attribute type.
- `customer_editable` — Filter by customer_editable status.
- `encrypted` — Filter by encrypted status.
- `pinned` — Filter by pinned status.
- `pin_order` — Filter by pin order.
- `is_locked` — Filter by locked status.
- *(+ 3 more query params)*

**Responses:** 200, 400
  200 schema: `UserAttributeDefinitionList`

---

#### `updateUserAttributeDefinition` — PUT `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/definition/{attribute_def_id}`

**Update User Attribute Definition**

Update an existing user attribute definition.

**Path params:**
- `attribute_def_id` — The unique identifier of the attribute definition to update. *(required)*
- `application_id` — Application ID. *(required)*
- `company_id` — Company ID. *(required)*

**Request body:** `application/json`
  Schema: `CreateUserAttributeDefinition`

**Responses:** 200, 400
  200 schema: `UserAttributeDefinition`

---

#### `deleteUserAttributeDefinitionById` — DELETE `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/definition/{attribute_def_id}`

**Delete User Attribute Definition**

Delete a user attribute definition by its unique identifier.

**Path params:**
- `attribute_def_id` — The unique identifier of the attribute definition to delete. *(required)*
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200, 400
  200 schema: `SuccessMessage`

---

#### `getUserAttributeDefinitionById` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/definition/{attribute_def_id}`

**Get User Attribute Definition**

Get a user attribute definition by its unique identifier.

**Path params:**
- `attribute_def_id` — The unique identifier of the attribute definition to retrieve. *(required)*
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Responses:** 200
  200 schema: `UserAttributeDefinition`

---

#### `updateUserAttribute` — PUT `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/definition/{attribute_def_id}/user/{user_id}`

**Update Or Create User Attribute**

**Path params:**
- `attribute_def_id` — The unique identifier of the attribute definition to update. *(required)*
- `user_id` — The unique identifier of the user to update. *(required)*
- `application_id` — Application ID. *(required)*
- `company_id` — Company ID. *(required)*

**Request body:** `application/json`
  Schema: `CreateUserAttribute`

**Responses:** 200, 400
  200 schema: `UserAttribute`

---

#### `getUserAttribute` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/definition/{attribute_def_id}/user/{user_id}`

**Get User Attribute**

**Path params:**
- `attribute_def_id` — The unique identifier of the attribute definition. *(required)*
- `user_id` — The unique identifier of the user. *(required)*
- `application_id` — Application ID. *(required)*
- `company_id` — Company ID. *(required)*

**Responses:** 200, 400
  200 schema: `UserAttribute`

---

#### `deleteUserAttribute` — DELETE `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/definition/{attribute_def_id}/user/{user_id}`

**Delete User Attribute**

**Path params:**
- `attribute_def_id` — The unique identifier of the attribute definition. *(required)*
- `user_id` — The unique identifier of the user. *(required)*
- `application_id` — Application ID. *(required)*
- `company_id` — Company ID. *(required)*

**Responses:** 200, 400
  200 schema: `SuccessMessage`

---

#### `getUserAttributesForUser` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/user/{user_id}`

**Get All Customer Attributes**

Retrieve all user attributes for a specific user

**Path params:**
- `user_id` — The unique identifier of the user to update. *(required)*
- `application_id` — Application ID. *(required)*
- `company_id` — Company ID. *(required)*

**Query params:**
- `page_size` — The number of items to retrieve in each page. Default value is 10. (default: 10)
- `page_no` — The page number to navigate through the given set of results. Default value is 1 (default: 1)

**Responses:** 200, 400
  200 schema: `UserAttributeDefinitionsResponseSchema`

---

#### `updateUserAttributes` — POST `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/user/{user_id}`

**Create Or Update User Attribute**

This API is used to create or update multiple user attribute values for the specified user ID.

**Path params:**
- `user_id` — The unique identifier of the user. *(required)*
- `application_id` — The unique identifier of the application. *(required)*
- `company_id` — The unique identifier of the company. *(required)*

**Request body:** `application/json`
  Schema: `CreateBulkUserAttribute`

**Responses:** 200, 400
  200 schema: `BulkUserAttribute`

---

#### `deleteUserAttributesInBulk` — DELETE `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/user/{user_id}`

**Delete User Attribute Values in Bulk**

This request deletes attribute values for a single user based on the provided user attribute definition. Each user attribute definition represents a distinct attribute, and for each definition, a user can have one corresponding value.

**Path params:**
- `user_id` — The unique identifier of the user to update. *(required)*
- `application_id` — The unique identifier of the application. *(required)*
- `company_id` — The unique identifier of the company. *(required)*

**Request body:** `application/json`
  Schema: `DeleteBulkUserAttribute`

**Responses:** 200, 400
  200 schema: `SuccessMessage`

---

#### `getUserAttributeById` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/attribute/{attribute_id}`

**Get User Attribute**

Retrieve User Attribute details by ID.

**Path params:**
- `attribute_id` — The unique identifier of the attribute to get. *(required)*
- `application_id` — Application ID. *(required)*
- `company_id` — Company ID. *(required)*

**Responses:** 200, 400
  200 schema: `UserAttribute`

---

#### `bulkImportStoreFrontUsers` — POST `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/users/jobs/import`

**Bulk import storefront customers using CSV and XLSX files.**

The API allows bulk import of storefront customers using CSV or XLSX files.

**Path params:**
- `application_id` — Application ID. *(required)*
- `company_id` — Company ID. *(required)*

**Request body:** `application/json`
  Schema: `CreateStoreFrontUsersPayload`

**Responses:** 200, 400
  200 schema: `BulkActionModel`

---

#### `getBulkImportUsersList` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/users/jobs/import`

**Get Bulk User's Import Lists for a specific Application.**

This API allows fetching the list of bulk user imports for a specific application and company.
It supports pagination and filtering based on various parameters.


**Path params:**
- `application_id` — Application ID. *(required)*
- `company_id` — Company ID. *(required)*

**Query params:**
- `page_no` — page number for pagination result
- `page_size` — page size for pagination result
- `search` — The search queries based on job name.
- `start_date` — Start date
- `end_date` — End date
- `status` — Status of the Import Documents
- `file_format` — Filter data based on file format eg csv or xlsx

**Responses:** 200
  200 schema: `BulkActionPaginationSchema`

---

#### `createBulkExportUsers` — POST `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/users/jobs/export`

**Bulk export storefront customers using CSV and XLSX files.**

This API allows bulk export of storefront users by requesting files in CSV or XLSX format.

**Path params:**
- `application_id` — Application ID. *(required)*
- `company_id` — Company ID. *(required)*

**Request body:** `application/json`
  Schema: `BulkUserExportSchema`

**Responses:** 200, 400
  200 schema: `BulkActionModel`

---

#### `getBulkExportUsersList` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/users/jobs/export`

**Get Bulk User's Export Lists for a specific Application.**

This API allows fetching the list of bulk user exports for a specific application and company.
It supports pagination and filtering based on various parameters.


**Path params:**
- `application_id` — Application ID. *(required)*
- `company_id` — Company ID. *(required)*

**Query params:**
- `page_no` — page number for pagination result
- `page_size` — page size for pagination result
- `file_format` — Filter data based on file format eg csv or xlsx
- `search` — The search queries based on job name.
- `start_date` — Start date
- `end_date` — End date
- `status` — Status of the Import Documents

**Responses:** 200
  200 schema: `BulkActionPaginationSchema`

---

#### `getUsersJobByJobId` — GET `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/users/jobs/{job_id}`

**Retrieve Job Details by Job ID for a Specific Application, Including Both Import and Export Jobs.**

This endpoint retrieves the details of a specific user's import and export related jobs associated with a given `job_id`, `application_id`, and `company_id`.


**Path params:**
- `application_id` — The unique identifier of the application. This is required to identify the appli *(required)*
- `company_id` — The unique identifier of the company. This helps in scoping the request to the s *(required)*
- `job_id` — The unique identifier of the job. This is used to fetch the details of the speci *(required)*

**Responses:** 200, 400
  200 schema: `BulkActionModel`

---

#### `filterUsersByAttributes` — POST `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/users`

**Filter Users by Attribute Conditions**

Returns a filtered list of users based on user attribute conditions and along with details of definition Ids.

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `UserAttributeFilter`

**Responses:** 200
  200 schema: `UserAttributeFiltered`

---

### UserAttribute

#### `createUserAttributeDefinition` — POST `/service/platform/user/v1.0/company/{company_id}/application/{application_id}/user_attribute/definition`

**Create a User Attribute Definition**

Create a new User Attribute Definition

**Path params:**
- `company_id` — Numeric ID allotted to a business account on Fynd Platform. *(required)*
- `application_id` — Alphanumeric ID allotted to an application created within a business account. *(required)*

**Request body:** `application/json`
  Schema: `CreateUserAttributeDefinition`

**Responses:** 200, 400
  200 schema: `UserAttributeDefinitionDetails`

---

