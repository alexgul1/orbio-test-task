import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import { rootReducer } from "@app/rootReducer"

export const appStore = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof appStore.dispatch
export type RootState = ReturnType<typeof appStore.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
