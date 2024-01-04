import React from "react";
import { useEffect, useState } from "react";
import { getPosts } from "./getPosts";
import { savePost } from "./savePost";
import { PostData, NewPostData } from "./types";
import PostLists from "./PostLists";
import NewPostForm from "./NewPostForm";

function PostsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);

  async function handleSave(newPostData: NewPostData) {
    const newPost = await savePost(newPostData);
    setPosts([newPost, ...posts]);
  }

  useEffect(() => {
    let cancel = false;

    getPosts().then((data) => {
      if (!cancel) {
        setPosts(data);
        setIsLoading(false);
      }
    });

    return () => {
      cancel = true;
    };
  }, []);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="mx-auto w-96">
      <h2 className="text-4xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={handleSave}></NewPostForm>
      <PostLists posts={posts}></PostLists>
    </div>
  );
}

export default PostsPage;
