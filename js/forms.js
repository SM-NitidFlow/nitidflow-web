/* ============================================================
   Nitidflow — mirror the audit form into n8n

   The form keeps submitting natively to Netlify Forms: that is what stores
   the lead and redirects to the thanks page, and it still works with JS off.
   This only copies the same fields to the n8n webhook on the way out, so a
   dead webhook can never cost you the lead.
   ============================================================ */

(function () {
  'use strict';

  /* ---------------------------------------------------------------------
     HEADS UP — this is n8n's TEST url.

       /webhook-test/…  fires only while the workflow editor is open and you
                        have clicked "Execute workflow", and only for ONE
                        request. Every other submission is silently dropped.

       /webhook/…       is the production url. It needs the workflow ACTIVE
                        (toggle top-right in n8n).

     Before going live, swap the line below for:
       var HOOK = 'https://n8n.nitidflow.com/webhook/contacto-web';
     --------------------------------------------------------------------- */
  var HOOK = 'https://n8n.nitidflow.com/webhook-test/contacto-web';

  var form = document.querySelector('form[name="audit"]');
  if (!form) return;

  form.addEventListener('submit', function () {
    // Deliberately NOT preventDefault(): Netlify's own POST must go through.

    var data = new FormData(form);
    data.delete('bot-field');            // honeypot — nothing to forward

    var body = new URLSearchParams();
    data.forEach(function (v, k) { body.append(k, v); });
    body.append('page', location.href);
    body.append('submittedAt', new Date().toISOString());
    var payload = body.toString();

    /* Form-encoded on purpose: it is a CORS-safelisted content type, so the
       browser sends it without a preflight and the webhook fires whether or
       not the n8n node sets "Allowed Origins". We never read the response. */
    var TYPE = 'application/x-www-form-urlencoded;charset=UTF-8';
    var sent = false;

    /* sendBeacon survives the navigation that starts a moment later when the
       form posts and the browser leaves for the thanks page. */
    if (navigator.sendBeacon) {
      try {
        sent = navigator.sendBeacon(HOOK, new Blob([payload], { type: TYPE }));
      } catch (e) {}
    }

    if (!sent) {
      try {
        fetch(HOOK, {
          method: 'POST',
          mode: 'no-cors',
          keepalive: true,
          headers: { 'Content-Type': TYPE },
          body: payload
        })['catch'](function () {});
      } catch (e) {}
    }
  });
})();
