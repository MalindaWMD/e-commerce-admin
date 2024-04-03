import { Link } from "react-router-dom";
import EDataTables from "../components/extended/EDataTable";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import OrderTableFilters from "../components/orders/OrderTableFilters";
import { orders } from "../data/orders";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";

const columns = [
  {
    name: "ID",
    sortable: true,
    selector: (item) => {
      return item.item?.id || item.id;
    },
  },
  {
    name: "Customer",
    sortable: true,
    selector: (item) => {
      return item.item?.customer || item.customer;
    },
  },
  {
    name: "Date",
    sortable: true,
    selector: (item) => {
      return item.item?.date || item.date;
    },
  },
  {
    name: "Total",
    sortable: true,
    right:true,
    selector: (item) => {
      return '$' + (item.item?.total || item.total);
    },
  },
  {
    name: "Status",
    sortable: true,
    selector: (item) => {
      return <OrderStatusBadge status={item.item?.status || item.status} />
    },
  },
  {
    name: "",
    sortable: false,
    selector: (item) => {
      return (
        <div>
          <Link
            to={"/orders/" + item.id}
            className="mr-3 font-medium text-indigo-600 hover:text-indigo-900"
          >
            Edit
          </Link>
        </div>
      );
    },
  },
];

const Header = () => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Orders
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
      <button
          type="button"
          className="rounded-md bg-cyan-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          Export all
          </button>
      </div>
    </PageHeader>
  );
};

export default function Orders(props) {
  const searchFields = ["name", "email", "phone_no"];

  const loadOrders = () => {
    return orders;
  };

  return (
    <Layout>
      <Header as="page-header" />
      <EDataTables
        data={orders}
        columns={columns}
        searchFields={searchFields}
        filterable={true}
        filterComponents={OrderTableFilters}
        loadDataFunction={loadOrders}
        className={props.classNames}
      />
    </Layout>
  );
}
