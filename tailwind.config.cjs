/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
    },
    fontFamily: {
      consola: ["Inconsolata", "monospace"],
    },
  },
  plugins: [],
};
