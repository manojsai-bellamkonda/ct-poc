import { Icon, ButtonComp } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main>
      <Icon></Icon>
      <button className="p-4 bg-teal-500 border-white border rounded-sm">
        Testing Tailwind CSS
      </button>
      <ButtonComp label="Log out" type="secondary" />
    </main>
  );
}
