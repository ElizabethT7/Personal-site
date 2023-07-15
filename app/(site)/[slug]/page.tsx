import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className='max-w-5xl mx-auto p-4 lg:p-16 text-center'>
      <h1
        className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold mr-4 mb-10'
      >
        {page.title}
      </h1>
      <div className='text-lg text-gray-700 text-left'>
        <PortableText value={page.content} />
      </div>
    </div>
  )
}