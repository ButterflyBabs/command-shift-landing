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
        indigo: {
          DEFAULT: "#1A2B4A",
          rich: "#1F315B",
        },
        gold: {
          DEFAULT: "#C9A227",
          rich: "#D4AF63",
        },
        teal: {
          DEFAULT: "#2E7C83",
        },
        plum: {
          DEFAULT: "#7B6B8D",
          rich: "#5E3B6C",
        },
        lavender: {
          DEFAULT: "#E8E4F0",
          rich: "#CDBFD6",
        },
        ivory: {
          DEFAULT: "#F8F5F0",
          rich: "#F6F1E8",
        },
        taupe: {
          DEFAULT: "#B8A898",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["EB Garamond", "Georgia", "serif"],
        ui: ["Montserrat", "Arial", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.26em",
        button: "0.06em",
      },
    },
  },
  plugins: [],
};

export default config;
