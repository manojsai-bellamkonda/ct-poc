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
    subtitle: "Subtitle 1",
    icon: "trophy",
    link: "rtyw",
  },
  {
    title: "Title 2",
    subtitle: "Subtitle 2",
    icon: "dressHanger",
  },
  {
    title: "Title 3",
    subtitle: "Subtitle 3",
    icon: "trophy",
    link: "rtyw",
  },
  {
    title: "Title 1",
    subtitle: "Subtitle 1",
    icon: "trophy",
  },
  {
    title: "Title 2",
    subtitle: "Subtitle 2",
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
