import mockData from "./mockData.json"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@app/appStore"
import { Astrologer } from "@entities/astrologers/model/types"

const initialState: { list: Array<Astrologer> } = {
  list: mockData.data,
}

export const astrologersSlice = createSlice({
  name: "astrologers",
  initialState,
  reducers: {
    removeAstrologer: (state, action: PayloadAction<Astrologer["user_id"]>) => {
      const removeIndex = state.list.findIndex(
        ({ user_id }) => user_id === action.payload,
      )

      state.list.splice(removeIndex, 1)
    },
  },
})

export const { removeAstrologer } = astrologersSlice.actions

export const astrologersListSelector = (state: RootState) =>
  state.astrologers.list
