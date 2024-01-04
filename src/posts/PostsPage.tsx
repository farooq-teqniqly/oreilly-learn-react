import React from "react";
import { useEffect, useState } from "react";
import { getPosts } from "./getPosts";
import { PostData } from "./types";
import PostLists from "./PostLists";

function PostsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);

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
      <PostLists posts={posts}></PostLists>
    </div>
  );
}

export default PostsPage;
