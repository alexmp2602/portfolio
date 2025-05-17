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
        dark: "#1F1F1F",
        light: "#FAFAFA",
        accent: "#60A98F",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
