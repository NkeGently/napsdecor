import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#f0d080",
          400: "#d4a843",
          500: "#c49a2f",
          600: "#a07820",
          DEFAULT: "#c9a84c",
        },
        obsidian: "#0a0a0a",
        charcoal: "#141414",
        graphite: "#1e1e1e",
        mist: "#f5f5f0",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
