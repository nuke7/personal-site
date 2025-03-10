/* eslint-disable @next/next/no-img-element */
"use client";

import { Project } from "@/types/Project";
import Link from "next/link";
import { useEffect, useRef } from "react";

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const rotateY = 20 * (x - 0.5);
      const rotateX = -20 * (y - 0.5);
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      card.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.2), ${rotateY/2}px ${rotateX/2}px 30px rgba(0, 0, 0, 0.1)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="max-w-5xl mx-auto p-4 flex flex-col sm:flex-row justify-center gap-4 bg-slate-200/80 backdrop-blur-lg dark:bg-gray-900/80 text-gray-700 dark:text-gray-200 rounded-lg sm:min-h-[400px] mt-40 transition-all duration-300 transform hover:scale-[1.02]"
      style={{ 
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="flex flex-col sm:max-w-56 w-full justify-center items-center z-10">
        <p className="text-3xl font-bold text-center mr-4 mb-2">{project.name}</p>

        <Link
          href={`/projects/${project.slug}`}
          className="relative overflow-hidden p-4 rounded-lg border border-gray-700 transition-all duration-300 hover:border-white bg-blue-700 text-gray-200 font-bold mt-4 hover:bg-blue-500 text-center text-2xl flex justify-center items-center group"
        >
          <span className="relative z-10">View details</span>
          <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-500 transition-all duration-300 group-hover:h-full -z-0"></span>
        </Link>
      </div>
      <Link
        href={project.url}
        target="_blank"
        className="flex flex-col justify-center items-center sm:min-w-56 w-full transform-gpu transition-all duration-500"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img
          className="object-cover rounded-lg border border-gray-500 hover:scale-105 transition-all duration-200 hover:border-2 hover:border-white mx-auto shadow-lg"
          style={{ 
            width: "100%", 
            maxWidth: "500px",
            transform: 'translateZ(30px)',
            filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.2))'
          }}
          src={project.image}
          alt="project thumbnail"
        />
      </Link>
    </div>
  );
};

export default ProjectCard;