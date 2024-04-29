export default function CreateLayout({
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
