import AddProduct from "../pages/AddProduct";
import Home from "../pages/Home";
import Products from "../pages/Products";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/add",
    element: <AddProduct />,
  },
];
