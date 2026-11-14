/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#110E0C',
        espresso: '#1B1613',
        walnut: '#28201B',
        alabaster: '#FAF8F5',
        sand: '#F2EDE6',
        amberled: {
          300: '#F0C38E',
          400: '#E09F5A',
          500: '#C9853E',
          600: '#A8692A',
        },
        ink: {
          DEFAULT: '#1E1916',
          muted: '#61574F',
          light: '#A89E94',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
