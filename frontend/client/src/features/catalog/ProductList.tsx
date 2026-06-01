import { Grid } from '@mui/material'
import type { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[]
}


export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={3}>
      {products.map(x => (
        <Grid size={3} sx={{ display: 'flex' }} key={x.id}>
          <ProductCard product={x} />
        </Grid>
      ))}
    </Grid>
  )
}

