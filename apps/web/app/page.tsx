import {
  Header,
  greetingData,
  ToolsCarousel,
  toolsCardData,
  ProfileCard,
} from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Header greeting={greetingData.greet} name={greetingData.name} />
        <ToolsCarousel toolsCardData={toolsCardData} />
        <div className="w-max h-max">
          <ProfileCard name="John Doe" imageSrc="profile-pic.png"></ProfileCard>
        </div>
      </div>
    </main>
  );
}
