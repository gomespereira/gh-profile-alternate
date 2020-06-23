import { useRouter } from 'next/router'
import useSWR from 'swr'

import { fetcher } from '../utils/utils'

export default function Repos() {
  const router = useRouter()
  const { user } = router.query
  const { data } = useSWR(`https://api.github.com/users/${user}/repos`, fetcher)

  if (!data) return <div>Loading...</div>

  return (
    <section>
      <div>Repositories</div>

      <div>
        {data.map((repo: any) => (
          <div key={repo.id}>
            <div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </div>
            <div>
              <div>{repo.name}</div>
            </div>
            {
              repo.description === null
                ? <span>None</span>
                : <span>{repo.description}</span>
            }
            <div>
              {
                repo.language === null
                  ? <span>None</span>
                  : <span>{repo.language}</span>
              }
              <div>
                <div>
                  <span>{repo.stargazers_count}</span>
                </div>
                <div>
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
