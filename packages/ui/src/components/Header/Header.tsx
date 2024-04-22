import { Icon } from "../Icon";
import { twMerge } from "tailwind-merge";

export interface HeaderProps {
  greeting?: string;
  name: string;
  textStyle?: string;
  iconStyle?: string;
}
export const Header = ({
  greeting = "Good Morning",
  name,
  textStyle,
  iconStyle,
}: HeaderProps) => {
  return (
    <div className="bg-white text-black hidden lg:flex py-8 px-8">
      <p
        className={twMerge(
          `mr-auto font-bold text-3xl leading-10 ${textStyle}`,
        )}
      >
        {greeting},&nbsp;{name}!
      </p>
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ghost-white mx-2">
        <Icon iconName="notification" size="16px" className={iconStyle} />
      </span>
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ghost-white mx-2">
        <Icon iconName="search" size="16px" className={iconStyle} />
      </span>
    </div>
  );
};
