/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4A0082',
          DEFAULT: '#360065',
          dark: '#2A004F',
        },
        secondary: {
          light: '#64DFDF',
          DEFAULT: '#48BFE3',
          dark: '#5E60CE',
        },
        success: {
          light: '#A7F3D0',
          DEFAULT: '#10B981',
          dark: '#047857',
        },
        warning: {
          light: '#FDE68A',
          DEFAULT: '#F59E0B',
          dark: '#B45309',
        },
        error: {
          light: '#FECDD3',
          DEFAULT: '#EF4444',
          dark: '#B91C1C',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};