import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        foreground: "#ffffff",
        accent: {
          DEFAULT: "#ffffff",
          dark: "#cccccc",
          light: "#eeeeee",
        },
        secondary: {
          DEFAULT: "#333333",
          dark: "#222222",
        },
        text: {
          primary: "#ffffff",
          secondary: "#999999",
          tertiary: "#666666",
        }
      },
      textColor: {
        foreground: {
          DEFAULT: "#ffffff",
          70: "rgba(255, 255, 255, 0.7)",
        },
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        }
      },
      animation: {
        scan: 'scan 2s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            '--tw-prose-body': '#ffffff',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-lead': '#ffffff',
            '--tw-prose-links': '#ffffff',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': '#ffffff',
            '--tw-prose-bullets': '#ffffff',
            '--tw-prose-hr': '#333333',
            '--tw-prose-quotes': '#ffffff',
            '--tw-prose-quote-borders': '#333333',
            '--tw-prose-captions': '#999999',
            '--tw-prose-code': '#ffffff',
            '--tw-prose-pre-code': '#ffffff',
            '--tw-prose-pre-bg': '#222222',
            '--tw-prose-th-borders': '#333333',
            '--tw-prose-td-borders': '#333333',
            h1: {
              fontWeight: '400',
            },
            h2: {
              fontWeight: '400',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              fontWeight: '400',
              fontSize: '1.25em',
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },
            code: {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'a:hover': {
              color: '#cccccc',
              textDecoration: 'none',
            },
            pre: {
              padding: '1.5em',
              borderRadius: '0.375rem',
              backgroundColor: '#222222',
            },
          }
        }
      }
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;

export default config;
