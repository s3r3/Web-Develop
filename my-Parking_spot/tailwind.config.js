/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed : '#FB0000',
        customGray : '#F1F1F1',
        customWhite : '#FFFFFF'
      },
    },
  },
  plugins: [],
}