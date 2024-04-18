import { Header, greetingData, ToolsCarousel } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
        <ToolsCarousel />
      </div>
    </main>
  );
}
