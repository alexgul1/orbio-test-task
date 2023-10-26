import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit"

import { astrologersListSelector } from "@entities/astrologers/model/slice"
import { RootState } from "@app/appStore"
import { Astrologer } from "@entities/astrologers/model/types"

const initialState: { isActive: boolean; searchString: string } = {
  isActive: false,
  searchString: "",
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.isActive = action.payload !== ""
      state.searchString = action.payload
    },
  },
})

export const { setSearchValue } = searchSlice.actions

export const astrologersWithSearchFilter = createSelector(
  astrologersListSelector,
  (state: RootState) => state.search,
  (astrologers: Array<Astrologer>, search): Array<Astrologer> => {
    if (!search.isActive) {
      return astrologers
    }

    const searchRegexp = new RegExp(`^${search.searchString}.*`, "i")

    return astrologers.filter(({ name }) => searchRegexp.test(name))
  },
)
