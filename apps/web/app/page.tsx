import { Button, Icon, Sidebar } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <Button appName="web">Click me</Button>
      <div>
        <h1>User Profile</h1>
        <Icon iconName="user" size="24px" color="blue" />
        <Icon iconName="heart" size="94px" color="red" />
        <Icon iconName="notification" size="24px" color="grey" />
        <Icon iconName="kebabMenu" size="24px" color="red" />
        <Icon iconName="search" size="24px" color="blue" />
        <Icon iconName="addUser" size="24px" color="green" />
        <Icon iconName="trophy" size="24px" color="goldenrod" />
        <Icon iconName="dressHanger" size="24px" color="pink" />
        <Icon iconName="chatting" size="24px" color="purple" />
        <Icon iconName="linkIcon" size="24px" color="navy" />
        <Icon iconName="letter" size="24px" color="orange" />
        <Icon iconName="basket" size="24px" color="brown" />
        <Icon iconName="call" size="24px" color="teal" />
        <Icon iconName="message" size="24px" color="lime" />
        <Icon iconName="email" size="24px" color="maroon" />
        <Icon iconName="info" size="24px" color="aqua" />
        <Icon iconName="viewPassword" size="24px" color="olive" />
        <Icon iconName="birthdayCake" size="24px" color="yellow" />
        <Icon iconName="loyaltyBadge" size="24px" color="fuchsia" />
        <Icon iconName="edit" size="24px" color="silver" />
      </div>
      <button className="p-4 bg-teal-500 border-white border rounded-sm">
        Testing Tailwind CSS
      </button>
    </main>
  );
}
