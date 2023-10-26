import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material"

import { useAppDispatch, useAppSelector } from "@app/hooks"
import {
  activeSpecializationFilterSelector,
  setSpecializationFilter,
  specializationFiltersSelector,
} from "@features/specializations-filter/model/slice"

export const SpecializationFilter = () => {
  const dispatch = useAppDispatch()
  const specializationList = useAppSelector(specializationFiltersSelector)
  const activeSpecializationType = useAppSelector(
    activeSpecializationFilterSelector,
  )

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSpecializationFilter(Number(event.target.value)))
  }

  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel>Specialization</InputLabel>
      <Select
        value={activeSpecializationType.toString()}
        label="Specializtion"
        onChange={handleChange}
      >
        {specializationList.map(({ id, name }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
