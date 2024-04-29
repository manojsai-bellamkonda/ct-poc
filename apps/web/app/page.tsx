import {
  HeaderHome,
  greetingData,
  ToolsCarousel,
  toolsCardData,
  ProfilesCarousel,
  profileCardData,
  NavBar,
  NavBarData,
  ImageCarousel,
} from '@repo/ui'

export default function Page(): JSX.Element {
  return (
    <main>
      <div className="pb-24 md:pb-0">
        <HeaderHome greeting={greetingData.greet} name={greetingData.name} />
        <ProfilesCarousel profileCardData={profileCardData} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        <NavBar navBarData={NavBarData} />
        <ImageCarousel title="Latest From WHBM" />
      </div>
    </main>
  )
}
