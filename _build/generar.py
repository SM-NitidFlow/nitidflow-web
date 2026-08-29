"""Genera las landings de servicio reutilizando el chrome de es/index.html.

Cada página comparte navbar, fondo, CTA y pie con la home, y aporta su
propio contenido, sus metadatos y su schema. Regenerar es idempotente:
se puede ejecutar tantas veces como haga falta.
"""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
import plantilla as P
from landings import LANDINGS

BASE = "https://nitidflow.com"
V = "20260917"
RAIZ = os.path.join(os.path.dirname(__file__), "..")


def bloque(titulo, parrafos):
    ps = "\n        ".join(f"<p>{p}</p>" for p in parrafos)
    return f"""      <div class="ld__block reveal">
        <h2>{titulo}</h2>
        {ps}
      </div>"""


def acordeon(faq):
    items = []
    for i, (q, a) in enumerate(faq):
        items.append(f"""        <div class="panel faq__item reveal">
          <h3><button class="faq__q" type="button" aria-expanded="false" aria-controls="lfaq-{i}">{q}<span class="faq__icon" aria-hidden="true"></span></button></h3>
          <div class="faq__a" id="lfaq-{i}" hidden><p>{a}</p></div>
        </div>""")
    return "\n".join(items)


def schema(l, url):
    grafo = [
        {"@type": "Service", "@id": url + "#service",
         "name": l["servicio"], "description": l["desc"],
         "serviceType": l["servicio"],
         "provider": {"@id": f"{BASE}/#org"},
         "areaServed": [{"@type": "City", "name": "Madrid"},
                        {"@type": "Country", "name": "España"}],
         "audience": {"@type": "BusinessAudience", "name": "Pymes y empresas"}},
        {"@type": "WebPage", "@id": url + "#page", "url": url,
         "name": l["title"], "description": l["desc"],
         "isPartOf": {"@id": f"{BASE}/#web"},
         "about": {"@id": url + "#service"}, "inLanguage": "es-ES"},
        # La miga de pan sale en el resultado de Google en lugar de la URL cruda.
        {"@type": "BreadcrumbList", "@id": url + "#breadcrumb",
         "itemListElement": [
             {"@type": "ListItem", "position": 1, "name": "Inicio", "item": f"{BASE}/"},
             {"@type": "ListItem", "position": 2, "name": l["h1"], "item": url}]},
        {"@type": "FAQPage", "@id": url + "#faq",
         "mainEntity": [{"@type": "Question", "name": q,
                         "acceptedAnswer": {"@type": "Answer", "text": a}}
                        for q, a in l["faq"]]},
    ]
    return json.dumps({"@context": "https://schema.org", "@graph": grafo},
                      ensure_ascii=False, indent=1)


def nav_para_landing():
    """El navbar de la home apunta a sus propias secciones con anclas. En una
    landing esas secciones no existen, así que los enlaces no llevaban a
    ninguna parte: se reescriben hacia la home. La FAQ es la excepción,
    porque cada landing tiene la suya."""
    nav = P.NAV
    for ancla in ["#services", "#how-it-works", "#automations", "#case-studies"]:
        nav = nav.replace(f'href="{ancla}"', f'href="{ancla}"')
    # El logo, en una landing, debe devolver a la home y no al inicio de sí misma.
    nav = nav.replace('class="nav__brand" href="#top"', 'class="nav__brand" href="/"')
    return nav


def pagina(l):
    url = f"{BASE}/{l['slug']}/"
    cuerpo = "\n\n".join(bloque(t, ps) for t, ps in l["secciones"])
    # Sólo tres relacionadas: una lista con todas diluye el enlazado
    # interno y ninguna recibe señal clara.
    otras = [o for o in LANDINGS if o["slug"] != l["slug"]][:3]
    relacionadas = "\n".join(
        f'        <li><a href="/{o["slug"]}/">{o["h1"]}</a></li>' for o in otras)
    return f"""<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{l['title']}</title>
<meta name="description" content="{l['desc']}">
<link rel="canonical" href="{url}">

<meta property="og:type" content="article">
<meta property="og:locale" content="es_ES">
<meta property="og:title" content="{l['title']}">
<meta property="og:description" content="{l['desc']}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{BASE}/assets/og.jpg?v={V}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="600">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="{BASE}/assets/og.jpg?v={V}">

<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon-32.png?v={V}" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png?v={V}">
<meta name="theme-color" content="#071522">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="preload" as="image" href="/assets/background-poster.webp" type="image/webp">
<link rel="stylesheet" href="/css/styles.css?v={V}">
<script type="application/ld+json">
{schema(l, url)}
</script>
</head>
<body>
<a class="skip" href="#top">Saltar al contenido</a>

{P.FONDO}
{nav_para_landing()}

<main id="top">

  <section class="section ld__hero">
    <nav class="crumb reveal" aria-label="Miga de pan">
      <a href="/">Inicio</a><span aria-hidden="true">/</span><span>{l['h1']}</span>
    </nav>
    <p class="eyebrow eyebrow--center reveal">{l['eyebrow']}</p>
    <h1 class="statement reveal">{l['h1']}</h1>
    <p class="lede reveal">{l['lede']}</p>
    <p class="ld__cta reveal">
      <a class="btn btn--solid" href="https://cal.com/smnitidflow" target="_blank" rel="noopener"
         data-cal-link="smnitidflow" data-cal-namespace="audit">Reserva una auditoría gratuita</a>
    </p>
  </section>

  <section class="section ld__body">
{cuerpo}
  </section>

  <section class="section" id="faq">
    <p class="eyebrow eyebrow--center reveal">PREGUNTAS FRECUENTES</p>
    <h2 class="statement reveal">{l['faq_h2']}</h2>
    <div class="faq" data-faq>
{acordeon(l['faq'])}
    </div>
  </section>

  <section class="section ld__rel">
    <div class="ld__block reveal">
      <h2>Otros servicios de automatización</h2>
      <ul class="svc-links">
{relacionadas}
      </ul>
      <p class="ld__home">Somos <a href="/">NitidFlow, agencia de automatización con inteligencia artificial en Madrid</a>. Trabajamos con pymes y empresas de toda España.</p>
    </div>
  </section>

{P.CTA}

</main>

{P.FOOTER}

{P.SCRIPTS}
</body>
</html>
"""


if __name__ == "__main__":
    for l in LANDINGS:
        carpeta = os.path.join(RAIZ, l["slug"])
        os.makedirs(carpeta, exist_ok=True)
        destino = os.path.join(carpeta, "index.html")
        html = pagina(l)
        with open(destino, "w") as fh:
            fh.write(html)
        palabras = sum(len(" ".join(ps).split()) for _, ps in l["secciones"])
        palabras += sum(len(a.split()) for _, a in l["faq"])
        print(f"  /{l['slug']}/   {len(html):>7,} bytes   ~{palabras} palabras propias")
