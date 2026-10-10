/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F5EFE6',
          300: '#EFE7DA',
        },
        cream: {
          50: '#FAF6EF',
          100: '#F3ECE1',
          200: '#EBE2D4',
          300: '#DDD1C0',
        },
        sage: {
          50: '#F4F7F3',
          100: '#EBF1EA',
          200: '#D5E2D3',
          300: '#B0C7AE',
          500: '#7D8D78',
          600: '#556B51',
          700: '#3F523C',
          800: '#2F3E2D',
        },
        champagne: {
          50: '#FCF9F1',
          100: '#F6F0E0',
          200: '#EDE0C1',
          300: '#DFC475',
          400: '#CEAE49',
          500: '#BF9B30',
          600: '#96771C',
          700: '#755B13',
        },
        olive: {
          700: '#515C4F',
          800: '#323E30',
          900: '#1F271D',
          950: '#192218',
        },
        dustyRose: {
          50: '#FCF7F7',
          100: '#F8EDED',
          200: '#EDD5D4',
          400: '#DDA7A5',
          500: '#C88E8B',
          600: '#BA7D7A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 20px rgba(25, 34, 24, 0.04)',
        card: '0 10px 30px -5px rgba(25, 34, 24, 0.07)',
        hover: '0 20px 45px -10px rgba(25, 34, 24, 0.12)',
        elevated: '0 25px 50px -12px rgba(25, 34, 24, 0.25)',
      },
      borderRadius: {
        xs: '3px',
      },
    },
  },
  plugins: [],
};
