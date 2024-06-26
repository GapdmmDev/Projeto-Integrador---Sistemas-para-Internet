/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    screens: {
      '2xl': {'max': '1500px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1120px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '990px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },

      fontFamily: {
        montrealRegular: ['Montreal-Regular', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}

