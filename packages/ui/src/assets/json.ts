import { IconName } from '../components/Icon'
import { RecentOrderItemProps } from '../components/RecentOrderItem'
export const Store = {
  id: 1,
  name: '#39 Water Tower Place',
  products: [1111, 1112, 1113],
}

export const User = {
  id: 11,
  name: 'Sylvia',
  profilePic: '/profile-pic.png',
  storeId: 1,
  clients: [111, 112, 113, 114, 115],
  favoriteClients: [111, 112],
}

export const Clients = [
  {
    id: 111,
    assignedTo: 11,
    firstName: 'Jennifer',
    lastName: 'Smith-Williams',
    profilePic: '/profile-pic.png',
    premiumCustomer: true,
  },
  {
    id: 112,
    assignedTo: 11,
    firstName: 'Ellen',
    lastName: 'Clarke',
    profilePic: '/profile-pic.png',
    premiumCustomer: true,
  },
  {
    id: 113,
    assignedTo: 11,
    firstName: 'Marcus',
    lastName: 'Brennan',
    profilePic: '/profile-pic.png',
    premiumCustomer: false,
  },
  {
    id: 114,
    assignedTo: 11,
    firstName: 'Lucy',
    lastName: 'Green',
    profilePic: '/profile-pic.png',
    premiumCustomer: false,
  },
  {
    id: 115,
    assignedTo: 11,
    firstName: 'Noah',
    lastName: 'Khan',
    profilePic: '/profile-pic.png',
    premiumCustomer: true,
  },
]

export const clientDetails = [
  {
    id: 111,
    profilePic: '/profile-pic.png',
    firstName: 'Jennifer',
    lastName: 'Smith-Williams',
    city: 'Chicago',
    state: 'Illinois',
    stateCode: 'IL',
    zipCode: 60007,
    email: 'jennysmith215@gmail.com',
    phoneNumber: 7735551212,
    birthday: 'February 15',
    nickname: 'Jenny',
    loyalty: 'Trendsetter',
    orders: [11111, 11112],
    assignDate: '04/05/2024',
    assignedTo: 11,
    tag: 'New',
    isFavourite: true,
    recommendedProducts: [1111, 1112, 1113],
    isEmailEnabled: true,
    isSmsEnabled: true,
    isCallEnabled: true,
    bag: [
      { productId: 11112, name: 'Icon' },
      { productId: 11112, name: 'Pret' },
    ],
  },
  {
    id: 112,
    profilePic: '/profile-pic.png',
    firstName: 'Ellen',
    lastName: 'Clarke',
    city: 'Chicago',
    state: 'Illinois',
    stateCode: 'IL',
    zipCode: 60007,
    email: 'ellenclarke215@gmail.com',
    phoneNumber: 7735551212,
    birthday: 'February 15',
    nickname: 'Jenny',
    loyalty: 'Trendsetter',
    orders: [11111, 11112],
    assignDate: '04/05/2024',
    assignedTo: 11,
    tag: 'New',
    isFavourite: true,
    recommendedProducts: [1111, 1112, 1113],
    isEmailEnabled: true,
    isSmsEnabled: true,
    isCallEnabled: true,
    bag: [{ productId: 11111, name: 'Desert' }],
  },
  {
    id: 113,
    profilePic: '/profile-pic.png',
    firstName: 'Marcus',
    lastName: 'Brennan',
    city: 'Denver',
    state: 'Colorado',
    stateCode: 'CO',
    zipCode: 80202,
    email: 'marcusbrennan303@gmail.com',
    phoneNumber: 7205551212,
    birthday: 'October 10',
    nickname: 'Marc',
    loyalty: 'Trendsetter',
    orders: [11111, 11112],
    assignDate: '04/05/2024',
    assignedTo: 11,
    tag: 'New',
    isFavourite: false,
    recommendedProducts: [1111, 1112, 1113],
    isEmailEnabled: true,
    isSmsEnabled: true,
    isCallEnabled: true,
    bag: [
      { productId: 11111, name: 'Desert' },
      { productId: 11112, name: 'Icon' },
      { productId: 11112, name: 'Pret' },
    ],
  },
  {
    id: 114,
    profilePic: '/profile-pic.png',
    firstName: 'Lucy',
    lastName: 'Green',
    city: 'Seattle',
    state: 'Washington',
    stateCode: 'WA',
    zipCode: 98101,
    email: 'lucygreen206@gmail.com',
    phoneNumber: 2065551212,
    birthday: 'May 25',
    nickname: 'Lulu',
    loyalty: 'Trendsetter',
    orders: [11111, 11112],
    assignDate: '04/05/2024',
    assignedTo: 11,
    tag: 'Active',
    isFavourite: false,
    recommendedProducts: [1111, 1112, 1113],
    isEmailEnabled: true,
    isSmsEnabled: true,
    isCallEnabled: true,
    bag: [
      { productId: 11111, name: 'Desert' },
      { productId: 11112, name: 'Pret' },
    ],
  },
  {
    id: 115,
    profilePic: '/profile-pic.png',
    firstName: 'Noah',
    lastName: 'Khan',
    city: 'Miami',
    state: 'Florida',
    stateCode: 'FL',
    zipCode: 33101,
    email: 'noahkhan305@gmail.com',
    phoneNumber: 3055551212,
    birthday: 'December 30',
    nickname: 'Nate',
    loyalty: 'Trendsetter',
    orders: [11111, 11112],
    assignDate: '04/05/2024',
    assignedTo: 11,
    tag: 'New',
    isFavourite: false,
    recommendedProducts: [1111, 1112, 1113],
    isEmailEnabled: true,
    isSmsEnabled: true,
    isCallEnabled: true,
    bag: [
      { productId: 11111, name: 'Desert' },
      { productId: 11112, name: 'Icon' },
      { productId: 11112, name: 'Pret' },
    ],
  },
]

