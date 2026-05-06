import type { Product } from "../../app/models/product";

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
      <button onClick={addProduct}>Add a jawn</button>
    </>
  )
}

