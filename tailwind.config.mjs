/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'paper': '#FFFDF0',
        'envelope': '#FF8FA3',
        'teal-pop': '#E0F7FA',
        'love-red': '#D81B60',
        'washi-tape': '#FFD1DC',
      },
      fontFamily: {
        dancing: ['var(--font-dancing)'],
        caveat: ['var(--font-caveat)'],
      },
    },
  },
  plugins: [],
};