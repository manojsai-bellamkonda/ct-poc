import { MobileNavBar, MobileNavBarData } from '@repo/ui'
export default function Product(): JSX.Element {
  return (
    <main>
      <div className="">
        <MobileNavBar navBarData={MobileNavBarData} />
      </div>
    </main>
  )
}
