export const SideItem = ({
  children,
  active,
}: {
  children?: String
  active?: Boolean | undefined
}) => (
  <div
    className={`border-l-4 border-transparent cursor-pointer select-none transition flex py-2 hover:bg-black hover:bg-opacity-10  ${
      active ? 'bg-black bg-opacity-10  font-bold' : 'hover:bg-gray-200 '
    }`}
  >
    <div className="ml-[72px] leading-5">{children}</div>
  </div>
)
