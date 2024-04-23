'use client'
import { twMerge } from 'tailwind-merge'
import { Icon, IconName } from '../Icon'
export interface ToolCardProps {
  icon: IconName
  title: string
  subtitle: string
  link?: string
  textStyle?: string
  iconStyle?: string
}
export const ToolCard = ({
  icon,
  title,
  subtitle,
  link,
  textStyle,
  iconStyle,
}: ToolCardProps) => {
  return (
    <div
      className={twMerge(
        `inline-flex bg-white-smoke p-5 items-center rounded-lg  ${textStyle}`,
        link ? 'cursor-pointer' : ''
      )}
      onClick={() => {
        if (link) window.alert(`Redirect to Tools Page with link ${link}`)
      }}
    >
      {icon && (
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
          <Icon iconName={icon} className={twMerge(`w-6 ${iconStyle}`)} />
        </span>
      )}
      <div
        className={`flex flex-col text-black px-2 ${link ? 'pr-8 lg:pr-20' : 'pr-12 lg:pr-24'}`}
      >
        <p className="font-bold text-sm leading-4 capitalize">{title}</p>
        <p className="font-medium text-sm leading-5">{subtitle}</p>
      </div>
      {link && (
        <Icon
          iconName="linkIcon"
          className={twMerge(`w-4 ml-auto ${iconStyle}`)}
        />
      )}
    </div>
  )
}
