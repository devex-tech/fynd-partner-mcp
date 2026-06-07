---
name: fynd-partner
description: >-
  Top-level skill for Fynd partners building on the Fynd Commerce platform.
  Routes to the appropriate sub-skill based on context. Use when someone is a
  Fynd partner or developer building extensions, integrations, or storefronts
  on Fynd, working with Fynd AI PIM, or using Fynd Konnect for multi-channel
  commerce. Covers: Platform REST APIs, General/Payment/Logistics Extensions,
  AI PIM product data management, Konnect multi-channel integration, and
  React-based Theme development.
---

# Fynd Partner Skill

## Sub-Skills

| Topic | Sub-Skill | When to use |
|-------|-----------|-------------|
| Platform REST APIs | `platform-api/SKILL.md` | Endpoint discovery, API debugging, auth setup, SDK usage |
| Extensions (all types) | `extensions/SKILL.md` | Building general, payment, or logistics extensions |
| General Extension | `extensions/general/SKILL.md` | FDK CLI, bindings, webhooks, deployment pipeline |
| Payment Extension | `extensions/payment/SKILL.md` | Payment/refund APIs, checksum, state machines |
| Logistics Extension | `extensions/logistics/SKILL.md` | DP schemes, accounts, order journey, status sync |
| AI PIM | `ai-pim/SKILL.md` | Product data management, SKU enrichment, taxonomy, connectors, rule engine, marketplace publishing |
| Konnect | `konnect/SKILL.md` | Multi-channel selling, marketplace integration, ERP/WMS sync, orders, inventory, channel mapping |
| Themes | `themes/SKILL.md` | Building, customizing, submitting React-based Fynd Commerce themes |

## Routing

- **Platform APIs** (endpoints, auth, SDK, debugging 400/401/404) → load `platform-api/SKILL.md`
- **Extension development** (any type) → load `extensions/SKILL.md`, which routes to the right sub-skill
- **General extension** specifically → load `extensions/general/SKILL.md`
- **Payment extension** specifically → load `extensions/payment/SKILL.md`
- **Logistics extension** specifically → load `extensions/logistics/SKILL.md`
- **AI PIM** (product catalog, SKU enrichment, inbound/outbound connectors, rule engine, transformations, marketplace publishing, AI PIM API) → load `ai-pim/SKILL.md`
- **Konnect** (multi-channel selling, connecting Amazon/AJIO/Flipkart, ERP/WMS integration, inventory sync, order management, channel mapping, Konnect API) → load `konnect/SKILL.md`
- **Themes** (building/customizing themes, FDK-CLI, React, ServerFetch, SSR, sections, blocks, FPI client, submission, marketplace) → load `themes/SKILL.md`

For topics not yet covered by a sub-skill, answer from general knowledge and note the gap.
