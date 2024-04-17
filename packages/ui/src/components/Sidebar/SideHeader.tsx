import { Icon } from "@repo/ui";
export const SideHeader = ({
  children,
  active,
  iconName,
}: {
  children: String;
  active?: Boolean | undefined;
  iconName?: String;
}) => (
  <div
    className={`border-l-4 cursor-pointer select-none text-lg flex font-bold py-1 ${
      active ? "bg-gray-300 border-gray-600" : "hover:bg-gray-200"
    }`}
  >
    <div className="w-8 ml-10">
      {iconName && <Icon iconName={iconName} size="22px" color="black"></Icon>}
    </div>
    <div>{children}</div>
  </div>
);
