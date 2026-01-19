// setup-global.js
import { setupThemeToggle } from "/scripts/theme-toggle.js";
import { setupNavToggle } from "/scripts/nav-toggle.js";

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

const initIframesBaseFix = () => {
  // Ajuste de <base> para iframes con sandbox (best-effort; no rompe en cross-origin)
  const iframes = document.querySelectorAll("iframe[sandbox]");
  if (!iframes.length) return;

  iframes.forEach((iframe) => {
    iframe.addEventListener(
      "load",
      () => {
        try {
          const doc = iframe.contentDocument;
          if (!doc?.head) return;
          if (doc.head.querySelector("base")) return;

          const base = document.createElement("base");
          const srcUrl = new URL(iframe.src, location.href);
          base.href =
            srcUrl.origin +
            srcUrl.pathname.substring(0, srcUrl.pathname.lastIndexOf("/") + 1);
          doc.head.prepend(base);
        } catch {
          // cross-origin: noop
        }
      },
      { passive: true },
    );
  });
};

const initApp = () => {
  try {
    setupThemeToggle?.();
    setupNavToggle?.();
  } catch (err) {
    console.warn("Error al inicializar scripts globales:", err);
  }

  initIframesBaseFix();

  // Marca para CSS/JS (micro-interacciones opcionales)
  if (prefersReducedMotion()) {
    document.documentElement.dataset.reduceMotion = "true";
  }
};

// Disparo sin bloquear render
if ("requestIdleCallback" in window) {
  window.requestIdleCallback(initApp, { timeout: 1500 });
} else {
  window.addEventListener("DOMContentLoaded", initApp, { once: true });
}
