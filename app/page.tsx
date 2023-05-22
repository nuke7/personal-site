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
    <main className="flex min-h-screen flex-col items-center justify-between px-20 w-screen">
      <div className="bg-stars2 dark:bg-stars1 w-screen h-screen bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-evenly items-center gap-10">
        <h1 className="text-3xl sm:text-4xl text-center font-bold my-5 text-white">
          Projects from Sanity
        </h1>
        <a
          href="#projects"
          className="text-3xl text-slate-200 block sm:text-5xl active:text-blue-700 hover:text-blue-300"
        >
          <FaChevronCircleDown />
        </a>
      </div>
      <div
        style={{
          height: "70px",
          width: "100vw",
        }}
        className="bg-stars2 dark:bg-stars1 w-screen h-screen bg-fixed bg-no-repeat bg-cover bg-center"
        id="projects"
      ></div>

      {projects.map((project: Project) => (
        <div
          key={project._id}
          className="bg-fixed bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${project.bgUrl})` }}
        >
          <div className="max-w-5xl mx-auto p-4 flex flex-col sm:flex-row justify-center gap-4 bg-slate-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-lg sm:min-h-[400px] mt-40">
            <div className="flex flex-col sm:max-w-56 w-full justify-center items-center">
              <p className="text-3xl font-bold text-center mr-4">{project.name}</p>

              <Link
                href={`/projects/${project.slug}`}
                className="p-4 rounded-lg border border-gray-700 transition-all duration-200 hover:border-white bg-blue-700 rounded-lg text-gray-200 font-bold p-3 pb-5 mt-4 hover:bg-blue-500 text-center text-2xl flex justify-center items-center"
              >
                View details
              </Link>
            </div>
            <Link
              href={project.url}
              target="_blank"
              className="flex flex-col justify-center items-center sm:min-w-56 w-full"
            >
              <img
                className="object-cover rounded-lg border border-gray-500 hover:-translate-y-1 transition-all duration-200 hover:border-2 hover:border-white mx-auto"
                style={{ width: "100%", maxWidth: "500px" }}
                src={project.image}
                alt="project thumbnail"
              />
            </Link>
          </div>
          <div
            className="w-screen h-[50vw] bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-10"
            style={{ backgroundImage: `url(${project.bgUrl})` }}
          ></div>
        </div>
      ))}
    </main>
  );
}

