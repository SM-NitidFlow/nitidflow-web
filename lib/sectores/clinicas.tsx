import {
  Bell,
  CalendarCheck,
  CheckCircle2,
  Database,
  MessageCircle,
  Stethoscope,
} from "lucide-react"
import type { Landing } from "@/lib/landings/types"

export const clinicas: Landing = {
  slug: "/sectores/clinicas",
  shortName: "Clínicas",
  breadcrumbParent: { name: "Sectores", path: "/sectores" },
  metaTitle: "IA para clínicas: automatización de citas y atención",
  metaDescription:
    "Automatización para clínicas: gestión de citas, recordatorios que reducen plantones y documentación previa, con los datos de salud fuera del flujo.",
  h1: "IA para clínicas",
  subheadline:
    "La mayor parte del trabajo administrativo de una clínica son citas y recordatorios. Y la mayor parte de la pérdida son huecos que nadie ocupó.",
  eyebrow: "Clínicas",
  serviceType: "Automatización de procesos para clínicas y consultas",
  ctaLabel: "Automatizar mi clínica",

  problem: {
    title: "Un hueco vacío no se recupera.",
    body: [
      "Una clínica vende tiempo. Cuando un paciente no aparece a su cita y nadie ocupa ese hueco, esa facturación no vuelve: no es un aplazamiento, es una pérdida. Y la causa más frecuente del plantón no es el desinterés, es el olvido.",
      "El segundo consumo de tiempo está en la recepción. Pedir cita, cambiarla, preguntar qué documentación traer, confirmar el horario. Todo por teléfono, en horario de clínica, con la persona de recepción interrumpiendo lo que estaba haciendo.",
      "Y hay un tercer punto específico de este sector: los datos que se manejan son datos de salud. Eso cambia el diseño de cualquier automatización, y no como un trámite añadido al final.",
    ],
    signals: [
      "Hay un porcentaje conocido de citas a las que no acude nadie",
      "Recepción pasa la mañana al teléfono cambiando citas",
      "Fuera de horario no se puede pedir ni cambiar cita",
      "Los recordatorios se mandan a mano, o no se mandan",
      "Los huecos que se liberan a última hora quedan vacíos",
      "La documentación previa a la primera consulta llega incompleta",
    ],
  },

  how: {
    title: "Cómo se automatiza una clínica sin tocar lo clínico.",
    lead: "Todo lo que se automatiza es administrativo. Nada de lo que se automatiza toca criterio sanitario ni contenido de historia clínica.",
    steps: [
      {
        title: "Cita por el canal del paciente",
        description:
          "Pedir, cambiar y confirmar por WhatsApp o web, a cualquier hora, contra la agenda real.",
      },
      {
        title: "Recordatorio con confirmación",
        description:
          "Aviso previo con opción de confirmar o reprogramar en un toque. Es la medida que más plantones evita.",
      },
      {
        title: "Lista de espera activa",
        description:
          "Cuando un hueco se libera, se ofrece automáticamente a quien estaba esperando.",
      },
      {
        title: "Datos de salud fuera del flujo",
        description:
          "La automatización gestiona la cita, no el contenido clínico. Ese dato se queda en vuestro sistema sanitario.",
      },
    ],
  },

  workflow: {
    title: "De solicitud de cita a consulta atendida.",
    lead: "Recepción deja de ser un cuello de botella para lo administrativo y se dedica al paciente que tiene delante.",
    label: "gestion-de-citas",
    steps: [
      {
        icon: <MessageCircle />,
        title: "El paciente escribe",
        description: "WhatsApp o formulario web, a cualquier hora",
        status: "complete",
      },
      {
        icon: <CalendarCheck />,
        title: "Se ofrece hueco",
        description: "Disponibilidad real del profesional",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Se confirma la cita",
        description: "Registrada en la agenda de la clínica",
        status: "complete",
      },
      {
        icon: <Database />,
        title: "Se piden los datos previos",
        description: "Lo administrativo, con el consentimiento informado",
        status: "processing",
      },
      {
        icon: <Bell />,
        title: "Recordatorio",
        description: "Con opción de confirmar o reprogramar",
        status: "waiting",
      },
      {
        icon: <Stethoscope />,
        title: "Consulta",
        description: "Con la documentación ya completa",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Qué se automatiza en una clínica.",
    lead: "Lo administrativo, que es donde está el volumen. Empezando casi siempre por los recordatorios.",
    items: [
      {
        title: "Recordatorios con confirmación",
        description:
          "La automatización con mejor retorno del sector: cada plantón evitado es un hueco facturado.",
      },
      {
        title: "Petición y cambio de cita",
        description:
          "Sin llamar y fuera de horario, contra la agenda real y con las reglas de aviso que tengáis.",
      },
      {
        title: "Gestión de lista de espera",
        description:
          "Los huecos liberados a última hora se ofrecen automáticamente en lugar de quedar vacíos.",
      },
      {
        title: "Documentación previa",
        description:
          "Recogida de lo que hace falta antes de la primera consulta, para no perder tiempo en la sala.",
      },
      {
        title: "Preguntas frecuentes de recepción",
        description:
          "Horarios, dirección, precios de consulta, qué traer, cómo llegar. Resueltas sin interrumpir a nadie.",
      },
      {
        title: "Seguimiento post-consulta",
        description:
          "Recordatorio de revisión o de siguiente sesión según la pauta que defináis.",
      },
    ],
  },

  integrations: {
    title: "Con el software de gestión de la clínica.",
    lead: "El software clínico se queda donde está y sigue siendo el sistema de referencia. La automatización gestiona la agenda y el canal con el paciente.",
    names: [
      "WhatsApp",
      "Gmail",
      "Google Sheets",
      "Airtable",
      "Notion",
      "Stripe",
      "Slack",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué cambia.",
    items: [
      {
        title: "Menos huecos vacíos",
        description:
          "Recordatorio con confirmación más lista de espera activa. Es la combinación que más recupera.",
      },
      {
        title: "Recepción deja de estar al teléfono",
        description:
          "Y puede atender bien al paciente que está delante, que es lo que se nota en la percepción de la clínica.",
      },
      {
        title: "El paciente puede gestionar fuera de horario",
        description:
          "Mucha gente solo puede llamar en horario laboral, que es justo cuando no puede llamar.",
      },
      {
        title: "La primera consulta empieza con todo listo",
        description:
          "Sin gastar los primeros diez minutos en papeles que se podían haber recogido antes.",
      },
    ],
  },

  limits: {
    title: "Lo que no se automatiza en una clínica",
    items: [
      "Ningún criterio clínico: triaje, diagnóstico, pauta o indicación",
      "Contenido de la historia clínica: la automatización no lo procesa",
      "Resultados de pruebas: los comunica un profesional, no un flujo",
      "Urgencias: cualquier indicio de urgencia se deriva a una persona de inmediato",
      "Consentimientos informados: se recogen, no se dan por supuestos",
    ],
  },

  faq: [
    {
      question: "¿Se pueden tratar datos de salud en una automatización?",
      answer:
        "Los datos de salud son categoría especial en el RGPD y exigen una base jurídica reforzada, medidas de seguridad específicas y evaluación de impacto en muchos casos. Por eso el planteamiento por defecto es no meterlos en el flujo: la automatización gestiona la cita y el canal —nombre, teléfono, hora, profesional— y el contenido clínico se queda en vuestro software sanitario. Lo que salga de ese perímetro se decide con vuestro responsable de protección de datos, no por comodidad técnica.",
    },
    {
      question: "¿Puede el sistema decidir la urgencia de un paciente?",
      answer:
        "No, y no es una limitación técnica sino una línea que no cruzamos. El triaje es criterio sanitario. Lo que sí hace el flujo es detectar palabras o situaciones que sugieren urgencia y derivar inmediatamente a una persona, sin intentar resolverlo.",
    },
    {
      question: "¿Cuánto se reducen los plantones?",
      answer:
        "No lo sabemos sin vuestros datos, y cualquier porcentaje que os diéramos sería inventado. Lo que sí se puede hacer es medir vuestra tasa actual antes de empezar y compararla después: es una de las pocas automatizaciones donde el efecto es limpio de medir.",
    },
    {
      question: "¿Funciona con nuestro software de gestión de clínica?",
      answer:
        "Depende. El software sanitario suele ser cerrado y no siempre expone API. Cuando la hay, la integración es directa; cuando no, hay que valorar si se puede trabajar contra su agenda de otra forma o si conviene mantener la agenda automatizada sincronizada en un solo sentido. Se comprueba antes de comprometer nada.",
    },
    {
      question: "¿Los pacientes mayores usan WhatsApp para esto?",
      answer:
        "Más de lo que se suele suponer, pero no todos, y por eso el teléfono no debe desaparecer. Lo razonable es que el canal automatizado absorba a quien lo prefiera y libere la línea telefónica para quien la necesita. Sustituir el teléfono por completo en este sector es un error.",
    },
  ],

  related: [
    {
      label: "Automatización de WhatsApp",
      href: "/automatizacion-whatsapp",
      description: "El canal de citas y recordatorios, sobre la API oficial.",
    },
    {
      label: "Atención al cliente",
      href: "/automatizacion-atencion-cliente",
      description: "Las preguntas de recepción que se repiten cada día.",
    },
    {
      label: "Automatización administrativa",
      href: "/automatizacion-administrativa",
      description: "El resto del back office: documentos, datos y avisos.",
    },
  ],

  finalCta: {
    title: "¿Qué porcentaje de citas se queda sin acudir?",
    lead: "Si tenéis ese dato, ya se puede estimar qué recuperaría un sistema de recordatorios con confirmación.",
    label: "Automatizar mi clínica",
  },
}
