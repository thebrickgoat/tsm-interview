/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        sans: ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
      },
    },

    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
