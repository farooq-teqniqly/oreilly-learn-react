import React from "react";
import { PostData } from "./types";

interface Props {
  posts: PostData[];
}

function PostLists({ posts }: Props) {
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostLists;
