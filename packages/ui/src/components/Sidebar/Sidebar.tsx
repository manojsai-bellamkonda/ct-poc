'use client'
import { SideHeader } from './SideHeader'
import { SideItem } from './SideItem'
import { Button, IconName, sidebarData } from '@repo/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const isActive = (path: string) => usePathname() === path

  return (
    <div className="hidden md:flex flex-col max-w-5xl text-sm w-80 h-screen items-stretch text-black grow bg-gradient-to-br from-ghost-white to-white-smoke sticky top-0">
      <div className="flex pt-8">
        <img
          src={sidebarData.logoSrc}
          className="h-5 w-[88px] mx-10 my-4 object-cover border-2"
        />
      </div>
      <div className="font-semibold mx-10">{sidebarData.title}</div>
      <div className="flex-1 overflow-scroll">
        {sidebarData.links.map((link) => (
          <div className="py-4" key={link.href}>
            <Link href={link.href}>
              <SideHeader
                active={isActive(link.href)}
                iconName={link.iconName as IconName}
              >
                {link.label}
              </SideHeader>
            </Link>
            {link.subItems?.map((item) => (
              <SideItem key={item}>{item}</SideItem>
            ))}
          </div>
        ))}
      </div>
      <div className="p-8 flex flex-col gap-5">
        <div className="flex items-center gap-3 font-semibold">
          <div>
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={sidebarData.profile.src}
              alt="Profile picture"
            />
          </div>
          <div>{`${sidebarData.profile.name} #${sidebarData.profile.discriminator}`}</div>
        </div>
        <Button label="Log Out" buttonStyle="px-12"></Button>
      </div>
    </div>
  )
}
