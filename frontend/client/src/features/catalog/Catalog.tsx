import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";

type Props = {
  products: Product[],
  addProduct: () => void
}

export default function Catalog({ products }: Props) {
  return (
    <>
      <ProductList products={products} />
    </>
  )
}

