/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(59, 130, 246, 0.28)',
        'glow-indigo': '0 0 45px rgba(99, 102, 241, 0.28)',
      },
    },
  },
  plugins: [],
};
