import {
  Bell,
  Database,
  MessageCircle,
  Package,
  ShoppingCart,
  Sparkles,
} from "lucide-react"
import type { Landing } from "./types"

export const automatizacionEcommerce: Landing = {
  slug: "/automatizacion-ecommerce",
  shortName: "Automatización de ecommerce",
  metaTitle: "Automatización de ecommerce con IA",
  metaDescription:
    "Automatiza pedidos, incidencias, stock y postventa conectando tienda, ERP y atención al cliente: menos trabajo manual por pedido y respuestas con datos reales.",
  h1: "Automatización de ecommerce con IA",
  subheadline:
    "Cuando el volumen crece, el trabajo manual por pedido crece igual. Automatizar el ecommerce es cortar esa proporción antes de que obligue a contratar por volumen.",
  eyebrow: "Ecommerce",
  serviceType: "Automatización de operaciones de comercio electrónico",
  ctaLabel: "Automatizar mi tienda",

  problem: {
    title: "Cada pedido cuesta unos minutos de persona. Multiplícalo.",
    body: [
      "Un ecommerce pequeño funciona porque alguien revisa los pedidos, comprueba el stock, avisa al almacén, contesta los «¿dónde está mi pedido?» y gestiona las devoluciones. A cincuenta pedidos al día eso es un trabajo. A doscientos es imposible sin contratar, y contratar en proporción al volumen es el peor escenario de un negocio con margen ajustado.",
      "El segundo problema es la desconexión. La tienda sabe una cosa, el ERP otra y el transportista una tercera. Cuando el cliente pregunta, hay que mirar en tres sitios, y a veces las tres respuestas no coinciden.",
      "El tercero es la postventa. La incidencia entra por email o WhatsApp, se resuelve por el canal que sea, y no queda registrada en ningún sitio donde se pueda ver que ese producto genera devoluciones con más frecuencia que los demás.",
    ],
    signals: [
      "Alguien revisa los pedidos uno por uno cada mañana",
      "El stock de la tienda y el del almacén no coinciden",
      "Los «¿dónde está mi pedido?» ocupan la mayor parte del soporte",
      "Las devoluciones se gestionan por email sin registro estructurado",
      "El pico de campaña obliga a contratar refuerzo cada año",
      "No hay datos fiables de qué producto genera más incidencias",
    ],
  },

  how: {
    title: "Por dónde se corta el trabajo por pedido.",
    lead: "Casi todo el coste operativo de un ecommerce está en cuatro puntos, y los cuatro se pueden atacar por separado.",
    steps: [
      {
        title: "La entrada del pedido",
        description:
          "Validación, detección de casos raros y traspaso al almacén sin revisión manual de los normales.",
      },
      {
        title: "El seguimiento",
        description:
          "El cliente sabe dónde está su pedido sin tener que preguntar. Eso vacía la mitad del soporte.",
      },
      {
        title: "La incidencia",
        description:
          "Recogida estructurada, con los datos necesarios pedidos de una vez y no en cinco correos.",
      },
      {
        title: "El dato agregado",
        description:
          "Qué falla, en qué producto y con qué transportista. Sin esto no se puede arreglar la causa.",
      },
    ],
  },

  workflow: {
    title: "Del pedido entrante a la postventa cerrada.",
    lead: "El objetivo no es que nadie mire los pedidos: es que solo se miren los que tienen algo raro.",
    label: "ciclo-de-pedido",
    steps: [
      {
        icon: <ShoppingCart />,
        title: "Entra el pedido",
        description: "Tienda, marketplace o teléfono",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "Se valida",
        description: "Stock, dirección, importe y casos raros",
        status: "complete",
      },
      {
        icon: <Package />,
        title: "Va al almacén",
        description: "Con la información de preparación completa",
        status: "complete",
      },
      {
        icon: <MessageCircle />,
        title: "Se informa al cliente",
        description: "Estado y seguimiento sin que pregunte",
        status: "processing",
      },
      {
        icon: <Bell />,
        title: "Se detecta la incidencia",
        description: "Retraso, entrega fallida o devolución",
        status: "waiting",
      },
      {
        icon: <Database />,
        title: "Queda registrada",
        description: "Con producto, causa y transportista",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Qué se automatiza en una tienda.",
    lead: "Se puede montar por piezas. Lo habitual es empezar por el seguimiento proactivo, porque es lo que más soporte quita.",
    items: [
      {
        title: "Aviso proactivo de estado",
        description:
          "El cliente recibe el seguimiento antes de preguntar. Es la medida que más consultas elimina.",
      },
      {
        title: "Validación de pedidos",
        description:
          "Solo llegan a revisión humana los que tienen algo fuera de lo normal.",
      },
      {
        title: "Sincronización de stock",
        description:
          "Un único sistema manda sobre las existencias y el resto lo consulta, en vez de tres copias que divergen.",
      },
      {
        title: "Gestión de devoluciones",
        description:
          "Solicitud recogida con todos los datos de una vez y estado visible para el cliente.",
      },
      {
        title: "Detección de incidencias de transporte",
        description:
          "Retrasos y entregas fallidas detectados por el sistema, no por la queja del cliente.",
      },
      {
        title: "Reporting de postventa",
        description:
          "Qué producto genera devoluciones y por qué motivo, con datos y no con impresiones.",
      },
    ],
  },

  integrations: {
    title: "Tienda, pagos, almacén y atención.",
    lead: "El objetivo es que la tienda, el ERP y el canal de atención dejen de contar versiones distintas de lo mismo.",
    names: [
      "Shopify",
      "Stripe",
      "WhatsApp",
      "Gmail",
      "Google Sheets",
      "Airtable",
      "Slack",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué cambia con volumen.",
    items: [
      {
        title: "El coste por pedido deja de ser lineal",
        description:
          "Doblar pedidos deja de significar doblar horas de gestión, que es lo que ahoga el margen.",
      },
      {
        title: "Menos consultas de soporte",
        description:
          "Informar antes de que pregunten es más barato que contestar bien cuando preguntan.",
      },
      {
        title: "Los picos de campaña dejan de doler igual",
        description:
          "El refuerzo estacional se dedica a lo que necesita criterio, no a revisar pedidos correctos.",
      },
      {
        title: "Se puede arreglar la causa, no el síntoma",
        description:
          "Con datos de incidencias por producto y transportista, se decide con hechos y no con la sensación de que «últimamente hay más problemas».",
      },
    ],
  },

  limits: {
    title: "Lo que no resolvemos",
    items: [
      "Decisiones comerciales: precios, catálogo, promociones",
      "Devoluciones y abonos: se preparan, los aprueba una persona",
      "Problemas de fondo del transportista: la automatización los mide, no los arregla",
      "Datos de producto desordenados en la tienda: eso se ordena antes",
      "Marketplaces sin API abierta o con límites que hagan el flujo poco fiable",
    ],
  },

  faq: [
    {
      question: "¿Funciona con nuestra plataforma de tienda?",
      answer:
        "Shopify, WooCommerce y PrestaShop no dan problema. Con desarrollos propios depende de lo que expongan: si hay API o al menos webhooks, se puede. Con plataformas cerradas de proveedor sectorial hay que comprobarlo antes de comprometer alcance.",
    },
    {
      question: "¿Se puede automatizar la atención al cliente de la tienda?",
      answer:
        "Sí, y en ecommerce es donde mejor funciona, porque casi todas las consultas tienen respuesta consultable: estado del pedido, plazo, política de devolución. Lo que sigue necesitando una persona son las reclamaciones y todo lo que implique devolver dinero.",
    },
    {
      question: "¿Y el stock? Es nuestro problema principal.",
      answer:
        "Entonces la primera decisión no es técnica: hay que definir qué sistema manda sobre las existencias. Sincronizar dos sistemas que ambos se consideran la verdad garantiza que antes o después divergirán. Con un sistema de referencia claro, mantener el resto actualizado es sencillo.",
    },
    {
      question: "¿Se puede automatizar la recuperación de carritos abandonados?",
      answer:
        "Sí, con la cautela de siempre: hace falta consentimiento para la comunicación comercial y conviene no ser insistente. Un recordatorio bien hecho funciona; una secuencia de cuatro mensajes normalmente solo produce bajas.",
    },
  ],

  related: [
    {
      label: "Atención al cliente",
      href: "/automatizacion-atencion-cliente",
      description: "El soporte de la tienda, con respuestas basadas en datos reales.",
    },
    {
      label: "Automatización de facturación",
      href: "/automatizacion-facturacion",
      description: "El otro lado del pedido: facturas, cobros y conciliación.",
    },
    {
      label: "Ecommerce por sector",
      href: "/sectores/ecommerce",
      description: "Lo que se automatiza según el tipo de tienda.",
    },
  ],

  finalCta: {
    title: "¿Cuántos pedidos al día pasáis a mano?",
    lead: "Con ese número y las consultas de soporte que recibís se puede estimar bastante bien por dónde empezar.",
    label: "Automatizar mi tienda",
  },
}
