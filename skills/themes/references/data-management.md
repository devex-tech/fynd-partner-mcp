# Themes — Data Management

## Overview

Data management in Fynd themes uses **fdk-store** (a Redux Toolkit wrapper over the FDK Client SDK). The store automatically updates based on SDK actions and exposes getters for reading state.

```
fdk-store docs: https://github.com/gofynd/fdk-store/blob/v2.0.2/docs/API.md
fdk-store-gql docs: https://github.com/gofynd/fdk-store-gql/blob/v1_0_1/README.md
```

---

## FDK Store Setup

```bash
npm install https://github.com/gofynd/fdk-store.git#v2.0.2
```

```jsx
import FDKStore from 'fdk-store';

const { client: fpi } = new FDKStore({
  applicationID,
  applicationToken,
  domain,
  storeInitialData,
});
```

---

## Hooks from `fdk-core/utils`

### 1. `useFPI` — Access FPI instance

```jsx
import { useFPI } from "fdk-core/utils";

function Home() {
  const fpi = useFPI();
  // Use fpi for API calls, mutations, store access
}
```

### 2. `useGlobalStore` — Subscribe to Redux store slice

Similar to `useSelector` in Redux Toolkit. Re-renders component when subscribed slice changes.

```jsx
import { useGlobalStore, useFPI } from "fdk-core/utils";

function Home() {
  const fpi = useFPI();
  const page = useGlobalStore(fpi.getters.PAGE) || {};
  const products = useGlobalStore(fpi.getters.PRODUCTS) || {};
}
```

### 3. `useClientInfo` — Access client info (SSR-safe)

```jsx
import { useClientInfo } from "fdk-core/utils";

const { userAgent, themeCookie } = useClientInfo();
const themeClass = themeCookie === "dark" ? "dark-theme" : "light-theme";
```

### 4. `observeStore` — Subscribe in vanilla JS (non-React)

```jsx
const unsubscribe = fpi.observeStore(
  fpi.getters.USER_DATA,          // getter function
  (newUserState) => { /* handle change */ },  // onChange
  (prev, curr) => prev.id === curr.id         // optional equality check
);

// Later:
unsubscribe();
```

> Available in `fdk-store >= v2.0.32` and `fdk-store-gql >= v3.0.20`

### 5. `getPageSlug` — Extract page slug from router

```jsx
import { getPageSlug } from "fdk-core/utils";

export async function pageDataResolver({ fpi, router, themeId }) {
  const pageValue = getPageSlug(router);
  const currentPage = fpi.store.getState()?.theme?.page?.value ?? null;

  if (pageValue !== currentPage) {
    await fpi.theme.fetchPage({ pageValue, themeId });
  }
}
```

### 6. `convertActionToUrl(action)` — Action object → URL string

```jsx
import { convertActionToUrl } from "fdk-core/utils";

convertActionToUrl({ type: "page", page: { type: "locate-us" } });
// → "/locate-us"

convertActionToUrl({ type: "page", page: { type: "products", query: { department: ["men"] } } });
// → "/products/?department=men"

// With locale
convertActionToUrl(action, "en"); // → "/en/locate-us"
```

### 7. `convertUrlToAction(url)` — URL string → Action object

```jsx
import { convertUrlToAction } from "fdk-core/utils";

convertUrlToAction("/products/?department=men");
// → { type: "page", page: { type: "products", query: { department: ["men"] } } }
```

---

## Custom Store Values

Store and retrieve arbitrary values in the Redux store:

```jsx
// Set
fpi.custom.setValue('userName', 'Theme devs');
fpi.custom.setValue('engineName', 'React');

// Get
const CustomValue = useGlobalStore(fpi.getters.CUSTOM_VALUE);
// → { userName: 'Theme devs', engineName: 'React' }
```

---

## FPI Mutations (for Extensions)

Extensions can intercept and modify GraphQL mutations/queries triggered by the storefront — without modifying theme code.

### Apply a Mutation

```jsx
fpi.mutations.apply("addItemsToCart", async (request) => {
  // Option 1: Modify request and forward to server
  return {
    requestParam: { ...updatedRequest },
    query: someGraphQLQuery,
  };

  // Option 2: Short-circuit with a mocked response
  return {
    response: {
      data: { addItemsToCart: { /* mocked data */ } }
    }
  };
});
```

> ⚠️ Don't combine `response` with `requestParam`/`query` — using `response` short-circuits the flow.

### Remove a Mutation

```jsx
fpi.mutations.remove("someMutation");           // Remove all callbacks
fpi.mutations.remove("someMutation", myFn);    // Remove specific callback
```

---

## Global Provider, Data Resolver, Page Resolver

### GlobalProvider — Root React Wrapper

Wraps the entire app. Define a HOC and export it from `index.jsx`:

```jsx
function GlobalProvider({ children }) {
  return <div className="provider">{children}</div>;
}

// In index.jsx bootstrap return:
getGlobalProvider: () => GlobalProvider
```

### globalDataResolver — Initial App Load

Called once by the theme engine on first load:

```jsx
export async function globalDataResolver({ fpi, applicationID }) {
  return Promise.all([
    fpi.configuration.fetchApplication(),
    fpi.content.fetchLandingPage(),
    fpi.content.fetchAppSeo(),
    fpi.content?.fetchTags(),
    fpi.auth?.fetchPlatformData({ id: applicationID }),
  ]).catch(console.log);
}

// In index.jsx: return { globalDataResolver, ... }
```

### pageDataResolver — Every Route Change

Called by the theme engine on every navigation:

```jsx
export async function pageDataResolver({ fpi, router, themeId }) {
  const state = fpi.store.getState();
  const pageValue = getPageSlug(router);
  const currentPage = state?.theme?.page?.value ?? null;

  const APIs = [];
  if (pageValue && pageValue !== currentPage) {
    APIs.push(fpi.theme.fetchPage({ pageValue, themeId }));
  }

  return Promise.all(APIs).catch(console.log);
}

// In index.jsx: return { pageDataResolver, ... }
```

---

## Host Components from `fdk-core/components`

### FDKLink — Internal Navigation

Use instead of `<a>` tags for internal links:

```jsx
import { FDKLink } from 'fdk-core/components';
<FDKLink to={link}><p>{title}</p></FDKLink>
```

### SectionRenderer — Render Page Sections

```jsx
import { SectionRenderer } from 'fdk-core/components';
const { sections = [] } = useGlobalStore(fpi.getters.PAGE) || {};
return <SectionRenderer sections={sections} />;
```

### HTMLContent — Safe HTML Rendering

```jsx
import { HTMLContent } from 'fdk-core/components';
<HTMLContent content="<div><h1>Welcome!</h1></div>" />
```
