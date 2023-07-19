import Image from 'next/image';
import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/sanity/sanity-utils';
import image from '../../public/Timofeeva_EV shcool.jpg';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex h-full flex-col items-center justify-between p-4 lg:p-10">
      <div className="z-10 w-full max-w-5xl  mx-auto items-center justify-between font-mono text-sm py-5 lg:pt-16 lg:pb-0">
        <div className='flex'>
          <div>
            <h1 className='text-7xl font-extrabold mb-3'>Hello, I&apos;m
            <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'> Elizabeth</span>
            !
            </h1>
            <p className='mb-24 text-xl text-gray-600'>
              Check out my projects!
            </p>
          </div>
          <div className="w-full m-0 max-w-sm max-h-sm">
            <Image
              src={image}
              alt='my photo'
              width={1920}
              height={1080}
              className='photo object-cover'
            />
          </div>
        </div>
        <h2 className='mb-7 font-bold text-gray-700 text-3xl'>My projects</h2>
        <ProjectList projects={projects} />
      </div>
    </div>
  )
}
