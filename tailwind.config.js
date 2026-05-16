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
          400: '#fb7185',
          500: '#f43f5e', // Rose 500
          600: '#e11d48', // Rose 600
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        secondary: {
          400: '#f472b6', // Pink 400
          500: '#db2777', // Pink 600
        },
        accent: {
          400: '#fb923c', // Orange 400
          500: '#ea580c', // Orange 600
        },
        dark: {
          bg: '#020617', // Deep Slate
          surface: '#0f172a', // Dark Slate
          card: '#1e293b', // Slate Card
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
