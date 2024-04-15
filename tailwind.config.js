/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    colors: ({colors}) => ({
      ...colors,
      'denim': {
        '100': '#6998DD',
        '200': '#598CD9',
        '300': '#4881D5',
        '400': '#3775D2',
        '500': '#2A62B7',
        '600': '#2659A6',
        '700': '#225096',
        '800': '#1E4785',
        '900': '#1A3E74',
      },
      'secondary': colors.fuchsia,
      'night': '#14151c',
      'smoke': '#F2F3F5',
      'rose': {
        '100': '#EDBFCD',
        '200': '#E9AFC0',
        '300': '#E59FB4',
        '400': '#E08FA7',
        '500': '#DC7F9B',
        '600': '#D7708F',
        '700': '#D26082',
        '800': '#CE5076',
        '900': '#C94069',
      },
    }),
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

