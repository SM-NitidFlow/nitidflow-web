import { Hero } from "@/components/Hero"
import { IntegrationCloud } from "@/components/IntegrationCloud"
import { ProblemSection } from "@/components/ProblemSection"
import { SolutionsSection } from "@/components/SolutionsSection"
import { AIAgentsSection } from "@/components/AIAgentsSection"
import { BeforeAfter } from "@/components/BeforeAfter"
import { ROISection } from "@/components/ROISection"
import { ProcessSteps } from "@/components/ProcessSteps"
import { UseCaseGrid } from "@/components/UseCaseGrid"
import { IntegrationsDiagram } from "@/components/IntegrationsDiagram"
import { CaseStudies } from "@/components/CaseStudies"
import { FAQ } from "@/components/FAQ"
import { FinalCTA } from "@/components/FinalCTA"
import { homeFaq } from "@/lib/faq"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Automatización con IA para Empresas | Nitidflow",
  description:
    "Automatizamos procesos, ventas, atención al cliente y operaciones con IA. Diseñamos agentes y workflows conectados con las herramientas que ya utiliza tu empresa.",
  path: "/",
  ogTitle: "Automatización con IA para empresas | Nitidflow",
  ogDescription:
    "Convierte procesos manuales en sistemas automatizados con IA.",
})

/** Orden exacto de secciones — spec §47 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <IntegrationCloud />
      <ProblemSection />
      <SolutionsSection />
      <AIAgentsSection />
      <BeforeAfter />
      <ROISection />
      <ProcessSteps />
      <UseCaseGrid />
      <IntegrationsDiagram />
      <CaseStudies />
      <FAQ items={homeFaq} />
      <FinalCTA />
    </>
  )
}
