import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./menu.module.css";
import Navigation from "./Nav";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="logo">
          <img src="/images/logo/logo-sm.png" alt="" height={5} width={30} />
        </div>
        <div className={`${styles.header_menu} ${isVisible ? styles.responsive_menu : ""}`}>{<Navigation />}</div>
        <button className="btn visible lg:hidden" onClick={() => setIsVisible((prevState) => !prevState)}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Nav;
