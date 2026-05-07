import { useEffect, useState } from "react"
import type { Product } from "../src/app/models/product"
import Catalog from "./features/catalog/Catalog"
import { Container } from "@mui/material"
import NavBar from "../src/app/layout/NavBar"

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <>
      <NavBar />
      <Container maxWidth='xl' sx={{mt:14}}>
        {/* <Box sx={{display:'flex', justifyContent:'center', gap:3,  marginY:3}}> */}
        {/*   <Typography variant='h4'>Da Store</Typography> */}
        {/*   <Button variant='contained' onClick={addProduct}>Add a jawn</Button> */}
        {/* </Box> */}
        <Catalog products={products} />
      </Container>
    </>
  )
}

export default App
