import { LandingPage } from "@/components/LandingPage"
import { pageMetadata } from "@/lib/seo"
import { automatizacionCrm as landing } from "@/lib/landings/automatizacion-crm"

export const metadata = pageMetadata({
  title: landing.metaTitle,
  description: landing.metaDescription,
  path: landing.slug,
})

export default function Page() {
  return <LandingPage landing={landing} />
}
