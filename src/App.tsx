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
import { FocusesFilter } from "@features/focuses-filter/ui"

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>
              <Toolbar>
                <Typography
                  sx={{ flex: "1 1 100%" }}
                  component="h2"
                  variant="h6"
                  color="primary"
                >
                  Astrologers
                </Typography>
                <FocusesFilter />
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
