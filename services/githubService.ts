import { GitHubRepo, GitHubRelease } from '../types';

// Pomocnik do obsługi odpowiedzi dla GitHuba
const handleGitHubResponse = async (response: Response) => {
  if (!response.ok) {
    if (response.status === 403) {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }
    throw new Error(`GitHub API error: ${response.statusText}`);
  }
  return response.json();
};

export const fetchRepoDetails = async (repoFullName: string): Promise<GitHubRepo> => {
  try {
    // Sprawdzamy czy to GitLab (np. podany z pełnym adresem lub po strukturze)
    if (repoFullName.includes('gitlab.com') || repoFullName.startsWith('Open-Tech-Project/')) {
      // Dla Open-Tech-Project domyślnie kierujemy na GitLab API
      const cleanPath = repoFullName.replace('https://gitlab.com/', '');
      const encodedPath = encodeURIComponent(cleanPath);
      
      const response = await fetch(`https://gitlab.com/api/v4/projects/${encodedPath}`);
      if (!response.ok) throw new Error(`GitLab API error: ${response.statusText}`);
      
      const data = await response.json();
      return {
        id: data.id,
        name: data.name,
        full_name: data.path_with_namespace,
        description: data.description,
        html_url: data.web_url,
        stargazers_count: data.star_count ?? 0,
        forks_count: data.forks_count ?? 0,
        language: '',
        topics: data.tag_list ?? []
      };
    }

    // Standardowa ścieżka GitHub
    const response = await fetch(`https://api.github.com/repos/${repoFullName}`);
    return handleGitHubResponse(response);
  } catch (error) {
    console.error(`Error fetching repo ${repoFullName}:`, error);
    throw error;
  }
};

export const fetchLatestRelease = async (repoFullName: string): Promise<GitHubRelease | null> => {
  try {
    if (repoFullName.includes('gitlab.com') || repoFullName.startsWith('Open-Tech-Project/')) {
      const cleanPath = repoFullName.replace('https://gitlab.com/', '');
      const encodedPath = encodeURIComponent(cleanPath);
      
      const response = await fetch(`https://gitlab.com/api/v4/projects/${encodedPath}/releases`);
      if (response.status === 404 || !response.ok) return null;
      
      const releases = await response.json();
      if (!releases || releases.length === 0) return null;

      const latest = releases[0];
      return {
        id: latest.id || 1,
        tag_name: latest.tag_name,
        name: latest.name || latest.tag_name,
        html_url: `https://gitlab.com/${cleanPath}/-/releases/${latest.tag_name}`,
        published_at: latest.released_at
      };
    }

    // Standardowa ścieżka GitHub
    const response = await fetch(`https://api.github.com/repos/${repoFullName}/releases/latest`);
    if (response.status === 404) {
      return null; 
    }
    return handleGitHubResponse(response);
  } catch (error) {
    console.warn(`Error fetching release for ${repoFullName}:`, error);
    return null;
  }
};
