/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'baby-blue': '#7AA3E3',
      'white':'#ffffff',
      'black': '#000000',
      'mustard-yellow': '#CFA831',
    },
    fontFamily: {
      bitter: ["Bitter", "serif"],
      openSans: ["Open Sans", "sans-serif"]
    },
    screens: {
      'xs': {'min': '390px', 'max': '639px'},
      // => @media (min-width: 390px and max-width: 639px) { ... }

      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    }
  },
  plugins: [],
}

