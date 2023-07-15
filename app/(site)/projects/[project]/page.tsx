import { PortableText } from '@portabletext/react';
import { getProject } from "@/sanity/sanity-utils";
import Image from 'next/image';

type Props = {
  params: {
    project: string
  }
}

export default async function  Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div className="flex min-h-screen flex-col items-center p-4 lg:p-16">
      <header className='flex items-center justify-between flex-wrap w-full max-w-5xl mx-auto'>
        <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold mr-4'>
          {project.name}
        </h1>
        <a 
          href={project.url}
          title='View project'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 my-2 whitespace-nowrap hover:bg-red-500 hover:text-red-100 transition'
        >
          View project
        </a>
      </header>
      <div className="z-10 w-full max-w-5xl mx-auto items-center justify-between font-mono text-sm py-5 lg:pt-10 lg:pb-0">
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className='mb-10 border-2 border-gray-700 object-cover rounded-xl'
        />
        <div className='text-lg text-gray-700'>
          <PortableText value={project.content} />
        </div>
      </div>
    </div>
  )
}