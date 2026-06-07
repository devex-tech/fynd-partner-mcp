# Themes — Advanced Topics

## Tailwind CSS Integration

Integrate Tailwind CSS alongside the existing Less + Webpack setup for utility-first styling.

### Why Tailwind?
As themes grow, managing multiple Less files becomes complex. Tailwind provides consistent utility classes and accelerates UI development while gradual transition from Less remains possible.

### Setup (SSR-safe with Webpack)

1. **Install dependencies:**
```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init
```

2. **Configure `tailwind.config.js`:**
```js
module.exports = {
  content: ["./themes/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

3. **Add to `webpack.config.js`:** Configure PostCSS loader alongside existing `less-loader` and `css-loader`.

4. **Import in your theme entry:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> SSR compatibility: Ensure Tailwind purges unused styles in production. Test all Tailwind classes in SSR context — avoid dynamic class generation that can't be purged.

---

## Headless Themes

Headless themes decouple the frontend from Fynd Commerce's default rendering, giving complete control over the UI while still using FPI for data.

### Key Characteristics
- Full control over routing and rendering
- Use any React UI library
- FPI still handles data, auth, cart, and analytics
- Better performance — ship only what's needed

### Setup Considerations
- All pages must still be exported from `index.jsx` bootstrap
- `serverFetch` and `authGuard` still work the same way
- Use `fpi.executeGQL()` for all data fetching
- Use `convertActionToUrl()` / `convertUrlToAction()` for all navigation — never hardcode URLs

---

## Locale / Internationalization (i18n)

Fynd themes support multilingual content.

### Setup

1. Create locale files per language (e.g., `en.json`, `hi.json`, `ar.json`)
2. Load the active locale based on the user's preference or URL
3. Use a translation utility or React context to provide strings to components

### Key Points
- RTL languages (Arabic, Hebrew) require CSS `direction: rtl` on the root element
- Keep translation keys consistent across all locale files
- Access locale in `serverFetch` via `router.params` for locale-prefixed routes (e.g., `/en/product/slug`)
- Use FPI's locale support for marketplace data (product names, descriptions) where available

---

## Code Splitting

Split large components or pages into separate chunks to reduce initial load time.

### React Lazy + Suspense

```jsx
import React, { lazy, Suspense } from 'react';

const ProductListing = lazy(() => import('./pages/product-listing'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductListing />
    </Suspense>
  );
}
```

### Webpack Dynamic Import (Recommended for Theme Pages)

In `index.jsx`, use Webpack's dynamic `import()` with a chunk name:

```jsx
return {
  // Each page is a separate chunk — loads only when needed
  getProductListing: () => import(/* webpackChunkName:"getProductListing" */ "./pages/product-listing"),
  getProductDescription: () => import(/* webpackChunkName:"getProductDescription" */ "./pages/product-description"),
  getCart: () => import(/* webpackChunkName:"getCart" */ "./pages/cart"),
};
```

> ⚠️ The `webpackChunkName` comment **must match** the key in the returned object exactly.

### Code Splitting for Sections

Sections can also be split independently. Export each section with a dynamic import in the sections index to avoid loading all section code upfront.

---

## Syncing Code Between Themes

Move code from one theme (development) to another (live/production) without manual file transfer.

### Step 1: Create Context in Source Theme

```bash
# In the source theme directory
fdk theme context -n <context-name>
```

Follow prompts:
1. Log in to Fynd Partners (if not already authenticated)
2. Choose Yes to initialize as a theme
3. Choose dev or live account
4. Select company
5. Select sales channel
6. Select **target theme** (where code will be pushed)

Context file created at `.fdk/context.json`.

### Step 2: Sync

```bash
fdk theme sync
```

Pushes source code to the selected target theme.

### Verify in Dashboard

Fynd Commerce → Sales Channel → Theme → Store Design → Target Theme.

> ⚠️ Cross-framework sync is **not supported** (React ↔ Vue). React themes only sync with React themes.

---

## Vue to React Migration

If you have an existing Vue-based theme and want to migrate to React:

### Key Differences

| Aspect | Vue Theme | React Theme |
|--------|-----------|-------------|
| Entry file | `index.js` | `index.jsx` |
| State management | Vuex | Redux (fdk-store) |
| Data fetching | `asyncData` / lifecycle hooks | `serverFetch` static method |
| Routing | Vue Router | React Router via theme engine |
| Components | `.vue` SFCs | `.jsx` / `.tsx` |
| Styling | `<style scoped>` | CSS Modules / styled-components / Tailwind |

### Migration Steps
1. Create a new React theme boilerplate: `fdk theme new --name migrated-theme`
2. Port Vue components → React functional components
3. Replace Vuex store interactions → `useFPI()` + `useGlobalStore()`
4. Replace `asyncData` → `serverFetch`
5. Replace Vue Router navigation → `FDKLink` + `convertActionToUrl()`
6. Test thoroughly with `fdk theme serve` before syncing

> You cannot sync Vue code to a React theme context — start fresh with the React boilerplate.
