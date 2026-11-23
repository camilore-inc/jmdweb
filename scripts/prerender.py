#!/usr/bin/env python3
"""Write each page's rendered markup into its HTML file (static rendering).

The site's text lives in assets/site.js and assets/guides.js, which draw every
page in the browser. Search engines index pages faster and more reliably when
the text is already in the HTML, and AI search crawlers (ChatGPT, Claude,
Perplexity) do not run JavaScript at all. This script loads every localized
page in headless Google Chrome with ?prerender (which stops boot() before any
interactive setup), takes the markup of #app and writes it into the file. In
the browser, site.js still runs and replaces it with identical markup.

Run it after any change to assets/site.js, assets/guides.js or a page shell
(including after scripts/build_guide_pages.py):

    python3 scripts/prerender.py

scripts/validate_site.py fails when a page is out of date: each #app carries
data-prerender, a hash of the sources it was rendered from.

Needs Google Chrome (or set CHROME=/path/to/chrome). Standard library only.
"""

from __future__ import annotations

import functools
import hashlib
import http.server
import os
import re
import subprocess
import sys
import tempfile
import threading
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LANGS = ("en", "fr", "es")
SOURCES = (ROOT / "assets" / "site.js", ROOT / "assets" / "guides.js")
CHROME_PATHS = (
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/opt/pw-browsers/chromium",
)
APP = re.compile(r'<div id="app"[^>]*>[\s\S]*</div>(?=\s*</body>)')
RETIRED = '<meta name="robots" content="noindex, follow">'


def pages() -> list[Path]:
    """Localized pages drawn by site.js, except the retired (noindex) blog."""
    found = []
    for lang in LANGS:
        for path in sorted((ROOT / lang).rglob("*.html")):
            source = path.read_text(encoding="utf-8")
            if APP.search(source) and RETIRED not in source:
                found.append(path)
    return found


def shell_key(source: str) -> str:
    """The parts of a page shell that change what site.js renders."""
    lang = re.search(r'<html lang="([^"]+)"', source)
    body = re.search(r"<body[^>]*>", source)
    scripts = re.findall(r'<script src="([^"]+)"', source)
    return "|".join([lang.group(1) if lang else "", body.group(0) if body else "", *scripts])


def fingerprint(source: str) -> str:
    """Hash of everything the rendered markup depends on (shared with validate_site.py)."""
    digest = hashlib.sha256()
    for path in SOURCES:
        digest.update(path.read_bytes())
    digest.update(shell_key(source).encode("utf-8"))
    return digest.hexdigest()[:16]


def chrome() -> str:
    for candidate in (os.environ.get("CHROME"), *CHROME_PATHS):
        if candidate and Path(candidate).is_file():
            return candidate
    raise SystemExit("Google Chrome not found; set CHROME=/path/to/chrome")


def render(binary: str, url: str) -> str:
    with tempfile.TemporaryDirectory() as profile:
        result = subprocess.run(
            [
                binary,
                "--headless=new",
                "--disable-gpu",
                "--no-first-run",
                "--no-default-browser-check",
                "--mute-audio",
                f"--user-data-dir={profile}",
                "--virtual-time-budget=5000",
                "--dump-dom",
                url,
            ],
            capture_output=True,
            text=True,
            timeout=60,
        )
    match = re.search(r'<div id="app"[^>]*>([\s\S]*)</div>\s*</body>', result.stdout)
    if not match or "<main" not in match.group(1):
        raise SystemExit(f"{url}: Chrome returned no rendered #app\n{result.stderr[-800:]}")
    return match.group(1).strip()


def main() -> None:
    binary = chrome()
    handler = functools.partial(QuietHandler, directory=str(ROOT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    base = f"http://127.0.0.1:{server.server_address[1]}"
    targets = pages()

    def one(path: Path) -> tuple[Path, str]:
        return path, render(binary, f"{base}/{path.relative_to(ROOT).as_posix()}?prerender")

    changed = 0
    try:
        with ThreadPoolExecutor(max_workers=4) as pool:
            for path, markup in pool.map(one, targets):
                source = path.read_text(encoding="utf-8")
                block = f'<div id="app" data-prerender="{fingerprint(source)}">{markup}</div>'
                updated = APP.sub(lambda _: block, source, count=1)
                if updated != source:
                    path.write_text(updated, encoding="utf-8")
                    changed += 1
    finally:
        server.shutdown()
    print(f"Prerendered {len(targets)} pages ({changed} changed).")


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args) -> None:  # noqa: D401 - silence request logs
        pass


if __name__ == "__main__":
    sys.exit(main())
