'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '../Icon'

export interface HeaderProps {
  textStyle?: string
  iconStyle?: string
}
export const HeaderClient = ({ iconStyle }: HeaderProps) => {
  const page = usePathname().split('/')[1]
  return (
    <div className="bg-white text-black hidden lg:flex py-8 px-8 items-center">
      <Link href="/" className="flex mr-auto items-center">
        <Icon iconName="arrowLeft" size="20px"></Icon>
        <p className="font-medium text-base leading-[22px] px-2">Back</p>
      </Link>

      {page === 'clients' && (
        <>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ghost-white mx-2">
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
