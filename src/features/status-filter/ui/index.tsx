import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { useAppDispatch, useAppSelector } from "@app/hooks"

import {
  activeStatusFilterSelector,
  setStatusFilter,
  statusesFiltersSelector,
} from "@features/status-filter/model/slice"

export const StatusFilter = () => {
  const dispatch = useAppDispatch()
  const statusesList = useAppSelector(statusesFiltersSelector)
  const activeStatusFilter = useAppSelector(activeStatusFilterSelector)

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setStatusFilter(event.target.value))
  }

  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel>Status</InputLabel>
      <Select
        value={activeStatusFilter.toString()}
        label="Status"
        onChange={handleChange}
      >
        {statusesList.map(({ id, name }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
