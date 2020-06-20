import { useRouter } from 'next/router'
import useSWR from 'swr'

import { fetcher } from '../utils/utils'

export default function Info() {
  const router = useRouter()
  const { user } = router.query
  const { data } = useSWR(`https://api.github.com/users/${user}`, fetcher)

  if(!data) return <div>Loading...</div>

  return (
    <section>
      <div>Profile</div>

      <picture>
        <img src={data.avatar_url} alt="Avatar"/>
      </picture>

      <div>
        <span>{data.name}</span>
        <a href={data.html_url} target="_blank" rel="noopener noreferrer">@{data.login}</a>
      </div>

      <div>
        <span>{data.location}</span>
        <span>{data.created_at}</span>
      </div>

      <div>
        <div>
          <span>{data.public_repos}</span>
          <span>{data.public_repos === 1 ? 'Repository': 'Repositories'}</span>
        </div>
        <div>
          <span>{data.followers}</span>
          <span>{data.followers === 1 ? 'Follower': 'Followers'}</span>
        </div>
        <div>
          <span>{data.following}</span>
          <span>Following</span>
        </div>
      </div>
    </section>
  )
}
