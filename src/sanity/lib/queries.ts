import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(
  `*[_type=="startup" && defined(slug.current)] | order(_createdAt desc){
  _id,
    title,
    slug,
    image,
    author -> {
      _id, name, image, bio
    },
    views,
    description,
    _createdAt,
    category
}`
);
