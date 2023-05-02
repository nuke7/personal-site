import { getProject } from "@/sanity/sanity-utils";
import React from "react";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);
  return <div>page</div>;
};

export default Project;
