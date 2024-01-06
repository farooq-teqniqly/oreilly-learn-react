export interface ViewerData {
  name: string;
  avatarUrl: string;
}

export interface SearchCriteria {
  org: string;
  repo: string;
}

export interface Repo {
  id: string;
  name: string;
  desc: string;
  viewerHasStarred: boolean;
  stargazers: {
    totalCount: number;
  };
}

export interface RepoData {
  repository: Repo;
}
