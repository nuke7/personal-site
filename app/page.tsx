import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import ClientMainPage from "@/app/components/ClientMainPage";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex flex-col items-center w-screen">
      <ClientMainPage projects={projects} />
    </main>
  );
}