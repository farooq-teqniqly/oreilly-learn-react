import { NewPostData, SavedPostData } from "./types";

export async function savePost(newPostData: NewPostData) {
  const requestBody = {
    method: "POST",
    body: JSON.stringify(newPostData),
  };

  const response = await fetch(process.env.REACT_APP_API_URL!, requestBody);
  const responseBody = (await response.json()) as unknown;
  assertIsSavedPost(responseBody);

  return { ...newPostData, ...responseBody };
}

function assertIsSavedPost(savedPost: any): asserts savedPost is SavedPostData {
  if (!("id" in savedPost)) {
    throw new Error("post doesn't contain id");
  }

  if (typeof savedPost.id !== "number") {
    throw new Error("id is not a number");
  }
}
