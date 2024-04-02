import { ArchiveBoxIcon, HomeIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import AddProduct from "../pages/AddProduct";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Route from "./route";
import EditProduct from "../pages/EditProduct";
import ProductStocks from "../pages/ProductStocks";
import Customers from "../pages/Customers";
import ViewCustomer from "../pages/ViewCustomer";
import Users from "../pages/Users";
import UserRoles from "../pages/UserRoles";
import Error404 from "../pages/Error404";

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
    path: "/customers",
    element: <Customers />,
    display_name: 'Customers',
    icon: UsersIcon,
    // ordinal: -1,
  }),
  new Route({
    path: "/users",
    element: <Users />,
    display_name: 'Users',
    icon: UserIcon,
    // ordinal: -1,
  }),
  
  new Route({
    path: "/products/add",
    element: <AddProduct />,
    hidden: true,
  }),
  new Route({
    path: "/products/edit/:id",
    element: <EditProduct />,
    hidden: true,
  }),
  new Route({
    path: "/products/:id/stocks",
    element: <ProductStocks />,
    hidden: true,
  }),
  new Route({
    path: "/customers/:id",
    element: <ViewCustomer />,
    hidden: true,
  }),
  new Route({
    path: "/users/permissions",
    element: <UserRoles />,
    hidden: true,
  }),
  new Route({
    path: "/users/edit/:id",
    element: <Users />,
    hidden: true,
  }),
  new Route({
    path: "*",
    element: <Error404/>,
    hidden: true,
  }),
];
