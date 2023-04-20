"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

const AdminPage = () => {
  return (
    <div>
      <NextStudio config={config} />;
    </div>
  );
};

export default AdminPage;
