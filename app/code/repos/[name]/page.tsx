import React from "react";
import Repo from "@/app/components/Repo";
import Link from "next/link";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Repo name={name} />
      <Link
        href="/code"
        className="btn btn-back"
      >
        Back to repos
      </Link>
    </div>
  );
};

export default RepoPage;
