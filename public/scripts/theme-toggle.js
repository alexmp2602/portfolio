import { IconMoonSVG, IconSunSVG } from "./icons.js";

export function setupThemeToggle() {
  const themeToggles = document.querySelectorAll("[data-toggle-theme]");
  const iconContainers = document.querySelectorAll(".theme-icon");

  function updateThemeIcon(isDark) {
    const iconHTML = isDark ? IconSunSVG : IconMoonSVG;

    iconContainers.forEach((container) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = iconHTML.trim();
      const svg = wrapper.firstElementChild;

      if (svg) {
        svg.classList.add("w-full", "h-full", "theme-icon-enter");
        container.innerHTML = "";
        container.appendChild(svg);
      }
    });
  }

  function applyThemeFromStorage() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", isDark);
    updateThemeIcon(isDark);
  }

  themeToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateThemeIcon(isDark);
    });
  });

  applyThemeFromStorage();
}
