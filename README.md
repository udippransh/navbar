# navbar

Generated from a Framer design using [Unframer](https://github.com/remorses/unframer).

**Source:** `https://framer.com/m/navbar-4akC.js@lRHbKGNZF6fN6x3yvnpj`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 to preview.

## Re-fetch the component

If the Framer design changes, regenerate the component code:

```bash
npm run unframer
```

This reads `unframer.config.json` and rewrites `src/framer/navbar-4akc.js`.

## Files

- `src/App.tsx` — your entry point. Wrap the Framer component with your own JSX here.
- `src/framer/navbar-4akc.js` — the Framer-exported component. Generated code; readable but designed to be regenerated, not hand-edited heavily.
- `src/framer/navbar-4akc.d.ts` — TypeScript prop types for the component.
- `src/framer/styles.css` — CSS extracted from the Framer design.
- `src/framer/tokens.css` — color/design tokens (often empty until you define styles in Framer).
- `src/framer/meta.json` — Framer source metadata.
- `unframer.config.json` — points Unframer at the Framer URL so you can re-fetch.

## Editing

### Add your own JSX around the component
Open `src/App.tsx` and add elements above or below `<Navbar4akc />`.

### Change text or colors
Open `src/framer/navbar-4akc.js`. The code is generated but readable — Ctrl+F to find the text or hex color, change, save. Vite hot-reloads instantly.

> If you re-run `npm run unframer`, your hand-edits will be overwritten. Bigger changes belong in Framer.

### Layout / structural changes
Edit the design in Framer, then re-run `npm run unframer` to pull in the updated component.
