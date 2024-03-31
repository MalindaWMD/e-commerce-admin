import { BanknotesIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  ArchiveBoxIcon,
  ScaleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Layout from "../components/layout/Layout";
import DashboardCard from "../components/DashboardCard";
import BasicTable from "../components/common/BasicTable";
import { recent_orders } from "../data/recent_orders";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";


const cards = [
  {
    name: "Account balance",
    action: "#",
    icon: ScaleIcon,
    amount: "$30,659.45",
  },
  { 
    name: "New registrations", 
    action: "#", 
    icon: UserIcon, 
    amount: "143" 
  },
  {
    name: "Completed orders",
    action: "#",
    icon: ArchiveBoxIcon,
    amount: "26",
    subtitle: "Past week",
  },
  // More items...
];

const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];

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
                    Edit
                  </a>
                );
              },
            }
          }
        }
    })
  }
}

const productsOnReorderLevel = {
  footer: {
    label: "Showing up to 5 resulsts",
    action: {
      label: "View all",
      href: "#products",
    },
  },
  headers: ['Product', 'Level', 'QTY'],
  rows: [
    {
      product: 'Antischimel chemie',
      level: 2,
      qty: 2
    },
    {
      product: 'Dust pans small',
      level: 8,
      qty: 3
    },
    {
      product: 'Dust brush small Heizkoperburste U form',
      level: 4,
      qty: 2
    },
    {
      product: 'Hand brushe',
      level: 10,
      qty: 2
    },
  ]
}

export default function Home() {
  return (
    <Layout>
      <h2 className="text-lg font-medium leading-6 text-gray-900">
        Overview
        <small className="text-xs ml-1 text-gray-500 italic">(Past week)</small>
      </h2>
      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card */}
        {cards.map((card) => (
          <DashboardCard key={card.name} card={card} />
        ))}
      </div>

      {/* Activity list (smallest breakpoint only) */}
      <div className="shadow sm:hidden">
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
        >
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <a
                href={transaction.href}
                className="block bg-white px-4 py-4 hover:bg-gray-50"
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    <BanknotesIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col truncate text-sm text-gray-500">
                      <span className="truncate">{transaction.name}</span>
                      <span>
                        <span className="font-medium text-gray-900">
                          {transaction.amount}
                        </span>{" "}
                        {transaction.currency}
                      </span>
                      <time dateTime={transaction.datetime}>
                        {transaction.date}
                      </time>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
          aria-label="Pagination"
        >
          <div className="flex flex-1 justify-between">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
        </nav>
      </div>

      <div className="mt-8 flow-root">
        <h2 className="mb-2 text-lg font-medium leading-6 text-gray-900">
          Recent orders
        </h2>
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <BasicTable data={recentOrdersTableData}/>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
          <h2 className="mb-2 text-lg font-medium leading-6 text-gray-900">
            Low stock products
          </h2>
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <BasicTable data={productsOnReorderLevel} />
            </div>
            </div>
        </div>
        <div className="">
          <h2 className="mb-2 text-lg font-medium leading-6 text-gray-900">
            Products on buffer
          </h2>
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <BasicTable data={productsOnReorderLevel} />
            </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
