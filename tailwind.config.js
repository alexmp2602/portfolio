const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./components/**/*.{astro,html,js,jsx,ts,tsx}",
    "./layouts/**/*.{astro,html,js,jsx,ts,tsx}",
    "./pages/**/*.{astro,html,js,jsx,ts,tsx}",
    "./**/*.astro",
    "./**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#256340", // verde apagado sobrio
        accent: "#60A98F", // menta cálido
        light: ({ opacityVariable, opacityValue }) =>
          opacityValue !== undefined
            ? `rgba(250, 250, 250, ${opacityValue})`
            : `rgb(250 250 250 / var(${opacityVariable}, 1))`,
        dark: ({ opacityVariable, opacityValue }) =>
          opacityValue !== undefined
            ? `rgba(31, 31, 31, ${opacityValue})`
            : `rgb(31 31 31 / var(${opacityVariable}, 1))`,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px rgba(0,0,0,0.05)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.dark"),
            a: { color: theme("colors.primary") },
            strong: { color: theme("colors.primary") },
          },
        },
        dark: {
          css: {
            color: theme("colors.light"),
            a: { color: theme("colors.accent") },
            strong: { color: theme("colors.accent") },
          },
        },
      }),
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
