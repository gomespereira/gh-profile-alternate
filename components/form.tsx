import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Form() {
  const inputElement = useRef(null)
  const [username, setUsername] = useState('')
  const router = useRouter()

  useEffect(() => {
    document.onkeyup = handleKeyUp
  },[])

  function handleKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Slash') inputElement.current.focus()
    if (event.code === 'Escape') inputElement.current.blur()
  }

  function handleChange(event: any): void {
    setUsername(event.target.value)
  }

  function handleSubmit(event: any): void {
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
        ref={inputElement}
        onChange={handleChange}
      />
    </form>
  )
}
