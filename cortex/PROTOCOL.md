# 🛡️ Universal Reporting Protocol (V3.1 - HARD)

This document defines the mandatory structure for all agent-generated content. All specialist agents must adhere to these rules to ensure zero-friction context resumption.

---

## 🛠️ FULL-STACK AUTONOMY
Agents are recognized as **Full-Stack Specialists**. You have the authority and responsibility to handle frontend, backend, security, and architecture tasks as required to complete your objective. Do not ask for permission for standard architectural improvements.

---

## 🌿 GIT BRANCHING & MANUAL MERGE POLICY (HARD RULE)
1. **NO DIRECT PUSH TO MAIN**: NEVER push commits directly to the `main` or `master` branch under any circumstances.
2. **FEATURE / FIX BRANCHES ONLY**: Always commit and push code to dedicated feature/fix branches (e.g. `feature/resume-engine-landing`, `fix/instagram-scheduler-imports`).
3. **MANUAL MERGE**: All code pushes must be sent to feature branches so the USER can perform manual review and approval before merging into `main`.
4. **DEPLOYMENT**: Automatic triggers on `main` must only be initiated after the user explicitly merges the branch into `main`.

---

## 📁 Directory Structure
All agent reports and artifacts MUST be stored under the `cortex/` nervous system:

```plaintext
cortex/
├── reports/
│   └── ADITYA/
│       ├── ANTIGRAVITY/       # Max 5 latest active reports
│       │   └── archive/       # Older archived reports
│       ├── QWEN/              # Max 5 latest active reports
│       │   └── archive/
│       ├── CODEX/
│       │   └── archive/
│       ├── CURSOR/
│       │   └── archive/
│       ├── KILOCODE/
│       │   └── archive/
│       └── OPENCODE/
│           └── archive/
├── testing/
│   ├── 01-inbox/              # Incoming bug tickets & issues
│   ├── 02-backlog/            # Queued tickets
│   ├── 03-in-progress/        # Active development tickets
│   ├── 04-testing-verification/ADITYA/ # Runnable checks and test reports
│   ├── 05-done/               # Verified completed tickets
│   ├── STATUS.md              # Live test & build health ledger
│   └── TESTING_PROTOCOL.md    # Testing standard
├── design-systems/            # App design sheets & prompt instructions
├── ideas/                     # Product specs, research questionnaires, & ideas
├── security/                  # Security audits and hardening logs
├── compliance/                # Legal, terms, and privacy protocols
├── research/                  # Knowledge hub (surveys, marketing, tech, tools, seo)
├── notes/                     # Founder & partner working docs (ADITYA/, ABHISHEK/, SHARED/)
├── MANIFEST.md                # Master catalog indexing active/archived reports
└── PROTOCOL.md                # Local copy of this protocol
```

- **USER**: ADITYA
- **AGENT**: The current active agent
- **MANIFEST**: `cortex/MANIFEST.md` must be updated after every new report, plan, or spec created. It serves as the master catalog indexing all active/archived reports, product specifications, historical strategy plans, TODO tasklists, security audits, and compliance documentation.
- **AUTONOMOUS BUG & QA LIFECYCLE**: Never wait for user prompting to track bugs or log verification tests.
  - **Mandatory Bug Naming Rule**: `BUG-{AUTHOR}-{NNN}_{YYYY-MM-DD}_{2-3_words_description}.md` (`AH` for Aditya Harsh, `AS` for Abhishek Singla; e.g. `BUG-AH-058_2026-11-04_newsletter_delivery.md`, `BUG-AS-060_2026-10-18_connected_bfi.md`).
  - **Sequential Numbering**: `{NNN}` is a 3-digit number incrementing from the highest existing bug in `cortex/testing/`. Unnumbered bugs (e.g. `BUG-NAME-YYYYMMDD.md`) are strictly banned.
  - **No Separate Verification Files**: Separate verification files (`VERIFY-BUG-*` and `VERIFICATION_*`) are strictly banned. Reproduction, verification, and fix evidence live directly inside the single bug ticket.
  - **Manifest Ledger**: In `cortex/testing/STATUS.md`, each bug simply states whether it is `✅ Resolved` or `❌ Not Resolved`.
