export function setupDarkToggle() {
  const button = document.querySelector("[data-toggle-theme]");
  if (!button) return;

  button.addEventListener("click", () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
  });
}
