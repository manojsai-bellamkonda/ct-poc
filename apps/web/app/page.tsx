import {
  Header,
  greetingData,
  ToolsCarousel,
  toolsCardData,
  ImageCard,
} from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        <ImageCard
          imgUrl="/default-pic.png"
          caption="Desert Collection"
          tag="Trending"
        ></ImageCard>
      </div>
    </main>
  );
}