- **ZERO ROOT-ORPHAN RULE (`cortex/notes/`)**:
  - The root of `cortex/` must ONLY ever contain its designated subdirectories and the two universal root files (`MANIFEST.md` and `PROTOCOL.md`).
  - All loose markdown files, text files, viva transcripts, working specs, and orphan notes added by Aditya or Abhishek belong in `cortex/notes/` (`ADITYA/`, `ABHISHEK/`, or `SHARED/`).
  - Whenever an agent discovers a loose orphan file dropped into `cortex/` root, the agent must autonomously relocate it into the appropriate `cortex/notes/` subfolder and update `cortex/notes/README.md`.
- **RESEARCH KNOWLEDGE HUB PROTOCOL (`cortex/research/`)**:
  - Empirical research, customer feedback, competitor analyses, and technical benchmarks must be stored in `cortex/research/` segregated into 5 categories:
    - `surveys/`: Inbound brand requirements, qualification criteria, questionnaire responses (`RES-SURVEY-YYYY-MM-DD_{description}.md`).
    - `marketing/`: Influencer pricing models, sponsorship economics, outreach experiments (`RES-MKT-YYYY-MM-DD_{description}.md`).
    - `tech/`: Core algorithms, ATS parsers, econometric regressions, AI prompt architectures (`RES-TECH-YYYY-MM-DD_{description}.md`).
    - `tools/`: Chrome extension mechanics, PDF engines, scrapers, email infrastructure (`RES-TOOL-YYYY-MM-DD_{description}.md`).
    - `seo/`: Programmatic SEO architectures, keyword clusters, Google Search Console audits (`RES-SEO-YYYY-MM-DD_{description}.md`).
  - Every entry must be logged in `cortex/research/INDEX.md` and feature an actionable product takeaway section.

---

## 📦 Archiving & Context Scanning Policy (MANDATORY)

1. **Active Reports Ceiling (Max 5)**:
   - Only the **5 most recent reports** are allowed directly inside `cortex/reports/ADITYA/{AGENT_NAME}/`.
   - When logging report `#N`, if active reports exceed 5, move the oldest report(s) into `cortex/reports/ADITYA/{AGENT_NAME}/archive/`.

2. **Agent Context Scanning Rule**:
   - When initiating a session or gathering context, agents **MUST ONLY inspect active reports** (max 5) in `cortex/reports/ADITYA/{AGENT_NAME}/`.
   - **DO NOT** scan, view, or parse old reports inside `archive/` unless the user explicitly requests historical analysis.

---

## 📝 Report Naming Convention (MANDATORY)
```
{NNN}_{YYYY-MM-DD}_{AGENT}_{TYPE}_{Title}.md
```
- **NNN**: Three-digit sequential number (001, 002...). Each agent maintains their own sequence.
- **Higher number = NEWER report.**

---

## 🏁 Mandatory Handoff Sections
Every session MUST end with a report containing:

1. **✅ Completed**: Summary of production-ready work with file links.
2. **🚧 In-Progress**: Active tasks and unfinished logic.
3. **⚠️ Blockers**: Hurdles requiring user/agent attention.
4. **⏭️ Next Action**: Precise first step for the next session.

---

## 📊 Hardening Codes & Types
| Code | Type | Description |
| :--- | :--- | :--- |
| **SEC** | Security | WAF, App Check, Headers, Rules. |
| **SEO** | Search | Meta, Schema, Keywords, Vitals. |
| **PRG** | Progress | General feature implementation. |
| **BUG** | Bugfix | Troubleshooting and resolution. |
| **ARC** | Architecture | System-level design decisions. |

---

## 📚 Documentation vs Reports
| Type | Location | Content |
| :--- | :--- | :--- |
| **Docs** | `docs/` | Timeless reference (Setup guide, API specs). |
| **Reports** | `reports/ADITYA/{AGENT}/` | Time-bound work (Session reports, Fix logs). |

---

## ✅ Standards & Guardrails
- **Hardening**: No code is "done" until it is hardened for Security (CSP/Headers) and SEO (Meta/Schema).
- **Artifacts**: Link to relevant screenshots or recordings stored in `reports/assets/`.

---

*Maintained by CORE_INTELLIGENCE. (Updated: 2026-08-01)*
