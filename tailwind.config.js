/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#1e3a5f',
          700: '#162d4a',
          800: '#0f2035',
          900: '#091525',
          950: '#050e1a',
        },
        medical: {
          blue: '#1a3c6e',
          sky: '#0ea5e9',
          cyan: '#06b6d4',
          mint: '#10b981',
          light: '#f0f7ff',
          gray: '#f4f6f9',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(26, 60, 110, 0.12)',
        glow: '0 0 30px rgba(14, 165, 233, 0.3)',
        card: '0 4px 24px rgba(26, 60, 110, 0.08)',
        'card-hover': '0 12px 40px rgba(26, 60, 110, 0.18)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, #0f2035 0%, #1a3c6e 40%, #0ea5e9 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,247,255,0.95) 100%)',
        'btn-primary':
          'linear-gradient(135deg, #1a3c6e 0%, #0ea5e9 100%)',
        'btn-whatsapp':
          'linear-gradient(135deg, #128c7e 0%, #25d366 100%)',
        'btn-mint':
          'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      keyframes: {
        pulse_glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(14,165,233,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(14,165,233,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        pulse_glow: 'pulse_glow 2.5s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
