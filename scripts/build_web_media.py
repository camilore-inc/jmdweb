#!/usr/bin/env python3
"""Make the web-sized copies of the app screenshots and preview videos.

The full-size originals are never modified. Web copies go to:

    assets/screenshots/web/<lang>/<name>.webp   (landscape 1600 px, portrait 800 px wide)
    assets/video/<lang>/<name>.mp4 + <name>-poster.webp   (1280 px, no audio)

Sources:
  * Website captures kept in this repository: assets/screenshots/current/<lang>/*.png
  * Website clips kept in this repository: assets/video/source/<lang>/*.mp4
  * App Store screenshots and previews in the app repository
    (camilore-inc/JaxMaxDelta), passed with --app-repo:
    apps/jax_max_delta/assets/screenshots/<lang>/*.png
    apps/jax_max_delta/assets/previews/<lang>/*.mp4

Usage:
    python3 scripts/build_web_media.py                        # website captures only
    python3 scripts/build_web_media.py --app-repo ../JaxMaxDelta   # also App Store media

Requires Pillow (pip install Pillow), and ffmpeg for the videos.
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LANGS = ("en", "fr", "es")
WEB = ROOT / "assets" / "screenshots" / "web"
VIDEO = ROOT / "assets" / "video"

# Website captures (assets/screenshots/current/<lang>/) -> web name.
SITE_CAPTURES = {
    "01-home": "home",
    "03a-settings-setup": "settings-setup",
    "03b-settings-jax": "settings-jax",
    "03c-settings-support": "settings-support",
    "04-quick-jax": "quick-jax",
    "04b-pit-wall-timing": "pit-wall-header",
    "05-session-league-season": "session-league-season",
    "06-setup-detail-rating": "setup-rating",
    "07a-racing-tips-list": "racing-tips",
    "07b-racing-tip-open": "racing-tips-detail",
    "08a-history-filters": "session-history",
    "08b-history-league-filtered": "session-history-league",
    "09a-prep-track-map": "prepare-map",
    "09b-prep-corners": "prepare-corners",
}

# Website clips kept in this repository: assets/video/source/<lang>/<name>.mp4
# (1920 px masters, cut from simulator recordings) -> same name in assets/video/<lang>/.
SITE_PREVIEWS = ("prepare-session",)

# App Store screenshots (app repo) -> web name.
APP_CAPTURES = {
    "01_dashboard": "dashboard",
    "02_pitwall_timing": "pit-wall-timing",
    "03_track_map": "pit-wall-map",
    "04_car_health": "pit-wall-car",
    "05_qualifying": "qualifying",
    "06_jax_audio": "jax-audio",
    "07_race_results": "race-results",
    "08_lap_trace": "lap-trace",
    "10_setup_library": "setup-library",
    "11_vsc_delta": "vsc-delta",
}

# App Store previews (app repo) -> web name.
APP_PREVIEWS = {
    "01_live_race": "live-race",
    "02_pit_wall": "pit-wall",
    "03_after_the_race": "after-the-race",
    "04_vsc_delta": "vsc-delta",
}


def web_image(source: Path, target: Path) -> None:
    image = Image.open(source).convert("RGB")
    width = 1600 if image.width >= image.height else 800
    image = image.resize((width, round(image.height * width / image.width)), Image.LANCZOS)
    target.parent.mkdir(parents=True, exist_ok=True)
    image.save(target, "WEBP", quality=82, method=6)


def web_video(source: Path, target: Path) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    run = lambda *args: subprocess.run(["ffmpeg", "-v", "error", "-y", *args], check=True)
    run("-i", str(source), "-an", "-vf", "scale=1280:-2", "-c:v", "libx264", "-profile:v", "high",
        "-pix_fmt", "yuv420p", "-preset", "slow", "-crf", "26", "-movflags", "+faststart", str(target))
    # The poster frame goes through Pillow: not every ffmpeg build has a WebP encoder.
    frame = target.with_name(f"{target.stem}-poster.png")
    run("-ss", "1.5", "-i", str(source), "-frames:v", "1", "-vf", "scale=1280:-2", str(frame))
    Image.open(frame).convert("RGB").save(target.with_name(f"{target.stem}-poster.webp"), "WEBP", quality=80, method=6)
    frame.unlink()


def convert(sources: Path, mapping: dict[str, str], lang: str) -> int:
    count = 0
    for stem, name in mapping.items():
        source = sources / lang / f"{stem}.png"
        if not source.is_file():
            print(f"  missing {source}")
            continue
        web_image(source, WEB / lang / f"{name}.webp")
        count += 1
    return count


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--app-repo", type=Path, help="path to a checkout of the JaxMaxDelta app repository")
    args = parser.parse_args()

    total = 0
    for lang in LANGS:
        total += convert(ROOT / "assets" / "screenshots" / "current", SITE_CAPTURES, lang)
    if shutil.which("ffmpeg") is None:
        raise SystemExit("ffmpeg is required for the preview videos")
    for lang in LANGS:
        for name in SITE_PREVIEWS:
            source = VIDEO / "source" / lang / f"{name}.mp4"
            if source.is_file():
                web_video(source, VIDEO / lang / f"{name}.mp4")
                total += 1
            else:
                print(f"  missing {source}")
    if args.app_repo:
        assets = args.app_repo / "apps" / "jax_max_delta" / "assets"
        for lang in LANGS:
            total += convert(assets / "screenshots", APP_CAPTURES, lang)
        for lang in LANGS:
            for stem, name in APP_PREVIEWS.items():
                source = assets / "previews" / lang / f"{stem}.mp4"
                if source.is_file():
                    web_video(source, VIDEO / lang / f"{name}.mp4")
                    total += 1
                else:
                    print(f"  missing {source}")
    print(f"Wrote {total} web copies.")


if __name__ == "__main__":
    main()
