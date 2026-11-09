import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080B16",
        panel: "#101729",
        violet: "#8B5CF6",
        cyan: "#22D3EE",
        pink: "#EC4899"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-space)", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(139,92,246,.18)"
      }
    }
  },
  plugins: []
};
export default config;
