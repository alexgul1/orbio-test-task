import { Astrologer } from "@entities/astrologers/model/types"

export enum VisibleColumns {
  USER_ID = "user_ID",
  IMAGE_MINI = "image_mini",
  NAME = "name",
  SUPPLY_TYPE = "supply_type",
  ASTROLOGY_TYPE = "astrology_type",
  ONLINE_CHAT_OFFERS = "online_chat_offers",
  RATING = "rating",
  FOCUSES = "focuses",
  LANGUAGES = "languages",
  SPECIALIZATION = "specialization",
  STATUS = "status",
}

export const tableColumns = [
  {
    id: VisibleColumns.USER_ID,
    translation: "ID",
    sortable: true,
    sortType: "Default",
  },
  {
    id: VisibleColumns.IMAGE_MINI,
    translation: "Photo",
  },
  {
    id: VisibleColumns.NAME,
    translation: "Name",
  },
  {
    id: VisibleColumns.SUPPLY_TYPE,
    translation: "Supply type",
  },
  {
    id: VisibleColumns.ASTROLOGY_TYPE,
    translation: "Astrology type",
  },
  {
    id: VisibleColumns.ONLINE_CHAT_OFFERS,
    translation: "Online chat price",
    sortable: true,
    sortType: "OnlineChatPrice",
  },
  {
    id: VisibleColumns.RATING,
    translation: "Rating",
    sortable: true,
    sortType: "Rating",
  },
  {
    id: VisibleColumns.FOCUSES,
    translation: "Focuses",
  },
  {
    id: VisibleColumns.LANGUAGES,
    translation: "Languages",
  },
  {
    id: VisibleColumns.SPECIALIZATION,
    translation: "Specializations",
  },
  {
    id: VisibleColumns.STATUS,
    translation: "Status",
  },
]

export const dataParser: {
  [key in VisibleColumns]: (obj: Astrologer) => string | number
} = {
  [VisibleColumns.USER_ID]: (data) => data.user_id,
  [VisibleColumns.IMAGE_MINI]: (data): string => data.image_mini,
  [VisibleColumns.NAME]: (data) => data.name,
  [VisibleColumns.SUPPLY_TYPE]: (data) => data.supply_type.type,

  [VisibleColumns.ASTROLOGY_TYPE]: (data) => data.astrology_type,
  [VisibleColumns.ONLINE_CHAT_OFFERS]: (data) => {
    const onlineChatOffers = data.chat_offers.find(
      ({ type }) => type === "online",
    )

    return onlineChatOffers ? onlineChatOffers.price : "-"
  },
  [VisibleColumns.RATING]: (data) => data.rating,
  [VisibleColumns.FOCUSES]: (data) =>
    data.focuses.reduce((acc, focus) => focus.name.concat(", ", acc), ""),
  [VisibleColumns.LANGUAGES]: (data) =>
    data.languages.reduce(
      (acc, language) => language.name.concat(", ", acc),
      "",
    ),
  [VisibleColumns.SPECIALIZATION]: (data) =>
    data.specializations.reduce(
      (acc, specialization) => specialization.name.concat(", ", acc),
      "",
    ),
  [VisibleColumns.STATUS]: (data) => data.status,
}
