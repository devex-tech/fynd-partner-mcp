# AI PIM — Taxonomy

Taxonomy is the data model that structures your product catalog. It defines **what data exists** (attributes), **how it is organized** (categories + trees), and **which attributes apply to which products** (templates).

Navigate via the **Taxonomy** tab.

> **Who can create/edit:** Brand Admin and Brand Supervisor only.

---

## Building Blocks

```
Attributes  →  Templates  →  Category Trees  →  SKUs
    ↑                              ↑
Categories  →  Category Mappings  ─┘
```

---

## 1. Attributes

Attributes are the individual data fields for a product (e.g., Color, Size, Description).

**Navigate:** Taxonomy → Attributes

### Creating an Attribute

| Field | Required | Notes |
|-------|----------|-------|
| **Attribute Code** | Yes | Unique identifier (alphanumeric) |
| **Attribute Name** | Yes | Display name (e.g., `Color`) |
| **Type** | Yes | See types below |
| **Tags** | No | For filtering/grouping attributes |
| **Mandatory** | No | Whether the attribute must be filled on a SKU |
| **Description** | No | Help text shown in the PDP |

### Attribute Types

| Type | Description |
|------|-------------|
| **Short Text** | Single-line text with character limit |
| **Long Text / Paragraph** | Multi-line text |
| **Number** | Numeric value with min/max |
| **List** | Predefined set of options (single or multi-select) |
| **Media** | Image or video URL |
| **Boolean** | True/False |
| **URL** | Web link |
| **HTML** | Rich text / HTML content |
| **File** | Document attachment |
| **JSONata** | Computed attribute using a JSONata expression |

### Bulk Import/Export
**Taxonomy → Attributes → Bulk Options**
- Download sample XLSX → fill → upload
- Export existing attributes to XLSX

### API
- `GET /service/panel/templates/v1.0/org/{orgId}/attribute` — list all
- `POST /service/panel/templates/v1.0/org/{orgId}/attribute` — create
- `PATCH /service/panel/templates/v1.0/org/{orgId}/attribute/{id}` — update
- `DELETE /service/panel/templates/v1.0/org/{orgId}/attribute/{id}` — delete
- `GET /service/panel/templates/v1.0/org/{orgId}/attribute/tags` — list all tags

---

## 2. Categories

Categories organize products by shared characteristics (e.g., Footwear, Electronics).

**Navigate:** Taxonomy → Categories

### Creating a Category

| Field | Required | Notes |
|-------|----------|-------|
| **Category Code** | Yes | Unique identifier (numeric, alpha, or alphanumeric) |
| **Category Name** | Yes | Display name (e.g., `Footwear`) |
| **Parent Category** | No | For nested category hierarchies |
| **Tags** | No | For filtering |

### Bulk Import/Export
**Taxonomy → Categories → Bulk Options** → Bulk Categories (Import/Export)

### API
- `GET /service/panel/templates/v1.0/org/{orgId}/category` — list
- `POST /service/panel/templates/v1.0/org/{orgId}/category` — create
- `PATCH /service/panel/templates/v1.0/org/{orgId}/category/{id}` — update
- `DELETE /service/panel/templates/v1.0/org/{orgId}/category/{id}` — delete

---

## 3. Templates

A template is a named group of attributes. Templates define which data fields are collected for a set of products. When a template is attached to a category tree, all SKUs in that tree inherit its attributes.

**Navigate:** Taxonomy → Templates

### Creating a Template

| Field | Required | Notes |
|-------|----------|-------|
| **Template Name** | Yes | Display name |
| **Attributes** | Yes | Select which attributes belong to this template |
| **Mandatory attributes** | No | Mark specific attributes as required |

You can validate a template's completeness via `GET /service/panel/templates/v1.0/org/{orgId}/template/validation/{id}`.

### Bulk Import/Export
**Taxonomy → Templates → Bulk Options**

### API
- `GET /service/panel/templates/v1.0/org/{orgId}/template` — list
- `POST /service/panel/templates/v1.0/org/{orgId}/template` — create
- `PATCH /service/panel/templates/v1.0/org/{orgId}/template/{id}` — update
- `DELETE /service/panel/templates/v1.0/org/{orgId}/template/{id}` — delete
- `GET /service/panel/templates/v1.0/org/{orgId}/template/validation/{id}` — validate

---

## 4. Category Mappings (Category Trees)

A category mapping (also called a category tree) connects a **category** to a **template**. When you assign a category tree code to an SKU, that SKU inherits the template's attributes.

**Navigate:** Taxonomy → Category Mappings

### Creating a Category Mapping

| Field | Required | Notes |
|-------|----------|-------|
| **Mapping Code** | Yes | Unique identifier used in SKU creation |
| **Category** | Yes | Which category this mapping is for |
| **Template** | Yes | Which template's attributes apply |
| **Hierarchy** | Yes | The full category path (tree structure) |

### Bulk Operations
**Taxonomy → Category Mappings → Bulk Options**
- Bulk import/export category mappings via XLSX
- `POST /service/panel/templates/v1.0/org/{orgId}/category/mapping/bulk` — get mappings by codes in bulk

### API
- `GET /service/panel/templates/v1.0/org/{orgId}/category/mapping` — list all
- `POST /service/panel/templates/v1.0/org/{orgId}/category/mapping` — create
- `PATCH /service/panel/templates/v1.0/org/{orgId}/category/mapping/{id}` — update
- `DELETE /service/panel/templates/v1.0/org/{orgId}/category/mapping/{id}` — delete
- `GET /service/panel/templates/v1.0/org/{orgId}/category/mapping/code/{code}` — get by code
- `GET /service/panel/templates/v1.0/org/{orgId}/category/mapping/template` — categories mapped to a template
- `GET /service/panel/templates/v1.0/org/{orgId}/category/mapping/template-details` — template details for given mapping codes
- `POST /service/panel/templates/v1.0/org/{orgId}/category/mapping/map/template` — bulk map to template
- `POST /service/panel/templates/v1.0/org/{orgId}/category/mapping/unmap/template` — bulk unmap from template

---

## 5. Relationships

Relationships define how SKUs relate to each other.

**Navigate:** Taxonomy → Relationships

### Types

| Type | Description | Example |
|------|-------------|---------|
| **Variant** | Same product, different attributes | Red / White / Black T-shirt |
| **Parent-Child** | Hierarchical product bundles | Computer (parent) + Charger, GPU (children) |

### Creating a Variant Relationship
1. Taxonomy → Relationships → Add Relationship
2. Type: **Variant**
3. Name + optional description
4. Select the **variant key attribute** (e.g., Color)
5. Set max count (optional)
6. Save

### Creating a Parent-Child Relationship
1. Type: **Parent-Child**
2. Name + description
3. Select child attribute type
4. Set **max quantity** per child SKU
5. Save

> Relationships defined here are used when grouping SKUs on the PPD page (SKU Grouping feature).

---

## Taxonomy Setup Order

For a clean setup, create in this order:
1. **Attributes** — define all data fields
2. **Categories** — define your category hierarchy
3. **Templates** — group attributes into templates
4. **Category Mappings** — link categories to templates
5. **Relationships** — define variant/bundle structures (optional)
