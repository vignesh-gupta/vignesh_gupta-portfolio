import { createClient, groq } from "next-sanity";
import clientConfig from '../config'

export async function getProjects(){
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}
