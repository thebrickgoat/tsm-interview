/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#",
        },
        secondary: {
          DEFAULT: "#",
        },
      },

      fontFamily: {
        name: ["Roboto", "Arial", "sans-serif"],
      },
    },

    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
