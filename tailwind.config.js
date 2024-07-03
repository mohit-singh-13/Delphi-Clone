/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '450px' },
      }
    },
  },
  plugins: [],
}

