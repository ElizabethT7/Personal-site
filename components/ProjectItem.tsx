import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectItemProps {
  project: Project;
}

export default async function ProjectItem({ project }: ProjectItemProps) {

  return (
    <Link 
      href={`/projects/${project.slug}`}
      className='border-2 border-grey-600 rounded-lg p-1 hover:scale-105 hover:to-blue-500 transition'
    >
      {
        project.image && (
          <Image
            src={project.image}
            alt={project.name}
            width={750}
            height={300}
            className='mb-2 object-cover rounded-lg border border-grey-500'
          />
        )
      }
      <div className='font-extrabold bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>{project.name}</div>
    </Link>
  )
}

