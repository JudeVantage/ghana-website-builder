import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C2410C",
          light: "#EA580C",
          dark: "#9A3412",
        },
        cream: {
          DEFAULT: "#FFF8F0",
          dark: "#FFF0E0",
        },
        warm: {
          brown: "#78350F",
          "brown-light": "#92400E",
        },
      },
      fontFamily: {
        sans: ["Nunito", "system-ui", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
