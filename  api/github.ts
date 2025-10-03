export const fetchRepoLangStats = async (owner: string, repo: string) => {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);

  if (!res.ok) throw new Error('failed to fetch repo stats');

  return res.json();
};
