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
| `VITE_DEPLOY_PATH` | Optional. App URL path (default `/connecticut-black-car-service/`). |

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

## Deploy under WordPress (same as urban-app)

Upload `dist/` to a folder named like the public URL:

| What | Path |
|------|------|
| Live URL | `https://urbanelitelimo.com/connecticut-black-car-service/` |
| Server folder | `/var/www/urbanelitelimo/connecticut-black-car-service/` |
| Assets | `/connecticut-black-car-service/assets/...` |

### 1. Build

```bash
npm run build
```

### 2. Upload (full dist contents)

```bash
rsync -avz --delete dist/ root@YOUR_SERVER:/var/www/urbanelitelimo/connecticut-black-car-service/
ssh root@YOUR_SERVER 'chown -R www-data:www-data /var/www/urbanelitelimo/connecticut-black-car-service'
```

Remove old `urban-app/` folder on the server if you no longer need it.

### 3. WordPress

- Trash any **Page** with slug `connecticut-black-car-service`
- Remove root `.htaccess` rules that rewrite this URL to `urban-app/`

### 4. Verify

- `https://urbanelitelimo.com/connecticut-black-car-service/`
- DevTools → `/connecticut-black-car-service/assets/index-*.js` → **200**

**Local dev** — `http://localhost:5173/connecticut-black-car-service/`

---

## Checklist

- [ ] `npm install` + `.env` from `.env.example`
- [ ] All three `VITE_*` values set
- [ ] Dev server restarted
- [ ] Address autocomplete works
- [ ] Book Now submits and redirects
