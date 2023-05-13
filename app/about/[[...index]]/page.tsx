import Link from "next/link";
import { type } from "os";

export const metadata = {
  title: "About Page",
};

async function fetchPRogress() {
  const res = await fetch("http://localhost:3000/api/progress");
  const progress = await res.json();
  return progress;
}

type tech = {
  id: number;
  title: string;
  percentage: string;
};

export default async function AboutPage() {
  const progress = await fetchPRogress();
  return (
    <div className="mx-auto px-4 sm:px-24 my-4 max-w-7xl">
      <h1 className="text-3xl dark:text-slate-200 my-10">this is the about page</h1>
      <Link
        href="/"
        className="bg-gray-700 rounded-lg text-gray-200 font-bold p-3 pt-2 mt-2 mb-4 hover:bg-blue-700"
      >
        Back to home
      </Link>
      <h2 className="dark:text-gray-200 text-2xl mt-10">Technical Skills</h2>
      {progress.technical.map((tech: tech) => (
        <div key={tech.id}>
          <p className="dark:text-gray-200 mt-5">{tech.title}</p>
          <div className="w-full bg-gray-400 rounded-full h-2.5 dark:bg-gray-600 mt-2">
            <div
              className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
              style={{ width: tech.percentage }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
