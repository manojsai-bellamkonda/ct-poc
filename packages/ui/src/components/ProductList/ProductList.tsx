import { products } from '../../assets'
import { ProductCard } from '../ProductCard'

export function ProductList() {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start flex-wrap gap-8">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}
