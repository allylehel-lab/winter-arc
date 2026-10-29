# Winter Arc — Personal iPhone App

A free, private, 75-day (or 70-day) habit tracker with an anime winter theme.

## Features
- Daily checkbox or number-based habits, including minimum/maximum targets
- Weekly workouts tracked on whichever days you do them, with progress totals
- Breakfast/lunch/dinner marked health-focused, flexible, skipped or not logged
- 80/20 weekly meal balance (at least 17 of 21 eaten meals in a normal full week)
- Challenge progress, calendar, week summaries, and historical habit stats
- Add, edit, archive and restore habits within Settings, preserving past targets
- Export/import JSON backups and reset/archive your previous challenge
- Works offline after installed and cached (full multi-file version)

Your entries are stored locally in the browser, not sent to the site host.
**No automatic Apple Health or Screen Time integration.**

## Put the full app on GitHub Pages for free
1. Sign up/sign in at https://github.com (no payment required).
2. Create a new **public** repository, e.g. `winter-arc`, with default branch `main`.
3. From the repository, choose **Add file > Upload files** and upload all 8 files in this folder (including `index.html` at the repository root). Don't upload the ZIP itself as the website.
4. Commit the upload. Go to **Settings > Pages** and select **Deploy from a branch**: `main`, `/ (root)`, **Save**.
5. Once GitHub Pages finishes publishing, open `https://YOUR-USERNAME.github.io/winter-arc/` in **Safari on your iPhone**.
6. Tap Safari **Share > Add to Home Screen**, ensure **Open as Web App** if offered, and tap **Add**.
7. Open the new Winter Arc icon and set your habits and start date in Settings.

The repo's *code* is public, but your habit entries are not uploaded to GitHub. If your phone's browser/app data are removed, the entries can be lost. Export regular backups from **Settings > Export** and keep them in Files.

### Single-file fallback
The separately supplied `winter-arc-one-file-index.html` is an all-in-one version: rename it to `index.html` and upload that single file. This is easier on iPhone but **does not have offline caching**. Use the full 8-file package for the best Home Screen experience.
