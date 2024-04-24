import {
  Header,
  greetingData,
  ToolsCarousel,
  toolsCardData,
  ProfilesCarousel,
  profileCardData,
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
        <RecentOrderCarousel recentOrderCardData={RecentOrderData} />
      </div>
    </main>
  )
}
