import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme tokens map to CSS variables defined in styles/tokens.css.
        bg: {
          base: 'var(--bg-base)',
          raised: 'var(--bg-raised)',
        },
        accent: {
          cyan: 'var(--accent-cyan)',
          purple: 'var(--accent-purple)',
        },
        text: {
          primary: 'var(--text-primary)',
          muted: 'var(--text-muted)',
          dim: 'var(--text-dim)',
        },
        status: {
          idle: 'var(--status-idle)',
          thinking: 'var(--status-thinking)',
          working: 'var(--status-working)',
          blocked: 'var(--status-blocked)',
          offline: 'var(--status-offline)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backdropBlur: {
        glass: '12px',
      },
      backgroundImage: {
        'glass-surface': 'var(--surface-glass)',
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 240, 255, 0.25)',
        'glow-purple': '0 0 24px rgba(157, 78, 221, 0.25)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 1.6s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
