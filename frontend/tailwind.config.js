/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#DB4444'
    },
    extend: {
      screens: {
        'ssm': '550px',
        'sm': '640px',
        'md': '769px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'Play': ['Play', 'sans-serif']
      },
      fontSize: {

      }
    },
  },
  plugins: [],
});