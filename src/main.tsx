import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { appStore } from "@app/appStore"
import { App } from "./App"

import "./index.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(<Route path={"/"} element={<App />} />),
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
