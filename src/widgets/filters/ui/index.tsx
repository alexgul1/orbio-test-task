import { Grid, Paper } from "@mui/material"
import { StatusFilter } from "@features/status-filter/ui"
import { SpecializationFilter } from "@features/specializations-filter/ui"
import { FocusesFilter } from "@features/focuses-filter/ui"

export const Filters = () => (
  <Paper sx={{ p: 3 }}>
    <Grid container spacing={2}>
      <Grid item>
        <StatusFilter />
      </Grid>
      <Grid item>
        <SpecializationFilter />
      </Grid>
      <Grid item>
        <FocusesFilter />
      </Grid>
    </Grid>
  </Paper>
)
