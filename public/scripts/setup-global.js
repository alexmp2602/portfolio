import { setupThemeToggle } from "/scripts/theme-toggle.js";
import { setupNavToggle } from "/scripts/nav-toggle.js";
import { setupScrollReveal } from "/scripts/scroll-reveal.js";
import { setupNavbarShadow } from "/scripts/navbar-shadow.js";

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupNavToggle();
  setupScrollReveal();
  setupNavbarShadow();

  // Ajuste de <base> para iframes
  document.querySelectorAll("iframe[sandbox]").forEach((iframe) => {
    iframe.addEventListener("load", () => {
      try {
        const doc = iframe.contentDocument;
        if (!doc?.head?.querySelector("base")) {
          const base = doc.createElement("base");
          base.href = iframe.src.substring(0, iframe.src.lastIndexOf("/") + 1);
          doc.head.prepend(base);
        }
      } catch (e) {
        console.warn("No se pudo insertar <base> en iframe:", e);
      }
    });
  });
});
