import { IconName } from '../components/Icon'
type toolsCardDataType = {
  title: string
  subtitle: string
  link?: string
  icon: IconName
}
export const toolsCardData: toolsCardDataType[] = [
  {
    title: 'Title 1',
    subtitle: 'Track your progress & rewards target',
    icon: 'trophy',
    link: 'rtyw',
  },
  {
    title: 'Title 2',
    subtitle: 'Track your progress & rewards target',
    icon: 'dressHanger',
  },
  {
    title: 'Title 3',
    subtitle: 'Track your progress & rewards target',
    icon: 'trophy',
    link: 'rtyw',
  },
  {
    title: 'Title 1',
    subtitle: 'Track your progress & rewards target',
    icon: 'trophy',
  },
  {
    title: 'Title 2',
    subtitle: 'Track your progress & rewards target',
    icon: 'dressHanger',
    link: 'rtyw',
  },
  {
    title: 'Title 3',
    subtitle: 'Track your progress & rewards target',
    icon: 'trophy',
  },
]

export const greetingData = {
  name: 'Sylvia',
  greet: 'Good Morning',
}

export const profileCardData = [
  {
    name: 'Drink Water',
    imageSrc: 'profile-pic.png',
    goldCustomer: true,
  },
  {
    name: 'Crux Bin',
    imageSrc: 'profile-pic.png',
    goldCustomer: true,
  },
  {
    name: 'Sam Jason',
    imageSrc: 'profile-pic.png',
    goldCustomer: true,
  },
  {
    name: 'Violet Rogue',
    imageSrc: 'profile-pic.png',
  },
  {
    name: 'Meganium Silverstones',
    imageSrc: 'profile-pic.png',
  },
  {
    name: 'Drink Water',
    imageSrc: 'profile-pic.png',
  },
  {
    name: 'Crux bin',
    imageSrc: 'profile-pic.png',
  },
  {
    name: 'Sam Jason',
    imageSrc: 'profile-pic.png',
  },
  {
    name: 'Violet Rogue',
    imageSrc: 'profile-pic.png',
  },
  {
    name: 'Meganium Silverstones',
    imageSrc: 'profile-pic.png',
  },
]

export type NavBarDataType = {
  image?: string
  icon?: IconName
  text: string
}
export const NavBarData: NavBarDataType[] = [
  {
    text: 'Products',
    icon: 'table',
  },
  {
    text: 'Bags',
    icon: 'basket',
  },
  {
    text: 'Clients',
    icon: 'user',
  },
  {
    text: 'Messages',
    icon: 'message',
  },
  {
    text: 'Home',
    image: '/profile-pic.png',
  },
]
