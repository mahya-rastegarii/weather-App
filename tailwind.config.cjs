/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        bgColor :'rgba(0, 0, 0, 0.8)',
      },
      height : {
        '100vh' : '100vh'
      },
      padding : {
        '10px' : '10px'
      }
      
    },
  },
  plugins: [],
}
