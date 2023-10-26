import { Astrologer } from "@entities/astrologers/model/types"
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { astrologersListSelector } from "@entities/astrologers/model/slice"
import { RootState } from "@app/appStore"

interface StatusFilterState {
  isActive: boolean
  type: string | -1
}

const initialState: StatusFilterState = {
  isActive: false,
  type: -1,
}

export const statusFilterSlice = createSlice({
  name: "statusFilter",
  initialState,
  reducers: {
    setStatusFilter: (
      state,
      action: PayloadAction<StatusFilterState["type"]>,
    ) => {
      state.isActive = action.payload !== -1
      state.type = action.payload
    },
  },
})

export const { setStatusFilter } = statusFilterSlice.actions

export const statusesFiltersSelector = createSelector(
  astrologersListSelector,
  (astrologers): Array<Record<string, string | number>> => {
    const statusesList = new Map<
      number | string,
      Record<string, string | number>
    >()

    statusesList.set(-1, { id: -1, name: "All" })

    astrologers.forEach(({ status }) =>
      statusesList.set(status, { id: status, name: status }),
    )

    return [...statusesList.values()]
  },
)
export const astrologersWithStatusFilter = createSelector(
  astrologersListSelector,
  (state: RootState) => state.statusFilter,
  (astrologers: Array<Astrologer>, statusState): Array<Astrologer> => {
    if (!statusState.isActive) {
      return astrologers
    }

    return astrologers.filter(({ status }) => status === statusState.type)
  },
)

export const activeStatusFilterSelector = (state: RootState) =>
  state.statusFilter.type
