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
| `VITE_BOOKING_API_URL` | Book Now base URL (no trailing slash); `/distance` or `/hourly` is appended in code |
| `VITE_BOOKING_LIVE_URL` | Optional. Canonical site URL sent as `live_url` (portal must have this domain registered) |

Example:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_key
VITE_BOOKING_API_URL=https://portal.arealimoservice.com/api/website/booking/create
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
- **Hourly** tab → POST `{VITE_BOOKING_API_URL}/hourly` (shows required **Hours** field)
- Body includes form fields + `live_url` (current page URL)
- Success → on-site thank-you page (`/thank-you` or `{region}/thank-you` via React Router)

Logic: `src/components/hero/heroBooking.js`

**CORS errors locally?** The booking API must allow your origin, or add a Vite proxy.

### Book Now fails on Vercel but env vars look correct

1. Hard-refresh the site (cached JS may still show “not configured”).
2. Confirm the built bundle includes your API URL (DevTools → Network → open `index-*.js` → search for `portal.`).
3. The portal matches bookings by `live_url`. On a Vercel URL, set `VITE_BOOKING_LIVE_URL` to your production domain (e.g. `https://urbanelitelimo.com/`) and ensure that domain is **registered in the limo portal** for this client.
4. If the API returns `success: false`, fix portal/website setup — that is not a missing `.env` issue.

---

## Per-client URLs

Change only `.env`, then restart the dev server:

```env
VITE_BOOKING_API_URL=https://other-portal.example.com/api/website/booking/create
```

---

## Checklist

- [ ] `npm install` + `.env` from `.env.example`
- [ ] All required `VITE_*` values set
- [ ] Dev server restarted
- [ ] Address autocomplete works
- [ ] Book Now submits and redirects
