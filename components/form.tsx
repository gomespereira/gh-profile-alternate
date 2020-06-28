import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Form() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  function handleChange(event: any) {
    setUsername(event.target.value)
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    router.push({
      pathname: '/profile',
      query: { user: username }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">github.com/</label>
      <input
        id="username"
        className="ml-1 pl-2 rounded outline-none focus:shadow-outline"
        type="text"
        placeholder={'Press "/" to focus'}
        onChange={handleChange}
      />
    </form>
  )
}
