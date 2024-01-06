import React from "react";
import { useState } from "react";
import { useLazyQuery, useMutation, useApolloClient } from "@apollo/client";
import { GET_REPO_QUERY } from "../../api/getRepo";
import { STAR_REPO_MUTATION } from "../../api/starRepo";
import { getRepo } from "../../api/getRepo";
import { starRepo } from "../../api/starRepo";
import { RepoData, SearchCriteria } from "../../api/types";
import { SearchRepoForm } from "./SearchRepoForm";
import { StarRepoButton } from "./StarRepoButton";
import { FoundRepo } from "./FoundRepo";

export function RepoPage() {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | undefined>();

  function handleSearch(criteria: SearchCriteria) {
    getRepo({ variables: { ...criteria } });
    setSearchCriteria(criteria);
  }

  function handleStarClick() {
    if (data) {
      starRepo({ variables: { repoId: data.repository.id } });
    }
  }

  const [getRepo, { data }] = useLazyQuery(GET_REPO_QUERY);

  const queryClient = useApolloClient();

  const [starRepo] = useMutation(STAR_REPO_MUTATION, {
    onCompleted: () => {
      queryClient.cache.writeQuery({
        query: GET_REPO_QUERY,
        data: {
          repository: {
            ...data.repository,
            viewerHasStarred: true,
          },
        },
        variables: searchCriteria,
      });
    },
  });

  return (
    <main className="max-w-xs ml-auto mr-auto">
      <SearchRepoForm onSearch={handleSearch}></SearchRepoForm>
      {data && (
        <>
          <FoundRepo
            name={data.repository.name}
            description={data.repository.description}
            stars={data.repository.stargazers.totalCount}
          ></FoundRepo>
          {!data.repository.viewerHasStarred && (
            <StarRepoButton onClick={handleStarClick}></StarRepoButton>
          )}
        </>
      )}
    </main>
  );
}
