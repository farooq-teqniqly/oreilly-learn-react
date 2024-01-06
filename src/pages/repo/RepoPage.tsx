import React from "react";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRepo } from "../../api/getRepo";
import { starRepo } from "../../api/starRepo";
import { RepoData, SearchCriteria } from "../../api/types";
import { SearchRepoForm } from "./SearchRepoForm";
import { StarRepoButton } from "./StarRepoButton";
import { FoundRepo } from "./FoundRepo";

export function RepoPage() {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | undefined>();

  function handleSearch(criteria: SearchCriteria) {
    setSearchCriteria(criteria);
  }

  function handleStarClick() {
    if (data) {
      mutate(data.repository.id);
    }
  }

  const { data } = useQuery({
    queryKey: ["repo", searchCriteria],
    queryFn: () => getRepo(searchCriteria as SearchCriteria),
    enabled: searchCriteria !== undefined,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: starRepo,
    onSuccess: () => {
      queryClient.setQueryData<RepoData>(["repo", searchCriteria], (repo) => {
        if (repo === undefined) {
          return undefined;
        }

        return {
          ...repo,
          viewerHasStarred: true,
        };
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
            desc={data.repository.desc}
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
