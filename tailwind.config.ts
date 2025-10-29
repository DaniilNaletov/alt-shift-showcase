import twTypography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/altui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: '767px' },
        desk: { min: '768px' },
      },

      fontSize: {
        h1: ['3rem', { lineHeight: '3.75rem', fontWeight: 600 }],
        h2: ['2.25rem', { lineHeight: '2.75rem', fontWeight: 600 }],
        base: ['1.125rem', '1.75rem'],
        sm: ['1rem', '1.563rem'],
        xs: ['0.875rem', '1.25rem'],
      },

      textColor: {
        DEFAULT: 'var(--color-text-default)',

        default: 'var(--color-text-default)',
        secondary: 'hsl(var(--color-gray-5))',
        btn: 'hsl(var(--color-gray-6))',
        label: 'hsl(var(--color-gray-7))',
      },

      borderColor: {
        DEFAULT: 'hsl(var(--color-gray-3))',

        default: 'hsl(var(--color-gray-3))',
        muted: 'hsl(var(--color-gray-2))',
      },

      colors: {
        // Palette
        green: {
          DEFAULT: 'hsl(var(--color-green-1) / <alpha-value>)',
          1: 'hsl(var(--color-green-1) / <alpha-value>)',
          2: 'hsl(var(--color-green-2) / <alpha-value>)',
          3: 'hsl(var(--color-green-3) / <alpha-value>)',
          4: 'hsl(var(--color-green-4) / <alpha-value>)',
          5: 'hsl(var(--color-green-5) / <alpha-value>)',
        },
        red: {
          DEFAULT: 'hsl(var(--color-red-1) / <alpha-value>)',
          1: 'hsl(var(--color-red-1) / <alpha-value>)',
          2: 'hsl(var(--color-red-2) / <alpha-value>)',
          3: 'hsl(var(--color-red-3) / <alpha-value>)',
        },
        gray: {
          DEFAULT: 'hsl(var(--color-gray-1) / <alpha-value>)',
          1: 'hsl(var(--color-gray-1) / <alpha-value>)',
          2: 'hsl(var(--color-gray-2) / <alpha-value>)',
          3: 'hsl(var(--color-gray-3) / <alpha-value>)',
          4: 'hsl(var(--color-gray-4) / <alpha-value>)',
          5: 'hsl(var(--color-gray-5) / <alpha-value>)',
          6: 'hsl(var(--color-gray-6) / <alpha-value>)',
          7: 'hsl(var(--color-gray-7) / <alpha-value>)',
          8: 'hsl(var(--color-gray-8) / <alpha-value>)',
        },
        white: {
          DEFAULT: 'hsl(var(--color-white) / <alpha-value>)',
        },
        black: {
          DEFAULT: 'hsl(var(--color-black) / <alpha-value>)',
        },

        // Semantic
        primary: {
          DEFAULT: 'hsl(var(--color-green-5) / <alpha-value>)',
        },
        danger: {
          DEFAULT: 'hsl(var(--color-red-3) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'hsl(var(--color-green-4) / <alpha-value>)',
        },

        surface: {
          base: 'var(--color-white)',

          primary: 'hsl(var(--color-green-1) / <alpha-value>)',
          gray: 'hsl(var(--color-gray-1) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [twTypography],
}
export default config
