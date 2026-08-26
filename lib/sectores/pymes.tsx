import {
  Bell,
  CheckCircle2,
  Database,
  FileSearch,
  Inbox,
  Users,
} from "lucide-react"
import type { Landing } from "@/lib/landings/types"

export const pymes: Landing = {
  slug: "/sectores/pymes",
  shortName: "PYMEs",
  breadcrumbParent: { name: "Sectores", path: "/sectores" },
  metaTitle: "Automatización e IA para PYMEs",
  metaDescription:
    "Automatización con IA para pymes españolas: cómo empezar por un proceso concreto, sin proyecto largo, sin cambiar de herramientas y con criterio para elegir.",
  h1: "Automatización e IA para PYMEs",
  subheadline:
    "En una pyme el proceso crítico suele depender de una persona y de su memoria. Automatizar es, antes que ahorrar tiempo, quitarse ese riesgo.",
  eyebrow: "PYMEs",
  serviceType: "Automatización de procesos para pequeñas y medianas empresas",
  ctaLabel: "Analizar mi empresa",

  problem: {
    title: "El proceso importante lo sabe hacer una sola persona.",
    body: [
      "En una empresa de diez o veinte personas casi nunca hay procedimientos escritos. Hay personas que saben cómo se hacen las cosas. Funciona muy bien hasta que esa persona coge la baja, se va de vacaciones en agosto o cambia de trabajo, y entonces se descubre que el proceso no estaba en ningún sitio.",
      "El segundo rasgo típico es la acumulación de herramientas. Una hoja de cálculo que empezó siendo temporal y ahora es la verdad de la empresa; un CRM que se contrató y nadie rellena; el WhatsApp del comercial como archivo de clientes. Cada herramienta con su propia versión de los mismos datos.",
      "Y el tercero es la falta de tiempo para arreglarlo. La gente está ocupada operando, y el proyecto de ordenar procesos nunca es lo urgente. Por eso los proyectos largos aquí no funcionan: hay que empezar por algo pequeño que se note en semanas.",
    ],
    signals: [
      "Si falta una persona concreta, algo se para",
      "Hay una hoja de cálculo que nadie se atreve a tocar",
      "Se contrataron herramientas que nadie usa",
      "El mismo dato de cliente está en tres sitios distintos",
      "Nadie tiene tiempo para documentar cómo se hacen las cosas",
      "Se ha planteado automatizar y no se sabe por dónde empezar",
    ],
  },

  how: {
    title: "Cómo se empieza en una pyme.",
    lead: "Con un proceso, no con un plan de transformación. La diferencia entre ambos es que el primero llega a producción.",
    steps: [
      {
        title: "Un proceso, no diez",
        description:
          "El que más veces al día ocurre. Ponerlo en marcha enseña más que analizar diez sobre el papel.",
      },
      {
        title: "Sin cambiar de herramientas",
        description:
          "Cambiar de CRM o de ERP a la vez multiplica el riesgo y no aporta nada al proyecto.",
      },
      {
        title: "Escribir el procedimiento",
        description:
          "Efecto secundario más valioso que el ahorro: por primera vez el proceso existe fuera de una cabeza.",
      },
      {
        title: "Medir y decidir el siguiente",
        description:
          "Con datos del primero se decide si hay un segundo. Sin datos, es fe.",
      },
    ],
  },

  workflow: {
    title: "Cómo es un primer proyecto realista.",
    lead: "Semanas, no meses. Y con el equipo usándolo de verdad antes de plantear nada más.",
    label: "primer-proyecto-pyme",
    steps: [
      {
        icon: <Users />,
        title: "Conversación",
        description: "30 minutos sobre cómo trabajáis hoy",
        status: "complete",
      },
      {
        icon: <FileSearch />,
        title: "Se elige el proceso",
        description: "El de más repetición y criterio más claro",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Se escribe cómo funciona",
        description: "Incluidas las excepciones, que es lo que se olvida",
        status: "processing",
      },
      {
        icon: <Database />,
        title: "Se construye",
        description: "Sobre vuestras herramientas actuales",
        status: "waiting",
      },
      {
        icon: <Inbox />,
        title: "En producción",
        description: "Con el equipo usándolo y documentación entregada",
        status: "waiting",
      },
      {
        icon: <Bell />,
        title: "Se mide",
        description: "Qué ha cambiado, con vuestros números",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Primeros proyectos que funcionan en pymes.",
    lead: "Todos comparten lo mismo: alcance pequeño, mucha repetición y resultado visible en semanas.",
    items: [
      {
        title: "Entrada de leads y primera respuesta",
        description:
          "Lo que más rápido se nota si vendéis a otras empresas o a particulares por web.",
      },
      {
        title: "Clasificación del buzón compartido",
        description:
          "El info@ que recibe de todo y que alguien reparte a mano cada mañana.",
      },
      {
        title: "Registro de facturas de proveedor",
        description:
          "Volumen alto, criterio claro y cero riesgo de emitir nada mal.",
      },
      {
        title: "Informe recurrente",
        description:
          "El que se monta a mano cada mes copiando de varios sitios.",
      },
      {
        title: "Recordatorios y avisos",
        description:
          "Vencimientos, citas o seguimientos que hoy dependen de que alguien se acuerde.",
      },
      {
        title: "Traspaso entre dos sistemas",
        description:
          "El dato que alguien teclea dos veces porque las herramientas no se hablan.",
      },
    ],
  },

  integrations: {
    title: "Con lo que ya tenéis contratado.",
    lead: "En una pyme el stack suele ser una mezcla de herramientas contratadas en distintos momentos. Se conectan; no se sustituyen por sistema.",
    names: [
      "Gmail",
      "Google Sheets",
      "WhatsApp",
      "HubSpot",
      "Airtable",
      "Notion",
      "Stripe",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué se gana además del tiempo.",
    items: [
      {
        title: "El proceso deja de depender de una persona",
        description:
          "Para una empresa pequeña esto vale más que las horas ahorradas: es reducir un riesgo real.",
      },
      {
        title: "Queda escrito cómo se hacen las cosas",
        description:
          "Lo que facilita además incorporar a alguien nuevo sin que aprenda por imitación.",
      },
      {
        title: "Los datos empiezan a ser fiables",
        description:
          "Un sistema escribe siempre igual, y eso mejora el reporting más que cualquier cuadro de mando.",
      },
      {
        title: "Se crece sin contratar en proporción",
        description:
          "El trabajo repetitivo deja de escalar linealmente con el volumen.",
      },
    ],
  },

  limits: {
    title: "Cuándo decimos que no merece la pena",
    items: [
      "Procesos que ocurren dos o tres veces al mes: el coste no se recupera",
      "Herramientas sin API donde la única vía sería frágil",
      "Procesos que nadie ha definido y nadie quiere definir ahora",
      "Cuando el problema real es de organización y no de herramientas",
      "Cuando no hay nadie en la empresa que pueda ser el interlocutor del proyecto",
    ],
  },

  faq: [
    {
      question: "¿Somos demasiado pequeños para esto?",
      answer:
        "Lo que decide no es el tamaño, es la repetición. Una empresa de ocho personas que procesa doscientos pedidos al día tiene más que ganar que una de cien que hace veinte operaciones grandes al mes. La pregunta útil es cuántas veces al día se repite la misma tarea.",
    },
    {
      question: "¿Cuánto cuesta el primer proyecto?",
      answer:
        "Trabajamos por entregable, con alcance definido y precio conocido antes de empezar, no por horas abiertas. Eso permite empezar por un proceso concreto y decidir con datos si hay un segundo. En la primera conversación se puede acotar el orden de magnitud sin compromiso.",
    },
    {
      question: "No tenemos a nadie técnico. ¿Es un problema?",
      answer:
        "Para que funcione, no. Para que dure, conviene que alguien de la empresa entienda qué hace el flujo y sepa dónde mirar cuando algo falla. Parte del trabajo es dejarlo documentado para que eso sea posible sin dependernos, y el mantenimiento se puede contratar aparte si preferís.",
    },
    {
      question: "¿Hay ayudas o subvenciones para esto?",
      answer:
        "Ha habido varios programas de digitalización para pymes en España y las condiciones cambian con frecuencia, así que lo honesto es que lo confirméis con vuestra asesoría o en la convocatoria vigente antes de contar con ello. No condicionamos el planteamiento a que exista una ayuda: si el proceso no se sostiene por sí solo, la subvención solo cambia quién paga un proyecto que no había que hacer.",
    },
    {
      question: "¿Y si no funciona?",
      answer:
        "Por eso se empieza pequeño y se mide. Un primer proyecto acotado tiene un coste conocido y un resultado comprobable en semanas: si no aporta, se ha perdido poco y se ha aprendido dónde está el problema real, que suele ser información útil. Los proyectos largos son los que no dejan salida.",
    },
  ],

  related: [
    {
      label: "IA para empresas",
      href: "/ia-para-empresas",
      description: "Cómo decidir dónde aplicar IA y dónde no.",
    },
    {
      label: "Automatización con IA",
      href: "/automatizacion-ia",
      description: "El marco: qué se automatiza y con qué criterio.",
    },
    {
      label: "Automatización administrativa",
      href: "/automatizacion-administrativa",
      description: "Donde suele estar el primer proyecto de una pyme.",
    },
  ],

  finalCta: {
    title: "¿Qué se para si falta una persona?",
    lead: "Esa suele ser la respuesta a por dónde empezar. Media hora basta para saber si hay un primer proyecto que merezca la pena.",
    label: "Analizar mi empresa",
  },
}
