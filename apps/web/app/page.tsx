import {
  HeaderHome,
  User,
  ToolsCarousel,
  toolsCardData,
  ProfilesCarousel,
  MobileNavBar,
  MobileNavBarData,
  ImageCarousel,
  Clients,
} from '@repo/ui'

export default function Page(): JSX.Element {
  return (
    <main>
      <div className="pb-24 md:pb-0">
        <HeaderHome name={User.name} />
        <ProfilesCarousel clients={Clients} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        <MobileNavBar navBarData={MobileNavBarData} />
        <ImageCarousel title="Latest From WHBM" />
      </div>
    </main>
  )
}
