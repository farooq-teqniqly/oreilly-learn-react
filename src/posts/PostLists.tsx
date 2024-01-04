import React from "react";
import { PostData } from "./types";

interface Props {
  posts: PostData[];
}

function PostLists({ posts }: Props) {
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id} className="border-b py-4">
          <h3 className="text-slate-900 font-bold">{p.title}</h3>
          <p className="text-slate-900">{p.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostLists;
