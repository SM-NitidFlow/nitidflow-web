import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { JsonLd } from "@/components/JsonLd"
import { RevealScope } from "@/components/RevealScope"
import { organizationSchema, websiteSchema } from "@/lib/schema"
import { SITE_URL, site } from "@/lib/site"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Automatización con IA para Empresas | Nitidflow",
    template: "%s | Nitidflow",
  },
  description:
    "Automatizamos procesos, ventas, atención al cliente y operaciones con IA. Diseñamos agentes y workflows conectados con las herramientas que ya utiliza tu empresa.",
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

export const viewport: Viewport = {
  themeColor: "#fafaf9",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />

        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Saltar al contenido
        </a>

        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <RevealScope />
      </body>
    </html>
  )
}
