import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import {
  activeFocusFilterSelector,
  focusesFiltersSelector,
  setFocusFilter,
} from "@features/focuses-filter/model/slice"

export const FocusesFilter = () => {
  const dispatch = useAppDispatch()
  const focusesList = useAppSelector(focusesFiltersSelector)
  const activeFocusType = useAppSelector(activeFocusFilterSelector)

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setFocusFilter(Number(event.target.value)))
  }

  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel>Focus</InputLabel>
      <Select
        value={activeFocusType.toString()}
        label="Focus"
        onChange={handleChange}
      >
        {focusesList.map(({ id, name }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
