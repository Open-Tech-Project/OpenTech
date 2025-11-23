import { GitHubRepo, GitHubRelease } from '../types';

const BASE_URL = 'https://api.github.com/repos';

// Helper to handle API errors
const handleResponse = async (response: Response) => {
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
    const response = await fetch(`${BASE_URL}/${repoFullName}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching repo ${repoFullName}:`, error);
    throw error;
  }
};

export const fetchLatestRelease = async (repoFullName: string): Promise<GitHubRelease | null> => {
  try {
    const response = await fetch(`${BASE_URL}/${repoFullName}/releases/latest`);
    if (response.status === 404) {
      return null; // No releases yet
    }
    return handleResponse(response);
  } catch (error) {
    console.warn(`Error fetching release for ${repoFullName}:`, error);
    return null;
  }
};