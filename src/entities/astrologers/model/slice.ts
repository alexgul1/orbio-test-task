import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "@app/appStore"
import { Astrologer } from "@entities/astrologers/model/types"

import mockData from "./mockData.json"

const initialState: { list: Array<Astrologer> } = {
  list: mockData.data,
}

export const astrologersSlice = createSlice({
  name: "astrologers",
  initialState,
  reducers: {
    removeAstrologer: (state, action: PayloadAction<Astrologer["id"]>) => {
      const removeIndex = state.list.findIndex(
        ({ id }) => id === action.payload,
      )

      state.list.splice(removeIndex, 1)
    },
  },
})

export const { removeAstrologer } = astrologersSlice.actions

export const astrologersListSelector = (state: RootState) =>
  state.astrologers.list
