/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5F1F',
        'primary-light': '#FFE5D6',
      },
    },
  },
  plugins: [],
} 