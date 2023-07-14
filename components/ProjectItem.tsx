
import { ProjectItemProps } from '@/types/projectItem';
import Image from 'next/image';

export default async function ProjectItem({ project }: ProjectItemProps) {

  return (
    <div className='border-2 border-grey-600 rounded-lg p-1' >
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
    </div>
  )
}

