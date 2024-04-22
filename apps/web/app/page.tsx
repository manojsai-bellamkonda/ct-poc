import { Header, ImageCard } from "@repo/ui";
import { greetingData } from "../../../packages/ui/src/constant";

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
        <ImageCard
          imgUrl="/default-pic.png"
          caption="Desert Collection"
          tag="Trending"
        ></ImageCard>
      </div>
    </main>
  );
}
