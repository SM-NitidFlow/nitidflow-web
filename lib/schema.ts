import { SITE_URL, site } from "./site"

/** Organization schema — se inyecta una vez en el layout. Spec §26 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: SITE_URL,
    description:
      "Nitidflow diseña e implementa automatizaciones y agentes de IA que conectan los procesos y las herramientas que una empresa ya utiliza.",
    email: site.email,
    areaServed: { "@type": "Country", name: "España" },
    knowsAbout: [
      "Automatización de procesos",
      "Inteligencia artificial aplicada a empresas",
      "Agentes de IA",
      "Integración de sistemas",
      "n8n",
    ],
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    inLanguage: "es-ES",
    publisher: { "@id": `${SITE_URL}/#organization` },
  }
}

/**
 * Service schema para landings comerciales. Spec §26.
 * Sin claims de resultados ni métricas inventadas.
 */
export function serviceSchema(input: {
  name: string
  description: string
  path: string
  serviceType: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${input.path}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "España" },
    url: `${SITE_URL}${input.path}`,
  }
}

/** BreadcrumbList — spec §26 */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  }
}

/**
 * FAQPage schema. Solo debe usarse cuando las preguntas y respuestas
 * están visibles en la propia página — spec §26.
 */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}

export function articleSchema(input: {
  title: string
  description: string
  path: string
  date: string
  updated?: string
  author: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.updated ?? input.date,
    inLanguage: "es-ES",
    author: { "@type": "Organization", name: input.author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${input.path}`,
    },
  }
}
