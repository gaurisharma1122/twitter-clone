/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "text_black": "#212F3D",
        "text_black_light": "#2C3E50",
        "tw_blue": "#1DA1F2",
        "gray_1": "#CCD1D1",
        "gray_2": "#B2BABB",
        "bg_gray": "#F7F9F9",
        "bg_gray_2": "#F4F6F7",
        "text_gray": "#A6ACAF",
      }
    },
  },
  plugins: [],
}

