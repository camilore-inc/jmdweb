/*
 * Jax Max Delta website.
 *
 * Each HTML page is a small shell (static <head> metadata + <div id="app">).
 * This file renders the page content in English, French or Spanish.
 *
 * Edit here:
 *   SITE.store  - App Store / TestFlight links. Leave empty until the real URL
 *                 exists; the site then shows a "Coming soon" state instead.
 *   SHOTS       - Current app screenshots and preview videos (web copies in
 *                 assets/screenshots/web/ and assets/video/). Slots without
 *                 a file render a styled placeholder.
 *   copy        - All page text. English is the source; keep fr/es in step.
 */

const SITE = {
  contact: "support@jaxmaxdelta.com",
  baseUrl: "https://jaxmaxdelta.com",
  corporateUrl: "https://camilore.com",
  langs: ["en", "fr", "es"],
  store: {
    // Real, public URLs only - never a placeholder. Empty = "Coming soon".
    appStoreUrl: "",
    testFlightUrl: ""
  },
  posts: [
    "second-screen-dashboard",
    "different-from-telemetry-app",
    "league-race-weekend",
    "fanatec-wheel-tips"
  ]
};

// Screenshot slots. `file` is relative to assets/screenshots/web/ (the
// web-sized copies; full-size originals stay in assets/screenshots/current/)
// and may be an object per language, e.g. { en: "en/home.webp", fr: "fr/home.webp" }.
// A language without its own file falls back to the English one.
// w/h default to the web export size: 1600 x 736 landscape, 800 x 1738 portrait.
// Regenerate the web copies with scripts/build_web_media.py.
//
// Optional video: set `video` to an MP4 (H.264) in assets/video/ and `poster`
// to its first-frame image in the same folder. `videoW`/`videoH` give the
// clip's size. All three may be per-language objects, like `file`. The clip
// plays muted and looping while on screen, has a play/pause button, and never
// autoplays for visitors who prefer reduced motion.
const perLang = (name) => ({ en: `en/${name}`, fr: `fr/${name}`, es: `es/${name}` });
const clip = (name) => ({ video: perLang(`${name}.mp4`), poster: perLang(`${name}-poster.webp`), videoW: 1280, videoH: 590 });

const SHOTS = {
  home:                  { file: perLang("home.webp"), orientation: "landscape" },
  prepare:               { file: perLang("prepare-session.webp"), orientation: "landscape" },
  dashboard:             { file: perLang("dashboard.webp"), orientation: "landscape" },
  dashboardVideo:        { file: perLang("dashboard.webp"), orientation: "landscape", ...clip("live-race") },
  qualifying:            { file: perLang("qualifying.webp"), orientation: "landscape" },
  vscDelta:              { file: perLang("vsc-delta.webp"), orientation: "landscape", ...clip("vsc-delta") },
  pitWallTiming:         { file: perLang("pit-wall-timing.webp"), orientation: "landscape" },
  pitWallHeader:         { file: perLang("pit-wall-header.webp"), orientation: "landscape" },
  pitWallVideo:          { file: perLang("pit-wall-timing.webp"), orientation: "landscape", ...clip("pit-wall") },
  pitWallMap:            { file: perLang("pit-wall-map.webp"), orientation: "landscape" },
  pitWallCar:            { file: perLang("pit-wall-car.webp"), orientation: "landscape" },
  quickJax:              { file: perLang("quick-jax.webp"), orientation: "landscape" },
  jaxAudio:              { file: perLang("jax-audio.webp"), orientation: "landscape" },
  sessionHistory:        { file: perLang("session-history.webp"), orientation: "landscape" },
  sessionHistoryLeague:  { file: perLang("session-history-league.webp"), orientation: "landscape" },
  sessionLeagueSeason:   { file: perLang("session-league-season.webp"), orientation: "landscape" },
  raceResults:           { file: perLang("race-results.webp"), orientation: "landscape" },
  lapTrace:              { file: perLang("lap-trace.webp"), orientation: "landscape" },
  raceReplayLandscape:   { file: perLang("race-results.webp"), orientation: "landscape", ...clip("after-the-race") },
  setupLibrary:          { file: perLang("setup-library.webp"), orientation: "landscape" },
  setupRating:           { file: perLang("setup-rating.webp"), orientation: "landscape" },
  racingTips:            { file: perLang("racing-tips.webp"), orientation: "landscape" },
  racingTipsDetail:      { file: perLang("racing-tips-detail.webp"), orientation: "landscape" },
  settingsSetup:         { file: perLang("settings-setup.webp"), orientation: "portrait" },
  settingsJax:           { file: perLang("settings-jax.webp"), orientation: "portrait" },
  settingsSupport:       { file: perLang("settings-support.webp"), orientation: "portrait" }
};

