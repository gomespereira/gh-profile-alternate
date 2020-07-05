import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="mt-4 mr-2 ml-2 md:mt-8 md:mr-10 md:ml-10">
      <ul className="flex justify-end">
        <li className="text-blue-900 font-bold hover:underline">
          {
            router.pathname === '/'
              ? <Link href="/about"><a>About</a></Link>
              : router.pathname === '/profile'
                ? <Link href="/"><a>New Search</a></Link>
                : <Link href="/"><a>Home</a></Link>
          }
        </li>
      </ul>
    </nav>
  )
}
