# Themes — Overview

## What Are Fynd Commerce Themes?

Themes define the look, feel, and user interactions of a Fynd Commerce website. They are built using **React v18** and support all standard React syntax. Themes run on the Skyfire Theme Engine and integrate with the Fynd Platform Interface (FPI) for data and state management.

## Revenue Opportunities for Partners

| Stream | Description |
|--------|-------------|
| **Theme Customization** | Modify existing themes — from minor tweaks to major overhauls. Most common work for theme developers. |
| **Bespoke Themes** | Build themes from scratch for specific sellers with unique requirements. |
| **Marketplace Themes** | Build and publish themes on the Fynd Partners Themes Marketplace for any seller to purchase. |
| **Extensions** | Build extensions that enhance theme functionality — can be sold on the Extensions Marketplace. |

## Core Technology Stack

| Technology | Role |
|-----------|------|
| **React v18** | All theme UI — pages, sections, blocks, components |
| **FDK-CLI** | Theme creation, local serve, sync, packaging, publishing |
| **FPI (fdk-store)** | Redux-based data/state layer wrapping the FDK Client SDK |
| **GraphQL (fdk-store-gql)** | API communication layer for store data |
| **Webpack** | Module bundling, code splitting, asset management |

## Key Building Blocks

```
Theme
├── Pages        ← React components at route level
│   └── Sections ← Modular content areas (seller-configurable in theme editor)
│       └── Blocks ← Individual elements within sections
└── Canvas       ← Drag-and-drop design surface in Fynd Commerce theme editor
```

## What Sellers Can Customize

Via the **Fynd Commerce Theme Editor**, sellers can:
- Add, remove, and reorder sections on any page
- Configure section/block settings (text, colors, images, toggles)
- Adjust global settings (color palette, fonts, cart behavior)
- Preview changes before publishing

Developers control what sellers can customize by defining sections, blocks, and settings schemas.

## Marketplace Requirements

To publish a theme on the Fynd Partners Marketplace, it must meet:
- Essential Fynd Commerce features included
- Technical compliance (SSR-safe, no hardcoded URLs)
- Zero bugs, proper accessibility and performance
- Complete theme listing with screenshots, description, pricing
- Properly configured demo store

## Tools Reference

| Tool / Command | What It Does |
|----------------|-------------|
| `npm install -g @gofynd/fdk-cli` | Install FDK-CLI globally |
| `fdk login` | Authenticate with Fynd Partners account |
| `fdk theme new --name <name>` | Generate theme boilerplate |
| `fdk theme serve` | Run theme locally at `localhost:5001` |
| `fdk theme sync` | Push theme code to Fynd Commerce |
| `fdk theme open` | Open live preview in browser |
| `fdk theme package` | Create zip for marketplace submission |
| `fdk theme context -n <name>` | Create context for syncing between themes |
