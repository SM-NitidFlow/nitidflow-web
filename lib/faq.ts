export type FaqItem = { question: string; answer: string }

/** FAQ de la homepage — spec §18. Respuestas realistas, sin promesas absolutas. */
export const homeFaq: FaqItem[] = [
  {
    question: "¿Qué es la automatización con IA?",
    answer:
      "Es diseñar un sistema que ejecuta por sí solo tareas que hoy hace una persona a mano, usando modelos de IA para la parte que requiere interpretar texto, documentos o conversaciones. La diferencia con la automatización clásica es que no todo tiene que estar previsto en reglas: la IA puede leer una consulta escrita en lenguaje natural y decidir qué corresponde hacer con ella.",
  },
  {
    question: "¿Qué procesos se pueden automatizar con IA?",
    answer:
      "Los que son repetitivos, tienen un criterio identificable y ocurren muchas veces: entrada y cualificación de leads, clasificación y respuesta de correo, atención por WhatsApp, actualización del CRM, extracción de datos de facturas y albaranes, generación de informes y traspaso de información entre sistemas. Lo que no se automatiza bien es lo que exige juicio, negociación o asumir responsabilidad.",
  },
  {
    question: "¿Cuánto cuesta automatizar una empresa?",
    answer:
      "Depende del número de procesos, de cuántos sistemas haya que conectar y de si esos sistemas tienen API. Trabajamos por entregable: cada automatización se presupuesta como una pieza con un alcance definido, no por horas abiertas. En la primera conversación se puede acotar bastante bien si un proceso concreto merece la pena o no.",
  },
  {
    question: "¿Qué diferencia hay entre un chatbot y un agente de IA?",
    answer:
      "Un chatbot responde. Un agente, además de responder, consulta información en tus sistemas y ejecuta acciones: crea el contacto, actualiza la oportunidad, agenda la cita, deja registro. El chatbot termina en el mensaje; el agente termina en un cambio real dentro de tus herramientas.",
  },
  {
    question: "¿Se puede conectar la IA con mi CRM?",
    answer:
      "En la mayoría de casos sí, siempre que el CRM tenga API o permita webhooks. Trabajamos con el CRM que ya tengas: la automatización se apoya en él, no lo sustituye. Si el CRM es cerrado o muy antiguo, lo comprobamos antes de prometer nada.",
  },
  {
    question: "¿Podéis automatizar WhatsApp?",
    answer:
      "Sí, a través de la API oficial de WhatsApp Business. Eso implica cumplir las reglas de la plataforma en cuanto a plantillas, ventanas de respuesta y consentimiento, y contar con un número dedicado. No usamos soluciones que operen sobre WhatsApp sin autorización, porque acaban con el número bloqueado.",
  },
  {
    question: "¿Trabajáis con n8n?",
    answer:
      "Sí, es una de las piezas que usamos para orquestar workflows, normalmente autoalojado en infraestructura del cliente para que los datos no salgan de su control. Pero n8n es una herramienta dentro del stack, no el servicio: según el caso puede tener más sentido código propio, otra plataforma o una combinación.",
  },
  {
    question: "¿Necesito cambiar mis herramientas actuales?",
    answer:
      "Normalmente no, y solemos recomendar no hacerlo. Cambiar de CRM o de ERP al mismo tiempo que se automatiza multiplica el riesgo sin necesidad. Primero conectamos lo que hay; si alguna herramienta resulta ser el cuello de botella real, se plantea aparte.",
  },
  {
    question: "¿Cuánto tarda implementar una automatización?",
    answer:
      "Una automatización acotada sobre sistemas con API suele medirse en semanas, no en meses. Los plazos se alargan cuando hay que integrar sistemas sin API, cuando el proceso no está definido con claridad o cuando el acceso a las herramientas depende de terceros. Preferimos empezar por un proceso y ponerlo en producción antes de abrir el siguiente.",
  },
  {
    question: "¿La IA sustituye a mis empleados?",
    answer:
      "No es lo que construimos. Lo que se automatiza es la parte repetitiva: copiar datos, buscar información, redactar el mismo mensaje otra vez, acordarse del seguimiento. Las decisiones, la relación con el cliente y los casos que se salen del guion siguen siendo del equipo, y de hecho el sistema debe estar diseñado para pasárselos cuando toca.",
  },
]
