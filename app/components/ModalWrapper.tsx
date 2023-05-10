"use client";
import Modal from "react-modal";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
  },
};

type ModalProps = {
  name: string;
  description: string;
  size: number;
  html_url: string;
  stargazers: number;
  forks: number;
  watchers: number;
};

ReactModal.setAppElement("#main");

const ModalWrapper: React.FC<ModalProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  /*   const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false); */

  return (
    <NextUIProvider>
      <div>
        <div
          className="p-4 rounded-lg border border-gray-700 hover:-translate-y-1 transition-all duration-200 hover:border-2 hover:border-white bg-blue-700 rounded-lg text-gray-200 font-bold p-3 pb-5 mt-4 hover:bg-blue-500 text-center text-2xl flex justify-center items-center cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {props.name}
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <p>Size: {props.size}</p>
        </Modal>
      </div>
    </NextUIProvider>
  );
};

export default ModalWrapper;
