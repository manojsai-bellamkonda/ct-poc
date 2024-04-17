export const SideItem = ({
  children,
}: {
  children?: String;
  active?: Boolean | undefined;
}) => (
  <div className="border-l-4 cursor-pointer select-none transition flex py-1 hover:bg-gray-200">
    <div className="w-8 ml-10"></div>
    <div>{children}</div>
  </div>
);
