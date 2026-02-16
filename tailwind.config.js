/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Inter', 'Arial', 'sans-serif']
      },
      colors: {
        ink: {
          900: '#0b1020',
          800: '#0f1731',
          700: '#17224a'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,.08), 0 12px 45px rgba(0,0,0,.55)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
        floatySlow: 'floaty 10s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
