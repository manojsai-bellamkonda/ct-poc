export const SideItem = ({
  children,
}: {
  children?: String
  active?: Boolean | undefined
}) => (
  <div className="border-l-4 border-transparent cursor-pointer select-none transition flex py-2 hover:bg-black hover:bg-opacity-10">
    <div className="ml-[72px] leading-5">{children}</div>
  </div>
)
