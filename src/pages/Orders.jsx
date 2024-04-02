import { Link } from "react-router-dom";
import EDataTables from "../components/extended/EDataTable";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import { customers } from "../data/customers";

const columns = [
  {
    name: "ID",
    sortable: true,
    selector: (item) => {
      return item.item?.id || item.id;
    },
  },
  {
    name: "Name",
    sortable: true,
    selector: (item) => {
      return item.item?.name || item.name;
    },
  },
  {
    name: "Email",
    sortable: true,
    selector: (item) => {
      return item.item?.email || item.email;
    },
  },
  {
    name: "Phone no",
    sortable: true,
    selector: (item) => {
      return item.item?.phone_no || item.phone_no;
    },
  },
  {
    name: "Order count",
    sortable: true,
    selector: (item) => {
      return item.item?.order_count || item.order_count;
    },
  },
  {
    name: "",
    sortable: false,
    selector: (item) => {
      return (
        <div>
          <Link
            to={"/customers/" + item.id}
            className="mr-3 font-medium text-indigo-600 hover:text-indigo-900"
          >
            View
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
          Customers
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0"></div>
    </PageHeader>
  );
};

export default function Orders(props) {
  const searchFields = ["name", "email", "phone_no"];

  const loadCustomers = () => {
    return customers;
  };

  return (
    <Layout>
      <Header as="page-header" />
      <EDataTables
        data={customers}
        columns={columns}
        searchFields={searchFields}
        filterable={true}
        loadDataFunction={loadCustomers}
        className={props.classNames}
      />
    </Layout>
  );
}
