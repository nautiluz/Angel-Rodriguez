/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        's4a-navy': '#040712',
        's4a-blue': '#3b82f6',
        's4a-accent': '#10b981',
        'glass': 'rgba(15, 23, 42, 0.8)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
      animation: {
        'pulse-urgent': 'pulse-urgent 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-urgent': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  }
}
