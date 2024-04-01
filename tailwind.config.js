/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {},
    colors: ({colors}) => ({
      ...colors,
      'primary': colors.indigo,
      'secondary': colors.fuchsia,
    }),
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

