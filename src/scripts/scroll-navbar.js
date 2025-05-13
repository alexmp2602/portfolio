export function setupScrollNavbar() {
  const nav = document.querySelector("[data-navbar]");
  if (!nav) return;

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 10) {
      nav.classList.add("shadow-md");
    } else {
      nav.classList.remove("shadow-md");
    }

    lastScroll = currentScroll;
  });
}
