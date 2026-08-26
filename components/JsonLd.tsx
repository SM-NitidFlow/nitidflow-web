/**
 * Inyecta JSON-LD. El objeto se serializa en servidor; se escapa "<"
 * para evitar cerrar el script prematuramente.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c")

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
