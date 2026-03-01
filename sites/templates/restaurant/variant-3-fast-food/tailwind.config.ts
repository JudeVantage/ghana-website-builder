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
          DEFAULT: "#DC2626",
          light: "#EF4444",
          dark: "#991B1B",
        },
        accent: {
          DEFAULT: "#FBBF24",
          light: "#FCD34D",
          dark: "#D97706",
        },
        dark: {
          DEFAULT: "#111111",
          100: "#1A1A1A",
          200: "#222222",
          300: "#333333",
          400: "#444444",
          900: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
