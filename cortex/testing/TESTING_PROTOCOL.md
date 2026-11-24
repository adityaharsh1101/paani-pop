# Testing & Bug Tracking Protocol — Hashlilly

> **Standard Rule**: `BUG-{AUTHOR}-{NNN}_{YYYY-MM-DD}_{2-3_words_description}.md`  
> In the testing manifest (`cortex/testing/STATUS.md`), we simply declare whether each bug is **`✅ Resolved`** or **`❌ Not Resolved`**.

---

## 1. Bug Naming Standard (MANDATORY FOR ALL AGENTS)

Every bug ticket MUST follow this exact formula:
```text
BUG-{AUTHOR}-{NNN}_{YYYY-MM-DD}_{2-3_words_description}.md
```

### Components
1. **`BUG-`**: Standard uppercase prefix.
2. **`{AUTHOR}`**: Author initials:
   - **`AH`** for Aditya Harsh (and Aditya's agents: Antigravity, Qwen, OpenCode, Claude).
   - **`AS`** for Abhishek Singla (and Abhishek's agents: Codex, Cursor).
3. **`{NNN}`**: Sequential 3-digit integer (e.g. `001`, `049`, `050`, `059`, `060`). Look at the latest bug in `cortex/testing/` to determine the next number.
4. **`_{YYYY-MM-DD}_`**: Calendar date the bug was identified.
5. **`{2-3_words_description}`**: Concise, lowercase, snake_case 2-to-3 word description of the problem.
6. **`.md`**: Markdown format.

### Verified Examples
* `BUG-AH-058_2026-11-04_newsletter_delivery.md` (Aditya Harsh)
* `BUG-AS-060_2026-10-18_connected_bfi.md` (Abhishek Singla)

---

## 2. Testing Lifecycle & Pipeline Architecture

The bug lifecycle follows a strict 5-stage progression from raw input to founder sign-off:

```
[01-inbox] ───► [02-backlog] ───► [03-in-progress] ───► [04-testing-verification] ───► [05-done]
Raw dumps       Formal tickets     Active coding         Grouped checkpoints           Founder confirmed
(texts, logs,   (BUG-AH/AS-NNN)    (in dev)              (Aditya / Abhishek review)    (permanently closed)
screenshots)
```

1. **`01-inbox/` — Raw Issue Ingestion (Unprocessed Evidence)**:
   - Holds raw inputs: unparsed bug texts, error logs, stack traces, meeting transcripts, founder notes, and screenshots.
   - Formal `BUG-` tickets are NOT created here; this folder is strictly for staging raw input evidence prior to triage.

2. **`02-backlog/` — Formal Bug Creation & Prioritization**:
   - Where formal bug files (`BUG-{AUTHOR}-{NNN}_{YYYY-MM-DD}_{description}.md`) are authored once raw inbox items are parsed and validated.
   - Prioritized by severity (P0 Blocker, P1 High, P2 Normal, P3 Low).

3. **`03-in-progress/` — Active Engineering**:
   - Tickets actively being debugged, refactored, or coded by a developer or agent live here while work is in flight.

4. **`04-testing-verification/` — Grouped Verification Checkpoints (Founder Review)**:
   - When code changes are implemented and automated unit/regression tests pass, tickets move here (subdivided into `ADITYA/` and `ABHISHEK/`).
   - **Grouped Verification Principle**: While individual bugs may be numerous, personal verification should be concise and grouped. Related bugs are clustered into unified verification checkpoints (e.g., one walkthrough of the Influence OS candidate drawer verifies 4 related tickets).
   - Tickets remain here until the founder (Aditya or Abhishek) personally verifies the fix.

5. **`05-done/` — Confirmed & Closed**:
   - Once Aditya or Abhishek personally checks the test walkthrough and confirms the fix, the tickets are moved to `05-done/`.
   - Only founder-verified bugs belong in `05-done/`.

---

## 3. Zero-Ceremony Rules

- **No separate verification files**: Banned `VERIFY-BUG-XXX.md` and `VERIFICATION_XXX.md`. Verification commands, reproduction scripts, and test results live directly inside the bug ticket itself.
- **Statuses**:
  - `❌ Not Resolved` (Inbox / Backlog / In Progress)
  - `✅ Resolved` (Fixed, tests passing, verified in build)

---

## 4. Testing Manifest (`cortex/testing/STATUS.md`)

The testing manifest is the single source of truth for all bug resolutions. When creating or resolving a bug, update `cortex/testing/STATUS.md`:

| Bug ID | Title & Issue Description | Status | Verification & Fix |
| :--- | :--- | :--- | :--- |
| **BUG-AH-058** | Newsletter automation missing and overdue queue stranded | ✅ Resolved | Verified in code, tests & PR #283 |
| **BUG-AS-098** | Fixed admin login bypass & runtime secret verification | ❌ Not Resolved | Addressed in PR #286 |

---

## 5. Pen-Test Security Testing Standard (20 Vectors)

All agents modifying auth, session management, parsers, or public endpoints must test against the 20 exploit vectors in `CORE_INTELLIGENCE/Architecture_and_Standards/STANDARDS/PEN_TEST_VIBECODED_APP_SECURITY_STANDARD_V1_0.md`:
- Constant-time comparison (`crypto.timingSafeEqual`)
- CSPRNG tokens (`crypto.randomBytes`, never `Math.random`)
- Prototype pollution sanitization (`__proto__` and `constructor` blocked)
- Input bounds to eliminate ReDoS
- Unicode normalization (`NFKC`) before unique lookups
- OAuth `email_verified` verification
- XXE/DTD external entity resolution disabled
