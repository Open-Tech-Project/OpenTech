export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  html_url: string;
  published_at: string;
}

export interface ProjectData {
  key: string;
  displayName: string;
  repoName: string; // e.g., "Open-Tech-Project/OpenTube"
  iconUrl: string;
  customDescription?: string;
  features: string[];
  platforms: string[];
  customLanguage?: string;
}

export interface RepoDetails {
  repo: GitHubRepo | null;
  latestRelease: GitHubRelease | null;
  loading: boolean;
  error: string | null;
}
