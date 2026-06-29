/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-tertiary': '#111111',
        'accent': '#00A550',
        'accent-dark': '#008C44',
        'accent-light': '#1EB566',
        'accent-red': '#E63329',
        'accent-blue': '#003DA5',
        'text-primary': '#ffffff',
        'text-secondary': '#888888',
        'text-muted': '#888888',
        'card': '#111111',
        'card-hover': '#161616',
        'border': '#1a1a1a',
        'border-strong': '#2a2a2a',
        'danger': '#FF3B30',
      },
      fontFamily: {
        'ibm': ['"IBM Plex Sans"', 'Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float-logo': 'floatLogo 6s ease-in-out infinite',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'spin-ball': 'spin 1s linear infinite',
      },
      keyframes: {
        floatLogo: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 200, 83, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(0, 200, 83, 0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'green': '0 0 20px rgba(0, 200, 83, 0.3)',
        'green-lg': '0 0 40px rgba(0, 200, 83, 0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0, 200, 83, 0.15)',
      },
    },
  },
  plugins: [],
}
