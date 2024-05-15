'use client'
import NextImage from 'next/image'
import { useRouter } from 'next/navigation'
import { ProductType } from '../../assets'

export function ProductCard({ product }: { product: ProductType }) {
  const router = useRouter()
  const handleProductClick = (productId: number) => {
    router.push(`products/${productId}`)
  }

  return (
    <div
      className="flex flex-col w-[80%] md:max-w-[250px] shadow-md shadow-gray-200 rounded-lg cursor-pointer hover:shadow-xl"
      onClick={() => handleProductClick(product.productId)}
    >
      <NextImage
        src={product?.image || '/default-pic.png'}
        alt={product?.caption}
        width={250}
        height={350}
        className=" align-middle border border-b-2 w-full"
      />
      <div className="border border-b-2 py-4">
        <p className=" text-center">{product.caption}</p>
        <div className="flex justify-between px-4 pt-2">
          <div> {product.category}</div>
          <div>{product.collection}</div>
        </div>
      </div>
    </div>
  )
}
