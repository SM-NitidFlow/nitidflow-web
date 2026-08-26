import {
  Bell,
  CheckCircle2,
  Database,
  GitBranch,
  ServerCog,
  Webhook,
} from "lucide-react"
import type { Landing } from "./types"

export const automatizacionN8n: Landing = {
  slug: "/automatizacion-n8n",
  shortName: "Automatización con n8n",
  metaTitle: "Automatización con n8n para empresas",
  metaDescription:
    "Workflows en n8n autoalojado o gestionado: orquestación de automatizaciones con los datos en infraestructura del cliente, versionado y con plan de error.",
  h1: "Automatización con n8n para empresas",
  subheadline:
    "n8n es una de las piezas con las que construimos, no el servicio. Es la que elegimos cuando importa que los datos y el servidor sean del cliente.",
  eyebrow: "Orquestación",
  serviceType: "Desarrollo de automatizaciones con n8n",
  ctaLabel: "Hablar con Nitidflow",

  problem: {
    title: "El problema no es montar un workflow. Es que aguante un año.",
    body: [
      "Montar una automatización en n8n es fácil, y eso es parte del problema. Cualquiera puede encadenar diez nodos en una tarde y tener algo que funciona con el caso de ejemplo. Lo difícil llega después: qué pasa cuando la API responde un error, cuando llegan cincuenta ejecuciones a la vez, cuando alguien cambia un campo, o cuando el flujo lleva tres meses fallando en silencio y nadie se ha enterado.",
      "El segundo asunto es dónde vive todo eso. Una plataforma SaaS de automatización implica que vuestros datos de clientes pasan por infraestructura de un tercero, con lo que eso supone en encargados del tratamiento y en dependencia. n8n autoalojado permite que el servidor y los datos sean vuestros.",
      "Y el tercero, el más frecuente: flujos que nadie más entiende. Sin nombres consistentes, sin control de versiones y sin credenciales en un gestor de secretos, la automatización se convierte en una deuda en lugar de un activo.",
    ],
    signals: [
      "Hay workflows en marcha que nadie sabe explicar",
      "Las credenciales están repartidas en documentos y capturas",
      "Un flujo falló y se descubrió semanas después",
      "No hay forma de saber qué cambió ni quién lo cambió",
      "Los datos de clientes pasan por una plataforma de terceros sin que se haya valorado",
      "Se usan borradores que nunca se publicaron y no están corriendo de verdad",
    ],
  },

  how: {
    title: "Cómo construimos en n8n.",
    lead: "Las reglas de trabajo importan más que los nodos. Son las que hacen la diferencia entre una automatización y una deuda técnica.",
    steps: [
      {
        title: "Autoalojado por defecto",
        description:
          "El servidor y los datos son del cliente. Si hay razones para usar n8n Cloud, se decide explícitamente.",
      },
      {
        title: "Secretos en un gestor",
        description:
          "Las credenciales viven en un gestor de contraseñas, nunca en un documento, un chat o el propio flujo.",
      },
      {
        title: "Plan de error en cada flujo",
        description:
          "Reintentos, notificación cuando algo falla y salida manual. Un flujo sin esto fallará sin que nadie lo sepa.",
      },
      {
        title: "Versionado y publicación",
        description:
          "Los cambios quedan registrados, y todo cambio se publica: un borrador no está corriendo en producción.",
      },
    ],
  },

  workflow: {
    title: "Anatomía de un flujo que se puede mantener.",
    lead: "Lo que distingue un workflow de producción de una prueba: entrada validada, error previsto y traza de cada ejecución.",
    label: "flujo-de-produccion",
    steps: [
      {
        icon: <Webhook />,
        title: "Disparador",
        description: "Webhook, programación o evento del sistema",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Validación de entrada",
        description: "Si el dato no cumple, no entra al flujo",
        status: "complete",
      },
      {
        icon: <GitBranch />,
        title: "Lógica y ramas",
        description: "Camino habitual y excepciones separadas",
        status: "processing",
      },
      {
        icon: <Database />,
        title: "Escritura",
        description: "Idempotente: reintentar no duplica el registro",
        status: "waiting",
      },
      {
        icon: <Bell />,
        title: "Manejo de error",
        description: "Reintento, aviso y cola de revisión manual",
        status: "waiting",
      },
      {
        icon: <ServerCog />,
        title: "Traza de ejecución",
        description: "Qué entró, qué se hizo y cómo terminó",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Para qué usamos n8n.",
    lead: "Como capa de orquestación entre sistemas. Cuando el caso pide otra cosa, usamos otra cosa.",
    items: [
      {
        title: "Integración entre sistemas sin conector nativo",
        description:
          "Dos herramientas que no se hablan y que ahora se comunican sin que nadie haga de puente.",
      },
      {
        title: "Orquestación de agentes de IA",
        description:
          "El flujo decide cuándo interviene el modelo, con qué contexto y qué se hace con la respuesta.",
      },
      {
        title: "Procesos programados",
        description:
          "Informes, sincronizaciones y comprobaciones que ocurren a su hora sin intervención.",
      },
      {
        title: "Recepción de webhooks",
        description:
          "Eventos de la tienda, del CRM o de la pasarela de pago procesados en el momento.",
      },
      {
        title: "Colas de revisión humana",
        description:
          "Lo que el flujo no puede decidir se acumula en una bandeja para que alguien resuelva.",
      },
      {
        title: "Migraciones y cargas puntuales",
        description:
          "Traspasos de datos entre sistemas, con validación y registro de lo que se movió.",
      },
    ],
  },

  integrations: {
    title: "Lo que n8n conecta en la práctica.",
    lead: "Tiene conectores para la mayoría de herramientas habituales, y para el resto queda el nodo HTTP. Eso es lo que lo hace útil como capa intermedia.",
    names: [
      "n8n",
      "WhatsApp",
      "HubSpot",
      "Airtable",
      "Google Sheets",
      "Gmail",
      "Slack",
      "Stripe",
    ],
  },

  benefits: {
    title: "Por qué esta pieza y no otra.",
    items: [
      {
        title: "Los datos no salen de vuestra infraestructura",
        description:
          "Autoalojado, el tratamiento ocurre en vuestro servidor. Eso simplifica bastante la conversación de RGPD.",
      },
      {
        title: "El flujo es legible",
        description:
          "Un diagrama que alguien de la empresa puede seguir vale más que un script que solo entiende quien lo escribió.",
      },
      {
        title: "No hay coste por ejecución",
        description:
          "Autoalojado, el volumen no cambia la factura. Con volúmenes altos la diferencia frente a plataformas SaaS es notable.",
      },
      {
        title: "Se puede salir",
        description:
          "Los flujos son vuestros y exportables. La dependencia del proveedor es mucho menor que en una plataforma cerrada.",
      },
    ],
  },

  limits: {
    title: "Cuándo n8n no es la respuesta",
    items: [
      "Volúmenes muy altos con latencia crítica: ahí conviene código y una cola de verdad",
      "Lógica muy compleja: a partir de cierto punto un flujo visual es menos mantenible que código",
      "Equipos sin nadie que pueda mantener un servidor, si no se contrata ese mantenimiento",
      "Procesos con requisitos de certificación que la infraestructura propia no cubra",
      "Casos donde ya existe un conector nativo entre las dos herramientas: no hace falta capa intermedia",
    ],
  },

  faq: [
    {
      question: "¿Sois una agencia de n8n?",
      answer:
        "No. n8n es una herramienta que usamos cuando encaja, y en bastantes casos encaja. Pero el trabajo es decidir qué proceso automatizar y cómo, y a veces la respuesta correcta es código propio, un conector nativo que ya existe, o no automatizar nada. Presentarse como agencia de una herramienta suele acabar en usar esa herramienta también donde no toca.",
    },
    {
      question: "¿n8n autoalojado o n8n Cloud?",
      answer:
        "Por defecto autoalojado, porque el servidor y los datos deberían ser del cliente. Cloud tiene sentido cuando no hay nadie que pueda encargarse de la infraestructura y el volumen es bajo, asumiendo que los datos pasan por un tercero y que eso hay que reflejarlo como encargado del tratamiento.",
    },
    {
      question: "¿n8n o Make?",
      answer:
        "Make es más cómodo para empezar y no requiere infraestructura; n8n permite autoalojar, no cobra por operación y da más control cuando la lógica se complica. Para una pyme española que maneja datos de clientes, la posibilidad de autoalojar pesa bastante. Si el caso es sencillo y de poco volumen, Make puede ser perfectamente razonable.",
    },
    {
      question: "¿Quién mantiene el servidor?",
      answer:
        "Se decide antes de empezar, no después. Puede ser vuestro proveedor de sistemas, podemos hacerlo nosotros como servicio, o puede ser vuestro equipo si tiene con qué. Lo que no funciona es que quede sin dueño: un n8n sin actualizar es un problema de seguridad, no solo de mantenimiento.",
    },
    {
      question: "¿Podemos seguir tocando los flujos nosotros?",
      answer:
        "Sí, y es parte del objetivo: se entregan documentados para que podáis. La única condición que insistimos en dejar clara es que todo cambio hay que publicarlo — un borrador guardado no está corriendo en producción — y que las credenciales se toquen desde el gestor de secretos, no pegándolas en el flujo.",
    },
  ],

  related: [
    {
      label: "Automatización con IA",
      href: "/automatizacion-ia",
      description: "Qué se automatiza y con qué criterio, antes de elegir herramienta.",
    },
    {
      label: "Agentes de IA",
      href: "/agentes-ia",
      description: "Lo que n8n orquesta cuando hay un modelo en el flujo.",
    },
    {
      label: "Automatización administrativa",
      href: "/automatizacion-administrativa",
      description: "El terreno donde esta capa de orquestación se usa más.",
    },
  ],

  finalCta: {
    title: "¿Tenéis flujos que nadie sabe explicar?",
    lead: "Revisarlos y dejarlos mantenibles suele ser más urgente que montar el siguiente. Cuéntanos qué hay en marcha.",
    label: "Hablar con Nitidflow",
  },
}
