export function setupNavbarShadow() {
  const nav = document.querySelector("[data-navbar]");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("shadow-md", window.scrollY > 10);
  });
}
