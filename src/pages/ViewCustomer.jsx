import BasicTable from "../components/common/BasicTable";
import Layout from "../components/layout/Layout";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";
import { addresses } from "../data/addresses";
import { recent_orders } from "../data/recent_orders";

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
    return recent_orders.map((order) => {
      return {
          ...order ,
          ...{
            total: '$' + order.total,
            status: <OrderStatusBadge status={order.status} />,
            actions: {
              html: () => {
                return (
                  <a href="#orders" className="text-indigo-600 hover:text-indigo-900">
                    View
                  </a>
                );
              },
            }
          }
        }
    })
  }
}

const PersonalInformation = () => {
  return (
    <div className="mb-6">
      <h2 class="mb-4 text-lg leading-6 font-medium text-gray-900">
        Personal information
      </h2>
      <div className="bg-white shadow-md rounded-md mb-4">
        <div class="grid grid-cols-4 gap-6 p-4">
          <div class="col-span-4 sm:col-span-2">
            <label
              for="first_name"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Name
            </label>
            <input
              id="first_name"
              class="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
          <div class="col-span-4 sm:col-span-2"></div>

          <div class="col-span-4 sm:col-span-2">
            <label
              for="last_name"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Email
            </label>
            <input
              id="last_name"
              class="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>

          <div class="col-span-4 sm:col-span-2">
            <label
              for="email_address"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Phone no
            </label>
            <input
              id="email_address"
              class="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div class="px-4 py-3 bg-gray-100 text-right rounded-b-md">
          <span class="inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              class="bg-gray-800 border border-transparent rounded-md py-1.5 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out"
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
    <div className="mb-6">
      <h2 class="mb-4 text-lg leading-6 font-medium text-gray-900">
        Orders
      </h2>
      <BasicTable data={recentOrdersTableData} />
    </div>
  );
};

const Addresses = () => {
  return(
    <div className="mb-6">
      <h2 class="mb-4 text-lg leading-6 font-medium text-gray-900">
        Addresses
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {addresses.map(address => {
          return <div className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-5">
            <div className="flex-1 truncate">
            <div className="space-x-3">
              <h3 className="truncate text-sm font-medium text-gray-900">{address.name}</h3>
              <p className="truncate mt-1 text-sm text-gray-500">{address.street}</p>
              <p className="truncate mt-1 text-sm text-gray-500">{address.city}</p>
              <p className="truncate mt-1 text-sm text-gray-500">{address.state}, {address.zip_code}</p>
            </div>
            </div>
          </div>
        </div>
        })}
      </div>
    </div>
  )
}

export default function ViewCustomer(props) {
  return (
    <Layout>
      <PersonalInformation />
      <Orders />
      <Addresses />
    </Layout>
  );
}
