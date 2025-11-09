/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: '#0A0A0A',
        surface: '#121212',
        accent: '#EDEDED',
        secondary: '#C6C6C6',
        text: '#EDEDED',
        'muted-text': '#8C8C8C',
        'line-color': 'rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
