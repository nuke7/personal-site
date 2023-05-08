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
    <section className="mx-auto max-w-4xl">
      <div className="mx-auto px-4 sm:px-24 my-4 flex justify-between items-center">
        <p className="text-2xl font-semibold font-white">{project.name}</p>
        <a
          className="bg-blue-700 rounded-lg text-center text-gray-200 font-bold p-3 pt-2 mt-2 hover:bg-blue-500"
          href={project.url}
          title="view project"
          target="_blank"
        >
          View Project
        </a>
      </div>
      <div className="px-4 sm:px-24 my-4">
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