const copy = {
  en: {
    nav: {
      home: "Home screen",
      features: "Features",
      how: "How It Works",
      support: "Support",
      blog: "Blog",
      roadmap: "Roadmap",
      privacy: "Privacy",
      terms: "Terms"
    },
    common: {
      parent: "Jax Max Delta is a product of Camilore Inc.",
      copyright: "© 2026 Camilore Inc. All rights reserved.",
      app: "Jax Max Delta",
      eyebrow: "Sim racing companion for iPhone",
      skip: "Skip to content",
      menu: "Menu",
      language: "Language",
      storeSoon: "Coming soon on the App Store",
      storeCta: "Download on the App Store",
      testflightCta: "Join the TestFlight beta",
      ctaFeatures: "Explore features",
      ctaHow: "See how it works",
      ctaSupport: "Contact support",
      ctaPrivacy: "Read the privacy policy",
      ctaReplay: "More about Race Replay",
      shotSoon: "Current screenshot coming soon",
      videoPlay: "Play video",
      videoPause: "Pause video",
      available: "Available now",
      disclaimer: "Jax Max Delta is an independent sim racing companion app and is not affiliated with or endorsed by EA, Codemasters, Formula 1, FIA, Microsoft, Sony, Fanatec, or any other referenced brand.",
      footerLead: "Your race engineer, your pit wall and your race memory — for F1 sim racers on iPhone.",
      footerProduct: "Product",
      footerHelp: "Help & legal",
      readPost: "Read post"
    },
    shots: {
      home: "Home screen",
      prepare: "Prepare for Session — your session plan",
      dashboard: "Live Dashboard",
      dashboardVideo: "Live Dashboard during a race",
      qualifying: "Dashboard in qualifying",
      vscDelta: "VSC delta overlay",
      pitWallTiming: "Pit Wall — Timing",
      pitWallVideo: "Pit Wall — Timing, Map and Car",
      pitWallMap: "Pit Wall — Map",
      pitWallCar: "Pit Wall — Car",
      jaxAudio: "Jax audio guidance demo",
      sessionHistory: "Session History",
      sessionHistoryLeague: "Session History filtered to one league",
      sessionLeagueSeason: "A session’s LEAGUE & SEASON tags",
      raceResults: "Race results",
      pitWallHeader: "Pit Wall — Classification, Jax and Past",
      quickJax: "Quick Jax on the Pit Wall",
      setupRating: "A setup with its star rating",
      settingsSetup: "Settings — SETUP",
      settingsJax: "Settings — JAX",
      settingsSupport: "Settings — SUPPORT",
      lapTrace: "Session History — comparing two laps",
      raceReplayLandscape: "After the race: results, Race Replay and lap traces",
      setupLibrary: "Setup library with ratings",
      racingTips: "Racing Tips",
      racingTipsDetail: "A Racing Tip, with an exercise to practise"
    },
    home: {
      titleLines: ["Your race engineer.", "Your pit wall.", "Your race memory."],
      lead: "Jax Max Delta turns live F1 telemetry into the information, coaching, race context and history you need — before, during and after every session.",
      reelLabel: "Jax Max Delta in action",
      reelPause: "Pause the previews",
      reelPlay: "Play the previews",
      proof: ["iPhone", "EA SPORTS F1 24 · F1 25 · F1 26", "Local UDP telemetry", "PlayStation · Xbox · PC", "No account required", "English · Français · Español"],
      phasesKicker: "Before · During · After",
      phasesTitle: "One companion for the whole session.",
      phasesIntro: "Jax Max Delta follows the full arc of a session: what to know before you leave the garage, what matters while you drive, and what actually happened once it's over.",
      phases: [
        ["Before", "Prepare", "Choose the circuit and car, then study the layout, corners, tyres, setup notes and your own history there.", "#prepare"],
        ["During", "Race", "A live dashboard, Jax on the radio and a full pit wall — readable at a glance on your phone.", "#race"],
        ["After", "Review", "Every session saved on your device: results, setups, conditions, lap traces — and a replay of how the race unfolded.", "#review"]
      ],
      prepare: {
        kicker: "Before · Prepare for Session",
        title: "Know the circuit before you turn a wheel.",
        body: "Prepare for Session brings circuit knowledge and your own history together. Choose the track and the car, then review what matters for the session ahead — practice, qualifying, sprint or race.",
        items: [
          "Interactive circuit map with numbered corners",
          "Corner notes — gear, speed, braking and apex context where data exists",
          "Pit lane, speed trap, DRS and energy-management context",
          "Tyre and setup considerations for the chosen car",
          "Race length, weather and Safety Car context",
          "Your previous sessions and setups at that circuit"
        ],
        note: "Preparation data varies by circuit and car. JMD shows what it holds for the combination you choose, and tells you when something isn't available."
      },
      race: {
        kicker: "During · Live Dashboard",
        title: "Everything the cockpit hides, at a glance.",
        body: "Set your iPhone beside the wheel and keep the numbers that matter in view — without changing camera or cluttering the game HUD.",
        items: [
          "Position, lap, speed, gear, throttle and brake",
          "Lap, sector and delta timing",
          "Tyre compound, wear and temperatures",
          "Brake and engine temperatures",
          "Fuel, ERS — including F1 26 energy management — and DRS",
          "Flags, Safety Car, VSC, pit and penalty information",
          "Wing damage, weather and session context"
        ],
        jaxKicker: "Jax · Voice",
        jaxTitle: "Jax, on the radio.",
        jaxBody: "Jax is your race engineer's voice: short, timely calls about what just changed, so your eyes stay on the track. Choose which categories you hear — and adjust them mid-session with Quick Jax from the Pit Wall.",
        jaxItems: ["Tyres and fuel", "Lap times, delta and gaps", "Flags, Safety Car and VSC", "Penalties and race control", "Contextual reminders and coaching"],
        jaxNote: "Jax informs and reminds. The driving — and the strategy calls — stay yours."
      },
      pitWall: {
        kicker: "During · Pit Wall",
        title: "The view from the pit wall.",
        body: "When you need more than the dashboard, open the Pit Wall — one tap from the dashboard, or straight from the Home screen. The whole field, the whole circuit and your own car in one landscape view.",
        items: [
          "Live timing tower: positions, gaps, sectors and tyres",
          "Live circuit map with every car",
          "Your lap-by-lap table and car health",
          "Lap traces with inputs, ERS and DRS, and lap comparison",
          "Session setups and game/session configuration"
        ]
      },
      replay: {
        kicker: "After · Race Replay",
        title: "Watch your race unfold again.",
        body: "Race Replay rebuilds a race from the telemetry JMD captured and plays it back lap by lap: the timing tower reshuffling, gaps opening and closing, tyres changing, and the moments that decided it.",
        items: [
          "Timing tower with driver abbreviations, positions and gaps",
          "Lap-by-lap progression with a race clock and replay controls",
          "Tyre stints and pit stops across the field",
          "Safety Car, VSC and red-flag periods",
          "Retirements and a running race-event ticker",
          "A reconstructed classification when the game sent no final results"
        ],
        note: "Race Replay works from the data your device received during the race. When the game sends no final classification, JMD rebuilds the result from captured timing if there is enough of it — it never invents what was never received.",
        badge: "Races & sprint races"
      },
      history: {
        kicker: "After · Session History",
        title: "A racing journal that writes itself.",
        body: "Completed sessions are saved on your device and reviewed according to what they were: practice and qualifying lead with pace, races tell the whole story.",
        items: [
          "Results and outcome — yours and the field's",
          "Lap and sector times, tyres and stints",
          "Setups used, with a setup library by circuit",
          "Weather and session conditions",
          "Penalties, highlights and race events",
          "Saved lap traces to revisit your driving"
        ],
        note: "What a session contains depends on what the game sent. JMD fills gaps from captured data where it can, and shows missing data as missing."
      },
      privacy: {
        kicker: "Your data",
        title: "Private by design.",
        body: "Jax Max Delta has no user accounts. An optional name for Jax to use, your telemetry and your history stay on your device.",
        points: [
          ["No account", "Nothing to sign up for, and no automatic email collection."],
          ["On your device", "Sessions, lap traces and setups live in the app's private storage."],
          ["Your own iCloud", "If iCloud is available, session history can be backed up to your private iCloud container — which we cannot read."],
          ["No ads, no tracking", "No advertising, no ad identifiers, no cross-app tracking."]
        ]
      },
      platforms: {
        kicker: "Compatibility",
        title: "Built for console and PC F1 racers.",
        body: "Jax Max Delta listens for the UDP telemetry your EA SPORTS F1 game sends over your local network. Your iPhone simply needs to be on the same network as your console or PC.",
        groups: [
          ["Games", ["EA SPORTS F1 24", "EA SPORTS F1 25", "EA SPORTS F1 26"]],
          ["Race on", ["PlayStation", "Xbox", "PC"]],
          ["Run JMD on", ["iPhone"]]
        ],
        note: "Android is not available yet."
      },
      availability: {
        kicker: "Availability",
        soonTitle: "Coming soon to the App Store.",
        liveTitle: "Available on the App Store.",
        body: "Jax Max Delta is getting ready for its public release on iPhone. Questions or feedback in the meantime? We'd love to hear from you."
      }
    },
    features: {
      title: "Everything Jax Max Delta does today.",
      intro: "A complete companion for F1 sim racers, organized around what you need before, during and after every session. Everything on this page is in the current release; future work is listed separately at the end.",
      groups: [
        {
          id: "prepare",
          phase: "Before",
          title: "Prepare for Session",
          body: "Choose a circuit and a car, then review the circuit and plan the session ahead. Circuit knowledge and your own history, side by side.",
          items: [
            "Circuit overview with an interactive, numbered circuit map",
            "Corner-by-corner notes: gear, speed, braking and apex context where data exists",
            "Pit lane, speed trap, DRS zones and energy-management context",
            "Tyre and setup considerations for the selected car",
            "Race length, weather and Safety Car / VSC context",
            "Practice, qualifying and race guidance for the session you're planning",
            "Your previous sessions and setups at that circuit"
          ],
          note: "Coverage varies by circuit and car; missing information is labelled rather than guessed.",
          shots: ["prepare"]
        },
        {
          id: "dashboard",
          phase: "During",
          title: "Live Dashboard",
          body: "A landscape race display for your iPhone. Keep critical information visible without changing camera view or cluttering the in-game HUD.",
          items: [
            "Position, lap, speed, gear, throttle and brake",
            "Current, last and best laps, sector splits and delta",
            "Tyre compound, wear and temperatures for all four corners",
            "Brake and engine temperatures in your chosen unit",
            "Fuel, ERS and F1 26 energy management, DRS",
            "Flags, Safety Car, VSC, pit and penalty information",
            "Wing damage, weather and session context"
          ],
          shots: ["dashboardVideo"]
        },
        {
          id: "jax",
          phase: "During",
          title: "Jax — your race engineer's voice",
          body: "Jax calls out what changed, when it matters, so you can keep your eyes on the track. Its calls are built from the telemetry itself — consistent and predictable, not improvised.",
          items: [
            "Tyre state and fuel",
            "Lap times, delta and gaps to the cars around you",
            "Flags, Safety Car and VSC periods",
            "Penalties and race-control events",
            "Weather, energy management and strategy reminders",
            "Choose categories and voice in Settings, or use Quick Jax from the Pit Wall mid-session"
          ],
          note: "Jax provides information and reminders. Driving decisions and strategy calls remain yours."
        },
        {
          id: "pit-wall",
          phase: "During",
          title: "Virtual Pit Wall",
          body: "A deeper live view of the race and the session. Open it over the dashboard with one tap, or directly from the Home screen.",
          items: [
            "Timing tower: positions, gaps, lap and sector times, tyres and stints",
            "Live circuit map with every car on track",
            "Your own lap-by-lap table and live car health",
            "Lap traces of your driving inputs, with lap comparison",
            "Setups used this session, linked to your setup library",
            "Game and session configuration, with compact, readable labels"
          ],
          shots: ["pitWallTiming", "pitWallMap", "pitWallCar"]
        },
        {
          id: "race-replay",
          phase: "After",
          title: "Race Replay",
          body: "Relive a race lap by lap. JMD reconstructs the race from the telemetry it captured and plays back how the field moved, where the gaps changed and what happened along the way.",
          items: [
            "Race timing tower with driver abbreviations, positions and gaps",
            "Lap-by-lap progression with race clock and replay controls",
            "Tyre and stint progression for every driver",
            "Safety Car, VSC and red-flag periods",
            "Retirements and DNFs where the game reported them",
            "Race-event ticker: pit stops, penalties, fastest laps and flags",
            "Reconstructed results when final classification is missing and enough timing was captured"
          ],
          note: "Available for races and sprint races. Replay uses only the data your device received — it cannot rebuild information the game never sent.",
          shots: ["raceReplayLandscape"]
        },
        {
          id: "session-history",
          phase: "After",
          title: "Session History",
          body: "Every completed session is saved on your device. Each review is shaped by the session type, so practice, qualifying, Time Trial and races each show what matters for them.",
          items: [
            "Outcome, race results and full-field classification",
            "Lap and sector times with tyres and stints",
            "Setups used during the session",
            "Weather and session conditions",
            "Highlights, penalties and race events",
            "Career statistics across your saved sessions"
          ],
          note: "Not every session contains every field. JMD reconstructs what it reliably can and shows missing data as missing.",
          shots: ["sessionHistory", "raceResults"]
        },
        {
          id: "lap-trace",
          phase: "During & after",
          title: "Lap Trace & Analysis",
          body: "See how you drove, not just how fast. Traces are recorded as you drive and saved with the session.",
          items: [
            "Throttle, brake and steering inputs",
            "Speed, ERS and DRS channels",
            "Compare a reference lap against another lap",
            "Zoom and pan to any part of the lap",
            "Revisit saved laps from Session History"
          ]
        },
        {
          id: "setups",
          phase: "Before & after",
          title: "Setup & Tyre Memory",
          body: "Remember what you ran and what worked. Setups are captured from your sessions and collected in a library you can filter by circuit.",
          items: [
            "Car setups captured per session",
            "View Setups library, filterable by circuit, game and car",
            "Setup references alongside your lap times",
            "Tyre compounds, stints and wear — including the F1 26 compound range",
            "Fuel and race context kept with each session"
          ]
        },
        {
          id: "data",
          phase: "Always",
          title: "Private Backup & Data Control",
          body: "No account, no sign-up. Your data lives on your device, under your control.",
          items: [
            "Session history, traces and setups stored on your device",
            "Optional iCloud Backup of session history to your own private iCloud container",
            "Export your session history through the iOS share sheet",
            "Choose how long heavier trace data is kept",
            "Delete individual sessions or all of them at any time"
          ],
          link: ["privacy.html", "Read the privacy policy"]
        }
      ],
      alsoTitle: "Also included",
      also: [
        ["Racing Tips", "Driving technique, racecraft and rules — short, practical reading."],
        ["Demos", "Explore Jax Max Delta with built-in demos, no game running required."],
        ["Your units", "km/h or mph, °C or °F."],
        ["Three languages", "English, French and Spanish throughout the app."]
      ],
      futureKicker: "Roadmap",
      futureTitle: "What we're exploring next",
      futureIntro: "Directions, not promises. Nothing here has a date, and items move to the list above only once they ship.",
      future: [
        ["Race-weekend view", "Practice, qualifying and race connected as one story."],
        ["Progress over time", "Trends across many sessions: pace, consistency, tyre management."],
        ["Richer tyre guidance", "Compound-aware tyre strategy context."],
        ["Android", "Being explored; not available today."]
      ]
    },
    how: {
      title: "How Jax Max Delta works",
      intro: "Set up telemetry once. Then prepare, race and review — with your iPhone on the same network as your console or PC.",
      phaseLabels: { before: "Before", during: "During", after: "After", setup: "Set up" },
      steps: [
        {
          phase: "setup",
          title: "Install and open Jax Max Delta",
          body: "Install JMD on your iPhone. A short first-run tour covers the essentials — you can replay it later from Settings. No account is needed."
        },
        {
          phase: "setup",
          title: "Configure UDP telemetry",
          body: "JMD receives your game's telemetry over your local network. It's a one-time setup in the game.",
          list: [
            "Connect your console or PC and your iPhone to the same local network.",
            "In JMD, open Settings → SETUP to see this device's IP address and the UDP port JMD listens on (20777 by default).",
            "In your EA SPORTS F1 game, open the telemetry settings, turn UDP telemetry on, and enter that IP address and port.",
            "JMD detects the game's telemetry format automatically once packets arrive."
          ]
        },
        {
          phase: "before",
          title: "Prepare for the session",
          body: "Optional, but worth it. Open Prepare for Session from the Home screen, choose the circuit and car, and review the track — or switch to the session view to plan practice, qualifying or the race.",
          shot: "prepare"
        },
        {
          phase: "during",
          title: "Start your session and connect",
          body: "Open the Dashboard, then head out on track. JMD waits for telemetry and connects as soon as your game starts sending it."
        },
        {
          phase: "during",
          title: "Drive with the Dashboard",
          body: "Keep your device where you can read it at a glance. The in-app legend explains every abbreviation on the dashboard.",
          shot: "dashboard"
        },
        {
          phase: "during",
          title: "Let Jax call it",
          body: "Choose Jax's voice and the categories you want to hear in Settings → JAX. During a session, Quick Jax on the Pit Wall lets you adjust them without leaving the car."
        },
        {
          phase: "during",
          title: "Open the Pit Wall when you need more",
          body: "Tap the Pit Wall handle on the dashboard for timing, the live map, your car, traces, setups and session details. Tap back to return to the dashboard.",
          shot: "pitWallTiming"
        },
        {
          phase: "after",
          title: "End the session",
          body: "When a session ends, JMD recognizes it and saves it to Session History. After a race it tells you where you finished, and lets you correct how the race ended if needed. If telemetry stops before the session clearly ended, JMD asks you."
        },
        {
          phase: "after",
          title: "Review in Session History",
          body: "Open Session History from Home to find any saved session. Each review is shaped by the session type: pace for practice and qualifying, the full story for races.",
          shot: "sessionHistory"
        },
        {
          phase: "after",
          title: "Replay your race",
          body: "For races and sprint races, open the RACE tab to watch Race Replay: the timing tower, gaps, tyres and race events, lap by lap.",
          shot: "raceReplayLandscape"
        },
        {
          phase: "setup",
          title: "Manage settings, data and backup",
          body: "Settings → SETUP holds your Jax Pro status, language and units, the UDP connection, Session Tracking, iCloud Backup (back up now, restore) and how long race data is kept. Settings → SUPPORT has the built-in demos, the first-run tour, your device's IP address, bug reports and the dashboard guide. Settings → LEGAL links to the terms and privacy policy."
        }
      ],
      troubleTitle: "Troubleshooting",
      trouble: [
        ["No telemetry received", "Check that UDP telemetry is on in your game, the IP address matches the one in JMD Settings → SETUP, the port matches, and both devices are on the same network."],
        ["Data stops mid-session", "Make sure your device stayed on Wi-Fi, that Low Power Mode didn't interrupt the app, and that the console didn't switch networks."],
        ["The device IP changed", "Local IP addresses can change between sessions. Recheck Settings → SETUP in JMD and update the game's telemetry settings if needed."],
        ["Jax is silent", "Check device volume and silent mode, then make sure Jax's voice and the relevant categories are enabled in Settings → JAX or Quick Jax."],
        ["No Race Replay for a session", "Race Replay is available for races and sprint races that were captured in enough detail. Practice, qualifying and Time Trial have their own pace-focused review."],
        ["Some values are missing", "Not every game session sends every field. JMD shows missing data as missing rather than guessing."]
      ]
    },
    support: {
      title: "Support for Jax Max Delta",
      intro: "Setup help, answers to common questions, and a direct way to reach us.",
      faqTitle: "FAQ",
      faq: [
        ["Does Jax Max Delta work on console?", "Yes. JMD is designed with console racers in mind. Your game needs to send UDP telemetry, and your iPhone needs to be on the same local network as your PlayStation, Xbox or PC."],
        ["Which games are supported?", "EA SPORTS F1 24, F1 25 and F1 26, using the game's UDP telemetry output."],
        ["Is it available on Android?", "Not yet. Jax Max Delta currently runs on iPhone."],
        ["Is Jax officially affiliated with EA, F1, Codemasters, Fanatec, PlayStation, or Xbox?", "No. Jax Max Delta is independent and uses telemetry data from supported games where available."],
        ["Is this only a telemetry dashboard?", "No. The live dashboard is one part. JMD also helps you prepare for a session, gives you Jax's voice calls and a full pit wall while you drive, and keeps your session history, setups, lap traces and Race Replay afterwards."],
        ["Why is there no Race Replay for some sessions?", "Race Replay is for races and sprint races that were captured in enough detail. Practice, qualifying and Time Trial sessions have their own review, focused on pace."],
        ["Where is my data stored?", "On your device. Session history, lap traces and setups live in the app's private storage. If iCloud is available, the app can also back up your session history and leagues into your own private iCloud container, which we cannot read. See the privacy policy for details."],
        ["What is included with Free and Jax Pro?", "Free includes the full Dashboard, the full timing classification, Pit Wall GAME, ME and SETUP, the track overview in Prepare for Session, every session saved and listed with your statistics, your most recent session in full, every setup listed, Jax's urgent safety calls and lap-line callouts, Racing Tips and iCloud Backup. Jax Pro adds the complete Jax race engineer, LIVE timing, Pit Wall CAR, MAP and TRACE, every earlier session in full, your setups' values and management, and personalised preparation: circuit analysis, My Data and the Session plan."],
        ["How do the trial and subscriptions work?", "The app describes a 14-day introductory trial on its monthly and annual Jax Pro plans. Eligibility, localized prices and the exact offer shown by Apple can vary; review the Apple purchase sheet before confirming. Apple bills and renews the subscription unless it is cancelled in your Apple Account subscription settings. Purchases can be restored in JMD."],
        ["How do I cancel or request a refund?", "Manage or cancel Jax Pro in your Apple Account subscription settings. Cancellation stops future renewal but does not normally reverse an existing charge. Apple controls App Store billing and refund decisions; use Apple's purchase support for refund requests, or contact support@jaxmaxdelta.com for JMD help."],
        ["Where can I download it?", "Jax Max Delta is preparing for its App Store release. The download link will appear on this site as soon as it is available."],
        ["How do I report feedback as a tester?", "Send the device model, game title, console or PC, session type, and what happened to support@jaxmaxdelta.com."]
      ],
      knownTitle: "Common issues",
      known: [
        "No UDP data received because telemetry output is disabled in the game.",
        "Your phone is not on the same network as the console or PC.",
        "Wrong game UDP destination IP, port, or telemetry format.",
        "Voice alerts not playing because device volume, silent mode, or alert categories need adjustment."
      ],
      feedbackTitle: "Contact & feedback",
      feedbackBody: "Useful reports include your game, platform, device, app version, telemetry settings, and a short description of what you expected versus what happened."
    },
    roadmap: {
      title: "Roadmap",
      intro: "What's in Jax Max Delta today, and the directions we're exploring next. Future items carry no dates and may change.",
      groups: [
        ["Available now · R1", [
          "Prepare for Session: circuit map, corners, tyres, setup and session context",
          "Live Dashboard",
          "Jax voice calls and contextual coaching, with Quick Jax",
          "Pit Wall: timing, live map, car health, lap traces, setups and game/session details",
          "Session History, shaped by session type",
          "Race Replay for races and sprint races",
          "Lap traces and lap comparison",
          "Setup tracking and a setup library by circuit",
          "Tyre, fuel and race context",
          "F1 26 energy management",
          "DRS, Safety Car, VSC and red-flag handling",
          "Private iCloud Backup of session history",
          "Racing Tips and built-in demos",
          "English, French and Spanish"
        ]],
        ["Next · Refinement", [
          "Polish driven by early-release feedback",
          "Broader preparation coverage for more circuit and car combinations",
          "More ways to compare sessions across circuits, setups and conditions"
        ]],
        ["Exploring · Future", [
          "A connected race-weekend view: practice, qualifying and race as one story",
          "Replay-style review for practice and qualifying sessions",
          "Long-term progress trends across many sessions",
          "Richer, compound-aware tyre strategy guidance",
          "Android",
          "Additional racing games where telemetry support is reliable"
        ]]
      ]
    },
    // Legal copy is a review draft; the visible notice prevents it from being
    // mistaken for approved legal advice before Camilore's counsel signs off.
    privacy: {
      title: "Privacy Policy",
      intro: "This policy explains how Camilore Inc. handles information for Jax Max Delta, including local telemetry, diagnostics, purchases, support and private iCloud Backup.",
      updated: "Original effective date: August 17, 2026 · Last updated: October 24, 2026",
      reviewNotice: "Legal review status: substantive revisions require approval before production publication.",
      sections: [
        ["Who is responsible", "Jax Max Delta is a product owned and operated by <strong>Camilore Inc.</strong> Subject to completion of the applicable transfer documentation, Camilore Inc. assumed ownership and operation on October 1, 2026. In this policy, “Camilore,” “we” and “us” mean Camilore Inc."],
        ["The short version", "Jax Max Delta has <strong>no user accounts</strong>. The app optionally lets you enter a name for Jax to call you; that name, your telemetry, lap data, session history, car setups and preferences are stored <strong>on your device</strong>. We do not use this information for advertising or sell it. Information leaves your device only through <strong>crash diagnostics</strong>, <strong>purchase and subscription processing</strong>, support messages you choose to send, exports you initiate, and — if iCloud is available — a <strong>backup in your own private iCloud container</strong>, which Camilore cannot access."],
        ["What the app receives from your game", "Jax Max Delta listens on your local network for the UDP telemetry your F1 game broadcasts (EA F1 24, F1 25 and F1 26). That traffic travels only across your own network, from your console or PC to your phone. It is received by the app and never sent onward by it. It contains race data — lap times, speed, tyre state, positions, the names the game assigns to drivers in your session — and no information about you personally. The app does not transmit telemetry to us or to anyone else."],
        ["What is stored on your device", "The following stay in the app's private storage on your device: the optional name you ask Jax to use; session history (tracks, session types, lap and sector times, positions, driver names supplied by the game, results, events, penalties and weather); locally recorded race and lap-trace data (including throttle, brake, steering, speed, gear, ERS and DRS samples); car setups and your ratings; and app preferences such as connection host and port, game, language, units, Jax voice and audio-guidance settings, and data retention. You can change or remove your preferred name, control heavier trace-data retention, and delete individual sessions or all sessions in the app."],
        ["Purchases", "Subscriptions are sold by Apple and managed for us by RevenueCat, Inc. When you subscribe or restore a purchase, Apple and RevenueCat process the transaction and an anonymous app-installation identifier so the app knows whether your subscription is active. We never receive your payment details — Apple handles payment entirely. See <a href=\"https://www.apple.com/legal/privacy/\">Apple's privacy policy</a> and <a href=\"https://www.revenuecat.com/privacy\">RevenueCat's privacy policy</a>."],
        ["Crash and stability diagnostics", "The app uses Google Firebase Crashlytics to report crashes and errors so we can fix them. A crash report contains technical information — the error, the code path, device model, operating-system version, app version and an anonymous installation identifier. It does not contain your telemetry, your session history, your setups, or anything that identifies you personally. We do not use this data for advertising and it is not linked to an identity. See <a href=\"https://firebase.google.com/support/privacy\">Firebase privacy information</a>."],
        ["iCloud Backup of your session history", "If your device has iCloud enabled and available, the app can back up your session history and league data into <strong>the app's own private iCloud container</strong> (<code>iCloud.com.camilore.jaxmaxdelta</code>) inside <strong>your</strong> iCloud account. This is a shipped feature, so this policy states it plainly. The backup contains session records and leagues; it does <strong>not</strong> contain lap-trace or race-data files, which remain only on the device that captured them. The container belongs to your Apple Account and Apple provides the storage — <strong>we have no access to it</strong>, and we cannot read, list or recover your backups. The app keeps the most recent backup plus up to five dated copies and prunes older ones. Before restoring, the app writes a local safety copy on your device so a restore can be undone, and restoring never overwrites a session already on the device. To remove these backups, delete the app's data from iCloud in iOS Settings, or delete the app. Apple's handling of iCloud data is governed by Apple's privacy policy."],
        ["Exports you initiate", "You can export your session history to a file and share it through the iOS share sheet (Files, AirDrop, Messages, and so on). This happens only when you ask for it, the file goes wherever you send it, and it does not pass through us."],
        ["Support messages", "If you email support@jaxmaxdelta.com, Camilore receives the information you choose to send, such as your email address, device model, app version and issue description. We use it to respond, troubleshoot, maintain support records and improve the product. Do not send raw telemetry or other sensitive files unless support asks for them and you are comfortable sharing them."],
        ["What we do not do", "No in-app accounts, sign-up or automatic email collection. No advertising, no ad identifiers, no IDFA, no ad networks. No cross-app or cross-site tracking, and no App Tracking Transparency prompt, because we do not track. No product analytics or behavioural telemetry sent to us. No selling or renting your data. No location collection — the app does not request location access. No contacts, photos, microphone or camera access."],
        ["Legal bases (EEA/UK users)", "Where the GDPR applies, we rely on <strong>contract</strong> — processing purchase and subscription status so we can give you the features you paid for — and <strong>legitimate interests</strong> — crash diagnostics, to keep the app from failing on your device, balanced against the fact that the data is technical and not identity-linked. We do not process special categories of data and we do not carry out automated decision-making that produces legal effects."],
        ["Retention", "Data on your device is kept until you delete it, either by deleting sessions in the app, letting your retention setting prune trace data, or deleting the app. iCloud backups are kept in your own container until you delete them; the app itself keeps the latest plus five dated copies. Crash reports are retained by Firebase according to Google's published Crashlytics retention periods. Purchase records are retained by Apple and RevenueCat under their own policies."],
        ["Your rights", "Depending on where you live, including in Canada or Quebec, applicable privacy law may give you rights concerning access, correction, deletion, withdrawal of consent, data portability or complaints to a privacy regulator. These rights are not absolute and depend on the information and law involved. Most JMD data is under your direct control in the app. For questions or requests involving support records, diagnostics or purchase status, contact support@jaxmaxdelta.com. We may need enough information to verify and respond to a request without creating a user account."],
        ["Children", "Jax Max Delta is rated 4+ in the App Store and is designed for sim racers, but it is not directed specifically to children. We do not knowingly solicit personal information from children. If you believe a child sent personal information to support, contact us so we can review and address it."],
        ["International processing", "Apple, Google and RevenueCat provide services internationally and may process limited purchase or diagnostic information outside your province, state or country under their own terms and privacy practices. Review the linked provider notices for current details; Camilore does not claim a processing location that those providers have not verified."],
        ["Changes to this policy", "If this policy changes, we will update the last-updated date and publish the revised version at this address. We will not backdate a revision. Material app-facing changes may also be described in release notes."],
        ["Contact", "Camilore Inc. is responsible for Jax Max Delta. Privacy and support inquiries: <a href=\"mailto:support@jaxmaxdelta.com\">support@jaxmaxdelta.com</a>. Corporate website: <a href=\"https://camilore.com\">camilore.com</a>."]
      ]
    },
    terms: {
      title: "Terms of Use",
      intro: "These terms govern your use of Jax Max Delta and its Free and Jax Pro capabilities.",
      updated: "Last updated: October 24, 2026",
      reviewNotice: "Legal review status: this expanded draft requires approval before production publication.",
      sections: [
        ["Operator and acceptance", "Jax Max Delta is a product owned and operated by <strong>Camilore Inc.</strong> Subject to completion of the applicable transfer documentation, Camilore Inc. assumed ownership and operation on October 1, 2026. By downloading or using JMD, you agree to these terms and Apple's applicable App Store terms. If you do not agree, do not use the app."],
        ["Independent product and trademarks", "Jax Max Delta is an independent telemetry companion. It is not affiliated with, sponsored by or endorsed by Formula 1, FIA, EA, Codemasters, any team, Sony, Microsoft, Xbox, PlayStation, Fanatec or another referenced rights holder. Names and marks belong to their respective owners and are used only to identify compatible games, platforms or equipment."],
        ["Permitted use", "Camilore grants you a limited, personal, non-exclusive, non-transferable and revocable right to use JMD on supported devices under these terms and the App Store rules. Do not copy, resell, sublicense, reverse engineer where prohibited, interfere with security or service operation, or use JMD unlawfully. Use second-screen telemetry and audio guidance only where allowed by your event, league, platform, game and local rules."],
        ["Free and Jax Pro", "JMD provides free capabilities and optional Jax Pro capabilities. The current in-app matrix gives Free users the full Dashboard and classification essentials, Jax audio guidance, selected Pit Wall and preparation views, iCloud Backup, three recent sessions and three tracked setups. Jax Pro adds deeper live views, planning and access to the full saved history and setup library. Features may evolve; the purchase screen controls the offer you are buying."],
        ["Subscriptions and trial", "Jax Pro is offered through monthly and annual auto-renewing App Store subscriptions. The app currently describes a 14-day introductory trial on both plans, but eligibility and the actual Apple offer may vary by account or territory. The Apple purchase sheet shows the current localized price, billing period and trial before confirmation. Do not rely on a price not displayed there."],
        ["Renewal, cancellation, restoration and refunds", "Apple charges your Apple Account and subscriptions renew automatically unless cancelled through your Apple Account subscription settings within Apple's required time. Cancellation stops future renewal and access continues as Apple specifies. Use Restore Purchases in JMD for an eligible purchase on the same Apple Account. Apple controls billing and refund decisions; request refunds through Apple. For JMD assistance, contact support@jaxmaxdelta.com."],
        ["Saved data after subscription", "Ending Jax Pro does not intentionally delete saved sessions or setups. Access returns to the Free limits described in the app; renewing restores access to eligible retained records. Your own deletions, device storage, retention settings and platform behavior may still affect what remains."],
        ["Telemetry, safety and results", "JMD depends on supported game packets, device and network conditions. Data may be delayed, incomplete or unavailable. Jax provides information and reminders, not professional driving, safety or strategy advice, and does not guarantee a result. You remain responsible for driving, race decisions, equipment and compliance with applicable rules. Do not interact with the app when unsafe."],
        ["Intellectual property", "JMD, its software, original content, design and Jax Max Delta branding are owned by or licensed to Camilore Inc. These terms do not transfer ownership. Third-party games, platforms, data formats, names and marks remain the property of their respective owners."],
        ["Availability and changes", "Compatibility and features depend on supported games, telemetry formats, local networks, devices, operating systems and third-party services. Camilore may maintain, change or discontinue capabilities, subject to applicable law and any App Store subscription commitments. Roadmap statements are directions, not promises or release dates."],
        ["Disclaimer", "To the extent permitted by law, JMD is provided “as is” and “as available,” without warranties beyond those that cannot legally be excluded. Camilore does not warrant uninterrupted or error-free operation, complete telemetry, compatibility with every setup, or any race outcome."],
        ["Limitation of liability", "To the extent permitted by law, Camilore Inc. is not liable for indirect, incidental, special, consequential or punitive loss, lost data, lost profits or lost opportunities arising from JMD. Nothing in these terms limits liability or consumer rights that applicable law does not allow us to exclude or limit."],
        ["Governing law and consumer rights", "These terms are governed by the laws of Quebec and the federal laws of Canada applicable there, without overriding mandatory consumer protections or jurisdiction rights that apply where you live. If a provision conflicts with a non-waivable right, that right prevails to the required extent."],
        ["Contact", "Questions about these terms, subscriptions or JMD support: <a href=\"mailto:support@jaxmaxdelta.com\">support@jaxmaxdelta.com</a>."]
      ]
    },
    blog: {
      title: "Jax Max Delta Blog",
      intro: "Notes for console sim racers, league drivers, and anyone building better race habits with a second screen and racing journal.",
      posts: {
        "second-screen-dashboard": {
          title: "Why Your Sim Racing Cockpit Needs a Virtual Pit Wall",
          date: "Starter post",
          summary: "Cockpit views and wheels can hide the information you need most. A virtual pit wall puts race data, voice alerts, and session memory back where you can use it.",
          body: [
            ["The blocked-dashboard problem", "Many console racers run cockpit view, a wheel rim, or a screen position that hides fuel, tyre, delta, or warning information. The result is simple: you are making race decisions with missing context."],
            ["Why a phone helps", "A second-screen dashboard keeps the critical data visible without forcing you to change camera view or look through clutter. Jax adds the pit wall layer: readable data, useful voice alerts, and support from the side of the track."],
            ["Beyond live data", "The bigger win is that the session becomes part of your racing history. Once you know what happened, what tyres worked, and what setup felt right, your next session starts with better team memory."]
          ]
        },
        "different-from-telemetry-app": {
          title: "What Makes Jax Different From a Telemetry App",
          date: "Starter post",
          summary: "Jax is not only about numbers. It combines dashboard, voice alerts, virtual pit wall context, and racing journal into one driver-focused workflow.",
          body: [
            ["Telemetry is the input", "Telemetry data is useful, but raw numbers alone do not make a driver faster. The product needs to turn data into timing, prompts, history, and decisions."],
            ["The race engineer layer", "Jax voice alerts are designed to call out useful information while you keep your eyes on the track: tyre state, fuel, deltas, penalties, flags, and session events."],
            ["The team notebook layer", "A session history is what helps you remember which setup, compound, and strategy worked on a track instead of starting from scratch every race weekend."]
          ]
        },
        "league-race-weekend": {
          title: "How to Prepare for a League Race Weekend",
          date: "Starter post",
          summary: "Use your past sessions, setup notes, tyre plans, and weather context to arrive at race day with fewer unknowns.",
          body: [
            ["Review the track", "Start with what you already know: previous lap times, setup notes, tyre behavior, fuel usage, penalties, and weather from older sessions."],
            ["Build a simple plan", "Know your starting setup, first stint compound, fuel target, and the alerts you want to hear before the session begins."],
            ["Capture what changes", "After the event, write down what surprised you. League racing improvement comes from keeping the details you would otherwise forget."]
          ]
        },
        "fanatec-wheel-tips": {
          title: "Fanatec Wheel Tips for F1 Console Racers",
          date: "Starter post",
          summary: "A few practical setup habits for console racers whose wheel hardware can make the in-game dashboard harder to see.",
          body: [
            ["Keep the screen readable", "Wheel position, field of view, and cockpit camera settings can block important UI. A second screen gives you more freedom to run the view you actually like."],
            ["Map what matters", "Put frequent actions where your hands naturally rest: differential, brake bias, overtake, radio, and menu navigation."],
            ["Use Jax for the missing layer", "Let the wheel handle driving inputs and let Jax handle readable race data, useful alerts, and session memory."]
          ]
        }
      }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      features: "Fonctions",
      how: "Fonctionnement",
      support: "Soutien",
      blog: "Blogue",
      roadmap: "Feuille de route",
      privacy: "Confidentialité",
      terms: "Conditions"
    },
    common: {
      parent: "Jax Max Delta est un produit de Camilore Inc.",
      copyright: "© 2026 Camilore Inc. Tous droits réservés.",
      app: "Jax Max Delta",
      eyebrow: "Compagnon de sim racing pour iPhone",
      skip: "Aller au contenu",
      menu: "Menu",
      language: "Langue",
      storeSoon: "Bientôt sur l'App Store",
      storeCta: "Télécharger dans l'App Store",
      testflightCta: "Rejoindre la bêta TestFlight",
      ctaFeatures: "Découvrir les fonctions",
      ctaHow: "Voir le fonctionnement",
      ctaSupport: "Contacter le soutien",
      ctaPrivacy: "Lire la politique de confidentialité",
      ctaReplay: "En savoir plus sur Race Replay",
      shotSoon: "Capture d'écran actuelle à venir",
      videoPlay: "Lire la vidéo",
      videoPause: "Mettre la vidéo en pause",
      available: "Disponible maintenant",
      disclaimer: "Jax Max Delta est une application compagnon de sim racing indépendante. Elle n'est pas affiliée à EA, Codemasters, Formula 1, la FIA, Microsoft, Sony, Fanatec ni à toute autre marque mentionnée, et n'est pas approuvée par celles-ci.",
      footerLead: "Votre ingénieur de course, votre mur des stands et votre mémoire de course — pour les pilotes F1 virtuels sur iPhone.",
      footerProduct: "Produit",
      footerHelp: "Aide et mentions légales",
      readPost: "Lire l'article"
    },
    shots: {
      home: "Accueil",
      prepare: "Préparer la session — votre plan",
      dashboard: "Tableau de bord en direct",
      dashboardVideo: "Le tableau de bord pendant une course",
      qualifying: "Le tableau de bord en qualification",
      vscDelta: "Le delta VSC à l’écran",
      pitWallTiming: "Mur des stands — Timing",
      pitWallVideo: "Mur des stands — Timing, carte et voiture",
      pitWallMap: "Mur des stands — Carte",
      pitWallCar: "Mur des stands — Voiture",
      jaxAudio: "Démo du guidage audio de Jax",
      sessionHistory: "Historique des sessions",
      sessionHistoryLeague: "Historique filtré sur une ligue",
      sessionLeagueSeason: "La ligue et la saison d’une session",
      raceResults: "Résultats de course",
      pitWallHeader: "Mur des stands — classement, Jax et Passées",
      quickJax: "La voix de Jax sur le mur des stands",
      setupRating: "Un réglage et sa note en étoiles",
      settingsSetup: "Paramètres — RÉGLAGES",
      settingsJax: "Paramètres — JAX",
      settingsSupport: "Paramètres — ASSISTANCE",
      lapTrace: "Historique des sessions — comparaison de deux tours",
      raceReplayLandscape: "Après la course : résultats, Race Replay et tracés",
      setupLibrary: "Bibliothèque de setups avec évaluations",
      racingTips: "Conseils de course",
      racingTipsDetail: "Un conseil de course, avec un exercice à pratiquer"
    },
    home: {
      titleLines: ["Votre ingénieur de course.", "Votre mur des stands.", "Votre mémoire de course."],
      lead: "Jax Max Delta transforme la télémétrie F1 en direct en informations, en coaching, en contexte de course et en historique — avant, pendant et après chaque session.",
      reelLabel: "Jax Max Delta en action",
      reelPause: "Mettre les aperçus en pause",
      reelPlay: "Lire les aperçus",
      proof: ["iPhone", "EA SPORTS F1 24 · F1 25 · F1 26", "Télémétrie UDP locale", "PlayStation · Xbox · PC", "Aucun compte requis", "English · Français · Español"],
      phasesKicker: "Avant · Pendant · Après",
      phasesTitle: "Un seul compagnon, du début à la fin.",
      phasesIntro: "Jax Max Delta vous suit tout au long de la session : ce qu'il faut savoir avant de quitter le garage, ce qui compte pendant que vous pilotez, et ce qui s'est vraiment passé une fois la course terminée.",
      phases: [
        ["Avant", "Préparer", "Choisissez le circuit et la voiture, puis étudiez le tracé, les virages, les pneus, les notes de réglages et votre propre historique.", "#prepare"],
        ["Pendant", "Piloter", "Un tableau de bord en direct, Jax à la radio et un mur des stands complet — lisibles d'un coup d'œil sur votre téléphone.", "#race"],
        ["Après", "Analyser", "Chaque session enregistrée sur votre appareil : résultats, réglages, conditions, traces de tour — et la reprise de votre course.", "#review"]
      ],
      prepare: {
        kicker: "Avant · Préparer la session",
        title: "Connaissez le circuit avant de prendre la piste.",
        body: "Préparer la session réunit la connaissance du circuit et votre propre historique. Choisissez la piste et la voiture, puis passez en revue ce qui compte pour la session à venir — essais, qualifications, sprint ou course.",
        items: [
          "Carte interactive du circuit avec virages numérotés",
          "Notes par virage — rapport, vitesse, freinage et point de corde lorsque les données existent",
          "Contexte de la voie des stands, du radar de vitesse, du DRS et de la gestion de l'énergie",
          "Pneus et réglages à considérer pour la voiture choisie",
          "Longueur de course, météo et contexte voiture de sécurité",
          "Vos sessions et réglages précédents sur ce circuit"
        ],
        note: "Les données de préparation varient selon le circuit et la voiture. JMD affiche ce qu'il possède pour la combinaison choisie et vous indique ce qui n'est pas disponible."
      },
      race: {
        kicker: "Pendant · Tableau de bord en direct",
        title: "Tout ce que le cockpit vous cache, d'un coup d'œil.",
        body: "Placez votre iPhone près du volant et gardez les chiffres importants sous les yeux — sans changer de caméra ni encombrer l'affichage du jeu.",
        items: [
          "Position, tour, vitesse, rapport, accélérateur et frein",
          "Chronos au tour, par secteur et delta",
          "Gomme, usure et températures des pneus",
          "Températures des freins et du moteur",
          "Carburant, ERS — y compris la gestion de l'énergie de F1 26 — et DRS",
          "Drapeaux, voiture de sécurité, VSC, arrêts et pénalités",
          "Dégâts d'aileron, météo et contexte de session"
        ],
        jaxKicker: "Jax · Voix",
        jaxTitle: "Jax, à la radio.",
        jaxBody: "Jax est la voix de votre ingénieur de course : des messages courts, au bon moment, sur ce qui vient de changer, pour que vos yeux restent sur la piste. Choisissez les catégories à entendre — et ajustez-les en pleine session avec le bouton Jax du mur des stands.",
        jaxItems: ["Pneus et carburant", "Chronos, delta et écarts", "Drapeaux, voiture de sécurité et VSC", "Pénalités et direction de course", "Rappels et coaching selon le contexte"],
        jaxNote: "Jax informe et rappelle. Le pilotage — et les décisions de stratégie — restent les vôtres."
      },
      pitWall: {
        kicker: "Pendant · Mur des stands",
        title: "La vue depuis le mur des stands.",
        body: "Quand le tableau de bord ne suffit plus, ouvrez le mur des stands — d'une touche depuis le tableau de bord, ou directement depuis l'accueil. Tout le peloton, tout le circuit et votre voiture dans une seule vue paysage.",
        items: [
          "Tour de chronométrage : positions, écarts, secteurs et pneus",
          "Carte du circuit en direct avec toutes les voitures",
          "Votre tableau tour par tour et l'état de votre voiture",
          "Traces de tour avec commandes, ERS et DRS, et comparaison de tours",
          "Réglages de la session et configuration du jeu et de la session"
        ]
      },
      replay: {
        kicker: "Après · Race Replay",
        title: "Revivez votre course.",
        body: "Race Replay reconstruit une course à partir de la télémétrie captée par JMD et la rejoue tour par tour : la tour de chronométrage qui se réorganise, les écarts qui se creusent et se referment, les changements de pneus et les moments qui ont fait la différence.",
        items: [
          "Tour de chronométrage avec abréviations des pilotes, positions et écarts",
          "Progression tour par tour avec horloge de course et commandes de lecture",
          "Relais et arrêts aux stands de tout le peloton",
          "Périodes de voiture de sécurité, de VSC et de drapeau rouge",
          "Abandons et fil des événements de course",
          "Un classement reconstruit quand le jeu n'a pas envoyé de résultats finaux"
        ],
        note: "Race Replay s'appuie sur les données reçues par votre appareil pendant la course. Si le jeu n'envoie pas de classement final, JMD reconstruit le résultat à partir des chronos captés lorsqu'il y en a assez — il n'invente jamais ce qui n'a pas été reçu.",
        badge: "Courses et courses sprint"
      },
      history: {
        kicker: "Après · Historique des sessions",
        title: "Un carnet de course qui s'écrit tout seul.",
        body: "Les sessions terminées sont enregistrées sur votre appareil et analysées selon leur nature : les essais et les qualifications mettent le rythme en avant, les courses racontent toute l'histoire.",
        items: [
          "Résultats et issue de la session — les vôtres et ceux du peloton",
          "Chronos au tour et par secteur, pneus et relais",
          "Réglages utilisés, avec une bibliothèque de réglages par circuit",
          "Météo et conditions de session",
          "Pénalités, faits saillants et événements de course",
          "Traces de tour enregistrées pour revoir votre pilotage"
        ],
        note: "Le contenu d'une session dépend de ce que le jeu a envoyé. JMD comble les lacunes à partir des données captées lorsque c'est possible, et affiche les données manquantes comme manquantes."
      },
      privacy: {
        kicker: "Vos données",
        title: "Confidentiel dès la conception.",
        body: "Jax Max Delta n'a aucun compte utilisateur. Le nom facultatif que Jax doit utiliser, votre télémétrie et votre historique restent sur votre appareil.",
        points: [
          ["Aucun compte", "Aucune inscription ni collecte automatique de courriel."],
          ["Sur votre appareil", "Sessions, traces de tour et réglages restent dans le stockage privé de l'app."],
          ["Votre propre iCloud", "Si iCloud est disponible, l'historique des sessions peut être sauvegardé dans votre conteneur iCloud privé — que nous ne pouvons pas lire."],
          ["Ni pub ni pistage", "Aucune publicité, aucun identifiant publicitaire, aucun suivi entre apps."]
        ]
      },
      platforms: {
        kicker: "Compatibilité",
        title: "Conçu pour les pilotes F1 sur console et PC.",
        body: "Jax Max Delta écoute la télémétrie UDP que votre jeu EA SPORTS F1 envoie sur votre réseau local. Votre iPhone doit simplement être sur le même réseau que votre console ou votre PC.",
        groups: [
          ["Jeux", ["EA SPORTS F1 24", "EA SPORTS F1 25", "EA SPORTS F1 26"]],
          ["Pilotez sur", ["PlayStation", "Xbox", "PC"]],
          ["JMD sur", ["iPhone"]]
        ],
        note: "Android n'est pas encore disponible."
      },
      availability: {
        kicker: "Disponibilité",
        soonTitle: "Bientôt sur l'App Store.",
        liveTitle: "Disponible sur l'App Store.",
        body: "Jax Max Delta se prépare à sa sortie publique sur iPhone. Des questions ou des commentaires d'ici là? Écrivez-nous, ça nous fera plaisir."
      }
    },
    features: {
      title: "Tout ce que Jax Max Delta fait aujourd'hui.",
      intro: "Un compagnon complet pour les pilotes F1 virtuels, organisé selon ce dont vous avez besoin avant, pendant et après chaque session. Tout ce qui figure sur cette page fait partie de la version actuelle; les travaux futurs sont présentés séparément à la fin.",
      groups: [
        {
          id: "prepare",
          phase: "Avant",
          title: "Préparer la session",
          body: "Choisissez un circuit et une voiture, puis étudiez le circuit et planifiez la session à venir. La connaissance du circuit et votre propre historique, côte à côte.",
          items: [
            "Aperçu du circuit avec une carte interactive et des virages numérotés",
            "Notes virage par virage : rapport, vitesse, freinage et point de corde lorsque les données existent",
            "Voie des stands, radar de vitesse, zones DRS et gestion de l'énergie",
            "Pneus et réglages à considérer pour la voiture choisie",
            "Longueur de course, météo et contexte voiture de sécurité / VSC",
            "Repères pour les essais, les qualifications et la course selon la session planifiée",
            "Vos sessions et réglages précédents sur ce circuit"
          ],
          note: "La couverture varie selon le circuit et la voiture; l'information manquante est signalée plutôt que devinée.",
          shots: ["prepare"]
        },
        {
          id: "dashboard",
          phase: "Pendant",
          title: "Tableau de bord en direct",
          body: "Un affichage de course en mode paysage pour votre iPhone. Gardez l'information critique visible sans changer de caméra ni encombrer l'affichage du jeu.",
          items: [
            "Position, tour, vitesse, rapport, accélérateur et frein",
            "Tour en cours, dernier et meilleur tour, temps par secteur et delta",
            "Gomme, usure et températures des quatre pneus",
            "Températures des freins et du moteur dans l'unité de votre choix",
            "Carburant, ERS et gestion de l'énergie de F1 26, DRS",
            "Drapeaux, voiture de sécurité, VSC, arrêts et pénalités",
            "Dégâts d'aileron, météo et contexte de session"
          ],
          shots: ["dashboardVideo"]
        },
        {
          id: "jax",
          phase: "Pendant",
          title: "Jax — la voix de votre ingénieur de course",
          body: "Jax annonce ce qui a changé, au moment où ça compte, pour que vous gardiez les yeux sur la piste. Ses messages découlent directement de la télémétrie — cohérents et prévisibles, jamais improvisés.",
          items: [
            "État des pneus et carburant",
            "Chronos, delta et écarts avec les voitures autour de vous",
            "Drapeaux, voiture de sécurité et VSC",
            "Pénalités et décisions de la direction de course",
            "Météo, gestion de l'énergie et rappels de stratégie",
            "Choix des catégories et de la voix dans les Réglages, ou en pleine session avec le bouton Jax du mur des stands"
          ],
          note: "Jax fournit de l'information et des rappels. Les décisions de pilotage et de stratégie vous appartiennent."
        },
        {
          id: "pit-wall",
          phase: "Pendant",
          title: "Mur des stands virtuel",
          body: "Une vue plus approfondie de la course et de la session, en direct. Ouvrez-le par-dessus le tableau de bord d'une seule touche, ou directement depuis l'accueil.",
          items: [
            "Tour de chronométrage : positions, écarts, temps au tour et par secteur, pneus et relais",
            "Carte du circuit en direct avec toutes les voitures en piste",
            "Votre tableau tour par tour et l'état de votre voiture en direct",
            "Traces de vos commandes de pilotage, avec comparaison de tours",
            "Réglages utilisés pendant la session, liés à votre bibliothèque",
            "Configuration du jeu et de la session, avec des libellés compacts et lisibles"
          ],
          shots: ["pitWallTiming", "pitWallMap", "pitWallCar"]
        },
        {
          id: "race-replay",
          phase: "Après",
          title: "Race Replay",
          body: "Revivez une course tour par tour. JMD reconstruit la course à partir de la télémétrie captée et montre comment le peloton a évolué, où les écarts ont changé et ce qui s'est passé en chemin.",
          items: [
            "Tour de chronométrage avec abréviations des pilotes, positions et écarts",
            "Progression tour par tour avec horloge de course et commandes de lecture",
            "Évolution des pneus et des relais de chaque pilote",
            "Périodes de voiture de sécurité, de VSC et de drapeau rouge",
            "Abandons lorsque le jeu les a signalés",
            "Fil des événements : arrêts, pénalités, meilleurs tours et drapeaux",
            "Résultats reconstruits lorsque le classement final manque et que suffisamment de chronos ont été captés"
          ],
          note: "Offert pour les courses et les courses sprint. La reprise utilise uniquement les données reçues par votre appareil — elle ne peut pas reconstruire ce que le jeu n'a jamais envoyé.",
          shots: ["raceReplayLandscape"]
        },
        {
          id: "session-history",
          phase: "Après",
          title: "Historique des sessions",
          body: "Chaque session terminée est enregistrée sur votre appareil. Chaque analyse s'adapte au type de session : essais, qualifications, contre-la-montre et courses montrent chacun ce qui compte pour eux.",
          items: [
            "Issue de la session, résultats de course et classement complet",
            "Temps au tour et par secteur, avec pneus et relais",
            "Réglages utilisés pendant la session",
            "Météo et conditions de session",
            "Faits saillants, pénalités et événements de course",
            "Statistiques de carrière sur l'ensemble de vos sessions"
          ],
          note: "Une session ne contient pas toujours tous les champs. JMD reconstruit ce qu'il peut de façon fiable et affiche les données manquantes comme manquantes.",
          shots: ["sessionHistory", "raceResults"]
        },
        {
          id: "lap-trace",
          phase: "Pendant et après",
          title: "Traces de tour et analyse",
          body: "Voyez comment vous avez piloté, pas seulement à quelle vitesse. Les traces sont enregistrées pendant que vous roulez et conservées avec la session.",
          items: [
            "Accélérateur, frein et direction",
            "Canaux de vitesse, d'ERS et de DRS",
            "Comparaison d'un tour de référence avec un autre tour",
            "Zoom et déplacement sur n'importe quelle partie du tour",
            "Tours enregistrés consultables dans l'historique des sessions"
          ]
        },
        {
          id: "setups",
          phase: "Avant et après",
          title: "Mémoire des réglages et des pneus",
          body: "Souvenez-vous de ce que vous avez utilisé et de ce qui a fonctionné. Les réglages sont captés pendant vos sessions et regroupés dans une bibliothèque filtrable par circuit.",
          items: [
            "Réglages de voiture captés à chaque session",
            "Bibliothèque « Voir les réglages », filtrable par circuit, jeu et voiture",
            "Référence de réglage à côté de vos chronos",
            "Gommes, relais et usure — y compris la gamme de gommes de F1 26",
            "Carburant et contexte de course conservés avec chaque session"
          ]
        },
        {
          id: "data",
          phase: "Toujours",
          title: "Sauvegarde privée et contrôle des données",
          body: "Aucun compte, aucune inscription. Vos données restent sur votre appareil, sous votre contrôle.",
          items: [
            "Historique des sessions, traces et réglages stockés sur votre appareil",
            "Sauvegarde iCloud facultative de l'historique des sessions dans votre propre conteneur iCloud privé",
            "Exportation de l'historique des sessions avec la feuille de partage iOS",
            "Choix de la durée de conservation des traces, plus volumineuses",
            "Suppression d'une session ou de toutes les sessions en tout temps"
          ],
          link: ["privacy.html", "Lire la politique de confidentialité"]
        }
      ],
      alsoTitle: "Aussi inclus",
      also: [
        ["Conseils de course", "Technique de pilotage, art de la course et règlements — des lectures courtes et pratiques."],
        ["Démos", "Découvrez Jax Max Delta avec les démos intégrées, sans jeu en marche."],
        ["Vos unités", "km/h ou mi/h, °C ou °F."],
        ["Trois langues", "Anglais, français et espagnol dans toute l'app."]
      ],
      futureKicker: "Feuille de route",
      futureTitle: "Ce que nous explorons ensuite",
      futureIntro: "Des orientations, pas des promesses. Rien ici n'a de date, et un élément ne rejoint la liste ci-dessus qu'une fois livré.",
      future: [
        ["Vue week-end de course", "Essais, qualifications et course reliés en une seule histoire."],
        ["Progression dans le temps", "Tendances sur de nombreuses sessions : rythme, constance, gestion des pneus."],
        ["Conseils pneus plus riches", "Un contexte de stratégie qui tient compte des gommes."],
        ["Android", "À l'étude; non disponible pour l'instant."]
      ]
    },
    how: {
      title: "Comment fonctionne Jax Max Delta",
      intro: "Configurez la télémétrie une seule fois. Ensuite, préparez, pilotez et analysez — avec votre iPhone sur le même réseau que votre console ou votre PC.",
      phaseLabels: { before: "Avant", during: "Pendant", after: "Après", setup: "Configuration" },
      steps: [
        {
          phase: "setup",
          title: "Installer et ouvrir Jax Max Delta",
          body: "Installez JMD sur votre iPhone. Une courte visite guidée présente l'essentiel au premier lancement — vous pourrez la revoir plus tard depuis les Réglages. Aucun compte requis."
        },
        {
          phase: "setup",
          title: "Configurer la télémétrie UDP",
          body: "JMD reçoit la télémétrie de votre jeu sur votre réseau local. La configuration se fait une seule fois dans le jeu.",
          list: [
            "Connectez votre console ou votre PC et votre iPhone au même réseau local.",
            "Dans JMD, ouvrez Réglages, onglet RÉGLAGES, pour voir l'adresse IP de cet appareil et le port UDP écouté par JMD (20777 par défaut).",
            "Dans votre jeu EA SPORTS F1, ouvrez les paramètres de télémétrie, activez la télémétrie UDP et entrez cette adresse IP et ce port.",
            "JMD détecte automatiquement le format de télémétrie du jeu dès la réception des premiers paquets."
          ]
        },
        {
          phase: "before",
          title: "Préparer la session",
          body: "Facultatif, mais utile. Ouvrez Préparer la session depuis l'accueil, choisissez le circuit et la voiture, puis étudiez la piste — ou passez à la vue session pour planifier les essais, les qualifications ou la course.",
          shot: "prepare"
        },
        {
          phase: "during",
          title: "Lancer la session et se connecter",
          body: "Ouvrez le Tableau de bord, puis prenez la piste. JMD attend la télémétrie et se connecte dès que votre jeu commence à l'envoyer."
        },
        {
          phase: "during",
          title: "Piloter avec le tableau de bord",
          body: "Placez votre appareil là où vous pouvez le lire d'un coup d'œil. La légende intégrée explique chaque abréviation du tableau de bord.",
          shot: "dashboard"
        },
        {
          phase: "during",
          title: "Laisser Jax faire les annonces",
          body: "Choisissez la voix de Jax et les catégories à entendre dans Réglages, onglet JAX. En pleine session, le bouton Jax du mur des stands vous permet de les ajuster sans quitter la voiture."
        },
        {
          phase: "during",
          title: "Ouvrir le mur des stands au besoin",
          body: "Touchez la poignée du mur des stands sur le tableau de bord pour voir les chronos, la carte en direct, votre voiture, les traces, les réglages et les détails de la session. Touchez à nouveau pour revenir au tableau de bord.",
          shot: "pitWallTiming"
        },
        {
          phase: "after",
          title: "Terminer la session",
          body: "À la fin d'une session, JMD la reconnaît et l'enregistre dans l'historique des sessions. Après une course, il vous indique votre position finale et vous permet de corriger la façon dont la course s'est terminée au besoin. Si la télémétrie s'arrête avant la fin évidente de la session, JMD vous pose la question."
        },
        {
          phase: "after",
          title: "Analyser dans l'historique des sessions",
          body: "Ouvrez l'historique des sessions depuis l'accueil pour retrouver n'importe quelle session enregistrée. Chaque analyse s'adapte au type de session : le rythme pour les essais et les qualifications, toute l'histoire pour les courses.",
          shot: "sessionHistory"
        },
        {
          phase: "after",
          title: "Revoir votre course",
          body: "Pour les courses et les courses sprint, ouvrez la session dans l'historique pour lancer Race Replay : la tour de chronométrage, les écarts, les pneus et les événements de course, tour par tour.",
          shot: "raceReplayLandscape"
        },
        {
          phase: "setup",
          title: "Gérer les réglages, les données et la sauvegarde",
          body: "Dans les Paramètres, l'onglet RÉGLAGES regroupe votre statut Jax Pro, la langue et les unités, la connexion UDP, le suivi des sessions, la sauvegarde iCloud (sauvegarder maintenant, restaurer) et la durée de conservation des données de course. L'onglet ASSISTANCE propose les démos intégrées, la visite de démarrage, l'adresse IP de l'appareil, le signalement de bogues et le guide du tableau de bord. L'onglet LÉGAL donne accès aux conditions et à la politique de confidentialité."
        }
      ],
      troubleTitle: "Dépannage",
      trouble: [
        ["Aucune télémétrie reçue", "Vérifiez que la télémétrie UDP est activée dans le jeu, que l'adresse IP correspond à celle affichée dans l'onglet RÉGLAGES de JMD, que le port correspond et que les deux appareils sont sur le même réseau."],
        ["Les données s'arrêtent en pleine session", "Assurez-vous que l'appareil est resté connecté au Wi-Fi, que le mode économie d'énergie n'a pas interrompu l'app et que la console n'a pas changé de réseau."],
        ["L'adresse IP a changé", "Les adresses IP locales peuvent changer d'une session à l'autre. Revérifiez l'onglet RÉGLAGES dans JMD et mettez à jour les paramètres de télémétrie du jeu au besoin."],
        ["Jax reste muet", "Vérifiez le volume et le mode silencieux de l'appareil, puis assurez-vous que la voix de Jax et les catégories voulues sont activées dans l'onglet JAX des Réglages ou avec le bouton Jax du mur des stands."],
        ["Pas de Race Replay pour une session", "Race Replay est offert pour les courses et les courses sprint captées avec assez de détails. Les essais, les qualifications et le contre-la-montre ont leur propre analyse, axée sur le rythme."],
        ["Certaines valeurs manquent", "Les sessions de jeu n'envoient pas toutes chaque champ. JMD affiche les données manquantes comme manquantes plutôt que de deviner."]
      ]
    },
    support: {
      title: "Soutien pour Jax Max Delta",
      intro: "De l'aide pour la configuration, des réponses aux questions fréquentes et un moyen direct de nous joindre.",
      faqTitle: "FAQ",
      faq: [
        ["Jax Max Delta fonctionne-t-il sur console?", "Oui. JMD est conçu en pensant aux pilotes sur console. Votre jeu doit envoyer la télémétrie UDP, et votre iPhone doit être sur le même réseau local que votre PlayStation, votre Xbox ou votre PC."],
        ["Quels jeux sont pris en charge?", "EA SPORTS F1 24, F1 25 et F1 26, par la sortie de télémétrie UDP du jeu."],
        ["Est-ce offert sur Android?", "Pas encore. Jax Max Delta fonctionne actuellement sur iPhone."],
        ["Jax est-il officiellement affilié à EA, F1, Codemasters, Fanatec, PlayStation ou Xbox?", "Non. Jax Max Delta est indépendant et utilise les données de télémétrie des jeux compatibles lorsqu'elles sont disponibles."],
        ["Est-ce seulement un tableau de bord de télémétrie?", "Non. Le tableau de bord en direct n'en est qu'une partie. JMD vous aide aussi à préparer une session, vous offre les annonces vocales de Jax et un mur des stands complet pendant que vous pilotez, puis conserve votre historique, vos réglages, vos traces de tour et Race Replay après la session."],
        ["Pourquoi n'y a-t-il pas de Race Replay pour certaines sessions?", "Race Replay est offert pour les courses et les courses sprint captées avec assez de détails. Les essais, les qualifications et le contre-la-montre ont leur propre analyse, axée sur le rythme."],
        ["Où sont stockées mes données?", "Sur votre appareil. L'historique des sessions, les traces de tour et les réglages restent dans le stockage privé de l'app. Si iCloud est disponible, l'app peut aussi sauvegarder votre historique et vos ligues dans votre propre conteneur iCloud privé, que nous ne pouvons pas lire. Consultez la politique de confidentialité pour les détails."],
        ["Que comprennent les versions gratuite et Jax Pro?", "La version gratuite comprend le tableau de bord complet, le classement complet, les onglets GAME, ME et SETUP du mur des stands, l'aperçu du circuit dans Préparer la session, chaque session enregistrée et listée avec vos statistiques, votre session la plus récente en entier, tous vos réglages listés, les alertes de sécurité urgentes de Jax et votre tour à la ligne, les conseils de course et la sauvegarde iCloud. Jax Pro ajoute l'ingénieur de course Jax complet, le chronométrage EN DIRECT, les onglets AUTO, MAP et TRACE, chaque session précédente en entier, les valeurs et la gestion de vos réglages, et une préparation personnalisée : analyse du circuit, Mes données et plan de séance."],
        ["Comment fonctionnent l'essai et les abonnements?", "L'app décrit un essai de lancement de 14 jours pour les forfaits mensuel et annuel Jax Pro. L'admissibilité, les prix locaux et l'offre exacte affichée par Apple peuvent varier; vérifiez la feuille d'achat Apple avant de confirmer. Apple facture et renouvelle l'abonnement sauf annulation dans les réglages d'abonnements de votre compte Apple. Les achats peuvent être restaurés dans JMD."],
        ["Comment annuler ou demander un remboursement?", "Gérez ou annulez Jax Pro dans les réglages d'abonnements de votre compte Apple. L'annulation met fin au prochain renouvellement, mais n'annule normalement pas un débit existant. Apple contrôle la facturation et les remboursements de l'App Store; utilisez l'assistance aux achats Apple pour une demande de remboursement, ou écrivez à support@jaxmaxdelta.com pour obtenir de l'aide sur JMD."],
        ["Où puis-je le télécharger?", "Jax Max Delta se prépare à sa sortie sur l'App Store. Le lien de téléchargement apparaîtra sur ce site dès qu'il sera disponible."],
        ["Comment envoyer des commentaires comme testeur?", "Envoyez le modèle de l'appareil, le jeu, la console ou le PC, le type de session et ce qui s'est passé à support@jaxmaxdelta.com."]
      ],
      knownTitle: "Problèmes courants",
      known: [
        "Aucune donnée UDP reçue parce que la sortie de télémétrie est désactivée dans le jeu.",
        "Le téléphone n'est pas sur le même réseau que la console ou le PC.",
        "Mauvaise adresse IP, mauvais port ou mauvais format de télémétrie UDP dans le jeu.",
        "Les alertes vocales ne jouent pas à cause du volume, du mode silencieux ou des catégories d'alertes."
      ],
      feedbackTitle: "Contact et commentaires",
      feedbackBody: "Un bon rapport inclut votre jeu, votre plateforme, votre appareil, la version de l'app, vos réglages de télémétrie et une courte description de ce que vous attendiez par rapport à ce qui s'est passé."
    },
    roadmap: {
      title: "Feuille de route",
      intro: "Ce que Jax Max Delta offre aujourd'hui, et les pistes que nous explorons ensuite. Les éléments futurs n'ont pas de date et peuvent changer.",
      groups: [
        ["Disponible maintenant · R1", [
          "Préparer la session : carte du circuit, virages, pneus, réglages et contexte de session",
          "Tableau de bord en direct",
          "Annonces vocales et coaching contextuel de Jax, réglables en pleine session",
          "Mur des stands : chronos, carte en direct, état de la voiture, traces de tour, réglages et détails du jeu et de la session",
          "Historique des sessions, adapté au type de session",
          "Race Replay pour les courses et les courses sprint",
          "Traces de tour et comparaison de tours",
          "Suivi des réglages et bibliothèque de réglages par circuit",
          "Contexte pneus, carburant et course",
          "Gestion de l'énergie de F1 26",
          "Gestion du DRS, de la voiture de sécurité, du VSC et du drapeau rouge",
          "Sauvegarde iCloud privée de l'historique des sessions",
          "Conseils de course et démos intégrées",
          "Anglais, français et espagnol"
        ]],
        ["Prochainement · Raffinement", [
          "Améliorations guidées par les commentaires des premiers utilisateurs",
          "Couverture de préparation élargie à plus de combinaisons circuit et voiture",
          "Plus de façons de comparer les sessions selon le circuit, les réglages et les conditions"
        ]],
        ["À l'étude · Futur", [
          "Une vue week-end de course : essais, qualifications et course en une seule histoire",
          "Une analyse de type reprise pour les essais et les qualifications",
          "Tendances de progression sur de nombreuses sessions",
          "Conseils de stratégie pneus plus riches, selon la gomme",
          "Android",
          "D'autres jeux de course lorsque la télémétrie est fiable"
        ]]
      ]
    },
    privacy: null, terms: null, blog: null
  },
  es: {
    nav: {
      home: "Inicio",
      features: "Funciones",
      how: "Cómo funciona",
      support: "Soporte",
      blog: "Blog",
      roadmap: "Hoja de ruta",
      privacy: "Privacidad",
      terms: "Términos"
    },
    common: {
      parent: "Jax Max Delta es un producto de Camilore Inc.",
      copyright: "© 2026 Camilore Inc. Todos los derechos reservados.",
      app: "Jax Max Delta",
      eyebrow: "Compañero de sim racing para iPhone",
      skip: "Ir al contenido",
      menu: "Menú",
      language: "Idioma",
      storeSoon: "Próximamente en el App Store",
      storeCta: "Descargar en el App Store",
      testflightCta: "Unirse a la beta de TestFlight",
      ctaFeatures: "Ver funciones",
      ctaHow: "Ver cómo funciona",
      ctaSupport: "Contactar con soporte",
      ctaPrivacy: "Leer la política de privacidad",
      ctaReplay: "Más sobre Race Replay",
      shotSoon: "Captura de pantalla actual próximamente",
      videoPlay: "Reproducir vídeo",
      videoPause: "Pausar vídeo",
      available: "Disponible ahora",
      disclaimer: "Jax Max Delta es una app independiente de sim racing y no está afiliada ni respaldada por EA, Codemasters, Formula 1, FIA, Microsoft, Sony, Fanatec ni ninguna otra marca mencionada.",
      footerLead: "Tu ingeniero de carrera, tu muro de boxes y tu memoria de carrera — para pilotos de F1 virtual en iPhone.",
      footerProduct: "Producto",
      footerHelp: "Ayuda y legal",
      readPost: "Leer artículo"
    },
    shots: {
      home: "Inicio",
      prepare: "Preparar sesión — tu plan",
      dashboard: "Panel en vivo",
      dashboardVideo: "El panel durante una carrera",
      qualifying: "El panel en clasificación",
      vscDelta: "El delta VSC en pantalla",
      pitWallTiming: "Muro de boxes — Timing",
      pitWallVideo: "Muro de boxes — Timing, mapa y coche",
      pitWallMap: "Muro de boxes — Mapa",
      pitWallCar: "Muro de boxes — Coche",
      jaxAudio: "Demo de la guía de audio de Jax",
      sessionHistory: "Historial de sesiones",
      sessionHistoryLeague: "Historial filtrado por una liga",
      sessionLeagueSeason: "La liga y la temporada de una sesión",
      raceResults: "Resultados de carrera",
      pitWallHeader: "Muro de boxes — clasificación, Jax y Anteriores",
      quickJax: "La voz de Jax en el muro de boxes",
      setupRating: "Un reglaje con su valoración en estrellas",
      settingsSetup: "Ajustes — AJUSTES",
      settingsJax: "Ajustes — JAX",
      settingsSupport: "Ajustes — SOPORTE",
      lapTrace: "Historial de sesiones — comparando dos vueltas",
      raceReplayLandscape: "Después de la carrera: resultados, Race Replay y trazas",
      setupLibrary: "Biblioteca de setups con valoraciones",
      racingTips: "Consejos de carrera",
      racingTipsDetail: "Un consejo de carrera, con un ejercicio para practicar"
    },
    home: {
      titleLines: ["Tu ingeniero de carrera.", "Tu muro de boxes.", "Tu memoria de carrera."],
      lead: "Jax Max Delta convierte la telemetría de F1 en vivo en la información, el coaching, el contexto de carrera y el historial que necesitas — antes, durante y después de cada sesión.",
      reelLabel: "Jax Max Delta en acción",
      reelPause: "Pausar las vistas previas",
      reelPlay: "Reproducir las vistas previas",
      proof: ["iPhone", "EA SPORTS F1 24 · F1 25 · F1 26", "Telemetría UDP local", "PlayStation · Xbox · PC", "Sin cuenta", "English · Français · Español"],
      phasesKicker: "Antes · Durante · Después",
      phasesTitle: "Un solo compañero para toda la sesión.",
      phasesIntro: "Jax Max Delta te acompaña de principio a fin: lo que debes saber antes de salir del garaje, lo que importa mientras conduces y lo que realmente pasó cuando todo termina.",
      phases: [
        ["Antes", "Preparar", "Elige el circuito y el coche, y estudia el trazado, las curvas, los neumáticos, las notas de reglaje y tu propio historial allí.", "#prepare"],
        ["Durante", "Competir", "Un panel en vivo, Jax por radio y un muro de boxes completo — legibles de un vistazo en tu teléfono.", "#race"],
        ["Después", "Analizar", "Cada sesión guardada en tu dispositivo: resultados, reglajes, condiciones, trazas de vuelta — y la repetición de cómo se desarrolló la carrera.", "#review"]
      ],
      prepare: {
        kicker: "Antes · Preparar sesión",
        title: "Conoce el circuito antes de salir a pista.",
        body: "Preparar sesión reúne el conocimiento del circuito y tu propio historial. Elige la pista y el coche, y repasa lo que importa para la próxima sesión — libres, clasificación, sprint o carrera.",
        items: [
          "Mapa interactivo del circuito con curvas numeradas",
          "Notas por curva — marcha, velocidad, frenada y vértice cuando hay datos",
          "Contexto del pit lane, speed trap, DRS y gestión de energía",
          "Neumáticos y reglajes a tener en cuenta para el coche elegido",
          "Duración de carrera, clima y contexto de Safety Car",
          "Tus sesiones y reglajes anteriores en ese circuito"
        ],
        note: "Los datos de preparación varían según el circuito y el coche. JMD muestra lo que tiene para la combinación que elijas y te avisa cuando algo no está disponible."
      },
      race: {
        kicker: "Durante · Panel en vivo",
        title: "Todo lo que el cockpit oculta, de un vistazo.",
        body: "Coloca tu iPhone junto al volante y mantén a la vista los datos que importan — sin cambiar de cámara ni saturar el HUD del juego.",
        items: [
          "Posición, vuelta, velocidad, marcha, acelerador y freno",
          "Tiempos por vuelta, por sector y delta",
          "Compuesto, desgaste y temperaturas de neumáticos",
          "Temperaturas de frenos y motor",
          "Combustible, ERS — incluida la gestión de energía de F1 26 — y DRS",
          "Banderas, Safety Car, VSC, paradas y penalizaciones",
          "Daños en alerones, clima y contexto de sesión"
        ],
        jaxKicker: "Jax · Voz",
        jaxTitle: "Jax, por radio.",
        jaxBody: "Jax es la voz de tu ingeniero de carrera: mensajes breves y oportunos sobre lo que acaba de cambiar, para que no apartes la vista de la pista. Elige qué categorías quieres oír — y ajústalas en plena sesión con el botón Jax del muro de boxes.",
        jaxItems: ["Neumáticos y combustible", "Tiempos, delta y diferencias", "Banderas, Safety Car y VSC", "Penalizaciones y dirección de carrera", "Recordatorios y coaching según el contexto"],
        jaxNote: "Jax informa y recuerda. La conducción — y las decisiones de estrategia — siguen siendo tuyas."
      },
      pitWall: {
        kicker: "Durante · Muro de boxes",
        title: "La vista desde el muro de boxes.",
        body: "Cuando necesites más que el panel, abre el muro de boxes — con un toque desde el panel o directamente desde Inicio. Toda la parrilla, todo el circuito y tu propio coche en una sola vista horizontal.",
        items: [
          "Torre de tiempos: posiciones, diferencias, sectores y neumáticos",
          "Mapa del circuito en vivo con todos los coches",
          "Tu tabla vuelta a vuelta y el estado de tu coche",
          "Trazas de vuelta con mandos, ERS y DRS, y comparación de vueltas",
          "Reglajes de la sesión y configuración del juego y la sesión"
        ]
      },
      replay: {
        kicker: "Después · Race Replay",
        title: "Vuelve a vivir tu carrera.",
        body: "Race Replay reconstruye una carrera a partir de la telemetría que JMD captó y la reproduce vuelta a vuelta: la torre de tiempos reordenándose, las diferencias abriéndose y cerrándose, los cambios de neumáticos y los momentos que la decidieron.",
        items: [
          "Torre de tiempos con abreviaturas de pilotos, posiciones y diferencias",
          "Progresión vuelta a vuelta con reloj de carrera y controles de reproducción",
          "Stints y paradas en boxes de toda la parrilla",
          "Periodos de Safety Car, VSC y bandera roja",
          "Abandonos y un ticker de eventos de carrera",
          "Una clasificación reconstruida cuando el juego no envió resultados finales"
        ],
        note: "Race Replay trabaja con los datos que tu dispositivo recibió durante la carrera. Si el juego no envía una clasificación final, JMD reconstruye el resultado a partir de los tiempos captados cuando hay suficientes — nunca inventa lo que no se recibió.",
        badge: "Carreras y sprints"
      },
      history: {
        kicker: "Después · Historial de sesiones",
        title: "Un diario de carreras que se escribe solo.",
        body: "Las sesiones completadas se guardan en tu dispositivo y se analizan según lo que fueron: los libres y la clasificación se centran en el ritmo; las carreras cuentan toda la historia.",
        items: [
          "Resultados y desenlace — tuyos y de la parrilla",
          "Tiempos por vuelta y por sector, neumáticos y stints",
          "Reglajes usados, con una biblioteca de reglajes por circuito",
          "Clima y condiciones de la sesión",
          "Penalizaciones, momentos destacados y eventos de carrera",
          "Trazas de vuelta guardadas para revisar tu conducción"
        ],
        note: "Lo que contiene una sesión depende de lo que envió el juego. JMD completa huecos con los datos captados cuando puede, y muestra como faltantes los datos que faltan."
      },
      privacy: {
        kicker: "Tus datos",
        title: "Privado desde el diseño.",
        body: "Jax Max Delta no tiene cuentas de usuario. El nombre opcional que quieres que use Jax, tu telemetría y tu historial permanecen en tu dispositivo.",
        points: [
          ["Sin cuenta", "Nada que registrar y ninguna recogida automática de emails."],
          ["En tu dispositivo", "Sesiones, trazas de vuelta y reglajes viven en el almacenamiento privado de la app."],
          ["Tu propio iCloud", "Si iCloud está disponible, el historial de sesiones puede respaldarse en tu contenedor privado de iCloud — que nosotros no podemos leer."],
          ["Sin anuncios ni rastreo", "Sin publicidad, sin identificadores publicitarios, sin seguimiento entre apps."]
        ]
      },
      platforms: {
        kicker: "Compatibilidad",
        title: "Hecho para pilotos de F1 en consola y PC.",
        body: "Jax Max Delta escucha la telemetría UDP que tu juego EA SPORTS F1 envía por tu red local. Tu iPhone solo necesita estar en la misma red que tu consola o PC.",
        groups: [
          ["Juegos", ["EA SPORTS F1 24", "EA SPORTS F1 25", "EA SPORTS F1 26"]],
          ["Compite en", ["PlayStation", "Xbox", "PC"]],
          ["JMD en", ["iPhone"]]
        ],
        note: "Android aún no está disponible."
      },
      availability: {
        kicker: "Disponibilidad",
        soonTitle: "Próximamente en el App Store.",
        liveTitle: "Disponible en el App Store.",
        body: "Jax Max Delta se prepara para su lanzamiento público en iPhone. ¿Tienes preguntas o comentarios mientras tanto? Nos encantará leerte."
      }
    },
    features: {
      title: "Todo lo que Jax Max Delta hace hoy.",
      intro: "Un compañero completo para pilotos de F1 virtual, organizado según lo que necesitas antes, durante y después de cada sesión. Todo lo que aparece en esta página está en la versión actual; el trabajo futuro se presenta aparte, al final.",
      groups: [
        {
          id: "prepare",
          phase: "Antes",
          title: "Preparar sesión",
          body: "Elige un circuito y un coche, repasa el circuito y planifica la próxima sesión. El conocimiento del circuito y tu propio historial, lado a lado.",
          items: [
            "Vista general del circuito con un mapa interactivo y curvas numeradas",
            "Notas curva a curva: marcha, velocidad, frenada y vértice cuando hay datos",
            "Pit lane, speed trap, zonas DRS y gestión de energía",
            "Neumáticos y reglajes a considerar para el coche elegido",
            "Duración de carrera, clima y contexto de Safety Car / VSC",
            "Pautas para libres, clasificación y carrera según la sesión que planificas",
            "Tus sesiones y reglajes anteriores en ese circuito"
          ],
          note: "La cobertura varía según el circuito y el coche; la información que falta se indica en lugar de suponerse.",
          shots: ["prepare"]
        },
        {
          id: "dashboard",
          phase: "Durante",
          title: "Panel en vivo",
          body: "Una pantalla de carrera en horizontal para tu iPhone. Mantén visible la información crítica sin cambiar de cámara ni saturar el HUD del juego.",
          items: [
            "Posición, vuelta, velocidad, marcha, acelerador y freno",
            "Vuelta actual, última y mejor, parciales por sector y delta",
            "Compuesto, desgaste y temperaturas de los cuatro neumáticos",
            "Temperaturas de frenos y motor en la unidad que elijas",
            "Combustible, ERS y gestión de energía de F1 26, DRS",
            "Banderas, Safety Car, VSC, paradas y penalizaciones",
            "Daños en alerones, clima y contexto de sesión"
          ],
          shots: ["dashboardVideo"]
        },
        {
          id: "jax",
          phase: "Durante",
          title: "Jax — la voz de tu ingeniero de carrera",
          body: "Jax anuncia lo que cambió, cuando importa, para que mantengas la vista en la pista. Sus mensajes salen directamente de la telemetría — coherentes y predecibles, nunca improvisados.",
          items: [
            "Estado de neumáticos y combustible",
            "Tiempos, delta y diferencias con los coches a tu alrededor",
            "Banderas, Safety Car y VSC",
            "Penalizaciones y decisiones de dirección de carrera",
            "Clima, gestión de energía y recordatorios de estrategia",
            "Elige categorías y voz en Ajustes, o ajústalas en plena sesión con el botón Jax del muro de boxes"
          ],
          note: "Jax ofrece información y recordatorios. Las decisiones de conducción y de estrategia son tuyas."
        },
        {
          id: "pit-wall",
          phase: "Durante",
          title: "Muro de boxes virtual",
          body: "Una vista más profunda de la carrera y la sesión en vivo. Ábrelo sobre el panel con un toque, o directamente desde Inicio.",
          items: [
            "Torre de tiempos: posiciones, diferencias, tiempos por vuelta y sector, neumáticos y stints",
            "Mapa del circuito en vivo con todos los coches en pista",
            "Tu tabla vuelta a vuelta y el estado de tu coche en vivo",
            "Trazas de tus mandos de conducción, con comparación de vueltas",
            "Reglajes usados en la sesión, enlazados a tu biblioteca",
            "Configuración del juego y la sesión, con etiquetas compactas y legibles"
          ],
          shots: ["pitWallTiming", "pitWallMap", "pitWallCar"]
        },
        {
          id: "race-replay",
          phase: "Después",
          title: "Race Replay",
          body: "Revive una carrera vuelta a vuelta. JMD reconstruye la carrera a partir de la telemetría que captó y reproduce cómo se movió la parrilla, dónde cambiaron las diferencias y qué pasó por el camino.",
          items: [
            "Torre de tiempos con abreviaturas de pilotos, posiciones y diferencias",
            "Progresión vuelta a vuelta con reloj de carrera y controles de reproducción",
            "Evolución de neumáticos y stints de cada piloto",
            "Periodos de Safety Car, VSC y bandera roja",
            "Abandonos cuando el juego los informó",
            "Ticker de eventos: paradas, penalizaciones, vueltas rápidas y banderas",
            "Resultados reconstruidos cuando falta la clasificación final y se captaron suficientes tiempos"
          ],
          note: "Disponible para carreras y sprints. La repetición usa solo los datos que recibió tu dispositivo — no puede reconstruir lo que el juego nunca envió.",
          shots: ["raceReplayLandscape"]
        },
        {
          id: "session-history",
          phase: "Después",
          title: "Historial de sesiones",
          body: "Cada sesión completada se guarda en tu dispositivo. Cada análisis se adapta al tipo de sesión: libres, clasificación, contrarreloj y carreras muestran lo que importa en cada caso.",
          items: [
            "Desenlace, resultados de carrera y clasificación completa",
            "Tiempos por vuelta y sector, con neumáticos y stints",
            "Reglajes usados durante la sesión",
            "Clima y condiciones de la sesión",
            "Momentos destacados, penalizaciones y eventos de carrera",
            "Estadísticas de carrera deportiva de todas tus sesiones"
          ],
          note: "No todas las sesiones contienen todos los campos. JMD reconstruye lo que puede de forma fiable y muestra como faltantes los datos que faltan.",
          shots: ["sessionHistory", "raceResults"]
        },
        {
          id: "lap-trace",
          phase: "Durante y después",
          title: "Trazas de vuelta y análisis",
          body: "Mira cómo conduciste, no solo qué tan rápido. Las trazas se graban mientras conduces y se guardan con la sesión.",
          items: [
            "Acelerador, freno y dirección",
            "Canales de velocidad, ERS y DRS",
            "Compara una vuelta de referencia con otra vuelta",
            "Zoom y desplazamiento a cualquier parte de la vuelta",
            "Vuelve a ver vueltas guardadas desde el historial de sesiones"
          ]
        },
        {
          id: "setups",
          phase: "Antes y después",
          title: "Memoria de reglajes y neumáticos",
          body: "Recuerda qué usaste y qué funcionó. Los reglajes se captan en tus sesiones y se reúnen en una biblioteca que puedes filtrar por circuito.",
          items: [
            "Reglajes del coche captados en cada sesión",
            "Biblioteca Ver reglajes, filtrable por circuito, juego y coche",
            "Referencias de reglaje junto a tus tiempos por vuelta",
            "Compuestos, stints y desgaste — incluida la gama de compuestos de F1 26",
            "Combustible y contexto de carrera guardados con cada sesión"
          ]
        },
        {
          id: "data",
          phase: "Siempre",
          title: "Copia privada y control de tus datos",
          body: "Sin cuenta, sin registro. Tus datos viven en tu dispositivo, bajo tu control.",
          items: [
            "Historial de sesiones, trazas y reglajes guardados en tu dispositivo",
            "Copia de seguridad opcional en iCloud del historial de sesiones, en tu propio contenedor privado",
            "Exporta tu historial de sesiones con la hoja de compartir de iOS",
            "Elige cuánto tiempo se conservan las trazas, más pesadas",
            "Borra sesiones individuales o todas en cualquier momento"
          ],
          link: ["privacy.html", "Leer la política de privacidad"]
        }
      ],
      alsoTitle: "También incluido",
      also: [
        ["Consejos de carrera", "Técnica de conducción, estrategia en pista y reglamento — lecturas breves y prácticas."],
        ["Demos", "Explora Jax Max Delta con demos integradas, sin necesidad de tener el juego en marcha."],
        ["Tus unidades", "km/h o mph, °C o °F."],
        ["Tres idiomas", "Inglés, francés y español en toda la app."]
      ],
      futureKicker: "Hoja de ruta",
      futureTitle: "Lo que estamos explorando",
      futureIntro: "Direcciones, no promesas. Nada aquí tiene fecha, y un elemento pasa a la lista de arriba solo cuando se publica.",
      future: [
        ["Vista de fin de semana", "Libres, clasificación y carrera conectados en una sola historia."],
        ["Progreso en el tiempo", "Tendencias a lo largo de muchas sesiones: ritmo, consistencia, gestión de neumáticos."],
        ["Guía de neumáticos más completa", "Contexto de estrategia que tiene en cuenta el compuesto."],
        ["Android", "En estudio; no disponible por ahora."]
      ]
    },
    how: {
      title: "Cómo funciona Jax Max Delta",
      intro: "Configura la telemetría una vez. Después prepara, compite y analiza — con tu iPhone en la misma red que tu consola o PC.",
      phaseLabels: { before: "Antes", during: "Durante", after: "Después", setup: "Configuración" },
      steps: [
        {
          phase: "setup",
          title: "Instala y abre Jax Max Delta",
          body: "Instala JMD en tu iPhone. Un breve recorrido inicial explica lo esencial — puedes volver a verlo desde Ajustes. No necesitas cuenta."
        },
        {
          phase: "setup",
          title: "Configura la telemetría UDP",
          body: "JMD recibe la telemetría de tu juego por tu red local. Se configura una sola vez en el juego.",
          list: [
            "Conecta tu consola o PC y tu iPhone a la misma red local.",
            "En JMD, abre Ajustes, pestaña AJUSTES, para ver la dirección IP de este dispositivo y el puerto UDP en el que escucha JMD (20777 por defecto).",
            "En tu juego EA SPORTS F1, abre los ajustes de telemetría, activa la telemetría UDP e introduce esa dirección IP y ese puerto.",
            "JMD detecta automáticamente el formato de telemetría del juego en cuanto llegan los paquetes."
          ]
        },
        {
          phase: "before",
          title: "Prepara la sesión",
          body: "Opcional, pero vale la pena. Abre Preparar sesión desde Inicio, elige circuito y coche, y repasa la pista — o cambia a la vista de sesión para planificar libres, clasificación o carrera.",
          shot: "prepare"
        },
        {
          phase: "during",
          title: "Empieza la sesión y conéctate",
          body: "Abre el Panel y sal a pista. JMD espera la telemetría y se conecta en cuanto tu juego empieza a enviarla."
        },
        {
          phase: "during",
          title: "Conduce con el panel",
          body: "Coloca tu dispositivo donde puedas leerlo de un vistazo. La leyenda integrada explica cada abreviatura del panel.",
          shot: "dashboard"
        },
        {
          phase: "during",
          title: "Deja que Jax te hable",
          body: "Elige la voz de Jax y las categorías que quieres oír en Ajustes, pestaña JAX. Durante la sesión, el botón Jax del muro de boxes te permite ajustarlas sin salir del coche."
        },
        {
          phase: "during",
          title: "Abre el muro de boxes cuando necesites más",
          body: "Toca la pestaña del muro de boxes en el panel para ver tiempos, el mapa en vivo, tu coche, trazas, reglajes y detalles de la sesión. Vuelve a tocar para regresar al panel.",
          shot: "pitWallTiming"
        },
        {
          phase: "after",
          title: "Termina la sesión",
          body: "Cuando una sesión termina, JMD lo reconoce y la guarda en el historial de sesiones. Después de una carrera te dice en qué posición terminaste y te permite corregir cómo terminó la carrera si hace falta. Si la telemetría se detiene antes de que la sesión haya terminado claramente, JMD te lo pregunta."
        },
        {
          phase: "after",
          title: "Analiza en el historial de sesiones",
          body: "Abre el historial de sesiones desde Inicio para encontrar cualquier sesión guardada. Cada análisis se adapta al tipo de sesión: ritmo para libres y clasificación, la historia completa para las carreras.",
          shot: "sessionHistory"
        },
        {
          phase: "after",
          title: "Repite tu carrera",
          body: "En carreras y sprints, abre la sesión en el historial para ver Race Replay: la torre de tiempos, las diferencias, los neumáticos y los eventos de carrera, vuelta a vuelta.",
          shot: "raceReplayLandscape"
        },
        {
          phase: "setup",
          title: "Gestiona ajustes, datos y copia de seguridad",
          body: "En Ajustes, la pestaña AJUSTES reúne tu estado de Jax Pro, el idioma y las unidades, la conexión UDP, el seguimiento de sesiones, la copia de seguridad en iCloud (copiar ahora, restaurar) y cuánto tiempo se conservan los datos de carrera. La pestaña SOPORTE tiene las demos integradas, el recorrido inicial, la IP del dispositivo, el envío de errores y la guía del panel. La pestaña LEGAL enlaza a los términos y a la política de privacidad."
        }
      ],
      troubleTitle: "Solución de problemas",
      trouble: [
        ["No se recibe telemetría", "Comprueba que la telemetría UDP esté activada en el juego, que la IP coincida con la de la pestaña AJUSTES de JMD, que el puerto coincida y que ambos dispositivos estén en la misma red."],
        ["Los datos se cortan a mitad de sesión", "Asegúrate de que el dispositivo siguió conectado al Wi-Fi, de que el modo de bajo consumo no interrumpió la app y de que la consola no cambió de red."],
        ["La IP del dispositivo cambió", "Las IP locales pueden cambiar entre sesiones. Revisa la pestaña AJUSTES de JMD y actualiza los ajustes de telemetría del juego si es necesario."],
        ["Jax no habla", "Revisa el volumen y el modo silencio del dispositivo, y asegúrate de que la voz de Jax y las categorías deseadas estén activadas en la pestaña JAX de Ajustes o con el botón Jax del muro de boxes."],
        ["No hay Race Replay para una sesión", "Race Replay está disponible para carreras y sprints captados con suficiente detalle. Libres, clasificación y contrarreloj tienen su propio análisis centrado en el ritmo."],
        ["Faltan algunos valores", "No todas las sesiones del juego envían todos los campos. JMD muestra como faltantes los datos que faltan en lugar de suponerlos."]
      ]
    },
    support: {
      title: "Soporte de Jax Max Delta",
      intro: "Ayuda de configuración, respuestas a preguntas frecuentes y una forma directa de contactarnos.",
      faqTitle: "Preguntas frecuentes",
      faq: [
        ["¿Jax Max Delta funciona en consola?", "Sí. JMD está pensado para pilotos de consola. Tu juego debe enviar telemetría UDP y tu iPhone debe estar en la misma red local que tu PlayStation, Xbox o PC."],
        ["¿Qué juegos son compatibles?", "EA SPORTS F1 24, F1 25 y F1 26, mediante la salida de telemetría UDP del juego."],
        ["¿Está disponible en Android?", "Todavía no. Jax Max Delta funciona actualmente en iPhone."],
        ["¿Jax está afiliado oficialmente con EA, F1, Codemasters, Fanatec, PlayStation o Xbox?", "No. Jax Max Delta es independiente y usa datos de telemetría de juegos compatibles cuando están disponibles."],
        ["¿Es solo un panel de telemetría?", "No. El panel en vivo es una parte. JMD también te ayuda a preparar la sesión, te da los mensajes de voz de Jax y un muro de boxes completo mientras conduces, y guarda tu historial, reglajes, trazas de vuelta y Race Replay después."],
        ["¿Por qué algunas sesiones no tienen Race Replay?", "Race Replay es para carreras y sprints captados con suficiente detalle. Libres, clasificación y contrarreloj tienen su propio análisis centrado en el ritmo."],
        ["¿Dónde se guardan mis datos?", "En tu dispositivo. El historial de sesiones, las trazas de vuelta y los reglajes viven en el almacenamiento privado de la app. Si iCloud está disponible, la app también puede respaldar tu historial y tus ligas en tu propio contenedor privado de iCloud, que nosotros no podemos leer. Consulta la política de privacidad para más detalles."],
        ["¿Qué incluyen Gratis y Jax Pro?", "Gratis incluye el Panel completo, la clasificación completa, las pestañas GAME, ME y SETUP del muro de boxes, la vista general del circuito en Preparar sesión, cada sesión guardada y en la lista con tus estadísticas, tu sesión más reciente completa, todos tus reglajes en la lista, los avisos urgentes de seguridad de Jax y tu vuelta en la línea, Consejos de carrera y la copia en iCloud. Jax Pro añade el ingeniero de carrera Jax completo, tiempos EN VIVO, las pestañas COCHE, MAP y TRACE, cada sesión anterior completa, los valores y la gestión de tus reglajes, y una preparación personalizada: análisis del circuito, Mis datos y el plan de sesión."],
        ["¿Cómo funcionan la prueba y las suscripciones?", "La app describe una prueba introductoria de 14 días en los planes mensual y anual de Jax Pro. La elegibilidad, los precios locales y la oferta exacta que muestra Apple pueden variar; revisa la hoja de compra de Apple antes de confirmar. Apple factura y renueva la suscripción salvo que la canceles en los ajustes de suscripciones de tu cuenta de Apple. Puedes restaurar compras en JMD."],
        ["¿Cómo cancelo o solicito un reembolso?", "Gestiona o cancela Jax Pro en los ajustes de suscripciones de tu cuenta de Apple. La cancelación detiene la próxima renovación, pero normalmente no revierte un cobro existente. Apple controla la facturación y los reembolsos del App Store; usa el soporte de compras de Apple para solicitar un reembolso o escribe a support@jaxmaxdelta.com para obtener ayuda con JMD."],
        ["¿Dónde puedo descargarlo?", "Jax Max Delta se prepara para su lanzamiento en el App Store. El enlace de descarga aparecerá en este sitio en cuanto esté disponible."],
        ["¿Cómo envío comentarios como tester?", "Envía el modelo del dispositivo, el juego, la consola o PC, el tipo de sesión y lo que pasó a support@jaxmaxdelta.com."]
      ],
      knownTitle: "Problemas comunes",
      known: [
        "No se reciben datos UDP porque la telemetría está desactivada en el juego.",
        "El teléfono no está en la misma red que la consola o el PC.",
        "IP, puerto o formato de telemetría UDP incorrectos en el juego.",
        "Las alertas de voz no suenan por el volumen, el modo silencio o las categorías de alertas."
      ],
      feedbackTitle: "Contacto y comentarios",
      feedbackBody: "Un buen reporte incluye tu juego, plataforma, dispositivo, versión de la app, ajustes de telemetría y una breve descripción de lo que esperabas frente a lo que pasó."
    },
    roadmap: {
      title: "Hoja de ruta",
      intro: "Lo que Jax Max Delta ofrece hoy y las direcciones que estamos explorando. Los elementos futuros no tienen fecha y pueden cambiar.",
      groups: [
        ["Disponible ahora · R1", [
          "Preparar sesión: mapa del circuito, curvas, neumáticos, reglajes y contexto de sesión",
          "Panel en vivo",
          "Mensajes de voz y coaching contextual de Jax, ajustables en plena sesión",
          "Muro de boxes: tiempos, mapa en vivo, estado del coche, trazas de vuelta, reglajes y detalles del juego y la sesión",
          "Historial de sesiones adaptado al tipo de sesión",
          "Race Replay para carreras y sprints",
          "Trazas de vuelta y comparación de vueltas",
          "Seguimiento de reglajes y biblioteca de reglajes por circuito",
          "Contexto de neumáticos, combustible y carrera",
          "Gestión de energía de F1 26",
          "Gestión de DRS, Safety Car, VSC y bandera roja",
          "Copia de seguridad privada en iCloud del historial de sesiones",
          "Consejos de carrera y demos integradas",
          "Inglés, francés y español"
        ]],
        ["Siguiente · Pulido", [
          "Mejoras guiadas por los comentarios de los primeros usuarios",
          "Más cobertura de preparación para más combinaciones de circuito y coche",
          "Más formas de comparar sesiones por circuito, reglaje y condiciones"
        ]],
        ["En estudio · Futuro", [
          "Una vista de fin de semana: libres, clasificación y carrera como una sola historia",
          "Un análisis tipo repetición para libres y clasificación",
          "Tendencias de progreso a lo largo de muchas sesiones",
          "Guía de estrategia de neumáticos más completa, según el compuesto",
          "Android",
          "Otros juegos de carreras cuando la telemetría sea fiable"
        ]]
      ]
    },
    privacy: null, terms: null, blog: null
  }
};

