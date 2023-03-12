import About from "#/pages/About";
import Contact from "#/pages/Contact";
import Portfolio from "#/pages/Portfolio";
import Resume from "#/pages/Resume";
import { FiFileMinus, FiGrid, FiLayout, FiPhoneCall, FiTwitch } from "react-icons/fi";
import { IconType } from "react-icons/lib";
export interface NavInterface {
  id: number;
  title: string;
  Icon: IconType;
  component?: JSX.Element;
}

const NavItems: NavInterface[] = [
  {
    id: 2,
    title: "About",
    Icon: FiTwitch,
    component: <About />,
  },
  {
    id: 3,
    title: "Resume",
    Icon: FiFileMinus,
    component: <Resume />,
  },
  {
    id: 4,
    title: "Portfolio",
    Icon: FiLayout,
    component: <Portfolio />,
  },
  {
    id: 5,
    title: "Contact",
    Icon: FiPhoneCall,
    component: <Contact />,
  },
];
export default NavItems;
