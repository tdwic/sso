import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    mode: "light", // or "dark"
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#ffffffff",
      paper: "#eeb3b3ff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default muiTheme;