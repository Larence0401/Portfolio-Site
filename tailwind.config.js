/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["JetBrains Mono", "monospace"],
      },

      colors: {
        accent: "#FEA609",
        background: "#21201E"
      },
    },
  },
  plugins: [],
};
