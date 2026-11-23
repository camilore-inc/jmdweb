# Jax Max Delta website

Static multilingual website for [Jax Max Delta](https://jaxmaxdelta.com), a
product owned and operated by [Camilore Inc.](https://camilore.com).

Customer support, feedback, privacy and subscription questions use
`support@jaxmaxdelta.com`. Do not substitute a personal address or the Camilore
corporate mailbox.

## How It Works guides

The How It Works page links to ten guides (`/<lang>/how-to/<slug>.html`), one
per part of the app: Dashboard, Pit Wall, traces, Prepare for Session, Session
History, leagues and seasons, setups, Racing Tips, Jax, and Free vs Jax Pro.
Their text is in `assets/guides.js` (English is the source; keep French and
Spanish in step, and check every statement against the app). After adding,
removing or retitling a guide, regenerate the page shells and sitemap entries:

```sh
python3 scripts/build_guide_pages.py
python3 scripts/prerender.py
```

Screenshots and preview videos (currently all from app 0.32.6): full-size originals stay untouched; the site
loads web-sized copies made by `python3 scripts/build_web_media.py` (see
`assets/screenshots/current/README.md` and `assets/video/README.md`).

## Racing Tips feed

`_racing_tips/` holds the Racing Tips the Jax Max Delta app downloads (not
published on the website). See `_racing_tips/README.md` for the format and
how to publish a change, and run `python3 scripts/validate_racing_tips.py`
before pushing.

## Static rendering

The page text lives in `assets/site.js` and `assets/guides.js`, but every page
also ships that text already rendered in its HTML, so search engines and AI
crawlers (which do not run JavaScript) can read it. After **any** change to
`site.js`, `guides.js` or a page shell, regenerate it (needs Google Chrome):

```sh
python3 scripts/prerender.py
```

In the browser, `site.js` still runs and replaces the markup with identical
markup. `validate_site.py` fails when a page is out of date. The retired blog
pages are not prerendered.

## Search engines

- **Google Search Console and Bing Webmaster Tools** verify the site for the Camilore company Google account
  with `google5471991e324eb795.html` at the root. Do not delete it.
- **IndexNow:** after every push to `main`, `.github/workflows/indexnow.yml`
  waits until GitHub Pages has published the commit, then
  `scripts/indexnow.py` tells Bing and the other IndexNow engines which sitemap
  pages changed. The key is the `<32 hex>.txt` file at the root (public by
  design). By hand: `python3 scripts/indexnow.py --range OLD..NEW --dry-run`, or
  run the workflow from the Actions tab with "all" to resend every page.

## Local validation

There is no dependency installation. GitHub Pages serves the HTML, CSS,
JavaScript and assets directly; the only build step is the static rendering
above.

```sh
python3 scripts/validate_site.py
python3 -m http.server 4173
```

Where Node.js is available, also run `node --check assets/site.js`. This checkout
does not require Node to build or deploy.

The validator checks local links, sitemap targets, support destinations, legal
routes, corporate attribution, publisher metadata and JSON-LD. Browser testing
should cover desktop and mobile widths in English, French and Spanish.

## Blog (retired)

The blog is retired. Old article URLs still resolve but are `noindex`, out of
the sitemap and not linked anywhere; the files and text are kept for later
use. Any future article must meet
[`docs/EDITORIAL_STANDARD.md`](docs/EDITORIAL_STANDARD.md).

Deployment, legal-review status, App Store checks and repository-transfer steps
are documented in [`docs/CAMILORE_OWNERSHIP_MIGRATION.md`](docs/CAMILORE_OWNERSHIP_MIGRATION.md).
