import { animate, inView } from "@motionone/dom";

export function setupRevealAnimation() {
  inView("[data-reveal]", (el, { index }) => {
    animate(
      el,
      { opacity: [0, 1], y: [50, 0], scale: [0.98, 1] },
      {
        duration: 0.6,
        delay: index * 0.15,
        easing: "ease-out",
      }
    );
  });
}
