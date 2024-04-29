import { MobileNavBar, MobileNavBarData } from '@repo/ui'
export default function Message(): JSX.Element {
  return (
    <main>
      <div className="">
        <MobileNavBar navBarData={MobileNavBarData} />
      </div>
    </main>
  )
}
