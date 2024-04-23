'use client'
import { Icon } from '../Icon'
import { twMerge } from 'tailwind-merge'

export interface HeaderProps {
  page?: string
  greeting?: string
  name: string
  textStyle?: string
  iconStyle?: string
  isHelperIcon?: boolean
}
export const Header = ({
  page = 'home',
  greeting = 'Good Morning',
  name,
  textStyle,
  iconStyle,
  isHelperIcon = true,
}: HeaderProps) => {
  return (
    <div className="bg-white text-black hidden lg:flex py-8 px-8 items-center">
      {page !== 'home' ? (
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
      {isHelperIcon && (
        <>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ghost-white mx-2">
            <Icon
              iconName={page === 'home' ? 'notification' : 'edit'}
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
