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
        // rise: {
        //   "0%": { transform: "translateY(40%)", opacity: "0.01" },
        //   "30%": { transform: "translateY(28%)", opacity: "0.4" },
        //   "60%": { transform: "translateY(16%)", opacity: "0.7" },
        //   "85%": { transform: "translateY(6%)", opacity: "0.9" },
        //   "100%": { transform: "translateY(0)", opacity: "1" },
        // },
        rise: {
          "0%": { transform: "translateY(40%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      // animation: {
      //   "circle-rise": "rise 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards",
      // },
      animation: {
        "circle-rise": "rise 1.6s cubic-bezier(0.2, 0.6, 0.2, 1) forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
