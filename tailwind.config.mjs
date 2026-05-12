/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        electric: { DEFAULT: '#FFD600', dark: '#E6C000' },
        ember: '#FF6B00',
        dark: { DEFAULT: '#0A0A0A', surface: '#141414', hover: '#1E1E1E', border: '#2A2A2A' },
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
