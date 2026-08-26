import {
  BarChart3,
  CheckCircle2,
  Database,
  MessageCircle,
  Merge,
  Sparkles,
} from "lucide-react"
import type { Landing } from "./types"

export const automatizacionCrm: Landing = {
  slug: "/automatizacion-crm",
  shortName: "Automatización de CRM",
  metaTitle: "Automatización de CRM con IA",
  metaDescription:
    "Que el CRM refleje lo que pasa de verdad: contactos, oportunidades y actividad actualizados desde los canales reales, sin que nadie los teclee.",
  h1: "Automatización de CRM con IA",
  subheadline:
    "Un CRM solo sirve si está al día, y está al día cuando actualizarlo no depende de que alguien encuentre el momento. Eso es lo que se automatiza.",
  eyebrow: "CRM",
  serviceType: "Automatización e integración de CRM",
  ctaLabel: "Automatizar mi CRM",

  problem: {
    title: "El CRM no falla por la herramienta. Falla porque nadie lo rellena.",
    body: [
      "Casi todas las empresas que se quejan de su CRM no tienen un problema de software: tienen un problema de alimentación. El comercial habla con el cliente por teléfono y por WhatsApp, el pedido entra por email, la incidencia se resuelve en un chat, y del CRM se acuerda alguien el viernes por la tarde si le queda tiempo.",
      "El resultado es un sistema que refleja una versión incompleta de la realidad. Y como está incompleto, nadie confía en él; y como nadie confía, nadie lo actualiza. Ese círculo es la razón real de la mayoría de migraciones de CRM, que suelen reproducir el problema en una herramienta nueva.",
      "La salida no es exigir más disciplina al equipo. Es que la actualización deje de ser una tarea: que lo que pasa en los canales se refleje solo.",
    ],
    signals: [
      "El CRM se actualiza al final de la semana, o no",
      "Cada comercial tiene su propio sistema paralelo de notas",
      "Hay contactos duplicados y nadie sabe cuál es el bueno",
      "Los informes del embudo no cuadran con la realidad",
      "Lo que se habla por WhatsApp no llega nunca al CRM",
      "Se está pensando en cambiar de CRM sin haber diagnosticado el problema",
    ],
  },

  how: {
    title: "Cómo se alimenta un CRM sin trabajo manual.",
    lead: "La idea de fondo: el CRM es el sistema de referencia del dato comercial, y todo lo demás escribe en él en lugar de guardar su propia copia.",
    steps: [
      {
        title: "Definir qué manda",
        description:
          "El CRM es la verdad del dato comercial. Las hojas y bandejas intermedias son ventanas, no copias sincronizadas.",
      },
      {
        title: "Conectar los canales de entrada",
        description:
          "Web, email, WhatsApp y teléfono escribiendo en el mismo sitio y con los mismos campos.",
      },
      {
        title: "Resolver la identidad",
        description:
          "Detectar que el mismo cliente es el mismo aunque escriba desde otro correo, antes de crear el duplicado.",
      },
      {
        title: "Registrar la actividad",
        description:
          "Conversaciones y eventos anotados en la ficha automáticamente, con resumen y sin transcripción manual.",
      },
    ],
  },

  workflow: {
    title: "Cómo llega al CRM lo que pasa fuera del CRM.",
    lead: "El comercial no deja de usar el CRM: deja de teclear en él. Lo que hace es consultarlo y decidir.",
    label: "alimentacion-de-crm",
    steps: [
      {
        icon: <MessageCircle />,
        title: "Ocurre algo",
        description: "Mensaje, email, llamada o formulario",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "Se interpreta",
        description: "De qué va y a qué cliente corresponde",
        status: "complete",
      },
      {
        icon: <Merge />,
        title: "Se resuelve la identidad",
        description: "Se busca antes de crear, para no duplicar",
        status: "complete",
      },
      {
        icon: <Database />,
        title: "Se escribe en la ficha",
        description: "Contacto, oportunidad y actividad",
        status: "processing",
      },
      {
        icon: <CheckCircle2 />,
        title: "Se actualiza la etapa",
        description: "Según reglas acordadas, no a criterio del modelo",
        status: "waiting",
      },
      {
        icon: <BarChart3 />,
        title: "El embudo cuadra",
        description: "Los informes reflejan lo que pasó de verdad",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Qué se automatiza sobre el CRM.",
    lead: "Empezando por lo que más ruido quita: la creación de contactos y el registro de actividad.",
    items: [
      {
        title: "Creación de contactos desde cualquier canal",
        description:
          "Con los mismos campos, el mismo formato de teléfono y sin duplicar lo que ya existía.",
      },
      {
        title: "Registro automático de actividad",
        description:
          "Conversaciones resumidas y anotadas en la ficha, sin que nadie las transcriba después.",
      },
      {
        title: "Deduplicación",
        description:
          "Detección y fusión de registros repetidos, con criterio definido sobre qué dato gana.",
      },
      {
        title: "Normalización de datos",
        description:
          "Teléfonos, NIF, nombres de empresa y provincias escritos siempre igual. Aburrido y decisivo para el reporting.",
      },
      {
        title: "Avance de etapa por reglas",
        description:
          "El embudo se mueve cuando ocurre el hecho que lo justifica, no cuando alguien se acuerda.",
      },
      {
        title: "Sincronización con otros sistemas",
        description:
          "ERP, facturación y soporte leyendo del CRM en lugar de mantener su propia lista de clientes.",
      },
    ],
  },

  integrations: {
    title: "Con el CRM que ya tenéis.",
    lead: "No recomendamos sustituir el CRM por otra cosa, ni que el ERP haga de CRM. Conviven, y cada uno manda sobre los datos que le corresponden.",
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
    title: "Qué se recupera.",
    items: [
      {
        title: "El CRM vuelve a ser fiable",
        description:
          "Y cuando es fiable, el equipo lo usa. El orden causal es ese y no el contrario.",
      },
      {
        title: "El equipo comercial deja de hacer data entry",
        description:
          "Es la parte del trabajo que menos les gusta y la primera que se abandona cuando hay presión.",
      },
      {
        title: "Los informes dejan de discutirse",
        description:
          "Si los datos entran solos y con el mismo criterio, el embudo deja de ser una opinión.",
      },
      {
        title: "Se evita una migración innecesaria",
        description:
          "Muchas veces el CRM no era el problema, y cambiarlo habría costado meses para reproducir el mismo fallo.",
      },
    ],
  },

  limits: {
    title: "Dónde hay que decidir vosotros",
    items: [
      "Qué dato manda cuando dos sistemas discrepan: es una decisión de negocio",
      "Qué significa cada etapa del embudo, antes de automatizar el avance",
      "Qué se hace con el histórico sucio ya existente",
      "Qué información no debe entrar en el CRM por privacidad",
      "CRMs cerrados sin API: hay que comprobar la vía antes de prometer nada",
    ],
  },

  faq: [
    {
      question: "¿Deberíamos cambiar de CRM?",
      answer:
        "Casi nunca es la primera respuesta. Si el problema es que está vacío, cambiar de herramienta reproduce el problema con otra interfaz y varios meses de coste. Merece la pena plantear el cambio cuando la herramienta impide algo concreto que necesitáis, no cuando la queja es que nadie lo usa.",
    },
    {
      question: "¿El CRM puede sustituir a nuestro ERP?",
      answer:
        "No, y tampoco al contrario. Son sistemas con responsabilidades distintas: el CRM manda sobre la relación comercial y el ERP sobre la operación y la facturación. Los proyectos que intentan que uno haga el trabajo del otro acaban con un sistema peor en las dos cosas. Lo que sí hay que hacer es conectarlos y decidir qué dato manda cada uno.",
    },
    {
      question: "¿Cómo se evitan los duplicados?",
      answer:
        "Buscando antes de crear, con criterios de coincidencia definidos: teléfono normalizado, email, NIF. Y decidiendo de antemano qué pasa en caso de coincidencia parcial, porque es ahí donde se generan. El histórico ya duplicado es un trabajo aparte y conviene tratarlo como tal.",
    },
    {
      question: "¿Se puede resumir automáticamente lo que se habla con el cliente?",
      answer:
        "Sí, y es uno de los usos de IA con mejor relación entre esfuerzo y valor. La cautela: si el resumen incluye grabaciones o transcripciones de llamadas, hace falta informar y tener base jurídica para ese tratamiento, no solo capacidad técnica de hacerlo.",
    },
  ],

  related: [
    {
      label: "Automatización de ventas",
      href: "/automatizacion-ventas",
      description: "El proceso completo: entrada, cualificación y seguimiento.",
    },
    {
      label: "Automatización de WhatsApp",
      href: "/automatizacion-whatsapp",
      description: "El canal cuya información hoy no llega nunca al CRM.",
    },
    {
      label: "Agentes de IA",
      href: "/agentes-ia",
      description: "Cuando además de registrar hay que decidir y ejecutar.",
    },
  ],

  finalCta: {
    title: "¿Vuestro CRM refleja lo que pasó esta semana?",
    lead: "Si la respuesta es «más o menos», el problema tiene arreglo y normalmente no es cambiar de herramienta.",
    label: "Automatizar mi CRM",
  },
}
