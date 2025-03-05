/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    outline : false,
    extend: {
      container: {
        center: true
      },
      colors: {
        pryClr: "#efeeec",
        secClr: "#0a0a0a",
        tetClr: "#fffdff",
        compClr: "#074625",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}