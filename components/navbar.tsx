import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="mt-4 mr-2 ml-2">
      <ul className="flex justify-end space-x-6">
        <li className="text-teal-700 hover:underline">
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
