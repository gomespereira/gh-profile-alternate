import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>New Search</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
