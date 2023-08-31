/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Bree: ['Bree Serif', 'serif'],
        Dm: ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}