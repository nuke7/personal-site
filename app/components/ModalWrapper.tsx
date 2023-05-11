"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { FaRulerHorizontal } from "react-icons/fa";

type ModalProps = {
  name: string;
  description: string;
  size: number;
  html_url: string;
  stargazers: number;
  forks: number;
  watchers: number;
};

const ModalWrapper: React.FC<ModalProps> = (props) => {
  const { setVisible, bindings } = useModal();

  return (
    <NextUIProvider>
      <div
        className="z-10 cursor-pointer bg-gray-700 rounded-lg text-gray-200 font-bold p-3 mt-2 hover:bg-blue-700"
        onClick={() => setVisible(true)}
      >
        Open modal
      </div>
      <Modal
        scroll
        width="85%"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text
            id="modal-title"
            size={18}
            className="text-gray-700 text-3xl font-bold"
          >
            {props.name}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text
            id="modal-description"
            className="text-gray-500 text-xl font-bold"
          >
            {props.description}
          </Text>
          <span>
            <FaRulerHorizontal /> {props.size}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-gray-700 rounded-lg text-gray-200 font-bold p-3 mt-2 hover:bg-blue-700 text-white"
            auto
            flat
            onPress={() => setVisible(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </NextUIProvider>
  );
};

export default ModalWrapper;
