/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js ,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'scrollbar-width': 'none',  /* Firefox */
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',  /* Safari and Chrome */
        },
      });
    },
  ],
}