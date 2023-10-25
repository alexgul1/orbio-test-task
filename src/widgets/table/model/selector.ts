import { createSelector } from "@reduxjs/toolkit"
import { astrologersWithSearchFilter } from "@features/search/model/slice"
import { astrologersWithFocusFilter } from "@features/focuses-filter/model/slice"
import { Astrologer } from "@entities/astrologers/model/types"

export const astrologersWithAppliedFiltersSelector = createSelector(
  astrologersWithSearchFilter,
  astrologersWithFocusFilter,
  (
    astrologers1: Array<Astrologer>,
    astrologers2: Array<Astrologer>,
  ): Array<Astrologer> => {
    console.log(astrologers1, astrologers2)

    const combinedItems = [...astrologers1, ...astrologers2]

    // user_id is not unique identifier :(
    const nonUniqueIds = new Set<Astrologer["id"]>()
    const nonUniqueItems = new Map<Astrologer["id"], Astrologer>()

    combinedItems.forEach((item) => {
      if (nonUniqueIds.has(item.id)) {
        nonUniqueItems.set(item.id, item)
      } else {
        nonUniqueIds.add(item.id)
      }
    })

    console.log(nonUniqueIds, ...nonUniqueItems.values())

    return [...nonUniqueItems.values()]
  },
)
