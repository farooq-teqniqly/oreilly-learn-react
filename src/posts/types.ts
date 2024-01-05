export interface PostData {
  id: number;
  title: string;
  description: string;
}

export interface NewPostData {
  title: string;
  description: string;
}

export interface SavedPostData {
  id: number;
}

export interface Data {
  posts: PostData[];
}
