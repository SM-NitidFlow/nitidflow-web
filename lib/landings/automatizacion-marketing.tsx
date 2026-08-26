import {
  BarChart3,
  Database,
  FileText,
  Send,
  Sparkles,
  UserPlus,
} from "lucide-react"
import type { Landing } from "./types"

export const automatizacionMarketing: Landing = {
  slug: "/automatizacion-marketing",
  shortName: "Automatización de marketing",
  metaTitle: "Automatización de marketing con IA",
  metaDescription:
    "Automatiza la captación, las secuencias de email, la producción de contenido asistida y el reporting de campañas, con los datos conectados al CRM.",
  h1: "Automatización de marketing con IA",
  subheadline:
    "Menos horas montando informes y programando envíos. Más criterio sobre qué está funcionando, con datos que vienen del CRM y no de una captura de pantalla.",
  eyebrow: "Marketing",
  serviceType: "Automatización de procesos de marketing",
  ctaLabel: "Automatizar marketing",

  problem: {
    title: "El marketing de una pyme se va en operativa, no en estrategia.",
    body: [
      "En equipos pequeños — y muchas veces es una sola persona, a media jornada — el tiempo se consume en tareas de traslado: bajar datos de la plataforma de anuncios, pegarlos en una hoja, cruzarlos con las ventas del CRM, montar el informe, programar los envíos, actualizar las listas. Nada de eso es marketing, pero se lleva la mayor parte de la semana.",
      "El efecto es doble. No queda tiempo para pensar qué campaña tiene sentido, y las decisiones se toman con datos de hace dos semanas porque actualizar el informe cuesta media jornada.",
      "El otro problema clásico es la desconexión entre marketing y ventas: se sabe cuántos leads entraron, no cuáles se cerraron. Sin eso, optimizar el gasto es adivinar.",
    ],
    signals: [
      "El informe mensual se monta a mano copiando de varias plataformas",
      "Se sabe el coste por lead pero no el coste por cliente",
      "Las listas de email se actualizan manualmente",
      "El contenido se para cuando la persona que lo hace tiene otra urgencia",
      "Marketing y ventas miran números distintos",
      "Nadie revisa qué pasó con los leads de la campaña anterior",
    ],
  },

  how: {
    title: "Qué se automatiza sin perder el criterio.",
    lead: "La operativa, sí. La decisión de qué contar y a quién, no: eso es precisamente lo que queda liberado.",
    steps: [
      {
        title: "La recogida de datos",
        description:
          "Las métricas de cada plataforma llegan solas a un único sitio, con el mismo formato siempre.",
      },
      {
        title: "El ciclo completo del lead",
        description:
          "Se conecta la campaña con el cierre en el CRM. Así se puede hablar de coste por cliente, no por clic.",
      },
      {
        title: "Las secuencias",
        description:
          "Segmentación y envíos según lo que hace el contacto, con las reglas de consentimiento respetadas.",
      },
      {
        title: "El borrador de contenido",
        description:
          "Primeras versiones a partir de vuestros datos y vuestro tono. Siempre con revisión humana antes de publicar.",
      },
    ],
  },

  workflow: {
    title: "Del clic al informe, sin pasar por una hoja de cálculo a mano.",
    lead: "El objetivo del flujo no es enviar más emails: es que al final de mes el informe exista sin que nadie lo monte.",
    label: "ciclo-de-campana",
    steps: [
      {
        icon: <UserPlus />,
        title: "Entra el lead",
        description: "Campaña, formulario o contenido",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "Se segmenta",
        description: "Origen, interés y encaje con el producto",
        status: "complete",
      },
      {
        icon: <Send />,
        title: "Entra en secuencia",
        description: "Con consentimiento verificado",
        status: "complete",
      },
      {
        icon: <Database />,
        title: "Se sincroniza",
        description: "El CRM y la herramienta de email dejan de discrepar",
        status: "processing",
      },
      {
        icon: <FileText />,
        title: "Se atribuye",
        description: "El cierre se enlaza con la campaña que lo originó",
        status: "waiting",
      },
      {
        icon: <BarChart3 />,
        title: "Se reporta",
        description: "Informe generado el mismo día cada mes",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Piezas que se montan por separado.",
    lead: "Casi nadie necesita todo. Lo habitual es empezar por el informe, porque es el que más horas devuelve.",
    items: [
      {
        title: "Informe de campañas",
        description:
          "Datos de todas las plataformas reunidos y presentados igual cada mes, sin copiar y pegar.",
      },
      {
        title: "Atribución hasta el cierre",
        description:
          "Saber qué campaña trajo a los clientes que firmaron, no solo a los que rellenaron el formulario.",
      },
      {
        title: "Secuencias de email por comportamiento",
        description:
          "Segmentos que se actualizan solos según lo que el contacto hace, no según una lista estática.",
      },
      {
        title: "Limpieza de listas",
        description:
          "Bajas, duplicados y rebotes gestionados automáticamente, que es también una obligación de RGPD.",
      },
      {
        title: "Borradores de contenido",
        description:
          "Primeras versiones de artículos, fichas y newsletters a partir de datos reales y con revisión previa.",
      },
      {
        title: "Alertas de rendimiento",
        description:
          "Aviso cuando una campaña se desvía de lo esperado, en lugar de descubrirlo a fin de mes.",
      },
    ],
  },

  integrations: {
    title: "Con las plataformas donde ya está el dato.",
    lead: "No hace falta un data warehouse para dejar de montar informes a mano. Se conecta lo que hay y se centraliza en un único sitio legible.",
    names: [
      "HubSpot",
      "Google Sheets",
      "Airtable",
      "Notion",
      "Gmail",
      "Slack",
      "Stripe",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué se recupera.",
    items: [
      {
        title: "Las horas del informe",
        description:
          "Suele ser la primera automatización que se paga sola, y la más fácil de medir en horas.",
      },
      {
        title: "Decisiones con datos de esta semana",
        description:
          "Cuando actualizar el informe cuesta cero, se mira más a menudo y se corrige antes.",
      },
      {
        title: "Marketing y ventas mirando lo mismo",
        description:
          "Un único número de referencia acaba con buena parte de la discusión sobre calidad de leads.",
      },
      {
        title: "Contenido que no se para",
        description:
          "El borrador deja de ser el cuello de botella. La revisión y el criterio siguen siendo humanos.",
      },
    ],
  },

  limits: {
    title: "Lo que no automatizamos aquí",
    items: [
      "Publicar contenido sin que una persona lo revise",
      "Comprar o importar listas de contactos: además de ineficaz, es ilegal",
      "Enviar comunicaciones comerciales sin consentimiento verificable",
      "Decidir el posicionamiento y el mensaje de la marca",
      "Prometer resultados de SEO o de campañas: eso no depende de un flujo",
    ],
  },

  faq: [
    {
      question: "¿La IA escribe el contenido y se publica solo?",
      answer:
        "El borrador sí puede generarse automáticamente. La publicación sin revisión no la recomendamos y no la montamos por defecto: el coste de un texto con un dato equivocado publicado en vuestra web es muy superior al tiempo de revisarlo.",
    },
    {
      question: "¿Sirve para SEO?",
      answer:
        "Para producir más rápido, sí. Para posicionar, el volumen sin criterio no funciona y desde hace tiempo puede ser contraproducente. Lo que sí ayuda es automatizar la parte mecánica — datos, estructura, enlazado interno, control de canibalización — y dejar el criterio editorial a una persona.",
    },
    {
      question: "¿Cómo se cumple el RGPD en las secuencias de email?",
      answer:
        "Consentimiento verificable antes de la primera comunicación comercial, registro de cuándo y cómo se obtuvo, baja en un clic y efectiva de inmediato, y el tratamiento reflejado en el registro de actividades. La automatización ayuda precisamente en esto: hace la trazabilidad automática en lugar de dejarla en manos de que alguien lo apunte.",
    },
    {
      question: "¿Necesitamos cambiar de herramienta de email marketing?",
      answer:
        "Normalmente no. Casi todas las plataformas habituales tienen API suficiente para lo que hace falta. Antes de plantear un cambio hay que comprobar que el problema es la herramienta y no el proceso, que suele ser lo segundo.",
    },
  ],

  related: [
    {
      label: "Automatización de ventas",
      href: "/automatizacion-ventas",
      description: "El paso siguiente: qué pasa con el lead cuando entra.",
    },
    {
      label: "Automatización de CRM",
      href: "/automatizacion-crm",
      description: "La base para poder atribuir cierres a campañas.",
    },
    {
      label: "Automatización con IA",
      href: "/automatizacion-ia",
      description: "El marco general de cómo se elige qué automatizar.",
    },
  ],

  finalCta: {
    title: "¿Cuánto tarda en montarse vuestro informe mensual?",
    lead: "Si la respuesta se mide en horas, ahí hay una automatización que se paga sola. Cuéntanos de dónde salen los datos.",
    label: "Automatizar marketing",
  },
}
