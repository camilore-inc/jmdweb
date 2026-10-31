# Preview videos

One folder per language (`en/`, `fr/`, `es/`), each with four clips and their
poster frames:

| Clip                  | Source in the app repository            | Used by slot          |
|-----------------------|-----------------------------------------|-----------------------|
| `live-race.mp4`       | `assets/previews/<lang>/01_live_race.mp4`     | `dashboardVideo`      |
| `pit-wall.mp4`        | `assets/previews/<lang>/02_pit_wall.mp4`      | `pitWallVideo`        |
| `after-the-race.mp4`  | `assets/previews/<lang>/03_after_the_race.mp4`| `raceReplayLandscape` |
| `vsc-delta.mp4`       | `assets/previews/<lang>/04_vsc_delta.mp4`     | `vscDelta`            |

`<name>-poster.webp` is the frame at 1.5 s, shown before the clip loads.

## Export

The sources are 1920 × 886 H.264 with a silent audio track (about 94 MB for all
twelve). For the web they are scaled to 1280 px, the audio track is dropped and
the moov atom moved to the front (about 8 MB for all twelve):

```sh
ffmpeg -i IN.mp4 -an -vf "scale=1280:-2" -c:v libx264 -profile:v high -pix_fmt yuv420p -preset slow -crf 26 -movflags +faststart OUT.mp4
ffmpeg -ss 1.5 -i IN.mp4 -frames:v 1 -vf scale=1280:-2 -c:v libwebp -quality 80 OUT-poster.webp
```

## Slots

In `assets/site.js`, `clip("live-race")` sets `video`, `poster`, `videoW` and
`videoH` for all three languages. Any slot can take a clip.

Behaviour: plays muted and looping while on screen, pauses off screen, has a
play/pause button, and never autoplays for visitors who prefer reduced motion.
