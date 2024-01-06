import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
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

const queryClient = new ApolloClient({
  uri: process.env.REACT_APP_GITHUB_URL!,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_PAT}`,
  },
});

export default function Routes() {
  return (
    <ApolloProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>{" "}
    </ApolloProvider>
  );
}
