import "./App.css"
import { AstrologersTable } from "@widgets/table"
import {
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material"
import { Search } from "@features/search/ui"

import { useFilterRouteSubscription } from "@entities/router-navigation/lib/hooks"
import { Filters } from "@widgets/filters/ui"

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

export const App = () => {
  useFilterRouteSubscription()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Filters />
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Toolbar sx={{ p: 2 }}>
                <Typography
                  sx={{ flex: "1 1 100%" }}
                  component="h2"
                  variant="h6"
                  color="primary"
                >
                  Astrologers
                </Typography>
                <Search />
              </Toolbar>
              <AstrologersTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
