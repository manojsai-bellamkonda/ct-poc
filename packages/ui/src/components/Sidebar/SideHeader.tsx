import { Icon, IconName } from "../Icon";

export const SideHeader = ({
  children,
  active,
  iconName,
}: {
  children: String;
  active?: Boolean | undefined;
  iconName?: IconName;
}) => (
  <div
    className={`border-l-4 cursor-pointer select-none text-lg flex font-semibold py-1 ${
      active
        ? "bg-black bg-opacity-10 border-gray-600 font-bold"
        : "hover:bg-gray-200 border-transparent"
    }`}
  >
    <div className="w-8 ml-10">
      {iconName && <Icon iconName={iconName} size="20px" color="black"></Icon>}
    </div>
    <div>{children}</div>
  </div>
);
