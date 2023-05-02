import { PortableTextBlock } from "sanity";

export interface Project {
  _id: string;
  _createdAt: Date;
  name: string;
  bgUrl: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
}
