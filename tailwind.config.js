/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: 'rgb(var(--primary-400) / <alpha-value>)',
          500: 'rgb(var(--primary-500) / <alpha-value>)',
          600: 'rgb(var(--primary-600) / <alpha-value>)',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        secondary: {
          400: 'rgb(var(--secondary-400) / <alpha-value>)',
          500: 'rgb(var(--secondary-500) / <alpha-value>)',
        },
        accent: {
          400: 'rgb(var(--accent-400) / <alpha-value>)',
          500: 'rgb(var(--accent-500) / <alpha-value>)',
        },
        dark: {
          bg: 'rgb(var(--dark-bg) / <alpha-value>)',
          surface: 'rgb(var(--dark-surface) / <alpha-value>)',
          card: 'rgb(var(--dark-card) / <alpha-value>)',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(225, 29, 72, 0.2), 0 0 10px rgba(225, 29, 72, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(225, 29, 72, 0.6), 0 0 40px rgba(225, 29, 72, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
