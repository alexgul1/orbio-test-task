import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "@app/appStore"
import { SearchParamsConfig } from "@entities/router-navigation/lib/searchParamsConfig"

import { setStatusFilter } from "@features/status-filter/model/slice"
import { setSearchValue } from "@features/search/model/slice"
import { setSpecializationFilter } from "@features/specializations-filter/model/slice"
import { setFocusFilter } from "@features/focuses-filter/model/slice"

export const searchParamsSelector = createSelector(
  (state: RootState) => state.statusFilter,
  (state: RootState) => state.focusesFilter,
  (state: RootState) => state.specializationFilter,
  (state: RootState) => state.search,
  (statusFilter, focusFilter, specializationFilter, searchFilter) => {
    const activeFilters: Record<string, string> = {}

    if (statusFilter.isActive) {
      activeFilters[SearchParamsConfig.STATUS] = String(statusFilter.type)
    }

    if (focusFilter.isActive) {
      activeFilters[SearchParamsConfig.FOCUS] = String(focusFilter.type)
    }

    if (specializationFilter.isActive) {
      activeFilters[SearchParamsConfig.SPECIALIZATION] = String(
        specializationFilter.type,
      )
    }

    if (searchFilter.isActive) {
      activeFilters[SearchParamsConfig.SEARCH] = searchFilter.searchString
    }

    return activeFilters
  },
)

export const setFiltersFromSearchParams: Record<
  SearchParamsConfig,
  (value: string) => void
> = {
  [SearchParamsConfig.STATUS]: (value) => setStatusFilter(value),
  [SearchParamsConfig.SEARCH]: (value) => setSearchValue(value),
  [SearchParamsConfig.SPECIALIZATION]: (value) =>
    setSpecializationFilter(Number(value)),
  [SearchParamsConfig.FOCUS]: (value) => setFocusFilter(Number(value)),
}
