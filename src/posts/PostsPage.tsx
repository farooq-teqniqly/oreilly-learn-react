import React from "react";
import { Suspense } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLoaderData, Await, useNavigate } from "react-router-dom";
import { assertIsPosts } from "./getPosts";
import { assertIsData, savePost } from "./savePost";
import { PostData } from "./types";
import PostLists from "./PostLists";
import NewPostForm from "./NewPostForm";

function PostsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const data = useLoaderData();
  assertIsData(data);

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

      navigate("/posts");
    },
  });

  return (
    <div className="mx-auto w-96">
      <h2 className="text-4xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={mutate}></NewPostForm>
      <Suspense fallback={<div>Fetching posts...</div>}>
        <Await resolve={data.posts}>
          {(p) => {
            assertIsPosts(p);
            return <PostLists posts={p}></PostLists>;
          }}
        </Await>
      </Suspense>
    </div>
  );
}

export default PostsPage;
