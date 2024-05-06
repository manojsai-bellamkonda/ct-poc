'use client'
import { Icon } from '../Icon'
import { handleQRScan } from '../../utilities/scanQR'

export function ScanQR({ className }: { className: string }) {
  return (
    <div
      className={` w-12 h-12 shadow-md md:w-16 md:h-16 md:shadow-lg rounded-full flex justify-center items-center bg-blue-cyan  shadow-slate-300 cursor-pointer ${className}`}
      onClick={() => handleQRScan()}
    >
      <Icon iconName="barcode" size={24} color="white" />
    </div>
  )
}
