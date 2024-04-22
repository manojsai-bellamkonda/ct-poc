import {
  Header,
  greetingData,
  ToolsCarousel,
  toolsCardData,
  ProfilesCarousel,
  profileCardData,
  // ImageCard,
} from '@repo/ui'

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
        <ProfilesCarousel profileCardData={profileCardData} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        {/* <ImageCard
          imgUrl="/default-pic.png"
          caption="Desert Collection"
          tag="Trending"
        ></ImageCard> */}
      </div>
    </main>
  )
}
