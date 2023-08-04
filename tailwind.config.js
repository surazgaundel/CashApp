/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green:'#00D54B',
        lightgray:'#B6B6B6',
        darkgray:'#606060'
      },
      fontWeight: {
        bolder: '800',
      },
    },
  },
  plugins: [],
}