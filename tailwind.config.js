/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1C2620",
          light: "#2A362E",
          soft: "#3A473E",
        },
        mist: {
          DEFAULT: "#F3EFE5",
          dark: "#E9E2D2",
        },
        stone: "#E4DFCF",
        moss: {
          DEFAULT: "#6E7C64",
          light: "#95A38A",
        },
        gold: {
          DEFAULT: "#B9955B",
          light: "#D3B888",
        },
        haze: "#A9BEC0",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        contour: "url('/contour.svg')",
      },
    },
  },
  plugins: [],
}
