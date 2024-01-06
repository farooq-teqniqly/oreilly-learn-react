export const STAR_REPO_MUTATION = `
    mutation ($repoId: ID!) {
        addStar(input: { starrableId: $repoId }) {
            starrable {
                stargazers {
                    totalCount
                }
            }
        }
    }
`;

export async function starRepo(repoId: string) {
  const response = await fetch(process.env.REACT_APP_GITHUB_URL!, {
    body: JSON.stringify({
      query: STAR_REPO_MUTATION,
      variables: {
        repoId: repoId,
      },
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_PAT}`,
    },
    method: "POST",
  });

  const body = await response.json();
  console.log(body);
}
