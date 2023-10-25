import { TextField } from "@mui/material"
import { setSearchValue } from "@features/search/model/slice"
import { useAppDispatch } from "@app/hooks"
import { ChangeEvent, useCallback } from "react"
import { debounce } from "@features/search/lib/debounce"

export const Search = () => {
  const dispatch = useAppDispatch()

  const onSearchFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value))
  }

  const debouncedOnSearchFieldChange = useCallback(
    debounce(onSearchFieldChange, 300),
    [],
  )

  return (
    <TextField
      onChange={debouncedOnSearchFieldChange}
      id="outlined-basic"
      label="Search"
      variant="outlined"
    />
  )
}
