/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      screens: {
        'sm': '576px',
        'md': '1280px',
        'lg': '1440px',
        'xl': '1900px',
      },

      fontFamily: {
        YTY: ['Yesteryear', 'serif'],
        Inter: ['Inter', 'sans-serif'],
        GV: ['Great Vibes', 'serif'],

},

      colors: {
        // Define your color variables here
        textColorPrimary: '#ffffff',
        textColorSecondary: '#242424',
        textColorTertiary:  '#8A8A8A',
        backgroundColorPrimary: '#161616',
        backgroundColorSecondary: '#7e7e7e',
        backgroundColorTertiary: '#b5b5b3',
        backgroundColorQuaternary: '#ffffff',
      },

    },
  },
  plugins: [],
};
