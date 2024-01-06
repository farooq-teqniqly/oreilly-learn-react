import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import NotFoundErrorPage from "./pages/NotFoundErrorPage";
import HomePage from "./pages/HomePage";
import Header from "./Header";
import { RepoPage } from "./pages/repo/RepoPage";

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
        path: "viewer",
        element: <Header></Header>,
      },
      {
        path: "repo",
        element: <RepoPage></RepoPage>,
      },
      {
        path: "*",
        element: <NotFoundErrorPage></NotFoundErrorPage>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

export default function Routes() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>{" "}
    </QueryClientProvider>
  );
}
