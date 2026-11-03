import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          bg: "#EDEBE6",
          surface: "#F7F5F1",
          border: "#D8D4CB",
        },
        ink: {
          DEFAULT: "#1C1B19",
          muted: "#5B574F",
        },
        brick: {
          DEFAULT: "#B5542F",
          dark: "#8F3F21",
        },
        sage: {
          DEFAULT: "#6B7A5E",
        },
        ochre: {
          DEFAULT: "#C98A2C",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
