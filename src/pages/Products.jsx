import { Link } from "react-router-dom";
import EDataTables from "../components/extended/EDataTable";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import ProductTableFilters from "../components/products/ProductTableFilters";
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
    name: "Category",
    sortable: true,
    selector: (item) => {
      return item.item?.category || item.category;
    },
  },
  {
    name: "Brand",
    sortable: true,
    selector: (item) => {
      return item.item?.brand || item.brand;
    },
  },
  {
    name: "Available QTY",
    sortable: true,
    selector: (item) => {
      return item.item?.qty || item.qty;
    },
  },
  {
    name: "Status",
    sortable: true,
    selector: (item) => {
      if ((item.item?.status || item.status) === "active") {
        return (
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
            Active
          </span>
        );
      }

      return (
        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
          Draft
        </span>
      );
    },
  },
  {
    name: "",
    sortable: false,
    selector: (item) => {
      return (
        <div>
          <Link
            to={"/products/" + item.id + "/stocks"}
            className="mr-3 font-medium text-green-600 hover:text-indigo-900"
          >
            Stocks
          </Link>
          <Link
            to={`/products/edit/${item.id}`}
            className="font-medium text-indigo-600 hover:text-indigo-900"
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
          Products
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
        <Link
          to="/products/add"
          className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          Add product
        </Link>
      </div>
    </PageHeader>
  );
};

export default function Products(props) {
  const searchFields = ["name"];

  const loadProducts = () => {
    return products;
  };

  return (
    <Layout>
      <Header as="page-header" />
      <EDataTables
        data={products}
        columns={columns}
        searchFields={searchFields}
        filterable={true}
        filterComponents={ProductTableFilters}
        loadDataFunction={loadProducts}
        className={props.classNames}
      />
    </Layout>
  );
}
