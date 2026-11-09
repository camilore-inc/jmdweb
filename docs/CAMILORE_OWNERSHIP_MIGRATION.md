# Camilore ownership migration

Last updated: November 9, 2026

## Status and ownership identity

Jax Max Delta remains the product and visual brand. Camilore Inc. is identified
as its legal owner and operator. The supplied business instruction states an
ownership effective date of October 1, 2026, subject to executed transfer
documentation; public legal drafts preserve that condition instead of asserting
that unverified paperwork is complete.

- Product: Jax Max Delta
- Legal company: Camilore Inc.
- Product website: https://jaxmaxdelta.com
- Corporate website: https://camilore.com
- Customer, privacy and subscription support: support@jaxmaxdelta.com
- Copyright: © 2026 Camilore Inc. All rights reserved.

## Pre-change audit classification

| Area | Finding before changes | Classification |
| --- | --- | --- |
| Public brand | JMD branding was consistent; footer said only “Camilore” | Update attribution, preserve product brand |
| Privacy | Named an individual operator, a personal street address and “Camilore” without the incorporated entity | Replace personal operator details; substantive legal review required |
| Terms | Six basic clauses; no contracting entity, subscription terms, refund path, IP, warranty, liability, governing law or consumer-rights language | Expand as legal-review draft |
| Support | One `SITE.contact` constant and direct `mailto:` links already used support@jaxmaxdelta.com | Preserve and test |
| Contact forms/backend | No form element, API call, handler, automated email or backend endpoint exists | No routing change required |
| Pricing/subscriptions | No prices; App Store/TestFlight URLs empty; no Free/Pro explanation | Add verified capability and billing guidance without prices |
| App Store | No public App Store URL stored in the repository | Manual verification required |
| Metadata/SEO | Canonicals, hreflang, OG, Twitter, sitemap and robots existed; no publisher metadata or structured data | Add publisher metadata and SoftwareApplication JSON-LD |
| Analytics | Website contains no analytics script or cookie mechanism | No cookie banner required for current website behavior |
| Hosting | Static GitHub Pages site, `CNAME` is `jaxmaxdelta.com`; no workflow/config beyond repository Pages conventions | Document transfer dependencies |
| GitHub | `origin` points to `github.com/beaudrm2/jmdweb.git`; policy source linked a personal GitHub Project | Remove public personal-project link; transfer later |

Historical screenshots, third-party privacy links, game/platform compatibility
references, the iCloud container identifier and RevenueCat entitlement/product
configuration were preserved. No DNS, domain, provider, entitlement or secret was
changed.

## Website sections updated

- Shared footer: product-of-company statement, corporate link and copyright in
  English, French and Spanish.
- Support FAQ: current Free/Jax Pro boundary, monthly/annual plans, 14-day trial
  caveat, renewal, cancellation, restoration and Apple refund routing.
- Privacy pages and source: Camilore Inc., optional Jax preferred name, local
  recordings, support handling and non-backdated revision metadata.
- Terms pages: operator, permitted use, independent-product/trademark language,
  subscriptions, billing, saved data, telemetry limits, IP, disclaimers,
  liability, Quebec/Canada governing law and mandatory consumer rights.
- Metadata: Camilore Inc. author/publisher tags on all 36 localized pages and
  SoftwareApplication JSON-LD on each localized homepage.
- Repository docs and automated validation.

There is no standalone About or pricing route. Corporate attribution is available
site-wide in the footer, and subscription information is in Support and Terms.
Existing URLs and slugs were not changed.

## Application-behavior review

The adjacent local JMD app repository was reviewed read-only. It confirms:

- no app user accounts;
- optional driver nickname stored in local preferences;
- local UDP reception and local session/race/lap-trace recording;
- private iCloud container `iCloud.com.camilore.jaxmaxdelta`, with session,
  league and race-history (Race Replay) backup; the player lap trace is never
  backed up, and iCloud race-history files mirror the device's retention
  (corrected November 9, 2026 from the app's
  `docs/architecture/session-history-and-backup.md` §9 and §12, SH-040);
- Firebase Crashlytics diagnostics;
- Apple purchases managed through RevenueCat entitlement `pro`;
- current RevenueCat code requests monthly and annual packages without hardcoded
  prices;
- the product source describes a 14-day App Store introductory offer and the
  current Free/Jax Pro matrix;
- iOS deployment settings include a 15.6 app target.

The website does not change RevenueCat product or entitlement identifiers. It
does not state a subscription price. App Store Connect, RevenueCat dashboard
configuration, trial eligibility, the live publisher name, live screenshots and
the public App Store URL remain manual checks. Public web searches on October 24,
2026 did not surface an indexed `apps.apple.com` listing for the product name or
bundle identifier. An older Camilore product page claimed App Store availability,
but its destination could not be fetched and is not sufficient evidence for a
store URL or live offering.

## Support routing review

All website support, feedback, privacy and subscription destinations resolve to
`support@jaxmaxdelta.com`. No corporate or personal alternate mailbox, form
processor, hidden environment destination, webhook or automated-response template
exists in this repository. Tests use static inspection only and send no messages.

Production mailbox aliases, forwarding, SPF/DKIM/DMARC, retention, access control
and auto-replies are external to this repository and were not changed. They must
be verified by an authorized mailbox administrator.

## GitHub and hosting transfer readiness

Status as of November 1, 2026: both repositories are under the Camilore Inc.
GitHub organization, `camilore-inc`.

- Website: `https://github.com/camilore-inc/jmdweb` (previously
  `beaudrm2/jmdweb`). GitHub Pages publishes `jaxmaxdelta.com` from `main`, and
  the English, French and Spanish pages were confirmed to load after the move.
