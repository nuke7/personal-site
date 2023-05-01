/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Link from "next/link";
import { FaChevronCircleDown } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20">
      <div className="bg-stars1 w-screen h-screen bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl text-center font-bold my-5">Projects from Sanity</h1>
        <a
          href="#projects"
          className="text-3xl block sm:text-4xl active:text-blue-700 hover:text-blue-300"
        >
          <FaChevronCircleDown />
        </a>
      </div>
      <div
        style={{
          height: "70px",
          width: "100vw",
        }}
        className="projects"
        id="projects"
      ></div>
      <div>
        {projects.map((project: Project) => (
          <>
            {/* {
              <div className="bg-stars1 w-screen h-64 bg-fixed bg-no-repeat bg-cover bg-center"></div>
            } */}
            <div
              className="p-4 my-5 flex flex-col sm:flex-row justify-between gap-4"
              key={project._id}
            >
              <div className="flex flex-col min-w-[220px]">
                <p className="text-xl font-bold mr-4">{project.name}</p>
                <p>project description</p>
              </div>
              <Link
                href={project.url}
                target="_blank"
              >
                <img
                  className="object-cover rounded-lg border border-gray-500 hover:-translate-y-1 transition-all duration-200 hover:border-2 hover:border-white"
                  style={{ width: "100%", maxWidth: "500px" }}
                  src={project.image}
                  alt="project thumbnail"
                />
              </Link>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}

