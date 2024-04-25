import { NavBar, NavBarData } from '@repo/ui'
export default function Client(): JSX.Element {
  return (
    <main>
      <div className="pb-24 md:pb-0">
        <NavBar navBarData={NavBarData} />
      </div>
    </main>
  )
}
