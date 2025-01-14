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
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
      },
      textColor: {
        foreground: {
          DEFAULT: "var(--foreground)",
          70: "color-mix(in srgb, var(--foreground) 70%, transparent)",
        },
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      animation: {
        scan: 'scan 2s linear infinite'
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
            '--tw-prose-body': 'var(--foreground)',
            '--tw-prose-headings': 'var(--foreground)',
            '--tw-prose-lead': 'var(--foreground)',
            '--tw-prose-links': 'var(--accent)',
            '--tw-prose-bold': 'var(--foreground)',
            '--tw-prose-counters': 'var(--foreground)',
            '--tw-prose-bullets': 'var(--foreground)',
            '--tw-prose-hr': 'var(--foreground)',
            '--tw-prose-quotes': 'var(--foreground)',
            '--tw-prose-quote-borders': 'var(--accent)',
            '--tw-prose-captions': 'var(--foreground)',
            '--tw-prose-code': 'var(--foreground)',
            '--tw-prose-pre-code': 'var(--foreground)',
            '--tw-prose-pre-bg': 'transparent',
            '--tw-prose-th-borders': 'var(--foreground)',
            '--tw-prose-td-borders': 'var(--foreground)',
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
              backgroundColor: 'rgb(var(--foreground) / 0.1)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'a:hover': {
              color: 'var(--accent)',
              textDecoration: 'none',
            },
            pre: {
              padding: '1.5em',
              borderRadius: '0.375rem',
              backgroundColor: 'transparent',
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
