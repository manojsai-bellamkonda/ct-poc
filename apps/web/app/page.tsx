import { Header, greetingData } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
      </div>
    </main>
  );
}
