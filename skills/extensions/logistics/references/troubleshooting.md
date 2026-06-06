# Logistics Extension — Troubleshooting

## Common Issues

### Shipments Not Being Assigned to Your Extension

**Symptoms:** OMS isn't sending Assign DP webhook events to your extension.

**Checklist:**
- Scheme has serviceability data uploaded and the target pincode is in the file
- Scheme `stage` is `"enabled"`
- Account `stage` is `"enabled"` for the seller's company
- Webhook config in `setupFdk()` includes `application/courier-partners/assign`
- The extension was opened by the seller at least once after your latest webhook config change
- Extension ID + Scheme ID in your account creation match what you registered

### dp_not_assigned Returned / Rejected by OMS

**Cause:** OMS rejected the state transition.

**Fix:**
- Verify the current shipment state with `getStateTransitionMap` — `dp_not_assigned` may not be a valid next state from the current state
- Include `transition_comments` in your status update with a clear reason message
- Confirm you're using the correct `shipment_id` (not order ID)

### Webhook Not Firing After Config Update

**Cause:** Webhook subscriber on the seller's company was not refreshed.

**Fix:** The seller must open the extension once after a webhook config change. This triggers a subscriber update on Fynd Commerce for that company. There is no API to force-refresh it remotely.

### Status Updates Not Reflecting in OMS

**Symptoms:** `updateShipmentStatus` returns success but OMS state doesn't change.

**Checklist:**
- The target state is a valid transition from the current state — use `getAllowedStateTransition` to verify
- `courier_partner_extension_id` in meta matches `process.env.EXTENSION_API_KEY` exactly
- `courier_partner_scheme_id` matches the scheme the seller subscribed to
- For `dp_assigned`, `delivery_awb_number` is populated
- No concurrent conflicting status update (deduplicate on your side)

### Account Creation Fails

**Common errors:**

| Error | Cause | Fix |
|-------|-------|-----|
| `account_id already exists` | Duplicate account for same seller × scheme | Check before creating — use `getCourierPartnerAccounts` to see if account exists |
| `scheme_id not found` | Scheme doesn't exist or belongs to another extension | Verify scheme was created with your `extension_id` |
| `extension_id mismatch` | Wrong API key | Use `process.env.EXTENSION_API_KEY` consistently |

### Serviceability Upload Fails

**Checklist:**
- CSV format matches the sample from `sampleFileServiceability` exactly
- CDN upload completed (`completeUpload` was called after the PUT)
- `country` and `region` fields in the body are valid — use `getCountries` to get valid values
- File encoding is UTF-8

### COD Orders Not Being Assigned

**Cause:** Scheme doesn't include `"COD"` in `payment_mode`.

**Fix:** Update scheme via `updateCourierPartnerScheme` to include `payment_mode: ["prepaid", "COD"]`.

### E-Way Bill Issues

**Cause:** Scheme doesn't have `ewaybill: true` in features.

**Fix:** Update scheme features. Also ensure `ewaybill_info` is populated in the `updateShipmentStatus` meta for shipments > ₹50,000.

## Debugging Tips

- Log `event_name`, `company_id`, `application_id`, and full `request_body` in every webhook handler
- Use `getStateTransitionMap` at startup and cache it — don't call it per-shipment
- For `dp_not_assigned`, always include descriptive `transition_comments` — it helps Fynd support debug escalations
- Test with a development company and `fdk extension preview` before submitting for review
- Refer to [General Extension Debugging](../../general/references/troubleshooting.md) for FDK auth errors, boilerplate issues, and common extension errors

## FAQs

**Q: Can one scheme serve multiple companies?**  
A: Yes — standard schemes are one-to-many. Create one account per seller (company × scheme = unique account).

**Q: How often should I push status updates?**  
A: Real-time is preferred. If not possible, agree on an interval with Fynd support and push within that window consistently.

**Q: What happens if I disable a scheme?**  
A: Set `stage: "disabled"` via `updateCourierPartnerScheme`. The OMS will stop assigning new shipments to that scheme. Existing in-flight shipments are unaffected.

**Q: Can I update serviceability without downtime?**  
A: Yes — upload a new serviceability file. The platform processes it asynchronously. Check status with `getSampleFileServiceabilityStatus`.

**Q: What is `is_own_account`?**  
A: `true` means the seller owns and manages their DP credentials. `false` means Fynd cluster admin manages them. Default to `true` unless Fynd explicitly tells you otherwise.
