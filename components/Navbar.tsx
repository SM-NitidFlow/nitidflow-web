"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { nav, primaryCta } from "@/lib/site"

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-[0.9375rem] font-bold tracking-[0.14em] text-ink"
      aria-label="Nitidflow — inicio"
    >
      <span
        aria-hidden="true"
        className="grid size-6 place-items-center rounded-md bg-ink text-[0.6875rem] font-bold tracking-normal text-white"
      >
        N
      </span>
      NITIDFLOW
    </Link>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Cierra el menú al navegar.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Bloquea el scroll del body mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-bg/80 backdrop-blur-md backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-pill px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-ink/[0.04] hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={primaryCta.href}
            className="group hidden items-center gap-2 rounded-pill bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:bg-ink-soft hover:shadow-lift sm:inline-flex"
          >
            {primaryCta.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            >
              →
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid size-10 place-items-center rounded-pill border border-line bg-surface text-ink transition-colors hover:border-ink/25 lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="size-[18px]" />
            ) : (
              <Menu aria-hidden="true" className="size-[18px]" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="menu-movil"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg px-5 pb-10 pt-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  className="block py-4 text-lg font-medium tracking-tight"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-b border-line">
              <Link href="/contacto" className="block py-4 text-lg font-medium tracking-tight">
                Contacto
              </Link>
            </li>
          </ul>

          <Link
            href={primaryCta.href}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-pill bg-ink px-5 py-3.5 text-base font-medium text-white"
          >
            {primaryCta.label}
            <span aria-hidden="true">→</span>
          </Link>
          <p className="mt-3 text-center text-xs text-muted">
            Sin compromiso · 30 min
          </p>
        </div>
      ) : null}
    </header>
  )
}
