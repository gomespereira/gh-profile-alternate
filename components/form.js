import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Form() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  function handleChange(event) {
    setUsername(event.target.value)
  }

  function handleSubmit(event) {
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
        type="text"
        placeholder={'Press "/" to focus'}
        onChange={handleChange}
      />
    </form>
  )
}
