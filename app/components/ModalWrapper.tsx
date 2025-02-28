"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import Link from "next/link";
import { FaCode, FaCodeBranch, FaEye, FaList, FaRulerHorizontal, FaStar } from "react-icons/fa";

type ModalProps = {
  name: string;
  description: string;
  size: number;
  html_url: string;
  stargazers: number;
  forks: number;
  watchers: number;
};

const StatCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: number }) => (
  <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded-lg text-center">
    <div className="flex justify-center mb-1">
      {icon}
    </div>
    <p className="text-xs text-gray-500 dark:text-gray-300">{title}</p>
    <p className="font-bold text-gray-800 dark:text-white">{value}</p>
  </div>
);

const ModalWrapper: React.FC<ModalProps> = (props) => {
  const { setVisible, bindings } = useModal();

  return (
    <NextUIProvider>
        <Button
          auto
          className="flex-1 bg-gray-700 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold transition-colors duration-300"
          style={{ borderRadius: "50%", padding: "12px" }}
          onClick={() => setVisible(true)}
        >
          <FaList />
        </Button>
      
      <Modal
        scroll
        width="85%"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        className="dark:bg-gray-800"
      >
        <Modal.Header className="flex flex-col items-start">
          <Text
            id="modal-title"
            size={24}
            className="text-gray-800 dark:text-gray-100 font-bold"
          >
            {props.name}
          </Text>
          <Text
            className="text-gray-600 dark:text-gray-300 text-sm"
          >
            Repository Details
          </Text>
        </Modal.Header>
        
        <Modal.Body className="dark:bg-gray-700 bg-white dark:text-white text-black">
          <Text
            id="modal-description"
            className="text-gray-600 text-lg dark:text-gray-200 italic mb-6"
          >
            {props.description || "No description available"}
          </Text>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard icon={<FaStar className="text-yellow-500" />} title="Stars" value={props.stargazers} />
            <StatCard icon={<FaCodeBranch className="text-green-500" />} title="Forks" value={props.forks} />
            <StatCard icon={<FaEye className="text-blue-500" />} title="Watchers" value={props.watchers} />
            <StatCard icon={<FaRulerHorizontal className="text-purple-500" />} title="Size" value={props.size} />
          </div>
          
          <Link
            href={props.html_url}
            target="_blank"
            className="block w-full md:w-1/3 mx-auto bg-blue-600 hover:bg-blue-500 text-white rounded-md py-3 px-4 transition-colors duration-300 text-center"
          >
            <FaCode className="inline-block mr-2" />
            <span>View Source Code</span>
          </Link>
        </Modal.Body>
        
        <Modal.Footer>
          <Button
            auto
            flat
            color="error"
            shadow
            animated
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
