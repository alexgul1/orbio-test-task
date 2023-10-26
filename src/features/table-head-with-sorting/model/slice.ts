import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "@app/appStore"

export type SortingType = "Default" | "Rating" | "OnlineChatPrice"
export type SortDirection = "asc" | "desc"
const initialState: { sortBy: SortingType; sortDirection: SortDirection } = {
  sortBy: "Default",
  sortDirection: "desc",
}

export const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<SortingType>) => {
      state.sortBy = action.payload
      state.sortDirection = initialState.sortDirection
    },
    changeSortDirection: (state, action: PayloadAction<SortDirection>) => {
      state.sortDirection = action.payload
    },
  },
})

export const { changeSortType, changeSortDirection } = sortingSlice.actions

export const sortingStateSelector = (state: RootState) => state.sorting
