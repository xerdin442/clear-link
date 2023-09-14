/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./project/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["poppins", "sans-serif"],
        "roboto": ["roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

