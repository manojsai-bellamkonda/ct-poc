import { ProductType } from '../../assets'
import NextImage from 'next/image'

export function ProductDetailsCard({ product }: { product: ProductType }) {
  return (
    <div className="flex flex-col md:flex-row  shadow-md shadow-gray-200 rounded-lg ">
      <NextImage
        src={product?.image || '/default-pic.png'}
        alt={product?.caption}
        width={250}
        height={350}
        className=" w-full  md:w-[50%] align-middle border border-b-2 flex-grow"
      />
      <div className="border border-b-2 p-12 flex-grow">
        <h1 className=" text-black font-semi-bold text-2xl">
          {product.caption}
        </h1>
        <p className=" text-lg my-2"> category : {product?.category}</p>
        <p className=" text-lg my-2"> collection : {product?.collection}</p>
        <p className=" text-lg my-2"> launchDate : {product?.launchDate}</p>
        <p className=" text-lg my-2"> tag : {product.tag}</p>
      </div>
    </div>
  )
}
