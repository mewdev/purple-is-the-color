/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        slowpulse: {
          "0%, 100%": {
            opacity: 0.5,
          },
          "50%": {
            opacity: 0.1,
          },
        },
        noise: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "10%": {
            transform: "translate(-5%, -5%)",
          },
          "20%": {
            transform: "translate(-10%, 5%)",
          },
          "30%": {
            transform: "translate(5%, -10%)",
          },
          "40%": {
            transform: "translate(-5%, 15%)",
          },
          "50%": {
            transform: "translate(-10%, 5%)",
          },
          "60%": {
            transform: "translate(15%, 0)",
          },
          "70%": {
            transform: "translate(0, 10%)",
          },
          "80%": {
            transform: "translate(-15%, 0)",
          },
          "90%": {
            transform: "translate(10%, 5%)",
          },
          "100%": {
            transform: "translate(5%, 0)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slowpulse: "slowpulse 35s infinite",
        noise: "noise 0.25s infinite",
        marquee: "marquee 150s linear infinite",
        marquee2: "marquee2 150s linear infinite",
      },
      colors: {
        matteBlack: "#171717",
        matteWhite: "#F5F5F5",
      },
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
