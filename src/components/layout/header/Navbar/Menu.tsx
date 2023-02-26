import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Navigation from "./Nav";

const Nav = () => {


 

  return (
    <div className="flex justify-between items-center">
      <div className="logo">
        <img src="/vercel.svg" alt="" height={24} width={100} />
      </div>
      <div className="header-menu">
        <Navigation />
      </div>
    </div>
  );
};

export default Nav;
