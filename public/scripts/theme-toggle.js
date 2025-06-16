import { IconMoonSVG, IconSunSVG } from "./icons.js";

export function setupThemeToggle() {
  const themeToggles = document.querySelectorAll("[data-toggle-theme]");
  const iconContainers = document.querySelectorAll(".theme-icon");

  const applyTheme = (isDark) => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.setAttribute("data-theme", isDark ? "dark" : "light");
    updateThemeIcon(isDark);

    // Accesibilidad para botones toggle
    themeToggles.forEach((btn) => {
      btn.setAttribute("aria-pressed", isDark.toString());
    });
  };

  const updateThemeIcon = (isDark) => {
    const iconHTML = isDark ? IconSunSVG : IconMoonSVG;

    iconContainers.forEach((container) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = iconHTML.trim();
      const svg = wrapper.firstElementChild;

      if (svg) {
        svg.classList.add("w-full", "h-full", "theme-icon-enter");
        container.replaceChildren(svg);
      }
    });
  };

  const initTheme = () => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark" || (!saved && prefersDark);
    applyTheme(isDark);
  };

  themeToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isDark = !document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      applyTheme(isDark);
    });
  });

  initTheme();
}
