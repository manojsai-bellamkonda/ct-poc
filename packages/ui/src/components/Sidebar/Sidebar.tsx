'use client'
import { SideHeader } from './SideHeader'
import { SideItem } from './SideItem'
import { Button } from '@repo/ui'

export function Sidebar() {
  return (
    <div className="hidden md:flex flex-col max-w-5xl text-sm w-80 h-screen items-stretch text-black grow bg-gradient-to-br from-ghost-white  to-white-smoke sticky top-0">
      <div className="flex pt-8">
        <img
          src="/default-pic.png"
          className="h-5 w-[88px] mx-10 my-4 object-cover border-2"
        />
      </div>
      <div className="font-semibold mx-10">#39 Water Tower Place</div>
      <div className="flex-1 overflow-scroll">
        <div className="py-4 pt-16">
          <SideHeader active={true} iconName="letter">
            Dashboard
          </SideHeader>
        </div>
        <div className="py-4">
          <SideHeader active={false} iconName="user">
            My Clients
          </SideHeader>
          <SideItem>All</SideItem>
          <SideItem>Newly Assigned</SideItem>
          <SideItem>Recently Active</SideItem>
        </div>
        <div className="py-4">
          <SideHeader iconName="dressHanger">Products</SideHeader>
          <SideItem>New Arrivals</SideItem>
          <SideItem>Tops</SideItem>
          <SideItem>Dresses</SideItem>
          <SideItem>Denim</SideItem>
          <SideItem>Work Wear</SideItem>
          <SideItem>Shoes & Accessories</SideItem>
        </div>
      </div>
      <div className="p-8 flex flex-col gap-5">
        <div className="flex items-center gap-3 font-semibold">
          <div>
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="/profile-pic.png"
              alt="lady"
            />
          </div>
          <div>Sylvia #33457</div>
        </div>
        <Button label="Log Out" buttonStyle="px-12"></Button>
      </div>
    </div>
  )
}
