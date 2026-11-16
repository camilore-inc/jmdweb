# Preview videos

One folder per language (`en/`, `fr/`, `es/`), each with five clips and their
poster frames. **Current set: Jax Max Delta 0.32.6**, except the VSC clip,
which is the 0.32.5 App Store preview (0.32.6 changed nothing it shows).

| Clip                  | Source                                                        | Used by slot          |
|-----------------------|---------------------------------------------------------------|-----------------------|
| `live-race.mp4`       | `source/<lang>/live-race.mp4` (Racing Dashboard demo, Monaco) | `dashboardVideo`      |
| `pit-wall.mp4`        | `source/<lang>/pit-wall.mp4` (PitWall demo: TIMING → MAP → CAR) | `pitWallVideo`      |
| `after-the-race.mp4`  | `source/<lang>/after-the-race.mp4` (Session History demo: results → Race Replay → lap comparison) | `raceReplayLandscape` |
| `prepare-session.mp4` | `source/<lang>/prepare-session.mp4` (Session Preparation demo, Spa: map full screen → Corners) | `prepare` |
| `vsc-delta.mp4`       | app repository `apps/jax_max_delta/assets/previews/<lang>/04_vsc_delta.mp4` | `vscDelta` |

The four masters in `source/` are cut from `xcrun simctl io booted recordVideo`
recordings of the 0.32.6 demos (Settings → SUPPORT → Explore JMD Demos): 1920 ×
886, 30 fps, H.264, no audio, 18–30 s; still stretches are cut out, never sped
up. `<name>-poster.webp` is the frame at 1.5 s, shown before the clip loads.

## Export

`python3 scripts/build_web_media.py` scales each source to 1280 px, drops any
audio track, moves the moov atom to the front and writes the poster frame. Add
`--app-repo <path to JaxMaxDelta>` to rebuild the VSC clip too. The sources are
never modified.

## Slots

In `assets/site.js`, `clip("live-race")` sets `video`, `poster`, `videoW` and
`videoH` for all three languages. Any slot can take a clip.

Behaviour: plays muted and looping while on screen, pauses off screen, has a
play/pause button, and never autoplays for visitors who prefer reduced motion.
