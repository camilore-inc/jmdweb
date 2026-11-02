/*
 * Jax Max Delta website — How It Works guides.
 *
 * Copy for the guide pages under /en|fr|es/how-to/<slug>.html and the guide
 * cards on the How It Works page. Loaded before site.js on those pages only.
 *
 * Every statement here was checked against the app (JaxMaxDelta repository:
 * docs/product/screens-and-ux.md, docs/product/paywall-and-entitlements.md,
 * the ARB string files and lib/ui). Keep it that way: if the app changes,
 * change the guide. English is the source; keep fr/es in step.
 *
 * Section fields: h (heading), p (paragraphs), steps (numbered), list
 * (bullets), shot / shots (SHOTS keys from site.js), note (small print).
 * `access` lists what is Free and what is Jax Pro; `allFree` marks a guide
 * whose subject is entirely free.
 */

const GUIDE_ORDER = [
  "dashboard",
  "pit-wall",
  "traces",
  "prepare-for-session",
  "session-history",
  "leagues-and-seasons",
  "setups",
  "racing-tips",
  "jax",
  "free-and-pro"
];

const GUIDES = {
  en: {
    kicker: "How it works",
    title: "Guides, screen by screen",
    intro: "Each guide explains one part of the app: what you see, what to tap, and what is free or part of Jax Pro.",
    readGuide: "Read the guide",
    back: "Back to How It Works",
    accessTitle: "Free and Jax Pro",
    freeLabel: "Free",
    proLabel: "Jax Pro",
    allFreeText: "Everything in this guide is free. No subscription is needed.",
    accessLink: "Compare everything that is free and in Jax Pro",
    relatedTitle: "Related guides",
    items: {
      dashboard: {
        title: "The live Dashboard",
        summary: "Read the Dashboard at a glance, open the full-screen live trace with one tap, and reach the Pit Wall from the bar on the right.",
        sections: [
          {
            h: "Your race at a glance",
            p: [
              "Open the Dashboard from the Home screen. It turns to landscape and waits for your game's telemetry, then fills in as soon as packets arrive.",
              "Everything you need while driving stays on one screen, with nothing to scroll and no menus to open."
            ],
            list: [
              "<strong>Top bar</strong>: your position, the lap counter with the number of cars still running in brackets, the shift lights, and the rain forecast for 5, 15 and 30 minutes.",
              "<strong>Second row</strong>: the gap to the car ahead and the car behind, with your battery (ERS) level and mode between them. Gaps stay masked during the opening lap so they never mislead you.",
              "<strong>Left</strong>: brake bias, differential, the four tyres (temperature and wear, with the compound in the middle), then engine, brake, air and track temperatures.",
              "<strong>Centre</strong>: the flag, your live delta, your gear and your speed.",
              "<strong>Right</strong>: pit window and fuel, wing and damage, then NOW, LAST, BEST and OVERALL lap times and your three sectors.",
              "<strong>Bottom bar</strong>: track, session, session clock, penalties and the time of day."
            ],
            shot: "dashboardVideo"
          },
          {
            h: "Sector colours",
            p: ["Each sector box is judged on its own once you complete that sector."],
            list: [
              "<strong>Purple</strong>: the fastest sector of the session, by anyone.",
              "<strong>Green</strong>: your own best sector.",
              "<strong>Yellow</strong>: completed, but slower than your best.",
              "<strong>Grey</strong>: still running, or nothing to compare yet."
            ]
          },
          {
            h: "One tap for the full-screen live trace",
            p: [
              "Tap the centre of the Dashboard (the flag, delta, gear and speed column) to open the live trace full screen. It draws your throttle, brake and steering as you drive.",
              "Tap anywhere on the trace to close it and return to the Dashboard. Steering follows the app's convention: a left turn moves the line up, a right turn moves it down."
            ]
          },
          {
            h: "Tap the bar on the right for the Pit Wall",
            p: [
              "A thin <strong>PIT WALL</strong> bar runs down the right edge of the Dashboard. Tap it and the Pit Wall slides in over the Dashboard, using the same live session.",
              "To come back, tap the <strong>DASHBOARD</strong> bar on the Pit Wall's left edge, or its back arrow. Both directions are taps; there is no swipe to trigger by accident.",
              "In practice and qualifying, the Pit Wall also opens by itself while your car sits in the pit box."
            ],
            shot: "pitWallTiming"
          },
          {
            h: "Abbreviations and overlays",
            p: [
              "Tap the rain forecast in the top bar to open the dashboard legend, which explains every abbreviation (BB, DIFF, PEN, SC, VSC, ERS and more). The same <strong>Dashboard Guide</strong> is in Settings → SUPPORT.",
              "Under a Virtual Safety Car or Safety Car, a large delta overlay tells you whether you are keeping the required delta. Red flags and race-control phases get their own clear overlays."
            ],
            shot: "vscDelta"
          },
          {
            h: "Qualifying and practice",
            p: ["The same layout works in every session type. In qualifying, the lap times and sector colours become the heart of the screen."],
            shot: "qualifying"
          }
        ],
        allFree: true,
        related: ["pit-wall", "traces", "jax"]
      },

      "pit-wall": {
        title: "The Pit Wall",
        summary: "Timing, your laps, car health, the live map, traces, setups and game settings, tab by tab.",
        sections: [
          {
            h: "Two ways in",
            p: [
              "From the Dashboard, tap the <strong>PIT WALL</strong> bar on the right edge. The Pit Wall slides in over the Dashboard; tap the <strong>DASHBOARD</strong> bar or the back arrow to return.",
              "From the Home screen, open <strong>Pit Wall</strong> directly. This is handy on a second device, for a friend acting as your engineer, or when you only want timing. Use the back arrow to leave."
            ],
            shot: "pitWallVideo"
          },
          {
            h: "The header",
            p: ["The header always shows the track, air and track temperatures, the rain forecast, the number of cars on track and the session clock."],
            list: [
              "<strong>Jax</strong> opens Quick Jax: switch <strong>Jax Audio Guidance</strong> on or off and choose the message categories without leaving the session.",
              "<strong>Past</strong> opens Session History, already filtered to your current game and car. A <strong>RETURN TO PIT WALL</strong> button brings you back."
            ],
            shot: "pitWallHeader"
          },
          {
            h: "The tabs",
            list: [
              "<strong>TIMING</strong>: the whole field. Switch between <strong>CLASSIFICATION</strong> (the session standing) and <strong>LIVE</strong> (the lap in progress) at the top. Your row is highlighted.",
              "<strong>ME</strong>: your own lap-by-lap table: position, lap time, sectors, tyre and setup for every lap.",
              "<strong>CAR</strong>: car health: a top-down car coloured by damage and temperature, tyre and brake temperatures, wear and damage at each corner, power-unit heat and damage, and DRS/ERS faults.",
              "<strong>MAP</strong>: the live track map with every car in team colours and the sectors drawn on the circuit.",
              "<strong>TRACE</strong>: your throttle, brake, steering and speed for a lap, with a second lap to compare against. See the traces guide.",
              "<strong>SETUP</strong>: the setups you used this session, with a link to your full setup library.",
              "<strong>GAME</strong>: the session's game settings."
            ],
            shots: ["pitWallMap", "pitWallCar"]
          },
          {
            h: "Full screen map and trace",
            p: ["MAP and TRACE each carry an expand control in their top-right corner. Tap it to fill the screen with a live view, then use the close control to return to the tab you were on."]
          },
          {
            h: "When a new session starts",
            p: ["If the game moves on to a new session while you're on the Pit Wall, JMD tells you the previous session ended and was saved, and starts following the new one. Tap OK."]
          }
        ],
        access: {
          free: ["TIMING: the full CLASSIFICATION, every driver", "GAME: the session's game settings", "ME: your laps and stints", "SETUP: your setups this session, by name"],
          pro: ["TIMING: LIVE", "CAR", "MAP", "TRACE, with two-lap comparison", "SETUP: the setup values"],
          note: "A locked tab names the feature and what Jax Pro adds, and opens the subscription screen when tapped. The built-in demos show every tab in full."
        },
        related: ["dashboard", "traces", "free-and-pro"]
      },

      traces: {
        title: "Expand, use and compare traces",
        summary: "Pick laps, compare a reference against another lap, zoom and pan, and go full screen, live on the Pit Wall or later in Session History.",
        sections: [
          {
            h: "Where traces live",
            list: [
              "<strong>Pit Wall → TRACE</strong>, live. It opens on your latest valid lap and stays blank until you complete a full lap.",
              "<strong>Session History → a session → TRACE</strong>, after the session. It opens on your best valid lap. Saved traces read the same after a restart, and a new live session never disturbs a review you have open.",
              "The <strong>Dashboard</strong> has its own full-screen live trace: one tap on the centre of the screen (see the Dashboard guide)."
            ],
            p: ["Both TRACE views share the same chart, gestures and lap chips, so what you learn in one works in the other."],
            shot: "lapTrace"
          },
          {
            h: "Pick and compare laps",
            steps: [
              "The lap chips along the top show each lap's number and time. A ★ marks the session's best lap, and a no-entry icon marks an invalid lap.",
              "Tap a chip to show that lap. The first lap you pick is tagged <strong>REF</strong> (the reference).",
              "Tap a second chip to compare. It's tagged <strong>CMP</strong>. The reference is drawn faded and the comparison bright, so you can see where the lines part.",
              "Under the chart you get the lap-time difference and the difference in each sector.",
              "Tap <strong>ANALYSIS</strong> for a list of the measured differences between the two laps.",
              "Pick a third lap and it replaces the oldest of the two. Tap a selected chip again to clear it."
            ],
            note: "In-laps, out-laps and an unfinished last lap appear in the list, marked as partial, but they're never offered as a reference or comparison lap."
          },
          {
            h: "Choose what to draw",
            p: [
              "The toggles under the chart (SPEED, GEAR, DRS, ERS) add or hide those lines. A channel the game didn't send is not drawn, and its toggle says it was not recorded.",
              "The sidebar beside the chart shows the reference lap's time, sectors, tyre and setup, and the comparison lap's time. On a phone held upright, the same details move to a band above the chart."
            ]
          },
          {
            h: "Zoom and pan",
            list: [
              "<strong>Double tap</strong> zooms in step by step to half, a quarter and an eighth of the lap. The fourth double tap returns to the full lap.",
              "<strong>Pinch</strong> to zoom smoothly, down to a 25-metre window.",
              "<strong>Drag with one finger</strong> to slide along the lap. It stops exactly at the start and end of the lap.",
              "<strong>RESET ZOOM</strong> (or the floating reset button in portrait) takes you back to the whole lap."
            ]
          },
          {
            h: "Expand to full screen",
            p: ["Tap the expand control in the chart's top-right corner. The trace fills the screen with its legend and controls; on an iPhone it prefers landscape. Tap the close control to return exactly where you were."]
          },
          {
            h: "Energy and pace (F1 26)",
            p: ["For F1 26 sessions that recorded Active Aero or ERS energy data, Session History's TRACE adds an <strong>ENERGY &amp; PACE</strong> row. It opens up to four findings from your comparable laps, each with what happened, why it matters and what to try next."]
          }
        ],
        access: {
          free: ["The Dashboard's full-screen live trace", "Session History TRACE for your most recent session"],
          pro: ["Pit Wall TRACE, live, with two-lap comparison", "TRACE for every earlier session"]
        },
        related: ["pit-wall", "session-history", "dashboard"]
      },

      "prepare-for-session": {
        title: "Prepare for Session",
        summary: "Learn the circuit with About, then build a plan for practice, qualifying or the race with Session.",
        sections: [
          {
            h: "Choose the circuit and car",
            p: [
              "Open <strong>Prepare for Session</strong> from the Home screen. Pick the circuit and the car at the top. The circuit list is alphabetical and searchable, and also finds other names such as “Spielberg” or “COTA”. The car list only offers supported game and formula combinations.",
              "JMD remembers your choice for next time. As you scroll, the selectors shrink into one line that you can still tap."
            ]
          },
          {
            h: "About: learn the circuit",
            p: ["<strong>About</strong> is the default view. Its sections open and close independently:"],
            list: [
              "<strong>Overview</strong>: the circuit map with numbered corners, the key facts and, for 2026 cars, the Straight Mode and Overtake zones.",
              "<strong>Corners to prepare</strong>: the corners that matter most.",
              "<strong>Setup considerations</strong>: what to think about, with a link to your setups for this track.",
              "<strong>Tyres</strong>: what to expect from the tyres here.",
              "<strong>My Data</strong>: what your own sessions at this circuit tell you."
            ]
          },
          {
            h: "Explore the map",
            p: ["Tap the map to open the full-screen viewer. Pinch to zoom (up to 6×), drag to pan, rotate with two fingers, and double tap to reset. The map can't get lost off screen, whatever you do."]
          },
          {
            h: "Session: build your plan",
            p: [
              "Switch to <strong>Session</strong> and tell JMD what you're about to do: the occasion (a race weekend, a rehearsal, a standalone session or Time Trial), the session, your intent (compete, rehearse, or learn and test) and, where it applies, the length.",
              "JMD builds a structured plan: <strong>YOUR PLAN</strong> lists the steps in order, and <strong>WHERE TO FOCUS</strong> follows."
            ],
            shot: "prepare"
          }
        ],
        access: {
          free: ["About: the track overview — map, length, corners, DRS zones and 2026 rules", "The full-screen map viewer", "My Data: how many of your sessions JMD holds for the circuit"],
          pro: ["About: corners to prepare, setup considerations, tyres, pit loss and circuit analysis", "Session: your full preparation plan", "My Data: what your own sessions at this circuit tell you"]
        },
        related: ["setups", "session-history", "racing-tips"]
      },

      "session-history": {
        title: "Session History and Race Replay",
        summary: "Find any saved session, read its results, replay a race and review your laps.",
        sections: [
          {
            h: "Sessions save themselves",
            p: [
              "With Session Tracking on (Settings → SETUP), JMD saves each session when it ends. After a race it tells you where you finished, with a <strong>Not correct?</strong> link if you need to fix how the race ended. It only asks you when telemetry stops and it genuinely can't tell whether the session finished.",
              "Open <strong>Session History</strong> from the Home screen, or tap <strong>Past</strong> on the Pit Wall."
            ]
          },
          {
            h: "Find a session",
            p: ["The <strong>SESSIONS</strong> tab lists every saved session. Use the search box, the sort control and the filter chips for league, season, game, formula and session type. The <strong>STATS</strong> tab gathers your career figures, and the title bar counts your poles, wins and podiums."],
            shot: "sessionHistory"
          },
          {
            h: "Inside a session",
            p: ["Tap a session to open it. The tabs adapt to the session type:"],
            list: [
              "<strong>HIGHLIGHTS</strong>: the story of the session. For a race: results first, penalties and race statistics, then your race: positions, your laps, the position chart, tyre strategy and race events. For practice and qualifying: your pace, valid and invalid laps and consistency.",
              "<strong>REPLAY</strong>: for races and sprints, Race Replay rebuilds the race lap by lap: the running order, gaps, tyres and events. Use the |&lt; &lt; ▶ &gt; &gt;| controls to play, pause and step. Practice and qualifying replay the timing table; Time Trial replays your laps.",
              "<strong>TRACE</strong>: compare laps (see the traces guide).",
              "<strong>SESSION</strong>: the session details and conditions, and where you tag the session with a league and season.",
              "<strong>SETUP</strong>: the setups you used, where you can rename and rate them."
            ],
            shot: "raceReplayLandscape"
          },
          {
            h: "Race results",
            p: ["Race results show the official classification: start position, places gained or lost, race time, best lap, tyre stints, laps and penalties."],
            shot: "raceResults"
          }
        ],
        access: {
          free: ["Every session is saved; saving is never blocked", "Every session listed, with stats from all of them", "Your most recent session in full, with highlights, lap histories, replay and traces"],
          pro: ["Every earlier session opens in full"],
          note: "Older sessions stay listed with the Jax Pro badge. Nothing is deleted when a subscription ends, and resubscribing opens the same records again."
        },
        related: ["leagues-and-seasons", "traces", "setups"]
      },

      "leagues-and-seasons": {
        title: "Tag sessions with leagues and seasons",
        summary: "Group your league races and seasons, then filter Session History and your stats by them.",
        sections: [
          {
            h: "Why tag a session",
            p: ["If you race in one or more leagues, tagging keeps each league's sessions together. Filter Session History or your stats by league and season to see how a championship is going, without your solo practice mixed in."],
            shot: "sessionHistoryLeague"
          },
          {
            h: "1. Create a league",
            p: ["A league has to exist before you can tag a session with it."],
            steps: [
              "Open Session History from the Home screen.",
              "On the SESSIONS tab, tap the <strong>All leagues</strong> filter chip (it has a pencil icon).",
              "Tap <strong>Manage leagues…</strong>",
              "Tap <strong>+</strong>, type the league's name and tap <strong>Add League</strong>."
            ],
            note: "Deleting a league never deletes a session. Sessions tagged with it simply stop showing a league."
          },
          {
            h: "2. Tag a session with a league",
            steps: [
              "Open the session in Session History.",
              "Go to the <strong>SESSION</strong> tab and find <strong>LEAGUE &amp; SEASON</strong>.",
              "Tap <strong>League</strong>, then choose a league in <strong>ASSIGN LEAGUE</strong>, or <strong>None</strong> to remove the tag."
            ],
            note: "If you have no leagues yet, the League row reads “No leagues”. Create one first, as in step 1.",
            shot: "sessionLeagueSeason"
          },
          {
            h: "3. Tag a session with a season",
            steps: [
              "In the same <strong>LEAGUE &amp; SEASON</strong> group, tap <strong>Season</strong>.",
              "Choose a year in <strong>ASSIGN SEASON</strong> (from the current year back to 2020), or <strong>None</strong>."
            ]
          },
          {
            h: "4. Filter by league and season",
            p: ["Back on the SESSIONS tab, tap <strong>All leagues</strong> or <strong>All seasons</strong> to show one league or one season. The season list only offers years you have actually tagged. The STATS tab has the same league and season filters."],
            shot: "sessionHistory"
          }
        ],
        access: {
          free: ["Creating leagues and tagging sessions you can open", "League and season filters"],
          pro: ["Opening and tagging every saved session, not only the most recent"]
        },
        related: ["session-history", "free-and-pro"]
      },

      setups: {
        title: "Setups and ratings",
        summary: "JMD captures your setups automatically. Rate them, name them and find the right one again.",
        sections: [
          {
            h: "Captured for you",
            p: ["You never type a setup in. JMD records the setup you drive in each session and builds your setup library from them. Open it from the Home screen with <strong>View Setups</strong>, from the Pit Wall's SETUP tab, or from Prepare for Session's setup section."],
            shot: "setupLibrary"
          },
          {
            h: "Find a setup",
            p: ["The library is a table: GAME, TITLE, TRACK, RATING and SESSION. It opens sorted by game, newest edition first, so you never load an older game's setup by mistake. Tap a column header, or use <strong>Sort by</strong> for Game, Track, Rating, Title or Recently used. The filter chips narrow the list by track, car category (F1 or F2) and game."]
          },
          {
            h: "Rate a setup",
            steps: [
              "Open a setup from the library, or open a session in Session History and go to its <strong>SETUP</strong> tab.",
              "Tap the stars: one star is <strong>Poor</strong>, two is <strong>Good</strong>, three is <strong>Excellent</strong>.",
              "To remove a rating, tap the selected star again. The setup returns to Not rated."
            ],
            p: ["A rating and a name belong to the setup itself, not to one session. Rate it in Session History and the library shows the same stars, and the other way round. In the library, sort by <strong>Rating</strong> to put your best setups first."],
            shot: "setupRating"
          },
          {
            h: "Name it and add camera notes",
            p: ["On a setup's own screen you can rename it, see how many sessions used it and when it was last used. A <strong>CAMERA / DRIVING VIEW</strong> section, marked MANUAL, lets you note your field of view and camera offsets. The game doesn't send those values, so you type them in."]
          }
        ],
        access: {
          free: ["Every setup you've run, listed by game, track, name, rating and session", "Every new setup captured with its session"],
          pro: ["Opening a setup's values, comparing, renaming, rating and camera notes"]
        },
        related: ["session-history", "prepare-for-session", "pit-wall"]
      },

      "racing-tips": {
        title: "Racing Tips",
        summary: "Short, practical lessons on driving technique, race tools, preparation and the rules, each with an exercise.",
        sections: [
          {
            h: "Four groups of tips",
            p: ["Open <strong>Racing Tips</strong> from the Home screen. You don't need a game or a session running."],
            list: [
              "<strong>Driving technique</strong>: trail braking, the racing line, corner exit, wet driving, defending.",
              "<strong>Race tools</strong>: ERS, DRS, F1 26 power management, fuel, tyre management, reading your delta display.",
              "<strong>Preparation</strong>: setups, race planning, weekend planning, qualifying prep, pit strategy.",
              "<strong>Rules &amp; penalties</strong>: tyre compounds C0–C6, 2026 battery modes, track limits and more."
            ],
            shot: "racingTips"
          },
          {
            h: "Read, practise, mark as read",
            steps: [
              "Tap a tip to open it: a one-line summary, then the explanation.",
              "Use the <strong>PRACTICE THIS</strong> box. It gives you one concrete thing to try in your next session.",
              "Tap <strong>Mark as read</strong> when you're done. The tip's dot turns green in the list, so you can see what's left. Tap <strong>Mark as unread</strong> to undo."
            ],
            shot: "racingTipsDetail"
          }
        ],
        allFree: true,
        related: ["prepare-for-session", "dashboard", "jax"]
      },

      jax: {
        title: "Jax, your race engineer's voice",
        summary: "Set how Jax speaks to you, choose what Jax talks about, and change it mid-session.",
        sections: [
          {
            h: "What Jax does",
            p: ["Jax turns live telemetry into short, timely spoken calls about gaps, tyres, fuel, weather, penalties and more. Jax speaks when it's useful and holds back when it isn't, for example during the opening laps or in the pit lane."]
          },
          {
            h: "Set Jax up",
            p: ["Open Settings (the gear icon on the Home screen), then the <strong>JAX</strong> tab:"],
            list: [
              "<strong>Jax calls you</strong>: the name Jax uses for you.",
              "Turn <strong>Jax Audio Guidance</strong> on or off, choose the <strong>Engineer Voice</strong>, and a <strong>Radio Cue</strong> beep before Jax speaks.",
              "Adjust the speech rate and pitch, then <strong>Test Jax Voice</strong>.",
              "Choose a <strong>Voice Style</strong>, and whether Jax uses <strong>Technical Terms</strong>.",
              "Pick the message categories: Gaps, Lap Crossing, Weather, Fuel, Power Management, Tyres, Penalty Strategy, Teammate, Motivation, Racecraft, Strategy and Race Control.",
              "The <strong>Audio Setup Guide</strong> explains how to hear Jax alongside your game's sound: phone speaker, earbuds, a dual-source headset or a mixer."
            ],
            shot: "settingsJax"
          },
          {
            h: "Change it mid-session",
            p: ["On the Pit Wall, tap the <strong>Jax</strong> button for Quick Jax: the <strong>Jax Audio Guidance</strong> switch and the message categories, without leaving the session."],
            shot: "quickJax"
          },
          {
            h: "Hear Jax without a game",
            p: ["In Settings → SUPPORT, open <strong>Explore JMD Demos</strong> and play the Jax audio guidance demo. Pick Race, Sprint, Qualifying, Practice or Time Trial. Each card shows the situation and whether Jax spoke or held back, and why."],
            shot: "jaxAudio"
          }
        ],
        access: {
          free: ["Urgent safety calls: Safety Car, VSC, red, yellow and blue flags, a penalty given to you, a stopped car ahead, traffic as you leave the pits", "Your lap at the line: lap, time and the gap ahead", "Every voice setting, the voice test and the Jax demo"],
          pro: ["Your complete race engineer: cars closing, traffic, tyres, fuel, energy, pit windows, damage, weather and pace"]
        },
        related: ["dashboard", "pit-wall", "racing-tips"]
      },

      "free-and-pro": {
        title: "What's free and what's in Jax Pro",
        summary: "Free lets you race, record and see your activity. Jax Pro helps you understand, revisit, manage and improve your racing.",
        sections: [
          {
            h: "Forever free",
            list: [
              "The whole Dashboard, including its full-screen live trace",
              "Pit Wall: the full TIMING CLASSIFICATION for every driver, GAME, ME, and SETUP with your setups by name",
              "Prepare for Session → About: the track overview — map with the start/finish line, length, corners, DRS zones and 2026 rules",
              "Saving every session; saving is never blocked",
              "Session History: every session listed, with statistics from all of them",
              "Your most recent session in full: highlights, classification, lap histories, traces and replay",
              "Setup library: every setup you've run, listed",
              "Jax: urgent safety calls — Safety Car, VSC, red, yellow and blue flags, a penalty given to you, a stopped car ahead, traffic as you leave the pits — and your lap at the line",
              "Time Trial live timing and lap recording",
              "Racing Tips, the built-in demos, settings, privacy, support and iCloud Backup"
            ]
          },
          {
            h: "Added by Jax Pro",
            list: [
              "Jax, your complete race engineer: cars closing, traffic, tyres, fuel, energy, pit windows, damage, weather and pace",
              "Pit Wall: TIMING LIVE, CAR, MAP and TRACE (with two-lap comparison)",
              "Every earlier session in full: details, highlights, lap histories, traces and replay",
              "Your setups' values, comparisons, names and ratings, wherever they appear",
              "Prepare for Session: corners, setup priorities, tyres, pit loss and circuit analysis, My Data, and your session plan"
            ]
          },
          {
            h: "Trial and plans",
            p: [
              "Jax Pro comes as monthly and annual App Store subscriptions, both with a 14-day free trial for eligible accounts. During the trial, everything above is available. Cancel before it ends and you aren't charged.",
              "Eligibility, the price in your country and the exact offer are shown by Apple's purchase sheet before you confirm. Apple bills and renews the subscription until you cancel it in your Apple Account subscription settings."
            ],
            shot: "settingsSetup"
          },
          {
            h: "Subscribing and restoring",
            p: ["Each locked feature opens the subscription screen with a line about what it unlocks, the plans and <strong>Restore Purchases</strong>. When you subscribe, you go straight to what you tapped, with no restart. The Settings → Jax Pro card shows your status."]
          },
          {
            h: "Your data is never held hostage",
            p: [
              "Free never limits what is saved. Every session and every setup is kept and listed, however many you record. A new session becomes the one you can open in full; the previous one keeps its place in the list. You can delete a session at any time.",
              "If a subscription ends, nothing is deleted, truncated or reordered. Resubscribe and the same records open again."
            ]
          },
          {
            h: "Try it all in the demos",
            p: ["The built-in demos (Settings → SUPPORT → Explore JMD Demos) show every Jax Pro view and the complete race engineer with sample data, so you can see what you'd get before deciding. A demo never grants or records a subscription."]
          }
        ],
        related: ["pit-wall", "session-history", "prepare-for-session"]
      }
    }
  },
  fr: {
    kicker: "Comment ça marche",
    title: "Les guides, écran par écran",
    intro: "Chaque guide explique une partie de l’app : ce que vous voyez, où toucher, et ce qui est gratuit ou compris dans Jax Pro.",
    readGuide: "Lire le guide",
    back: "Retour à Comment ça marche",
    accessTitle: "Gratuit et Jax Pro",
    freeLabel: "Gratuit",
    proLabel: "Jax Pro",
    allFreeText: "Tout ce que décrit ce guide est gratuit. Aucun abonnement n’est nécessaire.",
    accessLink: "Comparer tout ce qui est gratuit et compris dans Jax Pro",
    relatedTitle: "Guides associés",
    items: {
      dashboard: {
        title: "Le tableau de bord en direct",
        summary: "Lisez le tableau de bord d’un coup d’œil, ouvrez le tracé en direct plein écran d’une seule touche et passez au mur des stands par la barre de droite.",
        sections: [
          {
            h: "Votre course d’un coup d’œil",
            p: [
              "Ouvrez le <strong>Tableau de bord</strong> depuis l’écran d’accueil. Il passe en paysage et attend la télémétrie de votre jeu, puis se remplit dès que les paquets arrivent.",
              "Tout ce qu’il faut en roulant tient sur un seul écran, sans défilement ni menu à ouvrir."
            ],
            list: [
              "<strong>Barre du haut</strong> : votre position, le compteur de tours avec entre parenthèses le nombre de voitures encore en course, les témoins de changement de rapport et la prévision de pluie à 5, 15 et 30 minutes.",
              "<strong>Deuxième rangée</strong> : l’écart avec la voiture devant et celle derrière, avec entre les deux le niveau et le mode de votre batterie (ERS). Les écarts restent masqués au premier tour pour ne jamais vous induire en erreur.",
              "<strong>À gauche</strong> : la répartition de freinage, le différentiel, les quatre pneus (température et usure, avec le composé au centre), puis les températures moteur, freins, air et piste.",
              "<strong>Au centre</strong> : le drapeau, votre delta en direct, le rapport engagé et la vitesse.",
              "<strong>À droite</strong> : la fenêtre d’arrêt et le carburant, l’aileron et les dégâts, puis les temps NOW, LAST, BEST et OVERALL et vos trois secteurs.",
              "<strong>Barre du bas</strong> : le circuit, la session, l’horloge de session, les pénalités et l’heure."
            ],
            shot: "dashboardVideo"
          },
          {
            h: "Les couleurs des secteurs",
            p: ["Chaque secteur est jugé séparément, dès que vous l’avez bouclé."],
            list: [
              "<strong>Violet</strong> : le secteur le plus rapide de la session, tous pilotes confondus.",
              "<strong>Vert</strong> : votre meilleur secteur.",
              "<strong>Jaune</strong> : bouclé, mais plus lent que votre meilleur.",
              "<strong>Gris</strong> : en cours, ou rien à comparer encore."
            ]
          },
          {
            h: "Une touche pour le tracé en direct plein écran",
            p: [
              "Touchez le centre du tableau de bord (la colonne du drapeau, du delta, du rapport et de la vitesse) pour ouvrir le tracé en direct en plein écran. Il dessine votre accélérateur, votre frein et votre volant pendant que vous roulez.",
              "Touchez n’importe où sur le tracé pour le fermer et revenir au tableau de bord. Le volant suit la convention de l’app : un virage à gauche fait monter la ligne, un virage à droite la fait descendre."
            ]
          },
          {
            h: "Touchez la barre de droite pour le mur des stands",
            p: [
              "Une fine barre <strong>MUR DES STANDS</strong> longe le bord droit du tableau de bord. Touchez-la : le mur des stands glisse par-dessus le tableau de bord, avec la même session en direct.",
              "Pour revenir, touchez la barre <strong>TABLEAU DE BORD</strong> sur le bord gauche du mur des stands, ou sa flèche de retour. Dans les deux sens, c’est une touche : aucun balayage à déclencher par erreur.",
              "En essais et en qualification, le mur des stands s’ouvre aussi tout seul quand votre voiture est dans son stand."
            ],
            shot: "pitWallTiming"
          },
          {
            h: "Abréviations et affichages superposés",
            p: [
              "Touchez la prévision de pluie dans la barre du haut pour ouvrir la légende du tableau de bord, qui explique chaque abréviation (BB, DIFF, PEN, SC, VSC, ERS et plus). Le même <strong>Guide du tableau de bord</strong> se trouve dans Paramètres → ASSISTANCE.",
              "Sous voiture de sécurité virtuelle ou voiture de sécurité, un grand delta superposé vous indique si vous respectez le delta exigé. Les drapeaux rouges et les phases de la direction de course ont aussi leur affichage bien visible."
            ],
            shot: "vscDelta"
          },
          {
            h: "Qualification et essais",
            p: ["La même disposition sert dans tous les types de session. En qualification, les temps au tour et les couleurs de secteur deviennent le cœur de l’écran."],
            shot: "qualifying"
          }
        ],
        allFree: true,
        related: ["pit-wall", "traces", "jax"]
      },

      "pit-wall": {
        title: "Le mur des stands",
        summary: "Le chronométrage, vos tours, l’état de la voiture, la carte en direct, les tracés, les réglages et les paramètres du jeu, onglet par onglet.",
        sections: [
          {
            h: "Deux façons d’y entrer",
            p: [
              "Depuis le tableau de bord, touchez la barre <strong>MUR DES STANDS</strong> sur le bord droit. Le mur des stands glisse par-dessus ; touchez la barre <strong>TABLEAU DE BORD</strong> ou la flèche de retour pour revenir.",
              "Depuis l’écran d’accueil, ouvrez directement <strong>Mur des stands</strong>. Pratique sur un deuxième appareil, pour un ami qui joue votre ingénieur, ou si vous ne voulez que le chronométrage. Utilisez la flèche de retour pour sortir."
            ],
            shot: "pitWallVideo"
          },
          {
            h: "L’en-tête",
            p: ["L’en-tête affiche toujours le circuit, les températures de l’air et de la piste, la prévision de pluie, le nombre de voitures en piste et l’horloge de session."],
            list: [
              "<strong>Jax</strong> ouvre le panneau <strong>Voix de Jax</strong> : activez ou coupez le <strong>Guidage audio Jax</strong> et choisissez les catégories de messages sans quitter la session.",
              "<strong>Passées</strong> ouvre l’historique des sessions, déjà filtré sur votre jeu et votre voiture. Un bouton <strong>RETOUR AU MUR DES STANDS</strong> vous ramène."
            ],
            shot: "pitWallHeader"
          },
          {
            h: "Les onglets",
            list: [
              "<strong>TIMING</strong> : tout le plateau. Basculez en haut entre <strong>CLASSEMENT</strong> (l’ordre de la session) et <strong>EN DIRECT</strong> (le tour en cours). Votre ligne est mise en évidence.",
              "<strong>ME</strong> : votre tableau tour par tour : position, temps, secteurs, pneu et réglage à chaque tour.",
              "<strong>AUTO</strong> : l’état de la voiture : une voiture vue de dessus colorée selon les dégâts et les températures, la température, l’usure et les dégâts des pneus et des freins à chaque coin, la chaleur et les dégâts du groupe propulseur, et les défauts DRS/ERS.",
              "<strong>MAP</strong> : la carte du circuit en direct, chaque voiture aux couleurs de son équipe et les secteurs tracés sur le circuit.",
              "<strong>TRACE</strong> : accélérateur, frein, volant et vitesse sur un tour, avec un deuxième tour à comparer. Voir le guide des tracés.",
              "<strong>SETUP</strong> : les réglages utilisés pendant cette session, avec un lien vers toute votre bibliothèque de réglages.",
              "<strong>GAME</strong> : les paramètres de jeu de la session."
            ],
            shots: ["pitWallMap", "pitWallCar"]
          },
          {
            h: "La carte et le tracé en plein écran",
            p: ["MAP et TRACE ont chacun un bouton d’agrandissement dans leur coin supérieur droit. Touchez-le pour afficher une vue en direct en plein écran, puis le bouton de fermeture pour revenir à l’onglet où vous étiez."]
          },
          {
            h: "Quand une nouvelle session commence",
            p: ["Si le jeu passe à une nouvelle session pendant que vous êtes sur le mur des stands, JMD vous indique que la session précédente est terminée et enregistrée, puis suit la nouvelle. Touchez OK."]
          }
        ],
        access: {
          free: ["TIMING : tout le CLASSEMENT, chaque pilote", "GAME : les paramètres de jeu de la session", "ME : vos tours et vos relais", "SETUP : vos réglages de la session, par nom"],
          pro: ["TIMING : EN DIRECT", "AUTO", "MAP", "TRACE, avec comparaison de deux tours", "SETUP : les valeurs des réglages"],
          note: "Un onglet verrouillé nomme la fonction et ce qu’ajoute Jax Pro, et ouvre l’écran d’abonnement quand on le touche. Les démos intégrées montrent chaque onglet en entier."
        },
        related: ["dashboard", "traces", "free-and-pro"]
      },

      traces: {
        title: "Agrandir, utiliser et comparer les tracés",
        summary: "Choisissez vos tours, comparez une référence à un autre tour, zoomez, déplacez-vous et passez en plein écran, en direct sur le mur des stands ou plus tard dans l’historique.",
        sections: [
          {
            h: "Où trouver les tracés",
            list: [
              "<strong>Mur des stands → TRACE</strong>, en direct. Il s’ouvre sur votre dernier tour valide et reste vide tant que vous n’avez pas bouclé un tour complet.",
              "<strong>Historique des sessions → une session → TRACÉ</strong>, après la session. Il s’ouvre sur votre meilleur tour valide. Les tracés enregistrés sont identiques après un redémarrage, et une nouvelle session en direct ne dérange jamais une analyse ouverte.",
              "Le <strong>tableau de bord</strong> a son propre tracé en direct plein écran : une touche au centre de l’écran (voir le guide du tableau de bord)."
            ],
            p: ["Les deux vues partagent le même graphique, les mêmes gestes et les mêmes pastilles de tour : ce que vous apprenez dans l’une sert dans l’autre."],
            shot: "lapTrace"
          },
          {
            h: "Choisir et comparer des tours",
            steps: [
              "Les pastilles en haut montrent le numéro et le temps de chaque tour. Une ★ marque le meilleur tour de la session, et une icône de sens interdit marque un tour invalide.",
              "Touchez une pastille pour afficher ce tour. Le premier tour choisi porte l’étiquette <strong>REF</strong> (la référence).",
              "Touchez une deuxième pastille pour comparer. Elle porte l’étiquette <strong>CMP</strong>. La référence est dessinée atténuée et la comparaison bien vive, pour voir où les lignes se séparent.",
              "Sous le graphique s’affichent l’écart sur le tour et l’écart dans chaque secteur.",
              "Touchez <strong>ANALYSE</strong> pour la liste des différences mesurées entre les deux tours.",
              "Choisissez un troisième tour et il remplace le plus ancien des deux. Touchez de nouveau une pastille sélectionnée pour la retirer."
            ],
            note: "Les tours d’entrée et de sortie des stands et un dernier tour inachevé figurent dans la liste, marqués comme partiels, mais ne sont jamais proposés comme référence ni comme comparaison."
          },
          {
            h: "Choisir ce qui est dessiné",
            p: [
              "Les boutons sous le graphique (SPEED, GEAR, DRS, ERS) affichent ou masquent ces courbes. Un canal que le jeu n’a pas envoyé n’est pas dessiné, et son bouton indique qu’il n’a pas été enregistré.",
              "Le panneau à côté du graphique donne le temps, les secteurs, le pneu et le réglage du tour de référence, et le temps du tour comparé. Sur un téléphone tenu à la verticale, ces détails passent dans un bandeau au-dessus du graphique."
            ]
          },
          {
            h: "Zoomer et se déplacer",
            list: [
              "<strong>Touchez deux fois</strong> pour zoomer par étapes : la moitié, le quart puis le huitième du tour. Une quatrième double touche revient au tour complet.",
              "<strong>Pincez</strong> pour zoomer en continu, jusqu’à une fenêtre de 25 mètres.",
              "<strong>Glissez un doigt</strong> pour parcourir le tour. Le défilement s’arrête pile au début et à la fin du tour.",
              "<strong>RÉINIT. ZOOM</strong> (ou le bouton flottant en portrait) revient au tour entier."
            ]
          },
          {
            h: "Agrandir en plein écran",
            p: ["Touchez le bouton d’agrandissement dans le coin supérieur droit du graphique. Le tracé remplit l’écran avec sa légende et ses commandes ; sur iPhone, il préfère le paysage. Touchez le bouton de fermeture pour revenir exactement où vous étiez."]
          },
          {
            h: "Énergie et rythme (F1 26)",
            p: ["Pour les sessions F1 26 qui ont enregistré l’aéro active ou l’énergie ERS, le TRACÉ de l’historique ajoute une ligne <strong>ÉNERGIE &amp; RYTHME</strong>. Elle ouvre jusqu’à quatre constats tirés de vos tours comparables, chacun avec ce qui s’est passé, pourquoi c’est important et quoi essayer ensuite."]
          }
        ],
        access: {
          free: ["Le tracé en direct plein écran du tableau de bord", "Le TRACÉ de l’historique pour votre session la plus récente"],
          pro: ["Le TRACE du mur des stands, en direct, avec comparaison de deux tours", "Le TRACÉ de chaque session précédente"]
        },
        related: ["pit-wall", "session-history", "dashboard"]
      },

      "prepare-for-session": {
        title: "Préparer la session",
        summary: "Apprenez le circuit avec À propos, puis bâtissez un plan pour les essais, la qualification ou la course avec Séance.",
        sections: [
          {
            h: "Choisir le circuit et la voiture",
            p: [
              "Ouvrez <strong>Préparer la session</strong> depuis l’écran d’accueil. Choisissez le circuit et la voiture en haut. La liste des circuits est alphabétique et se recherche ; elle trouve aussi d’autres noms comme « Spielberg » ou « COTA ». La liste des voitures ne propose que les combinaisons de jeu et de formule prises en charge.",
              "JMD retient votre choix pour la prochaine fois. Quand vous faites défiler, les sélecteurs se réduisent en une seule ligne, toujours touchable."
            ]
          },
          {
            h: "À propos : apprendre le circuit",
            p: ["<strong>À propos</strong> est la vue par défaut. Ses sections s’ouvrent et se ferment indépendamment :"],
            list: [
              "<strong>Aperçu</strong> : la carte du circuit avec les virages numérotés, les faits essentiels et, pour les voitures 2026, les zones Straight Mode et Overtake.",
              "<strong>Virages à préparer</strong> : les virages qui comptent le plus.",
              "<strong>Pistes de réglage</strong> : à quoi penser, avec un lien vers vos réglages pour ce circuit.",
              "<strong>Pneumatiques</strong> : ce qu’on peut attendre des pneus ici.",
              "<strong>Mes données</strong> : ce que vos propres sessions sur ce circuit vous apprennent."
            ]
          },
          {
            h: "Explorer la carte",
            p: ["Touchez la carte pour ouvrir la visionneuse plein écran. Pincez pour zoomer (jusqu’à 6×), glissez pour vous déplacer, tournez avec deux doigts et touchez deux fois pour tout réinitialiser. La carte ne peut jamais se perdre hors de l’écran."]
          },
          {
            h: "Séance : bâtir votre plan",
            p: [
              "Passez à <strong>Séance</strong> et dites à JMD ce que vous allez faire : l’occasion (un week-end de course, une répétition, une séance isolée ou le contre-la-montre), la séance, votre intention (performer, répéter, ou apprendre et tester) et, s’il y a lieu, la durée.",
              "JMD bâtit un plan structuré : <strong>Votre plan</strong> liste les étapes dans l’ordre, puis vient <strong>Où porter l’attention</strong>."
            ],
            shot: "prepare"
          }
        ],
        access: {
          free: ["À propos : l’aperçu du circuit — carte, longueur, virages, zones DRS et règles 2026", "La visionneuse de carte plein écran", "Mes données : le nombre de vos sessions sur ce circuit"],
          pro: ["À propos : virages à préparer, pistes de réglage, pneumatiques, perte aux stands et analyse du circuit", "Séance : votre plan de préparation complet", "Mes données : ce que vos propres sessions sur ce circuit vous apprennent"]
        },
        related: ["setups", "session-history", "racing-tips"]
      },

      "session-history": {
        title: "Historique des sessions et Race Replay",
        summary: "Retrouvez n’importe quelle session enregistrée, lisez ses résultats, revivez une course et analysez vos tours.",
        sections: [
          {
            h: "Les sessions s’enregistrent toutes seules",
            p: [
              "Avec le suivi des sessions activé (Paramètres → RÉGLAGES), JMD enregistre chaque session à sa fin. Après une course, il vous dit où vous avez terminé, avec un lien <strong>Incorrect ?</strong> si vous devez corriger la façon dont la course s’est terminée. Il ne vous pose la question que si la télémétrie s’arrête et qu’il ne peut vraiment pas savoir si la session est finie.",
              "Ouvrez l’<strong>Historique des sessions</strong> depuis l’écran d’accueil, ou touchez <strong>Passées</strong> sur le mur des stands."
            ]
          },
          {
            h: "Retrouver une session",
            p: ["L’onglet <strong>SESSIONS</strong> liste chaque session enregistrée. Utilisez la recherche, le tri et les filtres par ligue, saison, jeu, formule et type de session. L’onglet <strong>STATS</strong> rassemble vos chiffres de carrière, et la barre de titre compte vos poles, victoires et podiums."],
            shot: "sessionHistory"
          },
          {
            h: "Dans une session",
            p: ["Touchez une session pour l’ouvrir. Les onglets s’adaptent au type de session :"],
            list: [
              "<strong>MOMENTS FORTS</strong> : l’histoire de la session. Pour une course : d’abord les résultats, les pénalités et les statistiques de course, puis votre course : positions, vos tours, le graphique des positions, la stratégie pneus et les événements. Pour les essais et la qualification : votre rythme, vos tours valides et invalides, et votre régularité.",
              "<strong>REPLAY</strong> : pour les courses et les sprints, Race Replay reconstruit la course tour par tour : l’ordre, les écarts, les pneus et les événements. Utilisez les commandes |&lt; &lt; ▶ &gt; &gt;| pour lire, mettre en pause et avancer. Les essais et la qualification rejouent le tableau des temps ; le contre-la-montre rejoue vos tours.",
              "<strong>TRACÉ</strong> : comparez vos tours (voir le guide des tracés).",
              "<strong>SESSION</strong> : les détails et les conditions de la session, et l’endroit où associer la session à une ligue et une saison.",
              "<strong>SETUP</strong> : les réglages utilisés, que vous pouvez renommer et noter."
            ],
            shot: "raceReplayLandscape"
          },
          {
            h: "Résultats de course",
            p: ["Les résultats donnent le classement officiel : position de départ, places gagnées ou perdues, temps de course, meilleur tour, relais de pneus, tours et pénalités."],
            shot: "raceResults"
          }
        ],
        access: {
          free: ["Chaque session est enregistrée ; l’enregistrement n’est jamais bloqué", "Toutes vos sessions listées, avec des statistiques tirées de toutes", "Votre session la plus récente en entier, avec faits marquants, historique des tours, replay et tracés"],
          pro: ["Chaque session précédente s’ouvre en entier"],
          note: "Les sessions plus anciennes restent dans la liste avec le badge Jax Pro. Rien n’est supprimé quand un abonnement prend fin, et un nouvel abonnement rouvre les mêmes données."
        },
        related: ["leagues-and-seasons", "traces", "setups"]
      },

      "leagues-and-seasons": {
        title: "Associer des sessions à des ligues et des saisons",
        summary: "Regroupez vos courses de ligue et vos saisons, puis filtrez l’historique et vos statistiques en conséquence.",
        sections: [
          {
            h: "Pourquoi associer une session",
            p: ["Si vous courez dans une ou plusieurs ligues, l’association garde les sessions de chaque ligue ensemble. Filtrez l’historique ou vos statistiques par ligue et par saison pour suivre un championnat, sans vos essais en solo mélangés."],
            shot: "sessionHistoryLeague"
          },
          {
            h: "1. Créer une ligue",
            p: ["Une ligue doit exister avant que vous puissiez y associer une session."],
            steps: [
              "Ouvrez l’historique des sessions depuis l’écran d’accueil.",
              "Dans l’onglet SESSIONS, touchez le filtre <strong>Toutes les ligues</strong> (il porte une icône de crayon).",
              "Touchez <strong>Gérer les ligues…</strong>",
              "Touchez <strong>+</strong>, saisissez le nom de la ligue, puis touchez <strong>Add League</strong>."
            ],
            note: "Supprimer une ligue ne supprime jamais de session. Les sessions associées n’affichent simplement plus de ligue."
          },
          {
            h: "2. Associer une session à une ligue",
            steps: [
              "Ouvrez la session dans l’historique.",
              "Allez dans l’onglet <strong>SESSION</strong> et trouvez <strong>LIGUE ET SAISON</strong>.",
              "Touchez <strong>Ligue</strong>, puis choisissez une ligue dans <strong>ATTRIBUER UNE LIGUE</strong>, ou <strong>Aucune</strong> pour retirer l’association."
            ],
            note: "Si vous n’avez encore aucune ligue, la ligne Ligue indique « Aucune ligue ». Créez-en une d’abord, comme à l’étape 1.",
            shot: "sessionLeagueSeason"
          },
          {
            h: "3. Associer une session à une saison",
            steps: [
              "Dans le même groupe <strong>LIGUE ET SAISON</strong>, touchez <strong>Saison</strong>.",
              "Choisissez une année dans <strong>ATTRIBUER UNE SAISON</strong> (de l’année en cours jusqu’à 2020), ou <strong>Aucune</strong>."
            ]
          },
          {
            h: "4. Filtrer par ligue et par saison",
            p: ["De retour dans l’onglet SESSIONS, touchez <strong>Toutes les ligues</strong> ou <strong>Toutes les saisons</strong> pour n’afficher qu’une ligue ou qu’une saison. La liste des saisons ne propose que les années que vous avez réellement utilisées. L’onglet STATS a les mêmes filtres de ligue et de saison."],
            shot: "sessionHistory"
          }
        ],
        access: {
          free: ["Créer des ligues et associer les sessions que vous pouvez ouvrir", "Les filtres de ligue et de saison"],
          pro: ["Ouvrir et associer chaque session enregistrée, pas seulement la plus récente"]
        },
        related: ["session-history", "free-and-pro"]
      },

      setups: {
        title: "Les réglages et leur évaluation",
        summary: "JMD saisit vos réglages automatiquement. Notez-les, nommez-les et retrouvez le bon au bon moment.",
        sections: [
          {
            h: "Saisis pour vous",
            p: ["Vous ne tapez jamais un réglage. JMD enregistre le réglage utilisé à chaque session et en bâtit votre bibliothèque. Ouvrez-la depuis l’écran d’accueil avec <strong>Voir les réglages</strong>, depuis l’onglet SETUP du mur des stands, ou depuis la section des réglages de Préparer la session."],
            shot: "setupLibrary"
          },
          {
            h: "Retrouver un réglage",
            p: ["La bibliothèque est un tableau : jeu, titre, circuit, note et session. Elle s’ouvre triée par jeu, l’édition la plus récente en premier, pour ne jamais charger par erreur un réglage d’un jeu plus ancien. Touchez un en-tête de colonne, ou utilisez <strong>Trier par</strong> : jeu, circuit, note, titre ou Utilisés récemment. Les filtres réduisent la liste par circuit, catégorie (F1 ou F2) et jeu."]
          },
          {
            h: "Noter un réglage",
            steps: [
              "Ouvrez un réglage depuis la bibliothèque, ou ouvrez une session dans l’historique et allez dans son onglet <strong>SETUP</strong>.",
              "Touchez les étoiles : une étoile signifie <strong>Médiocre</strong>, deux <strong>Bon</strong>, trois <strong>Excellent</strong>.",
              "Pour retirer la note, touchez de nouveau l’étoile sélectionnée. Le réglage redevient Non noté."
            ],
            p: ["La note et le nom appartiennent au réglage lui-même, pas à une seule session. Notez-le dans l’historique et la bibliothèque affiche les mêmes étoiles, et inversement. Dans la bibliothèque, triez par <strong>Note</strong> pour mettre vos meilleurs réglages en tête."],
            shot: "setupRating"
          },
          {
            h: "Le nommer et noter la caméra",
            p: ["Sur l’écran d’un réglage, vous pouvez le renommer, voir combien de sessions l’ont utilisé et quand il a servi pour la dernière fois. Une section <strong>CAMÉRA / VUE DE CONDUITE</strong>, marquée MANUEL, permet de noter votre champ de vision et les décalages de caméra. Le jeu n’envoie pas ces valeurs ; vous les saisissez vous-même."]
          }
        ],
        access: {
          free: ["Tous les réglages utilisés, listés par jeu, circuit, nom, note et session", "Chaque nouveau réglage enregistré avec sa session"],
          pro: ["Ouvrir les valeurs d’un réglage, comparer, renommer, noter et noter la caméra"]
        },
        related: ["session-history", "prepare-for-session", "pit-wall"]
      },

      "racing-tips": {
        title: "Conseils de course",
        summary: "De courtes leçons pratiques sur la technique de conduite, les outils de course, la préparation et les règles, chacune avec un exercice.",
        sections: [
          {
            h: "Quatre groupes de conseils",
            p: ["Ouvrez <strong>Conseils de course</strong> depuis l’écran d’accueil. Ni jeu ni session n’est nécessaire."],
            list: [
              "<strong>Technique de conduite</strong> : le freinage dégressif, la trajectoire, la sortie de virage, la conduite sous la pluie, la défense.",
              "<strong>Outils de course</strong> : l’ERS, le DRS, la gestion de la puissance en F1 26, le carburant, la gestion des pneus, la lecture de votre delta.",
              "<strong>Préparation</strong> : les réglages, la planification de course et de week-end, la préparation des qualifications, la stratégie d’arrêt.",
              "<strong>Règles &amp; pénalités</strong> : les composés C0–C6, les modes de batterie 2026, les limites de piste et plus."
            ],
            shot: "racingTips"
          },
          {
            h: "Lire, pratiquer, marquer comme lu",
            steps: [
              "Touchez un conseil pour l’ouvrir : un résumé d’une ligne, puis l’explication.",
              "Servez-vous de l’encadré <strong>PRATIQUER</strong>. Il vous donne une chose concrète à essayer lors de votre prochaine session.",
              "Touchez <strong>Marquer comme lu</strong> quand vous avez terminé. La pastille du conseil devient verte dans la liste, pour voir ce qu’il reste. Touchez <strong>Marquer non lu</strong> pour annuler."
            ],
            shot: "racingTipsDetail"
          }
        ],
        allFree: true,
        related: ["prepare-for-session", "dashboard", "jax"]
      },

      jax: {
        title: "Jax, la voix de votre ingénieur",
        summary: "Réglez la façon dont Jax vous parle, choisissez de quoi Jax parle, et changez-le en pleine session.",
        sections: [
          {
            h: "Ce que fait Jax",
            p: ["Jax transforme la télémétrie en direct en courtes annonces vocales au bon moment : écarts, pneus, carburant, météo, pénalités et plus. Jax parle quand c’est utile et se tait quand ça ne l’est pas, par exemple dans les premiers tours ou dans la voie des stands."]
          },
          {
            h: "Régler Jax",
            p: ["Ouvrez les paramètres (l’engrenage de l’écran d’accueil), puis l’onglet <strong>JAX</strong> :"],
            list: [
              "<strong>Jax vous appelle</strong> : le nom que Jax utilise pour vous.",
              "Activez ou coupez le <strong>Guidage audio Jax</strong>, choisissez la <strong>Voix de l’ingénieur</strong> et un <strong>Signal radio</strong> avant que Jax parle.",
              "Ajustez le débit et la hauteur de la voix, puis touchez <strong>Tester la voix Jax</strong>.",
              "Choisissez un <strong>Style de voix</strong>, et si Jax emploie des <strong>Termes techniques</strong>.",
              "Choisissez les catégories de messages : Écarts, Passage de tour, Météo, Carburant, Gestion de la puissance, Pneus, Stratégie de pénalité, Coéquipier, Motivation, Technique de course, Stratégie et Contrôle de course.",
              "Le <strong>Guide de configuration audio</strong> explique comment entendre Jax en même temps que le son du jeu : haut-parleur du téléphone, écouteurs, casque à deux sources ou mélangeur."
            ],
            shot: "settingsJax"
          },
          {
            h: "Le changer en pleine session",
            p: ["Sur le mur des stands, touchez le bouton <strong>Jax</strong> : vous y trouvez l’interrupteur <strong>Guidage audio Jax</strong> et les catégories de messages, sans quitter la session."],
            shot: "quickJax"
          },
          {
            h: "Entendre Jax sans jeu",
            p: ["Dans Paramètres → ASSISTANCE, ouvrez <strong>Découvrir les démos JMD</strong> et lancez la démo du guidage audio de Jax. Choisissez course, sprint, qualification, essais ou contre-la-montre. Chaque carte montre la situation et indique si Jax a parlé ou s’est retenu, et pourquoi."],
            shot: "jaxAudio"
          }
        ],
        access: {
          free: ["Les alertes de sécurité urgentes : voiture de sécurité, VSC, drapeaux rouge, jaune et bleu, une pénalité qui vous est infligée, une voiture arrêtée devant, le trafic à la sortie des stands", "Votre tour à la ligne : tour, temps et écart devant", "Tous les réglages de voix, le test de voix et la démo de Jax"],
          pro: ["Votre ingénieur de course complet : voitures qui reviennent, trafic, pneus, carburant, énergie, fenêtres d’arrêt, dégâts, météo et rythme"]
        },
        related: ["dashboard", "pit-wall", "racing-tips"]
      },

      "free-and-pro": {
        title: "Ce qui est gratuit et ce que comprend Jax Pro",
        summary: "La version gratuite vous permet de courir, d’enregistrer et de voir votre activité. Jax Pro vous aide à comprendre, revoir, gérer et améliorer votre pilotage.",
        sections: [
          {
            h: "Gratuit pour toujours",
            list: [
              "Tout le tableau de bord, y compris son tracé en direct plein écran",
              "Mur des stands : tout le CLASSEMENT du TIMING pour chaque pilote, GAME, ME, et SETUP avec vos réglages par nom",
              "Préparer la session → À propos : l’aperçu du circuit — carte avec la ligne de départ/arrivée, longueur, virages, zones DRS et règles 2026",
              "L’enregistrement de chaque session ; il n’est jamais bloqué",
              "Historique des sessions : toutes vos sessions listées, avec des statistiques tirées de toutes",
              "Votre session la plus récente en entier : faits marquants, classement, historique des tours, tracés et replay",
              "Bibliothèque de réglages : tous les réglages utilisés, listés",
              "Jax : les alertes de sécurité urgentes — voiture de sécurité, VSC, drapeaux rouge, jaune et bleu, une pénalité qui vous est infligée, une voiture arrêtée devant, le trafic à la sortie des stands — et votre tour à la ligne",
              "Le chronométrage en direct et l’enregistrement des tours en contre-la-montre",
              "Les conseils de course, les démos intégrées, les paramètres, la confidentialité, l’assistance et la sauvegarde iCloud"
            ]
          },
          {
            h: "Ajouté par Jax Pro",
            list: [
              "Jax, votre ingénieur de course complet : voitures qui reviennent, trafic, pneus, carburant, énergie, fenêtres d’arrêt, dégâts, météo et rythme",
              "Mur des stands : TIMING EN DIRECT, AUTO, MAP et TRACE (avec comparaison de deux tours)",
              "Toutes vos sessions précédentes en entier : détails, faits marquants, historique des tours, tracés et replay",
              "Les valeurs de vos réglages, leurs comparaisons, noms et notes, partout où ils apparaissent",
              "Préparer la session : virages, priorités de réglage, pneumatiques, perte aux stands et analyse du circuit, Mes données, et votre plan de séance"
            ]
          },
          {
            h: "Essai et forfaits",
            p: [
              "Jax Pro est offert en abonnements App Store mensuel et annuel, tous deux avec un essai gratuit de 14 jours pour les comptes admissibles. Pendant l’essai, tout ce qui précède est disponible. Annulez avant la fin et vous n’êtes pas facturé.",
              "L’admissibilité, le prix dans votre pays et l’offre exacte sont affichés par la feuille d’achat Apple avant que vous confirmiez. Apple facture et renouvelle l’abonnement jusqu’à ce que vous l’annuliez dans les réglages d’abonnements de votre compte Apple."
            ],
            shot: "settingsSetup"
          },
          {
            h: "S’abonner et restaurer",
            p: ["Chaque fonction verrouillée ouvre l’écran d’abonnement avec une phrase sur ce qu’elle débloque, les forfaits et la restauration des achats (<strong>Déjà abonné ? Restaurer</strong>). Dès que vous vous abonnez, vous arrivez directement à ce que vous avez touché, sans redémarrage. La carte Jax Pro des paramètres indique votre statut."]
          },
          {
            h: "Vos données ne sont jamais prises en otage",
            p: [
              "La version gratuite ne limite jamais ce qui est enregistré. Chaque session et chaque réglage est conservé et listé, quel qu’en soit le nombre. Une nouvelle session devient celle que vous pouvez ouvrir en entier ; la précédente garde sa place dans la liste. Vous pouvez supprimer une session à tout moment.",
              "Si un abonnement prend fin, rien n’est supprimé, tronqué ni réordonné. Réabonnez-vous et les mêmes données se rouvrent."
            ]
          },
          {
            h: "Tout essayer avec les démos",
            p: ["Les démos intégrées (Paramètres → ASSISTANCE → Découvrir les démos JMD) montrent chaque vue Jax Pro et l’ingénieur de course complet avec des données d’exemple, pour voir ce que vous obtiendriez avant de décider. Une démo n’accorde ni n’enregistre jamais d’abonnement."]
          }
        ],
        related: ["pit-wall", "session-history", "prepare-for-session"]
      }
    }
  },
  es: {
    kicker: "Cómo funciona",
    title: "Guías, pantalla por pantalla",
    intro: "Cada guía explica una parte de la app: qué ves, qué tocar y qué es gratis o forma parte de Jax Pro.",
    readGuide: "Leer la guía",
    back: "Volver a Cómo funciona",
    accessTitle: "Gratis y Jax Pro",
    freeLabel: "Gratis",
    proLabel: "Jax Pro",
    allFreeText: "Todo lo que describe esta guía es gratis. No necesitas suscripción.",
    accessLink: "Comparar todo lo que es gratis y lo que incluye Jax Pro",
    relatedTitle: "Guías relacionadas",
    items: {
      dashboard: {
        title: "El panel en vivo",
        summary: "Lee el panel de un vistazo, abre la traza en vivo a pantalla completa con un toque y pasa al muro de boxes desde la barra de la derecha.",
        sections: [
          {
            h: "Tu carrera de un vistazo",
            p: [
              "Abre el <strong>Panel</strong> desde la pantalla de inicio. Gira a horizontal y espera la telemetría de tu juego; se completa en cuanto llegan los paquetes.",
              "Todo lo que necesitas al volante está en una sola pantalla, sin desplazarte ni abrir menús."
            ],
            list: [
              "<strong>Barra superior</strong>: tu posición, el contador de vueltas con el número de coches que siguen en carrera entre paréntesis, las luces de cambio y la previsión de lluvia a 5, 15 y 30 minutos.",
              "<strong>Segunda fila</strong>: la diferencia con el coche de delante y el de detrás, y entre ambas el nivel y el modo de tu batería (ERS). Las diferencias se ocultan en la primera vuelta para no confundirte.",
              "<strong>Izquierda</strong>: reparto de frenada, diferencial, los cuatro neumáticos (temperatura y desgaste, con el compuesto en el centro) y las temperaturas de motor, frenos, aire y pista.",
              "<strong>Centro</strong>: la bandera, tu delta en vivo, la marcha y la velocidad.",
              "<strong>Derecha</strong>: ventana de parada y combustible, alerón y daños, los tiempos NOW, LAST, BEST y OVERALL y tus tres sectores.",
              "<strong>Barra inferior</strong>: circuito, sesión, reloj de sesión, penalizaciones y la hora."
            ],
            shot: "dashboardVideo"
          },
          {
            h: "Los colores de los sectores",
            p: ["Cada sector se juzga por separado en cuanto lo completas."],
            list: [
              "<strong>Morado</strong>: el sector más rápido de la sesión, de cualquier piloto.",
              "<strong>Verde</strong>: tu mejor sector.",
              "<strong>Amarillo</strong>: completado, pero más lento que tu mejor.",
              "<strong>Gris</strong>: en curso, o aún sin nada con qué comparar."
            ]
          },
          {
            h: "Un toque para la traza en vivo a pantalla completa",
            p: [
              "Toca el centro del panel (la columna de la bandera, el delta, la marcha y la velocidad) para abrir la traza en vivo a pantalla completa. Dibuja tu acelerador, tu freno y tu volante mientras conduces.",
              "Toca en cualquier punto de la traza para cerrarla y volver al panel. El volante sigue la convención de la app: una curva a la izquierda sube la línea y una a la derecha la baja."
            ]
          },
          {
            h: "Toca la barra de la derecha para el muro de boxes",
            p: [
              "Una barra fina, <strong>MURO DE BOXES</strong>, recorre el borde derecho del panel. Tócala y el muro de boxes se desliza sobre el panel, con la misma sesión en vivo.",
              "Para volver, toca la barra <strong>PANEL</strong> en el borde izquierdo del muro de boxes, o su flecha atrás. En ambos sentidos es un toque: no hay ningún deslizamiento que puedas activar sin querer.",
              "En libres y clasificación, el muro de boxes también se abre solo mientras tu coche está en su box."
            ],
            shot: "pitWallTiming"
          },
          {
            h: "Abreviaturas y avisos en pantalla",
            p: [
              "Toca la previsión de lluvia en la barra superior para abrir la leyenda del panel, que explica cada abreviatura (BB, DIFF, PEN, SC, VSC, ERS y más). La misma <strong>Guía del panel</strong> está en Ajustes → SOPORTE.",
              "Con coche de seguridad virtual o coche de seguridad, un gran delta en pantalla te dice si mantienes el delta exigido. Las banderas rojas y las fases de dirección de carrera tienen también su aviso bien visible."
            ],
            shot: "vscDelta"
          },
          {
            h: "Clasificación y libres",
            p: ["La misma distribución sirve en todos los tipos de sesión. En clasificación, los tiempos por vuelta y los colores de sector pasan a ser el centro de la pantalla."],
            shot: "qualifying"
          }
        ],
        allFree: true,
        related: ["pit-wall", "traces", "jax"]
      },

      "pit-wall": {
        title: "El muro de boxes",
        summary: "Tiempos, tus vueltas, el estado del coche, el mapa en vivo, las trazas, los reglajes y los ajustes del juego, pestaña por pestaña.",
        sections: [
          {
            h: "Dos formas de entrar",
            p: [
              "Desde el panel, toca la barra <strong>MURO DE BOXES</strong> en el borde derecho. El muro de boxes se desliza encima; toca la barra <strong>PANEL</strong> o la flecha atrás para volver.",
              "Desde la pantalla de inicio, abre directamente <strong>Muro de boxes</strong>. Es útil en un segundo dispositivo, para un amigo que hace de ingeniero o si solo quieres los tiempos. Usa la flecha atrás para salir."
            ],
            shot: "pitWallVideo"
          },
          {
            h: "La cabecera",
            p: ["La cabecera muestra siempre el circuito, las temperaturas del aire y de la pista, la previsión de lluvia, el número de coches en pista y el reloj de sesión."],
            list: [
              "<strong>Jax</strong> abre el panel de la voz de Jax: activa o desactiva la <strong>Guía de audio de Jax</strong> y elige las categorías de mensajes sin salir de la sesión.",
              "<strong>Anteriores</strong> abre el historial de sesiones, ya filtrado por tu juego y tu coche. Un botón <strong>VOLVER AL MURO DE BOXES</strong> te trae de vuelta."
            ],
            shot: "pitWallHeader"
          },
          {
            h: "Las pestañas",
            list: [
              "<strong>TIMING</strong>: toda la parrilla. Cambia arriba entre <strong>CLASIFICACIÓN</strong> (el orden de la sesión) y <strong>EN VIVO</strong> (la vuelta en curso). Tu fila aparece resaltada.",
              "<strong>ME</strong>: tu tabla vuelta a vuelta: posición, tiempo, sectores, neumático y reglaje en cada vuelta.",
              "<strong>COCHE</strong>: el estado del coche: un coche visto desde arriba coloreado según daños y temperaturas, temperatura, desgaste y daños de neumáticos y frenos en cada esquina, calor y daños de la unidad de potencia y fallos de DRS/ERS.",
              "<strong>MAP</strong>: el mapa del circuito en vivo, cada coche con los colores de su equipo y los sectores dibujados sobre el trazado.",
              "<strong>TRACE</strong>: acelerador, freno, volante y velocidad en una vuelta, con una segunda vuelta para comparar. Consulta la guía de trazas.",
              "<strong>SETUP</strong>: los reglajes usados en esta sesión, con un enlace a toda tu biblioteca de reglajes.",
              "<strong>GAME</strong>: los ajustes del juego de la sesión."
            ],
            shots: ["pitWallMap", "pitWallCar"]
          },
          {
            h: "Mapa y traza a pantalla completa",
            p: ["MAP y TRACE tienen un botón de ampliar en su esquina superior derecha. Tócalo para ver una vista en vivo a pantalla completa y luego el botón de cerrar para volver a la pestaña en la que estabas."]
          },
          {
            h: "Cuando empieza una nueva sesión",
            p: ["Si el juego pasa a una nueva sesión mientras estás en el muro de boxes, JMD te avisa de que la sesión anterior terminó y se guardó, y empieza a seguir la nueva. Toca OK."]
          }
        ],
        access: {
          free: ["TIMING: toda la CLASIFICACIÓN, cada piloto", "GAME: los ajustes de juego de la sesión", "ME: tus vueltas y tus stints", "SETUP: tus reglajes de la sesión, por nombre"],
          pro: ["TIMING: EN VIVO", "COCHE", "MAP", "TRACE, con comparación de dos vueltas", "SETUP: los valores de los reglajes"],
          note: "Una pestaña bloqueada indica la función y lo que añade Jax Pro, y abre la pantalla de suscripción al tocarla. Las demos integradas muestran todas las pestañas completas."
        },
        related: ["dashboard", "traces", "free-and-pro"]
      },

      traces: {
        title: "Ampliar, usar y comparar trazas",
        summary: "Elige vueltas, compara una referencia con otra vuelta, haz zoom, desplázate y pasa a pantalla completa, en vivo en el muro de boxes o después en el historial.",
        sections: [
          {
            h: "Dónde están las trazas",
            list: [
              "<strong>Muro de boxes → TRACE</strong>, en vivo. Se abre en tu última vuelta válida y queda vacía hasta que completas una vuelta entera.",
              "<strong>Historial de sesiones → una sesión → TRAZA</strong>, después de la sesión. Se abre en tu mejor vuelta válida. Las trazas guardadas se ven igual tras reiniciar, y una nueva sesión en vivo nunca altera un análisis abierto.",
              "El <strong>panel</strong> tiene su propia traza en vivo a pantalla completa: un toque en el centro de la pantalla (consulta la guía del panel)."
            ],
            p: ["Las dos vistas comparten el mismo gráfico, los mismos gestos y las mismas fichas de vuelta: lo que aprendes en una sirve en la otra."],
            shot: "lapTrace"
          },
          {
            h: "Elegir y comparar vueltas",
            steps: [
              "Las fichas de arriba muestran el número y el tiempo de cada vuelta. Una ★ marca la mejor vuelta de la sesión y un icono de prohibido marca una vuelta no válida.",
              "Toca una ficha para mostrar esa vuelta. La primera vuelta elegida lleva la etiqueta <strong>REF</strong> (la referencia).",
              "Toca una segunda ficha para comparar. Lleva la etiqueta <strong>CMP</strong>. La referencia se dibuja atenuada y la comparación brillante, para ver dónde se separan las líneas.",
              "Debajo del gráfico aparecen la diferencia de tiempo por vuelta y la diferencia en cada sector.",
              "Toca <strong>ANÁLISIS</strong> para ver la lista de diferencias medidas entre las dos vueltas.",
              "Elige una tercera vuelta y sustituye a la más antigua de las dos. Vuelve a tocar una ficha seleccionada para quitarla."
            ],
            note: "Las vueltas de entrada y salida de boxes y una última vuelta sin terminar aparecen en la lista, marcadas como parciales, pero nunca se ofrecen como referencia ni como comparación."
          },
          {
            h: "Elegir qué se dibuja",
            p: [
              "Los botones bajo el gráfico (SPEED, GEAR, DRS, ERS) muestran u ocultan esas líneas. Un canal que el juego no envió no se dibuja, y su botón indica que no se registró.",
              "El panel junto al gráfico muestra el tiempo, los sectores, el neumático y el reglaje de la vuelta de referencia, y el tiempo de la vuelta comparada. Con el teléfono en vertical, esos datos pasan a una franja sobre el gráfico."
            ]
          },
          {
            h: "Zoom y desplazamiento",
            list: [
              "<strong>Toca dos veces</strong> para acercar por pasos: la mitad, un cuarto y un octavo de la vuelta. El cuarto doble toque vuelve a la vuelta completa.",
              "<strong>Pellizca</strong> para hacer zoom de forma continua, hasta una ventana de 25 metros.",
              "<strong>Arrastra con un dedo</strong> para recorrer la vuelta. Se detiene justo al principio y al final de la vuelta.",
              "<strong>REINICIAR ZOOM</strong> (o el botón flotante en vertical) vuelve a la vuelta entera."
            ]
          },
          {
            h: "Ampliar a pantalla completa",
            p: ["Toca el botón de ampliar en la esquina superior derecha del gráfico. La traza llena la pantalla con su leyenda y sus controles; en iPhone prefiere la orientación horizontal. Toca el botón de cerrar para volver exactamente donde estabas."]
          },
          {
            h: "Energía y ritmo (F1 26)",
            p: ["En las sesiones de F1 26 que registraron la aerodinámica activa o la energía ERS, la TRAZA del historial añade una fila <strong>ENERGÍA Y RITMO</strong>. Abre hasta cuatro hallazgos de tus vueltas comparables, cada uno con qué pasó, por qué importa y qué probar después."]
          }
        ],
        access: {
          free: ["La traza en vivo a pantalla completa del panel", "La TRAZA del historial para tu sesión más reciente"],
          pro: ["El TRACE del muro de boxes, en vivo, con comparación de dos vueltas", "La TRAZA de cada sesión anterior"]
        },
        related: ["pit-wall", "session-history", "dashboard"]
      },

      "prepare-for-session": {
        title: "Preparar sesión",
        summary: "Aprende el circuito con Acerca de y crea un plan para libres, clasificación o carrera con Sesión.",
        sections: [
          {
            h: "Elegir circuito y coche",
            p: [
              "Abre <strong>Preparar sesión</strong> desde la pantalla de inicio. Elige el circuito y el coche arriba. La lista de circuitos es alfabética y se puede buscar; también encuentra otros nombres, como «Spielberg» o «COTA». La lista de coches solo ofrece combinaciones de juego y fórmula compatibles.",
              "JMD recuerda tu elección para la próxima vez. Al desplazarte, los selectores se reducen a una sola línea que puedes seguir tocando."
            ]
          },
          {
            h: "Acerca de: aprender el circuito",
            p: ["<strong>Acerca de</strong> es la vista por defecto. Sus secciones se abren y cierran por separado:"],
            list: [
              "<strong>Resumen</strong>: el mapa del circuito con las curvas numeradas, los datos clave y, para los coches de 2026, las zonas de Straight Mode y Overtake.",
              "<strong>Curvas a preparar</strong>: las curvas que más importan.",
              "<strong>Prioridades de reglaje</strong>: en qué pensar, con un enlace a tus reglajes para este circuito.",
              "<strong>Neumáticos</strong>: qué esperar de los neumáticos aquí.",
              "<strong>Mis datos</strong>: lo que te enseñan tus propias sesiones en este circuito."
            ]
          },
          {
            h: "Explorar el mapa",
            p: ["Toca el mapa para abrir el visor a pantalla completa. Pellizca para hacer zoom (hasta 6×), arrastra para desplazarte, gira con dos dedos y toca dos veces para restablecerlo todo. El mapa nunca se pierde fuera de la pantalla."]
          },
          {
            h: "Sesión: crea tu plan",
            p: [
              "Cambia a <strong>Sesión</strong> y cuéntale a JMD qué vas a hacer: la ocasión (un fin de semana de carrera, un ensayo, una sesión suelta o Contrarreloj), la sesión, tu intención (competir, ensayar, o aprender y probar) y, cuando aplica, la duración.",
              "JMD crea un plan estructurado: <strong>Tu plan</strong> enumera los pasos en orden y después viene <strong>Dónde centrarte</strong>."
            ],
            shot: "prepare"
          }
        ],
        access: {
          free: ["Acerca de: la vista general del circuito — mapa, longitud, curvas, zonas DRS y reglas 2026", "El visor de mapa a pantalla completa", "Mis datos: cuántas sesiones tuyas tiene JMD en este circuito"],
          pro: ["Acerca de: curvas a preparar, prioridades de reglaje, neumáticos, pérdida en boxes y análisis del circuito", "Sesión: tu plan de preparación completo", "Mis datos: lo que te enseñan tus propias sesiones en este circuito"]
        },
        related: ["setups", "session-history", "racing-tips"]
      },

      "session-history": {
        title: "Historial de sesiones y Race Replay",
        summary: "Encuentra cualquier sesión guardada, lee sus resultados, revive una carrera y analiza tus vueltas.",
        sections: [
          {
            h: "Las sesiones se guardan solas",
            p: [
              "Con el seguimiento de sesiones activado (Ajustes → AJUSTES), JMD guarda cada sesión al terminar. Después de una carrera te dice en qué posición acabaste, con un enlace <strong>¿No es correcto?</strong> por si necesitas corregir cómo terminó la carrera. Solo te pregunta cuando la telemetría se detiene y de verdad no puede saber si la sesión terminó.",
              "Abre el <strong>Historial de sesiones</strong> desde la pantalla de inicio, o toca <strong>Anteriores</strong> en el muro de boxes."
            ]
          },
          {
            h: "Encontrar una sesión",
            p: ["La pestaña <strong>SESIONES</strong> enumera cada sesión guardada. Usa la búsqueda, el orden y los filtros por liga, temporada, juego, fórmula y tipo de sesión. La pestaña <strong>STATS</strong> reúne tus cifras de carrera deportiva, y la barra de título cuenta tus poles, victorias y podios."],
            shot: "sessionHistory"
          },
          {
            h: "Dentro de una sesión",
            p: ["Toca una sesión para abrirla. Las pestañas se adaptan al tipo de sesión:"],
            list: [
              "<strong>DESTACADOS</strong>: la historia de la sesión. En una carrera: primero los resultados, las penalizaciones y las estadísticas, y después tu carrera: posiciones, tus vueltas, el gráfico de posiciones, la estrategia de neumáticos y los incidentes. En libres y clasificación: tu ritmo, tus vueltas válidas y no válidas y tu regularidad.",
              "<strong>REPETICIÓN</strong>: en carreras y sprints, Race Replay reconstruye la carrera vuelta a vuelta: el orden, las diferencias, los neumáticos y los incidentes. Usa los controles |&lt; &lt; ▶ &gt; &gt;| para reproducir, pausar y avanzar. Libres y clasificación repiten la tabla de tiempos; Contrarreloj repite tus vueltas.",
              "<strong>TRAZA</strong>: compara vueltas (consulta la guía de trazas).",
              "<strong>SESIÓN</strong>: los detalles y las condiciones de la sesión, y el lugar donde asignarle una liga y una temporada.",
              "<strong>SETUP</strong>: los reglajes que usaste, que puedes renombrar y valorar."
            ],
            shot: "raceReplayLandscape"
          },
          {
            h: "Resultados de carrera",
            p: ["Los resultados muestran la clasificación oficial: posición de salida, puestos ganados o perdidos, tiempo de carrera, mejor vuelta, stints de neumáticos, vueltas y penalizaciones."],
            shot: "raceResults"
          }
        ],
        access: {
          free: ["Cada sesión se guarda; el guardado nunca se bloquea", "Todas tus sesiones en la lista, con estadísticas de todas ellas", "Tu sesión más reciente completa, con momentos clave, historial de vueltas, repetición y trazas"],
          pro: ["Cada sesión anterior se abre completa"],
          note: "Las sesiones más antiguas siguen en la lista con la insignia Jax Pro. No se borra nada cuando termina una suscripción, y al volver a suscribirte se abren los mismos registros."
        },
        related: ["leagues-and-seasons", "traces", "setups"]
      },

      "leagues-and-seasons": {
        title: "Asignar ligas y temporadas a tus sesiones",
        summary: "Agrupa tus carreras de liga y tus temporadas, y filtra el historial y tus estadísticas por ellas.",
        sections: [
          {
            h: "Por qué asignar una sesión",
            p: ["Si corres en una o varias ligas, asignar las sesiones mantiene juntas las de cada liga. Filtra el historial o tus estadísticas por liga y temporada para seguir un campeonato, sin mezclar tus entrenamientos en solitario."],
            shot: "sessionHistoryLeague"
          },
          {
            h: "1. Crear una liga",
            p: ["La liga tiene que existir antes de que puedas asignarle una sesión."],
            steps: [
              "Abre el historial de sesiones desde la pantalla de inicio.",
              "En la pestaña SESIONES, toca el filtro <strong>Todas las ligas</strong> (lleva un icono de lápiz).",
              "Toca <strong>Gestionar ligas…</strong>",
              "Toca <strong>+</strong>, escribe el nombre de la liga y toca <strong>Add League</strong>."
            ],
            note: "Borrar una liga nunca borra una sesión. Las sesiones asignadas simplemente dejan de mostrar una liga."
          },
          {
            h: "2. Asignar una liga a una sesión",
            steps: [
              "Abre la sesión en el historial.",
              "Ve a la pestaña <strong>SESIÓN</strong> y busca <strong>LIGA Y TEMPORADA</strong>.",
              "Toca <strong>Liga</strong> y elige una liga en <strong>ASIGNAR LIGA</strong>, o <strong>Ninguna</strong> para quitar la asignación."
            ],
            note: "Si aún no tienes ligas, la fila Liga dice «Sin ligas». Crea una primero, como en el paso 1.",
            shot: "sessionLeagueSeason"
          },
          {
            h: "3. Asignar una temporada a una sesión",
            steps: [
              "En el mismo grupo <strong>LIGA Y TEMPORADA</strong>, toca <strong>Temporada</strong>.",
              "Elige un año en <strong>ASIGNAR TEMPORADA</strong> (del año actual hasta 2020), o <strong>Ninguna</strong>."
            ]
          },
          {
            h: "4. Filtrar por liga y temporada",
            p: ["De vuelta en la pestaña SESIONES, toca <strong>Todas las ligas</strong> o <strong>Todas las temporadas</strong> para mostrar una sola liga o temporada. La lista de temporadas solo ofrece los años que hayas asignado. La pestaña STATS tiene los mismos filtros de liga y temporada."],
            shot: "sessionHistory"
          }
        ],
        access: {
          free: ["Crear ligas y asignar las sesiones que puedes abrir", "Los filtros de liga y temporada"],
          pro: ["Abrir y asignar cada sesión guardada, no solo la más reciente"]
        },
        related: ["session-history", "free-and-pro"]
      },

      setups: {
        title: "Reglajes y valoraciones",
        summary: "JMD captura tus reglajes automáticamente. Valóralos, ponles nombre y encuentra el adecuado cuando lo necesites.",
        sections: [
          {
            h: "Capturados por ti",
            p: ["Nunca escribes un reglaje. JMD registra el reglaje que usas en cada sesión y con ellos crea tu biblioteca. Ábrela desde la pantalla de inicio con <strong>Ver reglajes</strong>, desde la pestaña SETUP del muro de boxes o desde la sección de reglajes de Preparar sesión."],
            shot: "setupLibrary"
          },
          {
            h: "Encontrar un reglaje",
            p: ["La biblioteca es una tabla: juego, título, circuito, valoración y sesión. Se abre ordenada por juego, la edición más reciente primero, para que nunca cargues por error un reglaje de un juego anterior. Toca una cabecera de columna o usa <strong>Ordenar por</strong>: juego, circuito, valoración, título o Uso reciente. Los filtros acotan la lista por circuito, categoría (F1 o F2) y juego."]
          },
          {
            h: "Valorar un reglaje",
            steps: [
              "Abre un reglaje desde la biblioteca, o abre una sesión en el historial y ve a su pestaña <strong>SETUP</strong>.",
              "Toca las estrellas: una estrella es <strong>Flojo</strong>, dos <strong>Bueno</strong> y tres <strong>Excelente</strong>.",
              "Para quitar la valoración, vuelve a tocar la estrella seleccionada. El reglaje vuelve a Sin valorar."
            ],
            p: ["La valoración y el nombre pertenecen al reglaje, no a una sola sesión. Valóralo en el historial y la biblioteca muestra las mismas estrellas, y al revés. En la biblioteca, ordena por <strong>Valoración</strong> para poner primero tus mejores reglajes."],
            shot: "setupRating"
          },
          {
            h: "Ponerle nombre y anotar la cámara",
            p: ["En la pantalla de un reglaje puedes renombrarlo y ver cuántas sesiones lo usaron y cuándo se usó por última vez. Una sección <strong>CÁMARA / VISTA DE CONDUCCIÓN</strong>, marcada MANUAL, te permite anotar tu campo de visión y los desplazamientos de cámara. El juego no envía esos valores, así que los escribes tú."]
          }
        ],
        access: {
          free: ["Todos los reglajes que has usado, en la lista por juego, circuito, nombre, valoración y sesión", "Cada reglaje nuevo se guarda con su sesión"],
          pro: ["Abrir los valores de un reglaje, compararlos, renombrarlos, valorarlos y anotar la cámara"]
        },
        related: ["session-history", "prepare-for-session", "pit-wall"]
      },

      "racing-tips": {
        title: "Consejos de carrera",
        summary: "Lecciones breves y prácticas sobre técnica de conducción, herramientas de carrera, preparación y reglas, cada una con un ejercicio.",
        sections: [
          {
            h: "Cuatro grupos de consejos",
            p: ["Abre <strong>Consejos de carrera</strong> desde la pantalla de inicio. No necesitas el juego ni una sesión en marcha."],
            list: [
              "<strong>Técnica de conducción</strong>: frenada en apoyo (trail braking), la trazada, la salida de curva, conducir en mojado, defender.",
              "<strong>Herramientas de carrera</strong>: ERS, DRS, gestión de energía en F1 26, combustible, gestión de neumáticos, cómo leer tu delta.",
              "<strong>Preparación</strong>: reglajes, planificación de carrera y de fin de semana, preparación de la clasificación, estrategia de paradas.",
              "<strong>Reglas &amp; penalizaciones</strong>: compuestos C0–C6, modos de batería 2026, límites de pista y más."
            ],
            shot: "racingTips"
          },
          {
            h: "Leer, practicar, marcar como leído",
            steps: [
              "Toca un consejo para abrirlo: un resumen de una línea y después la explicación.",
              "Usa el recuadro <strong>PRACTICAR</strong>. Te da una cosa concreta que probar en tu próxima sesión.",
              "Toca <strong>Marcar como leído</strong> al terminar. El punto del consejo se vuelve verde en la lista, para que veas lo que te queda. Toca <strong>Marcar como no leído</strong> para deshacerlo."
            ],
            shot: "racingTipsDetail"
          }
        ],
        allFree: true,
        related: ["prepare-for-session", "dashboard", "jax"]
      },

      jax: {
        title: "Jax, la voz de tu ingeniero",
        summary: "Configura cómo te habla Jax, elige de qué habla y cámbialo en plena sesión.",
        sections: [
          {
            h: "Qué hace Jax",
            p: ["Jax convierte la telemetría en vivo en avisos hablados, breves y oportunos, sobre diferencias, neumáticos, combustible, clima, penalizaciones y más. Jax habla cuando es útil y se calla cuando no lo es, por ejemplo en las primeras vueltas o en el pit lane."]
          },
          {
            h: "Configurar Jax",
            p: ["Abre los ajustes (el engranaje de la pantalla de inicio) y la pestaña <strong>JAX</strong>:"],
            list: [
              "<strong>Jax te llama</strong>: el nombre que Jax usa contigo.",
              "Activa o desactiva la <strong>Guía de audio de Jax</strong>, elige la <strong>Voz del ingeniero</strong> y una <strong>Señal de radio</strong> antes de que Jax hable.",
              "Ajusta la velocidad y el tono de la voz y toca <strong>Probar la voz de Jax</strong>.",
              "Elige un <strong>Estilo de voz</strong> y si Jax usa <strong>Términos técnicos</strong>.",
              "Elige las categorías de mensajes: Diferencias, Cruce de vuelta, Clima, Combustible, Gestión de energía, Neumáticos, Estrategia de penalización, Compañero, Motivación, Técnica de carrera, Estrategia y Control de carrera.",
              "La <strong>Guía de configuración de audio</strong> explica cómo oír a Jax junto al sonido del juego: altavoz del teléfono, auriculares, unos cascos con dos fuentes o un mezclador."
            ],
            shot: "settingsJax"
          },
          {
            h: "Cambiarlo en plena sesión",
            p: ["En el muro de boxes, toca el botón <strong>Jax</strong>: encontrarás el interruptor <strong>Guía de audio de Jax</strong> y las categorías de mensajes, sin salir de la sesión."],
            shot: "quickJax"
          },
          {
            h: "Escuchar a Jax sin el juego",
            p: ["En Ajustes → SOPORTE, abre <strong>Explorar las demos de JMD</strong> y reproduce la demo de la guía de audio de Jax. Elige carrera, sprint, clasificación, libres o Contrarreloj. Cada tarjeta muestra la situación y si Jax habló o se contuvo, y por qué."],
            shot: "jaxAudio"
          }
        ],
        access: {
          free: ["Los avisos urgentes de seguridad: coche de seguridad, VSC, banderas roja, amarilla y azul, una penalización que te imponen, un coche parado delante, el tráfico al salir de boxes", "Tu vuelta en la línea: vuelta, tiempo y diferencia con el de delante", "Todos los ajustes de voz, la prueba de voz y la demo de Jax"],
          pro: ["Tu ingeniero de carrera completo: coches que se acercan, tráfico, neumáticos, combustible, energía, ventanas de parada, daños, clima y ritmo"]
        },
        related: ["dashboard", "pit-wall", "racing-tips"]
      },

      "free-and-pro": {
        title: "Qué es gratis y qué incluye Jax Pro",
        summary: "Gratis te permite correr, grabar y ver tu actividad. Jax Pro te ayuda a entender, revisar, gestionar y mejorar tu pilotaje.",
        sections: [
          {
            h: "Gratis para siempre",
            list: [
              "Todo el panel, incluida su traza en vivo a pantalla completa",
              "Muro de boxes: toda la CLASIFICACIÓN del TIMING para cada piloto, GAME, ME, y SETUP con tus reglajes por nombre",
              "Preparar la sesión → Acerca de: la vista general del circuito — mapa con la línea de salida/meta, longitud, curvas, zonas DRS y reglas 2026",
              "El guardado de cada sesión; nunca se bloquea",
              "Historial de sesiones: todas tus sesiones en la lista, con estadísticas de todas ellas",
              "Tu sesión más reciente completa: momentos clave, clasificación, historial de vueltas, trazas y repetición",
              "Biblioteca de reglajes: todos los reglajes que has usado, en la lista",
              "Jax: los avisos urgentes de seguridad — coche de seguridad, VSC, banderas roja, amarilla y azul, una penalización que te imponen, un coche parado delante, el tráfico al salir de boxes — y tu vuelta en la línea",
              "El cronometraje en directo y el registro de vueltas en contrarreloj",
              "Los consejos de pilotaje, las demos integradas, los ajustes, la privacidad, el soporte y la copia de seguridad en iCloud"
            ]
          },
          {
            h: "Añadido por Jax Pro",
            list: [
              "Jax, tu ingeniero de carrera completo: coches que se acercan, tráfico, neumáticos, combustible, energía, ventanas de parada, daños, clima y ritmo",
              "Muro de boxes: TIMING EN VIVO, COCHE, MAP y TRACE (con comparación de dos vueltas)",
              "Todas tus sesiones anteriores completas: detalles, momentos clave, historial de vueltas, trazas y repetición",
              "Los valores de tus reglajes, sus comparaciones, nombres y valoraciones, allí donde aparezcan",
              "Preparar la sesión: curvas, prioridades de reglaje, neumáticos, pérdida en boxes y análisis del circuito, Mis datos, y tu plan de sesión"
            ]
          },
          {
            h: "Prueba y planes",
            p: [
              "Jax Pro se ofrece en suscripciones mensual y anual del App Store, ambas con una prueba gratuita de 14 días para las cuentas que cumplan los requisitos. Durante la prueba, todo lo anterior está disponible. Cancela antes de que termine y no se te cobra.",
              "Los requisitos, el precio en tu país y la oferta exacta los muestra la hoja de compra de Apple antes de confirmar. Apple cobra y renueva la suscripción hasta que la canceles en los ajustes de suscripciones de tu cuenta de Apple."
            ],
            shot: "settingsSetup"
          },
          {
            h: "Suscribirse y restaurar",
            p: ["Cada función bloqueada abre la pantalla de suscripción con una frase sobre lo que desbloquea, los planes y la restauración de compras (<strong>¿Ya suscrito? Restaurar</strong>). En cuanto te suscribes, vas directamente a lo que tocaste, sin reiniciar. La tarjeta Jax Pro de los ajustes muestra tu estado."]
          },
          {
            h: "Tus datos nunca quedan secuestrados",
            p: [
              "Gratis nunca limita lo que se guarda. Cada sesión y cada reglaje se conserva y aparece en la lista, sean cuantos sean. Una sesión nueva pasa a ser la que puedes abrir completa; la anterior conserva su lugar en la lista. Puedes borrar una sesión en cualquier momento.",
              "Si termina una suscripción, no se borra, recorta ni reordena nada. Vuelve a suscribirte y se abren los mismos registros."
            ]
          },
          {
            h: "Pruébalo todo en las demos",
            p: ["Las demos integradas (Ajustes → SOPORTE → Explorar las demos de JMD) muestran cada vista de Jax Pro y el ingeniero de carrera completo con datos de ejemplo, para que veas lo que obtendrías antes de decidir. Una demo nunca concede ni registra una suscripción."]
          }
        ],
        related: ["pit-wall", "session-history", "prepare-for-session"]
      }
    }
  }
};
