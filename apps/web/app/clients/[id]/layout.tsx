export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <div className="bg-white text-black">{children}</div>
    </>
  )
}
