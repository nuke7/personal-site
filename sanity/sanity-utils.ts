import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] {
			_id,
			_createdAt,
			name,
			"slug": slug.current,
			"image": image.asset->url,
      bgUrl,
			url,
			repoUrl,
			content
		}`,
    { next: { revalidate: 60 } }
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0] {
			_id,
			_createdAt,
			name,
			"slug": slug.current,
			"image": image.asset->url,
      bgUrl,
			url,
			repoUrl,
			content
		}`,
    { slug }
  );
}
