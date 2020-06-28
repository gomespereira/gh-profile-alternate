export async function fetcher(url: string) {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': process.env.NEXT_PUBLIC_GITHUB_TOKEN
    }
  })
  return await response.json()
}

export function formatter(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
}
