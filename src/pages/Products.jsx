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
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            Active
          </span>
        );
      }

      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
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
          <a
            href={`/products/stocks/${item.id}`}
            className="text-green-600 mr-3 font-medium hover:text-indigo-900"
          >
            Stocks
          </a>
          <a
            href={`/products/edit/${item.id}`}
            className="text-indigo-600 font-medium hover:text-indigo-900"
          >
            Edit
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
          Products
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
        <a
          href="/products/add"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Add product
        </a>
      </div>
    </PageHeader>
  );
};

export default function Products(props) {
  
  const searchFields = ['name'];

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
