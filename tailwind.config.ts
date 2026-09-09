import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          glow: 'hsl(var(--primary-glow))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          glow: 'hsl(var(--secondary-glow))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          glow: 'hsl(var(--accent-glow))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        // KSAVI Brand Colors
        ksavi: {
          primary: '#00D4FF',     // أزرق سماوي كهربائي
          secondary: '#FF2D55',   // أحمر وردي ناري
          accent: '#7CFF4E',      // أخضر نيون
          dark: '#0B0F1A',        // خلفية داكنة
          darker: '#050810',      // أعمق
          card: '#111827',        // بطاقات
          border: '#1E293B',      // حدود
        },
        // League Colors
        league: {
          premier: '#38003C',      // الدوري الإنجليزي
          laliga: '#EE2C2C',       // الدوري الإسباني
          seriea: '#003399',       // الدوري الإيطالي
          bundesliga: '#D00E1B',   // الدوري الألماني
          ligue1: '#002B5C',       // الدوري الفرنسي
          champions: '#1A3C6E',    // دوري الأبطال
          saudipro: '#006C35',     // الدوري السعودي
          egypt: '#CE1126',        // الدوري المصري
          botola: '#D6261C',       // الدوري المغربي
          uae: '#0073CF',          // الدوري الإماراتي
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        '3xl': 'calc(var(--radius) + 16px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'system-ui', 'sans-serif'],
        display: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        '3xs': ['0.5rem', { lineHeight: '0.75rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'glow-primary': '0 0 20px hsl(var(--primary-glow) / 0.4), 0 0 40px hsl(var(--primary-glow) / 0.2)',
        'glow-secondary': '0 0 20px hsl(var(--secondary-glow) / 0.4), 0 0 40px hsl(var(--secondary-glow) / 0.2)',
        'glow-accent': '0 0 20px hsl(var(--accent-glow) / 0.4), 0 0 40px hsl(var(--accent-glow) / 0.2)',
        'glow-card': '0 4px 24px hsl(0 0% 0% / 0.4), 0 0 1px hsl(var(--border))',
        'inner-glow': 'inset 0 1px 0 hsl(var(--primary) / 0.1)',
        'match-card': '0 2px 12px hsl(0 0% 0% / 0.3), 0 0 0 1px hsl(var(--border) / 0.5)',
        'match-card-hover': '0 8px 32px hsl(0 0% 0% / 0.4), 0 0 0 1px hsl(var(--primary) / 0.3), 0 0 20px hsl(var(--primary-glow) / 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.7) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--secondary) / 0.7) 100%)',
        'gradient-accent': 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent) / 0.7) 100%)',
        'gradient-dark': 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--ksavi-darker)) 100%)',
        'gradient-card': 'linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--card) / 0.8) 100%)',
        'gradient-hero': 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.15) 0%, transparent 70%), linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--ksavi-darker)) 100%)',
        'mesh-gradient': 'radial-gradient(at 20% 80%, hsl(var(--primary) / 0.15) 0px, transparent 50%), radial-gradient(at 80% 20%, hsl(var(--secondary) / 0.15) 0px, transparent 50%), radial-gradient(at 50% 50%, hsl(var(--accent) / 0.1) 0px, transparent 50%)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'count-up': 'count-up 0.6s ease-out forwards',
        'progress-fill': 'progress-fill 1s ease-out forwards',
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary-glow) / 0.3)' },
          '50%': { boxShadow: '0 0 40px hsl(var(--primary-glow) / 0.6), 0 0 60px hsl(var(--primary-glow) / 0.3)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'heartbeat': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'progress-fill': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;