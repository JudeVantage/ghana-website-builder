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
          DEFAULT: "#D4AF37", // Gold
          light: "#FFD700",
          dark: "#B8860B",
        },
        bronze: {
          DEFAULT: "#CD7F32",
          light: "#E19955",
          dark: "#A0522D",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#FFD700",
          dark: "#B8860B",
        },
        kente: {
          red: "#DC2626",
          yellow: "#FBBF24",
          green: "#16A34A",
        },
        accent: {
          DEFAULT: "#D4AF37", // Gold
          light: "#FFD700",
          dark: "#B8860B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
