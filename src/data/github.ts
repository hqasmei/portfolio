// Public repos from the GitHub API at build time. Unauthenticated requests get
// 60/hour, which is plenty for builds.
export const GITHUB_USER = 'hqasmei';

export interface Repo {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
}

export async function getTopRepos(
  limit = 4,
): Promise<{ repos: Repo[]; totalStars: number }> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner`,
      { headers: { Accept: 'application/vnd.github+json' } },
    );
    if (!res.ok) return { repos: [], totalStars: 0 };
    const data: any[] = await res.json();

    const own = data.filter((repo) => !repo.fork && !repo.archived);
    const totalStars = own.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    // Undescribed repos are usually scratch work — leave them off.
    const repos = own
      .filter((repo) => repo.description)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
      }));

    return { repos, totalStars };
  } catch {
    return { repos: [], totalStars: 0 };
  }
}
