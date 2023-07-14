import { Project } from '@/types/project';
import { createClient, groq } from 'next-sanity';

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: 'vhpn050s',
    dataset: 'production',
    apiVersion: '2023-07-14',
  });

  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      url,
      content
    }`
  )
}