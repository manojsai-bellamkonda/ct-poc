import NextImage from 'next/image'
import { Icon, IconName } from '../Icon'
export interface NavItemProps {
  image: string | undefined
  icon?: IconName
  text: string
  isActive: boolean
}
export const NavItem = ({ image, icon, text, isActive }: NavItemProps) => {
  return (
    <div
      className={`inline-block text-center px-4 py-2 text-black ${isActive ? 'opacity-100' : 'opacity-50'}`}
    >
      {image && (
        <NextImage
          src={image}
          width="25"
          height="25"
          alt="navitem"
          className="mx-auto"
        />
      )}
      {icon && <Icon iconName={icon} className="m-auto" size={25} />}
      <p className="font-semibold text-[9px] leading-[15px] pt-2">{text}</p>
    </div>
  )
}
