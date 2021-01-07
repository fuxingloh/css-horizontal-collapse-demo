const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1536px",
      }
    }
  },
  extend: {
    fontFamily: {
      sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      mono: ['DM Mono', ...defaultTheme.fontFamily.mono]
    },
  },
  purge: {
    content: [
      'content/**/*.md',
      'content/**/*.vue',
    ]
  }
}
