import {  useState } from "react"
import { ThemeProvider, Container, createTheme, Box, CssBaseline } from "@mui/material"
import NavBar from "../src/app/layout/NavBar"
import { Outlet } from "react-router-dom"

function App() {
  const [ darkMode, setDarkMode ] = useState<boolean>(true)
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light')
          ? 'radial-gradient(circle, #1e3aBa, #111B27)'
          : 'radial-gradient(circle, #baecf9, #fof9ff)'
      }
    }
  })


  
  const toggleTheme = () => {
     return setDarkMode(!darkMode)
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode
            ? 'radial-gradient(circle, #1e3aBa, #111B27)'
            : 'radial-gradient(circle, #baecf9, #fof9ff)',
          py: 6
        }}
      >
        <Container maxWidth='xl' sx={{ mt: 14 }}>
          {/* <Box sx={{display:'flex', justifyContent:'center', gap:3,  marginY:3}}> */}
          {/*   <Typography variant='h4'>Da Store</Typography> */}
          {/*   <Button variant='contained' onClick={addProduct}>Add a jawn</Button> */}
          {/* </Box> */}
          <Outlet  />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
