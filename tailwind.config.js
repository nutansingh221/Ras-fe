/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: '0.7rem',
          sm: '0.7rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

