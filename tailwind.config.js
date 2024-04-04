/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    colors: ({colors}) => ({
      ...colors,
      'primary': colors.indigo,
      'secondary': colors.fuchsia,
    }),
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

