import React from "react";
import Link from "next/link";
import { FaAddressCard, FaCode } from "react-icons/fa";

async function fetchRepo(name: string) {
  const response = await fetch(`https://api.github.com/repos/nuke7/${name}`);
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaAddressCard />
          <span>ID {repo.id}</span>
        </div>
        <div className="card-stat">
          <Link
            href={repo.html_url}
            target="_blank"
          >
            <FaCode style={{ display: "inline" }} />
            <span>Source</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Repo;