copy.fr.privacy = cloneLocalizedLegal("fr", copy.en.privacy);
copy.fr.terms = cloneLocalizedLegal("fr", copy.en.terms);
copy.fr.blog = cloneLocalizedBlog("fr", copy.en.blog);
copy.es.privacy = cloneLocalizedLegal("es", copy.en.privacy);
copy.es.terms = cloneLocalizedLegal("es", copy.en.terms);
copy.es.blog = cloneLocalizedBlog("es", copy.en.blog);

function cloneLocalizedLegal(lang, source) {
  if (lang === "fr" && source.title === "Privacy Policy") {
    return {
      title: "Politique de confidentialité",
      intro: "Cette politique explique comment Camilore Inc. traite les renseignements liés à Jax Max Delta, notamment la télémétrie locale, les diagnostics, les achats, le soutien et la sauvegarde iCloud privée.",
      updated: "Date d'entrée en vigueur initiale : 17 août 2026 · Dernière mise à jour : 24 octobre 2026",
      reviewNotice: "Statut de l'examen juridique : les révisions substantielles doivent être approuvées avant leur publication en production.",
      sections: privacySections("fr")
    };
  }
  if (lang === "es" && source.title === "Privacy Policy") {
    return {
      title: "Política de privacidad",
      intro: "Esta política explica cómo Camilore Inc. trata la información relacionada con Jax Max Delta, incluida la telemetría local, los diagnósticos, las compras, el soporte y la copia privada en iCloud.",
      updated: "Fecha de entrada en vigor original: 17 de agosto de 2026 · Última actualización: 24 de octubre de 2026",
      reviewNotice: "Estado de revisión legal: las revisiones sustanciales requieren aprobación antes de publicarse en producción.",
      sections: privacySections("es")
    };
  }
  if (lang === "fr") {
    return {
      title: "Conditions d'utilisation",
      intro: "Ces conditions régissent votre utilisation de Jax Max Delta et de ses fonctions gratuites et Jax Pro.",
      updated: "Dernière mise à jour : 24 octobre 2026",
      reviewNotice: "Statut de l'examen juridique : cette version élargie doit être approuvée avant sa publication en production.",
      sections: termsSections("fr")
    };
  }
  return {
    title: "Términos de uso",
    intro: "Estos términos rigen el uso de Jax Max Delta y sus funciones Gratis y Jax Pro.",
    updated: "Última actualización: 24 de octubre de 2026",
    reviewNotice: "Estado de revisión legal: este borrador ampliado requiere aprobación antes de publicarse en producción.",
    sections: termsSections("es")
  };
}

