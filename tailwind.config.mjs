/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      fontFamily: {
        monumentBold: [
          "monument_extendedultrabold",
          ...defaultTheme.fontFamily.sans,
        ],
        inter: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
