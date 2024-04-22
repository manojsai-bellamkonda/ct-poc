import {
  FaHeart, // for like
  FaUser, // for user profile
  FaBell, // for notification
  FaEllipsisH, // for kebab menu (vertical dots)
  FaSearch, // for search or magnifying glass
  FaUserPlus, // for add user
  FaTrophy, // for trophy
  FaTshirt, // for dress hanger (closest match)
  FaComments, // for chatting or messaging
  FaExternalLinkSquareAlt, // for link icon (square with up arrow)
  FaEnvelopeOpenText, // for letter icon
  FaShoppingBasket, // for basket icon
  FaPhone, // for call icon
  FaSms, // for message icon (SMS)
  FaEnvelope, // for email icon
  FaInfoCircle, // for info icon
  FaEye, // for view password eye
  FaBirthdayCake, // for birthday cake
  FaAward, // for loyalty badge
  FaEdit,
  FaTable,
} from "react-icons/fa";

const iconMap = {
  heart: FaHeart,
  user: FaUser,
  notification: FaBell,
  kebabMenu: FaEllipsisH,
  search: FaSearch,
  addUser: FaUserPlus,
  trophy: FaTrophy,
  dressHanger: FaTshirt,
  chatting: FaComments,
  linkIcon: FaExternalLinkSquareAlt,
  letter: FaEnvelopeOpenText,
  basket: FaShoppingBasket,
  call: FaPhone,
  message: FaSms,
  email: FaEnvelope,
  info: FaInfoCircle,
  viewPassword: FaEye,
  birthdayCake: FaBirthdayCake,
  loyaltyBadge: FaAward,
  edit: FaEdit,
  table: FaTable,
};
export type IconName = keyof typeof iconMap;
interface IconProps {
  iconName: keyof typeof iconMap;
  size?: string | number;
  color?: string;
  className?: string;
}

export const Icon = ({
  iconName,
  size = "1em",
  color = "black",
  className = "",
}: IconProps) => {
  const IconComponent = iconMap[iconName];
  return <IconComponent size={size} color={color} className={className} />;
};
