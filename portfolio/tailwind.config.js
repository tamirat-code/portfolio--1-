/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        bg: {
          DEFAULT: '#0F172A',
          soft: '#111827',
        },
        card: {
          DEFAULT: '#1E293B',
          hover: '#25324A',
          border: '#2A3B54',
        },
        ink: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
          faint: '#64748B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 30% 10%, rgba(59,130,246,0.20), transparent 55%), radial-gradient(circle at 80% 30%, rgba(139,92,246,0.14), transparent 50%)',
        'accent-gradient': 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 45%, #8B5CF6 100%)',
        'text-gradient': 'linear-gradient(120deg, #60A5FA, #3B82F6, #8B5CF6)',
      },
      backgroundSize: {
        grid: '46px 46px',
        sheen: '200% 200%',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(24px, -28px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-20px, 24px)' },
        },
        hover: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        sheen: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        'float-slow': 'floatSlow 15s ease-in-out infinite',
        hover: 'hover 7s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'spin-slow': 'spin 24s linear infinite',
        sheen: 'sheen 6s ease-in-out infinite',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
