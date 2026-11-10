# Jax Max Delta — Privacy Policy

**Original effective date:** August 17, 2026

**Last updated:** November 9, 2026

Jax Max Delta ("the app") is a product owned and operated by Camilore Inc.
("Camilore", "we", "us"). Subject to completion of the applicable transfer
documentation, Camilore Inc. assumed ownership and operation on October 1, 2026.
This policy explains what the app does with your information. It is written to be read,
not to be survived.

## 1. The short version

- Jax Max Delta has **no user accounts**. You may optionally enter a name for Jax
  to call you; it is stored locally with your app preferences.
- Your telemetry, lap data, session history, race history and car setups are stored
  **on your device**. They are never published to leaderboards and never shared with
  other drivers.
- We do not sell or rent your data, and we do not use it for advertising. Limited
  third-party processing is described below.
- Information leaves your device only through **crash diagnostics**, **purchase and
  subscription processing**, support messages or exports you initiate, and — only if
  your device has iCloud available and iCloud Backup is on — a **backup of your session
  history and race history in your own private iCloud container**, which Camilore
  cannot read. Checking for new Racing Tips contacts GitHub but sends nothing about
  you (see 4.6).
- You can delete the data on your device at any time from inside the app, or by deleting
  the app. iCloud backups are removed separately (see 4.3).

## 2. What the app receives from your game

Jax Max Delta listens on your local network for the UDP telemetry your F1 game
broadcasts (EA F1 24, F1 25 and F1 26). That traffic:

- travels only across your own network, from your console or PC to your phone;
- is received by the app, never sent onward by it;
- contains race data — lap times, speed, tyre state, positions, the names the game
  assigns to drivers in your session — and no information about you personally.

The app does not transmit telemetry to us or to anyone else.

## 3. What is stored on your device

The following stay in the app's private storage on your device:

- session history (tracks, session types, lap and sector times, positions, results,
  events, penalties, weather);
- race history for Race Replay (every driver's laps, positions, tyres, pit stops and
  race events, as broadcast by the game);
- lap traces (throttle, brake, steering, speed, gear, ERS, DRS samples);
- car setups captured from your sessions, and your ratings of them;
- your app preferences: connection host and port, game selection, language, units,
  the optional name you ask Jax to use, Jax voice and audio-guidance settings,
  and the data-retention setting.

You control how long the heavier data — lap traces and race history — is kept through
**Settings → SETUP → Storage → Keep race data for** (forever, 1 year, 9, 6, 3 or 1
months, or 1 week). Choosing a shorter period asks before anything is deleted. Session
results, laps and positions are not affected by that setting. You can delete individual
sessions or all of them at any time.

## 4. What leaves your device

### 4.1 Purchases

Subscriptions are sold by Apple and managed for us by RevenueCat, Inc. When you
subscribe or restore a purchase, Apple and RevenueCat process the transaction and an
anonymous app-installation identifier so the app knows whether your subscription is
active. We never receive your payment details — Apple handles payment entirely.

- Apple's privacy policy: https://www.apple.com/legal/privacy/
- RevenueCat's privacy policy: https://www.revenuecat.com/privacy

### 4.2 Crash and stability diagnostics

The app uses Google Firebase Crashlytics to report crashes and errors so we can fix
them. A crash report contains technical information — the error, the code path, device
model, operating-system version, app version and an anonymous installation identifier.
It does not contain your telemetry, your session history, your setups, or anything that
identifies you personally. We do not use this data for advertising and it is not linked
to an identity.

- Firebase privacy information: https://firebase.google.com/support/privacy

### 4.3 iCloud backup of your session history

If your device has iCloud enabled and available, the app backs up your session history,
league data and race history after each completed session into **the app's own private
iCloud container** (`iCloud.com.camilore.jaxmaxdelta`) inside **your** iCloud account.
iCloud Backup is on by default; you can turn it off in **Settings → SETUP → Session
Tracking & iCloud Backup**. This is a real, shipped feature and this policy states it
plainly.

- The backup contains your session records, leagues and the race history used for
  Race Replay (one file per race). It does **not** contain lap traces (your throttle,
  brake and steering samples), which remain only on the device that captured them.
- The race history in iCloud mirrors your device. When a session's race history is
  deleted on the device — by you, or by the "Keep race data for" setting — its copy is
  removed from iCloud at the next backup. Session records remain in the dated backup
  copies until those copies are replaced.
- The container belongs to your Apple Account. Apple provides the storage. **We have no
  access to it** — we cannot read, list or recover your backups.
