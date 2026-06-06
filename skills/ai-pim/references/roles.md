# AI PIM — Roles & Access Control

AI PIM has 5 roles. Each role defines what a user can see and do.

---

## Roles Overview

| Role | Who They Are |
|------|-------------|
| **Owner** | The organization creator. Highest access. One per org. |
| **Admin (Brand Admin)** | Full platform access. Can manage members, roles, and all settings. |
| **Supervisor (Brand Supervisor)** | Creates, assigns, and tracks tasks. Monitors workflow progress. |
| **Content Enricher** | Fills in missing SKU data — titles, descriptions, attributes, images. |
| **Auditor** | Reviews enriched SKUs for quality and accuracy before production. |

---

## Access Control Tables

### Organizational Data

| Role | Org Details | Members | Teams | Vendors | Token |
|------|-------------|---------|-------|---------|-------|
| Owner | ✅ | ✅ | ✅ | ✅ | ✅ |
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ |
| Supervisor | ❌ | ❌ | ❌ | ❌ | ❌ |
| Content Enricher | ❌ | ❌ | ❌ | ❌ | ❌ |
| Auditor | ❌ | ❌ | ❌ | ❌ | ❌ |

### Product Data

| Role | Staged (SPD) | Production (PPD) | Archived (APD) |
|------|-------------|-----------------|----------------|
| Owner | ✅ | ✅ | ✅ |
| Admin | ✅ | ✅ | ✅ |
| Supervisor | ✅ | ✅ | ✅ |
| Content Enricher | ❌ | ❌ | ❌ |
| Auditor | ✅ | ❌ | ❌ |

### Taxonomy

| Role | Attribute | Category | Relationship | Template |
|------|-----------|----------|-------------|---------|
| Owner | ✅ | ✅ | ✅ | ✅ |
| Admin | ✅ | ✅ | ✅ | ✅ |
| Supervisor | ✅ | ✅ | ✅ | ✅ |
| Content Enricher | ❌ | ❌ | ❌ | ❌ |
| Auditor | ❌ | ❌ | ❌ | ❌ |

### Task Management

| Role | Task Listing | Archive Task | Recall Task | Content Enrichment | Audit | Publish to Production |
|------|-------------|-------------|------------|-------------------|-------|-----------------------|
| Owner | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Supervisor | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Content Enricher | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Auditor | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |

---

## Role-Specific Notes

### Owner
- Sole owner of the organization
- Same functional access as Admin
- Cannot be removed or transferred without deleting the org

### Admin (Brand Admin)
- Can invite/remove members
- Assigns roles to members
- Only role that can create and manage API tokens
- Full access to connectors, taxonomy, rules, and transformations

### Supervisor (Brand Supervisor)
- Can create/edit taxonomy (attributes, categories, templates)
- Can view and work with SPD and PPD
- Cannot manage members, tokens, or org settings
- Can assign tasks and track progress

### Content Enricher
- Only accesses the enrichment task workflow
- Cannot view production data, taxonomy, or org settings
- Can accept/reject enrichment tasks, fill in SKU data

### Auditor
- Reviews enriched SKUs for quality
- Can access SPD for review
- Can publish approved SKUs to production
- Cannot modify taxonomy or manage org settings
- Cannot archive or recall tasks

---

## Account Management

**Navigate:** Click organization name (top-right) → **Manage Account**

| Section | Purpose |
|---------|---------|
| **Members** | View and invite people to the organization |
| **Teams** | Group members by role for easier task assignment |
| **Vendors** | Add external partners who help with content enrichment |
| **Token** | Create API tokens for external system integrations |
| **Org Details** | Update organization name and settings |
| **Update Profile** | Edit personal profile |

### Vendors

Vendors are external partners (agencies, freelancers) who assist with content enrichment. They get a restricted **vendor account** with access only to assigned tasks. Vendor accounts cannot access taxonomy, connectors, or org settings.

Vendor account sections: Account Control, Members, Teams, Tasks, Token
