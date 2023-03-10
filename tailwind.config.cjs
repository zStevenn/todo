/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#613F75',
        'primary-hover': '#7c5e91',
        secondary: '#EF798A',
        'secondary-hover': '#cc4d5e',
        melon: '#F7A9A8',
        'melon-hover': '#dd8d8c',
        glaucous: '#7D82B8',
        'glaucous-hover': '#9499c1',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
    },
  },
  plugins: [],
};
