import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { appStore } from "@app/appStore"
import { App } from "./App"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
