# Alcove Nest 🏔️

A dark, atmospheric mountain homestay landing page — built with Astro + Tailwind CSS, ready for Netlify.

## Before you deploy

Open `src/pages/index.astro` and update these two lines at the top:

```js
const bookingEmail    = "stay@alcovenest.com";  // ← your real email
const whatsappNumber  = "919999999999";           // ← your WhatsApp (country code + number, no +)
```

Also update in the footer at the bottom of the file:
- Location (currently "Chail, Himachal Pradesh")
- Email shown in footer

## Deploy to Netlify (5 minutes)

### Option A — Drag & Drop (easiest, no account needed)
1. `npm install && npm run build`
2. Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Live instantly ✅

### Option B — GitHub (recommended for future edits)
1. Push this folder to a GitHub repo
2. Go to [app.netlify.com](https://app.netlify.com) → Add new site → Import from Git
3. Select your repo — `netlify.toml` handles the rest automatically
4. Click Deploy ✅

## Local development

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Customise

| What | Where |
|------|-------|
| Email / WhatsApp | Top of `src/pages/index.astro` |
| Room names & prices | `rooms` array in `index.astro` |
| Experiences list | `experiences` array in `index.astro` |
| Location details | `#location` section |
| Colors | `tailwind.config.mjs` + CSS vars in `<style>` |
| Fonts | Google Fonts `<link>` in `<head>` |