function cloneLocalizedBlog(lang, source) {
  if (lang === "fr") return {
    title: "Blogue Jax Max Delta",
    intro: "Notes pour pilotes console, ligues et pilotes qui veulent progresser avec un second ecran et un journal de course.",
    posts: {
      "second-screen-dashboard": {
        title: "Pourquoi votre cockpit de sim racing a besoin d'un muret des puits virtuel",
        date: "Article de depart",
        summary: "La vue cockpit et le volant peuvent cacher les informations les plus utiles. Un muret des puits virtuel remet donnees, alertes vocales et memoire de session au bon endroit.",
        body: [
          ["Le probleme du tableau de bord cache", "Beaucoup de pilotes console utilisent une vue cockpit, un volant ou une position d'ecran qui cache l'essence, les pneus, le delta ou les avertissements. Le resultat est simple : vous prenez des decisions avec trop peu de contexte."],
          ["Pourquoi un téléphone aide", "Un tableau de bord second ecran garde les donnees critiques visibles sans changer de camera ni ajouter du bruit visuel. Jax ajoute la couche muret des puits : donnees lisibles, alertes utiles et soutien pendant la course."],
          ["Au-dela des donnees en direct", "Le vrai gain arrive quand la session devient une partie de votre historique. Savoir ce qui s'est passe, quels pneus ont fonctionne et quel reglage etait bon donne une meilleure memoire d'equipe pour la prochaine session."]
        ]
      },
      "different-from-telemetry-app": {
        title: "Ce qui distingue Jax d'une application de telemetrie",
        date: "Article de depart",
        summary: "Jax ne se limite pas aux chiffres. Il combine tableau de bord, alertes vocales, contexte de muret des puits et carnet de course.",
        body: [
          ["La telemetrie est le point de depart", "Les donnees de telemetrie sont utiles, mais les chiffres bruts ne rendent pas un pilote plus rapide a eux seuls. Le produit doit transformer les donnees en timing, alertes, historique et decisions."],
          ["La couche ingenieur de course", "Les alertes vocales de Jax sont concues pour annoncer l'information utile pendant que vous gardez les yeux sur la piste : pneus, essence, deltas, penalites, drapeaux et evenements."],
          ["La couche carnet d'equipe", "L'historique de session aide a retenir quel reglage, compose et plan de course ont fonctionne au lieu de repartir de zero chaque week-end."]
        ]
      },
      "league-race-weekend": {
        title: "Comment preparer un week-end de course en ligue",
        date: "Article de depart",
        summary: "Utilisez vos sessions passees, notes de reglages, plans pneus et contexte meteo pour arriver mieux prepare.",
        body: [
          ["Revoir la piste", "Commencez par ce que vous savez deja : chronos, notes de reglages, comportement des pneus, essence, penalites et meteo des anciennes sessions."],
          ["Construire un plan simple", "Ayez un reglage de depart, un compose pour le premier relais, une cible d'essence et les alertes vocales voulues avant d'entrer en piste."],
          ["Capturer ce qui change", "Apres l'evenement, notez ce qui vous a surpris. En ligue, le progres vient souvent des details qu'on aurait oublies."]
        ]
      },
      "fanatec-wheel-tips": {
        title: "Conseils Fanatec pour pilotes F1 sur console",
        date: "Article de depart",
        summary: "Quelques habitudes pratiques pour les pilotes console dont le volant peut cacher le tableau de bord du jeu.",
        body: [
          ["Garder l'ecran lisible", "La position du volant, le champ de vision et la camera cockpit peuvent cacher des infos importantes. Un second ecran donne plus de liberte pour utiliser la vue que vous preferez."],
          ["Mapper ce qui compte", "Placez les actions frequentes la ou vos mains tombent naturellement : differentiel, repartition de freinage, overtake, radio et navigation."],
          ["Utiliser Jax pour la couche manquante", "Laissez le volant gerer les entrees de pilotage et laissez Jax gerer les donnees lisibles, les alertes utiles et la memoire de session."]
        ]
      }
    }
  };
  return {
    title: "Blog de Jax Max Delta",
    intro: "Notas para pilotos de consola, ligas y quienes quieren mejorar con segunda pantalla y diario de carreras.",
    posts: {
      "second-screen-dashboard": {
        title: "Por que tu cockpit de sim racing necesita un muro de pits virtual",
        date: "Articulo inicial",
        summary: "La vista cockpit y el volante pueden ocultar la informacion mas importante. Un muro de pits virtual pone datos, alertas de voz y memoria de sesiones donde sirven.",
        body: [
          ["El problema del dashboard oculto", "Muchos pilotos de consola usan vista cockpit, aro de volante o una posicion de pantalla que oculta combustible, neumaticos, delta o avisos. El resultado es simple: tomas decisiones con contexto incompleto."],
          ["Por qué ayuda un teléfono", "Un dashboard de segunda pantalla mantiene visibles los datos criticos sin cambiar camara ni llenar la vista de ruido. Jax suma la capa de muro de pits: datos legibles, alertas utiles y apoyo durante la carrera."],
          ["Mas alla de los datos en vivo", "La mayor mejora llega cuando la sesion pasa a ser parte de tu historial. Saber que paso, que neumaticos funcionaron y que setup se sintio bien crea una mejor memoria de equipo para la siguiente sesion."]
        ]
      },
      "different-from-telemetry-app": {
        title: "Que hace diferente a Jax de una app de telemetria",
        date: "Articulo inicial",
        summary: "Jax no trata solo de numeros. Combina dashboard, alertas de voz, contexto de muro de pits y diario de carreras.",
        body: [
          ["La telemetria es el punto de partida", "Los datos de telemetria son utiles, pero los numeros brutos por si solos no hacen mas rapido a un piloto. El producto debe convertir datos en timing, alertas, historial y decisiones."],
          ["La capa de ingeniero de carrera", "Las alertas de voz de Jax estan pensadas para comunicar informacion util mientras miras la pista: neumaticos, combustible, deltas, penalizaciones, banderas y eventos."],
          ["La capa de cuaderno de equipo", "El historial de sesiones ayuda a recordar que setup, compuesto y estrategia funcionaron en una pista en vez de empezar desde cero cada fin de semana."]
        ]
      },
      "league-race-weekend": {
        title: "Como preparar un fin de semana de carrera en liga",
        date: "Articulo inicial",
        summary: "Usa tus sesiones pasadas, notas de setup, plan de neumaticos y clima para llegar mejor preparado.",
        body: [
          ["Revisar la pista", "Empieza por lo que ya sabes: tiempos anteriores, notas de setup, comportamiento de neumaticos, combustible, penalizaciones y clima de sesiones pasadas."],
          ["Crear un plan simple", "Define setup inicial, compuesto para el primer stint, objetivo de combustible y alertas de voz antes de salir a pista."],
          ["Registrar lo que cambia", "Despues del evento, anota lo que te sorprendio. En ligas, mejorar suele depender de conservar detalles que normalmente olvidarias."]
        ]
      },
      "fanatec-wheel-tips": {
        title: "Consejos Fanatec para pilotos F1 de consola",
        date: "Articulo inicial",
        summary: "Habitos practicos para pilotos de consola cuyo volante puede ocultar el dashboard del juego.",
        body: [
          ["Mantener la pantalla legible", "La posicion del volante, el campo de vision y la camara cockpit pueden tapar informacion importante. Una segunda pantalla te da mas libertad para usar la vista que prefieres."],
          ["Mapear lo importante", "Pon las acciones frecuentes donde tus manos descansan naturalmente: diferencial, balance de freno, overtake, radio y navegacion."],
          ["Usar Jax para la capa faltante", "Deja que el volante maneje los inputs de conduccion y que Jax maneje datos legibles, alertas utiles y memoria de sesion."]
        ]
      }
    }
  };
}

