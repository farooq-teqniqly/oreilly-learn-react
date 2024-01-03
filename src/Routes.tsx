import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundErrorPage from "./pages/NotFoundErrorPage";
import ContactPage from "./pages/ContactPage";

const AdminPage = lazy(() => import("./pages/AdminPage"));

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
        path: "admin",
        element: (
          <Suspense fallback={<div className="text-center p-4 text-xl">Loading...</div>}>
            <AdminPage></AdminPage>
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "products",
        element: <ProductsPage></ProductsPage>,
      },
      {
        path: "*",
        element: <NotFoundErrorPage></NotFoundErrorPage>,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router}></RouterProvider>;
}
