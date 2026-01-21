/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f5f0',
          100: '#b3e3d1',
          200: '#80d1b2',
          300: '#4dbf93',
          400: '#1aad74',
          500: '#00774E',
          600: '#005f3e',
          700: '#00472e',
          800: '#002f1f',
          900: '#00170f',
        },
        accent: {
          50: '#fce4f0',
          100: '#f8b3d1',
          200: '#f482b2',
          300: '#f05193',
          400: '#ec2074',
          500: '#E83C7D',
          600: '#ba3064',
          700: '#8c244b',
          800: '#5e1832',
          900: '#300c19',
        },
      },
    },
  },
  plugins: [],
}

