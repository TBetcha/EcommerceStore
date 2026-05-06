import { useEffect, useState } from "react"
import type { Product } from "./product"

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
    <div>
      <h1 style={{ fontSize: '1.6rem' }}>Da' Store</h1>
      <ul>{products.map(x => (
        <li>{x.name} - {x.price}</li>))}
      </ul>
      <button onClick={addProduct}>Add a jawn</button>
    </div>
  )
}

export default App