function privacySections(lang) {
  const fr = [
    ["Responsable", "Jax Max Delta est un produit détenu et exploité par <strong>Camilore Inc.</strong> Sous réserve de la signature des documents de transfert applicables, Camilore Inc. en a assumé la propriété et l'exploitation le 1er octobre 2026."],
    ["La version courte", "Jax Max Delta n'a <strong>aucun compte utilisateur</strong>. Vous pouvez indiquer un nom facultatif que Jax utilisera; il reste sur votre appareil avec votre télémétrie, vos tours, vos sessions, vos réglages et vos préférences. Nous ne vendons pas ces renseignements et ne les utilisons pas pour la publicité. Seuls les diagnostics de plantage, le traitement des achats, les messages ou exportations que vous lancez et, si disponible, une sauvegarde dans votre propre conteneur iCloud privé quittent l'appareil."],
    ["Ce que l'app recoit de votre jeu", "Jax Max Delta ecoute sur votre reseau local la telemetrie UDP diffusee par votre jeu F1 (EA F1 24, F1 25 et F1 26). Ce trafic circule uniquement sur votre propre reseau, de votre console ou PC vers votre telephone. Il est recu par l'app et n'est jamais retransmis par elle. Il contient des donnees de course — chronos, vitesse, etat des pneus, positions, les noms que le jeu attribue aux pilotes de votre session — et aucune information vous concernant personnellement. L'app ne transmet la telemetrie ni a nous ni a qui que ce soit."],
    ["Ce qui est stocké sur votre appareil", "Le nom facultatif que Jax doit utiliser, l'historique des sessions, les noms de pilotes fournis par le jeu, les enregistrements locaux de course et les traces de tour, les réglages de voiture, vos évaluations et les préférences de l'app restent dans le stockage privé de votre appareil. Vous pouvez modifier ou supprimer votre nom, gérer la conservation des traces lourdes et supprimer une session ou toutes les sessions dans l'app."],
    ["Achats", "Les abonnements sont vendus par Apple et geres pour nous par RevenueCat, Inc. Lorsque vous vous abonnez ou restaurez un achat, Apple et RevenueCat traitent la transaction ainsi qu'un identifiant d'installation anonyme afin que l'app sache si votre abonnement est actif. Nous ne recevons jamais vos donnees de paiement — Apple gere entierement le paiement. Voir la <a href=\"https://www.apple.com/legal/privacy/\">politique de confidentialite d'Apple</a> et la <a href=\"https://www.revenuecat.com/privacy\">politique de confidentialite de RevenueCat</a>."],
    ["Diagnostics de plantage et de stabilite", "L'app utilise Google Firebase Crashlytics pour signaler les plantages et les erreurs afin que nous puissions les corriger. Un rapport de plantage contient des informations techniques — l'erreur, le chemin de code, le modele d'appareil, la version du systeme d'exploitation, la version de l'app et un identifiant d'installation anonyme. Il ne contient ni votre telemetrie, ni votre historique de sessions, ni vos reglages, ni quoi que ce soit qui vous identifie personnellement. Nous n'utilisons pas ces donnees a des fins publicitaires et elles ne sont liees a aucune identite. Voir les <a href=\"https://firebase.google.com/support/privacy\">informations de confidentialite de Firebase</a>."],
    ["Sauvegarde iCloud de votre historique de sessions", "Si iCloud est active et disponible sur votre appareil, l'app peut sauvegarder votre historique de sessions et vos donnees de ligue dans <strong>le conteneur iCloud prive de l'app</strong> (<code>iCloud.com.camilore.jaxmaxdelta</code>), a l'interieur de <strong>votre</strong> compte iCloud. C'est une fonction reellement livree, et cette politique le dit clairement. La sauvegarde contient les enregistrements de sessions et les ligues ; elle ne contient <strong>pas</strong> les fichiers de traces de tour ni de donnees de course, qui restent uniquement sur l'appareil qui les a captures. Le conteneur appartient a votre compte Apple et Apple fournit le stockage — <strong>nous n'y avons aucun acces</strong> : nous ne pouvons ni lire, ni lister, ni recuperer vos sauvegardes. L'app conserve la sauvegarde la plus recente plus jusqu'a cinq copies datees, et elimine les plus anciennes. Avant une restauration, l'app ecrit une copie de securite locale sur votre appareil afin qu'une restauration puisse etre annulee, et une restauration n'ecrase jamais une session deja presente sur l'appareil. Pour supprimer ces sauvegardes, supprimez les donnees de l'app dans iCloud via les Reglages iOS, ou supprimez l'app. Le traitement des donnees iCloud par Apple est regi par la politique de confidentialite d'Apple."],
    ["Exportations que vous lancez", "Vous pouvez exporter votre historique de sessions dans un fichier et le partager via la feuille de partage iOS (Fichiers, AirDrop, Messages, etc.). Cela ne se produit que si vous le demandez, le fichier va la ou vous l'envoyez, et il ne passe pas par nous."],
    ["Messages au support", "Si vous contactez le support, nous recevons uniquement ce que vous choisissez de nous envoyer — en general votre courriel, le modele d'appareil, la version de l'app et une description du probleme. Nous l'utilisons pour vous repondre et corriger le probleme, et pour rien d'autre."],
    ["Ce que nous ne faisons pas", "Aucun compte dans l'app, aucune inscription et aucune collecte automatique de courriel. Aucune publicité, aucun identifiant publicitaire, aucun IDFA, aucun réseau publicitaire. Aucun suivi entre apps ou entre sites et aucune analyse produit ou télémétrie comportementale envoyée vers nous. Aucune vente ni location de vos données. Aucun accès à la localisation, aux contacts, aux photos, au microphone ou à la caméra."],
    ["Bases legales (utilisateurs EEE/Royaume-Uni)", "Lorsque le RGPD s'applique, nous nous appuyons sur le <strong>contrat</strong> — traiter l'achat et le statut d'abonnement pour vous donner les fonctions que vous avez payees — et sur les <strong>interets legitimes</strong> — les diagnostics de plantage, pour eviter que l'app ne defaille sur votre appareil, mis en balance avec le fait que ces donnees sont techniques et non liees a une identite. Nous ne traitons pas de categories particulieres de donnees et nous ne prenons pas de decision automatisee produisant des effets juridiques."],
    ["Conservation", "Les donnees sur votre appareil sont conservees jusqu'a ce que vous les supprimiez, en supprimant des sessions dans l'app, en laissant votre reglage de conservation elaguer les traces, ou en supprimant l'app. Les sauvegardes iCloud restent dans votre propre conteneur jusqu'a ce que vous les supprimiez ; l'app conserve la plus recente plus cinq copies datees. Les rapports de plantage sont conserves par Firebase selon les durees de conservation publiees par Google pour Crashlytics. Les enregistrements d'achat sont conserves par Apple et RevenueCat selon leurs propres politiques."],
    ["Vos droits", "Selon l'endroit où vous vivez, notamment au Canada ou au Québec, la loi applicable peut vous donner des droits d'accès, de rectification, d'effacement, de retrait du consentement, de portabilité ou de plainte auprès d'une autorité. Ces droits dépendent des renseignements et de la loi. La plupart des données JMD sont sous votre contrôle direct dans l'app. Pour les dossiers de soutien, diagnostics ou achats, écrivez à support@jaxmaxdelta.com."],
    ["Enfants", "Jax Max Delta est classé 4+ dans l'App Store et est conçu pour les pilotes de sim racing, sans viser particulièrement les enfants. Nous ne sollicitons pas sciemment de renseignements personnels d'enfants. Si un enfant en a envoyé au soutien, contactez-nous afin que nous puissions examiner la situation."],
    ["Traitement international", "Apple, Google et RevenueCat offrent des services à l'échelle internationale et peuvent traiter des renseignements limités sur les achats ou diagnostics à l'extérieur de votre province ou pays selon leurs propres conditions et pratiques. Consultez les avis liés pour les détails actuels."],
    ["Modifications de cette politique", "Si cette politique change, nous mettrons à jour la date de dernière modification et publierons la version révisée à cette adresse. Nous ne daterons pas rétroactivement une révision."],
    ["Contact", "Camilore Inc. est responsable de Jax Max Delta. Questions de confidentialité et soutien : <a href=\"mailto:support@jaxmaxdelta.com\">support@jaxmaxdelta.com</a>. Site de l'entreprise : <a href=\"https://camilore.com\">camilore.com</a>."]
  ];
  const es = [
    ["Responsable", "Jax Max Delta es un producto propiedad de <strong>Camilore Inc.</strong> y operado por esta empresa. Sujeto a la firma de la documentación de transferencia aplicable, Camilore Inc. asumió la propiedad y operación el 1 de octubre de 2026."],
    ["La versión corta", "Jax Max Delta no tiene <strong>cuentas de usuario</strong>. Puedes indicar un nombre opcional para que Jax lo use; permanece en tu dispositivo junto con la telemetría, vueltas, sesiones, reglajes y preferencias. No vendemos esta información ni la usamos para publicidad. Solo salen del dispositivo los diagnósticos de fallos, el procesamiento de compras, los mensajes o exportaciones que tú inicias y, si está disponible, una copia en tu propio contenedor privado de iCloud."],
    ["Lo que la app recibe de tu juego", "Jax Max Delta escucha en tu red local la telemetria UDP que emite tu juego de F1 (EA F1 24, F1 25 y F1 26). Ese trafico viaja solo por tu propia red, desde tu consola o PC hasta tu telefono. La app lo recibe y nunca lo reenvia. Contiene datos de carrera — tiempos de vuelta, velocidad, estado de neumaticos, posiciones, los nombres que el juego asigna a los pilotos de tu sesion — y ninguna informacion sobre ti personalmente. La app no transmite telemetria ni a nosotros ni a nadie mas."],
    ["Lo que se guarda en tu dispositivo", "El nombre opcional que quieres que use Jax, el historial de sesiones, los nombres de pilotos que proporciona el juego, las grabaciones locales de carrera y trazas de vuelta, los reglajes, tus valoraciones y las preferencias de la app permanecen en el almacenamiento privado de tu dispositivo. Puedes cambiar o eliminar tu nombre, controlar la retención de las trazas más pesadas y borrar una sesión o todas las sesiones dentro de la app."],
    ["Compras", "Las suscripciones las vende Apple y las gestiona para nosotros RevenueCat, Inc. Cuando te suscribes o restauras una compra, Apple y RevenueCat procesan la transaccion y un identificador anonimo de instalacion para que la app sepa si tu suscripcion esta activa. Nunca recibimos tus datos de pago — Apple gestiona el pago por completo. Consulta la <a href=\"https://www.apple.com/legal/privacy/\">politica de privacidad de Apple</a> y la <a href=\"https://www.revenuecat.com/privacy\">politica de privacidad de RevenueCat</a>."],
    ["Diagnosticos de fallos y estabilidad", "La app usa Google Firebase Crashlytics para reportar fallos y errores y poder corregirlos. Un reporte de fallo contiene informacion tecnica — el error, la ruta de codigo, el modelo de dispositivo, la version del sistema operativo, la version de la app y un identificador anonimo de instalacion. No contiene tu telemetria, ni tu historial de sesiones, ni tus setups, ni nada que te identifique personalmente. No usamos estos datos para publicidad y no estan vinculados a una identidad. Consulta la <a href=\"https://firebase.google.com/support/privacy\">informacion de privacidad de Firebase</a>."],
    ["Copia de seguridad en iCloud de tu historial de sesiones", "Si tu dispositivo tiene iCloud activado y disponible, la app puede respaldar tu historial de sesiones y tus datos de liga en <strong>el contenedor privado de iCloud de la propia app</strong> (<code>iCloud.com.camilore.jaxmaxdelta</code>), dentro de <strong>tu</strong> cuenta de iCloud. Es una funcion ya publicada, y esta politica lo dice con claridad. La copia contiene registros de sesiones y ligas; <strong>no</strong> contiene archivos de trazas de vuelta ni de datos de carrera, que permanecen solo en el dispositivo que los capturo. El contenedor pertenece a tu cuenta de Apple y Apple provee el almacenamiento — <strong>nosotros no tenemos acceso</strong>: no podemos leer, listar ni recuperar tus copias. La app conserva la copia mas reciente mas hasta cinco copias fechadas, y elimina las mas antiguas. Antes de restaurar, la app escribe una copia de seguridad local en tu dispositivo para que la restauracion se pueda deshacer, y restaurar nunca sobrescribe una sesion que ya esta en el dispositivo. Para eliminar estas copias, borra los datos de la app en iCloud desde los Ajustes de iOS, o elimina la app. El tratamiento de los datos de iCloud por parte de Apple se rige por la politica de privacidad de Apple."],
    ["Exportaciones que tu inicias", "Puedes exportar tu historial de sesiones a un archivo y compartirlo mediante la hoja de comparticion de iOS (Archivos, AirDrop, Mensajes, etc.). Esto ocurre solo cuando tu lo pides, el archivo va a donde tu lo envies, y no pasa por nosotros."],
    ["Mensajes de soporte", "Si contactas con soporte, recibimos unicamente lo que eliges enviarnos — normalmente tu email, el modelo de dispositivo, la version de la app y una descripcion del problema. Lo usamos para responderte y solucionar el problema, y para nada mas."],
    ["Lo que no hacemos", "Sin cuentas dentro de la app, registro ni recogida automática de emails. Sin publicidad, identificadores publicitarios, IDFA ni redes de anuncios. Sin seguimiento entre apps o sitios ni analítica de producto o telemetría de comportamiento enviada a nosotros. Sin venta ni alquiler de tus datos. Sin acceso a ubicación, contactos, fotos, micrófono o cámara."],
    ["Bases legales (usuarios del EEE/Reino Unido)", "Cuando se aplica el RGPD, nos basamos en el <strong>contrato</strong> — tratar la compra y el estado de la suscripcion para darte las funciones que has pagado — y en el <strong>interes legitimo</strong> — los diagnosticos de fallos, para evitar que la app falle en tu dispositivo, ponderado frente al hecho de que esos datos son tecnicos y no estan vinculados a una identidad. No tratamos categorias especiales de datos y no realizamos decisiones automatizadas con efectos juridicos."],
    ["Conservacion", "Los datos en tu dispositivo se conservan hasta que los borres, ya sea eliminando sesiones en la app, dejando que tu ajuste de retencion depure las trazas, o eliminando la app. Las copias de iCloud permanecen en tu propio contenedor hasta que las borres; la app conserva la mas reciente mas cinco copias fechadas. Los reportes de fallos los conserva Firebase segun los periodos de retencion publicados por Google para Crashlytics. Los registros de compra los conservan Apple y RevenueCat segun sus propias politicas."],
    ["Tus derechos", "Según dónde vivas, incluido Canadá o Quebec, la ley aplicable puede darte derechos de acceso, corrección, eliminación, retirada del consentimiento, portabilidad o reclamación ante un regulador. Estos derechos dependen de la información y la ley. La mayor parte de los datos de JMD está bajo tu control directo en la app. Para registros de soporte, diagnósticos o compras, escribe a support@jaxmaxdelta.com."],
    ["Niños", "Jax Max Delta tiene clasificación 4+ en el App Store y está diseñado para pilotos de sim racing, sin estar dirigido específicamente a niños. No solicitamos conscientemente información personal de niños. Si un niño envió información al soporte, contáctanos para revisarla."],
    ["Procesamiento internacional", "Apple, Google y RevenueCat prestan servicios internacionalmente y pueden tratar información limitada de compras o diagnósticos fuera de tu provincia o país según sus propios términos y prácticas. Consulta los avisos enlazados para obtener detalles actuales."],
    ["Cambios en esta política", "Si esta política cambia, actualizaremos la fecha de última modificación y publicaremos la versión revisada en esta dirección. No pondremos una fecha retroactiva a una revisión."],
    ["Contacto", "Camilore Inc. es responsable de Jax Max Delta. Consultas de privacidad y soporte: <a href=\"mailto:support@jaxmaxdelta.com\">support@jaxmaxdelta.com</a>. Sitio corporativo: <a href=\"https://camilore.com\">camilore.com</a>."]
  ];
  return lang === "fr" ? fr : es;
}

