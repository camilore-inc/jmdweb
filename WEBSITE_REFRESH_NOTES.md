# Website refresh notes — JMD R1 / App Store launch

> Historical implementation notes. Corporate ownership, legal drafting, support,
> App Store verification and deployment-transfer status as of October 24, 2026 are
> maintained in [`docs/CAMILORE_OWNERSHIP_MIGRATION.md`](docs/CAMILORE_OWNERSHIP_MIGRATION.md).

Refresh of jaxmaxdelta.com so it represents the current R1 app. The site is
still plain static HTML/CSS/JS on GitHub Pages (`CNAME` unchanged), with no
framework and no build step.

Product facts were checked against the app repository (`JaxMaxDelta`:
`docs/product/screens-and-ux.md`, `docs/product/product-roadmap.md`,
`docs/product/jax-race-engineer.md`, the `app_en/fr/es.arb` string files and
the Pit Wall / Quick Jax source). Where the app did not clearly support a
claim, the site leaves it out.

## What changed

### Positioning and structure

- New hero: **"Your race engineer. Your pit wall. Your race memory."**, with
  the supporting line *"Jax Max Delta turns live F1 telemetry into the
  information, coaching, race context and history you need — before, during
  and after every session."*
- The homepage is now built around **Before → During → After**: hero, proof
  strip (platforms, games, local UDP, no account, languages), a three-phase
  overview, Prepare for Session, Live Dashboard + Jax, Pit Wall, **Race
  Replay** (its own full-width section), Session History, privacy
  reassurance, compatibility, availability, and the footer.
- The "Second screen. Voice alerts. Pit wall support." hero and the
  "virtual pit wall crew" lead are gone.

### Pages

| Page | Change |
|---|---|
| Home | Rebuilt as described above. |
| Features | Rewritten as 9 shipped groups, each tagged with its phase and "Available now": Prepare for Session, Live Dashboard, Jax (voice), Virtual Pit Wall, Race Replay, Session History, Lap Trace & Analysis, Setup & Tyre Memory, Private Backup & Data Control. Also an "Also included" row (Racing Tips, demos, units, languages) and a separate, date-free "What we're exploring next" section. |
| How It Works | Rewritten as 11 steps: install → UDP → prepare → connect → dashboard → Jax → Pit Wall → end the session → Session History → Race Replay → settings, data and iCloud backup. Troubleshooting is updated too. |
| Roadmap | R1 now lists what has shipped (Prepare for Session, Race Replay, Pit Wall, F1 26 energy management, SC/VSC/red-flag handling, iCloud backup, and more). Future items are cautious and have no dates. Practice and qualifying replay is listed as *exploring*, not shipped. Sprint races already get Race Replay, as the app does. |
| Support | FAQ adds supported games, Android status, why some sessions have no Race Replay, and where to download. The "only a dashboard?" answer is updated. |
| Privacy / Terms | **Wording not changed** (see below). They pick up the new page layout only. |
| Blog | Posts not changed. They pick up the new layout and metadata only. *(Retired from the public site on 2026-11-09; see CHANGELOG.md.)* |

### Navigation

- The header now has **Features · How It Works · Support**, plus the EN/FR/ES
  switcher.
- The footer has Product (Features, How It Works, Roadmap, Roro Engine) and
  Help & legal (Support, Privacy, Terms), plus the independence disclaimer.
  The Blog link was removed on 2026-11-09 when the blog was retired.
- Every existing URL still works: `/en|fr|es/{index,features,how-to,support,blog,roadmap,privacy,terms}.html`,
  the blog posts, and the root `index.html` / `privacy.html` / `support.html`
  redirects.

### Terminology aligned with the app

- The site now uses the app's own French and Spanish names: FR *Mur des
  stands*, *Historique des sessions*, *Préparer la session*, *Tableau de
  bord*; ES *Muro de boxes*, *Historial de sesiones*, *Preparar sesión*,
  *Panel*.
- Settings tab names match the app in each language: EN SETUP / JAX /
  SUPPORT / LEGAL; FR RÉGLAGES / JAX / ASSISTANCE / LEGAL; ES AJUSTES / JAX /
  SOPORTE / LEGAL.
- **Quick Jax** is the panel opened by the Jax button on the Pit Wall. It
  holds the voice on/off toggle and the message-category toggles; the app
  titles it "Jax Voice / Voix de Jax / Voz de Jax". The English site calls it
  Quick Jax. French and Spanish say "the Jax button on the Pit Wall" so the
  site doesn't invent a translated name.
