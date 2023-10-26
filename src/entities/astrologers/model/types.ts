export type Astrologer = {
  id: string
  name: string
  astrology_type: string
  image: string
  user_id: number
  image_mini: string
  slogan: string
  description: string
  description_experience: string
  rating: number
  experience: number
  feedback_count: number
  review_count: number
  total_orders: number
  sort_order: number
  joined_time: number
  focuses: Array<AstrologerFocus>
  languages: Array<AstrologerLanguage>
  specializations: Array<AstrologerSpecialization>
  supply_type: AstrologerSupplyType
  chat_offers: Array<AstrologerChatOffer>
  status: string
}

export type AstrologerFocus = {
  id: number
  name: string
}

export type AstrologerLanguage = {
  code: string
  name: string
  native_name: string
}

export type AstrologerSpecialization = {
  id: number
  name: string
}

export type AstrologerSupplyType = {
  id: number
  type: string
}

export type AstrologerChatOffer = {
  type: string
  price: number
  limit: number
  limit_is_exhausted: boolean
  offer: null
  trial_minutes: number
}
