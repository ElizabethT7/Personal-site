import Link from 'next/link';
import Image from 'next/image';
import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/sanity/sanity-utils';
import image from '../../public/my-photo.png';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex h-full flex-col items-center justify-between p-4 lg:py-10 lg:px-0">
      <div className="z-10 w-full max-w-6xl  mx-auto items-center justify-between font-mono text-sm py-5 lg:pt-16 lg:pb-0">
        <div className='flex flex-col-reverse lg:flex-row'>
          <div className='mb-24'>
            <h1 className='text-6xl font-extrabold mb-10'>Привет, меня зовут
            <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'> Елизавета Тимофеева</span>
            !
            </h1>
            <p className='mb-4 text-2xl text-gray-600'>Я — frontend разработчик, начинающий специалист по созданию сайтов.
            </p>
            <p className='mb-10 text-2xl text-gray-600'>
              Первый экран сайта сделаю бесплатно. Если понравится — начнём работать.
              Посмотри мои проекты!
            </p>
            <Link href='https://t.me/ElizabethT7' className='py-3 px-5 bg-pink-600 rounded-2xl text-2xl text-gray-100 hover:bg-gradient-to-r from-pink-500 hover:to-purple-700'>Написать мне в телеграм</Link>
          </div>
          <div className="w-full m-5 lg:m-0 max-w-sm max-h-sm h-auto">
            <Image
              src={image}
              alt='my photo'
              width={724}
              height={1000}
              className='photo'
            />
          </div>
        </div>
        <h2 className='mb-7 font-bold text-gray-700 text-3xl'>Мои проекты</h2>
        <ProjectList projects={projects} />
      </div>
    </div>
  )
}
