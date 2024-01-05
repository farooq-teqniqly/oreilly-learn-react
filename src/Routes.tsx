import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import NotFoundErrorPage from "./pages/NotFoundErrorPage";
import HomePage from "./pages/HomePage";
import PostsPage from "./posts/PostsPage";
import { getPosts } from "./posts/getPosts";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "posts",
        element: <PostsPage></PostsPage>,
        loader: async () => defer({ posts: getPosts() }),
      },
      {
        path: "*",
        element: <NotFoundErrorPage></NotFoundErrorPage>,
      },
    ],
  },
]);

export default function Routes() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}
