/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'revolt-brand': '#6C47FF',
        'revolt-brand-hover': '#5235cc',
      },
      animation: {
        'pulse-slow': 'pulse 8s infinite',
      },
    },
  },
  plugins: [],
};
