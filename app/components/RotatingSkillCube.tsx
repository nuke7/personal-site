"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "SCSS",
];

const RotatingSkillCube = () => {
  const [currentFace, setCurrentFace] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % skills.length);
    }, 1650);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      rotateY: currentFace * 90,
      transition: { duration: 1, ease: "easeInOut" },
    });
  }, [currentFace, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "10px" }}
      className="w-full flex justify-center items-center py-16"
    >
      <div className="perspective relative h-40 w-40 sm:h-64 sm:w-64">
        <motion.div
          animate={controls}
          className="w-full h-full relative preserve-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="absolute inset-0 flex items-center justify-center bg-blue-600/80 text-white font-bold text-2xl rounded-lg shadow-lg border border-white/20"
              style={{
                transform: `rotateY(${index * 90}deg) translateZ(100px)`,
                backfaceVisibility: "hidden",
              }}
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RotatingSkillCube;