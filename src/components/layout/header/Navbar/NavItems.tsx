import { FiGrid, FiTwitch,FiFileMinus, FiLayout, FiPhoneCall } from "react-icons/fi";
import { IconType } from "react-icons/lib";

export interface NavInterface {
  id: number;
  title: string;
  path: string;
  Icon: IconType;
}

const NavItems: NavInterface[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    Icon: FiGrid,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    Icon: FiTwitch,
  },
  {
    id: 3,
    title: "Resume",
    path: "/resume",
    Icon: FiFileMinus,
  },
  {
    id: 4,
    title: "Portfolio",
    path: "/portfolio",
    Icon: FiLayout,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    Icon: FiPhoneCall,
  },
];
export default NavItems;
