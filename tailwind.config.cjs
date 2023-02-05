const colors = {
  base: '#D5E1EF',
  'dark-navy': '#1F314F',
  grape: '#3E52A3',
  grey: '#7D889E',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
