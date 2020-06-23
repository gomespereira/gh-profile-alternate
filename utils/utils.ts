export async function fetcher(url: any) {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': process.env.NEXT_PUBLIC_GITHUB_TOKEN
    }
  })

  return await response.json()
}
