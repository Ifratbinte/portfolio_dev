import Modal from "#/components/modal/modal";
import React, { useState } from "react";
import { NavInterface } from "./MenuItems";

interface Props {
  item: NavInterface;
}

const NavItem: React.FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  return (
    <li className="list unstyled py-2 px-3">
      <button className="flex items-center font-mono text-base text-slate-100" onClick={() => setIsOpen((prevState) => !prevState)}>
        <span className="pr-1">
          <item.Icon />
        </span>
        {item.title}
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} onClick={closeModal} component={item.component} />
    </li>
  );
};

export default NavItem;
