module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cobalt: '#193549',
        'cb-blue': '#193549',
        'cb-yellow': '#ffc600',
        'cb-orange': '#FF9D00',
        'cb-mint': '#2AFFDF',
        'cb-off-blue': '#0D3A58',
        'cb-dusty-blue': '#35434d',
        'cb-dark-blue': '#15232D',
        'cb-pink': '#FB94FF',
        'cb-light-blue': '#9EFFFF',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [],
}
