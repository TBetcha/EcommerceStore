import {Box} from '@mui/material'
import type Product from "../../app/models/product"
import ProductCard from "./ProductCard";

type Props = {
  products: Product[]
}


export default function ProductList({ products }: Props) {
  return (
    <Box sx={{
      display:'flex', 
      flexWrap: 'wrap', gap:3, 
      justifyContext:'center'}}>
      {products.map(x => (<ProductCard key={x.id} product={x} />))}
    </Box>
  )
}

