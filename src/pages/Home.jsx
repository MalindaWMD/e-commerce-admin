import { BanknotesIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  ArchiveBoxIcon,
  PresentationChartLineIcon,
  ShoppingCartIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import LineChart from "../components/charts/LineChart";
import BasicTable from "../components/common/BasicTable";
import Layout from "../components/layout/Layout";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";
import { recent_orders } from "../data/recent_orders";

const cards = [
  {
    name: "Total sales",
    icon: PresentationChartLineIcon,
    amount: 1059.45,
    prefix: "$",
  },
  {
    name: "New registrations",
    icon: UserIcon,
    amount: "143",
  },
  {
    name: "Conversion rate",
    icon: ArchiveBoxIcon,
    amount: "2.5",
    suffix: "%",
  },
  {
    name: "Cart Abandonment Rate",
    icon: ShoppingCartIcon,
    amount: "12",
    suffix: "%",
  },
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
      href: "/orders",
    },
  },
  headers: ["ID", "Customer", "Date", "Total", "Status", ""],
  rows: () => {
    return recent_orders.map((order) => {
      return {
        ...order,
        ...{
          total: "$" + order.total,
          status: <OrderStatusBadge status={order.status} />,
          actions: {
            html: () => {
              return (
                <Link
                  to="#orders"
                  className="text-denim-600 hover:text-denim-900"
                >
                  Edit
                </Link>
              );
            },
          },
        },
      };
    });
  },
};

const productsOnReorderLevel = {
  footer: {
    label: "Showing up to 5 resulsts",
    action: {
      label: "View all",
      href: "/products",
    },
  },
  headers: ["Product", "Level", "QTY"],
  rows: [
    {
      product: "Antischimel chemie",
      level: 2,
      qty: 2,
    },
    {
      product: "Dust pans small",
      level: 8,
      qty: 3,
    },
    {
      product: "Dust brush small Heizkoperburste U form",
      level: 4,
      qty: 2,
    },
    {
      product: "Hand brushe",
      level: 10,
      qty: 2,
    },
  ],
};

const TotalSalesChart = () => {
  const totalSales = {
    current_week: [1220, 1464, 1220, 2196, 2684, 1830, 1586],
    last_week: [1050, 1260, 1050, 1890, 2310, 1575, 1365],
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "This week",
        data: totalSales.current_week.slice(0, new Date().getDate() || 7),
      },
      {
        label: "Last week",
        data: totalSales.last_week,
      },
    ],
  };

  return (
    <div className="rounded-sm bg-white p-4 shadow-md">
      <p className="mb-4 text-base font-normal text-gray-900">Total sales</p>
      <LineChart data={data} yPrefix="$" abbreviate={true} steps={500} />
    </div>
  );
};

const ConversionRateChart = () => {
  const conversionRates = {
    current_week: [2.2, 2.8, 2.0, 3.5, 3.8, 2.5, 2.0],
    last_week: [2.0, 2.5, 1.8, 3.2, 3.0, 2.3, 1.9],
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "This week",
        data: conversionRates.current_week.slice(0, new Date().getDate() || 7),
      },
      {
        label: "Last week",
        data: conversionRates.last_week,
      },
    ],
  };

  return (
    <div className="rounded-sm bg-white p-4 shadow-md">
      <p className="mb-4 text-base font-normal text-gray-900">
        Conversion rate
      </p>
      <LineChart data={data} ySufix="%" />
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <h2 className="px-2 text-lg font-medium leading-6 text-gray-900">
        Overview
        <small className="ml-1 text-xs italic text-gray-500">(Past week)</small>
      </h2>
      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card */}
        {cards.map((card) => (
          <DashboardCard key={card.name} card={card} />
        ))}
      </div>

      {/* (smallest breakpoint only) */}
      <div className="mt-4 shadow sm:hidden">
        <h2 className="mb-2 px-2 text-lg font-medium leading-6 text-gray-900">
          Recent orders
        </h2>
        <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
          {recent_orders.map((order) => (
            <li key={order.id}>
              <Link
                to={"/orders/" + order.id}
                className="block bg-white px-4 py-4 hover:bg-gray-50"
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    <BanknotesIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col truncate text-sm text-gray-500">
                      <span className="truncate">{order.customer}</span>
                      <span className="font-medium text-gray-900">
                        ${order.total}
                      </span>
                      <time dateTime={order.date}>{order.date}</time>
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

        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-gray-100 px-4 py-4 sm:px-6"
          aria-label="Pagination"
        >
          <Link
            to="/orders"
            className="text-sm font-medium text-denim-500 hover:text-denim-700"
          >
            View all
          </Link>
        </nav>
      </div>

      <div className="mt-8 hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2">
        <div>
          <h2 className="mb-2 text-lg font-medium leading-6 text-gray-900">
            Total sales
          </h2>
          <TotalSalesChart />
        </div>
        <div>
          <h2 className="mb-2 text-lg font-medium leading-6 text-gray-900">
            Converstion rate
          </h2>
          <ConversionRateChart />
        </div>
      </div>

      <div className="mt-8 hidden sm:flow-root">
        <h2 className="mb-2 text-lg font-medium leading-6 text-gray-900">
          Recent orders
        </h2>
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <BasicTable data={recentOrdersTableData} />
          </div>
        </div>
      </div>

      <div className="mt-8 hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2">
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
