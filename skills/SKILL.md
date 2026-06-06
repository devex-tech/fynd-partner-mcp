---
name: fynd-partner
description: >-
  Top-level skill for Fynd partners building on the Fynd Commerce platform.
  Routes to the appropriate sub-skill based on context. Use when someone is a
  Fynd partner or developer building extensions, integrations, or storefronts
  on Fynd, or working with Fynd AI PIM. Covers: Platform REST APIs, General /
  Payment / Logistics Extensions, and AI PIM product data management.
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

## Routing

- **Platform APIs** (endpoints, auth, SDK, debugging 400/401/404) → load `platform-api/SKILL.md`
- **Extension development** (any type) → load `extensions/SKILL.md`, which routes to the right sub-skill
- **General extension** specifically → load `extensions/general/SKILL.md`
- **Payment extension** specifically → load `extensions/payment/SKILL.md`
- **Logistics extension** specifically → load `extensions/logistics/SKILL.md`
- **AI PIM** (product catalog, SKU enrichment, inbound/outbound connectors, rule engine, transformations, marketplace publishing, AI PIM API) → load `ai-pim/SKILL.md`

For topics not yet covered by a sub-skill, answer from general knowledge and note the gap.
