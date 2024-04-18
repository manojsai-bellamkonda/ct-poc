import { Header } from "@repo/ui";
import { greetingData } from "../../../packages/ui/src/constant";

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
      </div>
    </main>
  );
}
