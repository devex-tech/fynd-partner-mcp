# Themes — Development

## ServerFetch (SSR)

`ServerFetch` is a static method added to page components for Server-Side Rendering. It runs on the server before HTML is rendered — essential for SEO-critical pages like PLP, PDP.

```ts
function serverFetch({ fpi, router, cookies, themeId }): Promise<any>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `fpi` | object | FPI client — use for `fpi.executeGQL()` and store updates |
| `router` | object | Current route — includes `params`, `filterQuery` |
| `cookies` | object | Request cookies — contains `themeCookie` |
| `themeId` | string | Current theme ID |

### PLP Example (SSR + CSR Combined)

```jsx
const ProductListing = ({ fpi }) => {
  const productLists = useGlobalStore(fpi.getters.PRODUCTS) || {};

  // CSR fallback — fetch on client if SSR didn't load data
  useEffect(() => {
    if (!productLists || Object.keys(productLists).length === 0) {
      fpi.products.fetchProducts({});
    }
  }, [productLists, fpi]);

  return <>{/* Render products */}</>;
};

// SSR — fetch on server before render
ProductListing.serverFetch = async ({ fpi, router }) => {
  return fpi.products.fetchProductListing({
    pageNo: router.filterQuery?.page_no ?? 1,
    pageSize: 12,
  });
};

export default ProductListing;
```

### themeCookie in ServerFetch

Use `cookies.themeCookie` for custom server-side logic or non-FPI APIs:
- FPI calls (`fpi.executeGQL()`) automatically include `themeCookie` in the Cookie header — **no need to pass it explicitly**
- Use `cookies.themeCookie` only when calling your own backend or third-party services

```jsx
ProductListing.serverFetch = async ({ fpi, router, cookies, themeId }) => {
  await fpi.executeGQL(PRODUCT_LISTING_QUERY, { slug: router.params?.slug });

  const themeMode = cookies?.themeCookie || 'default';
  if (themeMode === 'dark-mode') {
    // Custom API call based on theme
  }
  return Promise.resolve();
};
```

### Client-Side themeCookie Access

```jsx
import { useClientInfo } from 'fdk-core/utils';

function ThemeSwitcher() {
  const { themeCookie } = useClientInfo();
  return <span>Current theme: {themeCookie || 'default'}</span>;
}
```

---

## AuthGuard

`authGuard` is a static method that controls route access based on authentication status.

### `loginGuard` — Redirect authenticated users away from login/register

```jsx
const loginGuard = async ({ fpi, store, redirectUrl }) => {
  try {
    const loggedIn = await isLoggedIn({ fpi, store });
    if (loggedIn) {
      if (isRunningOnClient()) {
        window.location.navigate(redirectUrl ?? "/");
      }
      return;
    }
  } catch (error) {
    return true;
  }
};

PageWithAuthGuard.authGuard = loginGuard;
```

### `isLoggedIn` — Restrict page to authenticated users only

```jsx
const isLoggedIn = async ({ fpi, store }) => {
  const userFetched = store?.auth?.user_fetched ?? false;
  if (userFetched) return store?.auth?.logged_in;

  const { payload } = await fpi.auth.fetchUserData();
  return !!(payload?.user ?? false);
};

PageWithLoginCheck.authGuard = isLoggedIn;
```

---

## FPI Client

The FPI (Fynd Platform Interface) client is the core interface for data fetching and state management.

### Access via Hook

```jsx
import { useFPI } from "fdk-core/utils";

function Home() {
  const fpi = useFPI();
  // Use fpi for API calls, store access, etc.
}
```

### Read Redux State

```jsx
import { useGlobalStore, useFPI } from "fdk-core/utils";

function Home() {
  const fpi = useFPI();
  const page = useGlobalStore(fpi.getters.PAGE) || {};
  // Component re-renders when PAGE slice changes
}
```

> Use `console.log(fpi.getters)` to see all available getters.

### Get Current State Snapshot

```jsx
const currentState = fpi.store.getState();
```

---

## Color Palette — CSS Variables

The theme engine maps seller-configured colors to CSS variables. Use these in your stylesheets:

```css
color: var(--textHeading, #26201a);
background-color: var(--bgColor, #ffffff);
```

### General Colors

| CSS Variable | Description |
|-------------|-------------|
| `--primaryColor` | Primary button color |
| `--secondaryColor` | Heading text color |
| `--accentColor` | Theme accent color |
| `--linkColor` | Link color |
| `--bgColor` | Page background (default: `#f8f8f8`) |
| `--textHeading` | Heading text |
| `--textBody` | Body text |
| `--textLabel` | Label text |
| `--textSecondary` | Secondary text |
| `--buttonPrimary` | Primary button |
| `--buttonSecondary` | Secondary button |
| `--buttonLink` | Link button |

### Sale/Discount Colors

| CSS Variable | Description |
|-------------|-------------|
| `--saleBadgeBackground` | Sale badge background |
| `--saleBadgeText` | Sale badge text |
| `--saleDiscountText` | Discount text color |
| `--saleTimer` | Sale timer elements |

### Header / Footer Colors

| CSS Variable | Description |
|-------------|-------------|
| `--headerBackground` | Header background |
| `--headerNav` | Header navigation text |
| `--headerIcon` | Header icon color |
| `--footerBackground` | Footer background |
| `--footerBottomBackground` | Footer bottom section |
| `--footerHeadingText` | Footer heading text |
| `--footerBodyText` | Footer body text |
| `--footerIcon` | Footer icon color |

### Advanced Colors

| CSS Variable | Description |
|-------------|-------------|
| `--dialogBackground` | Dialog/modal background |
| `--overlay` | Overlay/popup color |
| `--dividerStokes` | Divider stroke color |
| `--successBackground` / `--successText` | Success alerts |
| `--errorBackground` / `--errorText` | Error alerts |
| `--informationBackground` / `--informationText` | Info alerts |

---

## UTM / Origin Tracking (f_param)

Add Fynd's custom tracking parameters to product URLs to capture user journey analytics:

```js
action.page.query = {
  f_source: 'collection',   // Required: where user came from
  f_id: 'summer-collection', // Context identifier
  f_content: '1',           // Item position
  f_medium: 'banner',
  f_campaign: 'summer_2024'
};
```

| Parameter | Description |
|-----------|-------------|
| `f_source` | Origin: `wishlist`, `collection`, `search`, `extension` |
| `f_id` | Context ID (collection slug, category, campaign ID) |
| `f_content` | Item position/placement |
| `f_medium` | Channel identifier |
| `f_campaign` | Campaign name |
| `f_term` | Search keyword |

> Access via `router.filterQuery` in components/resolvers. Always use `convertActionToUrl()` — never hardcode URLs.
