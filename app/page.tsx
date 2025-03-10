import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import ClientMainPage from "@/app/components/ClientMainPage";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen">
      <ClientMainPage projects={projects} />
    </main>
  );
}