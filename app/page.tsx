import Image from "next/image";
import { Inter } from "next/font/google";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const projects = await getProjects();
  const dateCreatedAt = projects._createdAt;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-screen flex-col items-center justify-evenly p-24">
        <h1 className="text-2xl">Projects from Sanity</h1>
        {projects.map((project: Project) => (
          <div key={project._id}>
            <p>{project.name}</p>
            <p>
              Created at:{" "}
              {new Intl.DateTimeFormat("ISO", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }).format(dateCreatedAt)}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

