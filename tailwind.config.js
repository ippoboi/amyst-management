/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        componentBackground: "#1C1C1C",
        background: "#0F0F0F",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "#2E2E2E",
          outline: "#3E3E3E",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        inputField: {
          background: "#232323",
          outline: "#3E3E3E",
        },
        white: "#EDEDED",
        subTitle: "#A0A0A0",
        subtileText: "#3E3E3E",
        error: "#FF7272",
        success: "#72FFD5",
      },
    },
  },
  plugins: [],
};
