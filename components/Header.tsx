import Logo from './Logo';
import Navigation from './Navigation';
import { getPages } from '@/sanity/sanity-utils';


/*[
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]*/

export default async function Header() {
  const navItems = await getPages();

  return (
    <header className='bg-gray-900'>
      <div className='flex justify-between mx-auto py-5 px-4 text-center text-gray-200'>
        <Logo />
        <Navigation navLinks={navItems} />
      </div>
    </header>
  )
}