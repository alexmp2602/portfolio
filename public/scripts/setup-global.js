/* setup-global.js
   Inicializaciones globales del sitio: toggles, navbar shadow y utilidades para iframes sandbox.
   Robusto frente a bfcache, iframes dinámicos y contextos cross-origin.
*/

import { setupThemeToggle } from "/scripts/theme-toggle.js";
import { setupNavToggle } from "/scripts/nav-toggle.js";

/** Utilidad: log minificado en prod */
const __DEV__ =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";
const log = (...args) => {
  if (__DEV__) console.debug("[app]", ...args);
};

/** Escucha eventos con cancelación centralizada */
function on(target, type, handler, options, bag) {
  target.addEventListener(type, handler, options);
  bag?.add(() => target.removeEventListener(type, handler, options));
}

/** Ejecuta cuando el navegador esté libre (con fallback) */
function onIdle(fn) {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(fn, { timeout: 2000 });
  } else if ("scheduler" in window && "postTask" in window.scheduler) {
    // Chrome Task Scheduler (no bloqueante)
    window.scheduler.postTask(fn, { priority: "background" }).catch(() => fn());
  } else {
    setTimeout(fn, 0);
  }
}

/** Ejecuta lo antes posible cuando el DOM esté listo (incluye bfcache) */
function onReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    queueMicrotask(fn);
  } else {
    document.addEventListener("DOMContentLoaded", fn, { once: true });
  }
  // Pageshow para volver desde bfcache
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) fn();
  });
}

/** Calcula base href a partir del src del iframe */
function computeBaseFromSrc(src) {
  try {
    const u = new URL(src, location.href);
    // carpeta contenedora (…/path/file.html → …/path/)
    const dir = u.pathname.slice(0, u.pathname.lastIndexOf("/") + 1);
    return `${u.origin}${dir}`;
  } catch {
    return null;
  }
}

/** Inserta <base> en el documento del iframe si falta */
function ensureIframeBase(iframe) {
  // Evitar cross-origin (SecurityError) o iframes sin doc todavía
  let doc;
  try {
    doc = iframe?.contentDocument;
  } catch {
    // cross-origin, no hay acceso
    return;
  }
  if (!doc || !doc.head) return;

  // Si ya hay <base>, no hacer nada
  if (doc.head.querySelector("base")) return;

  // Ignorar srcdoc/about:blank hasta que tengan un origen resoluble
  const src = iframe.getAttribute("src") || "";
  if (!src || src.startsWith("about:") || src.startsWith("data:")) return;

  const href = computeBaseFromSrc(src);
  if (!href) return;

  const base = doc.createElement("base");
  base.href = href;
  doc.head.prepend(base);
  log("Base insertado en iframe:", href);
}

/** Vincula listeners seguros para un iframe sandbox */
function wireIframe(iframe, bag) {
  const onLoad = () => {
    try {
      ensureIframeBase(iframe);
    } catch (e) {
      if (__DEV__) console.warn("No se pudo insertar <base> en iframe:", e);
    }
  };
  on(iframe, "load", onLoad, { passive: true }, bag);
  // Si ya cargó (inserción dinámica), intentar inmediatamente
  if (iframe.complete || iframe.readyState === "complete") {
    onLoad();
  }
}

/** Observa iframes sandbox agregados dinámicamente */
function observeSandboxIframes(root = document) {
  const bag = new Set();
  // Wire a los ya existentes
  root.querySelectorAll("iframe[sandbox]").forEach((f) => wireIframe(f, bag));

  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes?.forEach((n) => {
        if (n?.nodeType === 1) {
          const el = /** @type {Element} */ (n);
          if (el.matches?.("iframe[sandbox]")) wireIframe(el, bag);
          // También buscar iframes dentro del subárbol insertado
          el.querySelectorAll?.("iframe[sandbox]").forEach((f) =>
            wireIframe(f, bag)
          );
        }
      });
    }
  });

  mo.observe(root, { childList: true, subtree: true });
  bag.add(() => mo.disconnect());
  return bag;
}

/** Inicialización principal */
function initApp() {
  const disposers = new Set();

  try {
    setupThemeToggle?.();
    setupNavToggle?.();
    setupNavbarShadow?.();
    log("Toggles y navbar listos.");
  } catch (err) {
    console.warn("Error al inicializar scripts globales:", err);
  }

  // Iframes sandbox (estáticos + dinámicos)
  try {
    const bag = observeSandboxIframes(document);
    disposers.add(() => bag.forEach((off) => off()));
  } catch (e) {
    if (__DEV__) console.warn("Observer de iframes no disponible:", e);
  }

  // Limpieza al navegar (SPA / Turbo / etc.)
  on(
    window,
    "unload",
    () => disposers.forEach((off) => off()),
    { passive: true },
    disposers
  );
}

/* Orquestación de arranque:
   - Espera al DOM listo y luego agenda en idle para no bloquear el hilo.
   - Reejecuta cuando volvés desde bfcache (pageshow.persisted).
*/
onReady(() => onIdle(initApp));
