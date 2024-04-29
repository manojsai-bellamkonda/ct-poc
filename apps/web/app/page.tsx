import {
  HeaderHome,
  User,
  ToolsCarousel,
  toolsCardData,
  ProfilesCarousel,
  profileCardData,
  MobileNavBar,
  MobileNavBarData,
  ImageCarousel,
} from '@repo/ui'

export default function Page(): JSX.Element {
  return (
    <main>
      <div className="pb-24 md:pb-0">
        <HeaderHome name={User.name} />
        <ProfilesCarousel profileCardData={profileCardData} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        <MobileNavBar navBarData={MobileNavBarData} />
        <ImageCarousel title="Latest From WHBM" />
      </div>
    </main>
  )
}
