/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        ...colors,
        primary: '#1a1a1a',
        secondary: '#7e7e7e',
        'bg-primary': '#ffffff',
        'bg-secondary': '#f5f8fc'
      },
      fontSize: {
        '3xs': ['0.45rem', '0.75rem'],
        '2xs': ['0.65rem', '0.9rem'],
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '4rem'
      },
      plugins: [
        // require('@tailwindcss/typography'),
        // require('tailwindcss-filters'),
        // require('@tailwindcss/line-clamp')
      ]
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-filters'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animated')
  ]
}
