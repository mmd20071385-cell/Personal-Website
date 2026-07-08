/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: "#F6F5F1",
          dark: "#0F1115",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#171A21",
        },
        ink: {
          light: "#1B1D22",
          dark: "#E7E5E0",
        },
        muted: {
          light: "#6B6F76",
          dark: "#9199A6",
        },
        line: {
          light: "#E4E2DC",
          dark: "#262B36",
        },
        accent: {
          DEFAULT: "#E8A33D",
          soft: "#F2C879",
          dim: "#B97F27",
        },
        steel: {
          DEFAULT: "#4F7CAC",
          soft: "#7FA8D6",
        },
      },
      fontFamily: {
        sans: ["var(--font-vazir)", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
