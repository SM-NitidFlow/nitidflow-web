import type { Article } from "./types"

export const queEsLaAutomatizacionConIa: Article = {
  slug: "que-es-la-automatizacion-con-ia",
  title: "Qué es la automatización con IA y cómo aplicarla en una empresa",
  description:
    "Qué distingue la automatización con IA de la automatización clásica, en qué procesos aporta de verdad y cómo elegir el primero sin gastar de más.",
  date: "2026-08-24",
  author: "Nitidflow",
  category: "Fundamentos",
  readingMinutes: 8,
  excerpt:
    "La diferencia con la automatización clásica no es el modelo: es que ahora se puede automatizar la parte del proceso que exigía leer algo escrito por una persona.",
  blocks: [
    {
      type: "p",
      text: "La automatización de procesos no es nueva. Las empresas llevan décadas encadenando reglas del tipo «si entra un pedido, crea una línea en la hoja». Lo que ha cambiado con la IA no es la capacidad de ejecutar acciones, sino la de interpretar información que no venía estructurada. Y ese cambio es más importante de lo que parece, porque era justo el eslabón que impedía automatizar procesos completos.",
    },
    {
      type: "h2",
      text: "El eslabón que faltaba",
    },
    {
      type: "p",
      text: "Piensa en un proceso típico: llega un email de un cliente pidiendo presupuesto. La automatización clásica podía detectar que el email había llegado, moverlo de carpeta y avisar a alguien. Lo que no podía hacer era leerlo y entender que ese cliente quiere 200 unidades de un producto concreto para entregar en Zaragoza antes de fin de mes.",
    },
    {
      type: "p",
      text: "Ese paso —convertir texto escrito por una persona en datos estructurados— tenía que hacerlo alguien. Y como tenía que hacerlo alguien, todo el proceso quedaba a la espera de que ese alguien abriera el correo. El resto de la automatización, por muy bien montada que estuviera, no servía de nada mientras ese eslabón fuera humano.",
    },
    {
      type: "p",
      text: "La IA cubre ese hueco. No inventa el proceso ni decide la estrategia: traduce. Y con ese eslabón resuelto, un proceso que antes se automatizaba a medias ahora se puede automatizar entero.",
    },
    {
      type: "callout",
      title: "La forma útil de pensarlo",
      text: "La IA no es el proceso. Es una pieza dentro del proceso, normalmente la que lee e interpreta. Si el diseño del proceso es malo, la IA lo ejecuta mal más rápido. Ese es el error más común y el más caro.",
    },
    {
      type: "h2",
      text: "Qué procesos se benefician de verdad",
    },
    {
      type: "p",
      text: "No todos. Y saber distinguirlo antes de gastar presupuesto es la mitad del trabajo. Un proceso es buen candidato cuando cumple cuatro condiciones a la vez:",
    },
    {
      type: "ol",
      items: [
        "Ocurre muchas veces. Un proceso que se repite treinta veces al día tiene sentido; uno que ocurre dos veces al mes casi nunca justifica el coste, aunque sea molesto.",
        "El criterio se puede explicar. Si nadie de la empresa es capaz de describir cómo se decide, todavía no se puede automatizar: primero hay que decidirlo.",
        "Los sistemas implicados tienen forma de acceso. Sin API, webhooks o al menos exportaciones fiables, el proyecto se convierte en otra cosa mucho más frágil.",
        "El error ocasional es tolerable o se puede validar. Si un fallo entre cien tiene consecuencia fiscal o legal, hace falta revisión humana en el paso crítico.",
      ],
    },
    {
      type: "p",
      text: "Fíjate en que ninguna de las cuatro condiciones habla de tecnología. Las decisiones que determinan si un proyecto de automatización sale bien se toman antes de escribir código, y son decisiones sobre el negocio.",
    },
    {
      type: "h2",
      text: "El patrón que se repite",
    },
    {
      type: "p",
      text: "Después de montar unas cuantas automatizaciones, se ve que la mayoría siguen la misma forma. Entra información sin estructura, se convierte en datos, se valida contra reglas del negocio, se escribe en el sistema que manda sobre ese dato, y se avisa a quien tiene que saberlo.",
    },
    {
      type: "p",
      text: "El paso de validación es el que más se descuida y el que más importa. La IA puede interpretar bien y aun así proponer algo que no encaja con vuestras reglas: un descuento que no aplica a ese cliente, una fecha imposible, un importe fuera de rango. Esa comprobación no debe hacerla el modelo, debe hacerla una regla explícita que alguien haya escrito.",
    },
    {
      type: "h3",
      text: "Y el paso que casi nadie prevé",
    },
    {
      type: "p",
      text: "Qué pasa cuando algo falla. Un flujo sin plan de error es un flujo que fallará en silencio, y descubrirlo tres semanas después es peor que no haberlo automatizado. Cada automatización necesita reintentos, notificación cuando algo se cae y una salida manual para lo que no se pueda resolver.",
    },
    {
      type: "h2",
      text: "Cómo elegir el primer proceso",
    },
    {
      type: "p",
      text: "El error habitual es empezar por el proceso que más molesta. Suele ser el más complejo, el que tiene más excepciones y el que menos veces ocurre: exactamente el peor primer proyecto. Cuando se elige así, el proyecto se alarga, nadie ve resultados y la conclusión que saca la empresa es que «la automatización no funcionó».",
    },
    {
      type: "p",
      text: "Lo que funciona es empezar por el proceso más aburrido de la lista: el que ocurre muchas veces, tiene poco criterio y a nadie le importa. Se pone en producción en semanas, se aprende cómo son de verdad vuestros sistemas —que nunca es como está documentado— y con ese conocimiento se decide el segundo.",
    },
    {
      type: "callout",
      title: "Señal de alarma",
      text: "Si el primer proyecto que te proponen incluye la palabra «transformación» o dura más de dos meses antes de que algo esté funcionando en producción, mereces una segunda opinión. Los proyectos largos en este terreno casi nunca llegan a usarse. Puedes ver [cómo planteamos un primer proyecto](/ia-para-empresas) y decidir si te encaja.",
    },
    {
      type: "h2",
      text: "Dónde acaban los datos",
    },
    {
      type: "p",
      text: "Es la pregunta que menos se hace y la que más consecuencias tiene. Automatizar implica que información de vuestros clientes pase por sistemas: la plataforma de orquestación, el proveedor del modelo de IA, cada servicio conectado. Cada uno de esos es, en términos de RGPD, un tratamiento que hay que poder justificar.",
    },
    {
      type: "p",
      text: "Hay dos decisiones que reducen mucho el problema. La primera es ejecutar la orquestación en infraestructura propia en lugar de en una plataforma SaaS de terceros: así el tratamiento ocurre en vuestro servidor. La segunda es minimizar lo que se envía a proveedores externos de IA: casi nunca hace falta mandar el registro completo del cliente para que el modelo interprete una frase.",
    },
    {
      type: "h2",
      text: "Qué esperar de forma razonable",
    },
    {
      type: "p",
      text: "El resultado más visible es tiempo: horas que dejan de gastarse en tareas sin decisión. Pero en empresas pequeñas hay un efecto que suele valer más y que casi nadie pone en el presupuesto: el proceso deja de depender de una persona concreta. Lo que estaba en la cabeza de alguien pasa a estar escrito en un flujo que se puede leer, discutir y cambiar.",
    },
    {
      type: "p",
      text: "Lo que no hay que esperar es que la IA arregle un proceso mal definido, que sustituya criterio profesional, o que funcione bien sobre datos incoherentes. Si el mismo cliente existe con tres nombres distintos en tres sistemas, la automatización va a propagar ese lío con más eficiencia que antes.",
    },
    {
      type: "quote",
      text: "La pregunta útil no es qué puede hacer la IA. Es qué proceso vuestro se beneficia de ella, y cuál no.",
    },
  ],
  related: [
    { label: "Automatización con IA", href: "/automatizacion-ia" },
    { label: "IA para empresas", href: "/ia-para-empresas" },
    { label: "Agentes de IA", href: "/agentes-ia" },
    { label: "Automatización para PYMEs", href: "/sectores/pymes" },
  ],
}
