import type { ReactNode } from "react"

export function Badge({
  children,
  tone = "light",
}: {
  children: ReactNode
  tone?: "light" | "dark"
}) {
  const cls =
    tone === "dark"
      ? "border-dark-line bg-white/5 text-white/85"
      : "border-line bg-surface text-ink-soft shadow-soft"

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill border px-3.5 py-1.5 text-[0.8125rem] font-medium ${cls}`}
    >
      <span aria-hidden="true" className="text-accent">
        ✦
      </span>
      {children}
    </span>
  )
}
