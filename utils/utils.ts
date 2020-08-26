export async function fetcher(url: string): Promise<any> {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': process.env.NEXT_PUBLIC_GITHUB_TOKEN
    }
  })

  return await response.json()
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
}

export function formatNumber(number: number): string {
  return `${(number / 1000).toFixed(1)}k`
}
