import { MobileNavBar, MobileNavBarData } from '@repo/ui'
export default function Bag(): JSX.Element {
  return (
    <main>
      <div className="">
        <MobileNavBar navBarData={MobileNavBarData} />
      </div>
    </main>
  )
}
