import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/banner/banner1.jpg')",
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

