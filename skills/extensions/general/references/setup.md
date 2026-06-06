# General Extension — Setup & Local Development

## Prerequisites
- Git + Node.js v18+
- Fynd Partners account at partners.fynd.com
- Development Company (created in Partners → Companies → Development)

## Step 1: Install FDK CLI
```bash
npm install -g @gofynd/fdk-cli
fdk --version   # verify install
```

## Step 2: Generate Boilerplate
```bash
fdk login                              # authenticate with Fynd Partners
fdk extension init                     # interactive setup
# or: fdk ext init --template node-react
```

Prompts:
- Extension name, slug
- Extension type (General)
- Launch type (Company / Application)

Generated structure:
```
<extension_name>/
├── .env                    # API key, secret, base URL
├── extension.context.json  # DO NOT EDIT — managed by FDK CLI
├── index.js                # Backend entry
├── server.js               # Express server + setupFdk config
└── frontend/
    ├── index.html
    ├── index.jsx
    ├── router.jsx
    └── pages/
        └── Home.jsx
```

Key backend dependencies:
- `@gofynd/fdk-extension-javascript` — FDK helper library
- `@gofynd/fdk-client-javascript` — peer dependency for SDK methods
- `express`, `sqlite3`, `dotenv`

## Step 3: Populate Test Data
```bash
fdk populate
```
Creates sample products, orders, and inventory in your Development Company.

## Step 4: Preview Locally
```bash
fdk extension preview
# or with custom tunnel:
fdk extension preview --tunnel-url https://your-ngrok-url.ngrok.io
```

Copies the preview URL → paste in browser → "Accept and Continue" → you're in your extension UI.

## Environment Variables (.env)
```
EXTENSION_API_KEY=your_api_key
EXTENSION_API_SECRET=your_api_secret
EXTENSION_BASE_URL=https://your-ngrok-url.ngrok.io
```

Get `API_KEY` and `API_SECRET` from: Partners Panel → Extensions → your extension → Settings.

## Getting API Key & Secret
1. partners.fynd.com → Extensions → Create Extension
2. Fill extension type, name, URL
3. Save → note **API Key** and **API Secret** shown on extension detail page
