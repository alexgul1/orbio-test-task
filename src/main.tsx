import * as React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import { appStore } from "@app/appStore"

import { App } from "./App"

const router = createBrowserRouter(
  createRoutesFromElements(<Route path={"/"} element={<App />} />),
)

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
