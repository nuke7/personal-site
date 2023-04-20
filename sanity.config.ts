import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schema";

const config = defineConfig({
  basePath: "/admin",
  projectId: "e5id8qy6",
  dataset: "production",
  title: "Personal Website",
  apiVersion: "2023-04-18",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
