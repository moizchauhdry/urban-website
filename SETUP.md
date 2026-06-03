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

## Deploy under WordPress (regional paths)

WordPress stays at the domain root. This app is **one build** copied into a folder per region:

| URL | Server folder |
|-----|----------------|
| `https://urbanelitelimo.com/connecticut/` | `/var/www/urbanelitelimo/connecticut/` |
| `https://urbanelitelimo.com/florida/` | `/var/www/urbanelitelimo/florida/` |
| … | same `dist/` contents in each folder |

Slugs are defined in `src/config/regions.js`. Add a row there, then deploy to a matching folder name.

1. **Build** (relative asset paths — works in every region folder):

   ```bash
   npm run build
   ```

2. **Upload** the contents of `dist/` into each region directory (not the `dist` folder itself):

   ```bash
   for region in connecticut florida illinois new-york; do
     rsync -avz --delete dist/ user@server:/var/www/urbanelitelimo/$region/
     sudo chown -R www-data:www-data /var/www/urbanelitelimo/$region
   done
   ```

3. **Apache** — `public/.htaccess` is included in `dist/` so refresh on e.g. `/connecticut/about` returns `index.html`.

4. **Google Maps** — allow `https://urbanelitelimo.com/connecticut/*` (and each region path) on your API key.

5. **Booking portal** — register each live URL you use, e.g. `https://urbanelitelimo.com/connecticut/`.

6. **Verify** — open each regional URL, confirm assets load under that path, refresh `/connecticut/about`, test Book Now.

**Local dev** — default `http://localhost:5173/`. To test a region path:

`http://localhost:5173/connecticut/` (Vite rewrites region URLs to the SPA).

**New region** — add `{ slug, label }` in `src/config/regions.js`, rebuild, rsync `dist/` to `/var/www/urbanelitelimo/<slug>/`.

---

## Checklist

- [ ] `npm install` + `.env` from `.env.example`
- [ ] All three `VITE_*` values set
- [ ] Dev server restarted
- [ ] Address autocomplete works
- [ ] Book Now submits and redirects