- The app keeps the most recent backup plus up to five dated copies, and prunes older
  ones.
- Before restoring, the app writes a local safety copy on your device so a restore can
  be undone.
- Restoring never overwrites a session already on the device.
- To remove these backups, delete the app's data from iCloud in iOS Settings. Deleting
  the app removes the data stored on the device; it is not the way to remove the iCloud
  backups.

Apple's handling of iCloud data is governed by Apple's privacy policy.

### 4.4 Exports you initiate

In **Settings → SETUP → Export & Import** you can export your session history, leagues
and race history to a single file and share it through the iOS share sheet (Files,
AirDrop, Messages, and so on). Lap traces are not included. This happens only when you
ask for it, the file goes wherever you send it, and it does not pass through us. You can
import such a file on any device; importing never overwrites a session already there.

### 4.5 Support messages and feature suggestions

If you contact `support@jaxmaxdelta.com`, Camilore receives only what you choose to
send — typically your email address, device model, app version and a description of
the issue. We use it to answer you, troubleshoot, keep support records and improve the
product. Do not send raw telemetry or sensitive files unless support requests them and
you are comfortable sharing them.

Feature suggestions sent to the same address are voluntary and are handled like any
other support message. Nothing from the app is attached automatically.

### 4.6 Racing Tips updates

When the app starts, and when you pull down on the Racing Tips list, it asks GitHub (raw.githubusercontent.com, operated by GitHub, Inc.) whether a new edition of the Racing Tips is available, and downloads it if there is one. These are plain requests for public files: the app sends no identifier, account, cookie or information about you, your device or your sessions. As with any request on the internet, GitHub receives your device's IP address in order to answer it, and handles it under its own privacy statement.

## 5. What we do not do

- No in-app accounts, sign-up or automatic email collection.
- No leaderboards or public profiles, and no publishing or sharing of your sessions,
  setups or lap traces with other drivers.
- No advertising, no ad identifiers, no IDFA, no ad networks.
- No cross-app or cross-site tracking, and no App Tracking Transparency prompt, because
  we do not track.
- No product analytics or behavioural telemetry sent to us.
- No selling or renting your data.
- No location collection. The app does not request location access.
- No contacts, photos, microphone or camera access.

## 6. Legal bases (EEA/UK users)

Where the GDPR applies, we rely on:

- **Contract** — processing purchase and subscription status so we can give you the
  features you paid for;
- **Legitimate interests** — crash diagnostics, to keep the app from failing on your
  device, balanced against the fact that the data is technical and not identity-linked.

We do not process special categories of data and we do not carry out automated
decision-making that produces legal effects.

## 7. Retention

- Data on your device is kept until you delete it, either by deleting sessions in the
  app, letting your retention setting prune lap traces and race history, or deleting
  the app.
- iCloud backups are kept in your own container until you delete them; the app itself
  keeps the latest plus five dated copies, and removes the race history of sessions no
  longer on your device.
- Crash reports are retained by Firebase according to Google's published Crashlytics
  retention periods.
- Purchase records are retained by Apple and RevenueCat under their own policies.
- Support emails, including feature suggestions, are kept as support records for as
  long as they are needed to answer you, follow up and improve the product.

## 8. Your rights

Depending on where you live, including in Canada or Quebec, applicable privacy law may
give you rights concerning access, correction, deletion, withdrawal of consent, data
portability or complaints to a privacy regulator. These rights are not absolute and
depend on the information and law involved. Most JMD data is under your direct control
in the app. For questions or requests involving support records, diagnostics or
purchase status, contact `support@jaxmaxdelta.com`. We may need enough information to
verify and respond to a request without creating a user account.

## 9. Children

Jax Max Delta is rated 4+ in the App Store and is designed for sim racers, but it is not
directed specifically to children. We do not knowingly solicit personal information
from children. If you believe a child sent personal information to support, contact us
so we can review and address it.

## 10. International processing

Apple, Google, RevenueCat and GitHub provide services internationally and may process
limited purchase, diagnostic or connection information outside your province, state or country under their
own terms and privacy practices. Review the linked provider notices for current details;
Camilore does not claim a processing location that those providers have not verified.

## 11. Changes to this policy

If this policy changes, we will update the last-updated date and publish the revised
version at this address. We will not backdate a revision. Material app-facing changes
may also be described in release notes.

## 12. Contact

Camilore Inc. is responsible for Jax Max Delta.

Privacy and support inquiries: support@jaxmaxdelta.com

Corporate website: https://camilore.com
