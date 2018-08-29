import * as React from "react"
import * as ReactDOM from "react-dom"
import { MuiThemeProvider } from "@material-ui/core"

import { themeDark } from "./utils/themes"
import App from "./components/App"

ReactDOM.render(
  <MuiThemeProvider theme={themeDark}>
    <App websiteTitle="Infinite Anonymous Wall" />
  </MuiThemeProvider>,
  document.getElementById("app"),
)
