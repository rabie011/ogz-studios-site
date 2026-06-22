# OGZ Studios — Static Site (Lovable handoff + GitHub Pages ready)

`index.html` is the complete, self-contained website. All images, fonts and the
brand mouth mascots are inlined; the work videos open via their public links
(YouTube / Vimeo / Google Drive / Instagram / X). No build step, no dependencies —
open it in any modern browser and it works.

> Files in this folder: `index.html` (the whole site, 11.5 MB), this `README.md`,
> and `.nojekyll` (lets GitHub Pages serve the file as-is).

---

## A) Put it in Lovable — WITHOUT spending AI credits

Lovable charges for **AI chat prompts**, not for code edits or a GitHub import.
So do **NOT** paste this into the chat and ask it to rebuild — just serve the file.

### Route 1 — GitHub import (recommended, ~0 credits, no command line)
1. github.com → **New repository** (e.g. `ogz-studios-site`), Public, *don't* add a README.
2. On the empty repo, click **“uploading an existing file”** → drag in
   **`index.html`** (it's 11.5 MB — under GitHub's 25 MB web-upload limit ✓).
   Drag `README.md` and `.nojekyll` too if you like. **Commit changes**.
3. In Lovable: **New Project → Import from GitHub** (or Project Settings →
   **GitHub → Connect**), pick the repo.
4. Lovable serves `index.html` as the homepage. Hit **Publish** (top-right) for a
   shareable `*.lovable.app` link.

### Route 2 — Lovable code editor (also ~0 credits, no GitHub)
1. In Lovable, create a blank project.
2. Open the **Code / Dev view** (the `</>` editor, **not** the AI chat).
3. Replace the project's `index.html` contents with this file's contents (or drop
   this file into `public/` and point the entry at it).

### Find it again later
Lovable dashboard → lovable.dev → **My Projects** → your project. The live preview
URL is top-right (globe / “Preview”); **Publish** gives the `*.lovable.app` URL.

---

## B) Free backup URL via GitHub Pages (optional, same repo)

The same repo can also serve a free `github.io` link as a backup to Lovable:
1. Repo → **Settings → Pages**.
2. **Source:** “Deploy from a branch” → **Branch:** `main` → **Folder:** `/ (root)` → **Save**.
3. Wait ~1 minute → your site is live at
   `https://<your-username>.github.io/<repo-name>/`

The included `.nojekyll` tells Pages to serve the files as-is (no Jekyll processing).

---

## Notes
- **Browser support:** the bundle unpacks its assets with modern browser APIs
  (`DecompressionStream`), so it needs a current, JS-enabled browser. Fine for any
  normal visitor; it won't render with JavaScript disabled.
- **Editing later:** keep editing the original design in Claude Design; when you want
  a new build, re-export the standalone bundle and replace `index.html` in the repo —
  Lovable and GitHub Pages both redeploy automatically on push.
