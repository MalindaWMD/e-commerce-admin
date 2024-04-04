import { ArchiveBoxIcon, HomeIcon, InboxStackIcon, TicketIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
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
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";
import Promotions from "../pages/Promotions";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Settings from "../pages/Settings";

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
    path: "/orders",
    element: <Orders />,
    display_name: 'Orders',
    icon: InboxStackIcon,
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
    path: "/promotions",
    element: <Promotions />,
    display_name: 'Promotions',
    icon: TicketIcon,
    // ordinal: -1,
  }),
  

  new Route({
    path: "/products/add",
    element: <AddProduct />,
    hidden: true,
  }),
  new Route({
    path: "/products/:id",
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
    path: "/orders/:id",
    element: <OrderDetails />,
    hidden: true,
  }),
  new Route({
    path: "/login",
    element: <Login />,
    hidden: true,
  }),
  new Route({
    path: "/forgot-password",
    element: <ForgotPassword />,
    hidden: true,
  }),
  new Route({
    path: "/reset-password",
    element: <ResetPassword />,
    hidden: true,
  }),
  new Route({
    path: "/settings",
    element: <Settings />,
    hidden: true,
  }),


  new Route({
    path: "*",
    element: <Error404/>,
    hidden: true,
  }),
];
