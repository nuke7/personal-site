import React, { useState } from "react";
import Modal from "react-modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MyModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const [openInNewWindow, setOpenInNewWindow] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Control") {
      setOpenInNewWindow(true);
    }
  };

  const handleClick = () => {
    if (openInNewWindow) {
      window.open("http://www.example.com");
    } else {
      setModalIsOpen(true);
    }
    setOpenInNewWindow(false);
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      <button className="bg-gray-700 rounded-lg text-gray-200 font-bold p-3 pt-2 mt-2 hover:bg-blue-700">
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
      >
        <h2>Hello, world!</h2>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default MyModal;
