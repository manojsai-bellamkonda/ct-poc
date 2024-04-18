import { ToolCard } from "@repo/ui";
import { toolsCardData } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main>
      <ToolCard
        title={toolsCardData[0]?.title}
        subtitle={toolsCardData[0]?.subtitle}
        icon={toolsCardData[0]?.icon}
        link={toolsCardData[0]?.link}
      />
    </main>
  );
}
