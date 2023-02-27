import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface SocialIconInterface {
  id: number;
  Icon: IconType;
  path: string;
}

const socialIcon: SocialIconInterface[] = [
  {
    id: 1,
    Icon: FaFacebookF,
    path: "https://www.facebook.com/ifrat.kazi96/",
  },
  {
    id: 2,
    Icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/ifrat-kazi/",
  },
  {
    id: 3,
    Icon: FaGithub,
    path: "https://github.com/Ifratbinte",
  },
];
export default socialIcon;
