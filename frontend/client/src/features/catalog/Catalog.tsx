import type { Product } from "../../app/models/product";
import  { Button } from "@mui/material";

type Props = {
  products: Product[],
  addProduct: () => void
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ul>{products.map(x => (
        <li key={x.id}>{x.name} - {x.price}</li>))}
      </ul>
      <Button variant='contained' onClick={addProduct}>Add a jawn</Button>
    </>
  )
}

