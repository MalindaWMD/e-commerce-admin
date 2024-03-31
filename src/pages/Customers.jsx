import EDataTables from "../components/extended/EDataTable";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import ProductTableFilters from "../components/products/ProductTableFilters";
import { customers } from "../data/customers";
import { products } from "../data/products";

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
          <a
            href={'/customers/' + item.id}
            className="text-green-600 mr-3 font-medium hover:text-indigo-900"
          >
            View
          </a>
        </div>
      );
    },
  },
];

const Header = () => {
  return (
    <PageHeader>
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
          Customers
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
      </div>
    </PageHeader>
  );
};

export default function Customers(props) {
  
  const searchFields = ['name', 'email', 'phone_no'];

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
