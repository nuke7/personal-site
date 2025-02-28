import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaCode, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <section
    className="bg-fixed bg-no-repeat bg-cover bg-center w-screen min-h-screen pt-8 pb-12"
    style={{ backgroundImage: `url(${project.bgUrl})` }}
  >
    <div className="max-w-5xl mx-auto px-6 bg-white/90 dark:bg-gray-800/95 rounded-xl shadow-lg backdrop-blur-sm pb-8">
      <div className="py-6 flex flex-wrap justify-between items-center border-b border-gray-200 dark:border-gray-700 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">{project.name}</h1>
        
        <div className="flex flex-wrap gap-3">
          <a
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md py-2 px-4 transition-all duration-300 hover:shadow-lg"
            href={project.url}
            title="View Live Demo"
            target="_blank"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          
          <a
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md py-2 px-4 transition-all duration-300 hover:shadow-lg"
            href={project.repoUrl}
            title="View Code Repository"
            target="_blank"
          >
            <FaCode /> Repository
          </a>
        </div>
      </div>
      
      <div className="prose dark:prose-invert prose-lg mx-auto dark:text-gray-200">
        <PortableText value={project.content} />
      </div>
      
      <div className="my-10 overflow-hidden rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          width={1280}
          height={720}
          className="w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gray-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
      >
        <FaArrowLeft /> Back to Home
      </Link>
    </div>
  </section>
  );
};

export default Project;
