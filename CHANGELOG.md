# Website changelog

The website has no version number of its own. Entries are dated and name the
Jax Max Delta app release the site was checked against.

## 2026-11-09 — Privacy Policy: Racing Tips updates (app 0.32.0)

- New section 4.6 (EN/FR/ES): the app asks GitHub for new Racing Tips at start-up
  and on pull-to-refresh; nothing about the driver is sent, and GitHub sees the
  device's IP address as with any web request. The short version (section 1)
  and international processing (section 10) now name GitHub too.

## 2026-11-09 — Racing Tips feed (app 0.30.0)

- New `_racing_tips/` folder: the Racing Tips content the app downloads from
  GitHub (`version.json`, `feed.json`, `images/`). The leading underscore
  keeps it off jaxmaxdelta.com. 26 tips in EN/FR/ES, 7 of them illustrated.
  Authoring guide in `_racing_tips/README.md`; check with
  `python3 scripts/validate_racing_tips.py`.
- Racing Tips guide (EN/FR/ES): new section on illustrated tips that update on
  their own, sorting (Category / Recent / Unread) and changed tips showing as
  unread.

## 2026-11-09 — Terms approved; new homepage lead (app 0.29.0)

- **Legal review complete.** The "Legal review status: this expanded draft
  requires approval…" notice is removed from the EN/FR/ES Terms pages. The
  validator now fails if a legal-review notice is published again.
- **Homepage lead** (EN/FR/ES): "Your phone becomes your live dashboard, or
  the pit wall beside your cockpit. Jax Max Delta turns live F1 telemetry into
  on-track assistance — and keeps a race memory of every session, using it to
  prepare you for the next one." It no longer names the iPhone alone.

## 2026-11-09 — aligned with Jax Max Delta app 1.29.0

Original homepage headline restored; public blog retired. Follows the 2026-11
revision below; everything else in that revision is unchanged.

- Home hero headline is again three lines: "Your Race Engineer. Your Pit Wall.
  Your Race Memory." / "Votre ingénieur de course. Votre mur des stands. Votre
  mémoire de course." / "Tu ingeniero de carrera. Tu muro de boxes. Tu memoria
  de carrera." Home page title, description, Open Graph and Twitter text
  follow (root `index.html` included). The hero lead (iPhone as pit wall),
  footer lead, privacy section and Before/During/After sections are unchanged.
- Blog retired from the public site in EN/FR/ES: footer link removed, the
  "other articles" box and "Blog" button removed from post pages, and all 15
  blog URLs removed from `sitemap.xml`. The pages and their text stay in the
  repository, still resolve at their old URLs and now have
  `noindex, follow`. No redirects were added.
- `docs/EDITORIAL_STANDARD.md` sets the bar for any future article.
- Validator checks that the blog stays retired (no sitemap entries, no
  links, `noindex` on every blog page, no "blog" text on other pages).

## 2026-11 — aligned with Jax Max Delta app 1.29.0

Positioning wording, privacy section, feature suggestions, approved Privacy Policy.

- Home hero and footer: "Your pit wall. In your hand." / "Your race engineer.
  In your ear.", with "race memory" kept in the hero lead and footer. Home page
  title, description, Open Graph and Twitter text follow, in EN/FR/ES.
- Home privacy section rewritten as "Your race data. Your competitive edge.":
  nothing is published to leaderboards or shared with other drivers; what does
  leave the device (crash reports, subscription status) is named.
- Features: Prepare for Session, Live Dashboard and Virtual Pit Wall now lead
  with the driver benefit; retention wording covers lap traces and race history.
- Support: a separate "Suggest a feature" entry (mailto to
  support@jaxmaxdelta.com with a localized subject and template), distinct from
  technical support and bug reports; Roadmap links to it.
- Privacy Policy approved (owner-reported, 2026-11-09): review notice removed,
  factual drift on iCloud Backup, export and retention corrected, feature
  suggestions covered. Terms remain a draft under review.
