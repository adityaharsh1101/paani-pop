# Cortex Research Knowledge Hub (`cortex/research/`)

Central repository for logging empirical market findings, technical investigations, brand qualification criteria, SEO strategies, and tooling experiments across the Hashlilly ecosystem.

---

## 🗂️ Category Taxonomy

| Category Directory | Scope & Focus | Naming Convention |
| :--- | :--- | :--- |
| [`surveys/`](surveys/) | Raw brand and creator responses, qualification criteria from inbound replies, survey questionnaires, customer interviews | `RES-SURVEY-YYYY-MM-DD_{title}.md` |
| [`marketing/`](marketing/) | Positioning research, outreach experiments, influencer sponsorship dynamics, pricing & rate card models | `RES-MKT-YYYY-MM-DD_{title}.md` |
| [`tech/`](tech/) | Core algorithms (ATS parsers, keyword density), Next.js architecture, AI reasoning pipelines, security patterns | `RES-TECH-YYYY-MM-DD_{title}.md` |
| [`tools/`](tools/) | Chrome extension mechanics, PDF generation engines, scrapers, APIs, Brevo/email infrastructure | `RES-TOOL-YYYY-MM-DD_{title}.md` |
| [`seo/`](seo/) | Programmatic SEO architectures, Google Search Console audits, high-intent keyword clustering, schema markup | `RES-SEO-YYYY-MM-DD_{title}.md` |

---

## 📋 Master Research Log

| ID | Date | Category | Title | Primary Takeaway / Actionable Insight | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `RES-SURVEY-001` | 2026-11-12 | Surveys | [DaMENSCH Brand Qualification Metrics](surveys/RES-SURVEY-2026-11-12_damensch_brand_qualification_metrics.md) | D2C brands evaluate creators using last-10-reels median & max views and engagement % rather than aggregate follower counts. Influence OS media kit should pre-calculate these 3 exact figures. | Logged |
| `RES-SURVEY-002` | 2026-11-12 | Surveys | [10-Reel BFI & Brand Audit PDF Execution](surveys/RES-SURVEY-2026-11-12_execution_ten_reel_bfi_and_brand_audit.md) | Implemented 10-reel median reach calculation, video ER %, consistency ratio, dynamic commercial pricing, 1-click verified PDF export, and updated Brand/Creator solutions pages. | Executed |

---

## ✍️ Contribution & Logging Standard
Whenever new market signals, inbound customer replies, technical benchmarks, or competitive intelligence arrive:
1. File the findings in the relevant subfolder using the canonical ID format: `RES-{CATEGORY}-{YYYY-MM-DD}_{description}.md`.
2. Strictly adhere to `human-writing` (zero LLMisms, direct facts, real quotes/evidence, concrete numbers).
3. Always include an **Actionable Product Takeaway** section detailing what changes or capabilities Hashlilly products (Resume Engine, Influence OS, LilyPost) should implement based on the insight.
4. Update this master table in `INDEX.md`.

