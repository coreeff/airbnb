/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  plugins: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      fontSize: {
        sm: 'clamp(0.8rem, 0.17vw + 0.86rem, 0.90rem)',
        base: 'clamp(0.86rem, 0.34vw + 0.89rem, 0.98rem)',
        lg: 'clamp(1rem, 0.61vw + 1.2rem, 1.40rem)',
        xl: 'clamp(1.40rem, 1vw + 1.31rem, 1.58rem)',
        '2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        '3xl': 'clamp(2.24rem, 2.38vw + 1.85rem, 3.75rem)',
        '4xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
        '5xl': 'clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)',
        '6xl': 'clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'room-like': {
          '0%': { scale: '1.2' },
          '25%': { scale: '1' },
          '50%': { scale: '0.8' },
          '75%': { scale: '1.2' },
          '100%': { scale: '1' },
        },
        'animated-header-box': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'room-like': 'room-like 1s',
        'animated-header-box':
          'animated-header-box 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
};
