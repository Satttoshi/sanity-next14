import { client } from './lib/client';
import { groq } from 'next-sanity';

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
  );
}
