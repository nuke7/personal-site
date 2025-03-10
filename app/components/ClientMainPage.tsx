"use client";

import { Project } from "@/types/Project";
import Link from "next/link";
import { FaChevronCircleDown, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Floating3DText from "./Floating3DText";
import RotatingSkillCube from "./RotatingSkillCube";

const ClientMainPage = ({ projects }: { projects: Project[] }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      const sections = parallaxRef.current.querySelectorAll('.parallax-section');
      
      sections.forEach((section, index) => {
        const speed = 0.2 + (index * 0.1);
        const yPos = -(scrollY * speed);
        (section as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={parallaxRef} className="w-full">
      <div className="relative bg-stars2 dark:bg-stars1 w-screen h-screen bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-evenly items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <Floating3DText 
            text="Welcome" 
            className="text-4xl sm:text-6xl text-center font-bold my-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" 
          />
          <p className="text-xl sm:text-2xl text-center text-white max-w-2xl mx-auto mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            You can find some example frontend projects below
          </p>
        </motion.div>
        
        <motion.div 
          className="flex space-x-6 z-10"
					initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            href="https://www.linkedin.com/in/martongombos/" 
            target="_blank"
            className="p-4 bg-blue-600/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg transform-gpu"
          >
            <FaLinkedinIn size={25} />
          </Link>
          <Link 
            href="https://github.com/nuke7" 
            target="_blank"
            className="p-4 bg-blue-600/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg transform-gpu"
          >
            <FaGithub size={25} />
          </Link>
          <Link 
            href="https://twitter.com/nuke7official" 
            target="_blank"
            className="p-4 bg-blue-600/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg transform-gpu"
          >
            <FaTwitter size={25} />
          </Link>
        </motion.div>
        
        <motion.a
          href="#projects"
          className="text-3xl text-slate-200 block sm:text-5xl hover:text-blue-300 z-10 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <FaChevronCircleDown />
        </motion.a>
      </div>
      
      <div
        className="h-20 w-full bg-gradient-to-b from-black via-slate-900 to-transparent"
        id="projects"
      ></div>
      
      <div className="bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="py-16 mb-24">
          <RotatingSkillCube />
        </div>
      </div>

      <div className="flex flex-col gap-16 mt-8 mb-16">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={project._id}
            className={`parallax-section bg-fixed bg-no-repeat bg-cover bg-center`}
            style={{ backgroundImage: `url(${project.bgUrl})` }}
            initial={{ opacity: 1, y: 0 }}
          >
            <ProjectCard project={project} />
            
            <div
              className="w-screen h-[40vw] bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center relative gap-10"
              style={{ backgroundImage: `url(${project.bgUrl})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50"></div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="w-full py-8 bg-gradient-to-t from-black via-slate-900 to-transparent flex justify-center"
        initial={{ opacity: 1 }}
      >
        <Link
          href="/about"
          className="relative overflow-hidden px-8 py-4 rounded-lg bg-blue-600 text-white text-xl font-bold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 group"
        >
          <span className="relative z-10">Learn More About Me</span>
          <span className="absolute bottom-0 left-0 w-0 h-full bg-blue-500 transition-all duration-300 group-hover:w-full -z-0"></span>
        </Link>
      </motion.div>
    </div>
  );
};

export default ClientMainPage;