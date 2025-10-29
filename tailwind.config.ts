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
        h1: ['1.875rem', { lineHeight: '2.5rem', fontWeight: 400 }],
        h2: ['1.5rem', { lineHeight: '1.8rem', fontWeight: 400 }],
        h3: ['1.25rem', { lineHeight: '1.5rem', fontWeight: 400 }],
        h4: ['1.063rem', { lineHeight: '1.5rem', fontWeight: 600 }],
        base: ['1.0rem', '1.5rem'],
        sm: ['0.875rem', '1.25rem'],
        xs: ['0.75rem', '1.0rem'],
      },

      textColor: {
        DEFAULT: 'var(--color-text-default)',

        default: 'var(--color-text-default)',
        secondary: 'hsl(var(--color-gray-5))',
        disabled: 'hsl(var(--color-gray-4))',
      },

      borderColor: {
        DEFAULT: 'hsl(var(--color-gray-4))',

        default: 'hsl(var(--color-gray-4))',
        muted: 'hsl(var(--color-gray-2))',
        disabled: 'hsl(var(--color-gray-2))',
      },

      colors: {
        // Palette
        blue: {
          DEFAULT: 'hsl(var(--color-blue-1) / <alpha-value>)',
          1: 'hsl(var(--color-blue-1) / <alpha-value>)',
          2: 'hsl(var(--color-blue-2) / <alpha-value>)',
          3: 'hsl(var(--color-blue-3) / <alpha-value>)',
          4: 'hsl(var(--color-blue-4) / <alpha-value>)',
          5: 'hsl(var(--color-blue-5) / <alpha-value>)',
          6: 'hsl(var(--color-blue-6) / <alpha-value>)',
        },
        green: {
          DEFAULT: 'hsl(var(--color-green-1) / <alpha-value>)',
          1: 'hsl(var(--color-green-1) / <alpha-value>)',
          2: 'hsl(var(--color-green-2) / <alpha-value>)',
          3: 'hsl(var(--color-green-3) / <alpha-value>)',
          4: 'hsl(var(--color-green-4) / <alpha-value>)',
          5: 'hsl(var(--color-green-5) / <alpha-value>)',
          6: 'hsl(var(--color-green-6) / <alpha-value>)',
        },
        red: {
          DEFAULT: 'hsl(var(--color-red-1) / <alpha-value>)',
          // 1: 'hsl(var(--color-red-1) / <alpha-value>)',
          2: 'hsl(var(--color-red-2) / <alpha-value>)',
          // 3: 'hsl(var(--color-red-3) / <alpha-value>)',
          // 4: 'hsl(var(--color-red-4) / <alpha-value>)',
          5: 'hsl(var(--color-red-5) / <alpha-value>)',
          6: 'hsl(var(--color-red-6) / <alpha-value>)',
        },
        gray: {
          DEFAULT: 'hsl(var(--color-gray-1) / <alpha-value>)',
          1: 'hsl(var(--color-gray-1) / <alpha-value>)',
          2: 'hsl(var(--color-gray-2) / <alpha-value>)',
          3: 'hsl(var(--color-gray-3) / <alpha-value>)',
          4: 'hsl(var(--color-gray-4) / <alpha-value>)',
          5: 'hsl(var(--color-gray-5) / <alpha-value>)',
          // 6: 'hsl(var(--color-gray-6) / <alpha-value>)',
        },
        white: {
          DEFAULT: 'hsl(var(--color-white) / <alpha-value>)',
        },
        black: {
          DEFAULT: 'hsl(var(--color-black) / <alpha-value>)',
        },

        // Semantic
        primary: {
          DEFAULT: 'hsl(var(--color-blue-5) / <alpha-value>)',
        },
        danger: {
          DEFAULT: 'hsl(var(--color-red-5) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'hsl(var(--color-green-6) / <alpha-value>)',
        },
        contrast: {
          DEFAULT: 'hsl(var(--color-contrast) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-black) / <alpha-value>)',
        },

        surface: {
          primary: 'hsl(var(--color-blue-2) / <alpha-value>)',
          success: 'hsl(var(--color-green-1) / <alpha-value>)',
          danger: 'hsl(var(--color-red-2) / <alpha-value>)',

          base: 'var(--color-level1)',
          level2: 'var(--color-level2)',

          muted: 'hsl(var(--color-gray-1) / <alpha-value>)',
          skeleton: 'hsl(var(--color-gray-2) / <alpha-value>)',
        },
      },

      boxShadow: {
        card: '0px 16px 70px 0px #00000024',
      },
    },
  },
  plugins: [twTypography],
}
export default config
