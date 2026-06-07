# Themes — Setup & Getting Started

## Prerequisites

- Git + Node.js v18 or later
- Account on [Fynd Partners](https://partners.fynd.com/auth/register)
- Development Company (created in Partners Panel → Companies → Development → Add)

---

## Step 1: Install FDK-CLI

```bash
npm install -g @gofynd/fdk-cli
```

Verify:
```bash
fdk --version
```

> If global install fails due to permissions, use `sudo npm install -g @gofynd/fdk-cli`

---

## Step 2: Login to Fynd Partners

```bash
fdk login
```

This opens a browser redirect to the Partners panel. After login, select your Partner Organization.

**Custom environment (cluster):**
```bash
fdk login --host partners.fynd.com
```

Verify login:
```bash
fdk user
```

---

## Step 3: Create a Theme (Boilerplate)

```bash
fdk theme new --name name-of-the-theme
```

FDK-CLI will prompt:
1. Select account type (development or live)
2. Select account/company
3. Select Sales Channel

A folder named after your theme is created locally.

> **Tip:** Emerge is Fynd Commerce's reference theme — you can use it as your starting point.

---

## Step 4: Preview Locally

```bash
cd theme-name
fdk theme serve
```

Theme previews at `localhost:5001` (port may vary based on availability).

**Preview in Fynd Commerce dashboard:**
1. Go to: Sales Channel → **Appearance** → **Themes**
2. Find your theme under **Theme Drafts**
3. Click three dots (⠇) → **Preview**

---

## Step 5: Sync Theme to Fynd Commerce

Ensure local changes work before syncing:

```bash
fdk theme sync
```

If the command fails, review and fix code errors first.

**Verify sync:**
```bash
fdk theme open
```

This opens the live preview where you can confirm changes are applied.

---

## Step 6: Sync Between Themes

When you want to push code from one theme (source) to another (target, e.g., your live storefront theme):

```bash
# In the source theme directory
fdk theme context -n <context-name>
```

Follow prompts: log in → choose dev/live → select company → select sales channel → select target theme.

Then sync:
```bash
fdk theme sync
```

> ⚠️ Cross-framework syncing (React ↔ Vue) is **not supported**. React themes can only sync with React themes.

---

## Step 7: Package for Submission

When ready to submit to the marketplace:

```bash
fdk theme package
```

Creates a `.zip` file in your theme directory. Upload this in the Partners Panel → Themes → Submit Theme.

---

## FDK-CLI Quick Reference

| Command | What It Does |
|---------|-------------|
| `fdk login` | Authenticate with Fynd Partners |
| `fdk login --host <url>` | Login to specific cluster |
| `fdk user` | Show current logged-in user |
| `fdk theme new --name <name>` | Create new theme from boilerplate |
| `fdk theme serve` | Serve locally on localhost:5001 |
| `fdk theme sync` | Push code to Fynd Commerce |
| `fdk theme open` | Open live preview in browser |
| `fdk theme package` | Create zip for submission |
| `fdk theme context -n <name>` | Set up cross-theme sync context |
| `fdk --debug` | Enable debug logs for troubleshooting |
