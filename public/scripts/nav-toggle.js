export function setupNavToggle() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  // Toggle menú móvil
  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");

    if (isHidden) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("animate-fade-slide-down");
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("animate-fade-slide-down");
    }

    menuBtn.setAttribute("aria-expanded", (!isHidden).toString());
  });

  // Cerrar menú al hacer clic en un link interno
  const navLinks = mobileMenu.querySelectorAll("a[href^='#']");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("animate-fade-slide-down");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}