- The site gives no Pit Wall tab count, since the tabs have changed (the COACH
  tab is gone and a CAR tab was added). It describes what the Pit Wall does
  instead.

### Code and assets

- `assets/site.js` (still a single file):
  - `SITE.store` holds the App Store and TestFlight links.
  - The `SHOTS` table defines the screenshot slots.
  - Copy for all three languages lives in `copy`. English is the source.
  - Renderers now emit a skip link, a `<main>` landmark, proper `aria-current`
    on nav links, an accessible mobile menu (aria-controls/expanded, Escape
    closes it and returns focus), and `hreflang`/`lang` on the language links.
  - The runtime `<title>`/meta rewriting was removed. Metadata now lives in
    each HTML file, where crawlers can read it.
- `assets/site.css`: rewritten.
  - Keeps the same dark tokens; red is used only for emphasis.
  - Adds screenshot frames and placeholders, the phase layout, the Race Replay
    band, visible focus states and `prefers-reduced-motion` support.
  - Minimum 44px touch targets in the nav.
  - The primary button red is darkened (`#c9281f`) so white text passes
    WCAG AA.
- All 36 HTML pages have regenerated `<head>`s:
  - absolute canonical;
  - `hreflang` en/fr/es plus `x-default` (blog posts had none before);
  - full OpenGraph: `og:url`, `og:site_name`, `og:locale` (+ alternates), and
    image width/height/alt;
  - Twitter card with `twitter:image`;
  - accented FR/ES titles and descriptions;
  - a `<noscript>` fallback.
- New `sitemap.xml` (36 URLs with language alternates) and `robots.txt`.
- The hero image is a small inline SVG lap-trace illustration: no screenshot,
  no animation, and not presented as app UI.

## Brand assets

The current app icon (from the iOS `AppIcon`) is the **black helmet with the
white/red X**. The **old speedometer + X icon** was still used for
`favicon.png` and `apple-touch-icon.png`.

| File | Status |
|---|---|
| `favicon.png`, `apple-touch-icon.png` | **Replaced**: regenerated from the current helmet app icon (same art as the shipped `Icon-App-1024`). |
| `assets/brand/jmd-helmet-96.png` | **New**: small helmet mark for the header/footer. It replaces the 1.4 MB `jax_helmet.png` that was loading at 34px. |
| `assets/brand/jmd-icon-192.png` | New: 192px app-icon derivative, kept for future use (e.g. a web manifest). |
| `assets/brand/jmd-og-1200x630.png` | **New social/OpenGraph image** (1200×630): helmet + tagline on the dark JMD background. **Temporary; Marc should replace it with final approved social art** (same file name and size, and every page picks it up). |
| `assets/jax_helmet.png` | Kept: current branding. No page references it now, but it stays so previously shared links to the old `og:image` URL still resolve. |
| `assets/jax_master_1024.png`, `assets/jax.png`, `assets/jax_{en,fr,es}_splashscreen.png`, `assets/jax_baseball_cap _and_more.png` | **Removed from `assets/`**: no longer referenced. Byte-identical copies remain in `references/`, so nothing is lost. |
| `references/` | Untouched source art. Note: `references/favicon.svg` (gradient "C") and `references/favicon-32.png` are old and unused. |

## Screenshots

**No current screenshots were in the repository**, so every product visual is
a labelled placeholder ("Current screenshot coming soon"). No screenshots were
generated or faked.

The old captures in `assets/screenshots/*.png` (June 2026, e.g. the v0.6.0
start screen with "Enter Live Session", the Pit Wall COACH tab, and the older
dashboard layout) **no longer match the app**. The site doesn't reference them
any more, but they remain in the folder, along with `JMD-Guide.pptx`. Delete
them once the new set is in.

### To add (Marc)

Put the files in `assets/screenshots/current/` and set `file` for the slot in
`SHOTS` at the top of `assets/site.js`. `assets/screenshots/current/README.md`
has details, including per-language files and non-iPhone sizes.

