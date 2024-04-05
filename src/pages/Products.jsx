import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/common/Table";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import ProductTableFilters from "../components/products/ProductTableFilters";
import { products } from "../data/products";
import { fuzzyFilter } from "../utils/table";
import { isMobile } from "../utils/window";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const columnHelper = createColumnHelper();

const columns = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <div className="text-center">
          <input
            type="checkbox"
            className="text-primary-600 focus:ring-primary-600 h-4 w-4 rounded border-gray-400"
            onChange={table.getToggleAllRowsSelectedHandler()}
            checked={table.getIsAllRowsSelected()}
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">
        <input
          type="checkbox"
          className="text-primary-600 focus:ring-primary-600 h-4 w-4 rounded border-gray-400"
          onChange={row.getToggleSelectedHandler()}
          checked={row.getIsSelected()}
        />
      </div>
    ),
  },
  columnHelper.accessor("id", {
    header: () => <span>#</span>,
    cell: (item) => item.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => <span>Name</span>,
    cell: (item) => item.getValue(),
  }),
  columnHelper.accessor("category", {
    header: () => <span>Category</span>,
    cell: (item) => item.getValue(),
  }),
  columnHelper.accessor("brand", {
    header: () => <span>Brand</span>,
    cell: (item) => item.getValue(),
  }),
  columnHelper.accessor("qty", {
    header: () => <span>Available QTY</span>,
    cell: (item) => item.getValue(),
  }),
  columnHelper.accessor("status", {
    header: () => <span>Status</span>,
    cell: (item) => {
      if (item.getValue() === "active") {
        return (
          <span className="bg-primary-100 text-primary-800 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
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
  }),
  {
    id: "actions",
    header: null,
    cell: ({ row }) => (
      <>
        <Link
          to={"/products/" + row.original.id}
          className="text-primary-600 hover:text-primary-900 mr-3 font-medium"
        >
          Edit
        </Link>
      </>
    ),
  },
];

const Header = ({ selected }) => {
  const selectedCount = Object.keys(selected).length;

  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Products
        </h1>
      </div>
      <div className="flex space-x-3 sm:mt-6 md:ml-4 md:mt-0">
        <Link
          to="/products/add"
          className="bg-secondary-500 hover:bg-secondary-400 focus-visible:outline-secondary-600 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Add product
        </Link>
        <button
          type="button"
          className="bg-secondary-500 hover:bg-secondary-400 focus-visible:outline-secondary-600 hidden rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:block"
        >
          Export {selectedCount > 0 ? selectedCount : "all"}
        </button>
      </div>
    </PageHeader>
  );
};

const MobileComponent = () => {
  return (
    <Layout>
      <Header as="page-header" selected={{}} />

      <div className="mt-4 shadow sm:hidden">
        <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
          {products.map((product) => (
            <li key={product.id}>
              <Link
                to={"/products/" + product.id}
                className="block bg-white px-4 py-4 hover:bg-gray-50"
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mt-1 h-12 w-12 rounded-md object-cover object-center"
                    />

                    <span className="flex flex-col truncate text-sm text-gray-500">
                      <span className="truncate font-medium text-gray-600">
                        {product.name}
                      </span>
                      <span className="font-medium ">{product.category}</span>
                      <span className="font-medium ">QTY: {product.qty}</span>
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

      </div>
    </Layout>
  );
};

const DesktopComponent = (props) => {
  let data = products;

  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
      columnFilters,
      pagination,
    },
    globalFilterFn: fuzzyFilter,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Layout>
      <Header as="page-header" selected={table.getState().rowSelection} />

      <ProductTableFilters
        filters={columnFilters}
        setFilters={setColumnFilters}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <Table table={table} />
      </div>
    </Layout>
  );
};

export default function Products(props) {
  if (isMobile()) {
    return <MobileComponent {...props}/>;
  }

  return <DesktopComponent {...props}/>;
}
