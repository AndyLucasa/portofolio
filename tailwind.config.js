// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'] ,
        'karla': ['"Karla"', 'sans-serif'],
        'rubik': ['"Rubik"', 'sans-serif'],
        'righteous' : ["Righteous",'cursive']
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}