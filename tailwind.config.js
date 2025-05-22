const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Modo oscuro manual vía clase .dark
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./components/**/*.{astro,html,js,jsx,ts,tsx}",
    "./layouts/**/*.{astro,html,js,jsx,ts,tsx}",
    "./pages/**/*.{astro,html,js,jsx,ts,tsx}",
    "./**/*.astro",
  ],
  theme: {
    extend: {
      colors: {
        light: "#fafafa", // fondo claro
        dark: "#1f1f1f", // fondo oscuro
        primary: "#256340", // verde principal
        accent: "#60A98F", // verde claro secundario
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
            color: theme("colors.zinc.800"),
            a: { color: theme("colors.primary") },
            strong: { color: theme("colors.primary") },
          },
        },
        dark: {
          css: {
            color: theme("colors.zinc.100"),
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
