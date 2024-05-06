'use client'
import { usePathname, useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { Icon } from '../Icon'

export interface HeaderProps {
  id: number
  textStyle?: string
  iconStyle?: string
}
export const HeaderClient = ({ id, textStyle, iconStyle }: HeaderProps) => {
  const router = useRouter()
  const page = usePathname().split('/')[1]
  return (
    <div className="bg-white text-black hidden lg:flex py-8 px-8 items-center">
      <div
        className="flex mr-auto items-center cursor-pointer"
        onClick={() => router.back()}
      >
        <Icon iconName="arrowLeft" size="20px"></Icon>
        <p
          className={twMerge(
            `font-medium text-base px-1 leading-[22px] px- ${textStyle}`
          )}
        >
          Back
        </p>
      </div>

      {page === 'clients' && (
        <>
          <span
            className="flex items-center justify-center w-8 h-8 rounded-full bg-ghost-white mx-2"
            onClick={() => {
              window.alert(`Edit the client profile with id ${id}`)
            }}
          >
            <Icon iconName="edit" size="16px" className={iconStyle} />
          </span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ghost-white mx-2">
            <Icon iconName="search" size="16px" className={iconStyle} />
          </span>
        </>
      )}
    </div>
  )
}
