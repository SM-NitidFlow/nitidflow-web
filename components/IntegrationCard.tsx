import { BrandGlyph, hasBrandGlyph } from "./BrandGlyph"

/**
 * Card de herramienta compatible. Glifo monocromo, sin logotipos oficiales
 * y sin afirmar partnerships — spec §8 / §38.
 */
export function IntegrationCard({
  name,
  category,
}: {
  name: string
  category: string
}) {
  return (
    <div className="card-hover group flex items-center gap-3 rounded-card border border-line bg-surface px-3.5 py-3 shadow-soft">
      <span
        aria-hidden="true"
        className="grid size-8 shrink-0 place-items-center rounded-[0.625rem] border border-line bg-bg text-ink-soft transition-colors group-hover:text-accent"
      >
        {hasBrandGlyph(name) ? (
          <BrandGlyph name={name} />
        ) : (
          <span className="text-[0.6875rem] font-bold tracking-tight">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </span>
      <span className="min-w-0">
        {/* Sin truncate en el nombre: cortar una marca a media palabra
            («Google She…») queda peor que dejar que ocupe dos líneas. */}
        <span className="block text-sm font-medium leading-tight tracking-tight">
          {name}
        </span>
        <span className="mt-0.5 block truncate text-[0.6875rem] text-muted">
          {category}
        </span>
      </span>
    </div>
  )
}
