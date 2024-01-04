import { PostData } from "./types";

export async function getPosts() {
  const response = await fetch(process.env.REACT_APP_API_URL!);
  const body = (await response.json()) as unknown;
  assertIsPosts(body);
  return body;
}

export function assertIsPosts(postsData: any): asserts postsData is PostData[] {
  if (!Array.isArray(postsData)) {
    throw new Error("posts is not an array");
  }

  if (postsData.length === 0) {
    return;
  }

  postsData.forEach((p) => {
    if (!("id" in p)) {
      throw new Error("post doesn't contain an id");
    }

    if (typeof p.id !== "number") {
      throw new Error("id is not a number");
    }

    if (!("title" in p)) {
      throw new Error("post doesn't contain a title");
    }

    if (typeof p.title !== "string") {
      throw new Error("title is not a string");
    }

    if (!("description" in p)) {
      throw new Error("post doesn't contain a description");
    }

    if (typeof p.description !== "string") {
      throw new Error("description is not a string");
    }
  });
}