function termsSections(lang) {
  const fr = [
    ["Exploitant et acceptation", "Jax Max Delta est un produit détenu et exploité par <strong>Camilore Inc.</strong> Sous réserve de la signature des documents de transfert applicables, Camilore Inc. en a assumé la propriété et l'exploitation le 1er octobre 2026. En téléchargeant ou en utilisant JMD, vous acceptez ces conditions et les conditions applicables de l'App Store."],
    ["Produit indépendant et marques", "Jax Max Delta est un compagnon de télémétrie indépendant. Il n'est ni affilié, ni commandité, ni approuvé par Formula 1, la FIA, EA, Codemasters, une écurie ou tout autre titulaire de droits mentionné. Les noms et marques appartiennent à leurs propriétaires respectifs."],
    ["Utilisation permise", "Camilore vous accorde un droit limité, personnel, non exclusif, non transférable et révocable d'utiliser JMD sur des appareils compatibles. N'utilisez pas l'app illégalement, n'en contournez pas la sécurité et respectez les règles de votre ligue, événement, plateforme et jeu."],
    ["Version gratuite et Jax Pro", "La version gratuite comprend le tableau de bord et le classement essentiels, le guidage audio de Jax, certaines vues du mur des stands et de préparation, la sauvegarde iCloud, trois sessions récentes et trois réglages suivis. Jax Pro ajoute des vues en direct, la planification et l'accès à tout l'historique et toute la bibliothèque de réglages. L'écran d'achat décrit l'offre achetée."],
    ["Abonnements et essai", "Jax Pro est offert par abonnements mensuel et annuel à renouvellement automatique. L'app décrit actuellement un essai de lancement de 14 jours pour les deux forfaits; l'admissibilité et l'offre réelle peuvent varier. La feuille d'achat Apple affiche le prix local, la période et l'essai avant confirmation."],
    ["Renouvellement, annulation, restauration et remboursements", "Apple facture votre compte et renouvelle l'abonnement sauf annulation dans les réglages d'abonnements de votre compte Apple. Utilisez Restaurer les achats dans JMD pour un achat admissible. Apple contrôle la facturation et les remboursements. Pour l'aide JMD : support@jaxmaxdelta.com."],
    ["Données après l'abonnement", "La fin de Jax Pro ne supprime pas intentionnellement vos sessions ou réglages. L'accès revient aux limites gratuites indiquées dans l'app; le renouvellement rétablit l'accès aux données admissibles encore conservées."],
    ["Télémétrie, sécurité et résultats", "JMD dépend des paquets du jeu, de l'appareil et du réseau. Les données peuvent être retardées, incomplètes ou absentes. Jax fournit des renseignements et rappels, sans garantir un résultat. Vous restez responsable de la conduite et de vos décisions. N'interagissez pas avec l'app lorsque cela est dangereux."],
    ["Propriété intellectuelle", "JMD, son logiciel, son contenu original, sa conception et la marque Jax Max Delta appartiennent à Camilore Inc. ou lui sont concédés sous licence. Les jeux, plateformes, formats, noms et marques de tiers restent la propriété de leurs titulaires."],
    ["Disponibilité et changements", "La compatibilité dépend des jeux, formats de télémétrie, réseaux, appareils, systèmes et services tiers. Camilore peut maintenir, modifier ou retirer des fonctions sous réserve du droit applicable. La feuille de route n'est pas une promesse de livraison."],
    ["Exclusion de garanties", "Dans la mesure permise par la loi, JMD est fourni « tel quel » et « selon disponibilité », sans garanties autres que celles qui ne peuvent être exclues. Camilore ne garantit pas un fonctionnement ininterrompu, une télémétrie complète ni un résultat de course."],
    ["Limitation de responsabilité", "Dans la mesure permise par la loi, Camilore Inc. n'est pas responsable des pertes indirectes, accessoires, spéciales ou consécutives, ni des pertes de données, profits ou occasions. Rien ne limite les droits du consommateur ou une responsabilité que la loi interdit d'exclure."],
    ["Droit applicable et droits du consommateur", "Ces conditions sont régies par les lois du Québec et les lois fédérales du Canada qui s'y appliquent, sans écarter les protections obligatoires dont vous bénéficiez là où vous vivez."],
    ["Contact", "Questions sur ces conditions, les abonnements ou JMD : <a href=\"mailto:support@jaxmaxdelta.com\">support@jaxmaxdelta.com</a>."]
  ];
  const es = [
    ["Operador y aceptación", "Jax Max Delta es un producto propiedad de <strong>Camilore Inc.</strong> y operado por esta empresa. Sujeto a la firma de la documentación de transferencia aplicable, Camilore Inc. asumió la propiedad y operación el 1 de octubre de 2026. Al descargar o usar JMD, aceptas estos términos y los términos aplicables del App Store."],
    ["Producto independiente y marcas", "Jax Max Delta es un compañero de telemetría independiente. No está afiliado, patrocinado ni respaldado por Formula 1, FIA, EA, Codemasters, ningún equipo ni otro titular de derechos mencionado. Los nombres y marcas pertenecen a sus respectivos propietarios."],
    ["Uso permitido", "Camilore te concede un derecho limitado, personal, no exclusivo, intransferible y revocable para usar JMD en dispositivos compatibles. No uses la app ilegalmente ni eludas su seguridad, y respeta las reglas de tu liga, evento, plataforma y juego."],
    ["Gratis y Jax Pro", "Gratis incluye el Panel y la clasificación esenciales, la guía de audio de Jax, algunas vistas del muro de boxes y de preparación, copia en iCloud, tres sesiones recientes y tres reglajes guardados. Jax Pro añade vistas en vivo, planificación y acceso a todo el historial y biblioteca de reglajes. La pantalla de compra describe la oferta que compras."],
    ["Suscripciones y prueba", "Jax Pro se ofrece mediante suscripciones mensuales y anuales con renovación automática. La app describe actualmente una prueba introductoria de 14 días en ambos planes; la elegibilidad y la oferta real pueden variar. La hoja de compra de Apple muestra el precio local, periodo y prueba antes de confirmar."],
    ["Renovación, cancelación, restauración y reembolsos", "Apple cobra a tu cuenta y renueva la suscripción salvo que la canceles en los ajustes de suscripciones de tu cuenta de Apple. Usa Restaurar compras en JMD para una compra elegible. Apple controla la facturación y los reembolsos. Para ayuda con JMD: support@jaxmaxdelta.com."],
    ["Datos después de la suscripción", "Terminar Jax Pro no elimina intencionadamente tus sesiones o reglajes. El acceso vuelve a los límites gratuitos indicados en la app; renovar restaura el acceso a los datos elegibles que sigan conservados."],
    ["Telemetría, seguridad y resultados", "JMD depende de los paquetes del juego, el dispositivo y la red. Los datos pueden llegar tarde, incompletos o no estar disponibles. Jax da información y recordatorios, sin garantizar un resultado. Tú eres responsable de la conducción y tus decisiones. No interactúes con la app cuando sea peligroso."],
    ["Propiedad intelectual", "JMD, su software, contenido original, diseño y la marca Jax Max Delta pertenecen a Camilore Inc. o se usan bajo licencia. Los juegos, plataformas, formatos, nombres y marcas de terceros siguen perteneciendo a sus respectivos titulares."],
    ["Disponibilidad y cambios", "La compatibilidad depende de juegos, formatos de telemetría, redes, dispositivos, sistemas y servicios de terceros. Camilore puede mantener, cambiar o retirar funciones, sujeto a la ley aplicable. La hoja de ruta no es una promesa de lanzamiento."],
    ["Exclusión de garantías", "En la medida permitida por la ley, JMD se ofrece «tal cual» y «según disponibilidad», sin garantías adicionales a las que no puedan excluirse. Camilore no garantiza funcionamiento ininterrumpido, telemetría completa ni ningún resultado de carrera."],
    ["Limitación de responsabilidad", "En la medida permitida por la ley, Camilore Inc. no responde por pérdidas indirectas, incidentales, especiales o consecuentes, ni por datos, beneficios u oportunidades perdidos. Nada limita derechos del consumidor o responsabilidades que la ley no permita excluir."],
    ["Ley aplicable y derechos del consumidor", "Estos términos se rigen por las leyes de Quebec y las leyes federales de Canadá aplicables allí, sin desplazar las protecciones obligatorias que correspondan donde vives."],
    ["Contacto", "Preguntas sobre estos términos, suscripciones o JMD: <a href=\"mailto:support@jaxmaxdelta.com\">support@jaxmaxdelta.com</a>."]
  ];
  return lang === "fr" ? fr : es;
}

