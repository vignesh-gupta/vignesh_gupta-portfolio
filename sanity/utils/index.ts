import { createClient, groq } from 'next-sanity';
import clientConfig from '../config';

export async function sanityFetch(query: string) {
  return createClient(clientConfig).fetch(groq`${query}`);
}

export async function getSkills() {
  return sanityFetch(`*[_type == "skill"]{
    _id,
    _createdAt,
    name,
    "icon": icon.asset->url,
  }`);
}

export async function getProjects(featuredOnly = false) {
  return sanityFetch(`*[_type == "project"  ${
    featuredOnly ? '&& isFeatured == true ' : ''
  }]{
    _id,
    _createdAt,
    title,
    description,
    codeLink,
    projectLink,
    tags,
    isFeatured,
    "imgUrl": imgUrl.asset->url
  }${featuredOnly ? '[0...3]' : ''}`);
}
