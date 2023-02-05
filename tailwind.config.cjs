const colors = {
  base: '#D5E1EF',
  'dark-navy': '#1F314F',
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
