export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nitidflow.com"
).replace(/\/$/, "")

export const site = {
  name: "Nitidflow",
  legalName: "Nitidflow",
  tagline: "Automatización con IA para empresas.",
  commercialMessage: "Tu empresa trabaja. Nitidflow hace el resto.",
  email: "hola@nitidflow.com",
  country: "ES",
  locale: "es_ES",
  url: SITE_URL,
} as const

/** CTA principal global — spec §30 */
export const primaryCta = {
  label: "Analizar mi empresa",
  href: "/contacto",
} as const

/** Navegación del header — sin mega menú — spec §6 */
export const nav = [
  { label: "Soluciones", href: "/automatizacion-ia" },
  { label: "Agentes IA", href: "/agentes-ia" },
  { label: "Automatizaciones", href: "/#casos-de-uso" },
  { label: "Casos de uso", href: "/casos" },
  { label: "Recursos", href: "/recursos" },
] as const

/** Casos de uso — cada card enlaza a una landing SEO — spec §15 */
export const useCases = [
  {
    slug: "/automatizacion-ventas",
    icon: "TrendingUp",
    title: "Automatización de ventas",
    description:
      "Captura de leads, cualificación, seguimiento y actualización del CRM sin intervención manual.",
  },
  {
    slug: "/automatizacion-atencion-cliente",
    icon: "Headphones",
    title: "Automatización de atención al cliente",
    description:
      "Respuestas, routing y escalado a personas cuando la conversación lo necesita.",
  },
  {
    slug: "/automatizacion-whatsapp",
    icon: "WhatsApp",
    title: "Automatización de WhatsApp",
    description:
      "Conversaciones atendidas, leads cualificados y citas agendadas desde el canal que ya usan tus clientes.",
  },
  {
    slug: "/automatizacion-marketing",
    icon: "Megaphone",
    title: "Automatización de marketing",
    description:
      "Captación, secuencias de email, contenido asistido y reporting de campañas.",
  },
  {
    slug: "/automatizacion-administrativa",
    icon: "FileStack",
    title: "Automatización administrativa",
    description:
      "Data entry, documentos, notificaciones y tareas repetitivas de back office.",
  },
  {
    slug: "/automatizacion-facturacion",
    icon: "ReceiptText",
    title: "Automatización de facturación",
    description:
      "Emisión, registro y conciliación de facturas con los requisitos legales españoles en el centro.",
  },
  {
    slug: "/automatizacion-ecommerce",
    icon: "ShoppingCart",
    title: "Automatización de ecommerce",
    description:
      "Pedidos, incidencias, stock y postventa conectados entre tienda, ERP y atención al cliente.",
  },
  {
    slug: "/automatizacion-crm",
    icon: "Database",
    title: "Automatización de CRM",
    description:
      "Contactos, oportunidades y actividad actualizados a partir de lo que ya ocurre en tus canales.",
  },
  {
    slug: "/agentes-ia",
    icon: "Bot",
    title: "Agentes de IA",
    description:
      "Agentes que interpretan información, deciden y ejecutan acciones dentro de tus herramientas.",
  },
  {
    slug: "/automatizacion-n8n",
    icon: "n8n",
    title: "Automatización con n8n",
    description:
      "Workflows en n8n autoalojado o gestionado, con tus datos en tu propia infraestructura.",
  },
] as const

/** Sectores — spec §23 */
export const sectors = [
  {
    slug: "/sectores/inmobiliarias",
    title: "Inmobiliarias",
    description:
      "Leads de portales, cualificación de interés y agenda de visitas.",
  },
  {
    slug: "/sectores/clinicas",
    title: "Clínicas",
    description: "Citas, recordatorios, primeras consultas y documentación.",
  },
  {
    slug: "/sectores/ecommerce",
    title: "Ecommerce",
    description: "Pedidos, incidencias y postventa conectados de punta a punta.",
  },
  {
    slug: "/sectores/despachos",
    title: "Despachos profesionales",
    description:
      "Documentación de clientes, plazos y traspaso de datos entre sistemas.",
  },
  {
    slug: "/sectores/pymes",
    title: "PYMEs",
    description:
      "Procesos que hoy dependen de una persona y de su memoria.",
  },
] as const

/** Herramientas compatibles. NO afirmamos partnerships — spec §8 / §38 */
export const integrations = [
  { name: "WhatsApp", category: "Mensajería" },
  { name: "Gmail", category: "Email" },
  { name: "Google Sheets", category: "Datos" },
  { name: "Slack", category: "Interno" },
  { name: "HubSpot", category: "CRM" },
  { name: "Salesforce", category: "CRM" },
  { name: "Shopify", category: "Ecommerce" },
  { name: "Stripe", category: "Pagos" },
  { name: "Notion", category: "Documentación" },
  { name: "Airtable", category: "Datos" },
  { name: "n8n", category: "Orquestación" },
  { name: "Make", category: "Orquestación" },
  { name: "OpenAI", category: "Modelos" },
  { name: "Claude", category: "Modelos" },
  { name: "Gemini", category: "Modelos" },
] as const

/** Footer — spec §20 */
export const footerColumns = [
  {
    title: "Soluciones",
    links: [
      { label: "Automatización con IA", href: "/automatizacion-ia" },
      { label: "Agentes IA", href: "/agentes-ia" },
      { label: "Automatización de ventas", href: "/automatizacion-ventas" },
      {
        label: "Atención al cliente",
        href: "/automatizacion-atencion-cliente",
      },
      { label: "WhatsApp", href: "/automatizacion-whatsapp" },
      { label: "n8n", href: "/automatizacion-n8n" },
      { label: "IA para empresas", href: "/ia-para-empresas" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nitidflow", href: "/sobre-nitidflow" },
      { label: "Casos", href: "/casos" },
      { label: "Sectores", href: "/sectores" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog", href: "/recursos" },
      { label: "Automatización con IA", href: "/automatizacion-ia" },
      { label: "Agentes IA", href: "/agentes-ia" },
      { label: "Automatización de CRM", href: "/automatizacion-crm" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso legal", href: "/legal/aviso-legal" },
      { label: "Privacidad", href: "/legal/privacidad" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
] as const
