import { IMaskInput } from "react-imask";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import BasicTable from "../components/common/BasicTable";
import Layout from "../components/layout/Layout";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";
import { addresses } from "../data/addresses";
import { recent_orders } from "../data/recent_orders";
import { customers } from "../data/customers";

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
                  className="text-indigo-600 hover:text-indigo-900"
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

const PersonalInformation = ({ customer }) => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-lg font-medium leading-6 text-gray-900">
        Personal information
      </h2>
      <div className="mb-4 rounded-md bg-white shadow-md">
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
              className="focus:shadow-outline-blue form-input mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
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
              className="focus:shadow-outline-blue form-input mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
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
              className="block h-9 w-full rounded-md border border-gray-300 px-3 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={customer?.phone_no}
            />
          </div>
        </div>

        <div className="rounded-b-md bg-gray-100 px-4 py-3 text-right">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-1.5 text-sm font-medium leading-5 text-white hover:bg-indigo-500 focus:border-indigo-500 focus:outline-none active:bg-indigo-900"
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
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-lg font-medium leading-6 text-gray-900">
        Orders
      </h2>
      <BasicTable data={recentOrdersTableData} />
    </div>
  );
};

const Address = ({ address }) => {
  return (
    <div className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
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
        <h2 className="mb-4 text-lg font-medium leading-6 text-gray-900">
          Addresses
        </h2>
        <button
          type="button"
          className="inline-flex items-center rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
      <PersonalInformation customer={customer} />
      <Orders />
      <Addresses />
    </Layout>
  );
}