export const orderDetails: RecentOrderItemProps[] = [
  {
    orderNumber: 11111,
    employeeID: 15,
    store: 'WHBM',
    purchaseDate: '10/2/22',
    deliveryDate: '10/2/22',
    shipingStatus: 'Arriving',
    isInStore: true,
    rackNumber: 334,
  },
  {
    orderNumber: 11112,
    employeeID: 15,
    store: 'WHBM',
    purchaseDate: '10/2/22',
    deliveryDate: '10/2/22',
    shipingStatus: 'Arriving',
    isInStore: false,
  },
  {
    orderNumber: 11113,
    employeeID: 15,
    store: 'WHBM',
    purchaseDate: '10/2/22',
    deliveryDate: '10/2/22',
    shipingStatus: 'Delivered',
    isInStore: false,
  },
]

export const products: ProductType[] = [
  {
    productId: 11111,
    image: '/default-pic.png',
    caption: 'Desert Collection',
    tag: 'Trending',
    launchDate: '12/3/2024',
    category: 'Tops',
    collection: 'Desert',
  },
  {
    productId: 11112,
    image: '/default-pic.png',
    caption: 'Pret Collection',
    tag: 'New',
    launchDate: '12/3/2024',
    category: 'Tops',
    collection: 'Pret',
  },
  {
    productId: 11113,
    image: '/default-pic.png',
    caption: 'Icon Collection',
    launchDate: '12/3/2024',
    category: 'Tops',
    collection: 'Icon',
  },
]

export type ProductType = {
  productId: number
  image?: string
  caption: string
  tag?: string
  launchDate?: string
  category?: string
  collection?: string
}

export const collections = [
  {
    name: 'Desert',
    imgUrl: '/default-pic.png',
    caption: 'Desert Collection',
    tag: 'Trending',
  },
  {
    name: 'Pret',
    imgUrl: '/default-pic.png',
    caption: 'Pret Collection',
    tag: 'New',
  },
  {
    name: 'Icon',
    imgUrl: '/default-pic.png',
    caption: 'Icon Collection',
  },
  {
    name: 'Desert',
    imgUrl: '/default-pic.png',
    caption: 'Desert Collection',
    tag: 'Trending',
  },
  {
    name: 'Desert',
    imgUrl: '/default-pic.png',
    caption: 'Desert Collection',
    tag: 'Trending',
  },
  {
    name: 'Desert',
    imgUrl: '/default-pic.png',
    caption: 'Desert Collection',
  },
  {
    name: 'Desert',
    imgUrl: '/default-pic.png',
    caption: 'Desert Collection',
    tag: 'Trending',
  },
]

export type NavBarDataType = {
  image?: string
  icon?: IconName
  text: string
  link: string
}
export const MobileNavBarData: NavBarDataType[] = [
  {
    text: 'Products',
    icon: 'table',
    link: '/products',
  },
  {
    text: 'Bags',
    icon: 'basket',
    link: '/bags',
  },
  {
    text: 'Clients',
    icon: 'user',
    link: '/clients',
  },
  {
    text: 'Messages',
    icon: 'message',
    link: '/messages',
  },
  {
    text: 'Home',
    image: '/profile-pic.png',
    link: '/',
  },
]
