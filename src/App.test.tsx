import { render } from "@testing-library/react"
import { Provider } from "react-redux"

import { appStore } from "@app/appStore"

import { App } from "./App"

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={appStore}>
      <App />
    </Provider>,
  )

  expect(getByText(/learn/i)).toBeInTheDocument()
})
