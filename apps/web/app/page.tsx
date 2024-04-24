import {
  ToolsCarousel,
  toolsCardData,
  ProfilesCarousel,
  profileCardData,
  NavBar,
  NavBarData,
} from '@repo/ui'

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <ProfilesCarousel profileCardData={profileCardData} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        <NavBar navBarData={NavBarData} />
      </div>
    </main>
  )
}