/* ── Paths ─────────────────────────────────────────────────────────────── */

// Blog posts (/en/blog/x.html) and guides (/en/how-to/x.html) sit one folder deeper.
function isNested() {
  return ["post", "guide"].includes(document.body.dataset.page);
}

function route(lang, file = "index.html") {
  const depth = isNested() ? "../" : "";
  return `${depth}${file}`;
}

function asset(path) {
  return isNested() ? `../../assets/${path}` : `../assets/${path}`;
}

function langSwitchHref(lang, file) {
  const depth = isNested() ? "../../" : "../";
  return `${depth}${lang}/${file}`;
}

/* ── Boot ──────────────────────────────────────────────────────────────── */

function boot() {
  const root = document.getElementById("app");
  const lang = SITE.langs.includes(document.documentElement.lang) ? document.documentElement.lang : "en";
  const page = document.body.dataset.page || "home";
  const slug = document.body.dataset.slug || "";
  const t = copy[lang];
  root.innerHTML = `${header(t, lang, page)}<main id="main" tabindex="-1">${renderPage(t, lang, page, slug)}</main>${footer(t, lang)}`;
  setupMobileNav();
  setupVideos(t);
  setupHeroReel(t);
}

function renderPage(t, lang, page, slug) {
  const renderers = { home, features, how, guide, support, blog, privacy, terms, roadmap, post };
  return (renderers[page] || home)(t, lang, slug);
}

/* ── Chrome ────────────────────────────────────────────────────────────── */

function currentFile(page) {
  if (page === "post") return `blog/${document.body.dataset.slug}.html`;
  if (page === "guide") return `how-to/${document.body.dataset.slug}.html`;
  if (page === "home") return "index.html";
  if (page === "how") return "how-to.html";
  return `${page}.html`;
}

function header(t, lang, page) {
  const links = [["features", "features.html"], ["how", "how-to.html"], ["support", "support.html"]];
  const file = currentFile(page);
  return `
    <a class="skip-link" href="#main">${t.common.skip}</a>
    <header class="site-header">
      <div class="wrap nav">
        <a class="brand" href="${route(lang)}" aria-label="Jax Max Delta - ${t.nav.home}">
          <img class="brand-mark" src="${asset("brand/jmd-helmet-96.png")}" width="34" height="34" alt="">
          <span class="brand-name">JAX MA<span class="brand-x">X</span> DELTA</span>
        </a>
        <button class="mobile-nav-toggle" type="button" aria-controls="site-menu" aria-expanded="false"><span class="sr-only">${t.common.menu}</span><span aria-hidden="true"></span></button>
        <div class="nav-right" id="site-menu">
          <nav class="nav-links" aria-label="${t.common.menu}">
            ${links.map(([key, href]) => `<a href="${route(lang, href)}"${page === key || (page === "guide" && key === "how") ? ` aria-current="${page === key ? "page" : "true"}"` : ""}>${t.nav[key]}</a>`).join("")}
          </nav>
          <nav class="lang-switcher" aria-label="${t.common.language}">
            ${SITE.langs.map((code) => `<a href="${langSwitchHref(code, file)}" hreflang="${code}" lang="${code}"${code === lang ? ' aria-current="true" class="active"' : ""}>${code.toUpperCase()}</a>`).join("")}
          </nav>
        </div>
      </div>
    </header>`;
}

function setupMobileNav() {
  const headerNode = document.querySelector(".site-header");
  const toggle = document.querySelector(".mobile-nav-toggle");
  if (!headerNode || !toggle) return;
  const setOpen = (open) => {
    headerNode.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(!headerNode.classList.contains("nav-open")));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && headerNode.classList.contains("nav-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  headerNode.querySelectorAll(".nav-right a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
}

// Autoplay slot videos only while visible; respect reduced motion and user pauses.
function setupVideos(t) {
  const videos = document.querySelectorAll("video.js-autoplay");
  if (!videos.length) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sync = (video, button) => {
    const playing = !video.paused;
    button.classList.toggle("is-playing", playing);
    button.setAttribute("aria-label", playing ? t.common.videoPause : t.common.videoPlay);
  };
  const tryPlay = (video) => {
    const result = video.play();
    if (result && result.catch) result.catch(() => {});
  };
  const observer = !reduceMotion && "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting && !target.dataset.userPaused) tryPlay(target);
      else if (!isIntersecting) target.pause();
    }), { threshold: 0.4 })
    : null;
  videos.forEach((video) => {
    const button = video.parentElement.querySelector(".video-toggle");
    video.addEventListener("play", () => sync(video, button));
    video.addEventListener("pause", () => sync(video, button));
    button.addEventListener("click", () => {
      if (video.paused) {
        delete video.dataset.userPaused;
        tryPlay(video);
      } else {
        video.dataset.userPaused = "true";
        video.pause();
      }
    });
    if (observer) observer.observe(video);
  });
}

function footer(t, lang) {
  const col = (title, items) => `<nav class="footer-col" aria-label="${title}"><h2>${title}</h2>${items.map(([key, href]) => `<a href="${route(lang, href)}">${t.nav[key]}</a>`).join("")}</nav>`;
  return `
    <footer class="footer">
      <div class="wrap footer-inner">
        <div class="footer-brand">
          <a class="brand" href="${route(lang)}"><img class="brand-mark" src="${asset("brand/jmd-helmet-96.png")}" width="30" height="30" alt=""><span class="brand-name">JAX MA<span class="brand-x">X</span> DELTA</span></a>
          <p>${t.common.footerLead}</p>
          <p class="footer-parent">${t.common.parent} <a href="${SITE.corporateUrl}">camilore.com</a></p>
          <p class="footer-copyright">${t.common.copyright}</p>
        </div>
        ${col(t.common.footerProduct, [["features", "features.html"], ["how", "how-to.html"], ["roadmap", "roadmap.html"], ["blog", "blog.html"]])}
        ${col(t.common.footerHelp, [["support", "support.html"], ["privacy", "privacy.html"], ["terms", "terms.html"]])}
        <p class="footer-disclaimer">${t.common.disclaimer}</p>
      </div>
    </footer>`;
}

/* ── Shared pieces ─────────────────────────────────────────────────────── */

function storeCta(t) {
  if (SITE.store.appStoreUrl) return `<a class="btn btn-primary" href="${SITE.store.appStoreUrl}">${t.common.storeCta}</a>`;
  if (SITE.store.testFlightUrl) return `<a class="btn btn-primary" href="${SITE.store.testFlightUrl}">${t.common.testflightCta}</a>`;
  return `<span class="btn btn-status"><span class="status-dot" aria-hidden="true"></span>${t.common.storeSoon}</span>`;
}

function localized(value, lang) {
  if (!value) return "";
  return typeof value === "string" ? value : (value[lang] || value.en || "");
}

function shotFile(slot, lang) {
  return localized(slot.file, lang);
}

function shotVideo(slot, label, lang, t, w, h, poster) {
  const mp4 = localized(slot.video, lang);
  const webm = localized(slot.videoWebm, lang);
  const vw = slot.videoW || w;
  const vh = slot.videoH || h;
  return `<div class="shot-video">
      <video class="js-autoplay" muted loop playsinline preload="${poster ? "none" : "metadata"}" width="${vw}" height="${vh}"${poster ? ` poster="${poster}"` : ""} aria-label="${label}">
        ${webm ? `<source src="${asset(`video/${webm}`)}" type="video/webm">` : ""}
        <source src="${asset(`video/${mp4}`)}" type="video/mp4">
      </video>
      <button class="video-toggle" type="button" aria-label="${t.common.videoPlay}"><span class="video-icon" aria-hidden="true"></span></button>
    </div>`;
}

// A framed app screenshot, or a styled placeholder until the current capture exists.
function shot(key, t, lang, { caption = true, eager = false } = {}) {
  const slot = SHOTS[key];
  const label = t.shots[key];
  const orientation = slot.orientation;
  const file = shotFile(slot, lang);
  const w = slot.w || (orientation === "landscape" ? 1600 : 800);
  const h = slot.h || (orientation === "landscape" ? 736 : 1738);
  const hasVideo = Boolean(localized(slot.video, lang));
  const posterFile = localized(slot.poster, lang);
  const poster = posterFile ? asset(`video/${posterFile}`) : file ? asset(`screenshots/web/${file}`) : "";
  const body = hasVideo
    ? shotVideo(slot, label, lang, t, w, h, poster)
    : file
    ? `<img src="${asset(`screenshots/web/${file}`)}" width="${w}" height="${h}" alt="${label}" ${eager ? "" : 'loading="lazy" '}decoding="async">`
    : `<div class="shot-empty" role="img" aria-label="${label} - ${t.common.shotSoon}"><span class="shot-empty-title">${label}</span><span class="shot-empty-note">${t.common.shotSoon}</span></div>`;
  return `<figure class="shot shot--${orientation}${file || hasVideo ? "" : " is-empty"}"><div class="shot-frame">${body}</div>${caption ? `<figcaption>${label}</figcaption>` : ""}</figure>`;
}

