"use client";


import {
  AlertCircle,
  AlertTriangle,
  Ban,
  Check,
  CookingPot,
  Cross,
  Dot,
  Filter,
  GitPullRequest,
  Heart,
  Layers,
  ListStart,
  LoaderCircle,
  Menu,
  Play,
  Redo,
  TvMinimalPlay,
} from "lucide-react";
import {
  IoBagCheckOutline,
  IoCallOutline,
  IoCartOutline,
  IoFilter,
  IoHomeOutline,
  IoLogOutOutline,
  IoSettingsOutline,
  IoShareSocialOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { CgUnavailable } from "react-icons/cg";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaMinus, FaNewspaper, FaPaperPlane, FaPlus, FaRegClock, FaXTwitter } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { GiRingingBell, GiTakeMyMoney, GiTomato } from "react-icons/gi";
import { LuEye, LuEyeClosed, LuStar } from "react-icons/lu";
import { PiShippingContainer } from "react-icons/pi";
import { TbLockPassword } from "react-icons/tb";
import { BiDotsVerticalRounded, BiFootball, BiSupport } from "react-icons/bi";
import { MdDarkMode, MdEmail, MdHistory, MdLightMode, MdOutlineDisplaySettings, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineShoppingBag, MdOutlineShoppingCartCheckout, MdOutlineSportsCricket } from "react-icons/md";
import { FaBasketballBall, FaCloudDownloadAlt, FaEdit, FaFrown, FaHockeyPuck, FaMapMarkerAlt, FaPhoneAlt, FaRegUserCircle, FaSortAlphaUpAlt, FaTrashRestore, FaUserEdit } from "react-icons/fa";
export const icons = {
  dot: Dot,
  menu: Menu,
  close: Cross,
  football: BiFootball,
  cricket: MdOutlineSportsCricket,
  basketball: FaBasketballBall,
  hockey: FaHockeyPuck,

  play: Play,
  logout: IoLogOutOutline,
  history: MdHistory,
  delete: FaTrashRestore,
  displaySetting: MdOutlineDisplaySettings,
  chevronDown: FaChevronDown,
  chevronLeft: FaChevronLeft,
  arrowDown: MdOutlineKeyboardArrowDown,
  arrowUp: MdOutlineKeyboardArrowUp,
  live: TvMinimalPlay,
  upcoming: ListStart,
  Highlight : Layers,

  // reusable icons
  chevronRight: FaChevronRight,
  chevronUp: FaChevronUp,
  bell: GiRingingBell,
  darkMode: MdDarkMode,
  lightMode: MdLightMode,
  plus: FaPlus,
  minus: FaMinus,
  shoppingBag: MdOutlineShoppingBag,
  shoppingCart: IoCartOutline,
  heart: Heart,
  redo: Redo,
  clock: FaRegClock,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  mapMarker: FaMapMarkerAlt,
  email: MdEmail,
  phone: FaPhoneAlt,
  search: FiSearch,
  user: FaRegUserCircle,
  setting: IoSettingsOutline,
  cartCheckout: IoBagCheckOutline,
  avoid: CgUnavailable,
  home: IoHomeOutline,
  eyeOpen: LuEye,
  eyeClose: LuEyeClosed,
  userEdit: FaUserEdit,
  frown: FaFrown,
  edit: FaEdit,
  send: FaPaperPlane,
  download: FaCloudDownloadAlt,
  money: GiTakeMyMoney,
  total: PiShippingContainer,

  cook: CookingPot,

  ellipse: BiDotsVerticalRounded,
  filter: IoFilter,
  sort: FaSortAlphaUpAlt,
  filterButton: Filter,

  share: IoShareSocialOutline,
  star: LuStar,
  tomato: GiTomato,
  reOrder: MdOutlineShoppingCartCheckout,
  password: TbLockPassword,
  call: IoCallOutline,
  support: BiSupport,
  alert: AlertCircle,
  alertTraingle: AlertTriangle,
  bill: FaNewspaper,

  check: Check,
  request: GitPullRequest,
  warning: IoWarningOutline,
  cancel: Ban,
  loading: LoaderCircle,
};
