import Logo from './Logo';
import Navigation from './Navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export default function Header() {
  return (
    <header className='bg-gray-900'>
      <div className='flex justify-between mx-auto py-5 px-4 text-center text-gray-200'>
        <Logo />
        <Navigation navLinks={navItems} />
      </div>
    </header>
  )
}