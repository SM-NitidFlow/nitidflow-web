import {
  Bot,
  Database,
  FileStack,
  Headphones,
  Megaphone,
  MessageCircle,
  ReceiptText,
  ShoppingCart,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { BrandGlyph, hasBrandGlyph } from "@/components/BrandGlyph"

/** Mapa de iconos para datos declarados como texto en lib/site.ts. */
export const icons: Record<string, LucideIcon> = {
  Bot,
  Database,
  FileStack,
  Headphones,
  Megaphone,
  MessageCircle,
  ReceiptText,
  ShoppingCart,
  TrendingUp,
  Workflow,
}

/**
 * Resuelve un nombre a su glifo. Si el nombre corresponde a una marca
 * (WhatsApp, n8n…) usa su glifo monocromo; si no, un icono de lucide.
 */
export function Icon({
  name,
  className = "size-[18px]",
}: {
  name: string
  className?: string
}) {
  if (hasBrandGlyph(name)) {
    return <BrandGlyph name={name} className={className} />
  }

  const Component = icons[name] ?? Workflow
  return <Component aria-hidden="true" className={className} />
}
