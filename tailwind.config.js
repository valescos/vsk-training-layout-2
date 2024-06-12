/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat", "Times New Roman", "Times", "serif"],
        body: ["Nunito", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        primary: "#415167",
        accent: "#C7A17A",
        accent2: "#F9F5E8",
        darkgray: "#151D28",
        lightgray: "#EDF0F5",
      },
    },
  },
  plugins: [],
};