function list(items, cls = "tick-list") {
  return `<ul class="${cls}">${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
}

function kicker(text) {
  return `<p class="section-kicker">${text}</p>`;
}

function pageHero(eyebrow, title, intro) {
  return `<section class="page-hero"><div class="wrap"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1>${intro ? `<p class="page-intro">${intro}</p>` : ""}</div></section>`;
}

function sectionHead(k, title, intro) {
  return `<div class="section-heading"><div>${kicker(k)}<h2>${title}</h2></div>${intro ? `<p>${intro}</p>` : ""}</div>`;
}

// The home hero: the app's main screen, then each preview clip for a few
// seconds, crossfading and cycling back to the start. A clip resumes where it
// left off on the next lap, so each cycle shows a different moment. Visitors
// who prefer reduced motion see the main screen until they press play.
const HERO_REEL = ["home", "dashboardVideo", "pitWallVideo", "vscDelta", "raceReplayLandscape"];
const HERO_REEL_SECONDS = 5;

function heroReel(t, lang) {
  const h = t.home;
  const slides = HERO_REEL.map((key, i) => {
    const slot = SHOTS[key];
    const label = t.shots[key];
    const file = shotFile(slot, lang);
    const video = localized(slot.video, lang);
    const posterFile = localized(slot.poster, lang);
    const poster = posterFile ? asset(`video/${posterFile}`) : asset(`screenshots/web/${file}`);
    const media = video
      ? `<video muted loop playsinline preload="none" poster="${poster}" width="${slot.videoW}" height="${slot.videoH}" aria-label="${label}"><source src="${asset(`video/${video}`)}" type="video/mp4"></video>`
      : `<img src="${asset(`screenshots/web/${file}`)}" width="1600" height="736" alt="${label}" decoding="async" fetchpriority="high">`;
    return `<li class="reel-slide${i === 0 ? " is-active" : ""}" data-label="${label}"${i ? ' aria-hidden="true"' : ""}>${media}</li>`;
  }).join("");
  const dots = HERO_REEL.map((key, i) =>
    `<button class="reel-dot" type="button" aria-label="${t.shots[key]}"${i === 0 ? ' aria-current="true"' : ""}><span aria-hidden="true"></span></button>`).join("");
  return `
    <div class="hero-reel" role="region" aria-roledescription="carousel" aria-label="${h.reelLabel}">
      <div class="reel-stage">
        <ul class="reel-frame">${slides}</ul>
        <button class="video-toggle" type="button" aria-label="${h.reelPlay}"><span class="video-icon" aria-hidden="true"></span></button>
      </div>
      <div class="reel-bar">
        <p class="reel-caption">${t.shots[HERO_REEL[0]]}</p>
        <div class="reel-dots">${dots}</div>
      </div>
    </div>`;
}

// Cycles the home hero reel; pauses off-screen, in a hidden tab, and on request.
function setupHeroReel(t) {
  const reel = document.querySelector(".hero-reel");
  if (!reel) return;
  const slides = [...reel.querySelectorAll(".reel-slide")];
  const dots = [...reel.querySelectorAll(".reel-dot")];
  const caption = reel.querySelector(".reel-caption");
  const toggle = reel.querySelector(".video-toggle");
  let index = 0;
  let timer = null;
  let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let onScreen = true;
  const running = () => !paused && onScreen && !document.hidden;
  const videoAt = (i) => slides[i].querySelector("video");
  const play = (video) => {
    const result = video.play();
    if (result && result.catch) result.catch(() => {});
  };
  // Warm up the next clip while the current slide is showing.
  const prepare = (i) => {
    const video = videoAt(i);
    if (video && video.preload === "none") { video.preload = "auto"; video.load(); }
  };
  const schedule = () => {
    clearTimeout(timer);
    if (running()) timer = setTimeout(() => show(index + 1), HERO_REEL_SECONDS * 1000);
  };
  const syncMedia = () => {
    slides.forEach((slide, i) => {
      const video = videoAt(i);
      if (!video) return;
      if (i === index && running()) play(video);
      else video.pause();
    });
  };
  const syncToggle = () => {
    toggle.classList.toggle("is-playing", !paused);
    toggle.setAttribute("aria-label", paused ? t.home.reelPlay : t.home.reelPause);
  };
  function show(i) {
    slides[index].classList.remove("is-active");
    slides[index].setAttribute("aria-hidden", "true");
    dots[index].removeAttribute("aria-current");
    index = (i + slides.length) % slides.length;
    slides[index].classList.add("is-active");
    slides[index].removeAttribute("aria-hidden");
    dots[index].setAttribute("aria-current", "true");
    caption.textContent = slides[index].dataset.label;
    prepare(index);
    prepare((index + 1) % slides.length);
    syncMedia();
    schedule();
  }
  const resume = () => { syncMedia(); schedule(); };
  toggle.addEventListener("click", () => {
    paused = !paused;
    syncToggle();
    resume();
  });
  dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));
  document.addEventListener("visibilitychange", resume);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      resume();
    }, { threshold: 0.25 }).observe(reel);
  }
  syncToggle();
  if (!paused) prepare(1);
  schedule();
}

/* ── Home ──────────────────────────────────────────────────────────────── */

function home(t, lang) {
  const h = t.home;
  const featuresHref = route(lang, "features.html");
  return `
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${t.common.eyebrow}</p>
          <h1>${h.titleLines.map((line) => `<span>${line}</span>`).join("")}</h1>
          <p class="hero-lead">${h.lead}</p>
          <div class="cta-row">
            ${storeCta(t)}
            <a class="btn btn-secondary" href="${featuresHref}">${t.common.ctaFeatures}</a>
          </div>
        </div>
        <div class="hero-visual">
          ${heroReel(t, lang)}
          <ol class="phase-rail" aria-hidden="true">${h.phases.map(([tag]) => `<li>${tag}</li>`).join("")}</ol>
        </div>
      </div>
      <div class="wrap"><ul class="proof-strip">${h.proof.map((p) => `<li>${p}</li>`).join("")}</ul></div>
    </section>

    <section class="section" id="phases">
      <div class="wrap">
        ${sectionHead(h.phasesKicker, h.phasesTitle, h.phasesIntro)}
        <ol class="phase-grid">
          ${h.phases.map(([tag, title, body, href], i) => `
            <li class="phase-card">
              <span class="phase-num">0${i + 1}</span>
              <p class="phase-tag">${tag}</p>
              <h3><a href="${href}">${title}</a></h3>
              <p>${body}</p>
            </li>`).join("")}
        </ol>
      </div>
    </section>

    <section class="section band" id="prepare">
      <div class="wrap split split--wide">
        <div>
          ${kicker(h.prepare.kicker)}
          <h2>${h.prepare.title}</h2>
          <p class="lead">${h.prepare.body}</p>
          ${list(h.prepare.items)}
          <p class="fine-note">${h.prepare.note}</p>
        </div>
        ${shot("prepare", t, lang)}
      </div>
    </section>

    <section class="section" id="race">
      <div class="wrap">
        <div class="split split--wide">
          <div>
            ${kicker(h.race.kicker)}
            <h2>${h.race.title}</h2>
            <p class="lead">${h.race.body}</p>
            ${list(h.race.items)}
          </div>
          ${shot("dashboardVideo", t, lang)}
        </div>
        <div class="jax-panel">
          <div>
            ${kicker(h.race.jaxKicker)}
            <h3>${h.race.jaxTitle}</h3>
            <p>${h.race.jaxBody}</p>
          </div>
          <div>
            <ul class="chip-list">${h.race.jaxItems.map((x) => `<li>${x}</li>`).join("")}</ul>
            <p class="fine-note">${h.race.jaxNote}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section band" id="pit-wall">
      <div class="wrap">
        <div class="split">
          <div>
            ${kicker(h.pitWall.kicker)}
            <h2>${h.pitWall.title}</h2>
            <p class="lead">${h.pitWall.body}</p>
          </div>
          ${list(h.pitWall.items)}
        </div>
        <div class="shot-row shot-row--3">
          ${shot("pitWallTiming", t, lang)}${shot("pitWallMap", t, lang)}${shot("pitWallCar", t, lang)}
        </div>
      </div>
    </section>

    <section class="section replay" id="review">
      <div class="wrap">
        <div class="replay-head">
          ${kicker(h.replay.kicker)}
          <h2>${h.replay.title}</h2>
          <p class="lead">${h.replay.body}</p>
          <p class="badge">${h.replay.badge}</p>
        </div>
        <div class="replay-stage replay-stage--single">
          ${shot("raceReplayLandscape", t, lang)}
        </div>
        <div class="replay-detail">
          ${list(h.replay.items, "tick-list tick-list--2col")}
          <div>
            <p class="notice">${h.replay.note}</p>
            <a class="text-link" href="${featuresHref}#race-replay">${t.common.ctaReplay} →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="history">
      <div class="wrap split split--wide">
        <div>
          ${kicker(h.history.kicker)}
          <h2>${h.history.title}</h2>
          <p class="lead">${h.history.body}</p>
          ${list(h.history.items)}
          <p class="fine-note">${h.history.note}</p>
        </div>
        <div class="shot-stack">${shot("sessionHistory", t, lang)}${shot("raceResults", t, lang)}</div>
      </div>
    </section>

    <section class="section band" id="privacy">
      <div class="wrap">
        ${sectionHead(h.privacy.kicker, h.privacy.title, h.privacy.body)}
        <div class="grid-4">
          ${h.privacy.points.map(([title, body]) => `<article class="card"><h3>${title}</h3><p>${body}</p></article>`).join("")}
        </div>
        <p class="section-link"><a class="text-link" href="${route(lang, "privacy.html")}">${t.common.ctaPrivacy} →</a></p>
      </div>
    </section>

    <section class="section" id="platforms">
      <div class="wrap split">
        <div>
          ${kicker(h.platforms.kicker)}
          <h2>${h.platforms.title}</h2>
          <p class="lead">${h.platforms.body}</p>
        </div>
        <div class="platform-groups">
          ${h.platforms.groups.map(([label, items]) => `<div class="platform-group"><h3>${label}</h3><ul class="chip-list">${items.map((x) => `<li>${x}</li>`).join("")}</ul></div>`).join("")}
          <p class="fine-note">${h.platforms.note}</p>
        </div>
      </div>
    </section>

    <section class="section" id="availability">
      <div class="wrap">
        <div class="cta-panel">
          ${kicker(h.availability.kicker)}
          <h2>${SITE.store.appStoreUrl ? h.availability.liveTitle : h.availability.soonTitle}</h2>
          <p class="lead">${h.availability.body}</p>
          <div class="cta-row">
            ${SITE.store.appStoreUrl || SITE.store.testFlightUrl ? storeCta(t) : ""}
            <a class="btn btn-secondary" href="${route(lang, "how-to.html")}">${t.common.ctaHow}</a>
            <a class="btn btn-secondary" href="mailto:${SITE.contact}">${t.common.ctaSupport}</a>
          </div>
        </div>
      </div>
    </section>`;
}

/* ── Features ──────────────────────────────────────────────────────────── */

function features(t, lang) {
  const f = t.features;
  return `
    ${pageHero(t.common.eyebrow, f.title, f.intro)}
    <nav class="wrap jump-nav" aria-label="${f.title}">
      ${f.groups.map((g) => `<a href="#${g.id}">${g.title}</a>`).join("")}
    </nav>
    ${f.groups.map((g, i) => featureGroup(g, t, lang, i)).join("")}
    <section class="section band">
      <div class="wrap">
        ${sectionHead(t.common.available, f.alsoTitle, "")}
        <div class="grid-4">${f.also.map(([title, body]) => `<article class="card"><h3>${title}</h3><p>${body}</p></article>`).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        ${sectionHead(f.futureKicker, f.futureTitle, f.futureIntro)}
        <div class="grid-4">${f.future.map(([title, body]) => `<article class="card card--future"><h3>${title}</h3><p>${body}</p></article>`).join("")}</div>
        <p class="section-link"><a class="text-link" href="${route(lang, "roadmap.html")}">${t.nav.roadmap} →</a></p>
      </div>
    </section>`;
}

function featureGroup(g, t, lang, index) {
  const shots = g.shots || [];
  const pair = shots.length === 2 && shots.every((key) => SHOTS[key].orientation === "landscape");
  const media = shots.length
    ? `<div class="feat-media feat-media--${pair ? "pair" : shots.length}">${shots.map((key) => shot(key, t, lang)).join("")}</div>`
    : "";
  const wide = shots.length > 1 || (shots.length === 1 && SHOTS[shots[0]].orientation === "landscape");
  return `
    <section class="feat-group${index % 2 ? " band" : ""}" id="${g.id}">
      <div class="wrap${media ? ` feat-split${wide ? " feat-split--stack" : ""}` : " feat-solo"}">
        <div class="feat-content">
          <p class="feat-meta"><span class="phase-tag">${g.phase}</span><span class="shipped">${t.common.available}</span></p>
          <h2>${g.title}</h2>
          <p class="lead">${g.body}</p>
          ${list(g.items, `tick-list${media && !wide ? "" : " tick-list--2col"}`)}
          ${g.note ? `<p class="fine-note">${g.note}</p>` : ""}
          ${g.link ? `<p><a class="text-link" href="${route(lang, g.link[0])}">${g.link[1]} →</a></p>` : ""}
        </div>
        ${media}
      </div>
    </section>`;
}

/* ── How it works ──────────────────────────────────────────────────────── */

// The guide each How It Works step links to, by step position. Parallel to
// copy.<lang>.how.steps, which has the same order in every language.
const STEP_GUIDES = [null, null, "prepare-for-session", null, "dashboard", "jax", "pit-wall", null, "session-history", "session-history", null];
// Screenshots for steps whose copy names none, by the same step position.
const STEP_SHOTS = ["home", "settingsSetup", null, null, null, "quickJax", null, null, null, null, "settingsSupport"];

// Guide copy lives in assets/guides.js, loaded only on How It Works and guide pages.
function guideCopy(lang) {
  return typeof GUIDES === "undefined" ? null : GUIDES[lang];
}

function guideCards(g, lang, slugs) {
  return `<div class="guide-grid">${slugs.map((slug) => {
    const item = g.items[slug];
    return `<a class="guide-card" href="${route(lang, `how-to/${slug}.html`)}"><span class="guide-card-title">${item.title}</span><span class="guide-card-summary">${item.summary}</span><span class="guide-card-cta" aria-hidden="true">${g.readGuide} →</span></a>`;
  }).join("")}</div>`;
}

function how(t, lang) {
  const h = t.how;
  const g = guideCopy(lang);
  return `
    ${pageHero(t.common.eyebrow, h.title, h.intro)}
    ${g ? `<section class="section section--tight band" id="guides">
      <div class="wrap">
        ${sectionHead(g.kicker, g.title, g.intro)}
        ${guideCards(g, lang, GUIDE_ORDER)}
      </div>
    </section>` : ""}
    <section class="section section--tight">
      <div class="wrap">
        <ol class="how-steps">
          ${h.steps.map((step, i) => ({ ...step, shot: step.shot || STEP_SHOTS[i] })).map((step, i) => `
            <li class="how-step${step.shot ? " has-shot" : ""}">
              <div class="how-step-text">
                <p class="feat-meta"><span class="step-num">${String(i + 1).padStart(2, "0")}</span><span class="phase-tag">${h.phaseLabels[step.phase]}</span></p>
                <h2>${step.title}</h2>
                <p>${step.body}</p>
                ${step.list ? `<ol class="sub-steps">${step.list.map((x) => `<li>${x}</li>`).join("")}</ol>` : ""}
                ${g && STEP_GUIDES[i] ? `<p class="step-guide"><a class="text-link" href="${route(lang, `how-to/${STEP_GUIDES[i]}.html`)}">${g.readGuide}: ${g.items[STEP_GUIDES[i]].title} →</a></p>` : ""}
                ${i === 0 ? `<div class="cta-row cta-row--tight">${storeCta(t)}</div>` : ""}
              </div>
              ${step.shot ? shot(step.shot, t, lang) : ""}
            </li>`).join("")}
        </ol>
      </div>
    </section>
    <section class="section band">
      <div class="wrap">
        ${sectionHead(t.nav.support, h.troubleTitle, "")}
        <div class="grid-3">${h.trouble.map(([title, body]) => `<article class="card"><h3>${title}</h3><p>${body}</p></article>`).join("")}</div>
        <p class="section-link"><a class="text-link" href="${route(lang, "support.html")}">${t.nav.support} →</a></p>
      </div>
    </section>`;
}

/* ── Guides (How It Works subpages) ────────────────────────────────────── */

function guideSection(sec, t, lang, index) {
  const keys = sec.shots || (sec.shot ? [sec.shot] : []);
  const media = keys.length
    ? `<div class="guide-media${keys.length > 1 ? " guide-media--pair" : ""}">${keys.map((key) => shot(key, t, lang)).join("")}</div>`
    : "";
  return `
    <section class="section guide-section${index % 2 ? " band" : ""}">
      <div class="wrap">
        <div class="guide-text">
          <h2>${sec.h}</h2>
          ${(sec.p || []).map((x) => `<p>${x}</p>`).join("")}
          ${sec.steps ? `<ol class="sub-steps">${sec.steps.map((x) => `<li>${x}</li>`).join("")}</ol>` : ""}
          ${sec.list ? list(sec.list) : ""}
          ${sec.note ? `<p class="fine-note">${sec.note}</p>` : ""}
        </div>
        ${media}
      </div>
    </section>`;
}

function guideAccess(g, item, lang, slug) {
  const link = slug === "free-and-pro" ? "" : `<p class="section-link"><a class="text-link" href="${route(lang, "how-to/free-and-pro.html")}">${g.accessLink} →</a></p>`;
  if (item.allFree) {
    return `<div class="guide-access"><h2>${g.accessTitle}</h2><p class="lead">${g.allFreeText}</p>${link}</div>`;
  }
  if (!item.access) return "";
  return `
    <div class="guide-access">
      <h2>${g.accessTitle}</h2>
      <div class="grid-2">
        <article class="card"><h3>${g.freeLabel}</h3>${list(item.access.free)}</article>
        <article class="card card--pro"><h3>${g.proLabel}</h3>${list(item.access.pro)}</article>
      </div>
      ${item.access.note ? `<p class="fine-note">${item.access.note}</p>` : ""}
      ${link}
    </div>`;
}

function guide(t, lang, slug) {
  const g = guideCopy(lang);
  if (!g) return "";
  const key = g.items[slug] ? slug : GUIDE_ORDER[0];
  const item = g.items[key];
  const related = (item.related || []).filter((s) => g.items[s]);
  return `
    ${pageHero(g.kicker, item.title, item.summary)}
    <nav class="wrap breadcrumb" aria-label="${g.kicker}"><a class="text-link" href="${route(lang, "how-to.html")}">← ${g.back}</a></nav>
    ${item.sections.map((sec, i) => guideSection(sec, t, lang, i)).join("")}
    <section class="section${item.sections.length % 2 ? " band" : ""}">
      <div class="wrap">
        ${guideAccess(g, item, lang, key)}
        ${related.length ? `<div class="guide-related"><h2>${g.relatedTitle}</h2>${guideCards(g, lang, related)}</div>` : ""}
        <p class="section-link"><a class="text-link" href="${route(lang, "how-to.html")}">← ${g.back}</a></p>
      </div>
    </section>`;
}

/* ── Other pages ───────────────────────────────────────────────────────── */

function support(t, lang) {
  const s = t.support;
  return `
    ${pageHero(t.common.eyebrow, s.title, s.intro)}
    <section class="section section--tight">
      <div class="wrap page-grid">
        <div>
          <h2 class="block-title">${s.faqTitle}</h2>
          <div class="faq-list">${s.faq.map(([q, a]) => `<details class="faq-item"><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>
        </div>
        <aside class="panel">
          <h2>${s.feedbackTitle}</h2>
          <p>${s.feedbackBody}</p>
          <p><a class="text-link" href="mailto:${SITE.contact}">${SITE.contact}</a></p>
          <a class="btn btn-primary" href="mailto:${SITE.contact}">${t.common.ctaSupport}</a>
          <h2>${s.knownTitle}</h2>
          ${list(s.known)}
          <p><a class="text-link" href="${route(lang, "how-to.html")}">${t.nav.how}</a> · <a class="text-link" href="${route(lang, "privacy.html")}">${t.nav.privacy}</a></p>
        </aside>
      </div>
    </section>`;
}

function blog(t, lang) {
  return `${pageHero(t.common.eyebrow, t.blog.title, t.blog.intro)}<section class="section section--tight"><div class="wrap grid-2">${SITE.posts.map((slug) => postCard(t, lang, slug)).join("")}</div></section>`;
}

function postCard(t, lang, slug) {
  const p = t.blog.posts[slug];
  return `<article class="post-card"><p class="post-meta">${p.date}</p><h2>${p.title}</h2><p>${p.summary}</p><a class="btn btn-secondary" href="${route(lang, `blog/${slug}.html`)}">${t.common.readPost}<span class="sr-only">: ${p.title}</span></a></article>`;
}

function post(t, lang, slug) {
  const p = t.blog.posts[slug] || t.blog.posts[SITE.posts[0]];
  return `${pageHero(t.blog.title, p.title, p.summary)}<section class="section section--tight"><div class="wrap page-grid"><article class="panel prose"><p class="post-meta">${p.date}</p>${p.body.map(([h, b]) => `<h2>${h}</h2><p>${b}</p>`).join("")}</article><aside class="panel"><h2>${t.blog.title}</h2>${SITE.posts.filter((s) => s !== slug).map((s) => `<p><a class="text-link" href="${s}.html">${t.blog.posts[s].title}</a></p>`).join("")}<a class="btn btn-secondary" href="../blog.html">${t.nav.blog}</a></aside></div></section>`;
}

function privacy(t) {
  return legalPage(t.common.eyebrow, t.privacy);
}

function terms(t) {
  return legalPage(t.common.eyebrow, t.terms);
}

function legalPage(eyebrow, data) {
  return `${pageHero(eyebrow, data.title, data.intro)}<section class="section section--tight"><div class="wrap"><article class="panel legal">${data.reviewNotice ? `<p class="legal-review" role="note">${data.reviewNotice}</p>` : ""}${data.updated ? `<p class="post-meta">${data.updated}</p>` : ""}${data.sections.map(([h, b]) => `<h2>${h}</h2><p>${b}</p>`).join("")}</article></div></section>`;
}

function roadmap(t) {
  const r = t.roadmap;
  return `${pageHero(t.common.eyebrow, r.title, r.intro)}<section class="section section--tight"><div class="wrap timeline">${r.groups.map(([name, items], i) => `<article class="timeline-item${i === 0 ? " is-current" : ""}"><h2 class="timeline-tag">${name}</h2>${list(items, i === 0 ? "tick-list tick-list--2col" : "tick-list")}</article>`).join("")}</div></section>`;
}

document.addEventListener("DOMContentLoaded", boot);
