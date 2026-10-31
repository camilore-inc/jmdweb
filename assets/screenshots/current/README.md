# Current app screenshots

Screenshots live in one folder per language: `en/`, `fr/`, `es/`. The `SHOTS`
table at the top of `assets/site.js` maps each slot to its file. A slot written
with `perLang("name.webp")` loads `<lang>/name.webp`; a slot written as a plain
string (for example `"en/racing-tips.webp"`) uses that one file in every
language.

## Source and export

Captures come from the app repository, `apps/jax_max_delta/assets/screenshots/`
(`<lang>/01_dashboard.png` … `11_vsc_delta.png`). They are exported for the web
as WebP, 1600 px wide for landscape (900 px for portrait), quality 82:

```sh
python3 -c "from PIL import Image; im=Image.open('IN.png').convert('RGB'); im.resize((1600, round(im.height*1600/im.width)), Image.LANCZOS).save('OUT.webp', 'WEBP', quality=82, method=6)"
```

| Web file              | App capture             |
|-----------------------|-------------------------|
| `dashboard.webp`      | `01_dashboard.png`      |
| `pit-wall-timing.webp`| `02_pitwall_timing.png` |
| `pit-wall-map.webp`   | `03_track_map.png`      |
| `pit-wall-car.webp`   | `04_car_health.png`     |
| `qualifying.webp`     | `05_qualifying.png`     |
| `jax-audio.webp`      | `06_jax_audio.png`      |
| `race-results.webp`   | `07_race_results.png`   |
| `lap-trace.webp`      | `08_lap_trace.png`      |
| `prepare-session.webp`| `09_session_prep.png`   |
| `setup-library.webp`  | `10_setup_library.png`  |
| `vsc-delta.webp`      | `11_vsc_delta.png`      |

## English-only for now

These exist in English only; French and Spanish pages show the English image
until localized captures are added. To localize one, add `fr/<name>.webp` and
`es/<name>.webp`, then change the slot to `perLang("<name>.webp")`.

| Web file                        | Shows                                                    |
|---------------------------------|----------------------------------------------------------|
| `racing-tips.webp`              | Racing Tips list, one tip read                           |
| `racing-tips-detail.webp`       | A Racing Tip (Trail Braking), unread, with PRACTICE THIS |
| `session-history-filters.webp`  | Session History with the league and season filter chips  |

Still wanted in all three languages (no current capture yet): the Home screen,
the Settings tabs (SETUP, JAX, SUPPORT, LEGAL), the Jax Pro subscription
screen, Quick Jax on the Pit Wall, a session's SESSION tab showing LEAGUE &
SEASON, and a setup's detail screen with its star rating. The captures named
`HomeScreen.png`, `Portrait-Settings-*.png` and `Subscription.png` in the app
repository show older builds (v0.8.3, the old paywall list and prices) and are
deliberately not used.

To swap a slot for a looping preview video, see `assets/video/README.md`.
