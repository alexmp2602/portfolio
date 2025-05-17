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
        primary: "#256340",
        accent: "#60A98F",
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
    },
  },
  plugins: [],
};
