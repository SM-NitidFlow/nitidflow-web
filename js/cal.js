/* ============================================================
   Nitidflow — Cal.com booking popup

   Any element carrying data-cal-link opens the scheduler in a modal
   over the page. Every one of those elements is ALSO a real <a href>
   pointing at the same Cal page, so if embed.js is blocked or simply
   hasn't landed yet, the click still books — it just opens cal.com in
   a new tab instead of a modal. Nothing here can leave a dead button.
   ============================================================ */

(function () {
  'use strict';

  var SRC  = 'https://app.cal.com/embed/embed.js';
  var LINK = 'smnitidflow';
  var NS   = 'audit';   // namespaced so a second embed later can't inherit
                        // this one's styling

  var lang  = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2);
  var ready = false;    // true only once embed.js has actually executed

  /* Cal's official queue stub: the first Cal() call injects embed.js, and
     anything queued before it lands is replayed once it does. */
  (function (C, A, L) {
    var p = function (a, ar) { a.q.push(ar); };
    var d = C.document;
    C.Cal = C.Cal || function () {
      var cal = C.Cal, ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement('script')).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        var api = function () { p(api, arguments); };
        var namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ['initNamespace', namespace]);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };
  })(window, SRC, 'init');

  Cal('init', NS, { origin: 'https://cal.com' });

  /* Modal styling — deep blue to match the site, month grid. */
  Cal.ns[NS]('ui', {
    theme: 'dark',
    cssVarsPerTheme: {
      light: { 'cal-brand': '#2f6b96' },
      dark:  { 'cal-brand': '#7fb2d6' }
    },
    layout: 'month_view',
    hideEventTypeDetails: false
  });

  /* Did the script actually arrive? A content blocker leaves the stub above
     perfectly intact and kills only the request, so `window.Cal` existing
     proves nothing — the <script> firing `load` does. */
  var tag = document.querySelector('script[src="' + SRC + '"]');
  if (tag) tag.addEventListener('load', function () { ready = true; });

  /* Booking-page language. Cal documents no locale key; unknown data-cal-config
     entries are forwarded to the booking URL as query params, so treat this as
     a hint — the authoritative setting is the event type's language in the
     Cal.com account. Ignored keys are harmless. */
  var config = JSON.stringify({ layout: 'month_view', locale: lang });

  Array.prototype.forEach.call(
    document.querySelectorAll('[data-cal-link]'),
    function (el) { el.setAttribute('data-cal-config', config); }
  );

  /* Cancel the href only when the modal can genuinely open. Capture phase runs
     before Cal's own document-level listener, and preventDefault() doesn't stop
     propagation, so Cal still receives the click and opens the popup. When
     `ready` is false we do nothing at all and the browser follows the link. */
  document.addEventListener('click', function (e) {
    if (!ready || !e.target || !e.target.closest) return;
    if (e.target.closest('[data-cal-link="' + LINK + '"]')) e.preventDefault();
  }, true);
})();
