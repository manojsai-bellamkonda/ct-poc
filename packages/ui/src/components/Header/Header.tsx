'use client'
import { usePathname } from 'next/navigation'
import { Icon } from '../Icon'
import { twMerge } from 'tailwind-merge'

export interface HeaderProps {
  greeting?: string
  name?: string
  textStyle?: string
  iconStyle?: string
}
export const Header = ({
  greeting = 'Good Morning',
  name = 'Sylvia',
  textStyle,
  iconStyle,
}: HeaderProps) => {
  const page = usePathname().split('/')[1]
  const isHomePage = !(page === 'clients' || page === 'profile')

  return (
    <div className="bg-white text-black hidden lg:flex py-8 px-8 items-center">
      {!isHomePage ? (
        <div
          className="flex mr-auto items-center"
          onClick={() => {
            window.alert('Go back will wor soon :-) ')
          }}
        >
          <Icon iconName="arrowLeft" size="20px"></Icon>
          <p className="font-medium text-base leading-[22px] px-2">Back</p>
        </div>
      ) : (
        <p
          className={twMerge(
            `mr-auto font-bold text-3xl leading-10 ${textStyle}`
          )}
        >
          {greeting},&nbsp;{name}!
        </p>
      )}
      {page !== 'profile' && (
        <>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ghost-white mx-2">
            <Icon
              iconName={isHomePage ? 'notification' : 'edit'}
              size="16px"
              className={iconStyle}
            />
          </span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ghost-white mx-2">
            <Icon iconName="search" size="16px" className={iconStyle} />
          </span>
        </>
      )}
    </div>
  )
}
