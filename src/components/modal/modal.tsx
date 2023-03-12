import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

export interface ModalInterfaceProps {
  isOpen: boolean;
  onRequestClose: any;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  component?: JSX.Element;
}

const modal: React.FC<ModalInterfaceProps> = ({ isOpen, onRequestClose, onClick, component }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <button onClick={onClick}>
        <FaTimes />
      </button>
      <div>{component}</div>
    </Modal>
  );
};

export default modal;
