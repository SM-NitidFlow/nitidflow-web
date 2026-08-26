import {
  BarChart3,
  Bell,
  CheckCircle2,
  Database,
  FileSearch,
  Inbox,
} from "lucide-react"
import type { Landing } from "./types"

export const automatizacionAdministrativa: Landing = {
  slug: "/automatizacion-administrativa",
  shortName: "Automatización administrativa",
  metaTitle: "Automatización de tareas administrativas con IA",
  metaDescription:
    "Automatiza data entry, tratamiento de documentos, notificaciones y reporting: el trabajo administrativo repetitivo que hoy consume horas del equipo.",
  h1: "Automatización de tareas administrativas",
  subheadline:
    "Data entry, documentos, notificaciones y reportes. El trabajo que nadie reclama como propio y que se lleva varias horas de varias personas cada semana.",
  eyebrow: "Operaciones",
  serviceType: "Automatización de procesos administrativos y back office",
  ctaLabel: "Automatizar operaciones",

  problem: {
    title: "El trabajo administrativo no se ve hasta que falta alguien.",
    body: [
      "Las tareas administrativas tienen una característica incómoda: son invisibles cuando funcionan. Nadie apunta en ningún sitio que alguien dedica cuarenta minutos diarios a pasar datos de un email a una hoja, ni que otra persona revisa manualmente que los pedidos del día estén todos registrados. Se descubre el volumen real cuando esa persona se va de vacaciones.",
      "Suelen ser también las tareas peor documentadas. El procedimiento vive en la cabeza de quien lo hace, con excepciones que nunca se escribieron. Eso las hace frágiles: un cambio de persona y el proceso se degrada sin que nadie lo note durante semanas.",
      "Automatizarlas tiene un efecto secundario tan valioso como el ahorro de horas: obliga a escribir el procedimiento. Muchas veces es la primera vez que existe.",
    ],
    signals: [
      "El mismo dato se introduce en dos o tres sistemas",
      "Hay una carpeta de documentos que alguien procesa a mano",
      "El proceso solo lo sabe hacer bien una persona",
      "Se detectan errores días después, revisando",
      "Hay una hoja de cálculo que es la verdad real de la empresa",
      "Cada cierre de mes implica horas de recopilación manual",
    ],
  },

  how: {
    title: "Cómo se ataca el back office.",
    lead: "Empezando por el que más veces al día ocurre, no por el que más molesta. Y aceptando que a veces el arreglo correcto no es automatizar sino eliminar el paso.",
    steps: [
      {
        title: "Contar veces, no quejas",
        description:
          "Un proceso de cinco minutos que ocurre treinta veces al día vale más que uno de una hora al mes.",
      },
      {
        title: "Escribir el procedimiento",
        description:
          "Incluidas las excepciones. Es el paso que la gente se salta y donde se rompen las automatizaciones.",
      },
      {
        title: "Fijar quién manda sobre el dato",
        description:
          "Un dato, un sistema de referencia. Las capas intermedias son ventanas o bandejas, nunca copias sincronizadas.",
      },
      {
        title: "Prever el error",
        description:
          "Qué pasa si el documento viene raro, si falta un campo o si el sistema no responde. Aviso y salida manual.",
      },
    ],
  },

  workflow: {
    title: "De documento recibido a dato registrado.",
    lead: "El patrón más común en back office: algo entra sin estructura, se convierte en datos, se valida y se escribe donde toca.",
    label: "back-office-documentos",
    steps: [
      {
        icon: <Inbox />,
        title: "Entra el documento",
        description: "Email, carpeta compartida o portal",
        status: "complete",
      },
      {
        icon: <FileSearch />,
        title: "Se extraen los datos",
        description: "Campos clave leídos del propio documento",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Se validan",
        description: "Reglas del negocio, no criterio del modelo",
        status: "processing",
      },
      {
        icon: <Database />,
        title: "Se registran",
        description: "En el sistema de referencia de ese dato",
        status: "waiting",
      },
      {
        icon: <Bell />,
        title: "Se avisa si algo no cuadra",
        description: "Con el documento y el motivo concreto",
        status: "waiting",
      },
      {
        icon: <BarChart3 />,
        title: "Queda contabilizado",
        description: "Disponible para el cierre sin recopilar a mano",
        status: "waiting",
      },
    ],
  },

  cases: {
    title: "Tareas que se automatizan bien.",
    lead: "Todas comparten lo mismo: ocurren muchas veces y el criterio se puede escribir.",
    items: [
      {
        title: "Extracción de datos de documentos",
        description:
          "Albaranes, facturas de proveedor, contratos y formularios convertidos en registros.",
      },
      {
        title: "Traspaso entre sistemas",
        description:
          "El dato deja de teclearse dos veces. Y deja de discrepar entre un sistema y otro.",
      },
      {
        title: "Clasificación del buzón compartido",
        description:
          "Cada correo al responsable o a la carpeta que le toca, sin que nadie clasifique a mano.",
      },
      {
        title: "Notificaciones internas",
        description:
          "Avisos cuando algo entra, se atrasa o se sale de rango, en el canal donde el equipo mira.",
      },
      {
        title: "Informes de cierre",
        description:
          "Recopilación automática de lo que hoy se junta a mano el último día del mes.",
      },
      {
        title: "Control de completitud",
        description:
          "Detectar lo que falta — un albarán sin registrar, un expediente sin documento — antes de que sea un problema.",
      },
    ],
  },

  integrations: {
    title: "Entre los sistemas que ya conviven.",
    lead: "El back office suele ser el sitio donde más herramientas coexisten. Automatizarlo es sobre todo conectarlas sin crear una cuarta copia del mismo dato.",
    names: [
      "Gmail",
      "Google Sheets",
      "Airtable",
      "Notion",
      "Slack",
      "Stripe",
      "Shopify",
      "n8n",
    ],
  },

  benefits: {
    title: "Qué mejora.",
    items: [
      {
        title: "El proceso deja de ser frágil",
        description:
          "Escrito y ejecutado por un sistema, sobrevive a vacaciones, bajas y cambios de persona.",
      },
      {
        title: "Los errores se ven el mismo día",
        description:
          "Un flujo avisa cuando algo no cuadra. La revisión manual lo detecta la semana siguiente, si lo detecta.",
      },
      {
        title: "El cierre de mes se acorta",
        description:
          "Porque los datos ya están recogidos en lugar de haber que reunirlos desde cero.",
      },
      {
        title: "Se recupera capacidad sin contratar",
        description:
          "El volumen extra de trabajo administrativo deja de traducirse en horas de más para el equipo.",
      },
    ],
  },

  limits: {
    title: "Dónde nos frenamos",
    items: [
      "Sistemas sin API donde la única vía sería automatizar el navegador: es frágil y se rompe con cada actualización",
      "Procesos que nadie ha definido: primero hay que decidir cómo deberían funcionar",
      "Documentos escaneados de mala calidad o manuscritos, donde la extracción no es fiable",
      "Aprobaciones y firmas con responsabilidad: se preparan, no se ejecutan solas",
      "Hojas de cálculo que son la verdad de la empresa y nadie se atreve a tocar: eso se aborda aparte",
    ],
  },

  faq: [
    {
      question: "¿Se puede leer una factura escaneada?",
      answer:
        "Depende de la calidad. Un PDF nativo o un escaneo limpio funcionan bien. Un móvil apuntando torcido a un papel arrugado no da fiabilidad suficiente para escribir directamente en un sistema contable, y en ese caso lo correcto es dejar el dato propuesto para revisión en lugar de registrarlo sin más.",
    },
    {
      question: "¿Y si el proceso tiene muchas excepciones?",
      answer:
        "Se automatiza el camino habitual y las excepciones se derivan a una persona. Intentar cubrir el cien por cien de los casos es lo que hace que estos proyectos no terminen nunca. Un flujo que resuelve el ochenta por ciento y avisa del resto ya devuelve la mayor parte del tiempo.",
    },
    {
      question: "¿Hay que dejar de usar nuestras hojas de cálculo?",
      answer:
        "No necesariamente, pero hay que decidir su papel. Una hoja puede ser una ventana para consultar o una bandeja donde entra información, y funciona bien en los dos casos. Lo que da problemas es cuando es una copia sincronizada de un dato que vive en otro sitio: entonces antes o después las dos versiones dejan de coincidir.",
    },
    {
      question: "¿Cuánto tiempo se recupera de verdad?",
      answer:
        "No lo sabemos hasta contar cuántas veces ocurre el proceso y cuánto dura cada vez. Esa medición es parte de la primera fase, y con vuestros números se puede estimar antes de construir nada. Dar un porcentaje genérico sería inventarlo.",
    },
  ],

  related: [
    {
      label: "Automatización de facturación",
      href: "/automatizacion-facturacion",
      description: "El caso administrativo con más requisitos legales en España.",
    },
    {
      label: "Automatización con n8n",
      href: "/automatizacion-n8n",
      description: "La capa que conecta los sistemas del back office.",
    },
    {
      label: "Despachos profesionales",
      href: "/sectores/despachos",
      description: "Documentación de clientes, plazos y traspaso entre sistemas.",
    },
  ],

  finalCta: {
    title: "¿Qué tarea hace alguien todos los días sin que nadie la mida?",
    lead: "Esas son las que más devuelven. Cuéntanos cuál es y cuántas veces al día se repite.",
    label: "Automatizar operaciones",
  },
}
