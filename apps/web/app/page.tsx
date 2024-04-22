import { Header, greetingData, ToolsCarousel, toolsCardData } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
        <ToolsCarousel toolsCardData={toolsCardData} />
      </div>
    </main>
  );
}
