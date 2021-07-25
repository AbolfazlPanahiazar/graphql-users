module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '80': '80px',
      }
    },
    maxWidth: {
      '500': '500px',
    },
    minHeight: {
      '100': '100px',
      '500': '500px',
      'screen': '100vh',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
