"""Porta el contenido escrito en la rama next-multipagina al formato de landings.py.

Las landings de aquella rama son objetos TypeScript. Aquí se leen desde git,
se extraen los bloques de prosa y se emiten como entradas de LANDINGS listas
para el generador estático.
"""
import os
import re
import subprocess

REPO = os.path.expanduser("~/Desktop/nitidflow-web")


def desde_git(path):
    r = subprocess.run(["git", "show", f"next-multipagina:{path}"],
                       cwd=REPO, capture_output=True, text=True)
    if r.returncode:
        raise SystemExit(f"no se pudo leer {path}: {r.stderr.strip()}")
    return r.stdout


def campo(src, nombre):
    """Valor de una clave de texto, admitiendo el salto de línea que mete Prettier."""
    m = re.search(nombre + r':\s*\n?\s*"((?:[^"\\]|\\.)*)"', src)
    return m.group(1).replace('\\"', '"') if m else ""


def bloque(src, nombre):
    """Cuerpo de un objeto de primer nivel, del `nombre: {` a su cierre."""
    i = src.index(f"  {nombre}: {{")
    j = src.index("\n  },", i)
    return src[i:j]


def textos(fragmento):
    """Cadenas de texto de un fragmento, en orden y sin las de una sola palabra."""
    crudas = re.findall(r'"((?:[^"\\]|\\.)*)"', fragmento)
    return [c.replace('\\"', '"') for c in crudas if len(c.split()) > 2]


def faq(src):
    trozo = src[src.index("  faq: ["):]
    pares = re.findall(r'question:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*\n?\s*answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"',
                       trozo)
    return [(q.replace('\\"', '"'), a.replace('\\"', '"')) for q in [p[0] for p in pares]
            for a in [pares[[p[0] for p in pares].index(q)][1]]]


def pasos(src):
    """Los pasos de `how` se aplanan a párrafos: título en negrita y su descripción."""
    b = bloque(src, "how")
    ps = re.findall(r'title:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*\n?\s*description:\s*\n?\s*"((?:[^"\\]|\\.)*)"', b)
    return [f"<strong>{t}</strong> {d}" for t, d in ps]


def pares(fragmento):
    """Pares título/descripción de un bloque de items, como párrafos."""
    ps = re.findall(r'title:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*\n?\s*description:\s*\n?\s*"((?:[^"\\]|\\.)*)"',
                    fragmento)
    return [f"<strong>{t}</strong> {d}" for t, d in ps]


def portar(path, slug, title, desc):
    src = desde_git(path)
    prob = bloque(src, "problem")
    lim = bloque(src, "limits")
    how = bloque(src, "how")
    ben = bloque(src, "benefits")
    cas = bloque(src, "cases")

    # Los "signals" del bloque problem son frases sueltas de una lista:
    # como párrafos quedaban descolgados, así que van aparte.
    cuerpo_prob = textos(prob[:prob.index("signals:")] if "signals:" in prob else prob)[1:]
    senales = textos(prob[prob.index("signals:"):]) if "signals:" in prob else []

    secciones = [
        (campo(prob, "title"), cuerpo_prob),
        (campo(cas, "title"), [campo(cas, "lead")] + pares(cas)),
        (campo(how, "title"), [campo(how, "lead")] + pasos(src)),
        (campo(ben, "title"), pares(ben)),
        (campo(lim, "title"), textos(lim)[1:]),
    ]
    if senales:
        secciones.insert(1, ("Señales de que te hace falta", senales))
    return {
        "slug": slug,
        "title": title,
        "desc": desc,
        "kw": campo(src, "shortName"),
        "h1": campo(src, "h1"),
        "eyebrow": campo(src, "eyebrow").upper(),
        "lede": campo(src, "subheadline"),
        "servicio": campo(src, "serviceType"),
        "secciones": secciones,
        "faq_h2": f"Preguntas sobre {campo(src, 'shortName').lower()}",
        "faq": faq(src),
    }


def como_python(d):
    def esc(x):
        return x.replace("\\", "\\\\").replace('"', '\\"')
    out = ["{"]
    for k in ["slug", "title", "desc", "kw", "h1", "eyebrow", "lede", "servicio"]:
        out.append(f' "{k}": "{esc(d[k])}",')
    out.append(' "secciones": [')
    for t, ps in d["secciones"]:
        out.append(f'  ("{esc(t)}", [')
        for p in ps:
            out.append(f'   "{esc(p)}",')
        out.append("  ]),")
    out.append(" ],")
    out.append(f' "faq_h2": "{esc(d["faq_h2"])}",')
    out.append(' "faq": [')
    for q, a in d["faq"]:
        out.append(f'  ("{esc(q)}",\n   "{esc(a)}"),')
    out.append(" ],")
    out.append("},")
    return "\n".join(out)


if __name__ == "__main__":
    nuevas = [
        portar("lib/landings/agentes-ia.tsx", "agentes-ia",
               "Agentes de IA para empresas | NitidFlow Madrid",
               "Diseñamos agentes de IA que consultan tus sistemas, deciden y ejecutan acciones reales. Agencia en Madrid, auditoría gratuita."),
        portar("lib/sectores/clinicas.tsx", "automatizacion-clinicas",
               "Automatización con IA para clínicas | NitidFlow Madrid",
               "Automatizamos citas, recordatorios y documentación de tu clínica para reducir plantones y trabajo administrativo. Auditoría gratuita en Madrid."),
    ]
    for d in nuevas:
        print(como_python(d))
        secs = sum(len(" ".join(ps).split()) for _, ps in d["secciones"])
        print(f"# ^ {d['slug']}: {len(d['secciones'])} secciones, {secs} palabras, {len(d['faq'])} preguntas\n",
              file=__import__("sys").stderr)
