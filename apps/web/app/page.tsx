import {
  Header,
  greetingData,
  NavBar,
  NavBarData,
  ToolsCarousel,
  toolsCardData,
} from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        <NavBar navBarData={NavBarData} />
      </div>
    </main>
  );
}
