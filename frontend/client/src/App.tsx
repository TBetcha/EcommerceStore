import { useEffect, useState } from "react"
import type { Product } from "../src/app/models/product"
import Catalog from "./features/catalog/Catalog"
import {Box, Button, Container, Typography} from "@mui/material"

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const addProduct = () => {
    setProducts(prevState => [...prevState,
    {
      id: prevState.length + 1,
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      quantityInStock: 100,
      description: 'This is product' + (prevState.length + 1),
      pictureUrl: 'https://picsum.photo/150',
      type: 'test',
      brand: 'test'
    }])
  }

  return (
    <Container maxWidth='xl'>
      <Box sx={{display:'flex', justifyContent:'center', gap:3,  marginY:3}}>
        <Typography variant='h4'>Da' Store</Typography>
        <Button variant='contained' onClick={addProduct}>Add a jawn</Button>
      </Box>
      <Catalog products={products} />
    </Container>
  )
}

export default App
