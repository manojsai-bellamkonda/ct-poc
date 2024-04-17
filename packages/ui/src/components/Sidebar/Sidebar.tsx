"use client";
import { SideHeader } from "./SideHeader";
import { SideItem } from "./SideItem";
import { Button } from "@repo/ui";

export function Sidebar() {
  return (
    <div className="flex flex-col max-w-5xl text-sm lg:flex w-80 min-h-screen items-stretch shrink-0 text-black">
      <div className="flex flex-col grow items-stretch bg-gradient-to-b from-white via-white to-gray-300">
        <div className="flex pt-8">
          <img src="default-pic.png" className="h-5 mx-10 my-4" />
        </div>
        <div className="flex font-semibold mx-10">#39 Water Tower Place</div>

        <div className="py-4">
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
        <div className="grow"></div>
        <div className="p-8 flex flex-col gap-5">
          <div className="flex items-center gap-3 font-semibold">
            <div>
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="profile-pic.png"
                alt="lady"
              />
            </div>
            <div>Sylvia #33457</div>
          </div>
          <Button
            appName="Logout"
            className="flex justify-center text-center p-3 bg-white rounded-md"
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}
