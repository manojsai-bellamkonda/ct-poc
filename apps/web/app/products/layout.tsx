import { HeaderClient, User } from '@repo/ui'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <HeaderClient id={User.id} />
      {children}
    </>
  )
}
