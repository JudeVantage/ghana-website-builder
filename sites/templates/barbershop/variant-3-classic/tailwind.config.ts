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
        barber: {
          red: "#DC2626",
          white: "#FFFFFF",
          cream: "#F5F5DC",
          brown: "#8B4513",
          darkbrown: "#654321",
        },
        classic: {
          bg: "#FAF8F3",
          card: "#FFFFFF",
          text: "#2C1810",
        },
      },
      fontFamily: {
        sans: ["Georgia", "serif"],
        display: ["Impact", "Arial Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
