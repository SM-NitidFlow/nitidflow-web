import { LandingPage } from "@/components/LandingPage"
import { pageMetadata } from "@/lib/seo"
import { iaParaEmpresas as landing } from "@/lib/landings/ia-para-empresas"

export const metadata = pageMetadata({
  title: landing.metaTitle,
  description: landing.metaDescription,
  path: landing.slug,
})

export default function Page() {
  return <LandingPage landing={landing} />
}
