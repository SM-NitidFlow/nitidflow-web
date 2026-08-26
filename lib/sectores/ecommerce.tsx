import {
  Bell,
  Database,
  MessageCircle,
  Package,
  ShoppingCart,
  Sparkles,
} from "lucide-react"
import type { Landing } from "@/lib/landings/types"

export const ecommerceSector: Landing = {
  slug: "/sectores/ecommerce",
  shortName: "Ecommerce",
  breadcrumbParent: { name: "Sectores", path: "/sectores" },
  metaTitle: "Automatización para ecommerce según el tipo de tienda",
  metaDescription:
    "Qué automatizar en un ecommerce según su modelo: catálogo corto de alta rotación, catálogo amplio, producto configurable o venta a empresas.",
  h1: "Automatización para ecommerce",
  subheadline:
    "No todas las tiendas se automatizan igual. Lo que le sirve a una de alta rotación no le sirve a una que vende producto configurable a empresas.",
  eyebrow: "Ecommerce",
  serviceType: "Automatización de operaciones para comercio electrónico",
  ctaLabel: "Automatizar mi tienda",

  problem: {
    title: "El cuello de botella cambia según el modelo de tienda.",
    body: [
      "En una tienda de catálogo corto y alta rotación el problema es el volumen: doscientos pedidos al día que alguien revisa, y un soporte saturado de «¿dónde está mi pedido?». Ahí lo que devuelve tiempo es la validación automática y el aviso proactivo de estado.",
      "En una tienda de catálogo amplio el problema es distinto: mantener fichas, precios y stock coherentes entre la tienda, el ERP y los marketplaces. El trabajo no está en el pedido, está en el catálogo.",
      "Y si vendéis producto configurable o a empresas, el cuello está antes del pedido: presupuestos, condiciones por cliente y validaciones que hoy pasan por una persona. Automatizar la parte de pedidos ahí aporta poco, porque no es donde se pierde el tiempo.",
    ],
    signals: [
      "El soporte está lleno de consultas sobre el estado del pedido",
      "El catálogo se mantiene a mano en dos o tres sitios",
      "Los presupuestos se hacen uno a uno en una hoja",
      "El stock de la tienda y el del almacén no coinciden",
      "Cada campaña obliga a contratar refuerzo",
      "No hay datos de qué producto genera más devoluciones",
    ],
  },

  how: {
    title: "Cómo se decide qué automatizar en una tienda.",
    lead: "Primero se identifica el modelo, porque de ahí sale la prioridad. Automatizar en el orden equivocado es gastar en la pieza que menos devuelve.",
    steps: [
      {
        title: "Catálogo corto, alta rotación",
        description:
          "Prioridad: validación de pedidos, aviso proactivo de estado y gestión de devoluciones.",
      },
      {
        title: "Catálogo amplio",
        description:
          "Prioridad: sincronización de fichas, precios y stock entre tienda, ERP y marketplaces.",
      },
      {
        title: "Producto configurable",
        description:
          "Prioridad: presupuestos, validación de configuraciones y traspaso a producción.",
      },
      {
        title: "Venta a empresas",
        description:
          "Prioridad: condiciones por cliente, pedidos recurrentes y facturación consolidada.",
      },
    ],
  },

  workflow: {
    title: "El ciclo del pedido, con la revisión humana donde hace falta.",
    lead: "El objetivo no es que nadie mire los pedidos, sino que solo se miren los que tienen algo raro.",
    label: "pedido-ecommerce",
    steps: [
      {
        icon: <ShoppingCart />,
        title: "Entra el pedido",
        description: "Tienda, marketplace o comercial",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "Se valida",
        description: "Stock, dirección, importe y condiciones del cliente",
        status: "complete",
      },
      {
        icon: <Package />,
        title: "Al almacén",
        description: "Con la información de preparación completa",
        status: "complete",
      },
      {
        icon: <MessageCircle />,
        title: "Aviso al cliente",
        description: "Estado y seguimiento antes de que pregunte",
        status: "processing",
      },
      {
        icon: <Bell />,
        title: "Incidencia detectada",
        description: "Retraso o entrega fallida, sin esperar la queja",
        status: "waiting",
      },
      {
        icon: <Database />,
        title: "Registro agregado",
        description: "Producto, causa y transportista, para arreglar la causa",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Piezas por tipo de tienda.",
    lead: "Casi ninguna tienda necesita todas. Lo útil es elegir dos o tres según el modelo.",
    items: [
      {
        title: "Aviso proactivo de estado",
        description:
          "Alta rotación: la medida que más consultas de soporte elimina, y la más rápida de montar.",
      },
      {
        title: "Sincronización de catálogo",
        description:
          "Catálogo amplio: fichas, precios y stock coherentes sin mantenerlos tres veces.",
      },
      {
        title: "Presupuestos automáticos",
        description:
          "Producto configurable: generación del presupuesto a partir de la configuración, con revisión antes de enviar.",
      },
      {
        title: "Pedidos recurrentes B2B",
        description:
          "Venta a empresas: el pedido habitual del cliente preparado sin que lo teclee nadie.",
      },
      {
        title: "Gestión de devoluciones",
        description:
          "Solicitud recogida completa de una vez, con estado visible para el cliente.",
      },
      {
        title: "Reporting de incidencias",
        description:
          "Qué producto y qué transportista dan problemas, con datos y no con impresiones.",
      },
    ],
  },

  integrations: {
    title: "Tienda, pagos, almacén y marketplaces.",
    lead: "El objetivo es que la tienda, el ERP y los marketplaces dejen de contar versiones distintas del mismo stock.",
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
    title: "Qué cambia según el modelo.",
    items: [
      {
        title: "En alta rotación: el coste por pedido deja de ser lineal",
        description:
          "Doblar pedidos deja de significar doblar horas de gestión, que es lo que ahoga el margen.",
      },
      {
        title: "En catálogo amplio: el catálogo deja de divergir",
        description:
          "Un sistema manda sobre la ficha y el resto la consulta, en lugar de tres copias que se desincronizan.",
      },
      {
        title: "En configurable: el presupuesto sale el mismo día",
        description:
          "Y con los precios y descuentos aplicados según la regla, no según quién lo haga.",
      },
      {
        title: "En B2B: menos fricción en el pedido recurrente",
        description:
          "El cliente que compra lo mismo cada mes deja de tener que pedirlo cada mes.",
      },
    ],
  },

  limits: {
    title: "Lo que no resolvemos",
    items: [
      "Precios, catálogo y estrategia comercial",
      "Devoluciones y abonos: se preparan, los aprueba una persona",
      "Problemas de fondo del transportista: se miden, no se arreglan",
      "Datos de producto desordenados: hay que ordenarlos antes de sincronizarlos",
      "Marketplaces con API limitada o con cupos que hagan el flujo poco fiable",
    ],
  },

  faq: [
    {
      question: "¿Cuántos pedidos al día justifican automatizar?",
      answer:
        "No hay un umbral fijo, porque depende de cuántos minutos de persona consume cada pedido. Una tienda con cuarenta pedidos que requieren cinco minutos cada uno tiene más que ganar que una con doscientos completamente automáticos. Lo que hay que contar son minutos totales, no pedidos.",
      },
    {
      question: "Vendemos en varios marketplaces. ¿Se puede unificar?",
      answer:
        "Sí, y es uno de los casos donde más se nota, pero primero hay que decidir qué sistema manda sobre el stock. Sincronizar en ambos sentidos entre dos sistemas que ambos se consideran la verdad garantiza que antes o después divergirán, normalmente en plena campaña.",
    },
    {
      question: "¿Se puede automatizar la atención al cliente de la tienda?",
      answer:
        "En ecommerce es donde mejor funciona, porque casi todas las consultas tienen respuesta consultable en el sistema: estado del pedido, plazo, política de devolución. Lo que sigue necesitando una persona son las reclamaciones y todo lo que implique devolver dinero.",
    },
  ],

  related: [
    {
      label: "Automatización de ecommerce",
      href: "/automatizacion-ecommerce",
      description: "El detalle del ciclo de pedido y la postventa.",
    },
    {
      label: "Automatización de facturación",
      href: "/automatizacion-facturacion",
      description: "El otro lado: facturas, cobros y conciliación.",
    },
    {
      label: "Atención al cliente",
      href: "/automatizacion-atencion-cliente",
      description: "El soporte de la tienda con datos reales del pedido.",
    },
  ],

  finalCta: {
    title: "¿Qué modelo de tienda tenéis?",
    lead: "Con eso y el volumen se puede decir bastante rápido por qué pieza conviene empezar.",
    label: "Automatizar mi tienda",
  },
}