| Slot | Suggested file | Orientation | Used on |
|---|---|---|---|
| `home` | `home.png` | landscape | How It Works step 1 |
| `prepare` | `prepare-session.png` | portrait | Home, Features, How It Works |
| `dashboard` | `dashboard.png` | landscape | Home, Features, How It Works |
| `pitWallTiming` | `pit-wall-timing.png` | landscape | Home, Features, How It Works |
| `pitWallMap` | `pit-wall-map.png` | landscape | Home, Features |
| `pitWallGame` | `pit-wall-game.png` | landscape | Home, Features |
| `sessionHistory` | `session-history.png` | portrait | Home, Features, How It Works |
| `raceResults` | `race-results.png` | portrait | Home, Features |
| `raceReplayPortrait` | `race-replay-portrait.png` | portrait | Home, Features |
| `raceReplayLandscape` | `race-replay-landscape.png` | landscape | Home, Features, How It Works |

I tested the mechanism with a temporary image: it renders in the device frame
with explicit width/height and lazy loading, and real captures keep their own
aspect ratio.

## Preview video

The screenshot slots can also take a video. The Race Replay landscape slot is
set up for it: put an MP4 in `assets/video/` and set `video` on
`raceReplayLandscape` in `SHOTS` (see `assets/video/README.md`). The clip:

- plays muted and looping only while on screen, and pauses off screen;
- has a play/pause button, and a pause by the visitor sticks;
- never autoplays under `prefers-reduced-motion`;
- uses the slot's screenshot as its poster, with `preload="none"`.

This was tested in headless Chrome over the DevTools protocol with a stand-in
clip, in both normal and reduced-motion modes.

Suggested content: a 25–30 s real screen recording that follows Prepare →
Dashboard + Jax → Pit Wall → Race Replay → Session History. Use a 15–20 s
Race Replay cut for a second App Store preview.

## App Store / TestFlight links

- The old literal placeholder links (`https://testflight.apple.com/join/placeholder`,
  `https://apps.apple.com/app/id-placeholder`) are **gone**.
- The repository has no real App Store or TestFlight URL. `SITE.store.appStoreUrl`
  and `SITE.store.testFlightUrl` in `assets/site.js` are therefore empty, and
  the site shows a non-clickable **"Coming soon on the App Store"** status.
- **When the listing is live**, set `appStoreUrl` and the site switches over
  on its own:
  - the hero and How It Works show "Download on the App Store";
  - the closing section heading becomes "Available on the App Store";
  - the closing panel gains the download button.
- Consider Apple's official "Download on the App Store" badge artwork at that
  point.
- The site shows no pricing.

## Legal and business text

This section is superseded by the October 24, 2026 ownership migration. The
site now identifies Camilore Inc., routes all JMD inquiries to
`support@jaxmaxdelta.com`, displays corporate copyright/product attribution,
and contains expanded Privacy and Terms drafts visibly marked for legal review.
See `docs/CAMILORE_OWNERSHIP_MIGRATION.md` for the current audit and approvals.

## Verification performed

- Served locally (`python3 -m http.server`) and rendered in headless Chrome.
- **All 36 pages** (EN/FR/ES × 8 pages + 4 posts) render content, with **zero
  console errors or uncaught exceptions**. I confirmed the check catches
  errors by planting one on a probe page.
- **1,113 rendered links and image sources** checked: no missing files and no
  broken `#anchors`. The only external links are Apple, RevenueCat and
  Firebase privacy pages, `mailto:` and the site's own canonical URLs. No
  placeholder URLs.
- Canonical and hreflang URLs all map to existing files, and the OG image
  exists at its absolute path.
- Checked visually at desktop (1280), tablet (768) and mobile (390) in EN, FR
  and ES. The mobile menu was tested: it opens, closes on Escape and returns
  focus to the toggle.
- Stale-copy search: no "second screen" hero, no "six tabs", no COACH tab, no
  "Enter Live Session".

## Recommended next steps

1. Add the 10 current screenshots (table above), then delete the legacy
   screenshots.
2. Replace `assets/brand/jmd-og-1200x630.png` with final social art.
3. Set `SITE.store.appStoreUrl` on launch day, and update the Terms clause
   about placeholders.
4. ~~Refresh the four starter blog posts.~~ Superseded: the blog was retired
   on 2026-11-09. Any return must meet `docs/EDITORIAL_STANDARD.md`.
5. Once the App Store listing exists, consider `SoftwareApplication` JSON-LD
   using the real store data. Nothing was added now, to avoid guessing.
6. iPad support is untested, so all iPad references were removed (2026-11-03).
