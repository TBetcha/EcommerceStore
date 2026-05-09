import { useEffect, useState } from "react"
import type { Product } from "../src/app/models/product"
import Catalog from "./features/catalog/Catalog"
import { ThemeProvider, Container, createTheme, Box, CssBaseline } from "@mui/material"
import NavBar from "../src/app/layout/NavBar"

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [ darkMode, setDarkMode ] = useState<bool>(false)
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


  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  
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
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
