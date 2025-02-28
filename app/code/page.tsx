import { Repository } from "@/types/Repo";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye, FaCode, FaRulerHorizontal } from "react-icons/fa";
import ModalWrapper from "../components/ModalWrapper";

async function getRepos(): Promise<Repository[]> {
  const response = await fetch("https://api.github.com/users/nuke7/repos", {
    next: {
      revalidate: 60,
    },
  });
  const repos = await response.json();
  return repos;
}

const StatBadge = ({ icon, value }: { icon: React.ReactNode; value: number }) => (
  <span className="flex flex-col items-center bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-md">
    <span className="text-gray-600 dark:text-gray-200">{icon}</span>
    <span className="text-sm">{value}</span>
  </span>
);

const ReposPage = async () => {
  const repos = await getRepos();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-24 dark:bg-gray-500 bg-slate-200 pb-8">
      <h1 className="text-3xl dark:text-gray-100 pt-4">All my public GitHub repos</h1>
      <ul className="list-none m-0 p-0 flex grow flex-wrap justify-center items-stretch content-stretch gap-8 sm:flex-row flex-col">
        {repos.map((repo) => (
          <li
          key={Math.random() * repo.id * 100}
          className="sm:w-80 w-full flex flex-col justify-between dark:bg-gray-700/90 bg-white/90 dark:text-white text-black rounded-lg p-5 my-8 shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
        >
          <div>
            <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[60px]">{repo.description || "No description available"}</p>
            <div className="flex justify-evenly items-center mt-6 dark:text-slate-200 text-gray-900">
              <StatBadge icon={<FaStar />} value={repo.stargazers_count} />
              <StatBadge icon={<FaCodeBranch />} value={repo.forks_count} />
              <StatBadge icon={<FaEye />} value={repo.watchers_count} />
              <StatBadge icon={<FaRulerHorizontal />} value={repo.size} />
            </div>
          </div>
        
          <div className="flex justify-between items-center mt-6">
            <Link
              href={repo.html_url}
              target="_blank"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md py-2 px-4 transition-colors duration-300 flex-1 mr-2"
            >
              <FaCode /> <span>Code</span>
            </Link>
            
            <ModalWrapper
              name={repo.name}
              description={repo.description}
              size={repo.size}
              html_url={repo.html_url}
              stargazers={repo.stargazers_count}
              forks={repo.forks_count}
              watchers={repo.watchers_count}
            />
          </div>
        </li>
        ))}
      </ul>
      <Link
        href="/"
        className="bg-gray-700 rounded-lg text-gray-200 font-bold p-3 pt-2 mt-2 mb-4 hover:bg-blue-700"
      >
        Back to home
      </Link>
    </div>
  );
};

export default ReposPage;
