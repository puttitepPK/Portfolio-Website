# Puttitep Kaewket — Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS for the
Vibe Coding Portfolio assignment (CS & Software Innovation Development,
Sripatum University).

## Run locally

```bash
npm install
npm run dev
```

Open the printed `http://localhost:5173` URL.

## Edit your content

Almost everything on the page — name, contact links, skills, and every
project's problem/solution/role/tech/outcome — lives in one file:

```
src/data.js
```

Edit that file and the whole site updates. Section layout lives in
`src/components/`.

## Deploy to Vercel (recommended, free)

**Option A — from GitHub (recommended):**
1. Push this folder to a new GitHub repository.
2. Go to vercel.com, sign in with GitHub, click **Add New → Project**,
   and import the repository.
3. Vercel auto-detects Vite. Leave the defaults and click **Deploy**.
4. You'll get a public URL like `https://your-repo-name.vercel.app`.
   Every future push to `main` redeploys automatically.

**Option B — from your computer, no GitHub required:**
```bash
npm install -g vercel
vercel
```
Follow the prompts (log in, confirm the project folder). Vercel prints
a public URL when it finishes.

## Deploy to Netlify (alternative)

1. Run `npm run build` — this creates a `dist/` folder.
2. Go to app.netlify.com/drop and drag the `dist/` folder in. Netlify
   gives you a public URL immediately. (For auto-redeploys on every
   push, connect your GitHub repo instead under
   **Add new site → Import an existing project**.)

## Before you submit

- [ ] Open the public URL in an incognito window — does it load?
- [ ] Click every nav link and both hero buttons
- [ ] Open the Email / GitHub / LinkedIn links in Contact — do they work?
- [ ] Test on your phone (or resize the browser to ~375px)
- [ ] Check the browser console for errors (F12 → Console)
- [ ] Confirm no API keys or passwords are committed to the repo
- [ ] Push the final code to GitHub so the repository is submittable

See `VIBE_CODING_PROCESS.md` for the write-up of how this was built,
which the assignment also asks you to submit.
