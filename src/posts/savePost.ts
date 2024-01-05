import { NewPostData, SavedPostData, Data } from "./types";

export async function savePost(newPostData: NewPostData) {
  const requestBody = {
    method: "POST",
    body: JSON.stringify(newPostData),
    headers: { "Content-Type": "application/json" },
  };

  console.log(requestBody);

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

export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data !== "object") {
    throw new Error("data is not an object.");
  }

  if (data === null) {
    throw new Error("data is null.");
  }

  if (!("posts" in data)) {
    throw new Error("data does not contain posts.");
  }
}
