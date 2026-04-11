import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0EB",
        charcoal: "#2C2C2C",
        gold: "#C9A96E",
        "gold-dark": "#B8944F",
        "cream-dark": "#E8E0D8",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Noto Sans Arabic", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
