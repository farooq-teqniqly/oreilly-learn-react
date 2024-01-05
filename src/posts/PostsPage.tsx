import React from "react";
import { Suspense } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLoaderData, Await } from "react-router-dom";
import { assertIsPosts, getPosts } from "./getPosts";
import { assertIsData, savePost } from "./savePost";
import { PostData } from "./types";
import PostLists from "./PostLists";
import NewPostForm from "./NewPostForm";

function PostsPage() {
  // const data = useLoaderData();
  // assertIsData(data);

  const {
    isLoading,
    isFetching,
    data: posts,
  } = useQuery({ queryKey: ["postsData"], queryFn: getPosts });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: savePost,
    onSuccess: (savedPost) => {
      queryClient.setQueryData<PostData[]>(["postsData"], (oldPosts) => {
        if (oldPosts === undefined) {
          return [savedPost];
        } else {
          return [savedPost, ...oldPosts];
        }
      });
    },
  });

  if (isLoading || posts === undefined) {
    return <div className="mx-auto">Fetching posts...</div>;
  }

  return (
    <div className="mx-auto w-96">
      <h2 className="text-4xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={mutate}></NewPostForm>
      <PostLists posts={posts}></PostLists>
      {/* {isFetching ? <div>Refreshing list of posts...</div> : <PostLists posts={posts}></PostLists>} */}
      {/* <Suspense fallback={<div>Fetching posts...</div>}>
        <Await resolve={data.posts}>
          {(p) => {
            assertIsPosts(p);
            return <PostLists posts={p}></PostLists>;
          }}
        </Await>
      </Suspense> */}
    </div>
  );
}

export default PostsPage;
