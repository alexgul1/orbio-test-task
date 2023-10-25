import { combineReducers } from "@reduxjs/toolkit"
import { astrologersSlice } from "@entities/astrologers/model/slice"
import { searchSlice } from "@features/search/model/slice"
import { focusesFilterSlice } from "@features/focuses-filter/model/slice"
import { specializationFilterSlice } from "@features/specializations-filter/model/slice"

export const rootReducer = combineReducers({
  [astrologersSlice.name]: astrologersSlice.reducer,
  [searchSlice.name]: searchSlice.reducer,
  [focusesFilterSlice.name]: focusesFilterSlice.reducer,
  [specializationFilterSlice.name]: specializationFilterSlice.reducer,
})
