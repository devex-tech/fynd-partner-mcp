# Themes — Best Practices

## Fynd-Specific Best Practices

### FPI / SSR
- **Write SSR-compatible code** — assume all code may execute on the server
- **Guard `window` and `document`** — always check if in browser context before use:
  ```jsx
  if (typeof window !== 'undefined') { /* browser-only code */ }
  ```
- **Two data fetch paths** — one for SSR (initial page load via `serverFetch`), one for SPA navigation (via `useEffect` or `pageDataResolver`)
- **Image optimization** — use `transformImage` utility (wraps PixelBin resize) to load images at the correct screen size
- **Single GraphQL call** — fetch ALL needed data in one `fpi.executeGQL()` call; fetch ONLY what's needed
- **Be careful with FPI events** — don't accidentally interfere with analytics events
- **SEO always in mind** — use `serverFetch` for PDP/PLP, set proper meta tags
- **No hardcoded storefront URLs** — always use action objects + `convertActionToUrl()` to preserve UTM parameters
- **Avoid hacks** — shortcuts create tech debt; follow patterns properly

### FDK-CLI
- Install globally: `npm install -g @gofynd/fdk-cli`
- Keep FDK-CLI updated to latest version
- Use `--debug` flag to resolve issues before reaching out: `fdk theme serve --debug`
- Validate theme locally before syncing to production
- Run `fdk theme sync` and verify with `fdk theme open` after every significant change

---

## React Best Practices

### Component Design
- **Functional components** — prefer over class components
- **Reusability** — break UI into small, reusable components (ideally < 300 lines)
- **Folder structure** — organize as `components/`, `pages/`, `hooks/`, `sections/`
- **Error boundaries** — wrap components to gracefully handle rendering errors

### State Management
- Use `useState`, `useReducer`, `useContext` for local state
- For shared state — use `useGlobalStore` with `fpi.getters` (avoid prop drilling)
- Don't duplicate store data in local state if it's already in fdk-store

### Styling
- **CSS Modules** — preferred for scoped styles (`.module.css`)
- **CSS-in-JS** — styled-components or emotion for dynamic styles
- **Tailwind CSS** — for utility-first styling (ensure SSR-safe setup)
- **Color palette variables** — always use `var(--primaryColor)` etc. for seller-configurable colors

### Code Splitting
- Use React `lazy()` + `Suspense` for dynamic imports
- Use Webpack `/* webpackChunkName:"name" */` comments for theme pages
- Split each page into its own chunk via the `index.jsx` bootstrap function
- ChunkName **must match** the key in the returned object

### Performance
- **Memoization** — `React.memo`, `useMemo`, `useCallback` to prevent unnecessary re-renders
- **Debounce/throttle** — for search inputs and expensive operations
- **Keys in lists** — always provide unique `key` props for list items

### Accessibility
- Use semantic HTML (`<button>`, `<form>`, `<nav>`, `<main>`)
- Include ARIA attributes where needed (`aria-label`, `aria-hidden`)
- Test keyboard navigation and screen reader support
- Minimum contrast ratio: **4:1** between text and background

---

## JavaScript Best Practices

### Code Quality
- **ESLint** — with React-specific configuration (`.eslintrc.js` provided in boilerplate)
- **Prettier** — consistent code formatting
- **TypeScript or PropTypes** — for type safety

### Common Pitfalls
- **Never mutate state** — always return new state objects in `setState`
- **Avoid anonymous functions in JSX** — use `useCallback` instead for performance
- **Use functional array methods** — `.map()`, `.filter()`, `.reduce()` over imperative loops
- **Async/await** — with `try/catch` for proper error handling

### Modern Syntax
- Arrow functions, destructuring, `const`/`let` (never `var`)
- Template literals, spread/rest operators
- Optional chaining (`?.`) and nullish coalescing (`??`)

---

## General Best Practices

### Version Control
- Follow branching strategy (Git Flow recommended)
- Write descriptive commit messages
- Never commit sensitive data — use environment variables for API keys

### Testing
- Test theme configurations (settings, customizations) thoroughly
- **Unit tests** — React Testing Library or Enzyme; aim for 80%+ coverage
- **Snapshot tests** — for consistent UI
- **E2E tests** — Cypress or Playwright for full user flows
- **Jest** — for overall JavaScript testing

### Documentation
- Comment complex logic in code
- Use JSDoc for utility functions and helper methods
- Use Storybook for documenting components

### Performance Monitoring
- **React DevTools** — profile render performance
- **Image optimization** — use `transformImage`, minify assets, leverage browser caching
- **Code audit** — run `fdk theme sync` regularly to catch issues early

### Security
- **Sanitize inputs** — prevent XSS attacks
- **No hardcoded secrets** — use environment variables for API keys and credentials
- **Audit dependencies** — regularly check for vulnerabilities with `npm audit`

---

## Quick Checklist Before `fdk theme sync`

- [ ] No `window`/`document` without browser check
- [ ] No hardcoded URLs — using `convertActionToUrl()`
- [ ] `serverFetch` added to all SEO-critical pages
- [ ] Images use `transformImage` for optimization
- [ ] No console errors in local serve (`localhost:5001`)
- [ ] Settings accessible in theme editor (`settings_data.json` correct)
- [ ] All pages exported from `index.jsx` bootstrap function
- [ ] Mobile layout tested
- [ ] Accessibility: semantic HTML, ARIA, keyboard navigation
