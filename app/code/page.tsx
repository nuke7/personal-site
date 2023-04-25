import React from "react";
import { Repository } from "@/types/Repo";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye, FaSitemap, FaCode } from "react-icons/fa";

async function getRepos(): Promise<Repository[]> {
  const response = await fetch("https://api.github.com/users/nuke7/repos");
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await getRepos();
  return (
    <div className="container">
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
                  <FaSitemap /> {repo.size}
                </span>
                <Link
                  href={repo.html_url}
                  target="_blank"
                >
                  <FaCode style={{ display: "inline" }} />
                  <span>Source</span>
                </Link>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
