import {
  CheckCircle2,
  Database,
  MessageCircle,
  Search,
  Send,
  Sparkles,
} from "lucide-react"
import type { Landing } from "./types"

export const agentesIa: Landing = {
  slug: "/agentes-ia",
  shortName: "Agentes de IA",
  metaTitle: "Agentes de IA para empresas",
  metaDescription:
    "Diseñamos agentes de IA que interpretan información, deciden el siguiente paso y ejecutan acciones dentro del CRM, WhatsApp, el email y el resto de tu stack.",
  h1: "Agentes de IA para empresas",
  subheadline:
    "Agentes que entienden información, toman decisiones y ejecutan acciones. La diferencia con un chatbot no es la conversación: es que al final del proceso ha cambiado algo en tus sistemas.",
  eyebrow: "Agentes de IA",
  serviceType: "Diseño e implementación de agentes de IA",
  ctaLabel: "Explorar agentes IA",

  problem: {
    title: "Un chatbot responde. Un agente termina el trabajo.",
    body: [
      "La mayoría de proyectos de «IA en la empresa» acaban en un chat que contesta preguntas. Funciona una temporada y luego se abandona, porque responder no era el problema: el problema era que después de responder alguien tenía que abrir el CRM, crear el contacto, apuntar lo hablado y agendar la llamada.",
      "Un agente se diseña al revés. Parte de la acción que hay que ejecutar y de las herramientas donde ejecutarla, y la conversación es solo la entrada. Puede consultar información real en tus sistemas, decidir entre varias salidas posibles y dejar registro de lo que ha hecho.",
      "Eso también significa que un agente se equivoca de otra manera: no da una respuesta pobre, ejecuta una acción incorrecta. Por eso lo que importa al diseñarlo son los límites, no la autonomía.",
    ],
    signals: [
      "Ya tenéis un chatbot y nadie lo usa",
      "Alguien transcribe a mano lo que se habla con el cliente",
      "Las consultas exigen mirar en dos o tres sistemas distintos",
      "El seguimiento depende de que alguien se acuerde",
      "Hay reglas que cambian según el caso y no caben en un formulario",
      "El equipo pasa más tiempo registrando que atendiendo",
    ],
  },

  how: {
    title: "Cómo se construye un agente que no se descontrola.",
    lead: "Un agente útil no es el que puede hacer de todo, sino el que tiene un objetivo estrecho, herramientas concretas y un límite claro de dónde para.",
    steps: [
      {
        title: "Un objetivo, no una personalidad",
        description:
          "El agente existe para cerrar un proceso concreto. Cuanto más estrecho el objetivo, más fiable el resultado.",
      },
      {
        title: "Herramientas explícitas",
        description:
          "Solo puede hacer lo que le hemos dado: consultar el CRM, crear un contacto, agendar. Nada más.",
      },
      {
        title: "Un punto de parada",
        description:
          "Casos fuera de guion, importes altos o clientes sensibles se derivan a una persona por diseño, no por excepción.",
      },
      {
        title: "Registro de cada paso",
        description:
          "Qué consultó, qué decidió y qué ejecutó. Sin traza no se puede depurar ni defender una decisión.",
      },
    ],
  },

  workflow: {
    title: "Qué ocurre entre el mensaje y la acción.",
    lead: "El agente no responde y se olvida: consulta, decide, actúa y deja el rastro. Ese ciclo es lo que lo distingue de un chatbot.",
    label: "agente-atencion",
    steps: [
      {
        icon: <MessageCircle />,
        title: "Entrada",
        description: "Mensaje, email o evento del sistema",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "Comprende",
        description: "Identifica la intención y qué datos faltan",
        status: "complete",
      },
      {
        icon: <Search />,
        title: "Consulta",
        description: "Busca en tus sistemas antes de contestar",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Decide",
        description: "Resuelve, pide un dato más o escala a una persona",
        status: "processing",
      },
      {
        icon: <Database />,
        title: "Ejecuta",
        description: "Crea, actualiza o agenda en la herramienta real",
        status: "waiting",
      },
      {
        icon: <Send />,
        title: "Cierra",
        description: "Responde y deja registro de lo hecho",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Tres agentes que cubren la mayoría de casos.",
    lead: "No hacen falta veinte agentes. Casi todo el trabajo repetitivo de una pyme cae en uno de estos tres perfiles.",
    items: [
      {
        title: "Agente de ventas",
        description:
          "Recibe el lead, lo interpreta, lo cualifica con tus criterios, actualiza el CRM y arranca el seguimiento.",
      },
      {
        title: "Agente de atención",
        description:
          "Atiende la conversación, consulta el estado real del pedido o del expediente y escala cuando el caso lo pide.",
      },
      {
        title: "Agente de operaciones",
        description:
          "Convierte documentos y correos en datos estructurados, los valida y los escribe donde corresponde.",
      },
      {
        title: "Agente de cualificación",
        description:
          "Ordena una entrada masiva de solicitudes según prioridad real, no según orden de llegada.",
      },
      {
        title: "Agente de seguimiento",
        description:
          "Retoma conversaciones paradas con el contexto de lo que ya se habló, sin repetir el mismo mensaje.",
      },
      {
        title: "Agente de reporting",
        description:
          "Recoge datos de varios sistemas y redacta el informe recurrente con el mismo criterio cada vez.",
      },
    ],
  },

  integrations: {
    title: "Dónde actúa un agente.",
    lead: "Un agente sin herramientas es un chat. Lo que lo hace útil es tener permiso para escribir en los sistemas donde de verdad vive el trabajo.",
    names: [
      "WhatsApp",
      "HubSpot",
      "Salesforce",
      "Gmail",
      "Slack",
      "Airtable",
      "Notion",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué gana el equipo.",
    items: [
      {
        title: "El registro deja de ser trabajo",
        description:
          "Lo que se habla queda apuntado sin que nadie lo transcriba después, que es cuando se pierde.",
      },
      {
        title: "Las consultas se resuelven con datos reales",
        description:
          "El agente mira el sistema antes de contestar, en lugar de improvisar sobre un texto genérico.",
      },
      {
        title: "El caso difícil llega antes a una persona",
        description:
          "Bien diseñado, un agente no intenta resolver lo que no puede: lo detecta y lo pasa con contexto.",
      },
      {
        title: "El criterio queda escrito",
        description:
          "Cualificar un lead deja de depender de quién lo lea. Las reglas están en un sitio y se pueden discutir.",
      },
    ],
  },

  limits: {
    title: "Qué no le pedimos a un agente",
    items: [
      "Negociar precios o condiciones comerciales",
      "Tomar decisiones con consecuencia legal o económica sin validación",
      "Sustituir la conversación cuando el cliente está enfadado",
      "Operar sobre sistemas sin API mediante automatización del navegador",
      "Inventar información que no está en vuestros datos",
    ],
  },

  faq: [
    {
      question: "¿Qué diferencia real hay entre un chatbot y un agente de IA?",
      answer:
        "El alcance de lo que puede hacer. Un chatbot produce texto. Un agente tiene herramientas conectadas y puede consultar, crear y modificar registros en tus sistemas. La consecuencia práctica es que un chatbot mal hecho da una respuesta mala, y un agente mal hecho ejecuta una acción mala: por eso el diseño de límites importa más que el modelo.",
    },
    {
      question: "¿Cuánta autonomía se le da?",
      answer:
        "La mínima que resuelva el caso. Lo habitual es que las lecturas y consultas sean libres, las escrituras estén acotadas a operaciones concretas, y las acciones sensibles — enviar una propuesta, emitir una factura, cerrar una incidencia — requieran validación o cumplan una regla explícita.",
    },
    {
      question: "¿Se puede saber por qué el agente hizo algo?",
      answer:
        "Sí, si se ha construido para eso. Cada ejecución debe registrar la entrada, las consultas hechas, la decisión tomada y la acción ejecutada. Sin ese registro no hay forma de depurar un fallo ni de explicar una decisión a un cliente.",
    },
    {
      question: "¿Qué modelo de IA usáis?",
      answer:
        "Depende de la tarea, y no es una decisión definitiva. Interpretar un email corto y razonar sobre un expediente complejo no piden lo mismo. El sistema se construye para poder cambiar de modelo sin rehacer el flujo, porque en este terreno lo que hoy es la mejor opción en seis meses puede no serlo.",
    },
    {
      question: "¿El agente aprende de nuestros datos?",
      answer:
        "Consulta vuestros datos en el momento de responder, que es distinto de entrenar un modelo con ellos. Lo primero es lo que hace falta casi siempre y es reversible; lo segundo rara vez se justifica en una pyme y trae consigo un problema de privacidad y de mantenimiento.",
    },
    {
      question: "¿Cuánto tarda en estar en producción?",
      answer:
        "Un agente con un objetivo estrecho y sistemas con API suele medirse en semanas. Lo que alarga los plazos casi nunca es la IA: son los accesos, los permisos y descubrir que el proceso real no era el que estaba documentado.",
    },
  ],

  related: [
    {
      label: "Automatización con IA",
      href: "/automatizacion-ia",
      description: "El marco general: qué se automatiza y en qué orden.",
    },
    {
      label: "Automatización de WhatsApp",
      href: "/automatizacion-whatsapp",
      description: "El canal donde un agente se nota más rápido.",
    },
    {
      label: "Automatización de CRM",
      href: "/automatizacion-crm",
      description: "Donde el agente escribe lo que antes se apuntaba a mano.",
    },
  ],

  finalCta: {
    title: "¿Qué tendría que poder hacer vuestro agente?",
    lead: "Descríbenos el proceso y las herramientas. Te diremos si un agente aporta algo o si basta con una automatización sin IA.",
    label: "Hablar con Nitidflow",
  },
}
