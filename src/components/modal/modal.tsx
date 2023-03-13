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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "#000",
        },
        content: {
          background: "#000",
          border: 'none',
        },
      }}
    >
      <button onClick={onClick} className="absolute right-0 top-0 lg:text-2xl">
        <FaTimes />
      </button>
      <div>{component}</div>
    </Modal>
  );
};

export default modal;
