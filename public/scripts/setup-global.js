// setup-global.js
import { setupThemeToggle } from "/scripts/theme-toggle.js";
import { setupNavToggle } from "/scripts/nav-toggle.js";

const initApp = () => {
  try {
    if (typeof setupThemeToggle === "function") setupThemeToggle();
    if (typeof setupNavToggle === "function") setupNavToggle();
  } catch (err) {
    console.warn("Error al inicializar scripts globales:", err);
  }

  // Ajuste de <base> para iframes con sandbox (no rompe si hay cross-origin)
  document.querySelectorAll("iframe[sandbox]").forEach((iframe) => {
    iframe.addEventListener("load", () => {
      try {
        const doc = iframe.contentDocument;
        if (!doc || !doc.head) return;
        if (!doc.head.querySelector("base")) {
          const base = document.createElement("base");
          const srcUrl = new URL(iframe.src, location.href);
          base.href =
            srcUrl.origin +
            srcUrl.pathname.substring(0, srcUrl.pathname.lastIndexOf("/") + 1);
          doc.head.prepend(base);
        }
      } catch (_) {
        // cross-origin: ignoramos
      }
    });
  });
};

// Disparamos cuando el navegador esté libre
if ("requestIdleCallback" in window) {
  requestIdleCallback(initApp);
} else {
  window.addEventListener("DOMContentLoaded", initApp, { once: true });
}
