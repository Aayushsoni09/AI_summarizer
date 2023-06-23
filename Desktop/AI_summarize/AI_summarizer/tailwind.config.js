/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../AI_summarizer/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi:["Satoshi","sans-serif"],
        inter:["Inter","sans-seriff"]
      }
    },
  },
  plugins: [],
}