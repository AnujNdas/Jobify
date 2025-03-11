/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Ensure this is set to 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#121212",
        darkCard: "#1F1F1F",
        darkText: "#EDEDED",
      },
    },
  },
  plugins: [],
}


