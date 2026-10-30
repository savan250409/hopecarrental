/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep ocean navy — trust, premium feel
        navy: {
          50: "#eef2f9",
          100: "#d6def0",
          200: "#aec0e1",
          300: "#7f9bce",
          400: "#4f74b8",
          500: "#345a9e",
          600: "#27477e",
          700: "#1d3661",
          800: "#152747",
          900: "#0d1b33",
          950: "#070f1f",
        },
        // Tropical gold / sunset — warmth, CTA
        gold: {
          50: "#fdf8ed",
          100: "#faeccb",
          200: "#f4d793",
          300: "#eebc55",
          400: "#e9a62f",
          500: "#d98a1d",
          600: "#bf6915",
          700: "#9e4b15",
          800: "#813c18",
          900: "#6b3217",
        },
        // Lagoon teal — the Mauritius sea accent
        lagoon: {
          50: "#edfcfb",
          100: "#d2f6f4",
          200: "#aaece9",
          300: "#71ddd9",
          400: "#35c4c2",
          500: "#1aa8a7",
          600: "#118687",
          700: "#126b6c",
          800: "#145556",
          900: "#154749",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(13, 27, 51, 0.18)",
        "card-hover": "0 24px 60px -18px rgba(13, 27, 51, 0.32)",
        glow: "0 0 0 1px rgba(233, 166, 47, 0.25), 0 12px 48px -12px rgba(233, 166, 47, 0.45)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        "hero-grid-light":
          "radial-gradient(circle at 1px 1px, rgba(13,27,51,0.07) 1px, transparent 0)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-100%, 0, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 1.8s infinite",
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};
