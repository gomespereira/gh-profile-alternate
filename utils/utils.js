export async function fetcher(url) {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': process.env.NEXT_PUBLIC_GITHUB_TOKEN
    }
  })

  return await response.json()
}
