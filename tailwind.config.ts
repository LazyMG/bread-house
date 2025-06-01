import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wanted: ['"Wanted Sans"', "sans-serif"],
        alte: ['"Alte Haas Grotesk"', "sans-serif"],
        localWanted: "var(--wanted-bold-text)",
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(40%)", opacity: "0.2" },
          "70%": { transform: "translateY(10%)", opacity: "0.7" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "circle-rise": "rise 1.2s cubic-bezier(0.25, 0.8, 0.5, 1) forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
