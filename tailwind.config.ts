import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand palette — African urban luxury blend
        denim: {
          50: '#f3f6fb',
          100: '#e3ecf6',
          200: '#c0d2e8',
          300: '#90b1d4',
          400: '#5d8bbb',
          500: '#3c6da3',
          600: '#2d5587',
          700: '#26446e',
          800: '#1c3253',
          900: '#14213d',
          950: '#0b1426',
        },
        clay: {
          50: '#fdf6f0',
          100: '#fbe9d8',
          200: '#f6d0ad',
          300: '#efaf78',
          400: '#e88748',
          500: '#d97757', // terracotta accent
          600: '#c2410c',
          700: '#9a3412',
          800: '#7c2d12',
          900: '#5c1f0a',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf7f2',
          200: '#f3ede2',
          300: '#ede0d0',
          400: '#d9c3a8',
          500: '#b8997a',
        },
        gold: {
          400: '#d4b876',
          500: '#c9a961',
          600: '#a88a45',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          soft: '#3a3a3a',
          muted: '#6b6b6b',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      boxShadow: {
        luxe: '0 20px 60px -20px rgba(20, 33, 61, 0.18)',
        card: '0 4px 24px rgba(20, 33, 61, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
