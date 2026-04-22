/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#8bab46',
          mid:   '#57a669',
          teal:  '#2b9c83',
        },
        dark: {
          950: '#080b11',
          900: '#0f1219',
          800: '#161c27',
          700: '#1e2638',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
