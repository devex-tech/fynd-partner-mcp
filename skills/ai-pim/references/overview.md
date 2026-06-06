# AI PIM — Overview

## What Is Fynd AI PIM?

Fynd AI PIM is an AI-powered Product Information Management platform. It consolidates all product information into a single source of truth, uses AI to enrich SKUs (titles, descriptions, attributes, SEO content), processes product images, and distributes formatted data to multiple marketplaces.

> "A smart tool that helps you manage all your product data in one place."

## Key Features

| Feature | Description |
|---------|-------------|
| **Single Source of Truth** | Centralizes all product data, eliminates inconsistencies |
| **Faster Time to Market** | Automated enrichment — hours, not weeks |
| **Enhanced Data Quality** | AI-powered validations + rule-based consistency checks |
| **Improved SEO** | AI-generated titles, descriptions, tags optimized for search |
| **Multi-Channel Distribution** | Amazon, Flipkart, Myntra, Nykaa — format-ready exports |
| **Scalability** | Bulk automation for thousands of SKUs |

## How It Works

### Two Enrichment Flows

**Full Automation (image-first):**
1. Upload raw product images (ZIP of SKU-named folders, individual images, or ZIP URLs)
2. AI auto-detects category using Google Taxonomy
3. SKU mapped to global template
4. AI extracts attributes (color, style, size, etc.) + auto-writes SEO titles, descriptions, tags

**Partial Automation (custom taxonomy):**
1. Create your own taxonomy (attributes → categories → category trees → templates)
2. Upload SKU package (SKU codes + categories + images)
3. Configure automated rules (rule engine)
4. AI + configured rules fill in missing details

### Review & Validate
- All enriched data appears as staged data (SPD)
- Preview, edit, and approve in staging mode before going live

### Marketplace Mapping & Publishing
- Map your taxonomy to PIM's global taxonomy once (Transformations module)
- Data auto-transforms into Amazon/Flipkart/Myntra/Nykaa-specific schemas
- One-click sync to production
- AI applies platform-specific formatting and validations

### Workflow & Collaboration
- Approval steps configured per enrichment stage
- Task assignment to teammates, vendors, or agencies
- Role-based permissions (Owner → Admin → Supervisor → Content Enricher → Auditor)
- Vendor accounts for external collaborators

## Core Modules

| Module | Purpose |
|--------|---------|
| **Products** (SPD/PPD/APD) | SKU lifecycle management |
| **Taxonomy** | Categories, attributes, templates, trees, relationships |
| **Dashboard / Enrichment** | AI chat-based enrichment workspace |
| **Settings / Rule Engine** | Automation rules for data transformations |
| **Settings / Transformations** | Marketplace taxonomy mapping |
| **Connectors / Inbound** | Receive product data from SAP, Infibeam, or any system |
| **Connectors / Outbound** | Push events to external webhooks or Fynd Platform |
| **Connectors / Mappers** | JS transform scripts for outbound payloads |
| **Manage Account** | Members, teams, vendors, API tokens, roles |

## Base API URL

```
https://api.aipim.fynd.com/
```

All Panel API paths start with `/service/panel/`. Authentication uses `cc.session` cookie or Bearer token. See `auth.md` for full details.
