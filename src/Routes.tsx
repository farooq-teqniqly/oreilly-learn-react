import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Header from "./Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
  },
  {
    path: "products",
    element: <ProductsPage></ProductsPage>,
  },
]);

export default function Routes() {
  return <RouterProvider router={router}></RouterProvider>;
}
