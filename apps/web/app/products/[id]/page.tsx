'use client'

import { useRouter, useParams } from 'next/navigation'
import { ProductDetailsCard, products } from '@repo/ui'

export default function page() {
  const router = useRouter()
  const { id } = useParams()

  if (!id) router.replace('/products')

  const productDetails = products?.filter(
    (product) => product.productId == Number(id)
  )[0]

  if (!productDetails) router.replace('/products')

  return (
    <div className=" m-8">
      {productDetails && <ProductDetailsCard product={productDetails} />}
    </div>
  )
}
