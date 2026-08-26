import type { Article } from "./types"
import { queEsLaAutomatizacionConIa } from "./que-es-la-automatizacion-con-ia"
import { procesosQueSePuedenAutomatizar } from "./procesos-que-se-pueden-automatizar"
import { chatbotVsAgenteDeIa } from "./chatbot-vs-agente-de-ia"
import { comoCalcularElRoiDeUnaAutomatizacion } from "./como-calcular-el-roi-de-una-automatizacion"
import { n8nVsMake } from "./n8n-vs-make"

/** Artículos publicados, del más reciente al más antiguo. */
export const articles: Article[] = [
  queEsLaAutomatizacionConIa,
  procesosQueSePuedenAutomatizar,
  chatbotVsAgenteDeIa,
  comoCalcularElRoiDeUnaAutomatizacion,
  n8nVsMake,
]

export const articleBySlug = new Map(
  articles.map((article) => [article.slug, article]),
)

export type { Article }
