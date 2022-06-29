/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    colors:{
      // "primary": "#F49431",
      // "secondary": "#0F92B5",
      // "text-color" : "#FFEACE",
      // "brown" : "#8F7158"
      "primary": "#344A53",
      "secondary" : "#2D6F76",
      "text-color" : "#FFEACE",
      "brown" : "#8F7158",

    },
    extend: {
      height: {
        'page': 'calc(100vh - 5rem)',
      }
    },
  },
  plugins: [],
}
