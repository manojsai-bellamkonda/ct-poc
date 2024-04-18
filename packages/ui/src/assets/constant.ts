import { iconName } from "../components/Icon";
type toolsCardDataType = {
  title: string;
  subtitle: string;
  link?: string;
  icon: iconName;
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
    subtitle: "Track your progress",
    icon: "dressHanger",
  },
  {
    title: "Title 3",
    subtitle: "Track your progress",
    icon: "trophy",
    link: "rtyw",
  },
  {
    title: "Title 1",
    subtitle: "Track your progress",
    icon: "trophy",
  },
  {
    title: "Title 2",
    subtitle: "Track your progress",
    icon: "dressHanger",
    link: "rtyw",
  },
  {
    title: "Title 3",
    subtitle: "Subtitle 3",
    icon: "trophy",
  },
];

export const greetingData = {
  name: "Sylvia",
  greet: "Good Morning",
};
