/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // Use Inter font for sans-serif
      serif: ['Georgia', 'serif'], // Use Georgia font for serif
    },
    extend: {
      colors: {
        customBlue: 'rgb(17, 24, 39)',
        customOrange: '#ff3a00',
      },
    },
  },
  plugins: [],
}

