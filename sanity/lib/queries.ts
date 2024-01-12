import { groq } from 'next-sanity';

export const projectsQuery = groq`*[_type == "project"]{
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`;
