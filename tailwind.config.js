/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        headerInput: '#51536547',
        sidebarIcon: '#506690',
      },
    },
  },
  plugins: [],
};
