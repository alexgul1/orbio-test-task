import { createSelector } from "@reduxjs/toolkit"

import { astrologersWithSearchFilter } from "@features/search/model/slice"
import { astrologersWithFocusFilter } from "@features/focuses-filter/model/slice"
import { Astrologer } from "@entities/astrologers/model/types"
import { astrologersWithSpecializationFilter } from "@features/specializations-filter/model/slice"
import { sortingStateSelector } from "@features/table-head-with-sorting/model/slice"
import { sortMethodsMap } from "@features/table-head-with-sorting/lib/sortMethods"
import { astrologersWithStatusFilter } from "@features/status-filter/model/slice"

export const astrologersWithAppliedFiltersSelector = createSelector(
  astrologersWithSearchFilter,
  astrologersWithFocusFilter,
  astrologersWithSpecializationFilter,
  astrologersWithStatusFilter,
  (...astrologersList): Array<Astrologer> => {
    const commonIds = astrologersList.reduce(
      (acc, array) => {
        const ids = new Set(array.map((item) => item.id))
        return new Set([...acc].filter((id) => ids.has(id)))
      },
      new Set(astrologersList[0].map((item) => item.id)),
    )

    return astrologersList[0].filter((item) => commonIds.has(item.id))
  },
)

export const sortedAstrologersWithFilters = createSelector(
  astrologersWithAppliedFiltersSelector,
  sortingStateSelector,
  (astrologers, sortingState) =>
    sortMethodsMap[sortingState.sortBy](
      astrologers,
      sortingState.sortDirection,
    ),
)
