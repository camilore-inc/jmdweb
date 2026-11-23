#!/usr/bin/env python3
"""Zero-dependency integrity checks for the static Jax Max Delta website."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent.parent
FAILURES: list[str] = []


def check(condition: bool, message: str) -> None:
    if not condition:
        FAILURES.append(message)


def exists_as_page(path: Path) -> bool:
    return path.is_file() or (path.is_dir() and (path / "index.html").is_file())


all_files = [
    path
    for path in ROOT.rglob("*")
    if path.is_file()
    and not any(part in {".git", "node_modules", "dist", "build"} for part in path.parts)
]
public_html = [
    path
    for path in all_files
    if path.suffix == ".html" and path.relative_to(ROOT).parts[0] in {"en", "fr", "es"}
]
text_files = [
    path
    for path in all_files
    if path.suffix.lower() in {".html", ".js", ".css", ".md", ".xml", ".txt", ".yml", ".yaml", ".json"}
]

for path in public_html:
    source = path.read_text(encoding="utf-8")
    label = path.relative_to(ROOT)
    check('<link rel="canonical"' in source, f"{label}: missing canonical URL")
    check('property="og:title"' in source, f"{label}: missing Open Graph title")
    check(
        '<meta name="publisher" content="Camilore Inc.">' in source,
        f"{label}: missing publisher metadata",
    )

    for target in re.findall(r'(?:href|src)="([^"]+)"', source):
        if re.match(r"^(?:https?:|mailto:|#|data:)", target):
            continue
        bare = re.split(r"[?#]", target, maxsplit=1)[0]
        if not bare:
            continue
        resolved = (path.parent / unquote(bare)).resolve()
        check(exists_as_page(resolved), f"{label}: missing local target {target}")

for lang in ("en", "fr", "es"):
    source = (ROOT / lang / "index.html").read_text(encoding="utf-8")
    block = re.search(
        r'<script type="application/ld\+json">\s*([\s\S]*?)\s*</script>', source
    )
    check(block is not None, f"{lang}/index.html: missing JSON-LD")
    if block:
        try:
            structured = json.loads(block.group(1))
            check(
                structured.get("@type") == "SoftwareApplication",
                f"{lang}/index.html: JSON-LD is not SoftwareApplication",
            )
            check(
                structured.get("publisher", {}).get("name") == "Camilore Inc.",
                f"{lang}/index.html: JSON-LD publisher mismatch",
            )
        except json.JSONDecodeError as error:
            FAILURES.append(f"{lang}/index.html: invalid JSON-LD ({error})")

published = "\n".join(
    path.read_text(encoding="utf-8")
    for path in text_files
    if path.relative_to(ROOT).parts[0] != "scripts"
)
check(
    re.search(r"Marc Beaudry|47 rue de l['’]Etoile|support@camilore\.com", published, re.I)
    is None,
    "personal or wrong support identity remains in published text",
)
check(re.search(r"<form\b", published, re.I) is None, "unexpected contact form found")

emails = re.findall(r"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}", published, re.I)
for email in sorted(set(value.lower() for value in emails)):
    check(email == "support@jaxmaxdelta.com", f"unexpected customer-facing email: {email}")

site_js = (ROOT / "assets" / "site.js").read_text(encoding="utf-8")
check('contact: "support@jaxmaxdelta.com"' in site_js, "support destination is incorrect")
check(
    "Jax Max Delta is a product of Camilore Inc." in site_js,
    "English product attribution missing",
)
check(
    "© 2026 Camilore Inc. All rights reserved." in site_js,
    "English copyright missing",
)
# Terms approved 2026-11-09: no legal-review draft notice may be published.
check("reviewNotice:" not in site_js, "a legal-review draft notice is still published")

# Feature suggestions: a plain mailto to the support mailbox, with a localized
# subject in every language. No form, no other destination.
check(
    "mailto:${SITE.contact}?subject=${encodeURIComponent(s.suggestSubject)}" in site_js,
    "feature-suggestion link must be a mailto to SITE.contact with an encoded subject",
)
for subject in ("JMD Feature Suggestion", "JMD – Suggestion de fonction", "JMD – Sugerencia de función"):
    check(f'suggestSubject: "{subject}"' in site_js, f"feature-suggestion subject missing: {subject}")
check(
    len(re.findall(r'href="support\.html#suggest-a-feature"', site_js)) == 1
    and 'id="suggest-a-feature"' in site_js,
    "roadmap link to the Suggest a feature entry is broken",
)

# The approved Privacy Policy: the page and its Markdown source show the same
# revision date.
policy_md = (ROOT / "privacy-policy.md").read_text(encoding="utf-8")
md_updated = re.search(r"\*\*Last updated:\*\* ([A-Z][a-z]+ \d{1,2}, \d{4})", policy_md)
check(md_updated is not None, "privacy-policy.md: missing Last updated date")
if md_updated:
    check(
        f"Last updated: {md_updated.group(1)}" in site_js,
        "English privacy page date does not match privacy-policy.md",
    )
check((ROOT / "en" / "privacy.html").is_file(), "English privacy route missing")
check((ROOT / "en" / "terms.html").is_file(), "English terms route missing")

sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")

# Retired blog (2026-11): old URLs keep working, but the pages are noindex,
# out of the sitemap, and nothing on the site links to them.
check("/blog" not in sitemap, "sitemap still lists blog URLs")
check('"blog.html"' not in site_js, "site.js still links to blog.html")
check("../blog.html" not in site_js, "post pages still link to the blog index")
for lang in ("en", "fr", "es"):
    blog_pages = [ROOT / lang / "blog.html", *sorted((ROOT / lang / "blog").glob("*.html"))]
    for page in blog_pages:
        check(
            '<meta name="robots" content="noindex, follow">' in page.read_text(encoding="utf-8"),
            f"{page.relative_to(ROOT)}: retired blog page missing noindex",
        )
for page in ROOT.rglob("*.html"):
    rel = page.relative_to(ROOT).as_posix()
    if "/blog" in f"/{rel}" or rel.startswith(".") or "/references/" in f"/{rel}":
        continue
    check("blog" not in page.read_text(encoding="utf-8").lower(), f"{rel}: mentions the retired blog")

for raw_path in re.findall(r"<loc>https://jaxmaxdelta\.com([^<]*)</loc>", sitemap):
    url_path = urlsplit(unquote(raw_path)).path
    local = f"{url_path}index.html" if url_path.endswith("/") else url_path
    check(exists_as_page(ROOT / local.lstrip("/")), f"sitemap target missing: {url_path}")

# Screenshots and preview clips: every slot the pages use exists in all three
# languages and has a caption in each, every guide shot names a real slot,
# every web copy is built from a known original, and nothing else sits in
# assets/screenshots/ (it is all publicly served, so a stray capture from an old
# app version would be too).
LANGS = ("en", "fr", "es")
guides_js = (ROOT / "assets" / "guides.js").read_text(encoding="utf-8")
shots_block = re.search(r"const SHOTS = \{(.*?)\n\};", site_js, re.S)
check(shots_block is not None, "site.js: SHOTS table not found")
slots = dict(re.findall(r"^\s*(\w+):\s*\{(.*)\},?$", shots_block.group(1) if shots_block else "", re.M))
for key, body in slots.items():
    names = re.findall(r'perLang\("([^"]+)"\)', body)
    for clip in re.findall(r'clip\("([^"]+)"\)', body):
        names += [f"{clip}.mp4", f"{clip}-poster.webp"]
    for name in names:
        folder = "video" if name.endswith((".mp4", "-poster.webp")) else "screenshots/web"
        for lang in LANGS:
            check(
                (ROOT / "assets" / folder / lang / name).is_file(),
                f"SHOTS.{key}: missing assets/{folder}/{lang}/{name}",
            )
    check(
        len(re.findall(rf'^\s+{key}: "', site_js, re.M)) >= len(LANGS),
        f"site.js: SHOTS.{key} needs a caption in EN, FR and ES",
    )
used = re.findall(r'\bshot: "(\w+)"', guides_js)
for keys in re.findall(r"\bshots: \[([^\]]*)\]", guides_js + site_js):
    used += re.findall(r'"(\w+)"', keys)
for key in sorted(set(used)):
    check(key in slots, f"shot {key!r} is not a SHOTS slot")

build_script = (ROOT / "scripts" / "build_web_media.py").read_text(encoding="utf-8")
built = set(re.findall(r'"[^"]+": "([\w-]+)"', build_script))
site_previews = re.search(r"SITE_PREVIEWS = \(([^)]*)\)", build_script)
built |= set(re.findall(r'"([\w-]+)"', site_previews.group(1) if site_previews else ""))
for lang in LANGS:
    for web in sorted((ROOT / "assets" / "screenshots" / "web" / lang).glob("*.webp")):
        check(web.stem in built, f"{web.relative_to(ROOT)}: no original in build_web_media.py")
    for clip in sorted((ROOT / "assets" / "video" / lang).glob("*.mp4")):
        check(clip.stem in built, f"{clip.relative_to(ROOT)}: no source in build_web_media.py")
for entry in (ROOT / "assets" / "screenshots").iterdir():
    if entry.name.startswith("."):
        continue
    check(
        entry.name in {"current", "web"},
        f"assets/screenshots/{entry.name}: only current/ and web/ belong here",
    )

# Static rendering: every page site.js draws (except the retired blog) ships its
# full markup in #app, rendered from the current sources. If this fails, run
# python3 scripts/prerender.py.
sys.path.insert(0, str(ROOT / "scripts"))
import prerender  # noqa: E402

for path in prerender.pages():
    source = path.read_text(encoding="utf-8")
    label = path.relative_to(ROOT)
    stamp = re.search(r'<div id="app" data-prerender="([0-9a-f]+)">', source)
    check(stamp is not None, f"{label}: not prerendered (run scripts/prerender.py)")
    if stamp:
        check(
            stamp.group(1) == prerender.fingerprint(source),
            f"{label}: prerendered markup is out of date (run scripts/prerender.py)",
        )
    check(len(re.findall(r"<h1\b", source)) == 1, f"{label}: needs exactly one <h1>")
    check("?prerender" not in source, f"{label}: a ?prerender URL leaked into the markup")

if FAILURES:
    print(f"Site validation failed ({len(FAILURES)}):", file=sys.stderr)
    for failure in FAILURES:
        print(f"- {failure}", file=sys.stderr)
    raise SystemExit(1)

print(
    f"Site validation passed: {len(public_html)} localized pages, "
    f"{len(emails)} email references, support/legal/metadata checks clean."
)
