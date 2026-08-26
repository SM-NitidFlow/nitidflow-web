import { LegalPage, LegalSection, Pendiente } from "@/components/LegalPage"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Aviso legal",
  description:
    "Aviso legal de Nitidflow: datos identificativos del titular del sitio, condiciones de uso y propiedad intelectual.",
  path: "/legal/aviso-legal",
  noindex: true,
})

export default function AvisoLegalPage() {
  return (
    <LegalPage
      title="Aviso legal"
      h1="Aviso legal"
      slug="/legal/aviso-legal"
      intro="Información exigida por la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE)."
    >
      <LegalSection title="1. Datos identificativos del titular">
        <p>
          En cumplimiento del artículo 10 de la LSSI-CE, se hacen constar los
          siguientes datos del titular de este sitio web:
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            <strong className="font-medium text-ink-soft">
              Denominación social:
            </strong>{" "}
            <Pendiente>razón social completa</Pendiente>
          </li>
          <li>
            <strong className="font-medium text-ink-soft">Nombre comercial:</strong>{" "}
            {site.name}
          </li>
          <li>
            <strong className="font-medium text-ink-soft">NIF / CIF:</strong>{" "}
            <Pendiente>NIF o CIF</Pendiente>
          </li>
          <li>
            <strong className="font-medium text-ink-soft">Domicilio social:</strong>{" "}
            <Pendiente>dirección completa</Pendiente>
          </li>
          <li>
            <strong className="font-medium text-ink-soft">
              Correo electrónico:
            </strong>{" "}
            {site.email}
          </li>
          <li>
            <strong className="font-medium text-ink-soft">
              Datos registrales:
            </strong>{" "}
            <Pendiente>
              registro mercantil, tomo, folio y hoja, si aplica
            </Pendiente>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Objeto y ámbito de aplicación">
        <p>
          Este aviso legal regula el acceso y la utilización del sitio web{" "}
          {site.url}. El acceso al sitio atribuye la condición de usuario e
          implica la aceptación de las condiciones recogidas en este documento.
        </p>
        <p>
          El titular se reserva el derecho a modificar en cualquier momento la
          presentación, configuración y contenidos del sitio, así como estas
          condiciones.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de uso">
        <p>
          El usuario se compromete a utilizar el sitio y sus contenidos de forma
          conforme a la ley, a este aviso legal y a la buena fe, absteniéndose
          de emplearlos con fines ilícitos o que puedan dañar los derechos e
          intereses de terceros, del titular o del propio sitio.
        </p>
        <p>
          Queda prohibido el uso de sistemas automatizados de extracción masiva
          de contenidos, así como cualquier actuación dirigida a interferir en
          el funcionamiento normal del sitio.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p>
          Los contenidos de este sitio —textos, diseño, código, estructura y
          elementos gráficos— son titularidad del titular del sitio o dispone de
          las licencias necesarias para su uso, y están protegidos por la
          normativa de propiedad intelectual e industrial.
        </p>
        <p>
          Las denominaciones de productos y servicios de terceros mencionadas en
          este sitio pertenecen a sus respectivos titulares. Su mención tiene
          carácter meramente informativo sobre compatibilidad técnica y no
          implica vinculación, patrocinio, certificación ni relación de
          asociación alguna con dichos titulares.
        </p>
      </LegalSection>

      <LegalSection title="5. Exclusión de responsabilidad">
        <p>
          La información publicada en este sitio tiene carácter general e
          informativo y no constituye asesoramiento profesional, jurídico,
          fiscal ni técnico para un caso concreto. Cualquier decisión basada en
          ella debe contrastarse con un profesional para la situación
          particular.
        </p>
        <p>
          El titular no responde de los daños derivados de un uso inadecuado del
          sitio ni de las interrupciones de servicio ajenas a su control, si
          bien adoptará medidas razonables para evitarlas.
        </p>
      </LegalSection>

      <LegalSection title="6. Enlaces a sitios de terceros">
        <p>
          Cuando este sitio incluya enlaces a páginas de terceros, el titular no
          asume responsabilidad sobre sus contenidos, políticas o prácticas.
        </p>
      </LegalSection>

      <LegalSection title="7. Legislación aplicable y jurisdicción">
        <p>
          Estas condiciones se rigen por la legislación española. Para la
          resolución de cualquier controversia serán competentes los juzgados y
          tribunales de <Pendiente>localidad</Pendiente>, salvo que la normativa
          aplicable en materia de consumo establezca otro fuero.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
