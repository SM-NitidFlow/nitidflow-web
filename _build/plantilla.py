# Generado desde index.html por _build/extraer.py — no editar a mano.
FONDO = """<div class="bg" aria-hidden="true">
  <div class="bg__media"
       data-silk
       data-colors="#3d7ba8,#cfe2f0,#f4f1ec"
       data-bg="#071522"
       data-speed="0.35"
       data-layers="4"
       data-amplitude="0.3"
       data-frequency="2"
       data-angle="-12"
       data-softness="0.6"
       data-sheen="0.6"
       data-grain="0.04"></div>
  <div class="bg__scrim"></div>
  <div class="bg__vignette"></div>
</div>

<!-- ============ menú superior transparente ============ -->
"""

NAV = """<header class="nav" id="nav">
  <div class="nav__inner">
    <a class="nav__brand" href="#top" aria-label="Nitidflow — inicio">
      <span class="logoclip logoclip--sm"><picture><source srcset="/assets/logo.webp?v=20260925" type="image/webp"><img src="/assets/logo.png?v=20260925" alt="Nitidflow" width="660" height="130"></picture></span>
    </a>

    <nav class="nav__links" id="nav-links" aria-label="Principal">
      <a href="#services">Servicios</a>
      <a href="#how-it-works">Cómo funciona</a>
      <a href="#automations">Automatizaciones</a>
      <a href="#case-studies">Casos de éxito</a>
      <a href="#faq">FAQ</a>
      <span class="lang" role="group" aria-label="Idioma">
        <a href="/en/" data-lang="en" hreflang="en">EN</a>
        <span class="lang__on" aria-current="true">ES</span>
      </span>
      <a class="btn btn--solid btn--sm nav__cta" href="https://cal.com/smnitidflow" target="_blank" rel="noopener"
         data-cal-link="smnitidflow" data-cal-namespace="audit">Auditoría gratuita</a>
    </nav>

    <button class="nav__toggle" id="nav-toggle" type="button"
            aria-expanded="false" aria-controls="nav-links" aria-label="Abrir menú">
      <span class="nav__bar"></span><span class="nav__bar"></span><span class="nav__bar"></span>
    </button>
  </div>
</header>"""

CTA = """<section class="section section--contact" id="book-audit">
    <div class="panel contact">
      <div class="contact__copy">
        <p class="eyebrow">AUDITORÍA DE AUTOMATIZACIÓN GRATUITA</p>
        <h2>¿Listo para automatizar tu negocio?</h2>
        <p class="contact__lede">Reserva hoy tu auditoría de automatización gratuita. En 30 minutos te enseñamos exactamente dónde está perdiendo tiempo tu negocio &mdash; y cuánto vale recuperarlo.</p>

        <ul class="ticks">
          <li>Sin compromiso</li>
          <li>Llamada de 30 minutos</li>
          <li>Conclusiones a medida</li>
        </ul>

        <a class="sched" href="https://cal.com/smnitidflow" target="_blank" rel="noopener"
           data-cal-link="smnitidflow" data-cal-namespace="audit">
          <p class="sched__url">cal.com/smnitidflow</p>
          <p class="sched__title">Auditoría de automatización gratuita</p>
          <p class="sched__meta">30 min &middot; Videollamada</p>
          <!-- Solo ilustrativos: la disponibilidad real se carga dentro del
               calendario, así que se ocultan a los lectores de pantalla en vez
               de anunciarse como si fueran huecos reservables. -->
          <ul class="sched__slots" aria-hidden="true">
            <li>Lun 10:00</li><li>Lun 14:00</li><li>Mar 9:00</li>
            <li>Mar 11:00</li><li>Mié 15:00</li><li>Jue 10:00</li>
          </ul>
          <p class="sched__note">Abre el calendario &mdash; disponibilidad real, reservado en dos clics.</p>
        </a>
      </div>

      <!-- Netlify Forms: las respuestas aparecen en el panel de Netlify, sin backend -->
      <form action='/gracias' class='form' method='POST' name='audit' data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="audit">
        <input type="hidden" name="language" value="es">
        <p class="hidden"><label>No rellenes esto: <input name="bot-field"></label></p>

        <div class="form__row">
          <label for="cf-name">Nombre</label>
          <input id="cf-name" name="name" type="text" autocomplete="name" required>
        </div>
        <div class="form__row">
          <label for="cf-email">Email de trabajo</label>
          <input id="cf-email" name="email" type="email" autocomplete="email" required>
        </div>
        <div class="form__row">
          <label for="cf-company">Empresa</label>
          <input id="cf-company" name="company" type="text" autocomplete="organization">
        </div>
        <div class="form__row">
          <label for="cf-msg">¿Qué te encantaría automatizar?</label>
          <textarea id="cf-msg" name="message" rows="4" required></textarea>
        </div>

        <button class="btn btn--solid" type="submit">Solicitar mi auditoría gratuita</button>
        <p class="form__note">Respondemos en un día laborable. Sin spam ni secuencias de venta.</p>
      </form>
    </div>
  </section>

</main>"""

