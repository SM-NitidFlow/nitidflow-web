import type { Article } from "./types"

export const comoCalcularElRoiDeUnaAutomatizacion: Article = {
  slug: "como-calcular-el-roi-de-una-automatizacion",
  title: "Cómo calcular el ROI de una automatización sin engañarte",
  description:
    "Cómo estimar el retorno de una automatización con números reales: qué contar, qué costes se olvidan siempre y por qué el porcentaje de ahorro no se puede suponer.",
  date: "2026-08-24",
  author: "Nitidflow",
  category: "Decisión",
  readingMinutes: 7,
  excerpt:
    "La mayoría de cálculos de ROI de automatización fallan por el mismo sitio: cuentan el ahorro completo y se olvidan del mantenimiento.",
  blocks: [
    {
      type: "p",
      text: "Casi cualquier automatización parece rentable si haces el cálculo con optimismo. Y casi cualquiera parece innecesaria si lo haces con pesimismo. Lo útil es un cálculo que puedas defender delante de tu socio o de tu director financiero, con los costes que la mayoría de propuestas comerciales omiten.",
    },
    {
      type: "h2",
      text: "Paso 1: mide el coste actual, no lo estimes",
    },
    {
      type: "p",
      text: "El error de partida es preguntar «¿cuánto tiempo os lleva esto?». La respuesta siempre es una impresión, y suele estar equivocada en ambos sentidos: la gente infravalora las tareas cortas que hace muchas veces y sobrevalora las largas que hace poco.",
    },
    {
      type: "p",
      text: "Lo que hace falta son dos números: cuántas veces al día ocurre el proceso, y cuántos minutos lleva cada vez. Una semana apuntándolo da un dato mucho mejor que cualquier estimación. Con eso:",
    },
    {
      type: "ul",
      items: [
        "Horas al año = (veces al día × minutos por vez ÷ 60) × días laborables × personas implicadas.",
        "Coste anual = horas al año × coste bruto por hora para la empresa.",
      ],
    },
    {
      type: "p",
      text: "Ojo con el coste por hora: no es el salario neto ni el bruto. Es el coste total para la empresa —salario bruto más cotizaciones más costes indirectos— dividido por horas efectivas. Suele salir bastante por encima de lo que la gente supone.",
    },
    {
      type: "callout",
      title: "Puedes hacerlo aquí",
      text: "En la [calculadora de la página principal](/#calculadora) puedes meter tus propios números y ver el coste semanal, mensual y anual del proceso. El cálculo se hace en tu navegador y no se envía a ningún sitio.",
    },
    {
      type: "h2",
      text: "Paso 2: no supongas el porcentaje automatizable",
    },
    {
      type: "p",
      text: "Aquí es donde fallan la mayoría de propuestas. Se coge el coste actual, se multiplica por un «ahorro del 80%» que nadie ha justificado, y sale un número muy bonito.",
    },
    {
      type: "p",
      text: "El porcentaje real depende de cuánto del proceso se puede ejecutar sin criterio humano, y eso solo se sabe mirando el proceso concreto. Un proceso con muchas excepciones puede quedarse en un 40% automatizable, y aun así ser rentable. Otro casi mecánico puede llegar al 90%.",
    },
    {
      type: "p",
      text: "La forma honesta de tratarlo es al contrario: en lugar de suponer el porcentaje, calcula qué porcentaje necesitas automatizar para que el proyecto se pague. Si la cuenta sale con un 35%, es una apuesta razonable. Si solo sale con un 85%, es frágil.",
    },
    {
      type: "h2",
      text: "Paso 3: los costes que siempre se olvidan",
    },
    {
      type: "p",
      text: "Un cálculo de ROI que solo incluye el precio del desarrollo está incompleto. Los costes recurrentes son los que deciden si el proyecto sigue teniendo sentido al segundo año:",
    },
    {
      type: "ol",
      items: [
        "Infraestructura. Si la orquestación va autoalojada, el servidor y su mantenimiento tienen coste. Es modesto, pero existe.",
        "Consumo de modelos de IA. Se paga por uso. Con volúmenes altos deja de ser despreciable, y hay que estimarlo con tu volumen real, no con el de la demo.",
        "Costes de plataforma por operación. WhatsApp Business cobra por conversación. Algunas plataformas de automatización cobran por ejecución. Con volumen, esto escala.",
        "Mantenimiento. Un flujo es software: las APIs cambian, los formatos cambian, el proceso cambia. Presupuestar cero mantenimiento es presupuestar que se degradará.",
        "El tiempo de tu equipo. Definir el proceso, revisar las excepciones y aprender a usarlo son horas vuestras que también cuentan.",
      ],
    },
    {
      type: "h2",
      text: "Paso 4: el beneficio que no está en horas",
    },
    {
      type: "p",
      text: "Hay retornos que no aparecen en el cálculo de horas y que en empresas pequeñas suelen valer más que el ahorro directo. Merecen estar en la conversación aunque no se puedan meter en la hoja:",
    },
    {
      type: "ul",
      items: [
        "El proceso deja de depender de una persona. Reducir ese riesgo tiene valor aunque no salga en la nómina.",
        "El tiempo de respuesta al cliente baja. En sectores donde gana quien contesta primero, esto es ingreso, no ahorro.",
        "Los errores se detectan el mismo día. El coste evitado es real aunque sea difícil de cuantificar.",
        "El procedimiento queda escrito. Facilita incorporar a alguien nuevo y discutir cómo mejorar.",
      ],
    },
    {
      type: "p",
      text: "La cautela: estos beneficios son fáciles de usar para justificar cualquier cosa. Si el cálculo en horas no se acerca a cuadrar, apoyarse solo en los intangibles suele ser señal de que el proyecto no debería hacerse todavía.",
    },
    {
      type: "h2",
      text: "Cuándo la respuesta es no",
    },
    {
      type: "p",
      text: "Un cálculo honesto tiene que poder salir negativo. Estos son los casos donde suele salir:",
    },
    {
      type: "ul",
      items: [
        "El proceso ocurre pocas veces al mes, aunque cada vez sea largo y molesto.",
        "Los sistemas implicados no tienen forma razonable de acceso y habría que montar algo frágil.",
        "El proceso no está definido y nadie tiene tiempo de definirlo ahora.",
        "El problema real es de organización, y automatizar solo lo escondería mejor.",
      ],
    },
    {
      type: "p",
      text: "En esos casos lo barato es descubrirlo en la primera conversación. Es exactamente por eso que en una propuesta merece la pena preguntar qué partes recomiendan no automatizar: si no hay ninguna, probablemente no han mirado el proceso con suficiente atención.",
    },
  ],
  related: [
    { label: "IA para empresas", href: "/ia-para-empresas" },
    { label: "Automatización con IA", href: "/automatizacion-ia" },
    { label: "Automatización para PYMEs", href: "/sectores/pymes" },
  ],
}
