/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF1617',
          cta: '#0078AD',
          deep: '#001061',
          headline: '#202020',
          text: '#5D5F64',
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', '"Source Sans Pro"', 'system-ui', 'sans-serif'],
        display: ['Archivo', '"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'lava-1': {
          '0%, 100%': {
            transform: 'translate(0%, 0%) rotate(0deg) scale(1)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '33%': {
            transform: 'translate(25%, 20%) rotate(20deg) scale(1.15)',
            borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%',
          },
          '66%': {
            transform: 'translate(-15%, 30%) rotate(-15deg) scale(0.9)',
            borderRadius: '50% 50% 40% 60% / 40% 70% 30% 60%',
          },
        },
        'lava-2': {
          '0%, 100%': {
            transform: 'translate(0%, 0%) rotate(0deg) scale(1)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          },
          '40%': {
            transform: 'translate(-30%, -20%) rotate(-25deg) scale(1.2)',
            borderRadius: '60% 40% 30% 70% / 70% 50% 40% 30%',
          },
          '70%': {
            transform: 'translate(20%, -10%) rotate(15deg) scale(0.95)',
            borderRadius: '40% 60% 60% 40% / 50% 40% 60% 50%',
          },
        },
        'lava-3': {
          '0%, 100%': {
            transform: 'translate(0%, 0%) rotate(0deg) scale(1)',
            borderRadius: '40% 60% 30% 70% / 50% 60% 40% 50%',
          },
          '50%': {
            transform: 'translate(-25%, 25%) rotate(30deg) scale(1.1)',
            borderRadius: '70% 30% 60% 40% / 40% 60% 30% 70%',
          },
        },
      },
      animation: {
        'lava-1': 'lava-1 22s ease-in-out infinite',
        'lava-2': 'lava-2 28s ease-in-out infinite',
        'lava-3': 'lava-3 25s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
