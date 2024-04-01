import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import BasicTable from "../components/common/BasicTable";
import Layout from "../components/layout/Layout";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";
import { addresses } from "../data/addresses";
import { recent_orders } from "../data/recent_orders";
import { customers } from "../data/customers";
import { IMaskInput } from "react-imask";

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
      <h2 className="mb-4 text-lg leading-6 font-medium text-gray-900">
        Personal information
      </h2>
      <div className="bg-white shadow-md rounded-md mb-4">
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
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
              mask={'+000000000000000'}
              lazy={false}
              unmask={true}
              className="block w-full px-3 text-left border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 h-9 sm:text-sm"
              value={customer?.phone_no}
            />
          </div>
        </div>

        <div className="px-4 py-3 bg-gray-100 text-right rounded-b-md">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              className="bg-indigo-600 border border-transparent rounded-md py-1.5 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-500 active:bg-indigo-900"
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
      <h2 className="mb-4 text-lg leading-6 font-medium text-gray-900">
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
          <button className="absolute right-0 w-5 h-5 text-blue-500 hover:text-blue-700">
            <PencilSquareIcon />
          </button>
          <div className="space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {address.name}
            </h3>
            <p className="truncate mt-1 text-sm text-gray-500">
              {address.street}
            </p>
            <p className="truncate mt-1 text-sm text-gray-500">
              {address.city}
            </p>
            <p className="truncate mt-1 text-sm text-gray-500">
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
      <div className="flex justify-between items-center">
        <h2 className="mb-4 text-lg leading-6 font-medium text-gray-900">
          Addresses
        </h2>
        <button
        type="button"
        className="inline-flex items-center rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon className="w-4 h-4 mr-2"/>
        New address
      </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {addresses.map((address, idx) => {
          return <Address key={'address-' + idx} address={address} />;
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
