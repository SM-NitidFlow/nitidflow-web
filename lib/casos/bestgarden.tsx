import {
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileText,
  Ruler,
  Send,
  SlidersHorizontal,
} from "lucide-react"
import type { Caso } from "./types"

/**
 * Caso BestGarden.
 *
 * Todo lo que hay aquí es comprobable contra el sistema en producción. No
 * hay horas ahorradas ni impacto económico porque no existe medición del
 * proceso anterior y el histórico del sistema es de semanas: inventar esas
 * cifras es exactamente lo que la página de casos promete no hacer.
 *
 * Deliberadamente NO se publica: estructura de costes, márgenes, tarifas del
 * catálogo, identificadores de webhooks, bases o tablas, ni ningún dato de
 * clientes finales. Eso vive en el runbook interno y publicarlo sería
 * entregar el mapa.
 */
export const bestgarden: Caso = {
  slug: "bestgarden",
  cliente: "BestGarden 2020, S.L.",
  sector: "Instalación de césped artificial · Málaga",
  // Pendiente: cambiar a true cuando el cliente autorice publicarlo con su nombre.
  permisoCliente: false,
  metaTitle: "Caso: de calcular presupuestos a mano a un flujo que termina registrado",
  metaDescription:
    "Los comerciales de una instaladora de césped artificial calculaban el precio en obra consultando tablas, y la oferta enviada se guardaba a mano. Ahora es un único flujo.",
  h1: "De hacer los números a mano a un flujo que termina registrado",
  subheadline:
    "Los comerciales calculaban el precio en obra, a mano, consultando tablas. Después pasaba tiempo hasta que la oferta salía, y alguien tenía que guardarla a mano. Ahora es un solo flujo: datos, precio, PDF, envío y registro.",
  excerpt:
    "De calcular a mano contra tablas de precios a un único flujo que va de la medición en obra al registro de la oferta, con revisión humana antes de que nada salga al cliente.",
  enProduccionDesde: "agosto de 2026",

  problema: {
    title: "El comercial hacía la aritmética a mano, con el cliente delante.",
    body: [
      "Presupuestar una instalación de césped artificial no es poner un precio por metro cuadrado. Depende de la superficie, del tipo de instalación, del modelo de césped, de los metros de banda y los sacos de arena que salen de ese grosor, de los viajes de grava, de los kilómetros hasta la obra y de si el acceso obliga a subir el material a mano.",
      "Toda esa lógica existía y era buena: la empresa la había afinado durante años y estaba recogida en tablas de precios. El problema era cómo se ejecutaba. El comercial calculaba en obra, sobre la marcha, consultando esas tablas y encadenando cuentas mientras el cliente esperaba una cifra.",
      "Eso produce tres cosas. Lentitud, porque encadenar ese cálculo a mano no es rápido. Dispersión, porque cada comercial aproxima distinto y el margen real de la obra no se conoce hasta el cierre. Y un flujo que no termina: después de calcular todavía pasaba tiempo hasta que la oferta salía, y alguien tenía que guardar a mano el registro de lo enviado.",
      "Ese último punto es el que más se subestima. Un proceso que depende de que alguien se acuerde de anotar lo que hizo pierde información siempre, y la pierde justo en la parte que después hace falta para decidir.",
    ],
  },

  antes: {
    title: "Cómo se hacía",
    lead: "Según el relato del propio equipo comercial. Ninguno de estos pasos era absurdo: cada uno resolvía algo. El problema era que ninguna herramienta los unía, así que la cadena se sostenía sobre la memoria de las personas.",
    pasos: [
      "El comercial visita la obra y toma medidas",
      "Calcula el precio allí mismo, a mano, consultando las tablas",
      "Encadena cuentas mientras el cliente espera la cifra",
      "Pasa tiempo hasta que la oferta se emite de verdad",
      "Se monta el documento de oferta a mano",
      "Se envía al cliente",
      "Alguien guarda a mano el registro de la oferta enviada",
    ],
  },

  ahora: {
    title: "Cómo funciona ahora",
    lead: "El mismo criterio de siempre, pero unificado en un solo flujo. La diferencia no es sólo que calcule más rápido: es que el flujo no se interrumpe entre calcular, emitir, enviar y registrar.",
    label: "presupuesto-en-obra",
    steps: [
      {
        icon: <Ruler />,
        title: "Datos de la obra",
        description: "Superficie, tipo, modelo, localidad y acceso",
        status: "complete",
      },
      {
        icon: <Database />,
        title: "Catálogo en vivo",
        description: "Precios de compra leídos del sistema, no de una copia",
        status: "complete",
      },
      {
        icon: <SlidersHorizontal />,
        title: "Coste y escalera de precios",
        description: "Cinco niveles según el margen que deja cada uno",
        status: "complete",
      },
      {
        icon: <FileText />,
        title: "PDF en pantalla",
        description: "La oferta se previsualiza; todavía no sale nada",
        status: "processing",
      },
      {
        icon: <CheckCircle2 />,
        title: "El comercial decide",
        description: "Confirma, y marca si va también al cliente final",
        status: "waiting",
      },
      {
        icon: <Send />,
        title: "Se envía",
        description: "Al comercial siempre; al cliente sólo si se marcó",
        status: "waiting",
      },
      {
        icon: <ClipboardCheck />,
        title: "Queda registrada",
        description: "Fila en el CRM con su economía y su desenlace",
        status: "waiting",
      },
    ],
  },

  decisiones: {
    title: "Las decisiones que sostienen el sistema",
    lead: "Ninguna es técnicamente llamativa. Son las que hacen que un año después siga funcionando y que nadie se lleve un disgusto.",
    items: [
      {
        title: "Un solo flujo, no cinco herramientas encadenadas a mano",
        description:
          "Calcular, emitir, enviar y registrar eran cuatro momentos separados que dependían de que alguien pasara de uno al siguiente. Ahora son un flujo. Ahí está la mayor parte del tiempo recuperado: no en que el cálculo sea rápido, sino en que nadie tiene que empujar la cadena.",
      },
      {
        title: "Generar y enviar son dos pasos distintos",
        description:
          "La herramienta genera el PDF y lo muestra. No lo envía. Enviar es una acción aparte, y que llegue al cliente final requiere marcarlo explícitamente. Un presupuesto con un precio mal puesto que ya salió no se recoge.",
      },
      {
        title: "Un único sitio manda sobre el precio de compra",
        description:
          "El catálogo de céspedes vive en un solo sistema y el motor de cálculo lo lee en cada consulta. No hay una segunda copia dentro del código que alguien tenga que acordarse de actualizar.",
      },
      {
        title: "Pero con respaldo, porque la obra no espera",
        description:
          "Si ese sistema no responde, el motor usa la última tarifa conocida y lo deja anotado en la respuesta. Un comercial en obra sin cobertura decente no puede quedarse sin poder presupuestar.",
      },
      {
        title: "El ERP no se ha tocado",
        description:
          "La facturación sigue donde estaba. La oferta lleva su propia referencia y el correo interno le dice al comercial exactamente dónde copiarla en el ERP. No se intentó sustituir un sistema que funciona.",
      },
      {
        title: "El precio se presenta como una escalera, no como un número",
        description:
          "El comercial ve varios precios ordenados por el margen que dejan. Puede bajar, y ve en el momento lo que cuesta bajar. Antes esa consecuencia aparecía en el cierre del mes.",
      },
      {
        title: "El flujo termina en el CRM, no en el correo enviado",
        description:
          "Antes había que guardar a mano la oferta enviada, y lo que se guarda a mano se pierde. Ahora el registro es el último paso del propio flujo: superficie, tipo, modelo, nivel elegido, descuento aplicado, coste directo, margen y un campo de desenlace. Es la única forma de que dentro de unos meses se pueda medir qué se gana y a qué precio.",
      },
      {
        title: "Despliegue por git, con vuelta atrás en segundos",
        description:
          "La herramienta se despliega con cada cambio confirmado en el repositorio. Si algo sale mal, se republica la versión anterior. No se arrastra nada a mano.",
      },
    ],
  },

  herramientas: [
    { nombre: "n8n", papel: "Motor de cálculo y orquestación, autoalojado" },
    {
      nombre: "Airtable",
      papel: "Catálogo de producto y CRM: el registro de cada oferta",
    },
    { nombre: "Gotenberg", papel: "Generación del PDF de la oferta" },
    { nombre: "Netlify", papel: "La herramienta web, desplegada por git" },
    { nombre: "SMTP propio", papel: "Envío de la oferta al comercial y al cliente" },
    { nombre: "ERP existente", papel: "Se mantiene: la facturación no se ha movido" },
  ],

  medible: {
    title: "Qué se puede afirmar hoy",
    lead: "Sólo lo comprobable contra el sistema en producción. Nada estimado.",
    items: [
      {
        title: "En producción desde agosto de 2026",
        description:
          "El equipo comercial la usa en obra. No es un piloto en paralelo al proceso antiguo.",
      },
      {
        title: "El cálculo cuadra al céntimo con el Excel del cliente",
        description:
          "Se verificó contra su hoja antes de dar el sistema por bueno. Esa comprobación es la razón de que el equipo se fíe del número.",
      },
      {
        title: "El precio ya no depende de quién lo calcule",
        description:
          "La misma obra da el mismo coste directo con independencia del comercial que la presupueste.",
      },
      {
        title: "El registro ya no depende de que alguien se acuerde",
        description:
          "Antes guardar la oferta enviada era un paso manual y, por tanto, un paso que a veces no ocurría. Ahora forma parte del flujo: si la oferta se envía, queda registrada.",
      },
      {
        title: "El comercial ya no hace aritmética delante del cliente",
        description:
          "El encadenado de cuentas contra las tablas de precios desapareció del momento de la venta.",
      },
      {
        title: "Los datos y el servidor son del cliente",
        description:
          "La orquestación corre en su infraestructura. No hay una plataforma nuestra por la que pasen los datos de sus clientes.",
      },
    ],
  },

  pendiente: {
    title: "Qué no podemos afirmar todavía",
    lead: "Esto es lo que faltaría para que este caso tuviera cifras, y por qué no las tiene.",
    items: [
      "Horas ahorradas por oferta: sabemos por el equipo que el proceso manual consumía bastante tiempo, pero eso es un relato, no una medición. Nadie cronometró el proceso anterior, así que cualquier porcentaje que publicáramos estaría inventado.",
      "Impacto en tasa de cierre: el histórico del sistema son semanas, no meses. Con esa muestra, cualquier conversión que publicáramos no significaría nada.",
      "Efecto sobre el margen medio: el campo está registrándose desde el primer día, pero hace falta un ciclo comercial completo para leerlo.",
      "Cuando esos números existan y sean defendibles, se añaden aquí. Hasta entonces, lo que se puede evaluar es el sistema y las decisiones de diseño.",
    ],
  },

  incidencia: {
    title: "Lo que salió mal",
    body: [
      "Un despliegue se dio por bueno sin completar la verificación en producción: generar una oferta real desde el móvil y comprobar que la fila registrada trae todos los campos económicos. Faltaba uno.",
      "Costó dos días de diagnóstico. El fallo no estaba en el cálculo ni en el PDF, sino en un campo que dejó de llegar al registro, y eso no se ve mirando la pantalla del comercial: sólo se ve mirando la fila guardada.",
      "De ahí salió la regla que hoy está escrita en el repositorio: un despliegue no está terminado hasta que alguien genera una oferta de prueba en producción y comprueba la fila. El paso no es opcional, y está documentado con el motivo, que es lo que hace que no se vuelva a saltar.",
    ],
  },

  related: [
    {
      label: "Automatización de ventas",
      href: "/automatizacion-ventas",
      description: "El proceso comercial completo: entrada, cualificación y seguimiento.",
    },
    {
      label: "Automatización con n8n",
      href: "/automatizacion-n8n",
      description: "La capa de orquestación, autoalojada y con los datos dentro.",
    },
    {
      label: "Automatización administrativa",
      href: "/automatizacion-administrativa",
      description: "Documentos, datos y registro sin que nadie los teclee dos veces.",
    },
  ],
}
