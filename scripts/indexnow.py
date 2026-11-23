#!/usr/bin/env python3
"""Tell search engines which pages changed, through IndexNow.

IndexNow (https://www.indexnow.org) lets a site notify Bing and the other
participating engines (Yandex, Seznam, Naver, Yep) the moment a page changes,
instead of waiting for the next crawl. Google does not take part; it uses the
sitemap. The key file at the site root, <key>.txt, proves the site is ours; the
key is public by design.

Only pages that are in sitemap.xml and whose file changed are sent, as the
protocol asks. .github/workflows/indexnow.yml runs this after every push to
main, once GitHub Pages has published the commit. By hand:

    python3 scripts/indexnow.py --range <old-sha>..<new-sha>   # pages changed in that range
    python3 scripts/indexnow.py --all                         # every sitemap page
    add --dry-run to list the URLs without sending them

Standard library only. The same script is used by jaxmaxdelta.com and camilore.com.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
import urllib.error
import urllib.request
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent.parent
ENDPOINT = "https://api.indexnow.org/indexnow"


def key() -> str:
    """The key is the name of the one <hex>.txt file at the root whose content is that name."""
    found = [
        path.stem
        for path in ROOT.glob("*.txt")
        if re.fullmatch(r"[0-9a-f]{32}", path.stem) and path.read_text(encoding="utf-8").strip() == path.stem
    ]
    if len(found) != 1:
        raise SystemExit(f"expected exactly one IndexNow key file at the root, found {len(found)}")
    return found[0]


def sitemap_urls() -> dict[str, str]:
    """Map each sitemap URL to the repository file that serves it."""
    sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
    urls = {}
    for url in re.findall(r"<loc>([^<]+)</loc>", sitemap):
        path = urlsplit(url).path
        urls[url] = (path + "index.html" if path.endswith("/") else path).lstrip("/")
    return urls


def changed_files(span: str) -> set[str]:
    base, head = span.split("..", 1)
    if not base or set(base) == {"0"}:  # first push of a branch: no previous commit
        return {"*"}
    result = subprocess.run(
        ["git", "diff", "--name-only", base, head], cwd=ROOT, capture_output=True, text=True, check=True
    )
    return set(result.stdout.split())


def submit(urls: list[str], host: str, secret: str) -> None:
    body = json.dumps(
        {"host": host, "key": secret, "keyLocation": f"https://{host}/{secret}.txt", "urlList": urls}
    ).encode("utf-8")
    request = urllib.request.Request(
        ENDPOINT, data=body, method="POST", headers={"Content-Type": "application/json; charset=utf-8"}
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            status = response.status
    except urllib.error.HTTPError as error:
        status = error.code
    meaning = {
        200: "accepted",
        202: "accepted; key validation pending",
        400: "bad request",
        403: "key not valid (key file missing or wrong?)",
        422: "URLs do not belong to the host, or key mismatch",
        429: "too many requests",
    }.get(status, "unexpected response")
    print(f"IndexNow: {len(urls)} URL(s) for {host}: HTTP {status} ({meaning})")
    if status not in (200, 202):
        raise SystemExit(1)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    which = parser.add_mutually_exclusive_group(required=True)
    which.add_argument("--range", help="git range OLD..NEW; send sitemap pages whose file changed")
    which.add_argument("--all", action="store_true", help="send every sitemap page")
    parser.add_argument("--dry-run", action="store_true", help="list the URLs without sending")
    args = parser.parse_args()

    secret = key()
    pages = sitemap_urls()
    if args.all:
        urls = list(pages)
    else:
        changed = changed_files(args.range)
        urls = [url for url, file in pages.items() if "*" in changed or file in changed]
    if not urls:
        print("IndexNow: no sitemap page changed; nothing to send.")
        return
    host = urlsplit(urls[0]).hostname
    print("\n".join(urls))
    if args.dry_run:
        print(f"IndexNow: dry run, {len(urls)} URL(s) not sent.")
        return
    submit(urls, host, secret)


if __name__ == "__main__":
    sys.exit(main())
