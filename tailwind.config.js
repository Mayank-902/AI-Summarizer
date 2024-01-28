/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      width:{
        wm : ['3.25rem'],
        wl : ['3.5rem'],
        wxl : ['3.75rem'],
        wxxl : ['4rem']
      }
    },
  },
  plugins: [],
}
