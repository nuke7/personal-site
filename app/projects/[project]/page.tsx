import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="p-4">
      <p className="text-2xl font-bold font-white">{project.name}</p>
    </div>
  );
};

export default Project;
