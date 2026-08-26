import {
  BarChart3,
  CheckCircle2,
  FileSearch,
  Inbox,
  Sparkles,
  Users,
} from "lucide-react"
import type { Landing } from "./types"

export const iaParaEmpresas: Landing = {
  slug: "/ia-para-empresas",
  shortName: "IA para empresas",
  metaTitle: "Inteligencia artificial para empresas",
  metaDescription:
    "Cómo aplicar inteligencia artificial en una empresa española sin proyectos eternos: por dónde empezar, qué esperar y qué decisiones tomar antes de invertir.",
  h1: "Inteligencia artificial para empresas",
  subheadline:
    "La pregunta útil no es qué puede hacer la IA, sino qué proceso vuestro se beneficia de ella y cuál no. Esta página es para decidir eso antes de gastar presupuesto.",
  eyebrow: "IA aplicada",
  serviceType: "Consultoría e implantación de inteligencia artificial en empresas",
  ctaLabel: "Analizar mi empresa",

  problem: {
    title: "El problema no es la falta de IA. Es la falta de criterio para elegir dónde.",
    body: [
      "La mayoría de empresas que llegan preguntando por IA no necesitan un modelo mejor: necesitan decidir cuál de sus veinte procesos manuales merece un sistema. Sin esa decisión, el proyecto se convierte en una demo que impresiona en la reunión y no cambia nada el lunes siguiente.",
      "Hay dos formas de equivocarse aquí, y las dos son caras. Una es aplicar IA a un proceso que se resolvía con una regla de dos líneas. La otra es intentar automatizar una decisión que en realidad requiere que alguien asuma la responsabilidad.",
      "Lo que sí funciona es lo poco glamuroso: procesos que ocurren muchas veces, con criterio identificable, donde hoy alguien lee algo escrito por otra persona y lo traduce a datos. Ahí la IA aporta de forma medible.",
    ],
    signals: [
      "Se habla de IA en la empresa pero nadie ha definido para qué",
      "Hay presupuesto y no hay proceso elegido",
      "Se ha probado alguna herramienta y se abandonó a las semanas",
      "El equipo usa IA por su cuenta, sin criterio ni control de datos",
      "Se teme que la competencia vaya por delante sin saber en qué",
      "Cada área pide algo distinto y no hay prioridad",
    ],
  },

  how: {
    title: "Cómo se decide dónde aplicar IA.",
    lead: "Cuatro filtros. Un proceso que pasa los cuatro es un buen primer proyecto; uno que falla el primero no debería ser el primero.",
    steps: [
      {
        title: "Frecuencia",
        description:
          "¿Cuántas veces al día ocurre? Un proceso semanal casi nunca justifica un sistema, aunque sea molesto.",
      },
      {
        title: "Criterio identificable",
        description:
          "¿Alguien puede explicar cómo se decide? Si no se puede explicar, no se puede automatizar todavía.",
      },
      {
        title: "Acceso a los datos",
        description:
          "¿Los sistemas implicados tienen API? Sin acceso, el proyecto se convierte en otra cosa.",
      },
      {
        title: "Consecuencia del error",
        description:
          "¿Qué pasa si se equivoca una vez de cien? Si la respuesta es grave, hace falta validación humana.",
      },
    ],
  },

  workflow: {
    title: "De la primera conversación al primer proceso en producción.",
    lead: "El objetivo del primer proyecto no es demostrar lo que la IA puede hacer: es que un proceso concreto deje de hacerse a mano y siga funcionando el mes siguiente.",
    label: "primer-proyecto",
    steps: [
      {
        icon: <Users />,
        title: "Conversación inicial",
        description: "30 minutos sobre cómo trabajáis hoy",
        status: "complete",
      },
      {
        icon: <FileSearch />,
        title: "Mapa de procesos",
        description: "Qué se repite, cuántas veces y quién lo hace",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Elección del primero",
        description: "Un proceso, acotado, con criterio de éxito claro",
        status: "processing",
      },
      {
        icon: <Sparkles />,
        title: "Construcción",
        description: "Flujo, integraciones y plan de error",
        status: "waiting",
      },
      {
        icon: <Inbox />,
        title: "Producción",
        description: "En marcha, con el equipo usándolo de verdad",
        status: "waiting",
      },
      {
        icon: <BarChart3 />,
        title: "Medición",
        description: "Qué ha cambiado, con números vuestros",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Aplicaciones que funcionan en pymes españolas.",
    lead: "No las más avanzadas, las que llegan a producción y siguen en marcha un año después.",
    items: [
      {
        title: "Lectura de documentos",
        description:
          "Facturas de proveedor, albaranes y contratos convertidos en datos sin teclear.",
      },
      {
        title: "Clasificación de entrada",
        description:
          "Correo, formularios y mensajes repartidos según de qué van, no según quién los abre primero.",
      },
      {
        title: "Cualificación comercial",
        description:
          "Solicitudes ordenadas por interés real, con el criterio de la empresa escrito y no en la cabeza de alguien.",
      },
      {
        title: "Atención de primer nivel",
        description:
          "Las preguntas repetidas se resuelven consultando el sistema; el resto llega a una persona con contexto.",
      },
      {
        title: "Redacción asistida",
        description:
          "Borradores de respuestas y propuestas a partir de datos reales, con revisión antes de enviar.",
      },
      {
        title: "Informes recurrentes",
        description:
          "El mismo informe, el mismo día, con el mismo criterio y sin que nadie recopile a mano.",
      },
    ],
  },

  integrations: {
    title: "Sobre lo que ya está funcionando.",
    lead: "La IA se apoya en vuestros sistemas actuales. Cambiar de ERP o de CRM al mismo tiempo multiplica el riesgo sin aportar nada al proyecto.",
    names: [
      "Gmail",
      "Google Sheets",
      "HubSpot",
      "Airtable",
      "Notion",
      "Slack",
      "Stripe",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué se puede esperar de forma razonable.",
    items: [
      {
        title: "Menos tiempo en tareas sin decisión",
        description:
          "El equipo deja de hacer de puente entre sistemas. Eso es lo primero y lo más fácil de medir.",
      },
      {
        title: "Procesos que no dependen de una persona",
        description:
          "El conocimiento tácito pasa a estar escrito. Las vacaciones dejan de ser un riesgo operativo.",
      },
      {
        title: "Datos más consistentes",
        description:
          "Un sistema escribe siempre igual. Eso mejora el reporting más que cualquier cuadro de mando nuevo.",
      },
      {
        title: "Capacidad de crecer sin contratar en proporción",
        description:
          "El volumen extra de trabajo repetitivo deja de traducirse directamente en horas de más.",
      },
    ],
  },

  limits: {
    title: "Expectativas que conviene bajar",
    items: [
      "La IA no arregla un proceso mal definido, lo ejecuta más rápido",
      "No sustituye criterio profesional ni responsabilidad",
      "No funciona bien sobre datos incoherentes o duplicados",
      "No elimina el mantenimiento: un flujo es software y hay que cuidarlo",
      "No justifica automatizar algo que ocurre dos veces al mes",
    ],
  },

  faq: [
    {
      question: "¿Tiene sentido la IA en una empresa pequeña?",
      answer:
        "Depende de la repetición, no del tamaño. Una empresa de ocho personas que procesa doscientos pedidos al día tiene más que ganar que una de cien que hace veinte operaciones grandes al mes. Lo que importa es cuántas veces se repite la misma tarea.",
    },
    {
      question: "¿Qué presupuesto hay que prever?",
      answer:
        "Trabajamos por entregable: cada automatización se presupuesta como una pieza con alcance definido, y no por horas abiertas. Eso permite empezar por un proceso y decidir con datos si merece la pena el siguiente. En la primera conversación se puede acotar el orden de magnitud.",
    },
    {
      question: "¿Qué pasa con nuestros datos y el RGPD?",
      answer:
        "Es una decisión de diseño, no un trámite posterior. Se define qué datos entran en el flujo, dónde se procesan y qué sale hacia proveedores externos. Lo habitual es ejecutar la orquestación en infraestructura del cliente y minimizar lo que se envía a servicios de terceros. Si un paso implica un encargado del tratamiento, tiene que quedar reflejado en el registro de actividades.",
    },
    {
      question: "¿Necesitamos personal técnico interno?",
      answer:
        "No para que funcione, sí para que dure. Conviene que alguien de la empresa entienda qué hace el flujo y sepa dónde mirar cuando algo falla. Parte del trabajo es dejarlo documentado para que eso sea posible sin depender de nosotros.",
    },
    {
      question: "¿Y si la tecnología cambia en un año?",
      answer:
        "Va a cambiar. Por eso el flujo se construye separando la lógica del negocio del modelo concreto que se usa: cambiar de proveedor de IA debería ser un ajuste, no rehacer el proyecto. La parte que no caduca — saber qué proceso automatizar y dónde están vuestros datos — es la que más valor tiene.",
    },
  ],

  related: [
    {
      label: "Automatización con IA",
      href: "/automatizacion-ia",
      description: "Cómo se diseña y se pone en marcha un proceso automatizado.",
    },
    {
      label: "Agentes de IA",
      href: "/agentes-ia",
      description: "Cuando hace falta que algo decida y ejecute, no solo responda.",
    },
    {
      label: "Sectores",
      href: "/sectores",
      description: "Qué se automatiza en inmobiliarias, clínicas, ecommerce y despachos.",
    },
  ],

  finalCta: {
    title: "¿Por dónde empezaríais vosotros?",
    lead: "Si no está claro, esa es exactamente la conversación. Media hora suele bastar para saber si hay un primer proyecto que merezca la pena.",
    label: "Descubrir oportunidades",
  },
}
