"use client";
import { useState } from "react";
import { NavItem } from "../NavItem";
import { NavBarDataType } from "../../assets/constant";
type Props = {
  navBarData: NavBarDataType[];
};
export const NavBar: React.FC<Props> = ({ navBarData }) => {
  const [activeNavItem, setActiveNavItem] = useState<number>(4);
  const handleNavItemClick = (index: number) => {
    setActiveNavItem(index);
  };
  return (
    <div className=" md:hidden w-full fixed bottom-0 left-0 bg-white-smoke pt-2 pb-5 z-50">
      <div className="flex justify-center gap-3 ">
        {navBarData.map((item, index) => {
          return (
            <div key={index} onClick={() => handleNavItemClick(index)}>
              <NavItem
                image={item.image}
                icon={item.icon}
                text={item.text}
                isActive={activeNavItem === index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
