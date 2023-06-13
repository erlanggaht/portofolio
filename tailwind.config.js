/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      extend: {
        textShadow: {
          sm: '0 1px 2px var(--tw-shadow-color)',
          DEFAULT: '0 2px 4px var(--tw-shadow-color)',
          lg: '-2px -1px 4px #1C1C1C',
        },
      },
      colors: {
        'bg-base': '#181818',
        'color-base-200' : "#fff",
        "color-base-100" : "#868686",
        'color-other-200' : "#f1c22d",
        "color-other-100" : "#b89107"
      },
    },
  },
  plugins: [],
}

