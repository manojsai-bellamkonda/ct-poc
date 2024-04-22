import { IconName } from "../components/Icon";
type toolsCardDataType = {
  title: string;
  subtitle: string;
  link?: string;
  icon: IconName;
};
export const toolsCardData: toolsCardDataType[] = [
  {
    title: "Title 1",
    subtitle: "Track your progress & rewards target",
    icon: "trophy",
    link: "rtyw",
  },
  {
    title: "Title 2",
    subtitle: "Track your progress & rewards target",
    icon: "dressHanger",
  },
  {
    title: "Title 3",
    subtitle: "Track your progress & rewards target",
    icon: "trophy",
    link: "rtyw",
  },
  {
    title: "Title 1",
    subtitle: "Track your progress & rewards target",
    icon: "trophy",
  },
  {
    title: "Title 2",
    subtitle: "Track your progress & rewards target",
    icon: "dressHanger",
    link: "rtyw",
  },
  {
    title: "Title 3",
    subtitle: "Track your progress & rewards target",
    icon: "trophy",
  },
];

export const greetingData = {
  name: "Sylvia",
  greet: "Good Morning",
};
export type NavBarDataType = {
  image?: string;
  icon?: IconName;
  text: string;
};
export const NavBarData: NavBarDataType[] = [
  {
    text: "Products",
    icon: "table",
  },
  {
    text: "Bags",
    icon: "basket",
  },
  {
    text: "Clients",
    icon: "user",
  },
  {
    text: "Messages",
    icon: "message",
  },
  {
    text: "Home",
    image: "/profile-pic.png",
  },
];
