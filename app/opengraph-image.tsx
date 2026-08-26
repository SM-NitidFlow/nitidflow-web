import { ImageResponse } from "next/og"

export const alt = "Nitidflow — Automatización con IA para empresas"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** Imagen Open Graph por defecto — spec §27 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fafaf9",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 300,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(255,90,31,0.20) 0%, rgba(250,250,249,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: "#090909",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
              color: "#090909",
            }}
          >
            NITIDFLOW
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Satori exige display explícito en cualquier div con más de un
              hijo, así que las dos líneas van como elementos separados. */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#090909",
            }}
          >
            <div>Automatización con IA</div>
            <div>para empresas</div>
          </div>
          <div style={{ fontSize: 30, color: "#666666", lineHeight: 1.4 }}>
            Convierte procesos manuales en sistemas automatizados.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            color: "#666666",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: "#ff5a1f",
            }}
          />
          Agentes · Workflows · Integraciones
        </div>
      </div>
    ),
    size,
  )
}
