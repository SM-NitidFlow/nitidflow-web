# Brand fonts — drop the licensed files here

The CSS already asks for **Knockout Cruiserweight** (headings) and **Nexa** (body). Neither
is bundled: both are commercial, and neither is on Google Fonts. Until the files exist the
site falls back to Oswald (headings) and Poppins (body).

`@font-face` tries `local()` first, so if the fonts are **installed on your machine** they
are used with no download at all — but visitors won't have them, so for production you need
the web files here.

## Filenames the CSS expects

Convert to `.woff2` and use exactly these names — no other change is needed:

| file | used for |
|---|---|
| `knockout-cruiserweight.woff2` | all headings (`--display`) |
| `nexa-light.woff2` | body weight 300 (default body text) |
| `nexa-regular.woff2` | body weight 400 |
| `nexa-bold.woff2` | body weights 500–700 |

If you only have Nexa Regular and Bold, delete the `nexa-light` `@font-face` block in
`css/styles.css` and change `body { font-weight: 300 }` to `400`.

## Where to buy / how each one is delivered

**Nexa** — Fontfabric (fontfabric.com/nexa). Sold with a webfont licence; you get `.woff2`
files you can self-host. This one works exactly as described above.

**Knockout** — Hoefler&Co (typography.com). Important: Hoefler&Co licenses webfonts through
their hosted *Cloud.typography* service and **does not let you self-host the files**. So
`knockout-cruiserweight.woff2` will not exist for you. Instead:

1. Build a project in your Cloud.typography account including Knockout Cruiserweight.
2. Add the `<link>` they give you to `index.html` and `thanks.html`, above
   `css/styles.css`.
3. Cloud.typography exposes split family names (typically an `A`/`B` pair). Put the exact
   names they show you at the front of `--display` in `css/styles.css`:

```css
--display: 'Knockout 52 Cruiserweight A', 'Knockout 52 Cruiserweight B',
           'Oswald', 'Arial Narrow', Arial, sans-serif;
```

Then delete the `Knockout Cruiserweight` `@font-face` block, since Cloud.typography's
stylesheet declares its own.

If you'd rather self-host, pick a licence-friendly Knockout alternative instead — the
condensed athletic grotesques closest to it are **Heading Pro Wide**, **Bebas Neue** (free),
**Oswald** (free, currently in use), or **Roboto Condensed** (free).

## Note on weights

Knockout Cruiserweight is a single weight. Its `@font-face` declares `font-weight: 400 900`
on purpose: that makes one file satisfy every heading weight, so the browser never fakes a
bolder version of it. Headings were also moved from weight 800 to 700, because Oswald stops
at 700 and Cruiserweight is a mid-heavy weight rather than a black.

## Expected until you add the files

Two `404`s in DevTools for the missing `.woff2` files. That is the fallback working as
designed — the browser tries `local()`, tries the URL, then moves to Oswald/Poppins. They
disappear once the files are in place.
