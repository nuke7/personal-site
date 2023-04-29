/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const projects = await getProjects();
  const dateCreatedAt = projects._createdAt;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="bg-stars1 w-screen h-screen bg-fixed bg-no-repeat bg-cover bg-center">
        <h1 className="text-3xl text-center font-bold my-5">Projects from Sanity</h1>
      </div>
      {projects.map((project: Project) => (
        <>
          <div className="bg-stars2 w-screen h-40 bg-fixed bg-no-repeat bg-cover bg-center"></div>
          <div
            className="p-4 my-5 "
            key={project._id}
          >
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
            <img
              style={{ width: "100%", maxWidth: "500px" }}
              src={project.image}
              alt="project thumbnail"
            />
          </div>
        </>
      ))}
    </main>
  );
}

