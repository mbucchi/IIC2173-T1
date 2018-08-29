// @see: https://material-ui-next.com/style/typography/#general
// import 'typeface-roboto'

import { createMuiTheme } from "@material-ui/core"

// https://material-ui-next.com/style/color/#color-tool
// https://material.io/color/#!/?view.left=0&view.right=0&primary.color=00B0FF&secondary.color=69F0AE&secondary.text.color=000000

const primary = {
  light: "#69e2ff",
  main: "#00b0ff",
  dark: "#0081cb",
  contrastText: "#fff",
}

const secondary = {
  light: "#9fffe0",
  main: "#69f0ae",
  dark: "#2bbd7e",
  contrastText: "#333",
}

export const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    primary,
    secondary,
    background: {
      default: "#0081cb",
    },
  },
})

export const themeLight = createMuiTheme({
  palette: {
    type: "light",
    primary,
    secondary,
  },
})
