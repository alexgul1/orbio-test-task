import { combineReducers } from "@reduxjs/toolkit"
import { astrologersSlice } from "@entities/astrologers/model/slice"
import { searchSlice } from "@features/search/model/slice"
import { focusesFilterSlice } from "@features/focuses-filter/model/slice"
import { specializationFilterSlice } from "@features/specializations-filter/model/slice"
import { sortingSlice } from "@features/table-head-with-sorting/model/slice"
import { statusFilterSlice } from "@features/status-filter/model/slice"

export const rootReducer = combineReducers({
  [astrologersSlice.name]: astrologersSlice.reducer,
  [searchSlice.name]: searchSlice.reducer,
  [focusesFilterSlice.name]: focusesFilterSlice.reducer,
  [specializationFilterSlice.name]: specializationFilterSlice.reducer,
  [sortingSlice.name]: sortingSlice.reducer,
  [statusFilterSlice.name]: statusFilterSlice.reducer,
})
