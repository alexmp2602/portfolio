import { animate, inView } from "@motionone/dom";

export function setupRevealAnimation() {
  inView("[data-reveal]", (el, { index }) => {
    animate(
      el,
      {
        opacity: [0, 1],
        y: [40, 0],
        scale: [0.95, 1],
      },
      {
        duration: 0.8,
        delay: index * 0.1,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)", // easeOutExpo feel
      }
    );
  }, { once: true });
}
