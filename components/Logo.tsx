import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href='/'
      className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-medium'
    >
      Elisabeth
    </Link>
  )
}