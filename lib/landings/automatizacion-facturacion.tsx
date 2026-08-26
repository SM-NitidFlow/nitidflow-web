import {
  CheckCircle2,
  Database,
  FileSearch,
  Inbox,
  ReceiptText,
  ShieldCheck,
} from "lucide-react"
import type { Landing } from "./types"

export const automatizacionFacturacion: Landing = {
  slug: "/automatizacion-facturacion",
  shortName: "Automatización de facturación",
  metaTitle: "Automatización de facturación para empresas",
  metaDescription:
    "Automatiza el ciclo de facturación con las obligaciones españolas por delante: registro de facturas de proveedor, conciliación, avisos de cobro y trazabilidad.",
  h1: "Automatización de facturación",
  subheadline:
    "El ciclo de facturación es el proceso donde automatizar mal sale más caro. Aquí la restricción legal manda sobre la elegancia técnica, y eso condiciona el diseño desde el principio.",
  eyebrow: "Facturación",
  serviceType: "Automatización del ciclo de facturación",
  ctaLabel: "Hablar con Nitidflow",

  problem: {
    title: "Facturar a mano no es lento. Es arriesgado.",
    body: [
      "En una empresa pequeña el ciclo de facturación suele estar repartido entre varias personas y varios sistemas: los datos del cliente en el CRM, el importe en un presupuesto, la factura en un programa de facturación, el cobro en el banco y la conciliación en una hoja. Cada salto es una oportunidad de que un dato se transcriba mal.",
      "Lo que hace este proceso distinto de otros es la consecuencia del error. Un número de factura repetido, un IVA mal aplicado o una retención olvidada no son incidencias operativas: son problemas con Hacienda, con el cliente y con el cierre del ejercicio.",
      "Y ahora hay una capa más. La normativa española de facturación verificable exige que los sistemas de facturación cumplan requisitos concretos de trazabilidad e inalterabilidad de los registros. Eso significa que no vale montar un flujo que genere facturas por su cuenta: hay que trabajar con el software de facturación, no en paralelo a él.",
    ],
    signals: [
      "Las facturas de proveedor se registran a mano una por una",
      "El número de factura se lleva en una hoja aparte",
      "La conciliación con el banco se hace revisando extractos",
      "Los avisos de impago dependen de que alguien mire el vencimiento",
      "Los mismos datos del cliente están en tres sistemas y no coinciden",
      "No hay certeza de si el software de facturación cumple los requisitos vigentes",
    ],
  },

  how: {
    title: "Cómo se automatiza sin romper el cumplimiento.",
    lead: "La regla de partida: el sistema de facturación sigue siendo quien emite y numera. La automatización rodea el proceso, no lo sustituye.",
    steps: [
      {
        title: "El emisor no se toca",
        description:
          "Quien genera y numera facturas sigue siendo vuestro software de facturación, que es el que tiene que cumplir la norma.",
      },
      {
        title: "Se automatiza el alrededor",
        description:
          "Recepción, registro de proveedor, conciliación, avisos y traspaso de datos. Ahí está casi todo el tiempo perdido.",
      },
      {
        title: "Un único origen del dato",
        description:
          "El cliente, el importe y las condiciones tienen un sistema de referencia. El resto lo consulta, no lo copia.",
      },
      {
        title: "Traza de cada paso",
        description:
          "Qué documento entró, qué se leyó, qué se registró y quién lo validó. Necesario para auditar y para dormir.",
      },
    ],
  },

  workflow: {
    title: "De factura de proveedor recibida a asiento registrado.",
    lead: "El caso más rentable y menos arriesgado por donde empezar: la factura recibida, no la emitida.",
    label: "facturas-de-proveedor",
    steps: [
      {
        icon: <Inbox />,
        title: "Llega la factura",
        description: "Email del proveedor o carpeta compartida",
        status: "complete",
      },
      {
        icon: <FileSearch />,
        title: "Se extraen los datos",
        description: "Emisor, base, IVA, retención, vencimiento",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Se valida",
        description: "Cuadre de importes y coincidencia con el pedido",
        status: "processing",
      },
      {
        icon: <ShieldCheck />,
        title: "Se revisa lo dudoso",
        description: "Lo que no cuadra va a una persona, no al sistema",
        status: "waiting",
      },
      {
        icon: <Database />,
        title: "Se registra",
        description: "En el sistema contable, con el documento adjunto",
        status: "waiting",
      },
      {
        icon: <ReceiptText />,
        title: "Se programa el pago",
        description: "Según vencimiento y condiciones acordadas",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Qué se automatiza del ciclo.",
    lead: "Ordenado de menor a mayor riesgo. Lo sensato es empezar por arriba.",
    items: [
      {
        title: "Registro de facturas de proveedor",
        description:
          "El caso más claro: mucho volumen, criterio definido y ningún riesgo de emitir nada mal.",
      },
      {
        title: "Conciliación bancaria",
        description:
          "Cruce entre movimientos y facturas pendientes, dejando marcado lo que no cuadra.",
      },
      {
        title: "Avisos de vencimiento e impago",
        description:
          "Recordatorio al cliente según la pauta que defináis, sin que nadie vigile el calendario.",
      },
      {
        title: "Traspaso de datos al software de facturación",
        description:
          "Los datos del cliente y del presupuesto llegan sin teclearse otra vez.",
      },
      {
        title: "Control de completitud documental",
        description:
          "Detectar la factura que falta, el albarán sin factura o el gasto sin justificante.",
      },
      {
        title: "Preparación del cierre",
        description:
          "Los datos que la asesoría pide cada mes, reunidos y en el formato que los quiere.",
      },
    ],
  },

  integrations: {
    title: "Con vuestro software de facturación y vuestra asesoría.",
    lead: "El ERP y el programa de facturación se quedan donde están. La automatización los alimenta y los consulta; no intenta reemplazarlos.",
    names: [
      "Stripe",
      "Gmail",
      "Google Sheets",
      "Airtable",
      "Notion",
      "Slack",
      "Shopify",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué cambia.",
    items: [
      {
        title: "Menos transcripción, menos error",
        description:
          "Cada dato que se teclea una vez menos es un error potencial menos en el sitio donde peor duelen.",
      },
      {
        title: "El estado de cobros deja de ser una incógnita",
        description:
          "Saber qué está pendiente y desde cuándo, sin tener que reconstruirlo a partir de extractos.",
      },
      {
        title: "El cierre mensual se acorta",
        description:
          "Porque la información llega a la asesoría en formato y a tiempo, en lugar de recopilarse a última hora.",
      },
      {
        title: "Traza para cuando haga falta demostrarlo",
        description:
          "Registro de qué se hizo con cada documento. Es lo que convierte una revisión en un trámite.",
      },
    ],
  },

  limits: {
    title: "Lo que no hacemos en facturación",
    items: [
      "Emitir facturas al margen de vuestro software de facturación",
      "Sustituir el criterio de la asesoría fiscal en materia de IVA o retenciones",
      "Registrar automáticamente un documento cuyos importes no cuadran",
      "Ejecutar pagos: se preparan y los aprueba una persona",
      "Garantizar el cumplimiento de un software de terceros: eso se verifica con el proveedor",
    ],
  },

  faq: [
    {
      question: "¿Podéis generar las facturas directamente?",
      answer:
        "No lo recomendamos, y no es una limitación técnica. La normativa española de facturación verificable impone requisitos sobre el sistema que emite y numera las facturas —trazabilidad, encadenamiento e inalterabilidad de los registros—, y montar un flujo propio que emita al margen de vuestro software de facturación os pone en una posición difícil de defender. Lo sensato es automatizar todo el alrededor y dejar la emisión en el sistema que tiene esa responsabilidad.",
    },
    {
      question: "¿Cómo afecta la normativa Verifactu a esto?",
      answer:
        "Afecta a qué sistema puede emitir facturas y con qué garantías, no a que podáis automatizar el registro de facturas recibidas, la conciliación o los avisos de cobro. El calendario de entrada en vigor ha cambiado varias veces y depende del régimen fiscal de cada empresa, así que la fecha exacta que os aplica conviene confirmarla con vuestra asesoría o directamente con la AEAT en lugar de fiaros de lo que diga una web.",
    },
    {
      question: "¿Se puede automatizar el IVA y las retenciones?",
      answer:
        "El cálculo mecánico y las comprobaciones de cuadre, sí. La decisión de qué tipo aplica, si una operación está exenta o si procede retención es criterio fiscal, y ahí la automatización debe proponer y avisar de lo dudoso, no decidir. Cambiar eso de sitio no ahorra tiempo: traslada el riesgo.",
    },
    {
      question: "¿Y si nuestro programa de facturación no tiene API?",
      answer:
        "Es frecuente en software sectorial. Hay salidas — importación por fichero, trabajo contra su base de datos, exportaciones programadas — pero son menos cómodas y hay que valorarlas caso por caso. Se comprueba antes de comprometer alcance, no después.",
    },
    {
      question: "¿Nuestra asesoría tiene que estar de acuerdo?",
      answer:
        "Conviene mucho. Son quienes reciben la información y quienes responden del criterio fiscal, así que si el flujo les cambia el formato o el momento en que reciben los datos, es mejor acordarlo antes. En la práctica suelen agradecerlo, porque reduce el ir y venir de fin de mes.",
    },
  ],

  related: [
    {
      label: "Automatización administrativa",
      href: "/automatizacion-administrativa",
      description: "El resto del back office: documentos, datos y avisos.",
    },
    {
      label: "Automatización de ecommerce",
      href: "/automatizacion-ecommerce",
      description: "Cuando el volumen de pedidos y facturas viene de la tienda.",
    },
    {
      label: "Despachos profesionales",
      href: "/sectores/despachos",
      description: "Del otro lado: gestorías y asesorías que reciben esa información.",
    },
  ],

  finalCta: {
    title: "¿Cuántas facturas de proveedor registráis a mano cada mes?",
    lead: "Es el mejor punto de partida en facturación: mucho volumen y ningún riesgo de emitir nada mal.",
    label: "Hablar con Nitidflow",
  },
}
