import { LegalPage, LegalSection, Pendiente } from "@/components/LegalPage"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Política de cookies",
  description:
    "Qué cookies utiliza este sitio web y cómo gestionarlas. En su estado actual el sitio no instala cookies de analítica ni publicitarias.",
  path: "/legal/cookies",
  noindex: true,
})

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      h1="Política de cookies"
      slug="/legal/cookies"
      intro="Información sobre el uso de cookies y tecnologías similares conforme al artículo 22.2 de la LSSI-CE y a las directrices de la Agencia Española de Protección de Datos."
    >
      <LegalSection title="1. Situación actual de este sitio">
        <p>
          En su configuración actual, este sitio web{" "}
          <strong className="font-medium text-ink-soft">
            no instala cookies de analítica, de publicidad ni de seguimiento de
            terceros
          </strong>
          . Tampoco utiliza píxeles de redes sociales ni servicios de
          medición de audiencia.
        </p>
        <p>
          Por ese motivo no se muestra un banner de consentimiento: no hay
          tratamiento que requiera tu autorización previa. Si en el futuro se
          incorpora cualquier herramienta que instale cookies no exentas, se
          habilitará el mecanismo de consentimiento correspondiente antes de su
          activación y esta política se actualizará.
        </p>
      </LegalSection>

      <LegalSection title="2. Qué es una cookie">
        <p>
          Una cookie es un pequeño fichero que un sitio web almacena en tu
          dispositivo al visitarlo. Permite recordar información sobre tu
          navegación. La normativa distingue entre cookies exentas de
          consentimiento —las estrictamente necesarias para prestar el servicio
          que has solicitado— y las que requieren tu consentimiento previo,
          como las de analítica o publicidad.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies y almacenamiento técnico utilizados">
        <p>
          El sitio puede emplear almacenamiento estrictamente técnico y de
          duración limitada para el correcto funcionamiento de la navegación y
          para la protección frente a envíos automatizados del formulario. Este
          uso está exento de consentimiento conforme al artículo 22.2 de la
          LSSI-CE.
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            <strong className="font-medium text-ink-soft">Finalidad:</strong>{" "}
            funcionamiento de la navegación y seguridad del formulario de
            contacto.
          </li>
          <li>
            <strong className="font-medium text-ink-soft">Titularidad:</strong>{" "}
            propia.
          </li>
          <li>
            <strong className="font-medium text-ink-soft">Duración:</strong>{" "}
            de sesión.
          </li>
        </ul>
        <p>
          Si el proveedor de alojamiento incorpora cookies técnicas propias, se
          detallarán aquí:{" "}
          <Pendiente>
            revisar con el proveedor de alojamiento y completar la tabla
          </Pendiente>
          .
        </p>
      </LegalSection>

      <LegalSection title="4. Cómo gestionar o eliminar cookies">
        <p>
          Puedes configurar tu navegador para bloquear o eliminar las cookies
          almacenadas. Todos los navegadores habituales —Chrome, Safari,
          Firefox, Edge— ofrecen esta opción en sus ajustes de privacidad.
        </p>
        <p>
          Bloquear el almacenamiento técnico puede afectar al funcionamiento del
          formulario de contacto, aunque el resto del contenido del sitio
          seguirá siendo accesible con normalidad.
        </p>
      </LegalSection>

      <LegalSection title="5. Fuentes tipográficas">
        <p>
          Las fuentes tipográficas se sirven desde el propio dominio de este
          sitio y no desde un servicio externo, de modo que su carga no implica
          comunicación de tu dirección IP a terceros.
        </p>
      </LegalSection>

      <LegalSection title="6. Consultas">
        <p>
          Para cualquier duda sobre esta política puedes escribir a {site.email}.
          El tratamiento de datos personales se detalla en la política de
          privacidad.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
