# PAANI POP

**Free water. Full entertainment.**

An India-first sponsored-water platform concept with a public-facing marketing site and separate brand-partner and internal operations workspaces.

## Included in this MVP foundation

- Responsive public website with brand, venue and manufacturing-partner enquiry entry points.
- Brand-partner workspace: overview, campaign list, search/filter, creative studio, reports, billing and team areas.
- Operations workspace: campaign pipeline, advertiser CRM, production/stock, venue network, finance, compliance and access-control areas.
- Shared sample campaign model and INR formatting helpers.
- Mobile navigation and responsive layouts.
- GitHub Actions build workflow and Firebase Hosting rewrite configuration.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Structure

- `src/App.tsx` — public website, portal navigation, dashboards, campaign search/filter and enquiry modal.
- `src/data.ts` — illustrative campaign data and INR formatting.
- `src/styles.css` — visual system and responsive layouts.
- `.env.example` — placeholder Firebase browser configuration keys.
- `firebase.json` — Firebase Hosting SPA fallback.

## Important implementation boundary

This is a frontend MVP foundation, not a production SaaS system yet. Authentication, database writes, secure file uploads, payment collection, outbound email, QR analytics, enforced role permissions, invoice issuance and operational approvals are not active. The enquiry form does not transmit or store personal data. Workspace records and figures are illustrative sample data.

## Suggested production milestones

1. **Hosting and environments:** set up Firebase project(s), CI, preview and production deployments.
2. **Identity and tenancy:** Firebase Authentication, verified email, workspace membership, server-side role-based access control and audit trail.
3. **Core records:** database schema and security rules for advertisers, contacts, campaigns, briefs, approvals, venues, suppliers, batches, stock, dispatches and invoices.
4. **Creative approvals:** secure uploads, versioning, approval history and mandatory packaging/compliance gates.
5. **Campaign operations:** production planning, quality documents, venue allocation, dispatch evidence and campaign close-out.
6. **Measurement:** privacy-reviewed QR destinations, consent-aware analytics, scan events and sponsor reports.
7. **Finance:** invoicing, GST/tax review, reconciliation and payment-provider integration after business and compliance validation.

## Product and compliance caution

Before manufacturing or distributing packaged drinking water in India, validate the exact product classification, manufacturer/facility licensing, quality testing, packaging and closure specifications, mandatory label declarations, applicable FSSAI and Legal Metrology requirements, plastic/EPR obligations where relevant, GST/tax treatment, advertising claims, privacy and QR tracking. Obtain qualified Indian regulatory advice. This application is not evidence of regulatory approval.

## Deployment

The app is a Vite static frontend deployable to Firebase Hosting, Vercel or another static host. Configure the host to serve `index.html` for client-side routes. Never put service-account credentials or private keys in `VITE_*` variables; those are exposed to the browser.
