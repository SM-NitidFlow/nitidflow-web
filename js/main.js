/* ============================================================
   Nitidflow — interaction & motion
   GSAP + ScrollTrigger are vendored locally in js/vendor/.
   Everything degrades: if GSAP fails to load, or the visitor
   asks for reduced motion, all content renders immediately.
   ============================================================ */

(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = !!(window.gsap && window.ScrollTrigger);

  // Failsafe: `.anim` is what hides content pre-animation. If we can't
  // animate, drop it so nothing stays invisible.
  if (!hasGsap || reduced) root.classList.remove('anim');
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  /* ---------------------------------------------------------
     footer year
     --------------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     language: EN at /, ES at /es/

     Netlify already routes first-time visitors by Accept-Language
     (see netlify.toml). This only remembers an explicit choice, so
     someone with a Spanish browser who picked EN isn't sent back to
     /es/ on every visit. The `?lang=en` in the link is what stops
     Netlify's rule from firing; sessionStorage stops any loop.
     --------------------------------------------------------- */
  var pageLang = (root.getAttribute('lang') || 'en').slice(0, 2);

  var store = function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} };
  var read  = function (k)    { try { return localStorage.getItem(k); } catch (e) { return null; } };

  try {
    if (new URLSearchParams(location.search).get('lang') === 'en') store('nf-lang', 'en');
  } catch (e) {}

  Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (a) {
    a.addEventListener('click', function () { store('nf-lang', a.getAttribute('data-lang')); });
  });

  try {
    var pref = read('nf-lang');
    if (pref && pref !== pageLang && !sessionStorage.getItem('nf-lang-moved')) {
      sessionStorage.setItem('nf-lang-moved', '1');
      location.replace(pref === 'es' ? '/es/' : '/?lang=en');
      return;                        // stop setting things up; we're leaving
    }
  } catch (e) {}

  /* The background is a self-rendering WebGL effect (Silk Waves). It starts
     itself, pauses off-screen, and honours reduced-motion — nothing to do
     here. If it never paints, the still poster on .bg shows through. */

  /* ---------------------------------------------------------
     top menu: transparent over the hero, solid once scrolled
     --------------------------------------------------------- */
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');

  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 24); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (toggle && links) {
    var setMenu = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      links.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // close on link tap, Escape, or clicking away
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (!e.target.closest('.nav__inner')) setMenu(false);
    });
    // reset when resizing up to desktop, so the panel can't stay stuck open
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }

  /* ---------------------------------------------------------
     FAQ accordion (works with or without GSAP)
     --------------------------------------------------------- */
  var faq = document.querySelector('[data-faq]');
  if (faq) {
    var buttons = faq.querySelectorAll('.faq__q');

    var close = function (btn, animate) {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', 'false');
      if (!panel) return;
      if (hasGsap && !reduced && animate) {
        gsap.to(panel, {
          height: 0, duration: 0.34, ease: 'power2.inOut',
          onComplete: function () { panel.hidden = true; panel.style.height = ''; }
        });
      } else {
        panel.hidden = true;
      }
    };

    var open = function (btn) {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', 'true');
      if (!panel) return;
      panel.hidden = false;
      if (hasGsap && !reduced) {
        gsap.fromTo(panel,
          { height: 0, overflow: 'hidden' },
          { height: 'auto', duration: 0.4, ease: 'power2.out',
            onComplete: function () { panel.style.height = ''; panel.style.overflow = ''; } });
      }
    };

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var isOpen = btn.getAttribute('aria-expanded') === 'true';
        // single-open accordion: shut the others first
        buttons.forEach(function (other) {
          if (other !== btn && other.getAttribute('aria-expanded') === 'true') close(other, true);
        });
        isOpen ? close(btn, true) : open(btn);
      });
    });
  }

  /* ---------------------------------------------------------
     Everything below is motion only — bail out cleanly.
     --------------------------------------------------------- */
  if (!hasGsap || reduced) return;

  /* hero intro */
  var heroBits = gsap.utils.toArray('[data-anim="hero"]');
  var heroLogo = document.querySelector('[data-anim="hero-logo"]');

  var intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (heroLogo) {
    intro.fromTo(heroLogo, { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 1.1 }, 0.1);
  }
  if (heroBits.length) {
    /* Antes: arranque .25, duración .85, stagger .11 — el último elemento
       no acababa hasta 1,54 s. Demasiado para contenido que ya está en la
       primera pantalla, y con el titular en opacity 0 tanto rato el LCP se
       resiente. Ahora el último cierra a 0,83 s. */
    intro.fromTo(heroBits, { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.07 }, 0.08);
  }

  /* section reveals, batched so long grids animate as rows */
  ScrollTrigger.batch('.reveal', {
    start: 'top 88%',
    once: true,
    batchMax: 6,
    onEnter: function (batch) {
      gsap.fromTo(batch,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', overwrite: true });
    }
  });

  /* count-up numbers */
  gsap.utils.toArray('.count').forEach(function (el) {
    var target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var obj = { v: 0 };

    // thousands separator follows the page language: 1,250 vs 1.250
    var locale = pageLang === 'es' ? 'es-ES' : 'en-US';
    var render = function () {
      el.textContent = prefix + Math.round(obj.v).toLocaleString(locale) + suffix;
    };
    render();

    gsap.to(obj, {
      v: target, duration: 1.6, ease: 'power2.out', onUpdate: render,
      scrollTrigger: { trigger: el, start: 'top 92%', once: true }
    });
  });

  /* client marquee — two identical tracks sliding as one */
  var marquee = document.querySelector('[data-marquee]');
  if (marquee) {
    var tracks = marquee.querySelectorAll('.marquee__track');
    var loop = gsap.to(tracks, {
      xPercent: -100, duration: 26, ease: 'none', repeat: -1
    });
    // pause while off screen so it isn't burning frames
    ScrollTrigger.create({
      trigger: marquee,
      start: 'top bottom', end: 'bottom top',
      onToggle: function (self) { self.isActive ? loop.play() : loop.pause(); }
    });
  }

  /* live workflow: walk the highlight along the chain */
  var flow = document.querySelector('[data-flow]');
  if (flow) {
    var nodes = gsap.utils.toArray('.flow__node', flow);
    var STEP = 0.62;
    var hot = function (i) {
      nodes.forEach(function (n, j) { n.classList.toggle('is-hot', j === i); });
    };

    var walk = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
      paused: true,
      onRepeat: function () { hot(-1); }
    });
    walk.to({}, { duration: nodes.length * STEP });
    nodes.forEach(function (n, i) { walk.call(hot, [i], i * STEP); });

    ScrollTrigger.create({
      trigger: flow,
      start: 'top 85%', end: 'bottom top',
      onToggle: function (self) {
        if (self.isActive) { walk.play(); } else { walk.pause(); hot(-1); }
      }
    });
  }

  // fonts can shift layout after ScrollTrigger measured it
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();

