/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      pink: 'rgb(238,124,173)',
      gray: {
        100: '#f7fafc',
        900: '#1a202c',
      },
    }
  },
  plugins: [require("daisyui")],
}

