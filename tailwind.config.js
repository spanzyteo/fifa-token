/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        fugaz: ['Fugaz-one'],
        angel: ['angel'],
      },
      backgroundImage: {
        myImage: "url('./src/assets/fifa-wallpaper.png')",
      },
    },
  },
  plugins: [],
}
