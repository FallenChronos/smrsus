# Smt. Meera Rani Samajik Utthan Sansthan

A clean, responsive Next.js website for **Smt. Meera Rani Samajik Utthan Sansthan**, an NGO focused on school health, rural outreach, public health camps, awareness programs, and community support work.

The site is designed as a modern single-page experience with a strong editorial layout, clearer section hierarchy, and a balanced gallery/documentation system built from the assets in `public/`.

## Highlights

- Hero section with organization overview and quick action links
- Sticky header with branded navigation
- Program, impact, certifications, awards, and gallery sections
- Responsive card-based layout for desktop and mobile
- Optimized image handling with `next/image`

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Plain CSS in `app/globals.css`

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
public/
  awards/
  Certifications/
  Gallery/
  logo.png
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app at:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Content Notes

- Images are stored in `public/Gallery`, `public/awards`, and `public/Certifications`.
- The gallery uses the available public assets to present a fuller visual story without requiring any backend.
- The page content is intentionally static so it can be hosted easily and kept lightweight.

## Customization

To update the site content, edit the main page in `app/page.tsx` and the visual styling in `app/globals.css`.

To replace media, swap the files in the `public/` folders and keep the filenames aligned with the paths used in `app/page.tsx`.

## License

No license has been specified yet. Add one if you want this repository to be reused or shared publicly under clear terms.
