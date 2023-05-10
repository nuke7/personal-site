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
    <div className="container px-4 sm:px-24">
      <h2 className="text-2xl mt-4">Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={Math.random() * repo.id * 100}>
            <Link
              href={repo.html_url}
              target="_blank"
            >
              <h3 className="text-xl">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
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
              </div>
            </Link>
            <Link
              href={repo.html_url}
              target="_blank"
            >
              <FaCode style={{ display: "inline" }} />
              <span>Source</span>
            </Link>
            <ModalWrapper
              name={repo.name}
              description={repo.description}
              size={repo.size}
              html_url={""}
              stargazers={0}
              forks={0}
              watchers={0}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
