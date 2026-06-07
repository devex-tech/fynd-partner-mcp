---
name: fynd-partner/themes
description: >-
  Skill for Fynd Commerce Theme development. Use when a Fynd partner asks about
  building, customizing, or publishing themes — including FDK-CLI setup,
  React-based theme structure, ServerFetch (SSR), AuthGuard, FPI client, data
  management, sections/blocks, color palette, Tailwind CSS, headless themes,
  submission, or best practices.
---

# Fynd Commerce Themes Skill

## What This Skill Covers

Fynd Commerce themes are React v18-based storefronts that define the look, feel, and user interactions of a seller's online store. Partners can build, customize, and sell themes on the Fynd Partners Marketplace.

## Mode Detection

| If the question is about... | Load |
|-----------------------------|------|
| What themes are, features, revenue streams, tools | `references/overview.md` |
| FDK-CLI install, login, creating a theme, serve, sync | `references/setup.md` |
| Directory structure, pages, sections, blocks, canvas, config files | `references/structure.md` |
| ServerFetch (SSR), AuthGuard, FPI client, color palette | `references/development.md` |
| fdk-store, FPI mutations, hooks (useFPI, useGlobalStore), resolvers | `references/data-management.md` |
| Tailwind CSS, headless, locale/i18n, code splitting, theme sync, migration | `references/advanced.md` |
| Submitting to marketplace, packaging, review process, rejection reasons | `references/submission.md` |
| Best practices — Fynd, React, JS, general | `references/best-practices.md` |

## Key Terms

| Term | Meaning |
|------|---------|
| **FDK-CLI** | Fynd Development Kit CLI — tool for creating, serving, syncing, and packaging themes |
| **FPI** | Fynd Platform Interface — client for data fetching + Redux store interactions |
| **fdk-store** | Redux Toolkit wrapper over FDK Client SDK — manages global app state |
| **ServerFetch** | SSR data-fetching function — runs on server before HTML render |
| **AuthGuard** | Route access control based on authentication status |
| **Section** | Modular, reorderable content area within a page — configured by sellers in theme editor |
| **Block** | Individual element within a section |
| **Page** | React component mounted at route level by the theme rendering engine |
| **Canvas** | The drag-and-drop design surface in the Fynd Commerce theme editor |
| **settings_data.json** | Container for theme setting values — accessible in theme editor |
| **useGlobalStore** | Hook to subscribe to Redux store slices via `fpi.getters` |
| **GlobalProvider** | HOC that wraps the entire React app at root level |
| **globalDataResolver** | Fetches data once on initial app load |
| **pageDataResolver** | Fetches data on every route change |
