# Themes — Structure

## Directory Layout

```
theme-name/
├── .fdk/                      ← FDK config (context.json for sync)
├── themes/
│   ├── assets/                ← Images, fonts, static files
│   ├── components/            ← Reusable components specific to this theme
│   ├── config/
│   │   ├── settings_data.json ← Saved setting values (editable in theme editor)
│   │   └── settings_schema.json ← Setting definitions
│   ├── constants/             ← Theme constants
│   ├── custom-templates/      ← Custom page templates (mounted at /c/page-name)
│   ├── helper/                ← Utility functions and helper methods
│   ├── page-layouts/          ← Page layout wrapper components
│   ├── pages/                 ← System page components (home, pdp, plp, cart, etc.)
│   ├── sections/              ← Reusable section components
│   ├── styles/                ← Theme-specific styles
│   └── index.jsx              ← Entry file — bootstraps the theme bundle
├── .eslintrc.js
├── .gitignore
├── config.json
├── package.json
├── README.md
└── webpack.config.js
```

**Required directories:** `pages/`, `sections/`, `config/`, `index.jsx`  
**Optional:** `page-layouts/`, `helper/`, `styles/`, `constants/`, `components/`

---

## index.jsx — Theme Bootstrap

The entry file exports a default async function that returns the theme bundle object:

```jsx
import FPIClient from "fdk-store";
import sections from "./sections";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default async ({ applicationID, applicationToken, domain, storeInitialData }) => {
  const { client: fpi } = new FPIClient({ applicationID, applicationToken, domain, storeInitialData });

  return {
    fpi,
    sections,
    getHeader: () => Header,
    getFooter: () => Footer,
    // Pages — use dynamic import for code splitting
    getProductListing: () => import(/* webpackChunkName:"getProductListing" */ "./pages/product-listing"),
    // Resolvers and providers
    globalDataResolver,
    pageDataResolver,
    getGlobalProvider: () => GlobalProvider,
  };
};
```

---

## Pages

Pages are React components mounted at route level by the Skyfire Theme Engine.

### 4 Types of Pages

| Type | Route | Description |
|------|-------|-------------|
| **System Pages** | `/`, `/product/:slug`, `/cart`, etc. | Standard e-commerce pages — home, PDP, PLP, cart, checkout, etc. Placed in `pages/` folder |
| **Custom Templates** | `/c/page-name` | Pages for non-standard use cases — placed in `custom-templates/` |
| **Marketing Pages** | Custom routes | Campaign landing pages |
| **Section Pages** | Any route | Pages composed entirely of configurable sections |

**Important:** All theme pages must be returned from the bootstrap function in `index.jsx`. Any file in `pages/` that doesn't match a system page name may throw an error during `fdk theme sync`.

### Custom Template Setup

```jsx
// custom-templates/index.jsx
import React from "react";
import { Route } from "react-router-dom";
import Careers from "./careers";
import Offers from "./offers";

export default [
  <Route path="careers" element={<Careers />} />,
  <Route path="offers" element={<Offers />} />,
];
```

---

## Sections

Sections are modular, reusable content areas within pages. Sellers can add, remove, and reorder sections in the Fynd Commerce theme editor without touching code.

Each section file exports a React component plus optional `propTypes` and `schema` for editor configuration.

---

## Blocks

Blocks are individual elements within sections — e.g., a banner image within a hero section, or a product card within a grid. Blocks can also be configured by sellers in the theme editor.

---

## Canvas

The Canvas is the drag-and-drop visual editor in Fynd Commerce. Sellers use it to:
- Add/remove sections on any page
- Reorder sections by drag-and-drop
- Configure section/block settings (text, images, toggles, color pickers)
- Preview changes in real time

Developers define what sellers can configure by adding `schema` to sections and blocks.

---

## Config Files

### settings_data.json
Container for theme setting values — all theme-level global settings. Updated whenever a seller changes a setting in the theme editor.

```json
{
  "props": [
    {
      "type": "checkbox",
      "id": "disable_cart",
      "default": false,
      "category": "Cart",
      "label": "Disable Cart"
    }
  ]
}
```

**4 parent objects:** `list` (current values), `current` (active settings name), `preset` (default sections per page), `information` (theme metadata for marketplace listing)

**Access in theme code:**
```jsx
import { useGlobalStore, useFPI } from "fdk-core/utils";

const fpi = useFPI();
const THEME = useGlobalStore(fpi.getters.THEME);
const props = THEME?.config?.list?.[0]?.global_config?.custom?.props;
```

### settings_schema.json
Defines the available setting types, their keys, labels, and default values. The schema drives what appears in the theme editor UI.
