import {
  SortDirection,
  SortingType,
} from "@features/table-head-with-sorting/model/slice"
import { type Astrologer } from "@entities/astrologers/model/types"

export const sortMethodsMap: Record<
  SortingType,
  (array: Array<Astrologer>, sortOrder: SortDirection) => Array<Astrologer>
> = {
  Default: (astrologers, sortOrder) => {
    const offlineUsers = astrologers.filter((a) => a.status === "offline")
    const onlineUsers = astrologers.filter((a) => a.status === "online")

    const sortedOfflineUsers = offlineUsers.sort((a, b) => {
      const sortPosition = b.user_id - a.user_id
      return sortOrder === "desc" ? sortPosition : -sortPosition
    })

    const sortedOnlineUsers = onlineUsers.sort((a, b) => {
      const sortPosition = b.user_id - a.user_id
      return sortOrder === "desc" ? sortPosition : -sortPosition
    })

    return [...sortedOnlineUsers, ...sortedOfflineUsers]
  },
  Rating: (astrologers, sortOrder) => {
    return [...astrologers].sort((a, b) => {
      const sortPosition = b.rating - a.rating
      return sortOrder === "desc" ? sortPosition : -sortPosition
    })
  },
  OnlineChatPrice: (astrologers, sortOrder) => {
    return [...astrologers].sort((a, b) => {
      const onlineChatOfferA =
        a.chat_offers.find(({ type }) => type === "online")?.price || -1

      const onlineChatOfferB =
        b.chat_offers.find(({ type }) => type === "online")?.price || -1

      const sortPosition = onlineChatOfferB - onlineChatOfferA

      return sortOrder === "desc" ? sortPosition : -sortPosition
    })
  },
}
