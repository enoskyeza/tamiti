/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bae0ff',
          300: '#7cc8ff',
          400: '#36adff',
          500: '#0891ff',
          600: '#0072f5',
          700: '#005bc4',
          800: '#004493',
          900: '#0A2540',
          950: '#071a2b',
        },
        accent: {
          50: '#fffdf0',
          100: '#fff9d1',
          200: '#fff2a3',
          300: '#ffe975',
          400: '#ffdd47',
          500: '#FFBE00',
          600: '#e6a800',
          700: '#cc9600',
          800: '#b38400',
          900: '#996f00',
        },
        neutral: {
          50: '#F4F4F4',
          100: '#f0f0f0',
          200: '#e6e6e6',
          300: '#d1d1d1',
          400: '#b0b0b0',
          500: '#888888',
          600: '#6d6d6d',
          700: '#5d5d5d',
          800: '#4f4f4f',
          900: '#454545',
          950: '#262626',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
};