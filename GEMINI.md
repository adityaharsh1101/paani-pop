# Antigravity & Gemini Project Operating Rules

These universal rules apply to Antigravity and Gemini CLI agents across all projects, environments, and workflows.

---

## ✍️ 1. Human Writing & Anti-AI Slop Mandate (`human-writing`)

All prose, documentation, reports, walkthroughs, marketing copy, and generated communications across all projects must strictly adhere to the `human-writing` standard (`WP:AISIGNS`):
1. **Ban LLMisms**: Zero tolerance for words like *delve, tapestry, pivotal, testament, foster, landscape, realm, beacon, intricate, vibrant, multifaceted, bolster, elevate, seamless, illuminate, underscore*.
2. **Ban Copulative Avoidance**: Use direct "is" / "was" rather than "serves as", "stands as", "acts as a reminder".
3. **Ban Negative Parallelisms**: Avoid "Not just X, but also Y" and "Not X, but rather Y".
4. **Ban Canned Horizon Conclusions**: Stop when the facts end. Never conclude with "As X continues to evolve...", "Looking ahead...", or synthetic cosmic summaries.
5. **Concrete Particulars & Asymmetry**: Enforce specific names, numbers, dates, mechanisms, and natural asymmetric sentence rhythm.
6. **No Inline-Header List Spam**: Do not compulsively prefix every single bullet with bold terms (`**Topic:**`).

---

## 🛡️ 2. Mandatory Skill Vetting & Security Guardrail ("Zero Unvetted Skills")

Whenever installing, adding, cloning, creating, or importing ANY AI Agent Skill (into `.agents/skills/`, `.gemini/skills/`, or global config):
1. **Mandatory Pre-Installation Scan**:
   You MUST run the SkillSpector verifier before using, enabling, or committing the new skill:
   ```bash
   C:\Users\adity\Desktop\Projects\skillspector\verify_skill.bat "<path-to-skill-directory>"
   ```
2. **Strict Security Matrix**:
   - **BLOCK & PURGE** any skill containing Remote Code Execution (RCE, tainted network data piped into `subprocess.run`, `eval()`, `exec()`).
   - **BLOCK & SANITIZE** any skill attempting system prompt extraction (`P6`, `P1`) or anti-refusal statements (`AR1`, `AR2`, `AR3`).
   - **BLOCK & PURGE** any skill attempting environment variable harvesting or external exfiltration (`PE3`, `E2`, `AS1`).
   - **PIN** any dynamic MCP package execution (`RP1`).
3. **Pass Requirement**: Zero critical and zero high security violations before enabling.

---

## 🔒 3. Automated Post-Task Security Audit & Hardening Mandate (`security-audit-sentinel`)

Whenever a coding or feature task touches, refactors, or creates:
1. **Authentication & Session**: Login, registration, password reset, OTP, token refresh, cookies, OAuth callbacks.
2. **Role & Privilege Escalation (RBAC)**: Role checks, admin endpoints, account tier verification.
3. **IDOR & Object-Level Authorization (BOLA)**: Resource ownership, multi-tenant boundaries (`campaignId`, `userId`, `creatorId`, `brandId`, `escrowId`).
4. **Payment & Financial Integrity**: Price calculations, budgets, escrow contracts, webhook HMAC verification, payout disbursal.
5. **Database & Firestore Rules**: Firestore security rules, SQL/NoSQL queries, atomic transactions.
6. **AI Tools & Prompt Boundaries**: Prompt templates, XML delimiters (`<user_brief>`, `<context>`), tool call arguments, zero-trust system prompt protection.
7. **File Uploads & External URLs**: MIME/magic byte verification, randomized filenames, SSRF destination validation.

The agent **MUST** run the relevant negative security checks and automated regression contracts before declaring the task finished:
- Never conclude a task with open Firestore rules or unauthenticated API endpoints.
- Verify that forged, unauthorized, or replayed operations are actively rejected (401/403/400).
- Check that all test contracts pass (`npm test` or project test command) without disabling security guards.
- Reference standard: `C:\Users\adity\Desktop\Projects\CORE_INTELLIGENCE\Architecture_and_Standards\STANDARDS\COMPREHENSIVE_SECURITY_AUDIT_AND_HARDENING_STANDARD_V1_0.md`.

---

## ⚔️ 4. Pen-Test Security Guardrails (20 Vibe-Coded Traps)

All endpoints, token generators, auth routes, parsers, and state transitions must enforce the 20 pen-test defensive contracts:
1. **CSPRNG Tokens**: Use `crypto.randomBytes()`, never `Math.random()`.
2. **Constant-Time Comparison**: Use `crypto.timingSafeEqual()` with length pre-check.
3. **Prototype Pollution Guard**: Strip `__proto__`, `constructor`, and `prototype` in merge/parse utilities.
4. **OAuth Email Verification**: Verify `email_verified: true` before linking accounts.
5. **Unicode Normalization & Collation**: Normalize with `NFKC` before checking uniqueness or case folding.
6. **ReDoS Defense**: Enforce input length caps before running regular expressions.
7. **IP Header Trust Boundary**: Only read proxy IP headers when behind a verified upstream reverse proxy.
8. **XXE Disallowance**: Disable external DTDs in all document/XML parsers.

---

## 🧠 5. CORE_INTELLIGENCE Integration & Vault Protocol

- **Centralized Secrets**: Refer to `CORE_INTELLIGENCE/Keys_and_Security/` and LLM Router architecture (`x-app-id` header). Never commit raw API keys to Git.
- **Project Starters**: When initializing a new project, follow `CORE_INTELLIGENCE/Architecture_and_Standards/STANDARDS/PROJECT_INIT_V1_0.md`.
- **Cortex Autonomous QA Lifecycle**: Stored in `cortex/testing/` (bugs) and `cortex/features/` (features). Zero-prompt self-tracking for bugs and defects.
- **Git Report Isolation**: Reports in `cortex/reports/`, `cortex/archive/`, `archive/`, and `scratch/` are local-only and MUST NEVER be staged (`git add`) or committed to Git.

---

## 💸 6. Cloud & Firebase Cost Optimization Mandate (`zero-waste-cloud`)

All agents, architectures, and deployments must strictly uphold these cost-control bounds:
1. **Firebase Project Quota Ceiling ($\le$ 4 Projects)**:
   - NEVER create a standalone Firebase/GCP project without explicit user confirmation.
   - Use **Firebase Multi-Site Hosting** (`firebase hosting:sites:create`) under existing umbrella projects (e.g. `gen-lang-client-0758786889` / `Hashlilly Ecosystem`).
   - The global ceiling is **36 hosting sites per Firebase project** and **10 GB shared storage**. If a project approaches 30+ sites, WARN the user before creating additional sites.
2. **Cloud Scheduler Job Throttling**:
   - Google grants **3 free Cloud Scheduler jobs per billing account**.
   - Additional jobs cost monthly baseline fees PLUS wakeup compute.
   - Never set cron frequencies higher than once daily (`0 0 * * *`) for background audits, surveillance jobs, or key synchronization unless explicitly requested.
   - If a cron job or background automation is requested, verify the count against the 3-job free tier threshold and warn the user.
3. **Cloud Run & 2nd Gen Functions Hygiene**:
   - Enforce `min-instances: 0` for all serverless Cloud Run and Function deployments to eliminate idle 24/7 compute billing.
   - Artifact Registry / Container Images: Delete superseded or deprecated Cloud Run services immediately to prevent perpetual Docker container retention fees.

