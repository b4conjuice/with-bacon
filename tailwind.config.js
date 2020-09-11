module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: theme => ({
      xl: {
        css: {
          h1: {
            marginTop: 0,
            fontWeight: 'bold',
          },
          h2: {
            marginTop: '2rem',
            marginBottom: '1rem',
          },
        },
      },
      default: {
        css: {
          color: theme('colors.cobalt'),
          strong: theme('colors.cobalt'),
          h1: {
            color: theme('colors.cobalt'),
            fontWeight: 'bold',
            textAlign: 'center',
          },
          h2: {
            marginTop: '1.5rem',
            marginBottom: '.75rem',
          },
          a: {
            color: theme('colors.cb-dusty-blue'),
            fontWeight: 'bold',
            textDecoration: 'none',
          },
          img: {
            width: '2rem',
            height: '2rem',
            borderRadius: '9999px',
          },
          'ul > li:before': {
            backgroundColor: theme('colors.cb-dusty-blue'),
          },
        },
      },
      sm: {
        css: {
          h1: {
            fontSize: theme('text.4xl'),
          },
        },
      },
    }),
    extend: {
      colors: {
        cobalt: '#193549',
        'cb-blue': '#193549',
        'cb-yellow': '#ffc600',
        'cb-orange': '#ff9d00',
        'cb-mint': '#2affdf',
        'cb-off-blue': '#0d3a58',
        'cb-dusty-blue': '#35434d',
        'cb-dark-blue': '#15232d',
        'cb-pink': '#fb94ff',
        'cb-light-blue': '#9effff',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/typography')],
}
