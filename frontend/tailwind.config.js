/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgba(var(--primary), <alpha-value>)",
        "on-primary": "rgba(var(--on-primary), <alpha-value>)",
        "surface": "rgba(var(--surface), <alpha-value>)",
        "on-surface": "rgba(var(--on-surface), <alpha-value>)",
        "surface-container": "rgba(var(--surface-container), <alpha-value>)",
        "surface-container-low": "rgba(var(--surface-container-low), <alpha-value>)",
        "surface-container-lowest": "rgba(var(--surface-container-lowest), <alpha-value>)",
        "on-surface-variant": "rgba(var(--on-surface-variant), <alpha-value>)",
        "outline-variant": "rgba(var(--outline-variant), <alpha-value>)",
        // other colors we keep static for now
        "primary-fixed": "#a3f69c",
        "primary-fixed-dim": "#88d982",
        "on-primary-fixed": "#002204",
        "secondary": "#00639a",
        "secondary-container": "#51b2fe",
        "tertiary": "#1d622b",
        "error": "#ba1a1a",
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans", "sans-serif"],
        "body": ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
