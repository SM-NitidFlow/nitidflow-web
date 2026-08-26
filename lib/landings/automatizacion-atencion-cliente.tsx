import {
  ArrowUpRight,
  Database,
  Inbox,
  Search,
  Send,
  Sparkles,
} from "lucide-react"
import type { Landing } from "./types"

export const automatizacionAtencionCliente: Landing = {
  slug: "/automatizacion-atencion-cliente",
  shortName: "Atención al cliente",
  metaTitle: "Atención al cliente automatizada con IA",
  metaDescription:
    "Automatiza la atención al cliente con IA: clasificación de consultas, respuestas basadas en tus datos reales, routing y escalado a personas cuando hace falta.",
  h1: "Atención al cliente automatizada con IA",
  subheadline:
    "Las preguntas que se repiten se resuelven consultando tus sistemas. Las que no, llegan a una persona con el contexto ya reunido.",
  eyebrow: "Atención al cliente",
  serviceType: "Automatización de atención al cliente y soporte",
  ctaLabel: "Automatizar atención",

  problem: {
    title: "El 70% de las consultas son las mismas seis preguntas.",
    body: [
      "En la mayoría de empresas la atención al cliente no está desbordada por casos complejos: está desbordada por repetición. Dónde está mi pedido, cuándo me atendéis, qué documentación necesito, cómo cambio la cita. Preguntas cuya respuesta ya existe en un sistema, pero que requieren que una persona la vaya a buscar.",
      "El intento habitual de resolverlo es un chatbot con respuestas predefinidas. Falla por una razón concreta: la respuesta útil no es genérica, es «tu pedido salió ayer». Sin acceso a los datos reales, el bot da largas y el cliente acaba escribiendo otra vez pidiendo hablar con una persona.",
      "El problema opuesto también existe: automatizar hasta el punto de que sea imposible llegar a un humano. Eso no reduce el coste de atención, lo traslada a las reseñas.",
    ],
    signals: [
      "El mismo tipo de consulta ocupa la mayor parte del buzón",
      "Responder exige abrir dos o tres sistemas distintos",
      "El tiempo de respuesta se dispara en temporada alta",
      "Fuera de horario no se atiende nada",
      "No hay registro de qué se preguntó ni de qué se contestó",
      "El cliente repite su caso desde cero cada vez que escribe",
    ],
  },

  how: {
    title: "Cómo se separa lo repetitivo de lo que necesita una persona.",
    lead: "El objetivo no es que la IA conteste todo. Es que conteste bien lo que puede y detecte rápido lo que no.",
    steps: [
      {
        title: "Clasificar la entrada",
        description:
          "Cada consulta se identifica por tipo antes de decidir qué hacer con ella.",
      },
      {
        title: "Buscar el dato real",
        description:
          "La respuesta sale del pedido, del expediente o de la ficha, no de un texto genérico.",
      },
      {
        title: "Responder o escalar",
        description:
          "Si falta información, si el tono es de queja o si el caso es sensible, pasa a una persona.",
      },
      {
        title: "Dejar el caso trazado",
        description:
          "Qué preguntó, qué se le dijo y en qué quedó. Para que la siguiente conversación no empiece de cero.",
      },
    ],
  },

  workflow: {
    title: "De consulta entrante a caso resuelto o escalado.",
    lead: "El escalado no es el fallo del sistema: es una de sus salidas previstas, y bien hecha llega con el contexto ya preparado.",
    label: "atencion-primer-nivel",
    steps: [
      {
        icon: <Inbox />,
        title: "Entra la consulta",
        description: "Email, WhatsApp, chat o formulario",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "Se clasifica",
        description: "Tipo de consulta, urgencia y tono",
        status: "complete",
      },
      {
        icon: <Search />,
        title: "Se busca el dato",
        description: "Estado real en el sistema que corresponde",
        status: "complete",
      },
      {
        icon: <Send />,
        title: "Se responde",
        description: "Con la información concreta del cliente",
        status: "processing",
      },
      {
        icon: <ArrowUpRight />,
        title: "O se escala",
        description: "A la persona adecuada, con el contexto reunido",
        status: "waiting",
      },
      {
        icon: <Database />,
        title: "Se registra",
        description: "El caso queda trazado para la próxima vez",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Qué se resuelve sin intervención.",
    lead: "Consultas donde la respuesta existe en un sistema y solo hace falta ir a buscarla.",
    items: [
      {
        title: "Estado de pedido o expediente",
        description:
          "Consulta directa al sistema y respuesta con el estado real, no con un «lo revisamos».",
      },
      {
        title: "Cambios y cancelaciones de cita",
        description:
          "Reprogramación contra el calendario real, con las reglas de aviso que tengáis definidas.",
      },
      {
        title: "Documentación necesaria",
        description:
          "Qué hace falta aportar en cada trámite, según el tipo de caso concreto.",
      },
      {
        title: "Horarios y disponibilidad",
        description:
          "Información que cambia y que en la web suele estar desactualizada.",
      },
      {
        title: "Primer filtro de incidencias",
        description:
          "Recoger los datos que el técnico va a necesitar antes de que el técnico entre.",
      },
      {
        title: "Reparto del buzón compartido",
        description:
          "Cada mensaje a la bandeja o al responsable que le toca, sin que alguien clasifique a mano.",
      },
    ],
  },

  integrations: {
    title: "Conectado a donde está la respuesta.",
    lead: "Un sistema de atención sin acceso a los datos reales solo puede dar respuestas vagas. Lo que lo hace útil es la conexión al pedido, al expediente y a la ficha del cliente.",
    names: [
      "WhatsApp",
      "Gmail",
      "Shopify",
      "HubSpot",
      "Notion",
      "Airtable",
      "Slack",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué cambia para el cliente y para el equipo.",
    items: [
      {
        title: "Respuesta inmediata en lo que es inmediato",
        description:
          "Consultar un estado no debería llevar cuatro horas de espera por depender de una cola humana.",
      },
      {
        title: "El equipo atiende lo que merece atención",
        description:
          "Deja de gastar la jornada en las seis preguntas de siempre y se ocupa de los casos reales.",
      },
      {
        title: "Fuera de horario deja de ser un agujero",
        description:
          "Lo consultable se resuelve; lo demás queda recogido y con contexto para la mañana siguiente.",
      },
      {
        title: "Se puede medir qué pregunta la gente",
        description:
          "El registro de consultas por tipo suele revelar problemas de producto o de web que nadie había cuantificado.",
      },
    ],
  },

  limits: {
    title: "Dónde entra siempre una persona",
    items: [
      "Reclamaciones y clientes enfadados",
      "Devoluciones, abonos y cualquier cosa con dinero de vuelta",
      "Casos con implicación legal o sanitaria",
      "Consultas donde el cliente pide explícitamente hablar con alguien",
      "Todo lo que el sistema no entienda con seguridad: la duda escala, no improvisa",
    ],
  },

  faq: [
    {
      question: "¿El cliente sabe que está hablando con un sistema?",
      answer:
        "Debe saberlo. Ocultarlo sale mal siempre: en el momento en que el cliente lo intuye, pierde confianza en todo lo anterior. Y en atención al cliente, además, ser claro sobre la naturaleza automatizada del canal es lo que exige la normativa europea de transparencia en IA.",
    },
    {
      question: "¿Y si responde mal?",
      answer:
        "Se diseña para que no pueda responder cuando no está seguro. La regla es que ante duda o falta de datos escale, en lugar de rellenar el hueco. Eso baja la tasa de resolución automática y sube la tasa de respuestas correctas, que es el intercambio que interesa.",
    },
    {
      question: "¿Se puede atender en varios idiomas?",
      answer:
        "Sí, y es una de las cosas donde la IA aporta de forma clara. La cautela: si atendéis en un idioma que nadie del equipo habla, hay que decidir qué pasa cuando ese caso escale a una persona.",
    },
    {
      question: "¿Hace falta tener una base de conocimiento montada?",
      answer:
        "Ayuda, pero no es un requisito previo. Buena parte de las respuestas útiles no salen de documentación, salen de consultar el sistema. La documentación se necesita para las preguntas de criterio — políticas, condiciones, procedimientos — y ahí sí hay que escribirla si no existe.",
    },
    {
      question: "¿Cuánto del volumen se puede resolver sin persona?",
      answer:
        "Depende tanto del sector y de vuestros datos que dar un porcentaje sería inventarlo. Lo que sí se puede hacer en la primera conversación es mirar una muestra real de vuestro buzón y estimar qué proporción son consultas con respuesta consultable.",
    },
  ],

  related: [
    {
      label: "Automatización de WhatsApp",
      href: "/automatizacion-whatsapp",
      description: "El canal donde hoy llega la mayoría de las consultas.",
    },
    {
      label: "Agentes de IA",
      href: "/agentes-ia",
      description: "Cuando atender implica consultar y además hacer algo.",
    },
    {
      label: "Automatización de ecommerce",
      href: "/automatizacion-ecommerce",
      description: "Pedidos, incidencias y postventa conectados de punta a punta.",
    },
  ],

  finalCta: {
    title: "¿Qué os preguntan todos los días?",
    lead: "Mándanos una muestra real de vuestro buzón y te decimos qué parte tiene respuesta consultable.",
    label: "Automatizar atención",
  },
}
