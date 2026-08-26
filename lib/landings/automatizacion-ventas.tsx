import {
  CalendarCheck,
  CheckCircle2,
  Database,
  MessageCircle,
  RotateCw,
  UserPlus,
} from "lucide-react"
import type { Landing } from "./types"

export const automatizacionVentas: Landing = {
  slug: "/automatizacion-ventas",
  shortName: "Automatización de ventas",
  metaTitle: "Automatización de ventas con IA",
  metaDescription:
    "Captura, cualifica y sigue tus leads automáticamente: entrada de leads, cualificación con tus criterios, actualización del CRM y seguimiento sin intervención manual.",
  h1: "Automatización de ventas con IA",
  subheadline:
    "Captura, cualifica y sigue tus leads automáticamente. Sin que nadie tenga que abrir el correo primero para que el proceso arranque.",
  eyebrow: "Ventas",
  serviceType: "Automatización de procesos comerciales",
  ctaLabel: "Automatizar mis ventas",

  problem: {
    title: "El problema del seguimiento manual.",
    body: [
      "Casi ningún equipo comercial pierde oportunidades por no saber vender. Las pierde porque el lead entró un viernes por la tarde, nadie lo vio hasta el lunes, y cuando se contestó el cliente ya estaba hablando con otro. El primero que responde no siempre gana, pero el que tarda dos días casi siempre pierde.",
      "Después viene el segundo agujero: el seguimiento. El primer contacto se hace, el cliente no contesta, y ahí muere. No por desinterés, sino porque acordarse de retomar veinte conversaciones a los tres días es una tarea que ninguna persona hace bien de forma sostenida.",
      "Y el tercero es el CRM. Se actualiza cuando hay tiempo, es decir, cuando ya no importa. Un CRM que refleja la mitad de lo que pasó no sirve para decidir nada.",
    ],
    signals: [
      "Los leads del fin de semana se contestan el lunes",
      "El CRM se actualiza al final del día, o al final de la semana",
      "El seguimiento depende de que alguien se acuerde",
      "Nadie sabe cuántos leads entraron el mes pasado sin mirarlo a mano",
      "Los leads buenos y los curiosos reciben el mismo trato",
      "Cada comercial cualifica con su propio criterio",
    ],
  },

  how: {
    title: "Qué automatizamos del proceso comercial.",
    lead: "No la venta. La parte administrativa que hay alrededor de la venta y que hoy consume el tiempo del comercial.",
    steps: [
      {
        title: "La entrada",
        description:
          "Formulario, portal, campaña o email. Todo aterriza en el mismo sitio con la misma estructura.",
      },
      {
        title: "La cualificación",
        description:
          "Vuestros criterios, escritos y aplicados igual siempre: presupuesto, zona, urgencia, encaje.",
      },
      {
        title: "El primer contacto",
        description:
          "Un mensaje con el contexto de lo que el lead pidió, en minutos y no en horas.",
      },
      {
        title: "El seguimiento",
        description:
          "Si no hay respuesta, se retoma según la pauta que defináis, con memoria de lo ya enviado.",
      },
    ],
  },

  workflow: {
    title: "De lead entrante a reunión agendada.",
    lead: "El comercial entra en escena cuando hay algo que decidir, no para registrar datos ni para escribir el primer mensaje.",
    label: "captacion-de-leads",
    steps: [
      {
        icon: <UserPlus />,
        title: "Entra el lead",
        description: "Web, portal, campaña o email entrante",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Se cualifica",
        description: "Criterios de la empresa, aplicados igual siempre",
        status: "complete",
      },
      {
        icon: <Database />,
        title: "Se registra",
        description: "Contacto y oportunidad creados en el CRM",
        status: "complete",
      },
      {
        icon: <MessageCircle />,
        title: "Primer contacto",
        description: "WhatsApp o email con el contexto de su consulta",
        status: "processing",
      },
      {
        icon: <RotateCw />,
        title: "Seguimiento",
        description: "Se retoma si no responde, sin repetir el mensaje",
        status: "waiting",
      },
      {
        icon: <CalendarCheck />,
        title: "Reunión",
        description: "Hueco propuesto y confirmado en el calendario",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Piezas concretas que se automatizan.",
    lead: "Se pueden montar por separado. No hace falta rehacer todo el proceso comercial de golpe.",
    items: [
      {
        title: "Captura unificada de leads",
        description:
          "Todos los canales escribiendo en el mismo sitio, con los mismos campos y sin duplicados.",
      },
      {
        title: "Cualificación con vuestros criterios",
        description:
          "El criterio deja de estar en la cabeza de cada comercial y pasa a estar escrito y discutible.",
      },
      {
        title: "Enriquecimiento del lead",
        description:
          "Datos públicos de la empresa añadidos al registro para que el comercial no tenga que buscarlos.",
      },
      {
        title: "Secuencias de seguimiento",
        description:
          "Pauta de contactos con memoria: no se repite el mismo mensaje ni se insiste sobre quien ya respondió.",
      },
      {
        title: "Agendado automático",
        description:
          "Propuesta de huecos reales del calendario y confirmación sin cadena de correos.",
      },
      {
        title: "Registro de actividad",
        description:
          "Llamadas, mensajes y respuestas anotados en el CRM sin que el comercial lo teclee.",
      },
    ],
  },

  integrations: {
    title: "Con el CRM que ya usáis.",
    lead: "El CRM no se sustituye. La automatización escribe en él y lo convierte en lo que debería haber sido siempre: el sitio donde está la verdad del proceso comercial.",
    names: [
      "HubSpot",
      "Salesforce",
      "WhatsApp",
      "Gmail",
      "Google Sheets",
      "Airtable",
      "Slack",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué cambia en el día a día del equipo.",
    items: [
      {
        title: "El tiempo de primera respuesta deja de depender del horario",
        description:
          "Un lead de sábado recibe contacto el sábado. Eso, en muchos sectores, es toda la diferencia.",
      },
      {
        title: "El comercial dedica su tiempo a hablar",
        description:
          "Deja de teclear en el CRM y de redactar el mismo primer mensaje veinte veces al día.",
      },
      {
        title: "El seguimiento deja de olvidarse",
        description:
          "No porque el equipo sea más disciplinado, sino porque ya no depende de la disciplina.",
      },
      {
        title: "El CRM sirve para decidir",
        description:
          "Si refleja lo que pasó de verdad, los números del embudo empiezan a significar algo.",
      },
    ],
  },

  limits: {
    title: "Lo que sigue siendo del comercial",
    items: [
      "Negociar precio, plazos y condiciones",
      "Decidir si una oportunidad merece esfuerzo extra",
      "La conversación con el cliente difícil o el cliente grande",
      "Cerrar",
      "Detectar que el criterio de cualificación está mal y hay que cambiarlo",
    ],
  },

  faq: [
    {
      question: "¿El primer mensaje lo escribe la IA? ¿No se nota?",
      answer:
        "Se nota si se deja al modelo escribir libremente. Lo que funciona es un mensaje con estructura vuestra y contexto real del lead — lo que pidió, de dónde viene, qué producto le encaja — no un texto genérico con el nombre insertado. Y para cuentas relevantes suele tener más sentido que el mensaje se prepare como borrador y lo envíe una persona.",
    },
    {
      question: "¿Cómo se define la cualificación?",
      answer:
        "Con vosotros, en una sesión. Normalmente sale una lista de cuatro o cinco criterios y unos umbrales. Lo importante es que quede escrito: a partir de ahí se puede discutir y ajustar, algo que no se puede hacer cuando el criterio vive en la intuición de cada comercial.",
    },
    {
      question: "¿Funciona con nuestro CRM?",
      answer:
        "Si tiene API o webhooks, casi seguro. HubSpot y Salesforce no dan problema. Con CRMs sectoriales o muy antiguos hay que comprobarlo antes de comprometer nada, y a veces la salida es trabajar contra su base de datos o su exportación, no contra una API.",
    },
    {
      question: "¿Qué pasa si el lead responde mientras el flujo sigue en marcha?",
      answer:
        "El flujo tiene que detectarlo y pararse. Es uno de los detalles que separan una automatización útil de una que molesta al cliente: si alguien contesta, la secuencia programada se cancela y la conversación pasa a la persona que corresponda.",
    },
    {
      question: "¿Se puede automatizar la propuesta comercial?",
      answer:
        "La generación del documento, sí: coger los datos de la oportunidad y montar la propuesta con vuestro formato. El envío conviene que lo haga una persona. Una propuesta con un precio mal calculado enviada automáticamente es un problema difícil de recoger.",
    },
  ],

  related: [
    {
      label: "Automatización de CRM",
      href: "/automatizacion-crm",
      description: "Que el CRM refleje lo que pasa sin que nadie lo teclee.",
    },
    {
      label: "Automatización de WhatsApp",
      href: "/automatizacion-whatsapp",
      description: "El canal por donde hoy entra y se cierra buena parte de la venta.",
    },
    {
      label: "Agentes de IA",
      href: "/agentes-ia",
      description: "Cuando la cualificación exige interpretar y no solo filtrar.",
    },
  ],

  finalCta: {
    title: "¿Cuánto tardáis hoy en contestar un lead?",
    lead: "Si la respuesta es «depende del día», ahí hay algo que arreglar. Cuéntanos cómo entra un lead y qué pasa después.",
    label: "Automatizar mis ventas",
  },
}
