/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-up': '#06286E',
        'blue-down': '#164EC0'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ['Inter', "sans-serif"]
      },
    },
  },
  plugins: [],
}