/* ============================================================
   Proceso — carril de progreso
   El relleno sigue al scroll y cada marcador se enciende al
   llegar a su altura. Sin GSAP (o con reduced-motion) el carril
   se queda lleno y todos los pasos activos: la sección se lee
   igual, sólo que sin la animación.
   ============================================================ */
(function () {
  'use strict';

  var proc = document.querySelector('.proc');
  if (!proc) return;

  var fill  = proc.querySelector('.proc__fill');
  var steps = Array.prototype.slice.call(proc.querySelectorAll('[data-proc]'));
  if (!fill || !steps.length) return;

  var reduced = window.matchMedia &&
                matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Sin motor de scroll no hay progreso que animar: se deja todo encendido
     antes de salir, para no dejar la sección a medio pintar. */
  if (typeof ScrollTrigger === 'undefined' || reduced) {
    fill.style.setProperty('--p', 1);
    steps.forEach(function (s) { s.classList.add('is-on'); });
    return;
  }

  ScrollTrigger.create({
    trigger: proc,
    start: 'top 72%',
    end: 'bottom 62%',
    onUpdate: function (self) {
      fill.style.setProperty('--p', self.progress.toFixed(3));
    }
  });

  /* Cada paso se enciende por su cuenta: así el encendido coincide con la
     tarjeta que el lector tiene delante, no con el progreso global. */
  steps.forEach(function (step) {
    ScrollTrigger.create({
      trigger: step,
      start: 'top 78%',
      once: true,
      onEnter: function () { step.classList.add('is-on'); }
    });
  });
})();

/* ============================================================
   El problema — medidor de la semana y foco al cursor
   ============================================================ */
(function () {
  'use strict';

  var reduced = window.matchMedia &&
                matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- las horas perdidas se encienden al llegar la sección --- */
  var loss = document.querySelector('[data-loss]');
  if (loss) {
    if (typeof ScrollTrigger === 'undefined' || reduced) {
      loss.classList.add('is-on');           // sin scroll no hay entrada que esperar
    } else {
      ScrollTrigger.create({
        trigger: loss,
        start: 'top 82%',
        once: true,
        onEnter: function () { loss.classList.add('is-on'); }
      });
    }
  }

  /* --- foco radial siguiendo al ratón sobre las tarjetas ---
     Un solo listener delegado en la rejilla en vez de uno por tarjeta, y
     la posición se escribe dentro de un rAF para no tocar estilos en cada
     evento de movimiento. */
  var grid = document.querySelector('#problem .grid');
  if (!grid || reduced || !window.matchMedia('(hover:hover)').matches) return;

  var pending = null;

  grid.addEventListener('mousemove', function (e) {
    var tile = e.target.closest ? e.target.closest('.tile') : null;
    if (!tile) return;
    if (pending) cancelAnimationFrame(pending);
    pending = requestAnimationFrame(function () {
      var r = tile.getBoundingClientRect();
      tile.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      tile.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    });
  }, { passive: true });
})();

/* ============================================================
   Qué hacemos — entrada en cascada del mosaico
   ============================================================ */
(function () {
  'use strict';

  var svcs = document.querySelector('.svcs');
  if (!svcs) return;

  var reduced = window.matchMedia &&
                matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof ScrollTrigger === 'undefined' || reduced) {
    svcs.classList.add('is-on');   // sin scroll no hay entrada que esperar
    return;
  }

  ScrollTrigger.create({
    trigger: svcs,
    start: 'top 80%',
    once: true,
    onEnter: function () { svcs.classList.add('is-on'); }
  });
})();
