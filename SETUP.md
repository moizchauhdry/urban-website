# Developer setup

## Quick start

```bash
npm install
cp .env.example .env    # Windows: Copy-Item .env.example .env
# Edit .env with your keys and URLs
npm run dev
```

Restart `npm run dev` after any `.env` change. `.env` is gitignored — never commit API keys.

---

## `.env` variables

| Variable | Required for |
|----------|----------------|
| `VITE_GOOGLE_MAPS_API_KEY` | Pick-up / Destination address suggestions |
| `VITE_BOOKING_API_URL` | Book Now submit (no trailing slash) |
| `VITE_BOOKING_SUCCESS_URL` | Redirect after successful booking |
| `VITE_DEPLOY_PATH` | Optional. Single server folder URL path (default `/urban-app/`). |

Example:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_key
VITE_BOOKING_API_URL=https://portal.arealimoservice.com/api/website/booking/create
VITE_BOOKING_SUCCESS_URL=https://areacarservice.com/thank-you/
```

---

## Google Maps key

1. [Google Cloud Console](https://console.cloud.google.com/) → create project → enable billing.
2. Enable **Maps JavaScript API** and **Places API** (or Places API New).
3. **Credentials** → Create API key → add to `.env`.
4. Restrict key (recommended): HTTP referrers `http://localhost:5173/*` + your live domain; API limit to Maps JS + Places.

**Test:** Type in Pick-up or Destination on the homepage — suggestions should appear.

---

## Booking form

- **Distance** tab → POST `{VITE_BOOKING_API_URL}/distance`
- **Hourly** tab → POST `.../hourly` (shows required **Hours** field)
- Body includes form fields + `live_url` (current page URL)
- Success → redirect to `VITE_BOOKING_SUCCESS_URL`

Logic: `src/services/heroBooking.js`

**CORS errors locally?** The booking API must allow your origin, or add a Vite proxy.

---

## Per-client URLs

Change only `.env`, then restart the dev server:

```env
VITE_BOOKING_API_URL=https://other-portal.example.com/api/website/booking/create
VITE_BOOKING_SUCCESS_URL=https://other-site.example.com/thank-you/
```

---

## Deploy under WordPress (one folder, many region URLs)

WordPress stays at `/var/www/urbanelitelimo/`. Upload this app **once**:

| What | Path |
|------|------|
| Built files | `/var/www/urbanelitelimo/urban-app/` |
| Connecticut page | `https://urbanelitelimo.com/connecticut/` |
| Florida page | `https://urbanelitelimo.com/florida/` |
| … | routed by Apache, not separate folders |

Region slugs: `src/config/regions.js`. Deploy path (default `urban-app`): optional `VITE_DEPLOY_PATH=/urban-app/` in `.env`.

### 1. Build

```bash
npm run build
```

### 2. Upload once

```bash
rsync -avz --delete dist/ root@YOUR_SERVER:/var/www/urbanelitelimo/urban-app/
ssh root@YOUR_SERVER 'chown -R www-data:www-data /var/www/urbanelitelimo/urban-app'
```

### 3. Apache (WordPress root `.htaccess`)

Copy the block from `deploy/apache-wordpress-snippet.txt` into `/var/www/urbanelitelimo/.htaccess` **above** `# BEGIN WordPress`. That sends `/connecticut`, `/florida`, etc. to `urban-app/index.html` while assets load from `/urban-app/assets/...`.

When you add a region, update the RewriteRule in that snippet and in `regions.js`, then rebuild and rsync again (only `urban-app/`).

### 4. Maps, booking, verify

- Google Maps referrers: `https://urbanelitelimo.com/connecticut/*` (each region you use).
- Booking portal: register each `live_url`, e.g. `https://urbanelitelimo.com/connecticut/`.
- Test: `/connecticut/`, refresh `/connecticut/about`, Book Now.

**Local dev** — `http://localhost:5173/connecticut/` (region URLs rewritten to the SPA).

**Custom deploy folder** — set `VITE_DEPLOY_PATH=/my-app/` in `.env`, rebuild, upload to `/var/www/urbanelitelimo/my-app/`, and change `urban-app` in the Apache snippet to `my-app`.

---

## Checklist

- [ ] `npm install` + `.env` from `.env.example`
- [ ] All three `VITE_*` values set
- [ ] Dev server restarted
- [ ] Address autocomplete works
- [ ] Book Now submits and redirects
