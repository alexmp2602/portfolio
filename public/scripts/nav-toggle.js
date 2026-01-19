// /scripts/nav-toggle.js
export function setupNavToggle() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!menuBtn || !mobileMenu) return;

  let isOpen = false;
  const ctrl = new AbortController();
  const { signal } = ctrl;

  const getFocusable = () =>
    Array.from(
      mobileMenu.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );

  const openMenu = () => {
    if (isOpen) return;
    isOpen = true;

    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("animate-fade-slide-down");

    menuBtn.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenu.removeAttribute("tabindex");

    // Evita scroll de fondo en mobile cuando el menú está abierto
    document.documentElement.style.overflow = "hidden";

    const focusables = getFocusable();
    (focusables[0] || mobileMenu).focus?.();
  };

  const closeMenu = () => {
    if (!isOpen) return;
    isOpen = false;

    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-slide-down");

    menuBtn.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.setAttribute("tabindex", "-1");

    document.documentElement.style.overflow = "";

    menuBtn.focus();
  };

  const toggleMenu = () => (isOpen ? closeMenu() : openMenu());

  menuBtn.addEventListener("click", toggleMenu, { signal });

  // Cierra al navegar a una sección
  mobileMenu.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => closeMenu(), { signal });
  });

  // Cierra al click afuera
  document.addEventListener(
    "pointerdown",
    (e) => {
      if (!isOpen) return;
      const target = e.target;
      if (!(target instanceof Node)) return;
      if (mobileMenu.contains(target) || menuBtn.contains(target)) return;
      closeMenu();
    },
    { signal },
  );

  // Escape + focus trap
  document.addEventListener(
    "keydown",
    (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }

      if (e.key !== "Tab") return;

      const focusables = getFocusable();
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    },
    { signal },
  );

  return () => ctrl.abort();
}
