import { useParams } from "react-router-dom"
import type { Product } from "../../app/models/product"
import { useEffect, useState } from "react"

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>()

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error))
  }, [id])

  return (
    <div>{product?.name}</div>
  )
}

