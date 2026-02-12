"use client";

import { motion } from "framer-motion";

interface Floating3DTextProps {
  text: string;
  className?: string;
}

const Floating3DText = ({ text, className = "" }: Floating3DTextProps) => {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number]
    }
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      animate={floatingAnimation}
    > 
      <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
        {text}
      </span>
    </motion.div>
  );
};

export default Floating3DText;