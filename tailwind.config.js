/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    colors: ({colors}) => ({
      ...colors,
      'primary': colors.purple,
      'secondary': colors.fuchsia,
      'night': '#14151c',
      'smoke': '#F2F3F5',
      'rose': '#DC7F9B',
    }),
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

