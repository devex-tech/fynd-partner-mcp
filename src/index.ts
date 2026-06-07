#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SKILLS_DIR = path.join(__dirname, "../skills");

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface TopicFile {
  topic: string;
  description: string;
  path: string;
}

interface SkillInfo {
  skill: string;
  label: string;
  files: TopicFile[];
}

interface SearchResult {
  file: string;
  skill: string;
  topic: string;
  snippet: string;
  lineNumber: number;
}

// ---------------------------------------------------------------------------
// Skill manifest — maps each sub-skill to its reference files
// ---------------------------------------------------------------------------
const SKILL_MANIFEST: Record<string, { label: string; topics: Record<string, string> }> = {
  "platform-api": {
    label: "Fynd Platform REST API",
    topics: {
      "auth":           "Authentication — OAuth, tokens, SDK setup",
      "api-index":      "Complete index of all 843 Platform API operations",
      "catalog":        "Catalog API — products, brands, categories, inventory (162 ops)",
      "orders":         "Orders API — order management, shipments (large domain)",
      "cart":           "Cart API — cart operations, promotions",
      "content":        "Content API — pages, blogs, announcements",
      "logistic":       "Logistics API — courier partners, serviceability, TAT",
      "payment":        "Payments API — payment modes, refunds",
      "communication":  "Communication API — email, SMS, push notifications",
      "configuration":  "Configuration API — app/store settings",
      "user":           "User API — customer management, authentication",
      "other-domains":  "Other domains — analytics, rewards, themes, etc.",
      "common-errors":  "Common errors, status codes, and debugging guide",
    },
  },
  "extensions/general": {
    label: "General Extension",
    topics: {
      "overview":        "What a general extension is — concepts and architecture",
      "setup":           "FDK CLI setup, boilerplate generation, local preview",
      "development":     "Bindings (Store OS/Storefront/Platform), webhooks, Platform API, GraphQL",
      "deployment":      "Testing, submission, review, and publishing pipeline",
      "troubleshooting": "Common errors, FDK issues, debugging guide",
    },
  },
  "extensions/payment": {
    label: "Payment Extension",
    topics: {
      "overview":        "Payment extension architecture and concepts",
      "payment-flow":    "Full payment initiation flow with status state machine",
      "refund-flow":     "Refund flow — 6 states from initiated to completed",
      "api-reference":   "All 6 required payment APIs with full request/response schemas",
      "security":        "HMAC-SHA256 checksum generation — Python, JavaScript, Java",
      "troubleshooting": "Common payment errors and debugging steps",
    },
  },
  "extensions/logistics": {
    label: "Logistics Extension",
    topics: {
      "overview":        "What a logistics extension is — Delivery Partner (DP) integration",
      "architecture":    "Order state flow, OMS states, webhook event handling",
      "scheme":          "Scheme types (standard/custom), all API fields, serviceability, TAT",
      "order-journey":   "Forward / RTO / Reverse flows with webhook handlers",
      "development":     "Account creation, status updates, tracking — with full code examples",
      "troubleshooting": "Common errors (assignments, status sync, account creation)",
    },
  },
  "ai-pim": {
    label: "Fynd AI PIM",
    topics: {
      "overview":      "What AI PIM is — two enrichment flows, core modules",
      "products":      "SKU lifecycle, SPD/PPD/APD, bulk import/export, variants, bundles",
      "taxonomy":      "Categories, attributes, templates, category trees, relationships",
      "enrichment":    "AI enrichment workflow, rule engine, transformation marketplace mapping",
      "connectors":    "Inbound/outbound connectors, mappers, webhooks, data push with code",
      "api-reference": "All 50 AI PIM API operations across 8 groups",
      "auth":          "Authentication — session cookie, Bearer token, app credentials",
      "roles":         "5 roles with full access control tables",
    },
  },
  "konnect": {
    label: "Fynd Konnect",
    topics: {
      "overview":       "What Konnect is — 6 channel types, how multi-channel selling works",
      "auth":           "Token generation, company vs location level auth, environments",
      "channels":       "Channel configuration — company auth, store auth, onboarding steps",
      "products":       "Channel mapping, buffer stock, bulk mapping, auto-map",
      "inventory":      "Inventory sync, reconciliation, snapshots, logs, best practices",
      "orders":         "12 order statuses, 18 ordering channels, full order lifecycle + APIs",
      "workflows":      "Forward / RTO / return flows, self-ship vs marketplace logistics",
      "api-reference":  "All 31 Konnect API operations — catalog, pricing, inventory, orders, returns",
      "erp-wms":        "ERP/WMS partner channels, cron best practices, webhooks, integration guide",
    },
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function readSkillFile(skill: string, topic: string): string | null {
  // Try references subfolder first
  let filePath = path.join(SKILLS_DIR, skill, "references", `${topic}.md`);
  if (fs.existsSync(filePath)) return fs.readFileSync(filePath, "utf-8");

  // Fallback: top-level SKILL.md
  filePath = path.join(SKILLS_DIR, skill, "SKILL.md");
  if (fs.existsSync(filePath)) return fs.readFileSync(filePath, "utf-8");

  return null;
}

function buildTopicList(): SkillInfo[] {
  return Object.entries(SKILL_MANIFEST).map(([skill, info]) => ({
    skill,
    label: info.label,
    files: Object.entries(info.topics).map(([topic, description]) => ({
      topic,
      description,
      path: `${skill}/references/${topic}.md`,
    })),
  }));
}

function searchAllFiles(query: string, maxResults = 8): SearchResult[] {
  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase();
  const terms = lowerQuery.split(/\s+/).filter(Boolean);

  for (const [skill, info] of Object.entries(SKILL_MANIFEST)) {
    for (const topic of Object.keys(info.topics)) {
      const content = readSkillFile(skill, topic);
      if (!content) continue;

      const lines = content.split("\n");
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].toLowerCase();
        const matchCount = terms.filter((t) => line.includes(t)).length;
        if (matchCount === terms.length) {
          // Build a 3-line snippet around the match
          const start = Math.max(0, i - 1);
          const end = Math.min(lines.length - 1, i + 2);
          const snippet = lines.slice(start, end + 1).join("\n").trim();

          if (snippet.length > 10) {
            results.push({ file: `${skill}/references/${topic}.md`, skill, topic, snippet, lineNumber: i + 1 });
            if (results.length >= maxResults) return results;
          }
          break; // one hit per file is enough for a first pass
        }
      }
    }
  }

  // If strict match found nothing, do a relaxed single-term pass
  if (results.length === 0 && terms.length > 1) {
    return searchAllFiles(terms[0], maxResults);
  }

  return results;
}

