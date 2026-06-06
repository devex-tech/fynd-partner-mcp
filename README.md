# fynd-partner-mcp

> MCP server for Fynd Partner documentation — Platform API, Extensions (General, Payment, Logistics), and AI PIM.

Install once. Ask your AI anything about the Fynd Partner platform.

---

## What This Covers

| Sub-Skill | Topics |
|-----------|--------|
| **Platform API** | 843 ops across Catalog, Orders, Cart, Content, Logistics, Payments, Communication, and more |
| **General Extension** | FDK CLI, bindings, webhooks, deployment pipeline |
| **Payment Extension** | Payment/refund APIs, HMAC checksum, state machines |
| **Logistics Extension** | DP schemes, accounts, order journey, status sync |
| **AI PIM** | SKU enrichment, taxonomy, inbound/outbound connectors, rule engine, marketplace publishing |

---

## Installation

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "fynd-partner": {
      "command": "npx",
      "args": ["-y", "fynd-partner-mcp"]
    }
  }
}
```

Restart Claude Desktop.

---

### Cursor

Add to `~/.cursor/mcp.json` (global) or `.cursor/mcp.json` (per project):

```json
{
  "mcpServers": {
    "fynd-partner": {
      "command": "npx",
      "args": ["-y", "fynd-partner-mcp"]
    }
  }
}
```

---

### Windsurf

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "fynd-partner": {
      "command": "npx",
      "args": ["-y", "fynd-partner-mcp"]
    }
  }
}
```

---

### VS Code (GitHub Copilot)

Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "fynd-partner": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "fynd-partner-mcp"]
    }
  }
}
```

---

### Zed

Add to your Zed settings:

```json
{
  "context_servers": {
    "fynd-partner": {
      "command": { "path": "npx", "args": ["-y", "fynd-partner-mcp"] }
    }
  }
}
```

---

## Available Tools

Once installed, your AI has access to three tools:

| Tool | What It Does |
|------|-------------|
| `fynd_list_topics` | Lists all available sub-skills and reference files |
| `fynd_get_docs` | Loads a specific reference file (e.g. `skill="platform-api"`, `topic="catalog"`) |
| `fynd_search` | Full-text search across all docs — returns matching snippets |

### Example Prompts

```
Which Fynd Platform API should I use to list all products in a store?

How do I implement HMAC checksum for a payment extension?

How does the order journey work in a logistics extension?

What's the inbound connector endpoint for AI PIM and how do I authenticate?

Show me the assign DP webhook payload structure.

What roles are available in AI PIM and what can each role do?
```

---

## Supported AI Tools

| Tool | MCP Support |
|------|-------------|
| Claude Desktop | ✅ |
| Cursor | ✅ |
| Windsurf | ✅ |
| VS Code (Copilot) | ✅ |
| Zed | ✅ |
| Codex | ✅ (via skill files) |

---

## Development

```bash
git clone https://github.com/devex-tech/fynd-partner-mcp.git
cd fynd-partner-mcp
npm install
npm run build
node dist/index.js
```

To update skill content, edit the markdown files in `skills/` and rebuild.

---

## Publishing a New Version

```bash
# Bump version in package.json, then:
git tag v1.0.1
git push --tags
# GitHub Actions automatically publishes to npm
```

---

## License

MIT
