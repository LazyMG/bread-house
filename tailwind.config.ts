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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
