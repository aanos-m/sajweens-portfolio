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
  },
  plugins: [],
}

