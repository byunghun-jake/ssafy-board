const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      orange: colors.orange,
      lime: colors.lime,
      green: colors.green,
      purple: colors.purple,
      teal: colors.teal,
      indigo: colors.indigo,
      violet: colors.violet,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
