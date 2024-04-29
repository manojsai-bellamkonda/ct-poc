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
      <div>
        <HeaderHome name={User.name} />
        <ProfilesCarousel profileCardData={profileCardData} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        <MobileNavBar navBarData={MobileNavBarData} />
        <ImageCarousel title="Latest From WHBM" />
      </div>
    </main>
  )
}
