import {
  Header,
  greetingData,
  ToolsCarousel,
  toolsCardData,
  ProfilesCarousel,
  profileCardData,
  NavBar,
  NavBarData,
  ImageCarousel,
  ImageCardData,
} from '@repo/ui'

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
        <ProfilesCarousel profileCardData={profileCardData} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        <NavBar navBarData={NavBarData} />
        <ImageCarousel ImageCardData={ImageCardData} title="Latest From WHBM" />
      </div>
    </main>
  )
}
