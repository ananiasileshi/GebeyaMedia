# Gebeya Media — Static Prototype

## Files

- `index.html` — homepage prototype
- `work.html` — work scaffold
- `about.html` — about scaffold
- `blog.html` — blog scaffold
- `post.html` — blog post template
- `contact.html` — contact scaffold
- `project.html` — project case study template
- `styles.css` — global design tokens + UI styles
- `app.js` — interactions (preloader, overlay nav, curtain transitions, cursor, accordion, etc.)
- `logo_inverted-1024x427.png` — header/overlay logo image

## Preview

### Option A: Open directly

Open `index.html` in your browser.

### Option B: Simple local server (recommended)

From the project folder:

```powershell
python -m http.server 5173
```

Then open:

- http://localhost:5173/index.html

## Notes

- Fonts in the spec (Clash Display / Cabinet Grotesk / Satoshi) are referenced by name but not bundled yet.
- The hero and showreel video currently use an online placeholder MP4.
- Reduced motion is respected via `prefers-reduced-motion`.
