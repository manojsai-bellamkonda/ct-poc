'use client'
import NextImage from 'next/image'
import { SideHeader } from './SideHeader'
import { SideItem } from './SideItem'
import { Button, User, Store } from '@repo/ui'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isActive = (path: string, queryParam?: string) => {
    return (
      pathname === path &&
      (!queryParam || searchParams.get('type') === queryParam)
    )
  }
  return (
    <div className="hidden md:flex flex-col max-w-5xl text-sm w-80 h-screen items-stretch text-black grow bg-gradient-to-br from-ghost-white  to-white-smoke sticky top-0">
      <div className="flex pt-8">
        <img
          src="/default-pic.png"
          className="h-5 w-[88px] mx-10 my-4 object-cover border-2"
        />
      </div>
      <div className="font-semibold mx-10">{Store.name}</div>
      <div className="flex-1 overflow-scroll">
        <div className="py-4 pt-16">
          <Link href="/">
            <SideHeader active={isActive('/')} iconName="letter">
              Dashboard
            </SideHeader>
          </Link>
        </div>
        <div className="py-4">
          <Link href={{ pathname: '/clients', query: { type: 'all' } }}>
            <SideHeader active={false} iconName="user">
              My Clients
            </SideHeader>
          </Link>
          <Link href={{ pathname: '/clients', query: { type: 'all' } }}>
            <SideItem active={isActive('/clients', 'all')}>All</SideItem>
          </Link>
          <Link
            href={{ pathname: '/clients', query: { type: 'newly_assigned' } }}
          >
            <SideItem active={isActive('/clients', 'newly_assigned')}>
              Newly Assigned
            </SideItem>
          </Link>
          <Link
            href={{
              pathname: '/clients',
              query: { type: 'recently_active' },
            }}
          >
            <SideItem active={isActive('/clients', 'recently_active')}>
              Recently Active
            </SideItem>
          </Link>
        </div>
        <div className="py-4">
          <Link
            href={{ pathname: '/products', query: { type: 'new_arrivals' } }}
          >
            <SideHeader active={false} iconName="letter">
              Products
            </SideHeader>
          </Link>
          <Link
            href={{ pathname: '/products', query: { type: 'new_arrivals' } }}
          >
            <SideItem active={isActive('/products', 'new_arrivals')}>
              New Arrivals
            </SideItem>
          </Link>
          <Link href={{ pathname: '/products', query: { type: 'tops' } }}>
            <SideItem active={isActive('/products', 'tops')}>Tops</SideItem>
          </Link>
          <Link href={{ pathname: '/products', query: { type: 'dresses' } }}>
            <SideItem active={isActive('/products', 'dresses')}>
              Dresses
            </SideItem>
          </Link>
          <Link href={{ pathname: '/products', query: { type: 'denim' } }}>
            <SideItem active={isActive('/products', 'denim')}>Denim</SideItem>
          </Link>
          <Link href={{ pathname: '/products', query: { type: 'work_wear' } }}>
            <SideItem active={isActive('/products', 'work_wear')}>
              Work Wear
            </SideItem>
          </Link>
          <Link
            href={{
              pathname: '/products',
              query: { type: 'shoes_accessories' },
            }}
          >
            <SideItem active={isActive('/products', 'shoes_accessories')}>
              Shoes & Accessories
            </SideItem>
          </Link>
        </div>
      </div>
      <div className="p-8 flex flex-col gap-5">
        <div className="flex items-center gap-3 font-semibold">
          <div>
            <NextImage
              src={User.profilePic}
              height={48}
              width={48}
              alt={User.name}
              className="rounded-full object-cover"
            />
          </div>
          <div>{`${User.name} #${User.id}`}</div>
        </div>
        <Button
          label="Log Out"
          buttonStyle="px-12"
          onClick={() => alert('redirected to the sign up page')}
        ></Button>
      </div>
    </div>
  )
}
