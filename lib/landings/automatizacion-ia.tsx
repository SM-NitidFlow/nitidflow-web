import {
  CheckCircle2,
  Database,
  FileSearch,
  Inbox,
  Send,
  Sparkles,
} from "lucide-react"
import type { Landing } from "./types"

export const automatizacionIa: Landing = {
  slug: "/automatizacion-ia",
  shortName: "Automatización con IA",
  metaTitle: "Automatización con IA para empresas",
  metaDescription:
    "Diseñamos automatizaciones de procesos con IA para empresas en España: workflows, agentes e integraciones sobre las herramientas que ya utilizas.",
  h1: "Automatización con IA para empresas",
  subheadline:
    "Automatizar con IA no es añadir un chatbot. Es rediseñar un proceso para que se ejecute solo, con la IA encargándose de la parte que hasta ahora exigía que alguien leyera, interpretara y decidiera.",
  eyebrow: "Automatización de procesos",
  serviceType: "Automatización de procesos con inteligencia artificial",
  ctaLabel: "Analizar mi empresa",

  problem: {
    title: "El trabajo repetitivo no está en un sitio: está repartido.",
    body: [
      "En casi todas las empresas el trabajo manual no vive en un único proceso grande, sino en veinte pequeños. Alguien copia datos de un email a una hoja. Alguien más los pasa al CRM. Otra persona revisa si el pedido entró. Ninguna de esas tareas parece importante por separado, y juntas se comen media jornada de varias personas.",
      "La automatización clásica resolvía la parte mecánica: si pasa A, haz B. Lo que quedaba fuera era todo lo que exigía leer algo escrito por una persona y entender qué pedía. Ahí es donde entra la IA: no para inventar el proceso, sino para cubrir el hueco que impedía automatizarlo entero.",
      "El resultado no es un sistema que sustituya a nadie. Es un sistema que hace la parte que nadie quiere hacer, y que deja registro de lo que ha hecho.",
    ],
    signals: [
      "El mismo dato se teclea en dos o tres sitios distintos",
      "Hay tareas que solo sabe hacer una persona concreta",
      "El proceso se rompe cuando alguien está de vacaciones",
      "Los errores aparecen siempre en el mismo paso",
      "Nadie sabe con certeza en qué estado está una gestión",
      "Se responden las mismas preguntas todas las semanas",
    ],
  },

  how: {
    title: "Cuatro decisiones antes de escribir una línea de código.",
    lead: "La mayor parte del valor de una automatización se decide antes de construirla: en qué proceso se elige, dónde se corta y qué se deja en manos de personas.",
    steps: [
      {
        title: "Qué proceso",
        description:
          "No el más molesto, sino el que más veces ocurre y tiene un criterio claro. Un proceso raro y complejo se automatiza mal.",
      },
      {
        title: "Dónde está el dato",
        description:
          "Cada dato tiene un sistema que manda sobre él. Lo definimos antes de conectar nada, porque de ahí salen la mitad de los problemas.",
      },
      {
        title: "Qué decide la IA",
        description:
          "La IA interpreta y propone. Las acciones con consecuencia — enviar, facturar, cerrar — llevan validación o regla explícita.",
      },
      {
        title: "Qué pasa cuando falla",
        description:
          "Un flujo sin plan de error es un flujo que fallará en silencio. Definimos aviso, reintento y salida manual.",
      },
    ],
  },

  workflow: {
    title: "Un proceso automatizado, paso a paso.",
    lead: "Este es el patrón que se repite en la mayoría de automatizaciones: entra información sin estructura, la IA la convierte en datos, se valida y se escribe en el sistema que corresponde.",
    label: "proceso-generico",
    steps: [
      {
        icon: <Inbox />,
        title: "Entra la información",
        description: "Email, formulario, mensaje o documento",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "La IA la interpreta",
        description: "Identifica de qué va y qué datos contiene",
        status: "complete",
      },
      {
        icon: <FileSearch />,
        title: "Se completa el contexto",
        description: "Consulta tus sistemas para lo que falta",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Se valida",
        description: "Reglas del negocio, no criterio del modelo",
        status: "processing",
      },
      {
        icon: <Database />,
        title: "Se escribe el dato",
        description: "En el sistema que manda sobre ese dato",
        status: "waiting",
      },
      {
        icon: <Send />,
        title: "Se notifica",
        description: "A la persona que tiene que saberlo",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Dónde suele empezar una empresa.",
    lead: "Ordenados por lo rápido que se ve el resultado, no por lo espectacular que suenan.",
    items: [
      {
        title: "Entrada y cualificación de leads",
        description:
          "El lead se registra, se interpreta y se clasifica sin que nadie tenga que abrir el correo primero.",
      },
      {
        title: "Clasificación de correo",
        description:
          "El buzón compartido se reparte solo: cada mensaje acaba en la bandeja, etiqueta o sistema que le toca.",
      },
      {
        title: "Extracción de documentos",
        description:
          "Facturas, albaranes y contratos convertidos en datos estructurados sin teclear.",
      },
      {
        title: "Actualización de CRM",
        description:
          "El CRM refleja lo que ha pasado de verdad en los canales, sin depender de que alguien lo apunte.",
      },
      {
        title: "Respuestas frecuentes",
        description:
          "Las preguntas que se repiten se contestan con la información real de tus sistemas.",
      },
      {
        title: "Informes recurrentes",
        description:
          "Los datos se recogen y el informe se genera el día que toca, con el mismo formato siempre.",
      },
    ],
  },

  integrations: {
    title: "Sobre las herramientas que ya tienes.",
    lead: "Automatizar no debería empezar por cambiar de sistema. Se conecta lo que hay, y si algo resulta ser el cuello de botella real, se plantea aparte.",
    names: [
      "Gmail",
      "Google Sheets",
      "HubSpot",
      "Salesforce",
      "Airtable",
      "Notion",
      "Slack",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué cambia cuando el proceso se ejecuta solo.",
    items: [
      {
        title: "El proceso deja de depender de una persona",
        description:
          "Lo que estaba en la cabeza de alguien pasa a estar escrito en un flujo que cualquiera puede leer.",
      },
      {
        title: "El tiempo de respuesta baja de horas a minutos",
        description:
          "No porque nadie trabaje más rápido, sino porque el primer paso ya no espera a que alguien abra el correo.",
      },
      {
        title: "Los errores dejan de ser silenciosos",
        description:
          "Un flujo bien montado avisa cuando algo no cuadra. El proceso manual, normalmente, no.",
      },
      {
        title: "Queda traza de lo que se hizo",
        description:
          "Cada ejecución deja registro: qué entró, qué se decidió y qué se escribió. Eso vale tanto para auditar como para mejorar.",
      },
    ],
  },

  limits: {
    title: "Qué no resuelve automatizar con IA",
    items: [
      "Un proceso que nadie ha definido: primero hay que decidir cómo debería funcionar",
      "Sistemas cerrados sin API ni exportación fiable",
      "Decisiones con responsabilidad legal o económica que exigen una persona",
      "Datos de partida desordenados: la automatización los propaga más rápido",
      "Problemas de organización disfrazados de problemas técnicos",
    ],
  },

  faq: [
    {
      question: "¿Por dónde se empieza si tenemos muchos procesos manuales?",
      answer:
        "Por uno solo, y preferiblemente por el que más veces al día ocurre. Poner un proceso en producción enseña más sobre vuestros sistemas que analizar diez sobre el papel, y evita el proyecto largo que nunca llega a usarse.",
    },
    {
      question: "¿Hace falta que nuestros datos estén ordenados antes?",
      answer:
        "No hace falta que estén perfectos, pero sí que sepamos qué sistema manda sobre cada dato. Si el mismo cliente existe con tres nombres distintos en tres sitios, la automatización va a multiplicar ese lío en lugar de arreglarlo.",
    },
    {
      question: "¿Dónde se ejecutan las automatizaciones y dónde acaban los datos?",
      answer:
        "Por defecto, en infraestructura del cliente. La orquestación puede ir autoalojada y las credenciales quedan en un gestor de secretos, no repartidas en documentos. Si algún paso implica enviar datos a un proveedor de IA externo, se dice explícitamente y se decide qué se manda y qué no.",
    },
    {
      question: "¿Qué pasa si el proceso cambia dentro de seis meses?",
      answer:
        "Se cambia el flujo. Por eso importa que quede documentado y no como una caja negra: un flujo legible se ajusta en horas, uno indescifrable se rehace. Es también la razón de no meter toda la lógica del negocio dentro de un prompt.",
    },
    {
      question: "¿Puede la IA equivocarse al interpretar la información?",
      answer:
        "Sí, y hay que diseñar asumiéndolo. Las tareas de lectura e interpretación toleran bien un error ocasional; las acciones con consecuencia se protegen con validación, reglas explícitas o revisión humana antes de ejecutarse.",
    },
  ],

  related: [
    {
      label: "Agentes de IA",
      href: "/agentes-ia",
      description:
        "Cuando el proceso no se resuelve con reglas y hace falta que algo decida.",
    },
    {
      label: "Automatización de ventas",
      href: "/automatizacion-ventas",
      description: "El caso donde antes se nota: leads, seguimiento y CRM.",
    },
    {
      label: "Automatización con n8n",
      href: "/automatizacion-n8n",
      description: "La capa de orquestación, autoalojada y con tus datos dentro.",
    },
  ],

  finalCta: {
    title: "¿Qué proceso repetís cada semana?",
    lead: "Cuéntanos cómo se hace hoy. Te diremos qué parte es automatizable y qué parte no merece la pena tocar.",
    label: "Analizar mi proceso",
  },
}
