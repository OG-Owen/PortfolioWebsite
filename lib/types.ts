export type GitHubProject = {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  isPinned: boolean;
  pushedAt: string;
};