FOOTER = """<footer class="footer">
  <div class="footer__top">
    <div class="footer__brand">
      <span class="logoclip logoclip--sm"><picture><source srcset="/assets/logo.webp?v=20260925" type="image/webp"><img src="/assets/logo.png?v=20260925" alt="Nitidflow" width="660" height="130"></picture></span>
      <p>Automatizamos el trabajo que ralentiza tu negocio. Automatizaciones con IA llave en mano que ahorran tiempo, reducen costes y escalan contigo.</p>
    
      <ul class="footer__nap">
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21.5s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10.4" r="2.7"/></svg>
          <span>Madrid, España</span>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.3 3.5h3l1.6 4-2 1.2a12 12 0 006.4 6.4l1.2-2 4 1.6v3a2 2 0 01-2.2 2A17.5 17.5 0 014.3 5.7a2 2 0 012-2.2z"/></svg>
          <a href="tel:+34683491655">+34 683 49 16 55</a>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.8" y="5" width="18.4" height="14" rx="2.6"/><path d="M3.4 7l7.3 5.4a2.2 2.2 0 002.6 0L20.6 7"/></svg>
          <a href="mailto:hello@nitidflow.com">hello@nitidflow.com</a>
        </li>
      </ul>
      <ul class="footer__social">
        <li><a href="https://www.linkedin.com/company/nitidflow/" target="_blank" rel="noopener me" aria-label="NitidFlow en LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></li>
        <li><a href="https://www.instagram.com/nitidflow/" target="_blank" rel="noopener me" aria-label="NitidFlow en Instagram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.0055 11.977.0008 8.718.007 8.31.0206 7.0301.0844m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.4229-.1649 1.0577-.3618 2.2272-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.2277.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.2445 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.1563 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg></a></li>
      </ul>
</div>

    <nav class="footer__col" aria-label="Servicios">
      <h2>SERVICIOS</h2>
      <ul>
        <li><a href="#services">Automatización de flujos</a></li>
        <li><a href="#services">Agentes de IA</a></li>
        <li><a href="#services">Automatización de CRM</a></li>
        <li><a href="#services">Integraciones</a></li>
        <li><a href="#services">Informes y cuadros de mando</a></li>
      </ul>
    </nav>

    <nav class="footer__col" aria-label="Empresa">
      <h2>EMPRESA</h2>
      <ul>
        <li><a href="#how-it-works">Sobre nosotros</a></li>
        <li><a href="#case-studies">Casos de éxito</a></li>
        <li><a href="#book-audit">Empleo</a></li>
        <li><a href="#book-audit">Blog</a></li>
        <li><a href="#book-audit">Contacto</a></li>
      </ul>
    </nav>

    <nav class="footer__col" aria-label="Recursos">
      <h2>RECURSOS</h2>
      <ul>
        <li><a href="#how-it-works">Guías de automatización</a></li>
        <li><a href="#book-audit">Calculadora de ROI</a></li>
        <li><a href="#services">Comparativas de herramientas</a></li>
        <li><a href="#faq">Centro de ayuda</a></li>
      </ul>
    </nav>

    <div class="footer__col footer__news">
      <h2>MANTENTE AL DÍA</h2>
      <p>Ideas prácticas de automatización para quienes operan. Mensual, breve y útil.</p>
      <form action='/gracias' class='news' method='POST' name='newsletter' data-netlify="true" netlify-honeypot="bot-field-news">
        <input type="hidden" name="form-name" value="newsletter">
        <input type="hidden" name="language" value="es">
        <p class="hidden"><label>Omitir: <input name="bot-field-news"></label></p>
        <label class="sr" for="news-email">Correo electrónico</label>
        <input id="news-email" name="email" type="email" placeholder="Correo electrónico" autocomplete="email" required>
        <button class="btn btn--sm btn--solid" type="submit">Unirme</button>
      </form>
    </div>
  </div>

  <div class="footer__legal">
    <p>&copy; <span id="year">2026</span> Nitidflow. Todos los derechos reservados.</p>
    <p class="footer__links">
      <a href="#faq">Política de privacidad</a>
      <a href="#faq">Términos del servicio</a>
      <a href="mailto:hello@nitidflow.com">hello@nitidflow.com</a>
    </p>
  </div>
</footer>"""

SCRIPTS = """<script src="/js/vendor/gsap.min.js"></script>
<script src="/js/vendor/ScrollTrigger.min.js"></script>
<script src="/js/main.min.js?v=20260925" defer></script>
<script src="/js/silk.min.js?v=20260925" defer></script>
<script src="/js/cal.min.js?v=20260925" defer></script>
<script src="/js/forms.min.js?v=20260925" defer></script>
"""

