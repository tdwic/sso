import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import muiTheme from './styles/muiTheme'
import { ThemeProvider, CssBaseline } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      {/* Reset default browser styles */}
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
