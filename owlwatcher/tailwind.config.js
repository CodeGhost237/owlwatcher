/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graydark: '#131313',
        graylight: "#1D1D1D",
        purplecolor: '#6F00BF',
        purpledark: "#560093"
      }
    },
  },
  plugins: [],
}

