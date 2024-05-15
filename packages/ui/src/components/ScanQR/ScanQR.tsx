'use client'
import { Icon } from '../Icon'
import { handleQRScan } from '../../utilities/scanQR'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function ScanQR({ className }: { className: string }) {
  const router = useRouter()

  const handleQRData = (event: MessageEvent) => {
    const productId = event?.data
    console.log('Product Id from React Native => ', productId)
    if (productId) router.push(`/products/${productId}`)
    else router.replace('/products')
  }

  useEffect(() => {
    document.addEventListener('message', handleQRData as EventListener)

    return () => {
      document.removeEventListener('message', handleQRData as EventListener)
    }
  }, [])

  return (
    <div
      className={` w-12 h-12 shadow-md md:w-16 md:h-16 md:shadow-lg rounded-full flex justify-center items-center bg-blue-cyan  shadow-slate-300 cursor-pointer ${className}`}
      onClick={() => handleQRScan()}
    >
      <Icon iconName="barcode" size={24} color="white" />
    </div>
  )
}