- App: `https://github.com/camilore-inc/JaxMaxDelta` (previously
  `beaudrm2/JaxMaxDelta`), moved on November 1, 2026.
- The Claude GitHub App is installed on the `camilore-inc` organization.

Developer clones should point their remotes at the `camilore-inc` URLs; GitHub
redirects the old `beaudrm2` URLs, but the redirect is not permanent if a new
repository is ever created under the old name.

Post-transfer checklist (keep for reference; items 2, 3, 5 and 7 are still worth
re-checking in the GitHub and DNS consoles, which this checkout cannot see):

1. Transfer the repository in GitHub; do not create a competing copy first.
2. Confirm GitHub Pages remains enabled on `main` and still publishes the intended
   root directory.
3. Confirm the custom domain remains `jaxmaxdelta.com`, HTTPS enforcement remains
   enabled and GitHub retains the domain verification.
4. Update local remotes and any developer clones to the final organization URL.
5. Inspect organization rulesets, branch protection, deploy keys, Pages permissions,
   webhooks, GitHub Apps, Actions secrets/variables and environment approvals. None
   are represented in this checkout.
6. Replace personal GitHub Project dependencies in operational planning with a
   Camilore-owned project or issue system.
7. Re-run the site validator and verify the deployed commit, DNS, TLS and canonical
   URLs after GitHub's redirect/Pages migration settles.

The repository contains no GitHub Actions workflow, Pages action, Netlify/Vercel
configuration, webhooks, checked-in environment variables, analytics key or hosting
secret. DNS/registrar state and GitHub Pages account settings cannot be inferred
from the checkout.

## Legal approval status

### Privacy Policy — approved

The owner reported on November 9, 2026 that the Privacy Policy is legally
approved. The approval itself is held by the owner and is not stored in this
repository. On the same day:

- the "Legal review required" banner was removed from `privacy-policy.md`, and
  the visible legal-review notice was removed from the EN/FR/ES privacy pages,
  deliberately and only for the Privacy Policy;
- the original effective date (August 17, 2026) was kept and **Last updated**
  was set to November 9, 2026, the day of the change; nothing was backdated;
- factual drift found while publishing was corrected against the app
  (read-only): iCloud Backup includes race history (one file per race) but not
  the player lap trace; iCloud race history mirrors the device's retention;
  the retention and Export & Import locations are Settings → SETUP; export
  carries race history but not lap traces; deleting the app does not remove
  iCloud backups; iCloud Backup is on by default and can be turned off;
- one sentence was added on voluntary feature-suggestion emails (handled and
  retained like other support correspondence), with the retention line it
  needs.

These corrections post-date the approval. They state app behaviour more
accurately and add no new processing, but the owner may wish to show the diff
to counsel.

### Terms of Use — still under review

The expanded Terms remain drafting work, not approved legal advice. The pages
still carry their visible legal-review notice; leave it in place until approval
is recorded here. Counsel should specifically review:

- the conditional October 1 transfer language and contracting-entity transition;
- Canadian and Quebec private-sector privacy applicability, privacy-officer/contact
  requirements, complaint handling and breach procedures;
- support-record purposes and retention;
- EEA/UK legal bases, processor roles and international-transfer wording;
- children's privacy wording and the App Store 4+ reference;
- Quebec governing law, warranty disclaimer, liability limitation and mandatory
  consumer rights;
- Apple subscription, renewal, cancellation and refund wording; and
- trademark/nominative-use language for games, Formula 1, platforms and hardware.

Do not remove the Terms review notice or treat the October 24 Terms revision as
approved until authorized legal review is recorded. The Privacy Policy items in
the list above are covered by the November 9 approval.

## External actions remaining

- Execute/confirm the ownership transfer documentation.
- Obtain legal approval of the Terms and then remove their draft notice deliberately
  (the Privacy Policy was approved on November 9, 2026).
- Verify App Store Connect publisher/support/privacy URLs, localized listing,
  screenshots, minimum OS, Free/Pro descriptions, monthly/annual products, prices,
  14-day introductory offers, eligibility and refund/support copy.
- Verify RevenueCat offerings map to the expected Apple products and entitlement
  `pro`; do not change identifiers during the website migration.
- Add the real public App Store URL to `SITE.store.appStoreUrl` only after validation.
- Verify support mailbox routing and security without sending a customer message.
- GitHub ownership is transferred (both repositories are under `camilore-inc`).
  Revalidate Pages/custom-domain settings using the checklist above.
- Verify DNS, registrar, TLS and Camilore control of hosting/domain accounts.

## Validation status

The repository has no semantic site version and no build step, so no artificial
version was introduced.

- `python3 scripts/validate_site.py`: passed for all 36 localized pages, local
  link targets, sitemap routes, support addresses, legal routes, publisher tags
  and JSON-LD.
- Shared JavaScript: parsed and executed in a Node VM with a minimal document
  stub; all 36 route templates rendered, generated local links/anchors resolved,
  and localized footer attribution, support routing and legal-review notices passed.
- `git diff --check`: passed.
- Local browser server/rendering: not available in the restricted workspace;
  socket binding was denied and the in-app browser was unavailable. No visual
  production claim is made. The changes add only text/metadata and retain the
  existing layout structure, with a responsive legal notice style.
- Origin fetch: attempted before edits and failed because GitHub DNS/network
  access was unavailable. Local `main` and the locally stored `origin/main`
  initially both pointed to `2cd4d5636bc62f627f2b42117f6a3d0ef4328925`.
- Public App Store search: no indexed listing found for the product name or
  bundle identifier.

Network-dependent checks (push, public URLs, App Store Connect, RevenueCat, DNS,
mail delivery and live production) must not be described as completed unless they
actually succeed.
