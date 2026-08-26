import {
  ArrowUpRight,
  CalendarCheck,
  Database,
  MessageCircle,
  Search,
  Sparkles,
} from "lucide-react"
import type { Landing } from "./types"

export const automatizacionWhatsapp: Landing = {
  slug: "/automatizacion-whatsapp",
  shortName: "Automatización de WhatsApp",
  metaTitle: "Automatización de WhatsApp con IA",
  metaDescription:
    "Automatiza WhatsApp con la API oficial de WhatsApp Business: atención, cualificación de leads, agendado de citas y sincronización con el CRM, con traspaso a personas.",
  h1: "Automatiza WhatsApp con IA",
  subheadline:
    "Responde, cualifica y gestiona conversaciones automáticamente sin perder el toque humano. Sobre la API oficial, que es la única forma de hacerlo sin arriesgar el número.",
  eyebrow: "WhatsApp",
  serviceType: "Automatización de WhatsApp Business con IA",
  ctaLabel: "Automatizar WhatsApp",

  problem: {
    title: "WhatsApp es donde escribe el cliente. Y donde se pierde todo.",
    body: [
      "En España, si le das a un cliente la opción, escribe por WhatsApp. Es inmediato, no tiene que buscar el email y sabe que alguien lo va a leer. El problema es lo que pasa después: la conversación vive en el móvil de una persona, no queda registrada en ningún sistema, y cuando esa persona libra, nadie sabe en qué quedó.",
      "El segundo problema es el volumen. Un número que funciona bien acaba recibiendo más mensajes de los que una persona puede atender, y la calidad de respuesta cae justo cuando el canal empieza a importar.",
      "Y hay un tercero, más silencioso: mucha gente automatiza WhatsApp con herramientas que operan sobre la app sin autorización. Funcionan unas semanas y acaban con el número bloqueado y el histórico de conversaciones perdido.",
    ],
    signals: [
      "Las conversaciones viven en el móvil personal de alguien",
      "Nada de lo que se habla por WhatsApp llega al CRM",
      "Se responde tarde en los picos y nada fuera de horario",
      "Varias personas escriben desde el mismo número sin coordinación",
      "No hay forma de saber cuántas consultas llegaron por este canal",
      "Se usa una herramienta no oficial y da miedo que bloqueen el número",
    ],
  },

  how: {
    title: "Cómo se monta bien, sin arriesgar el número.",
    lead: "La parte técnica es la menos negociable: sin API oficial no hay automatización sostenible de WhatsApp.",
    steps: [
      {
        title: "API oficial y número dedicado",
        description:
          "WhatsApp Business Platform, con verificación del negocio. No sobre el número personal ni sobre la app.",
      },
      {
        title: "Plantillas aprobadas",
        description:
          "Los mensajes que inician conversación necesitan plantilla aprobada. Se diseñan con esa restricción, no contra ella.",
      },
      {
        title: "Ventana de 24 horas",
        description:
          "Fuera de la ventana de respuesta hay reglas distintas. El flujo las respeta en lugar de intentar esquivarlas.",
      },
      {
        title: "Traspaso a persona",
        description:
          "Una bandeja compartida donde cualquiera del equipo puede entrar en la conversación y seguir desde ahí.",
      },
    ],
  },

  workflow: {
    title: "De mensaje entrante a cita agendada.",
    lead: "El cliente escribe como escribiría a una persona. Lo que cambia es que al final la información acaba en vuestros sistemas.",
    label: "whatsapp-atencion",
    steps: [
      {
        icon: <MessageCircle />,
        title: "Llega el mensaje",
        description: "Número oficial de la empresa",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "Se interpreta",
        description: "Qué quiere y si ya es cliente",
        status: "complete",
      },
      {
        icon: <Search />,
        title: "Se consulta",
        description: "Ficha, pedido o expediente en vuestro sistema",
        status: "complete",
      },
      {
        icon: <CalendarCheck />,
        title: "Se resuelve",
        description: "Respuesta, cita agendada o dato aportado",
        status: "processing",
      },
      {
        icon: <ArrowUpRight />,
        title: "O pasa a persona",
        description: "Bandeja compartida con la conversación completa",
        status: "waiting",
      },
      {
        icon: <Database />,
        title: "Queda registrado",
        description: "Contacto y conversación reflejados en el CRM",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Qué se hace por WhatsApp.",
    lead: "Ordenado por lo que más se pide, no por lo que más luce en una demo.",
    items: [
      {
        title: "Atención 24/7 de lo consultable",
        description:
          "Estado de pedido, horarios, disponibilidad y trámites resueltos a cualquier hora.",
      },
      {
        title: "Cualificación de leads",
        description:
          "Las tres o cuatro preguntas que determinan si el contacto encaja, hechas en el momento.",
      },
      {
        title: "Agendado de citas",
        description:
          "Huecos reales del calendario propuestos en el chat y confirmados sin salir de él.",
      },
      {
        title: "Recordatorios y confirmaciones",
        description:
          "Aviso previo a la cita con opción de confirmar o cambiar, que es donde se reducen los plantones.",
      },
      {
        title: "Sincronización con el CRM",
        description:
          "Cada conversación deja rastro en la ficha del cliente sin que nadie la transcriba.",
      },
      {
        title: "Traspaso a persona con contexto",
        description:
          "Cuando escala, el compañero ve la conversación entera y los datos ya consultados.",
      },
    ],
  },

  integrations: {
    title: "WhatsApp conectado al resto.",
    lead: "El valor no está en responder por WhatsApp: está en que lo que pasa en WhatsApp acabe en el CRM, en el calendario y en el sistema de pedidos.",
    names: [
      "WhatsApp",
      "HubSpot",
      "Salesforce",
      "Shopify",
      "Google Sheets",
      "Airtable",
      "Slack",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué cambia al montarlo bien.",
    items: [
      {
        title: "El canal deja de depender de un móvil",
        description:
          "Las conversaciones son de la empresa, no de la persona que las atendió. Y siguen ahí cuando esa persona no está.",
      },
      {
        title: "Respuesta inmediata sin sacrificar el trato",
        description:
          "Lo consultable se contesta al instante; lo que necesita criterio llega a alguien con el contexto listo.",
      },
      {
        title: "Menos plantones en negocios con cita",
        description:
          "El recordatorio con opción de reprogramar por el mismo chat es de lo más rentable del canal.",
      },
      {
        title: "El número no está en riesgo",
        description:
          "Sobre la plataforma oficial, con plantillas aprobadas y consentimiento. Aburrido, y por eso duradero.",
      },
    ],
  },

  limits: {
    title: "Restricciones que impone la plataforma",
    items: [
      "Hace falta un número dedicado y verificación del negocio",
      "Los mensajes que inician conversación requieren plantilla aprobada",
      "Fuera de la ventana de 24 horas hay coste por conversación",
      "El envío masivo sin consentimiento previo no es una opción",
      "No trabajamos con herramientas que operen sobre WhatsApp sin autorización",
    ],
  },

  faq: [
    {
      question: "¿Se puede usar nuestro número actual de WhatsApp?",
      answer:
        "Solo si se migra a la API oficial, y esa migración implica dejar de usarlo en la app de WhatsApp Business: son excluyentes. En la práctica lo habitual es dar de alta un número nuevo para el canal automatizado y decidir después qué se hace con el antiguo.",
    },
    {
      question: "¿Cuánto cuesta WhatsApp Business API?",
      answer:
        "Meta cobra por conversación, con tarifa distinta según si la inicia el cliente o la empresa y según el país. Es un coste variable que va aparte de nuestro trabajo y que conviene estimar con vuestro volumen antes de empezar, porque en volúmenes altos deja de ser despreciable.",
    },
    {
      question: "¿Podemos enviar campañas masivas por WhatsApp?",
      answer:
        "Técnicamente sí, con plantillas aprobadas y a contactos que hayan dado su consentimiento. En la práctica recomendamos mucha prudencia: WhatsApp penaliza los números con muchos bloqueos por parte de usuarios, y una campaña mal recibida puede degradar la calidad del número de forma difícil de revertir.",
    },
    {
      question: "¿Cómo se cumple el RGPD en este canal?",
      answer:
        "Con lo mismo que en cualquier otro: base jurídica para el tratamiento, información clara al usuario en el primer contacto, consentimiento cuando se usa para comunicaciones comerciales, y el tratamiento reflejado en el registro de actividades. Que el canal sea informal no cambia las obligaciones.",
    },
    {
      question: "¿Puede el equipo intervenir en una conversación automatizada?",
      answer:
        "Sí, y debe poder. Se monta una bandeja compartida donde cualquiera puede tomar la conversación; en ese momento el flujo automático se retira y no vuelve a intervenir en ese hilo salvo que se le devuelva expresamente.",
    },
  ],

  related: [
    {
      label: "Atención al cliente",
      href: "/automatizacion-atencion-cliente",
      description: "El mismo criterio aplicado a email, chat y formularios.",
    },
    {
      label: "Automatización de ventas",
      href: "/automatizacion-ventas",
      description: "Cuando WhatsApp es la entrada del embudo comercial.",
    },
    {
      label: "Clínicas",
      href: "/sectores/clinicas",
      description: "Citas, recordatorios y reducción de plantones.",
    },
  ],

  finalCta: {
    title: "¿Cuántos mensajes recibís al día por WhatsApp?",
    lead: "Con ese número y vuestro tipo de consulta se puede estimar bastante bien si merece la pena y qué coste tendría.",
    label: "Automatizar WhatsApp",
  },
}
