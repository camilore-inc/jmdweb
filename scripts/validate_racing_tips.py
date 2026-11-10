#!/usr/bin/env python3
"""Checks _racing_tips/ before it is pushed: the same rules the Jax Max Delta
app applies when it downloads the feed, plus the checks that keep a tip from
silently falling back to English."""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "_racing_tips"
LANGS = ("en", "fr", "es")
BLOCKS = {"heading", "paragraph", "bullets", "image", "exercise", "note"}
IMAGE = re.compile(r"^images/[a-z0-9][a-z0-9_\-]*\.(png|jpe?g|webp)$")
VERSION = re.compile(r"^\d{4}-\d{2}-\d{2}\.\d+$")
DATE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
errors = []


def err(msg):
    errors.append(msg)


feed = json.loads((ROOT / "feed.json").read_text(encoding="utf-8"))
version = json.loads((ROOT / "version.json").read_text(encoding="utf-8"))

if feed.get("schema") != 1 or version.get("schema") != 1:
    err("schema must be 1 in feed.json and version.json")
if feed.get("version") != version.get("version"):
    err(f"version differs: feed.json {feed.get('version')} vs version.json {version.get('version')}")
if not VERSION.match(str(feed.get("version", ""))):
    err("version should look like YYYY-MM-DD.N")

categories = {}
for c in feed.get("categories", []):
    categories[c.get("id")] = c
    for lang in LANGS:
        if not c.get("title", {}).get(lang):
            err(f"category {c.get('id')}: missing title in {lang}")

ids = set()
used_images = set()
for t in feed.get("tips", []):
    tid = t.get("id", "?")
    if tid in ids:
        err(f"duplicate tip id {tid}")
    ids.add(tid)
    if t.get("category") not in categories:
        err(f"{tid}: unknown category {t.get('category')}")
    for field in ("published", "updated"):
        if not DATE.match(str(t.get(field, ""))):
            err(f"{tid}: {field} must be YYYY-MM-DD")
    for field in ("title", "summary"):
        for lang in LANGS:
            if not str(t.get(field, {}).get(lang, "")).strip():
                err(f"{tid}: missing {field} in {lang}")
    image_order = {}
    for lang in LANGS:
        blocks = t.get("body", {}).get(lang)
        if not blocks:
            err(f"{tid}: no body in {lang}")
            continue
        image_order[lang] = []
        for b in blocks:
            kind = b.get("type")
            if kind not in BLOCKS:
                err(f"{tid} ({lang}): unknown block type {kind}")
            elif kind == "image":
                src = b.get("src", "")
                if not IMAGE.match(src):
                    err(f"{tid} ({lang}): bad image path {src!r}")
                elif not (ROOT / src).is_file():
                    err(f"{tid} ({lang}): {src} is missing")
                elif (ROOT / src).stat().st_size > 3 * 1024 * 1024:
                    err(f"{tid} ({lang}): {src} is over 3 MB")
                used_images.add(src)
                image_order[lang].append(src)
            elif kind == "bullets":
                if not b.get("items"):
                    err(f"{tid} ({lang}): bullets with no items")
            elif not str(b.get("text", "")).strip():
                err(f"{tid} ({lang}): {kind} with no text")
    if len({tuple(v) for v in image_order.values()}) > 1:
        err(f"{tid}: languages use different images")

for f in sorted((ROOT / "images").iterdir()):
    if f"images/{f.name}" not in used_images:
        err(f"unused image images/{f.name}")

if errors:
    print("Racing Tips feed has problems:")
    for e in errors:
        print("  -", e)
    sys.exit(1)
print(f"Racing Tips feed OK: version {feed['version']}, {len(ids)} tips, {len(used_images)} images.")
