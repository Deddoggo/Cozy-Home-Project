/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B88E2F",
        secondary: "#FAF3EA",
        black1: "#333333",
        white: "#FFFFFF",
        background: "#F4F5F7",
        gray: "#898989",
        "gray-light": "#B0B0B0",
        red: "#E97171",
        green: "#2EC1AC",
      },
    },
  },
  plugins: [],
};
