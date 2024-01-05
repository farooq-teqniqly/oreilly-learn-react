import React from "react";
import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import { assertIsPosts } from "./getPosts";
import { assertIsData, savePost } from "./savePost";
import { PostData, NewPostData } from "./types";
import PostLists from "./PostLists";
import NewPostForm from "./NewPostForm";

function PostsPage() {
  const data = useLoaderData();
  assertIsData(data);

  async function handleSave(newPostData: NewPostData) {
    await savePost(newPostData);
  }

  return (
    <div className="mx-auto w-96">
      <h2 className="text-4xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={handleSave}></NewPostForm>
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
