import { HeaderClient } from '@repo/ui'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <HeaderClient />
      {children}
    </>
  )
}
