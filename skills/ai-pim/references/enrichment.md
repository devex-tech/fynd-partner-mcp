# AI PIM — Enrichment, Rules & Transformations

---

## 1. AI Product Enrichment

The enrichment workspace is an **AI chat-based interface** that automates SKU creation from product images.

**Navigate:** Dashboard → Enrichment card

> **Beta note:** Fully automated enrichment currently supports Shirts, Kurtas/Kurtis, and Bottomwear categories only.

### Starting an Enrichment Job

**Step 1 — Provide brand name**
- Type your Brand Name in the chat input → confirm with "Yes"

**Step 2 — Upload SKU images**
Prepare a ZIP file:
```
parent-folder/
├── SKU12345/
│   ├── image1.jpg
│   └── image2.jpg
└── SKU67890/
    └── image1.jpg
```
Compress to ZIP → upload via the ➕ icon. You can also upload individual images or provide ZIP URLs.

**Step 3 — Wait for processing**
- "Job in Progress" message appears in chat
- You can exit and return — check **Job Board** on Dashboard
- Status changes from `Enrichment in Progress` → `Ready for Review`

**Step 4 — Review Validation Summary**
Chat shows: Total SKUs Submitted / Successfully Enriched / Failed SKUs

Failures happen due to:
- Unsupported file format
- Unsupported category (beta limitation)

**Step 5 — Review enriched data**
- Dashboard → expand job card → side panel shows: SKU Code, Category, Title, Brand, Status
- Click SKU Code → PDP opens

**In the PDP:**
| Control | Action |
|---------|--------|
| Fill Progress Indicator | % of attributes AI auto-filled |
| Drag handle (⋮⋮) | Reorder images |
| Trash icon | Delete an image |
| Click any field | Edit manually or select from options |
| **Ask AI PIM** in field | AI-assisted fill — change tone, shorten, lengthen, fix grammar |
| Regenerate icon | Regenerate AI value |
| Thumbs up/down | Feedback on generated content |
| Navigate arrows (top right) | Move between SKUs |
| Ellipsis (⋯) → Discard SKU | Remove SKU from job |

**Step 6 — Approve**
- Click **Approve** or press ⌘+S / Ctrl+S
- Approved SKUs save to Staged Product Data (SPD)

---

## 2. Rule Engine

The Rule Engine automates catalog management. Rules trigger on data events, filter SKUs, and run up to 5 sequential actions.

**Navigate:** Settings → Rule Engine

### Rule Creation Flow

#### 1. Define Trigger

**Catalog Environment:**
| Option | Description |
|--------|-------------|
| **Staged Product Data** | Rules on in-progress SKUs — full action set available |
| **Production Product Data** | Post-go-live monitoring — limited actions to protect live data |

**Trigger criteria:**
- SPD: specific attribute change/addition (e.g., Color attribute updated)
- PPD: Create Product or Update Product events

#### 2. Add Filters (optional but recommended)

Apply immediately after the trigger. Use AND / OR logic:
- Category Mapping
- Specific Attributes
- Creation Date
- Product Labels
- SKU Stage or Status

#### 3. Define Actions (up to 5 per rule)

| Action | Description |
|--------|-------------|
| **JavaScript Editor** | Custom JS code. Can call external APIs, process responses, return JSON. Validated on save. |
| **Background Generator** | AI adds image background. Specify color via picker or text prompt (e.g., "Outdoor scene with natural lighting"). Add negative prompts to exclude elements. |
| **Background Removal** | AI removes image background. Define removal guidelines, preview result. |
| **Content Extraction** | AI reads media attributes → auto-populates color, shape, category, and other attributes |
| **Content Generation** | AI generates titles, descriptions, bullet points. Choose tone (formal, conversational, concise). Provide prompt/template guidelines. |
| **Map Values to Attributes** | Map action outputs or manual values to specific attributes. **Must be the last action** — cannot add more actions after this. |

#### 4. Test the Rule
1. Pick a sample SKU from filtered list
2. Run in preview mode — see exactly what will change
3. Adjust if needed

#### 5. Publish

| Mode | Behavior |
|------|---------|
| **Auto On** | Runs automatically when conditions are met |
| **Auto Off** | Must click **Run Rule** manually to execute |

### Running a Rule from the Dashboard
- Click Play (▶) icon → runs on **all matching SKUs**
- To target specific SKUs: click "Filter SKUs and execute rule" → apply AND/OR filters → Run Rule

### Monitoring
- **Run Logs:** Per-SKU execution results — status, input/output payloads, who ran it, time taken
- **Version History:** Every change tracked — version number, modified by, change type, rollback available

### Rule Dashboard Fields
| Field | Description |
|-------|-------------|
| Rule Name | Custom name |
| Rule Execution | Auto On / Auto Off / Draft |
| Actions List | Icons showing ordered steps |
| Created On | Timestamp + user |
| Last Modified On | Timestamp + user |

---

## 3. Transformations

Transformations map your custom taxonomy to AI PIM's global taxonomy **once** — after that, every new product upload is automatically formatted for each marketplace.

**Navigate:** Dashboard → Transformation card, or Settings → Transformations tab

### How It Works
1. Map each of your source categories to a PIM global (target) category
2. For each category, map source attributes → target attributes
3. Apply transformation rules (simple drag-drop or advanced JS/JSON)
4. Test and approve
5. All future uploads auto-transform to marketplace formats (Amazon, Flipkart, Myntra, Nykaa, etc.)

### Transformation Dashboard Columns
| Column | Description |
|--------|-------------|
| Name | Transformation name |
| Last Updated | Date/time last modified |
| Category Mapped | Progress bar (% categories mapped) |
| Action | "Map Categories" button |

### Mapping Categories
After clicking Map Categories:
- **Source Category** — your custom name
- **Target Category** — AI PIM's global category (dropdown)
- **Status** — Unmapped / Review Pending / Mapped / Approved

Click pencil icon to open attribute mapping.

### Mapping Attributes
| Column | Description |
|--------|-------------|
| Source Attribute & Data Type | Your field + type |
| Target Attribute & Data Type | PIM's field + type |
| Action & Value Mapped | Mapping logic / rules applied |

**Adding a rule:**
1. Click Add Rule in the Action column
2. **Simple:** Drag-and-drop source → target fields
3. **Advanced:** Toggle "Advanced" → write JSON/JavaScript
4. Use built-in functions (add, divide, multiply for Number; concat, split for text) or write custom JS
5. Click **Test Rule** → preview transform output
6. Click **Approve** (⌘+S) to save

> Ensure source and target data types match to avoid errors.
