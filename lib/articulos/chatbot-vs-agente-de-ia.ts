import type { Article } from "./types"

export const chatbotVsAgenteDeIa: Article = {
  slug: "chatbot-vs-agente-de-ia",
  title: "Chatbot vs agente de IA: diferencias que sí importan",
  description:
    "La diferencia no está en la conversación: está en si al final del proceso ha cambiado algo en tus sistemas. Y en cómo se equivoca cada uno.",
  date: "2026-08-24",
  author: "Nitidflow",
  category: "Agentes de IA",
  readingMinutes: 7,
  excerpt:
    "Un chatbot mal hecho da una respuesta mala. Un agente mal hecho ejecuta una acción mala. Esa asimetría es lo que cambia el diseño.",
  blocks: [
    {
      type: "p",
      text: "«Chatbot» y «agente de IA» se usan casi como sinónimos en material comercial, y eso genera bastante confusión en decisiones de compra. La distinción no es de marketing: cambia lo que el sistema puede hacer, lo que puede romper y cómo hay que diseñarlo.",
    },
    {
      type: "h2",
      text: "La diferencia en una frase",
    },
    {
      type: "quote",
      text: "Un chatbot produce texto. Un agente ejecuta acciones en tus sistemas.",
    },
    {
      type: "p",
      text: "Un chatbot recibe un mensaje y devuelve otro. Puede ser muy bueno redactando, puede tener acceso a documentación para responder mejor, y puede sonar completamente natural. Pero cuando termina la conversación, en tu CRM no ha cambiado nada, la cita no está agendada y el contacto no existe.",
    },
    {
      type: "p",
      text: "Un agente parte del otro extremo: de la acción que hay que ejecutar. Tiene herramientas conectadas —consultar el CRM, crear un contacto, buscar un pedido, agendar en el calendario— y la conversación es solo la entrada. Al terminar, algo ha cambiado en un sistema real.",
    },
    {
      type: "h2",
      text: "Por qué tantos chatbots se abandonan",
    },
    {
      type: "p",
      text: "El patrón se repite: se implanta un chatbot, funciona unas semanas, y a los tres meses nadie lo usa. La razón habitual no es que respondiera mal. Es que responder no era el problema.",
    },
    {
      type: "p",
      text: "Si un cliente pregunta por el estado de su pedido y el bot contesta «puedes consultarlo en tu área de cliente», técnicamente ha respondido. Pero el cliente vuelve a escribir pidiendo hablar con una persona, porque lo que quería era el dato. Y la persona sigue teniendo que abrir el sistema y buscarlo.",
    },
    {
      type: "p",
      text: "El otro patrón es peor: el chatbot que atiende bien pero no registra nada. La conversación se resuelve y desaparece. Nadie sabe qué se preguntó ni qué se contestó, y el equipo sigue teniendo que transcribir a mano lo que pasó.",
    },
    {
      type: "h2",
      text: "La asimetría del error",
    },
    {
      type: "p",
      text: "Aquí está el punto que cambia el diseño. Un chatbot que se equivoca da una respuesta pobre: molesto, recuperable. Un agente que se equivoca ejecuta una acción incorrecta: crea un duplicado, cierra una incidencia que no estaba resuelta, agenda a la persona equivocada, o manda un mensaje a quien no debía.",
    },
    {
      type: "p",
      text: "La consecuencia práctica es que en un agente lo importante no es la autonomía, son los límites. Un agente útil no es el que puede hacer de todo: es el que tiene un objetivo estrecho, herramientas explícitas y un punto claro donde para.",
    },
    {
      type: "callout",
      title: "Regla de diseño",
      text: "Lecturas y consultas: libres. Escrituras: acotadas a operaciones concretas. Acciones con consecuencia —enviar una propuesta, emitir una factura, cerrar un caso—: validación humana o regla explícita. Está desarrollado en [cómo acotamos un agente](/agentes-ia).",
    },
    {
      type: "h2",
      text: "Cuándo basta con un chatbot",
    },
    {
      type: "p",
      text: "No siempre hace falta un agente, y decir lo contrario sería vender de más. Un chatbot es suficiente cuando:",
    },
    {
      type: "ul",
      items: [
        "Las preguntas se responden con información estática: horarios, condiciones, procedimientos, precios de catálogo.",
        "No hay que consultar el estado de nada concreto de ese cliente.",
        "No hace falta que quede registro estructurado de la conversación.",
        "El volumen es bajo y el traspaso a una persona es inmediato.",
      ],
    },
    {
      type: "p",
      text: "En cambio hace falta un agente cuando la respuesta útil depende de datos del cliente, cuando después de responder hay que hacer algo, o cuando el registro de lo ocurrido tiene valor. En la práctica, en atención al cliente de empresas con operación real, casi siempre es el segundo caso.",
    },
    {
      type: "h2",
      text: "Lo que ninguno de los dos debería hacer",
    },
    {
      type: "p",
      text: "Con independencia de la etiqueta, hay decisiones que no se delegan a un sistema conversacional: negociar precios o condiciones, gestionar una reclamación de un cliente enfadado, comunicar resultados médicos, decidir sobre devoluciones de dinero, o resolver cualquier cosa con consecuencia legal.",
    },
    {
      type: "p",
      text: "Y hay una condición que sí es común a los dos: el cliente debe saber que está hablando con un sistema. Ocultarlo sale mal siempre, porque en el momento en que lo intuye pierde confianza en todo lo anterior. Además, la normativa europea de IA impone obligaciones de transparencia precisamente en este punto.",
    },
    {
      type: "h2",
      text: "Cómo saber qué te están vendiendo",
    },
    {
      type: "p",
      text: "Tres preguntas resuelven la ambigüedad de casi cualquier propuesta comercial:",
    },
    {
      type: "ol",
      items: [
        "¿A qué sistemas se conecta y qué operaciones concretas puede ejecutar en cada uno? Si la respuesta es vaga, es un chatbot.",
        "¿Qué queda registrado después de cada conversación, y dónde? Si no queda nada, alguien seguirá transcribiendo a mano.",
        "¿En qué casos deja de intentarlo y pasa a una persona? Si no hay una respuesta clara, el diseño de límites no existe.",
      ],
    },
    {
      type: "p",
      text: "La tercera es la que más información da. Un proveedor que ha pensado el problema tiene una lista concreta de situaciones en las que su sistema se retira. Uno que no la tiene, todavía no ha llegado a la parte difícil.",
    },
  ],
  related: [
    { label: "Agentes de IA", href: "/agentes-ia" },
    { label: "Atención al cliente", href: "/automatizacion-atencion-cliente" },
    { label: "Automatización de WhatsApp", href: "/automatizacion-whatsapp" },
  ],
}
