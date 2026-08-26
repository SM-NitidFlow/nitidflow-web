import { LandingPage } from "@/components/LandingPage"
import { pageMetadata } from "@/lib/seo"
import { ecommerceSector as landing } from "@/lib/sectores/ecommerce"

export const metadata = pageMetadata({
  title: landing.metaTitle,
  description: landing.metaDescription,
  path: landing.slug,
})

export default function Page() {
  return <LandingPage landing={landing} />
}
