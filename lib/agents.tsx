import {
  Bot,
  CalendarCheck,
  CheckCircle2,
  Database,
  FileSearch,
  FileText,
  Inbox,
  MessageCircle,
  RotateCw,
  Search,
  Send,
  Sparkles,
  UserPlus,
} from "lucide-react"
import type { AgentCardData } from "@/components/AIAgentCard"

/**
 * Los tres agentes que se muestran en la home (§11) y en /agentes-ia (§46).
 * Una sola definición: la home y la landing leen de aquí.
 */
export const agents: AgentCardData[] = [
  {
    name: "AI Sales Agent",
    description:
      "Recibe el lead, lo interpreta, lo cualifica y deja el seguimiento en marcha.",
    status: "En ejecución",
    tools: ["CRM", "WhatsApp", "Email", "Calendario"],
    steps: [
      {
        icon: <UserPlus />,
        title: "Lead",
        description: "Entrada desde web, campaña o portal",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "Analiza",
        description: "Lee la consulta y extrae qué necesita",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Cualifica",
        description: "Aplica tus criterios, no una plantilla genérica",
        status: "complete",
      },
      {
        icon: <Database />,
        title: "CRM",
        description: "Contacto y oportunidad actualizados",
        status: "processing",
      },
      {
        icon: <MessageCircle />,
        title: "WhatsApp",
        description: "Primer contacto con contexto",
        status: "waiting",
      },
      {
        icon: <CalendarCheck />,
        title: "Reunión",
        description: "Hueco propuesto y confirmado",
        status: "waiting",
      },
    ],
  },
  {
    name: "AI Customer Agent",
    description:
      "Atiende la conversación, consulta la información real y escala a una persona cuando toca.",
    status: "En ejecución",
    tools: ["WhatsApp", "Base de conocimiento", "CRM", "Helpdesk"],
    steps: [
      {
        icon: <MessageCircle />,
        title: "Cliente escribe",
        description: "WhatsApp, email o chat de la web",
        status: "complete",
      },
      {
        icon: <Sparkles />,
        title: "Comprende",
        description: "Identifica intención y datos que faltan",
        status: "complete",
      },
      {
        icon: <Search />,
        title: "Consulta",
        description: "Busca en tus sistemas, no improvisa",
        status: "processing",
      },
      {
        icon: <Send />,
        title: "Responde",
        description: "Contesta o deriva a la persona adecuada",
        status: "waiting",
      },
      {
        icon: <Database />,
        title: "Registra",
        description: "Deja la conversación trazada en el CRM",
        status: "waiting",
      },
    ],
  },
  {
    name: "AI Operations Agent",
    description:
      "Convierte documentos y correos en datos estructurados dentro de tus sistemas.",
    status: "En ejecución",
    tools: ["Email", "Almacenamiento", "ERP", "Hoja de cálculo"],
    steps: [
      {
        icon: <Inbox />,
        title: "Documento",
        description: "Llega por email o carpeta compartida",
        status: "complete",
      },
      {
        icon: <FileSearch />,
        title: "Extrae",
        description: "Campos clave leídos del documento",
        status: "complete",
      },
      {
        icon: <CheckCircle2 />,
        title: "Valida",
        description: "Comprueba reglas y avisa si algo no cuadra",
        status: "processing",
      },
      {
        icon: <Database />,
        title: "Actualiza",
        description: "Escribe en el sistema que manda sobre ese dato",
        status: "waiting",
      },
      {
        icon: <FileText />,
        title: "Deja registro",
        description: "Traza de qué se hizo y con qué datos",
        status: "waiting",
      },
    ],
  },
]

/** Workflow ANTES/DESPUÉS — spec §12 */
export const manualFlow = [
  "Entra un lead",
  "Alguien revisa el email",
  "Copia la información a mano",
  "Busca datos en otro sistema",
  "Actualiza el CRM",
  "Escribe el WhatsApp",
  "Se acuerda (o no) de hacer seguimiento",
]

export const automatedFlow = [
  {
    icon: <Inbox />,
    title: "Entra un lead",
    description: "Web, campaña o portal",
    status: "complete" as const,
  },
  {
    icon: <Bot />,
    title: "Agente IA",
    description: "Interpreta, cualifica y decide el siguiente paso",
    status: "complete" as const,
  },
  {
    icon: <Database />,
    title: "CRM + WhatsApp",
    description: "Datos registrados y primer contacto enviado",
    status: "processing" as const,
  },
  {
    icon: <RotateCw />,
    title: "Follow-up",
    description: "Programado si no hay respuesta",
    status: "waiting" as const,
  },
  {
    icon: <CalendarCheck />,
    title: "Reunión",
    description: "Agendada en el calendario del equipo",
    status: "waiting" as const,
  },
]
