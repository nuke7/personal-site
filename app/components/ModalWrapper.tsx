"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import Link from "next/link";
import { FaCode, FaCodeBranch, FaEye, FaRulerHorizontal, FaStar } from "react-icons/fa";

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
        className="z-10 cursor-pointer bg-gray-700 dark:bg-blue-700 rounded-lg text-gray-200 font-bold p-3 mt-2 hover:bg-blue-700 dark:hover:bg-blue-400 text-center"
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
        <Modal.Body className="dark:bg-gray-700 bg-white dark:text-white text-black">
          <Text
            id="modal-description"
            className="text-gray-500 text-lg dark:text-gray-200 italic"
          >
            {props.description}
          </Text>
          <div className="flex justify-evenly items-center">
            <span>
              <FaStar /> {props.stargazers}
            </span>
            <span>
              <FaCodeBranch /> {props.forks}
            </span>
            <span>
              <FaEye /> {props.watchers}
            </span>
            <span>
              <FaRulerHorizontal /> {props.size}
            </span>
            <Link
              href={props.html_url}
              target="_blank"
              className="block dark:bg-gray-700 bg-white dark:text-white text-black rounded-md p-4 border-solid border-gray-300 border-2 hover:drop-shadow-lg transition-all duration-300 dark:hover:-translate-y-1 text-center"
            >
              <FaCode style={{ display: "block", margin: "auto" }} />
              <span>Source</span>
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="gradient"
            ghost
            shadow
            animated
            onPress={() => setVisible(false)}
          >
            <p className="text-lg">Close</p>
          </Button>
        </Modal.Footer>
      </Modal>
    </NextUIProvider>
  );
};

export default ModalWrapper;
