/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF ',
        black: '#000000',
        primary_Color: '#7622BF',
        secondary_Color: '#FFF1EA',
        accent: '#FAC3A4',
        amber: '#CA8A04',
        green: "#16A34A",

        primary: '#7622BF',     // Deep purple – perfect for main actions
        secondary: '#CDB8F3',   // Light lavender – secondary accents
        error: '#EF254D',       // Bright red – errors & alerts
        surface: '#FAC3A4',     // Soft peach – cards & containers
        warning: '#FB9077',
      },
    },
  },
  plugins: [],
}