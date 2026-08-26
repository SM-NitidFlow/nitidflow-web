import { LegalPage, LegalSection, Pendiente } from "@/components/LegalPage"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Política de privacidad",
  description:
    "Cómo trata Nitidflow los datos personales recogidos a través de este sitio web: finalidades, base jurídica, plazos, destinatarios y derechos.",
  path: "/legal/privacidad",
  noindex: true,
})

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Privacidad"
      h1="Política de privacidad"
      slug="/legal/privacidad"
      intro="Información sobre el tratamiento de datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD)."
    >
      <LegalSection title="1. Responsable del tratamiento">
        <ul className="flex flex-col gap-2">
          <li>
            <strong className="font-medium text-ink-soft">Responsable:</strong>{" "}
            <Pendiente>razón social completa</Pendiente>
          </li>
          <li>
            <strong className="font-medium text-ink-soft">NIF / CIF:</strong>{" "}
            <Pendiente>NIF o CIF</Pendiente>
          </li>
          <li>
            <strong className="font-medium text-ink-soft">Dirección:</strong>{" "}
            <Pendiente>dirección completa</Pendiente>
          </li>
          <li>
            <strong className="font-medium text-ink-soft">Contacto:</strong>{" "}
            {site.email}
          </li>
          <li>
            <strong className="font-medium text-ink-soft">
              Delegado de protección de datos:
            </strong>{" "}
            <Pendiente>
              datos del DPD si se ha designado, o indicar que no procede
            </Pendiente>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Qué datos recogemos y para qué">
        <p>
          A través del formulario de contacto de este sitio recogemos los datos
          que nos facilitas voluntariamente: nombre, correo electrónico y, de
          forma opcional, empresa, sitio web, la descripción del proceso que
          quieres automatizar y el número de personas implicadas.
        </p>
        <p>
          La finalidad es una sola: atender y responder a tu consulta, y
          mantener la comunicación necesaria para valorar si podemos ayudarte.
          No utilizamos estos datos para enviarte comunicaciones comerciales no
          solicitadas ni los cedemos a terceros con fines publicitarios.
        </p>
        <p>
          Ten en cuenta que la descripción del proceso es un campo libre: te
          recomendamos no incluir en él datos personales de terceros ni
          información confidencial de tu empresa. Para eso es mejor una
          conversación.
        </p>
      </LegalSection>

      <LegalSection title="3. Base jurídica">
        <p>
          El tratamiento se basa en tu consentimiento, que otorgas al marcar la
          casilla correspondiente antes de enviar el formulario (artículo 6.1.a
          del RGPD), y en el interés legítimo en atender las solicitudes de
          información recibidas y, en su caso, en la ejecución de una relación
          precontractual (artículo 6.1.b del RGPD).
        </p>
        <p>
          Puedes retirar tu consentimiento en cualquier momento escribiendo a{" "}
          {site.email}, sin que ello afecte a la licitud de los tratamientos
          realizados con anterioridad.
        </p>
      </LegalSection>

      <LegalSection title="4. Plazo de conservación">
        <p>
          Conservamos los datos durante el tiempo necesario para atender tu
          consulta y, si no llega a existir relación contractual, durante un
          plazo máximo de <Pendiente>indicar plazo, p. ej. 12 meses</Pendiente>{" "}
          desde el último contacto, transcurrido el cual se suprimen.
        </p>
        <p>
          Si llegamos a mantener una relación contractual, los datos se
          conservarán durante la vigencia de esa relación y, posteriormente,
          durante los plazos legales de prescripción de obligaciones fiscales,
          contables y de responsabilidad que resulten aplicables.
        </p>
      </LegalSection>

      <LegalSection title="5. Destinatarios y encargados del tratamiento">
        <p>
          No cedemos tus datos a terceros salvo obligación legal. Sí utilizamos
          proveedores que actúan como encargados del tratamiento y con los que
          existe el contrato exigido por el artículo 28 del RGPD:
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            <strong className="font-medium text-ink-soft">
              Proveedor de alojamiento web:
            </strong>{" "}
            <Pendiente>nombre del proveedor y ubicación de servidores</Pendiente>
          </li>
          <li>
            <strong className="font-medium text-ink-soft">
              Correo electrónico:
            </strong>{" "}
            <Pendiente>proveedor de correo</Pendiente>
          </li>
          <li>
            <strong className="font-medium text-ink-soft">
              Gestión de los mensajes del formulario:
            </strong>{" "}
            <Pendiente>
              indicar dónde se registran los mensajes recibidos
            </Pendiente>
          </li>
        </ul>
        <p>
          Si alguno de estos proveedores trata datos fuera del Espacio Económico
          Europeo, la transferencia se ampara en las garantías previstas en el
          capítulo V del RGPD. El detalle debe reflejarse en el registro de
          actividades de tratamiento:{" "}
          <Pendiente>completar según proveedores reales</Pendiente>.
        </p>
      </LegalSection>

      <LegalSection title="6. Tus derechos">
        <p>
          Puedes ejercer los derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
          {site.email}, indicando el derecho que deseas ejercer y acreditando tu
          identidad.
        </p>
        <p>
          También tienes derecho a presentar una reclamación ante la Agencia
          Española de Protección de Datos (www.aepd.es) si consideras que el
          tratamiento no se ajusta a la normativa vigente.
        </p>
      </LegalSection>

      <LegalSection title="7. Medidas de seguridad">
        <p>
          Aplicamos medidas técnicas y organizativas apropiadas para proteger
          los datos personales, incluyendo cifrado en tránsito, control de
          acceso restringido a las personas que necesitan tratar la información
          y custodia de credenciales en un gestor de contraseñas.
        </p>
        <p>
          Ninguna medida elimina por completo el riesgo. En caso de una
          violación de seguridad que pueda suponer un riesgo para tus derechos,
          actuaremos conforme a los artículos 33 y 34 del RGPD.
        </p>
      </LegalSection>

      <LegalSection title="8. Decisiones automatizadas">
        <p>
          Los datos que nos facilitas a través de este formulario no se someten
          a decisiones automatizadas ni a elaboración de perfiles con efectos
          jurídicos para ti. Tu mensaje lo lee una persona.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
