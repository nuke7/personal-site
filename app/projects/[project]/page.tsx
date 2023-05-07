import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <section className="mx-auto px-4 sm:px-24 my-4 flex justify-between items-center">
      <p className="text-2xl font-semibold font-white">{project.name}</p>
      <a
        href={project.url}
        title="view project"
        target="_blank"
      >
        View Project
      </a>
    </section>
  );
};

export default Project;
