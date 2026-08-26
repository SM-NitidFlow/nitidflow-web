/* ============================================================
   Silk waves — layered flowing wave curtains with a specular
   sheen, drawn in WebGL. Written for this project: no library,
   no CDN, no licence call, no badge.

   Usage:
     <div data-silk
          data-colors="#3d7ba8,#cfe2f0,#f4f1ec"
          data-bg="#071522"
          data-speed="0.35"     0.05 – 2
          data-layers="4"       1 – 4
          data-amplitude="0.3"  0.05 – 0.6
          data-frequency="2"    0.5 – 6
          data-angle="-12"      -45 – 45 degrees
          data-softness="0.6"   0.1 – 1
          data-sheen="0.6"      0 – 1
          data-grain="0.04"></div>  0 – 0.2

   Behaviour:
     - pauses while the tab is hidden, and while the host element
       is off screen
     - honours prefers-reduced-motion by drawing one still frame
     - if WebGL is missing or the context is lost it removes its
       canvas, so whatever is painted behind shows through
   ============================================================ */

(function () {
  'use strict';

  var VERT =
    'attribute vec2 p;' +
    'void main(){ gl_Position = vec4(p, 0.0, 1.0); }';

  var FRAG = [
    'precision highp float;',
    'uniform vec2  uRes;',
    'uniform float uTime;',
    'uniform vec3  uBg;',
    'uniform vec3  uC0, uC1, uC2, uC3;',
    'uniform int   uCount;',
    'uniform float uLayers, uAmp, uFreq, uAngle, uSoft, uSheen, uGrain;',

    // --- 3-to-4 stop gradient. Unused stops repeat the last colour,
    // --- so the extra mixes collapse to no-ops. Avoids dynamic
    // --- indexing of uniform arrays, which some GLES2 drivers reject.
    'vec3 palette(float t){',
    '  float s = clamp(t, 0.0, 1.0) * float(uCount - 1);',
    '  vec3 c = uC0;',
    '  c = mix(c, uC1, clamp(s,       0.0, 1.0));',
    '  c = mix(c, uC2, clamp(s - 1.0, 0.0, 1.0));',
    '  c = mix(c, uC3, clamp(s - 2.0, 0.0, 1.0));',
    '  return c;',
    '}',

    'float hash(vec2 v){ return fract(sin(dot(v, vec2(127.1, 311.7))) * 43758.5453); }',

    // three summed sines: enough to stop the crest looking like a single sine
    'float wave(float x, float t, float seed){',
    '  return sin(x * uFreq        + t        + seed      ) * 0.50',
    '       + sin(x * uFreq * 1.73 - t * 0.80 + seed * 2.1) * 0.30',
    '       + sin(x * uFreq * 0.61 + t * 0.53 + seed * 4.3) * 0.20;',
    '}',

    'void main(){',
    // aspect-correct coords, origin centred
    '  vec2 q = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;',
    '  float a = radians(uAngle);',
    '  vec2 p = vec2(q.x * cos(a) - q.y * sin(a), q.x * sin(a) + q.y * cos(a));',

    '  vec3 col = uBg;',
    // Narrow bands on purpose: wide ones overlap into a flat haze
    // instead of reading as separate curtains.
    '  float soft = uSoft * 0.14 + 0.02;',

    '  for (int i = 0; i < 4; i++){',
    '    if (float(i) >= uLayers) break;',
    '    float fi = float(i);',
    '    float lt = uLayers > 1.0 ? fi / (uLayers - 1.0) : 0.0;',

    // spread the curtains vertically, back to front
    '    float base = mix(-0.44, 0.40, lt);',
    '    float t    = uTime * (0.80 + 0.35 * lt);',
    '    float w    = wave(p.x, t, fi * 1.7) * uAmp;',
    '    float d    = p.y - (base + w);',

    // soft-edged ribbon, slightly crisper in the middle
    '    float band = pow(smoothstep(soft, 0.0, abs(d)), 1.35);',

    // brightness varying along the length: reads as folds in fabric
    '    float fold = 0.60 + 0.40 * sin(p.x * uFreq * 1.15 - t * 1.30 + fi * 2.0);',

    // fake a normal from the wave slope for the sheen
    '    float e  = 0.012;',
    '    float dw = (wave(p.x + e, t, fi * 1.7) - wave(p.x - e, t, fi * 1.7)) * uAmp / (2.0 * e);',
    '    vec3  n  = normalize(vec3(-dw, 1.0, 0.6));',
    '    vec3  h  = normalize(vec3(0.35, 0.85, 0.40));',
    '    float spec = pow(max(dot(n, h), 0.0), 28.0) * uSheen;',
    '    spec *= smoothstep(soft * 1.2, 0.0, abs(d));',

    '    vec3 lc = palette(lt * 0.72 + 0.28 * (0.5 + 0.5 * sin(t * 0.4 + fi))) * fold;',
    '    col = mix(col, lc, band * (0.34 + 0.40 * lt));',
    '    col += spec * band * 0.30;',
    '  }',

    // gentle vertical falloff, keeps the lower page calm for text
    '  float vy = (gl_FragCoord.y / uRes.y);',
    '  col *= 0.88 + 0.12 * smoothstep(0.0, 0.7, vy);',

    // film grain, breaks up banding on flat gradients
    '  col += (hash(gl_FragCoord.xy + fract(uTime) * 91.7) - 0.5) * uGrain;',

    '  gl_FragColor = vec4(col, 1.0);',
    '}'
  ].join('\n');

  function hexToRgb(hex) {
    var h = String(hex).trim().replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    if (isNaN(n) || h.length !== 6) return [1, 1, 1];
    return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
  }

  function num(el, name, def, lo, hi) {
    var v = parseFloat(el.getAttribute('data-' + name));
    if (isNaN(v)) return def;
    return Math.min(hi, Math.max(lo, v));
  }

  function compile(gl, type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn('[silk] shader failed:', gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  function init(host) {
    var canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    var gl = null;
    try {
      var opts = { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'low-power' };
      gl = canvas.getContext('webgl', opts) || canvas.getContext('experimental-webgl', opts);
    } catch (e) { /* handled below */ }
    if (!gl) return;   // no WebGL: leave whatever is painted behind

    var vs = compile(gl, gl.VERTEX_SHADER, VERT);
    var fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    var prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('[silk] link failed:', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    // fullscreen quad
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    host.appendChild(canvas);

    // ---- parameters ----
    var raw = (host.getAttribute('data-colors') || '#94a3b8,#e2e8f0,#cbd5e1').split(',');
    var stops = raw.map(function (c) { return c.trim(); }).filter(Boolean).slice(0, 4);
    while (stops.length < 2) stops.push(stops[stops.length - 1] || '#ffffff');
    var count = stops.length;
    while (stops.length < 4) stops.push(stops[count - 1]);   // repeat last -> extra mixes are no-ops

    var P = {
      bg:   hexToRgb(host.getAttribute('data-bg') || '#0f172a'),
      cols: stops.map(hexToRgb),
      count: count,
      speed: num(host, 'speed', 0.4, 0.05, 2),
      layers: Math.round(num(host, 'layers', 3, 1, 4)),
      amp: num(host, 'amplitude', 0.25, 0.05, 0.6),
      freq: num(host, 'frequency', 2.2, 0.5, 6),
      angle: num(host, 'angle', 0, -45, 45),
      soft: num(host, 'softness', 0.5, 0.1, 1),
      sheen: num(host, 'sheen', 0.5, 0, 1),
      grain: num(host, 'grain', 0.03, 0, 0.2)
    };

    var U = {};
    ['uRes', 'uTime', 'uBg', 'uC0', 'uC1', 'uC2', 'uC3', 'uCount',
     'uLayers', 'uAmp', 'uFreq', 'uAngle', 'uSoft', 'uSheen', 'uGrain'
    ].forEach(function (k) { U[k] = gl.getUniformLocation(prog, k); });

    gl.uniform3fv(U.uBg, P.bg);
    gl.uniform3fv(U.uC0, P.cols[0]);
    gl.uniform3fv(U.uC1, P.cols[1]);
    gl.uniform3fv(U.uC2, P.cols[2]);
    gl.uniform3fv(U.uC3, P.cols[3]);
    gl.uniform1i(U.uCount, P.count);
    gl.uniform1f(U.uLayers, P.layers);
    gl.uniform1f(U.uAmp, P.amp);
    gl.uniform1f(U.uFreq, P.freq);
    gl.uniform1f(U.uAngle, P.angle);
    gl.uniform1f(U.uSoft, P.soft);
    gl.uniform1f(U.uSheen, P.sheen);
    gl.uniform1f(U.uGrain, P.grain);

    // ---- sizing. DPR is capped: a full-viewport shader at 3x on a
    // ---- phone is a lot of fragments for a background nobody stares at.
    var w = 0, h = 0;
    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      var nw = Math.max(1, Math.round(host.clientWidth * dpr));
      var nh = Math.max(1, Math.round(host.clientHeight * dpr));
      if (nw === w && nh === h) return;
      w = nw; h = nh;
      canvas.width = w; canvas.height = h;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      gl.viewport(0, 0, w, h);
      gl.uniform2f(U.uRes, w, h);
    }
    resize();

    // ---- draw loop ----
    var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var raf = 0, t0 = 0, elapsed = 0, visible = true, running = false;

    function frame(now) {
      raf = 0;
      if (!t0) t0 = now;
      elapsed += (now - t0) / 1000 * P.speed;
      t0 = now;
      resize();
      gl.uniform1f(U.uTime, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (running) raf = requestAnimationFrame(frame);
    }

    function start() {
      if (running || reduced) return;
      running = true; t0 = 0;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }
    function still() {           // one static frame
      resize();
      gl.uniform1f(U.uTime, 2.5);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    if (reduced) {
      still();
    } else {
      start();
      // don't burn battery in a background tab
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) { stop(); } else if (visible) { start(); }
      });
      // ...or while scrolled past (matters if the host isn't position:fixed)
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          visible = entries[0].isIntersecting;
          if (visible && !document.hidden) start(); else stop();
        }, { threshold: 0 }).observe(host);
      }
      if ('ResizeObserver' in window) {
        new ResizeObserver(resize).observe(host);
      } else {
        window.addEventListener('resize', resize, { passive: true });
      }
    }

    canvas.addEventListener('webglcontextlost', function (e) {
      e.preventDefault();
      stop();
      canvas.remove();       // fall back to whatever is painted behind
    });
  }

  function boot() {
    var hosts = document.querySelectorAll('[data-silk]');
    for (var i = 0; i < hosts.length; i++) init(hosts[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
