/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "revolt-brand": "#4f46e5",
        "revolt-brand-hover": "#4338ca",
      },
    },
  },
  plugins: [],
}
