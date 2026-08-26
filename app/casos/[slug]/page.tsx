import { notFound } from "next/navigation"
import { CasePage } from "@/components/CasePage"
import { casoBySlug, casos } from "@/lib/casos"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return casos.map((caso) => ({ slug: caso.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caso = casoBySlug.get(slug)

  if (!caso) {
    return pageMetadata({
      title: "Caso no encontrado",
      description: "Este caso no existe o ha cambiado de dirección.",
      path: `/casos/${slug}`,
      noindex: true,
    })
  }

  return pageMetadata({
    title: caso.metaTitle,
    description: caso.metaDescription,
    path: `/casos/${caso.slug}`,
    // Un caso con nombre de cliente no se indexa hasta que el cliente lo
    // autoriza. La página es accesible; simplemente no entra en buscadores.
    noindex: !caso.permisoCliente,
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caso = casoBySlug.get(slug)

  if (!caso) notFound()

  return <CasePage caso={caso} />
}
