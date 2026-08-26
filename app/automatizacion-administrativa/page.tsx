import { LandingPage } from "@/components/LandingPage"
import { pageMetadata } from "@/lib/seo"
import { automatizacionAdministrativa as landing } from "@/lib/landings/automatizacion-administrativa"

export const metadata = pageMetadata({
  title: landing.metaTitle,
  description: landing.metaDescription,
  path: landing.slug,
})

export default function Page() {
  return <LandingPage landing={landing} />
}
