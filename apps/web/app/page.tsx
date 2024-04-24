import {
  Header,
  greetingData,
  ToolsCarousel,
  toolsCardData,
  ProfilesCarousel,
  profileCardData,
  NavBar,
  NavBarData,
  RecentOrderData,
  RecentOrderCarousel,
} from '@repo/ui'

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
        <ProfilesCarousel profileCardData={profileCardData} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        <NavBar navBarData={NavBarData} />
        <RecentOrderCarousel recentOrderCardData={RecentOrderData} />
      </div>
    </main>
  )
}
