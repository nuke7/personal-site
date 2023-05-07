import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <section className="mx-auto px-24 my-4">
      <p className="text-2xl font-semibold font-white">{project.name}</p>
    </section>
  );
};

export default Project;
