import { Button, Icon } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main>
      <Button appName="web">Click me</Button>
      <Icon></Icon>
      <button className="p-4 bg-teal-500 border-white border rounded-sm">
        Testing Tailwind CSS
      </button>
    </main>
  );
}
