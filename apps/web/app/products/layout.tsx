import { HeaderClient, MobileNavBar, MobileNavBarData, User } from '@repo/ui'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <HeaderClient id={User.id} />
      {children}
      <MobileNavBar navBarData={MobileNavBarData} />
    </>
  )
}
