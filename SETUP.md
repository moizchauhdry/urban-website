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
| `VITE_DEPLOY_PATH` | Optional. Single server folder URL path (default `/moiz/` for testing). |

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
| Built files | `/var/www/urbanelitelimo/moiz/` |
| App root | `https://urbanelitelimo.com/moiz/` |
| Connecticut | `https://urbanelitelimo.com/moiz/connecticut/` |
| Florida | `https://urbanelitelimo.com/moiz/florida/` |
| … | under `/moiz/<slug>/`; one upload folder on the server |

Region slugs: `src/config/regions.js`. Deploy prefix (default `moiz`): `VITE_DEPLOY_PATH=/moiz/` in `.env`.

### 1. Build

```bash
npm run build
```

### 2. Upload once

```bash
rsync -avz --delete dist/ root@YOUR_SERVER:/var/www/urbanelitelimo/moiz/
ssh root@YOUR_SERVER 'chown -R www-data:www-data /var/www/urbanelitelimo/moiz'
```

### 3. Apache (WordPress root `.htaccess`)

Copy the block from `deploy/apache-wordpress-snippet.txt` into `/var/www/urbanelitelimo/.htaccess` **above** `# BEGIN WordPress`. That sends `/moiz/connecticut`, etc. to `moiz/index.html` while assets load from `/moiz/assets/...`.

When you add a region, update the RewriteRule in that snippet and in `regions.js`, then rebuild and rsync again (only `moiz/`).

### 4. Maps, booking, verify

- Google Maps referrers: `https://urbanelitelimo.com/moiz/connecticut/*` (each region path).
- Booking portal: register each `live_url`, e.g. `https://urbanelitelimo.com/moiz/connecticut/`.
- Test: `/moiz/connecticut/`, refresh `/moiz/connecticut/about`, Book Now.

**Local dev** — `http://localhost:5173/moiz/connecticut/`

**Production folder name** — change `VITE_DEPLOY_PATH` and the `moiz` segments in the Apache snippet to your final folder name (e.g. `urban-app`).

---

## Checklist

- [ ] `npm install` + `.env` from `.env.example`
- [ ] All three `VITE_*` values set
- [ ] Dev server restarted
- [ ] Address autocomplete works
- [ ] Book Now submits and redirects
