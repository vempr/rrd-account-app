/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screenExcluding: "calc(100vw - 156px)",
      },
    },
    fontFamily: {
      wendelin: ["Wendelin", "sans-serif"],
    },
  },
  plugins: [],
};
