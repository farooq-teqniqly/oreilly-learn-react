import { z } from "zod";
import { RepoData, SearchCriteria } from "./types";

export const GET_REPO_QUERY = `
    query GetRepo($org: String!, $repo: String!) {
        repository(owner: $org, name: $repo) {
            id
            name
            description
            viewerHasStarred
            stargazers {
                totalCount
            }
        }
    }
`;

type GetRepoResponse = {
  data: RepoData;
};

const stargazersSchema = z.object({
  totalCount: z.number(),
});

const repoSchema = z.object({
  id: z.string(),
  name: z.string(),
  desc: z.string(),
  viewerHasStarred: z.boolean(),
  stargazers: stargazersSchema,
});

const repoDataSchema = z.object({
  repository: repoSchema,
});

const getRepoResponseSchema = z.object({
  data: repoDataSchema,
});

function assertIsGetRepoResponse(body: any): GetRepoResponse {
  return getRepoResponseSchema.parse(body);
}

export async function getRepo(searchCriteria: SearchCriteria) {
  const response = await fetch(process.env.REACT_APP_GITHUB_URL!, {
    body: JSON.stringify({
      query: GET_REPO_QUERY,
      variables: {
        org: searchCriteria.org,
        repo: searchCriteria.repo,
      },
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_PAT}`,
    },
    method: "POST",
  });

  const body = await response.json();
  const parsedBody = assertIsGetRepoResponse(body);

  return parsedBody.data;
}
