import { Repository } from "@/types/Repo";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye, FaCode, FaRulerHorizontal } from "react-icons/fa";
import ModalWrapper from "../components/ModalWrapper";

async function getRepos(): Promise<Repository[]> {
  const response = await fetch("https://api.github.com/users/nuke7/repos");
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await getRepos();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-24 dark:bg-gray-500 bg-slate-200 pb-8">
      <h1 className="text-3xl dark:text-gray-100 pt-4">All my public GitHub repos</h1>
      <ul className="list-none m-0 p-0">
        {repos.map((repo) => (
          <li
            key={Math.random() * repo.id * 100}
            className="dark:bg-gray-700 bg-white dark:text-white text-black rounded-md p-4 my-8"
          >
            <h3 className="text-xl">{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="flex justify-evenly items-center mt-4 dark:text-slate-200 text-gray-900">
              <span>
                <FaStar /> {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch /> {repo.forks_count}
              </span>
              <span>
                <FaEye /> {repo.watchers_count}
              </span>
              <span>
                <FaRulerHorizontal /> {repo.size}
              </span>
              <Link
                href={repo.html_url}
                target="_blank"
                className="block dark:bg-gray-700 bg-white dark:text-white text-black rounded-md p-4 border-solid border-gray-300 border-2 hover:drop-shadow-lg transition-all duration-300 dark:hover:-translate-y-1 text-center"
              >
                <FaCode style={{ display: "block", margin: "auto" }} />
                <span>Source</span>
              </Link>
            </div>

            <ModalWrapper
              name={repo.name}
              description={repo.description}
              size={repo.size}
              html_url={repo.html_url}
              stargazers={repo.stargazers_count}
              forks={repo.forks_count}
              watchers={repo.watchers_count}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
