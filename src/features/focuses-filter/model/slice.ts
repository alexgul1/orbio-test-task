import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { astrologersListSelector } from "@entities/astrologers/model/slice"
import { Astrologer, AstrologerFocus } from "@entities/astrologers/model/types"
import { RootState } from "@app/appStore"

interface FocusesFilterState {
  isActive: boolean
  type: AstrologerFocus["id"]
}

const initialState: FocusesFilterState = {
  isActive: false,
  type: -1,
}

export const focusesFilterSlice = createSlice({
  name: "focusesFilter",
  initialState,
  reducers: {
    setFocusFilter: (state, action: PayloadAction<number>) => {
      console.log(action)
      state.isActive = action.payload !== -1
      state.type = action.payload
    },
  },
})

export const { setFocusFilter } = focusesFilterSlice.actions

export const focusesFiltersSelector = createSelector(
  astrologersListSelector,
  (astrologers): Array<AstrologerFocus> => {
    const focusesList = new Map<number, AstrologerFocus>()
    focusesList.set(-1, { id: -1, name: "All" })

    astrologers.forEach(({ focuses }) =>
      focuses.forEach((focus) => focusesList.set(focus.id, focus)),
    )

    return [...focusesList.values()]
  },
)

export const astrologersWithFocusFilter = createSelector(
  astrologersListSelector,
  (state: RootState) => state.focusesFilter,
  (astrologers: Array<Astrologer>, focus): Array<Astrologer> => {
    if (!focus.isActive) {
      return astrologers
    }

    return astrologers.filter(({ focuses }) =>
      focuses.some(({ id }) => id === focus.type),
    )
  },
)

export const activeFocusFilterSelector = (state: RootState) =>
  state.focusesFilter.type
