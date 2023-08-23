import { createClient, groq } from "next-sanity";
import clientConfig from '../config'


// TODO: Remove the below function. Just an eg.
export async function getPages(){
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  )
}
