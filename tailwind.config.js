/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size': '100% 100%'
      },
      fontFamily: {
        'azosans': 'Azo Sans Uber W01 Regular',
        'Montserrat': 'Montserrat'
      },
      animation: {
        'pika' : 'pika 4s infinite linear'
      },
      keyframes: {
        pika: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%':{transform:'translateY(0px)'}
        }
      }
    },
    
  },
  plugins: [],
})