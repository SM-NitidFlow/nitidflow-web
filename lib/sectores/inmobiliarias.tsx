import {
  CalendarCheck,
  CheckCircle2,
  Database,
  Home,
  MessageCircle,
  Sparkles,
} from "lucide-react"
import type { Landing } from "@/lib/landings/types"

export const inmobiliarias: Landing = {
  slug: "/sectores/inmobiliarias",
  shortName: "Inmobiliarias",
  breadcrumbParent: { name: "Sectores", path: "/sectores" },
  metaTitle: "IA para inmobiliarias: automatización de leads y visitas",
  metaDescription:
    "Automatización para inmobiliarias: leads de portales cualificados al momento, visitas agendadas y CRM actualizado sin trabajo manual del equipo comercial.",
  h1: "IA para inmobiliarias",
  subheadline:
    "En este sector gana quien contesta primero. El problema es que los leads de portales entran a todas horas y el equipo no.",
  eyebrow: "Inmobiliarias",
  serviceType: "Automatización de procesos para agencias inmobiliarias",
  ctaLabel: "Automatizar mi agencia",

  problem: {
    title: "El lead de portal se enfría en veinte minutos.",
    body: [
      "Un contacto de Idealista o Fotocasa no está mirando solo vuestro inmueble: está mandando la misma consulta a cinco anuncios. La probabilidad de convertirlo cae muy rápido, y no por calidad de atención, sino por orden de llegada. Si contestáis a las tres horas, ya ha hablado con alguien.",
      "El segundo problema es el volumen basura. Buena parte de los contactos de portal no encajan: buscan otro presupuesto, otra zona, o no tienen la financiación resuelta. Filtrarlos consume el tiempo del comercial exactamente igual que atender a los buenos.",
      "Y el tercero es que el histórico se pierde. La conversación fue por WhatsApp desde el móvil del agente, y cuando ese agente se va, el contacto no existe para la agencia.",
    ],
    signals: [
      "Los leads del fin de semana se atienden el lunes",
      "El equipo dedica la mañana a descartar contactos que no encajan",
      "Las conversaciones viven en el WhatsApp personal de cada agente",
      "El CRM tiene la mitad de los contactos que han pasado por la agencia",
      "Se agendan visitas por cadena de mensajes",
      "Nadie sabe qué portal trae contactos que acaban firmando",
    ],
  },

  how: {
    title: "Cómo se ataca el ciclo del lead inmobiliario.",
    lead: "El objetivo no es que un sistema venda pisos: es que el agente hable solo con quien merece la pena y lo antes posible.",
    steps: [
      {
        title: "Respuesta inmediata",
        description:
          "Contacto en minutos a cualquier hora, con la referencia del inmueble concreto que ha mirado.",
      },
      {
        title: "Cualificación en la conversación",
        description:
          "Presupuesto, zona, plazo y situación de financiación preguntados de forma natural en el chat.",
      },
      {
        title: "Agenda de visitas",
        description:
          "Huecos reales del agente propuestos y confirmados sin cadena de correos.",
      },
      {
        title: "Todo en el CRM",
        description:
          "El contacto y la conversación quedan en el sistema de la agencia, no en un móvil.",
      },
    ],
  },

  workflow: {
    title: "De contacto de portal a visita confirmada.",
    lead: "El agente entra cuando hay un interesado real con la información básica ya recogida.",
    label: "lead-inmobiliario",
    steps: [
      {
        icon: <Home />,
        title: "Contacto de portal",
        description: "Idealista, Fotocasa o web propia",
        status: "complete",
      },
      {
        icon: <MessageCircle />,
        title: "Respuesta inmediata",
        description: "Con la referencia del inmueble consultado",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "Se cualifica",
        description: "Presupuesto, zona, plazo y financiación",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Se prioriza",
        description: "Encaja, no encaja o necesita seguimiento",
        status: "processing",
      },
      {
        icon: <CalendarCheck />,
        title: "Se agenda la visita",
        description: "Sobre la agenda real del agente",
        status: "waiting",
      },
      {
        icon: <Database />,
        title: "Queda en el CRM",
        description: "Contacto, inmueble y conversación",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Qué se automatiza en una agencia.",
    lead: "Todas estas piezas se montan por separado. La primera suele ser la respuesta inmediata, porque es la que más se nota.",
    items: [
      {
        title: "Primera respuesta a leads de portal",
        description:
          "En minutos, con la referencia concreta y sin plantilla genérica de «gracias por su interés».",
      },
      {
        title: "Cualificación de compradores",
        description:
          "Las cuatro preguntas que determinan si merece una visita, hechas antes de ocupar la agenda.",
      },
      {
        title: "Agendado y recordatorio de visitas",
        description:
          "Confirmación previa que reduce las visitas a las que nadie aparece.",
      },
      {
        title: "Seguimiento post-visita",
        description:
          "Recogida de la reacción del interesado sin que el agente tenga que perseguirlo.",
      },
      {
        title: "Captación de propietarios",
        description:
          "Atención inmediata al que quiere vender, que es el contacto más valioso y el que menos espera.",
      },
      {
        title: "Alta de inmuebles en portales",
        description:
          "Publicación coordinada en varios portales desde una única ficha, sin duplicar el trabajo.",
      },
    ],
  },

  integrations: {
    title: "Con el CRM inmobiliario que ya usáis.",
    lead: "Los CRM del sector no siempre tienen API abierta. Se comprueba antes de comprometer alcance, y cuando no la hay se buscan vías alternativas o se acota el proyecto.",
    names: [
      "WhatsApp",
      "Gmail",
      "HubSpot",
      "Google Sheets",
      "Airtable",
      "Slack",
      "Notion",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué cambia en la agencia.",
    items: [
      {
        title: "El tiempo de primera respuesta deja de depender del horario",
        description:
          "En un sector donde el orden de llegada decide, esto es lo que más mueve la aguja.",
      },
      {
        title: "El agente dedica su tiempo a visitas y a cerrar",
        description:
          "No a descartar contactos que no encajan ni a cuadrar horarios por mensaje.",
      },
      {
        title: "El histórico es de la agencia",
        description:
          "Cuando un agente sale, los contactos y las conversaciones se quedan.",
      },
      {
        title: "Se puede saber qué portal funciona",
        description:
          "Con los contactos trazados desde el origen hasta la firma, la inversión en portales deja de ser a ciegas.",
      },
    ],
  },

  limits: {
    title: "Lo que sigue siendo del agente",
    items: [
      "La visita y todo lo que se decide en ella",
      "La negociación de precio y condiciones",
      "El asesoramiento sobre financiación y trámites",
      "La relación con el propietario, que es lo que sostiene la cartera",
      "Valorar un inmueble: hay datos que ayudan, pero la decisión no se automatiza",
    ],
  },

  faq: [
    {
      question: "¿Los portales permiten automatizar la respuesta a sus leads?",
      answer:
        "Depende del portal y del plan que tengáis. Algunos ofrecen integración o envío del lead por email, y eso es suficiente para arrancar el flujo. Lo que no hacemos es automatizar el navegador contra el panel del portal: es frágil y suele ir contra sus condiciones de uso.",
    },
    {
      question: "¿El interesado nota que le contesta un sistema?",
      answer:
        "Debe saberlo, y en la práctica no penaliza: en este sector lo que valora el contacto es que le respondan rápido y con la referencia correcta. Lo que sí penaliza es una respuesta automática genérica que no menciona el inmueble que ha mirado.",
    },
    {
      question: "¿Funciona con nuestro CRM inmobiliario?",
      answer:
        "Hay que mirarlo caso por caso. Los CRM del sector varían mucho: algunos tienen API razonable y otros son cerrados. Si no hay API, a veces se puede trabajar con exportaciones programadas o con su integración de email, aunque el resultado es menos inmediato. Se comprueba antes de presupuestar.",
    },
    {
      question: "¿Se pueden automatizar los datos de propietarios y compradores con el RGPD?",
      answer:
        "Sí, con lo que exige cualquier tratamiento: base jurídica, información en el primer contacto y el tratamiento reflejado en el registro de actividades. En este sector hay que prestar atención a un punto concreto: los datos de un interesado captados para una consulta sobre un inmueble no se pueden reutilizar sin más para campañas comerciales sin consentimiento.",
    },
  ],

  related: [
    {
      label: "Automatización de WhatsApp",
      href: "/automatizacion-whatsapp",
      description: "El canal por donde entra y se cierra casi todo en este sector.",
    },
    {
      label: "Automatización de ventas",
      href: "/automatizacion-ventas",
      description: "El proceso comercial completo, más allá del sector.",
    },
    {
      label: "Automatización de CRM",
      href: "/automatizacion-crm",
      description: "Que el histórico de la agencia deje de vivir en móviles.",
    },
  ],

  finalCta: {
    title: "¿Cuánto tardáis en contestar un lead de portal?",
    lead: "Si la respuesta cambia según el día de la semana, ahí hay operaciones perdidas que se pueden recuperar.",
    label: "Automatizar mi agencia",
  },
}
