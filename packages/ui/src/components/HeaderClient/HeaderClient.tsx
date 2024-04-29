'use client'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { Icon } from '../Icon'

export interface HeaderProps {
  id: number
  textStyle?: string
  iconStyle?: string
}
export const HeaderClient = ({ id, textStyle, iconStyle }: HeaderProps) => {
  const page = usePathname().split('/')[1]
  return (
    <div className="bg-white text-black hidden lg:flex py-8 px-8 items-center">
      <Link href="/" className="flex mr-auto items-center">
        <Icon iconName="arrowLeft" size="20px"></Icon>
        <p
          className={twMerge(
            `font-medium text-base leading-[22px] px- ${textStyle}`
          )}
        >
          Back
        </p>
      </Link>

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
