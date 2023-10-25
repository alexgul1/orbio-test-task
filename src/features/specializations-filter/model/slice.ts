import {
  Astrologer,
  AstrologerFocus,
  AstrologerSpecialization,
} from "@entities/astrologers/model/types"
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { astrologersListSelector } from "@entities/astrologers/model/slice"
import { RootState } from "@app/appStore"

interface SpecializationFilterState {
  isActive: boolean
  type: AstrologerSpecialization["id"]
}

const initialState: SpecializationFilterState = {
  isActive: false,
  type: -1,
}

export const specializationFilterSlice = createSlice({
  name: "specializationFilter",
  initialState,
  reducers: {
    setSpecializationFilter: (state, action: PayloadAction<number>) => {
      state.isActive = action.payload !== -1
      state.type = action.payload
    },
  },
})
export const { setSpecializationFilter } = specializationFilterSlice.actions

export const specializationFiltersSelector = createSelector(
  astrologersListSelector,
  (astrologers): Array<AstrologerFocus> => {
    const specializationList = new Map<number, AstrologerSpecialization>()
    specializationList.set(-1, { id: -1, name: "All" })

    astrologers.forEach(({ specializations }) =>
      specializations.forEach((specialization) =>
        specializationList.set(specialization.id, specialization),
      ),
    )

    return [...specializationList.values()]
  },
)

export const astrologersWithSpecializationFilter = createSelector(
  astrologersListSelector,
  (state: RootState) => state.specializationFilter,
  (astrologers: Array<Astrologer>, specialization): Array<Astrologer> => {
    if (!specialization.isActive) {
      return astrologers
    }

    return astrologers.filter(({ specializations }) =>
      specializations.some(({ id }) => id === specialization.type),
    )
  },
)

export const activeSpecializationFilterSelector = (state: RootState) =>
  state.specializationFilter.type
