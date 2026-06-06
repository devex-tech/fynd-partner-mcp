---
name: fynd-partner/ai-pim
description: >-
  Skill for Fynd AI PIM (Product Information Management). Use when a Fynd
  partner asks about AI PIM — product data management, SKU enrichment, taxonomy
  setup, inbound/outbound connectors, rule engine, transformations, marketplace
  publishing, or the AI PIM REST API. Covers concepts, workflows, and API
  reference.
---

# Fynd AI PIM Skill

## What This Skill Covers

Fynd AI PIM is an AI-powered Product Information Management platform. It centralizes product data, enriches SKUs using AI (extracting attributes and generating SEO content from images), and publishes to marketplaces like Amazon, Flipkart, and Myntra.

## Mode Detection

Read the question and route to the right reference:

| If the question is about... | Load |
|-----------------------------|------|
| What AI PIM is, how it works, key concepts | `references/overview.md` |
| SKUs, lifecycle, SPD/PPD, bulk import/export, variants, bundles | `references/products.md` |
| Categories, attributes, templates, category trees, relationships | `references/taxonomy.md` |
| AI enrichment, rule engine, transformations, marketplace mapping | `references/enrichment.md` |
| Inbound/outbound connectors, mappers, webhooks, data push | `references/connectors.md` |
| API endpoints, request/response, operations | `references/api-reference.md` |
| Authentication, tokens, session, app credentials | `references/auth.md` |
| User roles, permissions, access control | `references/roles.md` |

## Key Terms Quick Reference

| Term | Meaning |
|------|---------|
| **SKU** | Stock Keeping Unit — the core product record |
| **SPD** | Staged Product Data — SKUs being enriched/audited |
| **PPD** | Production Product Data — live, published SKUs |
| **APD** | Archived Product Data — deleted SKUs (30-day retention) |
| **Taxonomy** | The data model: categories + attributes + templates + trees |
| **Category Tree** | A hierarchical mapping of categories to a template |
| **Template** | A grouped set of attributes applied to a category tree |
| **Inbound Connector** | Integration point to receive product data from external systems |
| **Outbound Connector** | Webhook-based integration to push AI PIM events to external systems |
| **Mapper** | JS transform script that reshapes outbound event payloads |
| **Rule Engine** | Automation layer — triggers on data changes, runs AI/JS actions |
| **Transformation** | One-time mapping of your taxonomy → PIM global taxonomy → marketplace formats |

## Two Enrichment Flows

**Full Automation:** Upload images → AI auto-detects category → maps to global template → extracts attributes + generates SEO content

**Partial Automation:** Create custom taxonomy → upload SKU package → configure rules → AI fills gaps
