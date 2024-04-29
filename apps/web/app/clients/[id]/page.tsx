import { MobileNavBar, MobileNavBarData } from '@repo/ui'
export default function Client(): JSX.Element {
  return (
    <main>
      <div className="">
        <MobileNavBar navBarData={MobileNavBarData} />
      </div>
    </main>
  )
}
