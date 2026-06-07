# Themes — Submission & Marketplace

## Submission Overview

When your theme is ready, submit it to the Fynd Partners Themes Marketplace through the Partners Panel. The theme undergoes a review and can be approved or rejected.

> **Before submitting:** Ensure `fdk theme sync` runs successfully on the application.

---

## 7-Step Submission Process

### Step 1: Create Theme Package

In your theme directory:
```bash
fdk theme package
```

Creates a `.zip` file named after your theme and version. This is the file you'll upload.

### Step 2: Access Submission Page

1. Log in to [Fynd Partners](https://partners.fynd.com/)
2. In sidebar, click **Themes**
3. Click **Submit Theme** → **Get Started**

### Step 3: Upload Theme File + Release Notes

- Upload the `.zip` file from Step 1
- Add release notes describing what's new/changed
- Click **Continue**

### Step 4: Theme Details

| Field | What to Provide |
|-------|----------------|
| **Theme Title** | Catchy, descriptive name |
| **Tagline** | Compelling one-liner conveying unique selling points |
| **Theme Description** | Concise overview of key features and value proposition |
| **Screenshots** | Desktop + mobile images (own all images, correct aspect ratio) |

### Step 5: Value Proposition

| Field | Notes |
|-------|-------|
| **Industry** | Select up to 3 industries (fashion, electronics, beauty, etc.) |
| **Catalog Size** | Number of products the theme handles well |
| **Theme Price** | Set your marketplace price |

### Step 6: Attributes

| Field | Notes |
|-------|-------|
| **Section Title + Description** | Primary categories/purposes of the theme |
| **Key Highlights** | Up to 3 standout features |
| **Theme Features** | Full list of all features |

### Step 7: Variations

| Field | Notes |
|-------|-------|
| **Variation Names** | Unique names for different pre-designed layouts/styles |
| **Variation Screenshots** | Desktop + mobile screenshots per variation |
| **Demo Site URL** | Optional — showcase a pre-built website using your theme |

### Step 8: Documentation & Support

| Field | Notes |
|-------|-------|
| **User Documentation** | Guide for sellers to customize and use the theme |
| **Documentation URL** | Optional — link to external docs |
| **Support Email** | For theme-related queries from sellers |

### Step 9: Review

| Field | Notes |
|-------|-------|
| **Contact Email** | Your active email for Fynd team communication during review |
| **Comment for Reviewer** | Concise instructions or context for the reviewer |

Click **Submit** → theme enters review queue.

---

## Review Process

- Fynd reviews the submitted theme against technical, maintenance, and support criteria
- Theme can be **approved** (goes live on marketplace) or **rejected** (requires fixes)
- You'll be notified via your contact email

---

## Common Rejection Reasons

| Reason | What to Fix |
|--------|------------|
| **Missing essential Fynd Commerce features** | Ensure cart, checkout, account, PDP, PLP all work correctly |
| **Technical non-compliance** | SSR-safe code, no hardcoded URLs, uses `convertActionToUrl()` |
| **Insufficient testing / bugs** | Test all pages, edge cases, mobile + desktop |
| **Style/terminology violations** | Settings labels and descriptions follow Fynd style guide |
| **Accessibility / performance issues** | Meets WCAG 2.1 AA, Core Web Vitals targets |
| **Listing/presentation issues** | Complete description, correct grammar, all required screenshots |
| **Demo store not configured** | Demo store properly set up with realistic data |
| **Outdated demo store** | Demo store reflects current theme version |
| **Unlicensed content** | All images/content in demo store is properly licensed |
| **IP infringement** | No code/components from another entity without authorization |

---

## Pre-Submission Checklist

- [ ] `fdk theme sync` runs without errors
- [ ] All system pages (home, PDP, PLP, cart, checkout, account) function correctly
- [ ] Mobile and desktop views tested
- [ ] No hardcoded URLs — all navigation uses `convertActionToUrl()`
- [ ] SSR-safe code — no `window`/`document` access without browser check
- [ ] Settings labels follow Fynd style/terminology guidelines
- [ ] Theme editor works — sections and blocks are configurable by sellers
- [ ] Accessibility: semantic HTML, ARIA attributes, keyboard navigation
- [ ] Performance: images optimized with `transformImage`, code split by page
- [ ] Demo store set up with realistic product data
- [ ] All screenshots taken (desktop + mobile per variation)
- [ ] Release notes written
