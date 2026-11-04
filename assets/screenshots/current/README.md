# App screenshots: full-size originals

This folder keeps the **full-size originals** of the website captures, one
folder per language (`en/`, `fr/`, `es/`). Never edit or delete them. The site
never loads them directly; it loads the web-sized copies in
`assets/screenshots/web/<lang>/`.

The App Store screenshots and previews are not copied here; their originals live
in the app repository, `camilore-inc/JaxMaxDelta`, under
`apps/jax_max_delta/assets/screenshots/` and `apps/jax_max_delta/assets/previews/`.

## Making the web copies

```sh
python3 scripts/build_web_media.py                              # captures in this folder
python3 scripts/build_web_media.py --app-repo ../JaxMaxDelta    # also App Store screenshots and previews
```

The script (Pillow, plus ffmpeg for video) writes WebP screenshots, 1600 px wide
for landscape and 800 px for portrait (each about 20–60 KB), and 1280 px H.264
previews with no audio track plus a poster frame. Its `SITE_CAPTURES`,
`APP_CAPTURES` and `APP_PREVIEWS` tables map each original to its web name.

## Captures in this folder

| Original                           | Web copy                        | Slot (`SHOTS` in `assets/site.js`) |
|------------------------------------|---------------------------------|------------------------------------|
| `01-home.png`                      | `home.webp`                     | `home`                             |
| `03a-settings-setup.png` (portrait)| `settings-setup.webp`           | `settingsSetup`                    |
| `03b-settings-jax.png` (portrait)  | `settings-jax.webp`             | `settingsJax`                      |
| `03c-settings-support.png` (portrait)| `settings-support.webp`       | `settingsSupport`                  |
| `04-quick-jax.png`                 | `quick-jax.webp`                | `quickJax`                         |
| `04b-pit-wall-timing.png`          | `pit-wall-header.webp`          | `pitWallHeader`                    |
| `05-session-league-season.png`     | `session-league-season.webp`    | `sessionLeagueSeason`              |
| `06-setup-detail-rating.png`       | `setup-rating.webp`             | `setupRating`                      |
| `07a-racing-tips-list.png`         | `racing-tips.webp`              | `racingTips`                       |
| `07b-racing-tip-open.png`          | `racing-tips-detail.webp`       | `racingTipsDetail`                 |
| `08a-history-filters.png`          | `session-history.webp`          | `sessionHistory`                   |
| `08b-history-league-filtered.png`  | `session-history-league.webp`   | `sessionHistoryLeague`             |
| `09a-prep-track-map.png`           | `prepare-map.webp`              | `prepareMap`, poster of `prepare`  |
| `09b-prep-corners.png`             | `prepare-corners.webp`          | `prepareCorners`                   |

`09a`/`09b` come from the Session Preparation demo (Settings → SUPPORT →
Explore JMD Demos), which shows Spa · F1 26 · Race 50% with the Jax Pro views.

## App Store screenshots (app repository)

| Original                 | Web copy                | Slot              |
|--------------------------|-------------------------|-------------------|
| `01_dashboard.png`       | `dashboard.webp`        | `dashboard`       |
| `02_pitwall_timing.png`  | `pit-wall-timing.webp`  | `pitWallTiming`   |
| `03_track_map.png`       | `pit-wall-map.webp`     | `pitWallMap`      |
| `04_car_health.png`      | `pit-wall-car.webp`     | `pitWallCar`      |
| `05_qualifying.png`      | `qualifying.webp`       | `qualifying`      |
| `06_jax_audio.png`       | `jax-audio.webp`        | `jaxAudio`        |
| `07_race_results.png`    | `race-results.webp`     | `raceResults`     |
| `08_lap_trace.png`       | `lap-trace.webp`        | `lapTrace`        |
| `10_setup_library.png`   | `setup-library.webp`    | `setupLibrary`    |
| `11_vsc_delta.png`       | `vsc-delta.webp`        | `vscDelta`        |

Every capture is landscape (2868 × 1320) except the three Settings shots, which
are portrait (1320 × 2868). A slot's `orientation` must match its capture so the
page reserves the right space; nothing is stretched or cropped. Preview videos
are described in `assets/video/README.md`.
