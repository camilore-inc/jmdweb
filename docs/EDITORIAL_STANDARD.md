# Editorial standard for future articles

The public blog was retired on 2026-11-09. Its four starter posts were short
and mostly promotional, so they did not give readers enough value. This file sets the
bar any future article must clear before the site links to it again.

## What the retired blog left behind

- Article pages: `en|fr|es/blog.html` and `en|fr|es/blog/<slug>.html`.
- Article text: `copy.<lang>.blog` in `assets/site.js`; slugs in `SITE.posts`.
- The old URLs still resolve, so existing links do not break. Each page has
  `<meta name="robots" content="noindex, follow">`. None of them is in
  `sitemap.xml`, and no navigation, footer or other page links to them.
  `scripts/validate_site.py` enforces all of this.

Do not delete these files. They may be reused, rewritten or replaced later.

## The standard

An article is published only if a sim racer would save it or send it to a
friend because it helped them. A short product pitch with blog formatting does
not qualify.

Every article must be:

1. **Substantial.** It covers its topic in enough depth to stand alone,
   usually well over 1,000 words in English, with headings, steps and
   visuals where they help.
2. **Original.** It reflects JMD's own testing, telemetry, data or experience.
   It does not rewrite other people's guides.
3. **Useful.** It gives at least one of:
   - practical racing insight a driver can use in their next session
     (braking, tyre management, energy deployment, race craft, setup choices);
   - a worked example, such as a real lap or stint, a before/after setup
     change or a telemetry trace, explained step by step;
   - a technical explanation, such as how F1 UDP telemetry works, what a
     delta means or why a setting matters;
   - evidence-based analysis: claims backed by data, with the method stated.
4. **Accurate.** Every statement about Jax Max Delta matches the shipped app
   (the same rule as `assets/guides.js`). Game behaviour is checked against
   the game version named in the article.
5. **Honest about the product.** The app may appear where it genuinely helps
   the reader, but the article must still be worth reading without it. It
   ends with at most one short, relevant mention of the app.
6. **Fully localized.** French and Spanish are real translations with correct
   accents and racing terminology, not machine output left unreviewed.
7. **Dated and maintained.** Each article shows a publication date and names
   the game version it applies to. Outdated articles are updated or retired.

## Quality benchmarks

These show the depth and reader value we are aiming for. Do not copy their
content.

- Trak Racer, racing simulator articles: https://trakracer.ca/blogs/racing-simulator
- F1 Legend Sim blog: https://f1legendsim.com/en/blog

## Bringing articles back

Only bring the blog back once several articles meet this standard. Then, in
one change:

1. Add the articles in all three languages.
2. Remove the `noindex` tag from the pages being published.
3. Add them back to `sitemap.xml`, and decide whether the footer gets a link.
4. Update the retired-blog checks in `scripts/validate_site.py` and add a
   `CHANGELOG.md` entry.
