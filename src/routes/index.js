import { ArchiveBoxIcon, HomeIcon } from "@heroicons/react/24/outline";
import AddProduct from "../pages/AddProduct";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Route from "./route";

export const routes = [
  new Route({
    path: "/",
    element: <Home />,
    hidden: false,
    display_name: 'Home',
    icon: HomeIcon,
    // ordinal: -1,
  }),
  new Route({
    path: "/products",
    element: <Products />,
    hidden: false,
    display_name: 'Products',
    icon: ArchiveBoxIcon,
    // ordinal: -1,
  }),
  new Route({
    path: "/products/add",
    element: <AddProduct />,
    hidden: true,
  }),
];
