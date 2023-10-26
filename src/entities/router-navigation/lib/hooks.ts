import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@app/hooks"
import {
  searchParamsSelector,
  setFiltersFromSearchParams,
} from "@entities/router-navigation/model/slice"
import { SearchParamsConfig } from "@entities/router-navigation/lib/searchParamsConfig"

export const useFilterRouteSubscription = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const activeFilters = useAppSelector(searchParamsSelector)

  useEffect(() => {
    for (const [key, value] of searchParams) {
      const funcToSetQuery: (value: string) => void | null =
        setFiltersFromSearchParams[key as SearchParamsConfig]

      if (funcToSetQuery) {
        const action = funcToSetQuery(value)

        if (action) {
          dispatch(action)
        }
      }
    }
  }, [])

  useEffect(() => {
    setSearchParams(activeFilters)
  }, [activeFilters])
}
