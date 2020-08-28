module.exports = {
  purge: {
    enabled: true,
    content: [
      './components/**/*.tsx',
      './pages/**/*.tsx'
    ]
  },
  theme: {},
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