function formatSearchResults(results: SearchResult[], query: string): string {
  if (results.length === 0) {
    return `No results found for "${query}".\n\nTry fynd_list_topics to browse available topics.`;
  }

  const lines = [`Found ${results.length} result(s) for "${query}":\n`];
  for (const r of results) {
    lines.push(`## ${r.skill} / ${r.topic}  (line ${r.lineNumber})`);
    lines.push(`File: ${r.file}`);
    lines.push("```");
    lines.push(r.snippet);
    lines.push("```");
    lines.push(`→ Call fynd_get_docs with skill="${r.skill}" topic="${r.topic}" for full content.\n`);
  }
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// MCP Server
// ---------------------------------------------------------------------------
const server = new McpServer({
  name: "fynd-partner-mcp",
  version: "1.0.0",
});

// ---------------------------------------------------------------------------
// Tool 1: List all available topics
// ---------------------------------------------------------------------------
server.tool(
  "fynd_list_topics",
  "List all available Fynd Partner documentation topics across Platform API, Extensions (General/Payment/Logistics), and AI PIM. Call this first to discover what's available before fetching specific docs.",
  {},
  async () => {
    const topics = buildTopicList();
    const lines: string[] = ["# Fynd Partner MCP — Available Topics\n"];

    for (const skillInfo of topics) {
      lines.push(`## ${skillInfo.label}  (skill: "${skillInfo.skill}")`);
      for (const file of skillInfo.files) {
        lines.push(`  • topic: "${file.topic}"  — ${file.description}`);
      }
      lines.push("");
    }

    lines.push('→ Use fynd_get_docs(skill, topic) to load a specific file.');
    lines.push('→ Use fynd_search(query) to search across all files.');

    return { content: [{ type: "text" as const, text: lines.join("\n") }] };
  }
);

// ---------------------------------------------------------------------------
// Tool 2: Get a specific reference file
// ---------------------------------------------------------------------------
server.tool(
  "fynd_get_docs",
  "Get full Fynd Partner documentation for a specific skill and topic. Use fynd_list_topics first to discover valid skill/topic combinations.",
  {
    skill: z.string().describe(
      'Sub-skill name. One of: "platform-api", "extensions/general", "extensions/payment", "extensions/logistics", "ai-pim"'
    ),
    topic: z.string().describe(
      'Topic/file name within the skill. Examples: "auth", "catalog", "overview", "connectors", "api-reference". Use fynd_list_topics to see all options.'
    ),
  },
  async ({ skill, topic }) => {
    const manifest = SKILL_MANIFEST[skill];
    if (!manifest) {
      const validSkills = Object.keys(SKILL_MANIFEST).join('", "');
      return {
        content: [{
          type: "text" as const,
          text: `Unknown skill: "${skill}"\n\nValid skills: "${validSkills}"\n\nCall fynd_list_topics to see all available skills and topics.`,
        }],
      };
    }

    if (!manifest.topics[topic]) {
      const validTopics = Object.keys(manifest.topics).join('", "');
      return {
        content: [{
          type: "text" as const,
          text: `Unknown topic: "${topic}" for skill "${skill}"\n\nValid topics: "${validTopics}"`,
        }],
      };
    }

    const content = readSkillFile(skill, topic);
    if (!content) {
      return {
        content: [{
          type: "text" as const,
          text: `File not found: ${skill}/references/${topic}.md\n\nThis may be a missing file — please report it.`,
        }],
      };
    }

    return { content: [{ type: "text" as const, text: content }] };
  }
);

// ---------------------------------------------------------------------------
// Tool 3: Full-text search across all docs
// ---------------------------------------------------------------------------
server.tool(
  "fynd_search",
  "Search across all Fynd Partner documentation (Platform API, Extensions, AI PIM). Returns matching snippets with file paths so you can then fetch the full doc using fynd_get_docs.",
  {
    query: z.string().describe(
      'Search query. Examples: "how to assign a DP", "checksum generation", "inbound connector", "catalog api", "dp_assigned status"'
    ),
  },
  async ({ query }) => {
    const results = searchAllFiles(query);
    const formatted = formatSearchResults(results, query);
    return { content: [{ type: "text" as const, text: formatted }] };
  }
);

// ---------------------------------------------------------------------------
// Start server
// ---------------------------------------------------------------------------
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
