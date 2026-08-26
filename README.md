# nitidflow-web

Web corporativa de Nitidflow. Next.js 15 (App Router), TypeScript, Tailwind CSS 4.

Construida a partir de `nitidflow_claude_code_website_spec.md`.

---

## Puesta en marcha

```bash
npm install
npm run dev
```

Copia `.env.example` a `.env.local` y rellena lo que necesites en local.

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en `http://localhost:3000` |
| `npm run build` | Build de producción en `.next` |
| `npm run build:check` | Build de verificación en `.next-build`, **sin pisar el `.next` del dev server** |
| `npm run start` | Sirve el build de producción |
| `npm run typecheck` | `tsc --noEmit` |

> `npm run build` sobreescribe `.next` y rompe un `next dev` que esté corriendo.
> Para comprobar que compila mientras desarrollas, usa `npm run build:check`.

---

## Variables de entorno

| Variable | Obligatoria | Para qué |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Sí en producción | Canonicals, sitemap y Open Graph. Sin barra final. Por defecto `https://nitidflow.com` |
| `LEAD_WEBHOOK_URL` | Sí para que el formulario funcione | Endpoint que recibe los leads (webhook de n8n) |
| `LEAD_WEBHOOK_TOKEN` | Opcional | Se envía como `Authorization: Bearer …` si el endpoint lo exige |

**Los valores reales viven en Bitwarden y se configuran en Netlify → Environment variables.
Nunca en el repositorio, ni en un `.env` versionado, ni pegados en un chat.**

Si `LEAD_WEBHOOK_URL` no está configurada, `/api/lead` devuelve `503` con un
mensaje que redirige al correo. Es deliberado: un lead perdido en silencio es
peor que un formulario que avisa.

---

## Despliegue en Netlify

Conectado **por git**, no arrastrando carpetas: si se sube un build a mano, lo
desplegado deja de corresponder con lo que hay en el repositorio.

`netlify.toml` ya declara el comando de build y `@netlify/plugin-nextjs`, que es
lo que permite servir el route handler del formulario. Antes del primer deploy:

1. Conectar el repositorio en Netlify (rama `main`).
2. Añadir las variables de entorno de la tabla anterior.
3. Apuntar el dominio y confirmar que `NEXT_PUBLIC_SITE_URL` coincide con él —
   si no, los canonicals y el sitemap apuntarán a otro sitio.

---

## Estructura

```
app/
  layout.tsx              Fuente, metadata base, JSON-LD de Organization y WebSite
  page.tsx                Homepage (orden de secciones fijado por la spec §47)
  globals.css             Tokens de diseño y sistema de aparición al hacer scroll
  sitemap.ts robots.ts    Generados desde las mismas fuentes que las páginas
  icon.tsx apple-icon.tsx opengraph-image.tsx
  api/lead/route.ts       Recepción y reenvío de leads
  <landing>/page.tsx      12 landings comerciales
  sectores/               Índice + 5 sectores
  recursos/[slug]/        Blog
  legal/                  Aviso legal, privacidad, cookies (noindex)

components/               UI. Server Components salvo los que necesitan estado
lib/
  site.ts                 Navegación, footer, casos de uso, integraciones
  seo.ts schema.ts        Metadata y JSON-LD
  landings/               Contenido de cada landing, un archivo por página
  sectores/               Contenido de cada sector
  articulos/              Contenido del blog
```

**El contenido está separado de la presentación a propósito.** Para cambiar el
texto de una landing se edita su archivo en `lib/landings/`, no el componente.
Añadir una landing o un artículo al índice correspondiente lo incluye
automáticamente en el sitemap.

---

## Decisiones que conviene no revertir sin pensarlo

**No hay Framer Motion.** La spec lo recomendaba, pero su `initial` se
serializa en el HTML como `opacity: 0`: sin JavaScript el contenido se sirve
invisible, y eso choca con la propia spec §4 («no depender de JavaScript para
mostrar el contenido principal»). Las animaciones son CSS y el estado oculto
vive dentro de `@media (scripting: enabled)`, así que sin JS no se oculta nada.
De paso, el JS de la homepage bajó de 40 kB a 2 kB.

**`RevealScope` tiene cuatro capas de garantía.** Está documentado en el propio
componente. El resumen: lo visible se revela al montar, el resto por
`IntersectionObserver`, con respaldo por posición para el caso de pestaña en
segundo plano —donde el observer no computa intersecciones— y revelado total si
el observer no llega a entregar nada. El contenido no puede quedarse oculto.

