/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        oswlad:"'Oswald', sans-serif",
        inter:"Inter', sans-serif",
        pop: "'Poppins', sans-serif"

      }
    },
  },
  plugins: [require("daisyui")],
}

