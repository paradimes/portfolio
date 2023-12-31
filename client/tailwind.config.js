// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

import plugin from "tailwindcss/plugin";
import { blackA, mauve, violet, indigo, purple } from "@radix-ui/colors";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./App.jsx",
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      ...blackA,
      ...mauve,
      ...violet,
      ...purple,
      ...indigo,
    },
    keyframes: {
      enterFromRight: {
        from: { opacity: 0, transform: "translateX(200px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      enterFromLeft: {
        from: { opacity: 0, transform: "translateX(-200px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      exitToRight: {
        from: { opacity: 1, transform: "translateX(0)" },
        to: { opacity: 0, transform: "translateX(200px)" },
      },
      exitToLeft: {
        from: { opacity: 1, transform: "translateX(0)" },
        to: { opacity: 0, transform: "translateX(-200px)" },
      },
      scaleIn: {
        from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
        to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
      },
      scaleOut: {
        from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      fadeOut: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  animation: {
    scaleIn: "scaleIn 200ms ease",
    scaleOut: "scaleOut 200ms ease",
    fadeIn: "fadeIn 200ms ease",
    fadeOut: "fadeOut 200ms ease",
    enterFromLeft: "enterFromLeft 250ms ease",
    enterFromRight: "enterFromRight 250ms ease",
    exitToLeft: "exitToLeft 250ms ease",
    exitToRight: "exitToRight 250ms ease",
  },
};
export const plugins = [
  plugin(({ matchUtilities }) => {
    matchUtilities({
      perspective: (value) => ({
        perspective: value,
      }),
    });
  }),
];
