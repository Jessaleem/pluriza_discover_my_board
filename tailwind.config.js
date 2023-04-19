/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-board-blue': '#3366CC',
        'my-board-white': '#FFF',
        'my-board-full-white': '#FFFFFF',
        'my-board-aqua': '#66cccc',
        'my-board-yellow': '#ffcc33',
        'my-board-green': '#33cc99',
      },
      fontSize: {
        'my-board-font': '18px',
        'my-board-font-btn': '14px',
      },
    },
  },
  plugins: [],
};
