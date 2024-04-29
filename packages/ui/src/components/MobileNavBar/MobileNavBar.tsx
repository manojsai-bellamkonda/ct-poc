'use client'
import Link from 'next/link'
import { NavItem } from '../NavItem'
import { NavBarDataType } from '../../assets/constant'
import { usePathname, useSearchParams } from 'next/navigation'
type Props = {
  navBarData: NavBarDataType[]
}
export const MobileNavBar: React.FC<Props> = ({ navBarData }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isActive = (path: string, queryParam?: string) => {
    return (
      pathname === path &&
      (!queryParam || searchParams.get('type') === queryParam)
    )
  }

  const handleNavItemClick = (link: string) => {
    console.log(link)
  }
  return (
    <div className=" md:hidden w-full fixed bottom-0 left-0 bg-white-smoke pt-2 pb-5 z-50">
      <div className="flex justify-center gap-3 ">
        {navBarData.map((item, index) => {
          return (
            <div key={index} onClick={() => handleNavItemClick(item.link)}>
              <Link href={item.link}>
                <NavItem
                  image={item.image}
                  icon={item.icon}
                  text={item.text}
                  isActive={isActive(item.link)}
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
