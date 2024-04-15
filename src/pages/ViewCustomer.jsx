import { IMaskInput } from "react-imask";
import { ArrowLeftIcon, BanknotesIcon, ChevronRightIcon, PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import BasicTable from "../components/common/BasicTable";
import Layout from "../components/layout/Layout";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";
import { addresses } from "../data/addresses";
import { recent_orders } from "../data/recent_orders";
import { customers } from "../data/customers";
import { isMobile } from "../utils/window";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader";

const recentOrdersTableData = {
  footer: {
    label: "Showing up to 5 resulsts",
    action: {
      label: "View all",
      href: "#orders",
    },
  },
  headers: ["ID", "Customer", "Date", "Total", "Status", ""],
  rows: () => {
    let orders = recent_orders.slice(0, 5);
    return orders.map((order) => {
      return {
        ...order,
        ...{
          total: "$" + order.total,
          status: <OrderStatusBadge status={order.status} />,
          actions: {
            html: () => {
              return (
                <a
                  href="#orders"
                  className="text-denim-500 hover:text-denim-600"
                >
                  View
                </a>
              );
            },
          },
        },
      };
    });
  },
};

const Header = ({ id }) => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          #{id}
        </h1>
      </div>
      <div className="sm:mt-6 flex space-x-3 md:ml-4 md:mt-0">
        <Link
          to="/customers"
          className="sm:hidden inline-flex rounded-sm bg-white p-2 sm:px-2.5 sm:py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
        </Link>
      </div>
    </PageHeader>
  );
};

const PersonalInformation = ({ customer }) => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 px-3 sm:px-0 text-lg font-medium leading-6 text-gray-900">
        Personal information
      </h2>
      <div className="mb-4 rounded-sm bg-white shadow-md">
        <div className="grid grid-cols-4 gap-6 p-4">
          <div className="col-span-4 sm:col-span-2">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Name
            </label>
            <input
              id="first_name"
              defaultValue={customer?.name}
              className="focus:shadow-outline-blue form-input mt-1 block w-full rounded-sm border border-gray-300 px-3 py-2 shadow-sm transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
            />
          </div>
          <div className="col-span-4 sm:col-span-2"></div>

          <div className="col-span-4 sm:col-span-2">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Email
            </label>
            <input
              id="last_name"
              defaultValue={customer?.email}
              className="focus:shadow-outline-blue form-input mt-1 block w-full rounded-sm border border-gray-300 px-3 py-2 shadow-sm transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
            />
          </div>

          <div className="col-span-4 sm:col-span-2">
            <label
              htmlFor="email_address"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Phone no
            </label>
            <IMaskInput
              mask={"+000000000000000"}
              lazy={false}
              unmask={true}
              className="block mt-1 w-full rounded-sm border border-gray-300 px-3 text-left shadow-sm focus:border-denim-500 focus:ring-denim-500 sm:text-sm"
              value={customer?.phone_no}
            />
          </div>
        </div>

        <div className="rounded-b-md border-t px-4 py-3 text-right">
          <span className="inline-flex rounded-sm shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center rounded-sm border border-transparent bg-denim-500 px-4 py-1.5 text-sm font-medium leading-5 text-white hover:bg-denim-400 focus:border-denim-500 focus:outline-none active:bg-denim-600"
            >
              Save
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

const Orders = () => {

  if(isMobile()){
    return(
      <div className="mb-8">
      <h2 className="mb-4 px-3 sm:px-0 text-lg font-medium leading-6 text-gray-900">
        Orders
      </h2>
      <ul
          className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
        >
          {recent_orders.map((order) => (
            <li key={order.id}>
              <Link
                to={'/orders/' + order.id}
                className="block bg-white px-4 py-4 hover:bg-gray-50"
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    <BanknotesIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col truncate text-sm text-gray-500">
                      <span className="truncate">#{order.id}</span>
                        <span className="font-medium text-gray-900">
                          ${order.total}
                        </span>
                      <time dateTime={order.date}>
                        {order.date}
                      </time>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
    </div>
    )
  }

  return (
    <div className="mb-8">
      <h2 className="mb-4 px-3 sm:px-0 text-lg font-medium leading-6 text-gray-900">
        Orders
      </h2>
      <BasicTable data={recentOrdersTableData} />
    </div>
  );
};

const Address = ({ address }) => {
  return (
    <div className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md">
      <div className="flex w-full items-center justify-between space-x-6 p-5">
        <div className="relative flex-1 truncate">
          <button className="absolute right-0 h-5 w-5 text-blue-500 hover:text-blue-700">
            <PencilSquareIcon />
          </button>
          <div className="space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {address.name}
            </h3>
            <p className="mt-1 truncate text-sm text-gray-500">
              {address.street}
            </p>
            <p className="mt-1 truncate text-sm text-gray-500">
              {address.city}
            </p>
            <p className="mt-1 truncate text-sm text-gray-500">
              {address.state}, {address.zip_code}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Addresses = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 px-3 sm:px-0 text-lg font-medium leading-6 text-gray-900">
          Addresses
        </h2>
        <button
          type="button"
          className="hidden sm:inline-flex items-center rounded-sm bg-denim-500 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-denim-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-denim-500"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          New address
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {addresses.map((address, idx) => {
          return <Address key={"address-" + idx} address={address} />;
        })}
      </div>
    </div>
  );
};

export default function ViewCustomer(props) {
  const customer = customers[0];
  return (
    <Layout>
      <Header as="page-header" id={customer.id} />
      <PersonalInformation customer={customer} />
      <Orders />
      <Addresses />
    </Layout>
  );
}
