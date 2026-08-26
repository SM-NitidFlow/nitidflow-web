import type { Article } from "./types"

export const n8nVsMake: Article = {
  slug: "n8n-vs-make",
  title: "n8n vs Make: cuál elegir y con qué criterio",
  description:
    "n8n o Make: dónde viven los datos, cómo escala el coste de cada una y cuándo ninguna de las dos es la herramienta adecuada.",
  date: "2026-08-24",
  author: "Nitidflow",
  category: "Herramientas",
  readingMinutes: 6,
  excerpt:
    "La diferencia decisiva no es la interfaz ni el número de conectores: es si puedes ejecutarlo en tu propio servidor.",
  blocks: [
    {
      type: "p",
      text: "Las dos son plataformas de automatización visual: encadenas nodos, conectas herramientas y montas un flujo sin escribir todo el código. Se parecen bastante en lo que se ve. Se diferencian en tres cosas que sí condicionan la decisión.",
    },
    {
      type: "h2",
      text: "1. Dónde se ejecuta y dónde acaban los datos",
    },
    {
      type: "p",
      text: "Make es SaaS: los flujos se ejecutan en su infraestructura. Eso significa que la información que pasa por tus automatizaciones —datos de clientes, contenido de emails, importes— transita por sus servidores. Es cómodo y no requiere mantener nada, pero convierte a Make en un encargado del tratamiento que hay que documentar.",
    },
    {
      type: "p",
      text: "n8n se puede autoalojar. Ejecutado en tu propio servidor, el tratamiento ocurre en tu infraestructura y no hay un tercero intermedio en el flujo de datos. Para una empresa española que maneja datos de clientes —y más aún para un despacho profesional, que maneja datos de los clientes de sus clientes— esto pesa bastante en la conversación de RGPD.",
    },
    {
      type: "callout",
      title: "Matiz importante",
      text: "n8n también ofrece versión cloud gestionada. Si eliges esa, la ventaja de infraestructura propia desaparece y la comparación con Make se estrecha mucho. La diferencia está en autoalojar, no en la marca.",
    },
    {
      type: "h2",
      text: "2. Cómo escala el coste",
    },
    {
      type: "p",
      text: "Make cobra por operación. Cada paso de cada ejecución consume cuota. Con volúmenes bajos es barato y predecible; con volúmenes altos, o con flujos de muchos pasos, la factura crece de forma que sorprende a bastante gente.",
    },
    {
      type: "p",
      text: "n8n autoalojado no cobra por ejecución: el coste es el del servidor y su mantenimiento. Es un coste fijo modesto que no cambia si el volumen se dobla. La contrapartida es que ese mantenimiento tiene que hacerlo alguien.",
    },
    {
      type: "p",
      text: "El punto de cruce depende del caso, pero la forma de las dos curvas es la que importa: una crece con el uso y la otra no. Si esperas que el volumen suba, eso condiciona la elección más que cualquier comparación de funcionalidades.",
    },
    {
      type: "h2",
      text: "3. Hasta dónde llega la lógica",
    },
    {
      type: "p",
      text: "Make es más amable para empezar: la interfaz es más pulida y la curva inicial más suave. n8n permite meter código con más naturalidad dentro del flujo, lo que ayuda cuando la lógica se complica más allá de lo que un editor visual expresa con comodidad.",
    },
    {
      type: "p",
      text: "También hay una diferencia práctica de control: en n8n autoalojado los flujos son tuyos y exportables, con lo que la dependencia del proveedor es mucho menor. Poder salir importa más de lo que parece cuando llevas dos años de automatizaciones acumuladas.",
    },
    {
      type: "h2",
      text: "Cuándo Make es la respuesta razonable",
    },
    {
      type: "ul",
      items: [
        "No hay nadie que pueda encargarse de un servidor, ni intención de contratar ese mantenimiento.",
        "El volumen es bajo y no se espera que crezca mucho.",
        "Los datos que pasan por el flujo no son sensibles, o el tratamiento por un tercero está valorado y documentado.",
        "Hace falta tener algo funcionando esta semana.",
      ],
    },
    {
      type: "h2",
      text: "Cuándo n8n autoalojado",
    },
    {
      type: "ul",
      items: [
        "Los datos que pasan por el flujo son de clientes y preferís que no salgan de vuestra infraestructura.",
        "El volumen es alto o va a crecer, y el coste por operación se convertiría en un problema.",
        "La lógica es compleja y va a seguir creciendo.",
        "Hay quien pueda mantener el servidor, internamente o contratado.",
      ],
    },
    {
      type: "callout",
      title: "Cómo lo planteamos nosotros",
      text: "Por defecto n8n autoalojado, porque el servidor y los datos deberían ser del cliente. Pero es una herramienta dentro del stack, no el servicio: puedes ver [cómo y con qué reglas construimos en n8n](/automatizacion-n8n), incluidos los casos en los que no es la respuesta.",
    },
    {
      type: "h2",
      text: "Cuándo ninguna de las dos",
    },
    {
      type: "p",
      text: "Esta parte falta en casi todas las comparaciones. Hay tres situaciones en las que una plataforma de automatización visual no es la herramienta:",
    },
    {
      type: "ol",
      items: [
        "Ya existe un conector nativo entre las dos herramientas que quieres conectar. Meter una capa intermedia añade un punto de fallo sin aportar nada.",
        "La lógica es tan compleja que el flujo visual se vuelve ilegible. A partir de cierto punto, código bien estructurado es más mantenible que un diagrama de sesenta nodos.",
        "El volumen es muy alto con latencia crítica. Ahí hace falta código y una cola de verdad, no un orquestador visual.",
      ],
    },
    {
      type: "p",
      text: "Un proveedor que solo trabaja con una de estas plataformas va a recomendarla también donde no toca. Es la razón por la que conviene desconfiar de quien se presenta como agencia de una herramienta concreta: la respuesta correcta a veces es no usarla.",
    },
  ],
  related: [
    { label: "Automatización con n8n", href: "/automatizacion-n8n" },
    { label: "Automatización con IA", href: "/automatizacion-ia" },
    { label: "Automatización administrativa", href: "/automatizacion-administrativa" },
  ],
}