**Los logotipos de marca vienen de simple-icons, y tres son propios.**
`simple-icons` es dependencia **de desarrollo**: `scripts/generate-brand-paths.mjs`
inlinea los paths en `lib/brand-paths.generated.ts`, así que en runtime no hay
dependencia ni peticiones a terceros — cargarlos de un CDN convertiría en falsa
la política de cookies, que afirma que el sitio no hace peticiones externas.

Regenerar tras actualizar el paquete:

```bash
node scripts/generate-brand-paths.mjs
```

**Slack, Salesforce y OpenAI no están en simple-icons** porque sus titulares
pidieron la retirada de sus iconos. Para esas tres hay glifos propios
simplificados en `components/BrandGlyph.tsx`, marcados como tales.
`isOfficialBrandGlyph(name)` distingue unos de otros.

En todos los casos son marcas registradas de sus titulares, usadas para indicar
compatibilidad técnica y con descargo visible en la sección (§8 / §38). Nota de
riesgo: varias marcas —Slack y WhatsApp entre ellas— exigen en sus guías color y
proporciones concretas, lo que en rigor descarta el uso monocromo. Es un riesgo
asumido conscientemente.

**El caso de un cliente no se indexa hasta que el cliente lo autoriza.** En
`lib/casos/*.tsx` cada caso tiene `permisoCliente`. Mientras sea `false`, la
página existe y es accesible por enlace pero va `noindex` y queda fuera del
sitemap, y en el listado aparece la etiqueta que lo advierte. El caso de
BestGarden está así: **falta la autorización por escrito del cliente.** Para
publicarlo, cambiar `permisoCliente: true` en `lib/casos/bestgarden.tsx`.

Lo que ese caso deliberadamente NO publica: estructura de costes, márgenes,
tarifas del catálogo, identificadores de webhooks, bases o tablas, nombre del
ERP, ni ningún dato de clientes finales. Eso vive en el runbook interno del
cliente y publicarlo sería entregar el mapa.

**`overflow-x: clip` en `html`, no `overflow-x: hidden` en `body`.** El segundo
convierte el body en contenedor de scroll y rompe el `position: sticky` del
header.

**`.grid > * { min-width: 0 }`.** Las pistas de grid tienen mínimo automático
`min-content`, así que un hijo que no puede encogerse desborda el contenedor.
Esta regla evita esa clase de bug en toda la web.

**El emisor de facturas no se toca.** `/automatizacion-facturacion` describe
deliberadamente lo que **no** hacemos: emitir facturas al margen del software
que tiene la obligación de cumplir la normativa de facturación verificable.

---

## Antes de publicar

- [ ] **Páginas legales**: los datos marcados en el propio texto (razón social,
      CIF, domicilio, datos registrales, proveedores encargados del tratamiento,
      plazos de conservación) son marcadores. Sustituirlos por los datos reales
      y que lo revise un profesional. Están en `noindex` hasta entonces.
- [ ] `NEXT_PUBLIC_SITE_URL` apuntando al dominio definitivo.
- [ ] `LEAD_WEBHOOK_URL` configurada y el workflow de n8n **publicado**: un
      borrador guardado no corre en producción.
- [ ] Probar un envío real del formulario y comprobar que el lead llega.
- [ ] Revisar la política de cookies si se añade cualquier analítica: en su
      estado actual el sitio no instala cookies que requieran consentimiento, y
      por eso no hay banner. Añadir analítica obliga a añadir el mecanismo de
      consentimiento antes de activarla.
- [ ] **Autorización de BestGarden por escrito** antes de poner
      `permisoCliente: true`. Publicar un caso con el nombre de un cliente sin
      su permiso no se arregla borrándolo: queda en la caché de Google.
- [ ] Cuando exista medición del proceso anterior, añadir las cifras al caso y
      mover esos puntos de «qué no podemos afirmar» a «qué se puede afirmar».

---

## Contenido pendiente

El blog tiene 5 artículos. La spec §25 planteaba 15; los 10 que faltan:

procesos administrativos automatizables · cómo automatizar WhatsApp con IA ·
cómo automatizar un CRM con IA · cómo automatizar ventas con IA · cómo
automatizar la atención al cliente · qué es n8n y para qué sirve · cuánto cuesta
implementar IA en una empresa · ejemplos de automatización empresarial · IA para
PYMEs · automatización de tareas administrativas

Se añaden creando un archivo en `lib/articulos/` y registrándolo en su `index.ts`.

`/casos` no tiene casos publicados a propósito: la spec §17 y §38 prohíben
inventar resultados. La página explica el formato que tendrá cada caso cuando
exista uno con datos verificables.
