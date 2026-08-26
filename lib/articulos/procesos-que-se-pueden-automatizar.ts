import type { Article } from "./types"

export const procesosQueSePuedenAutomatizar: Article = {
  slug: "procesos-que-se-pueden-automatizar",
  title: "20 procesos que cualquier empresa puede automatizar con IA",
  description:
    "Veinte procesos concretos ordenados por lo rápido que devuelven tiempo, con la señal que indica que ya toca automatizarlos y los que conviene dejar en manos de personas.",
  date: "2026-08-24",
  author: "Nitidflow",
  category: "Casos de uso",
  readingMinutes: 9,
  excerpt:
    "Ordenados por retorno real, no por cuánto lucen. Los cinco primeros suelen pagarse solos en semanas.",
  blocks: [
    {
      type: "p",
      text: "Esta lista está ordenada por lo rápido que devuelven tiempo, no por lo espectacular que suenan en una reunión. Los primeros son aburridos a propósito: son los que se ponen en producción en semanas y los que se pagan solos.",
    },
    {
      type: "h2",
      text: "Los que devuelven tiempo enseguida",
    },
    {
      type: "ol",
      items: [
        "Clasificación del buzón compartido. El info@ que recibe de todo y que alguien reparte a mano cada mañana. Criterio claro, volumen alto, riesgo bajo.",
        "Primera respuesta a leads. Contacto en minutos con la referencia de lo que ha pedido, a cualquier hora. En sectores donde gana quien contesta primero, es ingreso y no ahorro. Detallado en [automatización de ventas](/automatizacion-ventas).",
        "Registro de facturas de proveedor. Mucho volumen, criterio definido y cero riesgo de emitir nada mal. El mejor punto de entrada en [facturación](/automatizacion-facturacion).",
        "Aviso proactivo de estado de pedido. Informar antes de que pregunten es más barato que contestar bien cuando preguntan.",
        "El informe recurrente. El que se monta a mano cada mes copiando de tres plataformas distintas.",
      ],
    },
    {
      type: "callout",
      title: "Señal para saber si es tu caso",
      text: "Si alguien de tu equipo hace la misma tarea todos los días y nadie ha medido nunca cuánto le lleva, ahí hay tiempo escondido. Las tareas cortas y frecuentes son las que peor se estiman y las que más devuelven.",
    },
    {
      type: "h2",
      text: "Los que arreglan un riesgo, no solo el tiempo",
    },
    {
      type: "ol",
      items: [
        "Vigilancia de plazos y vencimientos. Fiscales, laborales, contractuales. Es de los pocos riesgos que se elimina casi por completo con un flujo.",
        "Control de completitud. Detectar el albarán sin registrar o el expediente sin documento antes de que sea un problema.",
        "Recogida de documentación de clientes. Petición programada con recordatorios escalonados, sin perseguir a mano. Clave en [despachos profesionales](/sectores/despachos).",
        "Registro de actividad en el CRM. Que lo que se habla acabe anotado sin que nadie lo transcriba. Ver [automatización de CRM](/automatizacion-crm).",
        "Normalización de datos. Teléfonos, NIF y nombres de empresa escritos siempre igual. Aburrido y decisivo para que el reporting signifique algo.",
      ],
    },
    {
      type: "h2",
      text: "Los que necesitan que la IA interprete",
    },
    {
      type: "ol",
      items: [
        "Extracción de datos de documentos. Facturas, albaranes y contratos convertidos en registros, con lo dudoso marcado para revisión.",
        "Cualificación de leads con criterios propios. El criterio deja de vivir en la cabeza de cada comercial y pasa a estar escrito y discutible.",
        "Atención de primer nivel. Las consultas cuya respuesta existe en un sistema, resueltas consultándolo. Ver [atención al cliente](/automatizacion-atencion-cliente).",
        "Resumen de conversaciones. Lo hablado con el cliente convertido en una nota útil en su ficha.",
        "Routing de incidencias. Cada caso a la persona adecuada según de qué va, no según el orden de llegada.",
      ],
    },
    {
      type: "h2",
      text: "Los que piden más cuidado",
    },
    {
      type: "ol",
      items: [
        "Agendado de citas y recordatorios. Bien hecho, reduce plantones de forma medible. Mal hecho, molesta al cliente. Ver [clínicas](/sectores/clinicas).",
        "Secuencias de seguimiento. Necesitan memoria de lo enviado y detección de respuesta, o se convierten en insistencia.",
        "Generación de presupuestos. El documento se puede montar automáticamente; el envío conviene que lo haga una persona.",
        "Borradores de contenido. Producir el primer borrador, sí. Publicar sin revisión, no.",
        "Conciliación bancaria. Cruce automático de lo que cuadra, y una cola de revisión para lo que no.",
      ],
    },
    {
      type: "h2",
      text: "Los que no automatizamos",
    },
    {
      type: "p",
      text: "Esta parte importa igual que la anterior. Hay procesos donde automatizar traslada el riesgo en lugar de reducirlo:",
    },
    {
      type: "ul",
      items: [
        "Negociar precios, plazos o condiciones comerciales.",
        "Gestionar una reclamación de un cliente enfadado.",
        "Cualquier criterio profesional con responsabilidad: fiscal, sanitario, jurídico.",
        "Devoluciones, abonos y cualquier operación que mueva dinero de vuelta.",
        "Emitir facturas al margen del software que tiene la obligación de cumplir la norma.",
        "Publicar contenido en vuestro nombre sin que una persona lo haya visto.",
      ],
    },
    {
      type: "h2",
      text: "Cómo elegir de esta lista",
      },
    {
      type: "p",
      text: "No por interés, sino por repetición. Coge los tres procesos de la lista que más veces al día ocurran en tu empresa y ordénalos por cuántos minutos consumen en total a la semana. Empieza por el primero de esa ordenación, aunque sea el más aburrido de los tres.",
    },
    {
      type: "p",
      text: "Y antes de construir nada, mide. Una semana apuntando cuántas veces ocurre y cuánto lleva cada vez vale más que cualquier estimación, y es lo que después permite saber si el proyecto funcionó. Sin medición previa no hay forma de demostrar el resultado, ni a un socio ni a ti mismo.",
    },
  ],
  related: [
    { label: "Automatización con IA", href: "/automatizacion-ia" },
    { label: "Automatización administrativa", href: "/automatizacion-administrativa" },
    { label: "IA para empresas", href: "/ia-para-empresas" },
    { label: "Automatización para PYMEs", href: "/sectores/pymes" },
  ],
}
