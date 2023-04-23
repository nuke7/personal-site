import React from "react";

import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function getRepos() {
  const response = await fetch("https://api.github.com/users/nuke7/repos");
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await getRepos();
  return (
    <>
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={Math.random() * repo.id * 100}>
            <Link href={`/code/repos/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReposPage;
