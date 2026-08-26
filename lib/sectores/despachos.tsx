import {
  Bell,
  CheckCircle2,
  Database,
  FileSearch,
  FolderOpen,
  Inbox,
} from "lucide-react"
import type { Landing } from "@/lib/landings/types"

export const despachos: Landing = {
  slug: "/sectores/despachos",
  shortName: "Despachos profesionales",
  breadcrumbParent: { name: "Sectores", path: "/sectores" },
  metaTitle: "Automatización para despachos, asesorías y gestorías",
  metaDescription:
    "Automatización para despachos profesionales: recogida de documentación de clientes, control de plazos, traspaso entre sistemas y preparación del cierre mensual.",
  h1: "Automatización para despachos profesionales",
  subheadline:
    "En un despacho el trabajo repetitivo no es el trabajo técnico: es perseguir documentación y vigilar plazos. Eso sí se automatiza.",
  eyebrow: "Despachos",
  serviceType: "Automatización de procesos para despachos profesionales",
  ctaLabel: "Automatizar mi despacho",

  problem: {
    title: "La mitad del mes se va en pedir lo que el cliente no ha mandado.",
    body: [
      "En asesorías y gestorías hay un ciclo que se repite cada mes con precisión: se pide la documentación, la mitad de los clientes no la manda, alguien persigue por email y teléfono, llega incompleta, se vuelve a pedir, y el cierre se acumula en los últimos días. El trabajo técnico está comprimido porque la recogida se ha comido el mes.",
      "El segundo consumo es el traspaso de datos. La factura llega en PDF, alguien la teclea en el programa contable. El mismo dato pasa de un sistema a otro a mano, con el error que eso implica en un terreno donde el error tiene consecuencia fiscal.",
      "Y el tercero es el control de plazos. Los vencimientos están en la cabeza de alguien o en una hoja, y el riesgo de que se pase uno es real y caro.",
    ],
    signals: [
      "Cada mes se persigue la misma documentación a los mismos clientes",
      "El cierre se acumula en los últimos días del plazo",
      "Las facturas se teclean una por una en el programa contable",
      "Los vencimientos se controlan en una hoja de cálculo",
      "No se sabe qué cliente va al día y qué cliente va tarde sin mirarlo",
      "Cada empleado tiene su propio sistema de seguimiento",
    ],
  },

  how: {
    title: "Cómo se ordena el ciclo mensual.",
    lead: "El objetivo no es reemplazar criterio profesional: es que el criterio profesional llegue a tiempo porque la recogida ya está hecha.",
    steps: [
      {
        title: "Recogida automática",
        description:
          "Petición programada por cliente, con recordatorios escalonados y sin que nadie persiga a mano.",
      },
      {
        title: "Control de completitud",
        description:
          "El sistema sabe qué falta por cliente y lo dice, en lugar de descubrirse al empezar a trabajar.",
      },
      {
        title: "Extracción de datos",
        description:
          "Los documentos se convierten en datos estructurados, con lo dudoso marcado para revisión.",
      },
      {
        title: "Vigilancia de plazos",
        description:
          "Los vencimientos avisan solos, con antelación configurable y por cliente.",
      },
    ],
  },

  workflow: {
    title: "Del recordatorio al cierre preparado.",
    lead: "El profesional entra cuando hay algo que decidir, no para comprobar si el cliente ha mandado el albarán.",
    label: "cierre-mensual",
    steps: [
      {
        icon: <Bell />,
        title: "Petición al cliente",
        description: "Programada, con lo que le toca a cada uno",
        status: "complete",
      },
      {
        icon: <Inbox />,
        title: "Llega la documentación",
        description: "Email o portal, en el formato que sea",
        status: "complete",
      },
      {
        icon: <FileSearch />,
        title: "Se extraen los datos",
        description: "Emisor, base, IVA, retención, fecha",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Se comprueba lo que falta",
        description: "Aviso automático al cliente que va incompleto",
        status: "processing",
      },
      {
        icon: <Database />,
        title: "Se registra",
        description: "En el programa contable, con el documento adjunto",
        status: "waiting",
      },
      {
        icon: <FolderOpen />,
        title: "Cierre preparado",
        description: "El profesional revisa y decide, no recopila",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Qué se automatiza en un despacho.",
    lead: "Ordenado por lo que más horas devuelve, que casi siempre es la recogida de documentación.",
    items: [
      {
        title: "Recogida y recordatorios por cliente",
        description:
          "Cada cliente recibe lo que le toca, cuando le toca, con la insistencia que decidáis.",
      },
      {
        title: "Extracción de facturas y albaranes",
        description:
          "Datos estructurados a partir del PDF, con lo que no cuadra marcado en lugar de registrado.",
      },
      {
        title: "Control de completitud por cliente",
        description:
          "Un panel que dice quién va al día y a quién le falta algo, sin revisarlo a mano.",
      },
      {
        title: "Vigilancia de plazos",
        description:
          "Vencimientos fiscales y laborales avisando con antelación, por cliente y por tipo.",
      },
      {
        title: "Traspaso al programa contable",
        description:
          "El dato deja de teclearse dos veces, que es donde se cuelan los errores caros.",
      },
      {
        title: "Portal de cliente",
        description:
          "Un sitio donde el cliente sube documentos y consulta su estado, en vez de por email.",
      },
    ],
  },

  integrations: {
    title: "Con el software del despacho.",
    lead: "El programa contable y el de nóminas se quedan donde están: son el sistema de referencia. La automatización los alimenta y vigila lo que falta.",
    names: [
      "Gmail",
      "Google Sheets",
      "Airtable",
      "Notion",
      "Slack",
      "Stripe",
      "WhatsApp",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué cambia en el mes.",
    items: [
      {
        title: "El cierre deja de acumularse al final",
        description:
          "Porque la recogida empieza el día uno y avisa sola, no cuando alguien encuentra el hueco.",
      },
      {
        title: "Menos errores de transcripción",
        description:
          "En un terreno donde un dato mal teclado no es una molestia, es una consecuencia fiscal.",
      },
      {
        title: "Los plazos dejan de depender de la memoria",
        description:
          "El riesgo de pasarse un vencimiento es de los pocos que se elimina casi por completo con un flujo.",
      },
      {
        title: "Se puede crecer en clientes sin crecer igual en horas",
        description:
          "La parte del trabajo que escala con el número de clientes es justo la automatizable.",
      },
    ],
  },

  limits: {
    title: "Lo que sigue siendo del profesional",
    items: [
      "El criterio fiscal, contable y laboral: qué tipo aplica, si procede retención, cómo se clasifica",
      "La firma y la presentación de declaraciones",
      "El asesoramiento al cliente y la relación de confianza",
      "La decisión sobre casos dudosos: el flujo los marca, no los resuelve",
      "La responsabilidad profesional, que no se delega a un sistema",
    ],
  },

  faq: [
    {
      question: "¿La automatización decide cómo se clasifica un gasto?",
      answer:
        "No. Puede proponer una clasificación por patrón — el mismo proveedor, el mismo concepto — y eso ahorra tiempo, pero la decisión y la responsabilidad son del profesional. Los casos que no encajan en un patrón conocido se marcan para revisión en lugar de resolverse por su cuenta.",
    },
    {
      question: "¿Se puede leer cualquier factura?",
      answer:
        "Los PDF nativos y los escaneos limpios funcionan bien. Las fotos de móvil torcidas y los documentos manuscritos no dan fiabilidad suficiente para registrar directamente; en esos casos el dato se propone para revisión. Vale la pena, además, empujar a los clientes hacia el PDF: mejora la calidad de todo el proceso.",
    },
    {
      question: "¿Y el secreto profesional y el RGPD?",
      answer:
        "Es la razón principal por la que en este sector recomendamos ejecutar la automatización en infraestructura del despacho y no en una plataforma SaaS de terceros. Los datos de vuestros clientes son datos de terceros que os han confiado: cada servicio externo que toque esa información es un encargado del tratamiento que hay que documentar y justificar.",
    },
    {
      question: "¿Los clientes van a usar un portal si ahora mandan email?",
      answer:
        "Parte sí y parte no, y conviene no forzarlo. Lo que funciona es aceptar los dos caminos: quien quiera seguir mandando email lo sigue haciendo y el flujo procesa igual. Obligar a cambiar de canal a un cliente que lleva diez años mandando un PDF por correo genera más fricción que ahorro.",
    },
    {
      question: "¿Cuánto tiempo se recupera?",
      answer:
        "Depende del número de clientes y del volumen de documentos por cliente, así que la estimación se hace con vuestros números. Lo que sí es constante es dónde está el ahorro: en la recogida y la transcripción, no en el trabajo técnico.",
    },
  ],

  related: [
    {
      label: "Automatización de facturación",
      href: "/automatizacion-facturacion",
      description: "Lo que se automatiza del ciclo de facturación y lo que no.",
    },
    {
      label: "Automatización administrativa",
      href: "/automatizacion-administrativa",
      description: "Documentos, datos y avisos en el back office.",
    },
    {
      label: "Automatización con n8n",
      href: "/automatizacion-n8n",
      description: "Orquestación autoalojada, que aquí importa especialmente.",
    },
  ],

  finalCta: {
    title: "¿Cuántos días del mes se van en perseguir documentación?",
    lead: "Ese es el número que mide el potencial. Cuéntanos cómo pedís la documentación hoy.",
    label: "Automatizar mi despacho",
  },
}
