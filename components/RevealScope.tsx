"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const SELECTOR = ".reveal:not(.is-visible), .reveal-group:not(.is-visible)"
const MARGIN = 64

/**
 * Único observador de la web: marca como visibles los bloques .reveal y
 * .reveal-group cuando entran en viewport.
 *
 * El estado oculto sólo existe bajo @media (scripting: enabled), así que sin
 * JavaScript no se oculta nada — spec §4. Con JavaScript, el contenido no
 * puede quedarse invisible gracias a cuatro garantías:
 *
 *   1. Lo que ya está en pantalla se revela al montar, sin esperar a nada.
 *   2. IntersectionObserver revela el resto al entrar en viewport.
 *   3. Un respaldo por posición atiende scroll, resize y el momento en que la
 *      pestaña pasa a estar visible. IntersectionObserver no computa
 *      intersecciones mientras el documento no se renderiza (pestaña en
 *      segundo plano), y este respaldo cubre justo ese hueco.
 *   4. Si el observer no soporta o no entrega nada, se revela todo.
 */
export function RevealScope() {
  const pathname = usePathname()

  useEffect(() => {
    let pending = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR),
    )

    if (pending.length === 0) return

    const reveal = (el: HTMLElement) => el.classList.add("is-visible")

    /**
     * Revela todo lo que ya ha alcanzado el viewport según su posición real,
     * incluido lo que queda por encima: si el usuario ha llegado a mitad de
     * página por un ancla, esos bloques ya no deben quedar ocultos.
     */
    const revealVisibleByRect = () => {
      const height = window.innerHeight
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < height - MARGIN) {
          reveal(el)
          return false
        }
        return true
      })
      if (pending.length === 0) detach()
    }

    const revealAll = () => {
      pending.forEach(reveal)
      pending = []
      detach()
    }

    let observer: IntersectionObserver | null = null
    let throttle = 0
    let safety = 0

    // El throttle usa setTimeout y no requestAnimationFrame a propósito:
    // rAF no se ejecuta mientras el documento no se renderiza, que es
    // precisamente el caso que este respaldo tiene que cubrir.
    const onActivity = () => {
      if (throttle) return
      throttle = window.setTimeout(() => {
        throttle = 0
        revealVisibleByRect()
      }, 100)
    }

    const onVisibility = () => {
      if (document.visibilityState === "visible") revealVisibleByRect()
    }

    function detach() {
      observer?.disconnect()
      observer = null
      window.removeEventListener("scroll", onActivity)
      window.removeEventListener("resize", onActivity)
      document.removeEventListener("visibilitychange", onVisibility)
      if (throttle) window.clearTimeout(throttle)
      if (safety) window.clearTimeout(safety)
      throttle = 0
      safety = 0
    }

    // 1. Lo que ya se ve.
    revealVisibleByRect()
    if (pending.length === 0) return

    // 2. El resto, vía IntersectionObserver.
    if (typeof IntersectionObserver === "undefined") {
      revealAll()
      return
    }

    let callbacks = 0

    observer = new IntersectionObserver(
      (entries) => {
        callbacks += 1
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          reveal(el)
          observer?.unobserve(el)
          pending = pending.filter((item) => item !== el)
        }
        if (pending.length === 0) detach()
      },
      { rootMargin: `0px 0px -${MARGIN}px 0px`, threshold: 0.01 },
    )

    pending.forEach((el) => observer?.observe(el))

    // 3. Respaldo por posición.
    window.addEventListener("scroll", onActivity, { passive: true })
    window.addEventListener("resize", onActivity, { passive: true })
    document.addEventListener("visibilitychange", onVisibility)

    // 4. Si el observer no entrega ni el lote inicial, no dejamos nada oculto.
    safety = window.setTimeout(() => {
      if (callbacks === 0) revealAll()
    }, 1200)

    return detach
  }, [pathname])

  return null
}
