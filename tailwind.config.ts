const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: { preflight: false },
  safelist: [{ pattern: /text-+/ }],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        custom: ["Open Sauce One"],
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
        56: "56px",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-body-12": {
          fontSize: "12px",
          fontWeight: "normal",
          lineHeight: "16px",
          letterSpacing: "0",
        },
        ".text-body-14": {
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "20px",
          letterSpacing: "0",
        },
        ".text-body-16": {
          fontSize: "16px",
          fontWeight: "normal",
          lineHeight: "24px",
          letterSpacing: "0",
        },
        ".text-caps-8": {
          fontSize: "8px",
          fontWeight: "bold",
          lineHeight: "12px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        },
        ".text-caps-10": {
          fontSize: "10px",
          fontWeight: "bold",
          lineHeight: "12px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        },
        ".text-caps-12": {
          fontSize: "12px",
          fontWeight: "bold",
          lineHeight: "12px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        },
        ".text-title-12": {
          fontSize: "12px",
          fontWeight: "600",
          lineHeight: "18px",
          letterSpacing: "0",
        },
        ".text-title-14": {
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "20px",
          letterSpacing: "0",
        },
        ".text-title-16": {
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "24px",
          letterSpacing: "0",
        },
        ".text-title-20": {
          fontSize: "20px",
          fontWeight: "600",
          lineHeight: "28px",
          letterSpacing: "-0.7px",
        },
        ".text-title-24": {
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "32px",
          letterSpacing: "-1px",
        },
        ".text-title-32": {
          fontSize: "32px",
          fontWeight: "600",
          lineHeight: "40px",
          letterSpacing: "-1px",
        },
        ".text-title-40": {
          fontSize: "40px",
          fontWeight: "600",
          lineHeight: "48px",
          letterSpacing: "-2px",
        },
        ".text-title-56": {
          fontSize: "56px",
          fontWeight: "600",
          lineHeight: "64px",
          letterSpacing: "-3px",
        },
      });
    }),
  ],
};
