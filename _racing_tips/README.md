# Racing Tips feed (read by the Jax Max Delta app)

This folder is **not part of the website**. GitHub Pages does not publish
folders whose name starts with `_`, so nothing here appears on
jaxmaxdelta.com. The app downloads it directly from GitHub:

```
https://raw.githubusercontent.com/camilore-inc/jmdweb/main/_racing_tips/
```

| File | Purpose |
| --- | --- |
| `version.json` | The app reads this first, at every launch. If `version` differs from the tips it has, it downloads `feed.json` and every image. |
| `feed.json` | All tips, in English, French and Spanish. |
| `images/` | PNG, JPG or WebP images used by the tips. |

## Publishing a change

1. Edit `feed.json` (and add images to `images/`).
2. For each tip you changed, set `"updated"` to today's date. A changed tip
   shows as **unread** again in the app, and **Recent** sorts by this date.
3. Give the feed a new version, **the same in both files**: `"version"` in
   `feed.json` and in `version.json`. Use `YYYY-MM-DD.N` (for example
   `2026-11-15.1`, then `2026-11-15.2` for a second change that day).
4. Check it: `python3 scripts/validate_racing_tips.py`
5. Commit and push to `main`. Phones pick it up the next time the app starts
   (GitHub can take up to about 5 minutes to serve the new files).

The app ships with a copy of the feed (`apps/jax_max_delta/assets/racing_tips/`
in the JaxMaxDelta repo), so tips work offline and on first launch. When a new
app version is released, copy this folder's `feed.json` and `images/` there.

## Format

```json
{
  "schema": 1,
  "version": "2026-11-09.1",
  "categories": [
    { "id": "driving_technique",
      "title": { "en": "DRIVING TECHNIQUE", "fr": "…", "es": "…" } }
  ],
  "tips": [
    {
      "id": "racing_line",
      "category": "driving_technique",
      "published": "2026-11-09",
      "updated": "2026-11-09",
      "title":   { "en": "Racing Line", "fr": "…", "es": "…" },
      "summary": { "en": "One line shown in the list.", "fr": "…", "es": "…" },
      "body": {
        "en": [ …blocks… ],
        "fr": [ …blocks… ],
        "es": [ …blocks… ]
      }
    }
  ]
}
```

- `id` never changes once published: the app keys "read" to it.
- `category` must be one of the `categories` ids. New categories can be added.
- Every tip needs English; French and Spanish fall back to English if missing,
  but always write all three.

### Blocks

Each language's `body` is a list of blocks, shown top to bottom:

| `type` | Fields | Shows as |
| --- | --- | --- |
| `heading` | `text` | A small cyan heading |
| `paragraph` | `text` | Body text |
| `bullets` | `items` (list of strings) | A bulleted list |
| `image` | `src`, optional `caption` | A 16:9 image with its caption underneath |
| `exercise` | `text` | The green **PRACTICE THIS** box |
| `note` | `text` | A highlighted cyan box |

Text is plain text: no HTML, Markdown or links. Unknown block types are
skipped by the app.

### Images

- `src` must be `images/<name>.png` (or `.jpg`, `.jpeg`, `.webp`), lower case,
  no spaces. URLs are rejected.
- Shown at 16:9 on a dark background; 1200 × 675 px works well. Keep each
  under 300 KB (the app refuses anything over 3 MB).
- Prefer images **without words**, so one image serves all three languages;
  put the explanation in each language's `caption`.
- The first image of a tip is also its thumbnail in the list.
