export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string }

export type Article = {
  slug: string
  title: string
  /** H1 de la página, si difiere del title de la tarjeta */
  h1?: string
  description: string
  /** ISO 8601 */
  date: string
  updated?: string
  author: string
  category: string
  readingMinutes: number
  excerpt: string
  blocks: Block[]
  /** Enlaces a páginas comerciales — mínimo 2, spec §40 */
  related: { label: string; href: string }[]
}
