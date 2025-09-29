/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hotmess-orange': '#ff5a00',
        'orange': {
          500: '#ff5a00',
          400: '#ff7a33',
          300: '#ff9966',
          100: '#ffe6cc',
        },
      },
      boxShadow: {
        'orange-glow': '0 0 24px 2px rgba(255,90,0,0.7)',
        'orange-glow-lg': '0 0 40px 4px rgba(255,90,0,0.5)',
      },
      dropShadow: {
        'glow': '0 0 12px #ff5a00',
        'glow-lg': '0 0 20px #ff5a00',
      },
      animation: {
        'pulse-orange': 'pulse-orange 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce-gentle 1s ease-in-out infinite',
      },
      keyframes: {
        'pulse-orange': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.02)',
          },
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-4px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
}
