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
        // Remapped from rose to blue — all components using rose-* get navy/blue automatically
        rose: {
          50:  '#EBF4F8',
          100: '#D6EAF0',
          200: '#A8DADC',
          300: '#7EC8D4',
          400: '#57A9C4',
          500: '#457B9D',
          600: '#1D3557',
          700: '#152840',
        },
        cream:  '#FBF8F4',
        nude:   '#FAF6F4',
        blush:  '#EBF4F8',
        sand:   '#E8D9C8',
        gold:   '#B8956A',
        navy:   '#1D3557',
        'blue-mid': '#457B9D',
        'blue-light': '#D6EAF0',
        'blue-tint':  '#EBF4F8',
      },
      fontFamily: {
        sans:  ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
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
