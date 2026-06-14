/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0a0e0d",
          panel: "#111614",
          line: "#1f2926",
        },
        signal: {
          DEFAULT: "#7CFFCB",
          dim: "#4FAE8E",
        },
        ink: {
          DEFAULT: "#E7ECE9",
          muted: "#8FA39C",
          faint: "#5C6B66",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1f2926 1px, transparent 1px), linear-gradient(to bottom, #1f2926 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
