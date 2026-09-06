import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50:  '#FDF4F6',
          100: '#FAE6EE',
          200: '#F5C8DA',
          300: '#ECA8BE',
          400: '#DF88A4',
          500: '#CF6685',
          600: '#B84E6C',
          700: '#9E3959',
        },
        cream:  '#FBF8F4',
        nude:   '#FAF6F4',
        blush:  '#FDF0F4',
        sand:   '#E8D9C8',
        gold:   '#B8956A',
      },
      fontFamily: {
        sans:  ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Cormorant reads larger optically — scale up headings
        '5xl': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        '4xl': ['2.6rem',  { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        '3xl': ['2rem',    { lineHeight: '1.2',  letterSpacing: '0' }],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
