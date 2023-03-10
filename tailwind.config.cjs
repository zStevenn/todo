/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#613F75',
        secondary: '#EF798A',
        melon: '#F7A9A8',
        glaucous: '#7D82B8',
      },
    },
  },
  plugins: [],
};
