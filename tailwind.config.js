/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#5DADE2',
        accent: '#2E86C1',
        dark: '#1C2833',
        'light-gray': '#F4F6F7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        strong:
          '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        subtle:
          '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'gradient-pan': 'gradient-pan 6s ease infinite',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
