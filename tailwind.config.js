/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F1119",
        elevated: "#161927",
        surface: "#1C2033",
        border: "#2A2F45",
        ink: "#ECEDF3",
        muted: "#9096AC",
        faint: "#5B6178",
        accent: "#6C8EFF",
        accent2: "#3DD9B8",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
}
