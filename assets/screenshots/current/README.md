# App screenshots: full-size originals

This folder keeps the **full-size originals** of the website captures, one
folder per language (`en/`, `fr/`, `es/`). The site never loads them directly;
it loads the web-sized copies in `assets/screenshots/web/<lang>/`. Replace an
original only with a new capture of the same screen; never edit one by hand.

**Current set: Jax Max Delta 0.32.6** (captured 2026-11-16 on the iPhone 17 Pro
Max simulator, 2868 × 1320 landscape, 1320 × 2868 for the three Settings
shots). Everything on jaxmaxdelta.com comes from 0.32.6 or from the 0.32.5 App
Store set, whose race-control screens 0.32.6 did not change.

Nothing else belongs in `assets/screenshots/` besides `current/` and `web/`:
the whole folder is publicly served, and `scripts/validate_site.py` fails on any
stray file.

## Making the web copies

```sh
python3 scripts/build_web_media.py --app-repo ../JaxMaxDelta
```

The script (Pillow, plus ffmpeg for video) writes WebP screenshots, 1600 px wide
for landscape and 800 px for portrait (each about 20–65 KB), and 1280 px H.264
previews with no audio track plus a poster frame. Its `SITE_CAPTURES`,
`SITE_PREVIEWS`, `APP_CAPTURES` and `APP_PREVIEWS` tables map each original to
its web name. Without `--app-repo` it rebuilds everything except the two
race-control screenshots and the VSC clip.

## How the captures are made

A simulator build of the app (`flutter build ios --simulator --dart-define=FORCE_PRO_FOR_BETA=true`,
so the Jax Pro views show), status bar set to 9:41 and full battery, the app
language switched in Settings → SETUP → Language for each pass. Screens come
from the built-in demos (Settings → SUPPORT → Explore JMD Demos), except Home,
Settings and the two league shots, which use a saved F1 26 session at Spa
tagged with a league. Screenshots are `xcrun simctl io booted screenshot`;
some live-demo stills are frames of the preview recordings.

## Captures in this folder

| Original                             | Web copy                      | Slot (`SHOTS` in `assets/site.js`) | Source |
|--------------------------------------|-------------------------------|------------------------------------|--------|
| `01-home.png`                        | `home.webp`                   | `home`                             | Home |
| `03a-settings-setup.png` (portrait)  | `settings-setup.webp`         | `settingsSetup`                    | Settings → SETUP |
| `03b-settings-jax.png` (portrait)    | `settings-jax.webp`           | `settingsJax`                      | Settings → JAX |
| `03c-settings-support.png` (portrait)| `settings-support.webp`       | `settingsSupport`                  | Settings → SUPPORT |
| `04-quick-jax.png`                   | `quick-jax.webp`              | `quickJax`                         | PitWall demo, Jax button |
| `04b-pit-wall-timing.png`            | `pit-wall-header.webp`        | `pitWallHeader`                    | PitWall demo, LIVE |
| `05-session-league-season.png`       | `session-league-season.webp`  | `sessionLeagueSeason`              | Saved Spa race, SESSION tab |
| `06-setup-detail-rating.png`         | `setup-rating.webp`           | `setupRating`                      | Setup Library demo |
| `07a-racing-tips-list.png`           | `racing-tips.webp`            | `racingTips`                       | Racing Tips |
| `07b-racing-tip-open.png`            | `racing-tips-detail.webp`     | `racingTipsDetail`                 | Racing Tips → Trail braking |
| `08a-history-filters.png`            | `session-history.webp`        | `sessionHistory`                   | Session History demo |
| `08b-history-league-filtered.png`    | `session-history-league.webp` | `sessionHistoryLeague`             | Session History, league filter |
| `09a-prep-track-map.png`             | `prepare-map.webp`            | `prepareMap`, poster of `prepare`  | Session Preparation demo |
| `09b-prep-corners.png`               | `prepare-corners.webp`        | `prepareCorners`                   | Session Preparation demo |
| `10-dashboard.png`                   | `dashboard.webp`              | `dashboard`                        | Racing Dashboard demo |
| `11-qualifying.png`                  | `qualifying.webp`             | `qualifying`                       | Qualifying Lap demo |
| `12-pit-wall-timing.png`             | `pit-wall-timing.webp`        | `pitWallTiming`                    | PitWall demo, CLASSIFICATION |
| `13-pit-wall-map.png`                | `pit-wall-map.webp`           | `pitWallMap`                       | PitWall demo, MAP |
| `14-pit-wall-car.png`                | `pit-wall-car.webp`           | `pitWallCar`                       | Car Health demo |
| `15-jax-audio.png`                   | `jax-audio.webp`              | `jaxAudio`                         | Jax Audio Guidance demo |
| `16-race-results.png`                | `race-results.webp`           | `raceResults`                      | Session History demo → Monaco |
| `17-lap-trace.png`                   | `lap-trace.webp`              | `lapTrace`                         | Monaco → TRACE, L32 vs L36 |
| `18-setup-library.png`               | `setup-library.webp`          | `setupLibrary`                     | Setup Library demo |

## App Store screenshots (app repository, 0.32.5)

| Original                 | Web copy               | Slot           |
|--------------------------|------------------------|----------------|
| `11_vsc_delta.png`       | `vsc-delta.webp`       | `vscDelta`     |
| `12_setting_popup.png`   | `setting-popup.webp`   | `settingPopup` |

A slot's `orientation` must match its capture so the page reserves the right
space; nothing is stretched or cropped. Preview videos are described in
`assets/video/README.md`.
