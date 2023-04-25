import React from "react";
import Repo from "@/app/components/Repo";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

const RepoPage = ({ params }: ParsedUrlQuery) => {
  return (
    <div className="card">
      <Repo name={params?.name} />
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
