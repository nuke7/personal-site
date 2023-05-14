import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <section
      className="bg-fixed bg-no-repeat bg-cover bg-center w-screen h-fit min-h-screen pt-4"
      style={{ backgroundImage: `url(${project.bgUrl})` }}
    >
      <div className="mx-auto px-4 sm:px-24 my-4 flex gap-4 flex-col sm:flex-row justify-between items-center max-w-4xl">
        <p className="text-2xl font-semibold text-slate-200">{project.name}</p>
        <a
          className="bg-blue-700 rounded-lg text-center text-gray-200 font-bold p-3 pt-2 mt-2 hover:bg-blue-500"
          href={project.url}
          title="view project"
          target="_blank"
        >
          View Live Demo
        </a>
        <a
          className="bg-blue-700 rounded-lg text-center text-gray-200 font-bold p-3 pt-2 mt-2 hover:bg-blue-500"
          href={project.repoUrl}
          title="view project"
          target="_blank"
        >
          View code repository
        </a>
      </div>
      <div className="px-4 sm:px-24 mt-4 text-slate-100 max-w-4xl mx-auto">
        <PortableText value={project.content} />
        <Image
          src={project.image}
          alt="project image"
          width={640}
          height={360}
          className="mt-10 mb-10 mx-auto border-2 rounded-lg object-cover"
        />
        <Link
          href="/"
          className="bg-gray-700 rounded-lg text-gray-200 font-bold p-3 pt-2 mt-2 hover:bg-blue-700"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default Project;
