import { setupThemeToggle } from "/scripts/theme-toggle.js";
import { setupNavToggle } from "/scripts/nav-toggle.js";
import { setupNavbarShadow } from "/scripts/navbar-shadow.js";

// Callback para ejecutar en el momento óptimo
const initApp = () => {
  try {
    setupThemeToggle?.();
    setupNavToggle?.();
    setupNavbarShadow?.();
  } catch (err) {
    console.warn("Error al inicializar scripts globales:", err);
  }

  // Ajuste de <base> para iframes con sandbox
  document.querySelectorAll("iframe[sandbox]").forEach((iframe) => {
    iframe.addEventListener("load", () => {
      try {
        const doc = iframe.contentDocument;
        if (!doc || !doc.head) return;

        const hasBase = doc.head.querySelector("base");
        if (!hasBase) {
          const base = document.createElement("base");
          const srcUrl = new URL(iframe.src, location.href);
          base.href =
            srcUrl.origin +
            srcUrl.pathname.substring(0, srcUrl.pathname.lastIndexOf("/") + 1);
          doc.head.prepend(base);
        }
      } catch (e) {
        console.warn("No se pudo insertar <base> en iframe:", e);
      }
    });
  });
};

// Ejecutar cuando el navegador esté libre
if ("requestIdleCallback" in window) {
  requestIdleCallback(initApp);
} else {
  window.addEventListener("DOMContentLoaded", initApp);
}
