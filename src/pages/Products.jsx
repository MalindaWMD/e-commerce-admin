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

const columnHelper = createColumnHelper();

const columns = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <div className="text-center">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-400 text-primary-600 focus:ring-primary-600"
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
          className="h-4 w-4 rounded border-gray-400 text-primary-600 focus:ring-primary-600"
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
          <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
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
          to={"/products/" + row.original.id + "/stocks"}
          className="mr-3 font-medium text-green-600 hover:text-primary-900"
        >
          Stocks
        </Link>
        <Link
          to={"/orders/" + row.original.id}
          className="mr-3 font-medium text-primary-600 hover:text-primary-900"
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
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
        <Link
          to="/products/add"
          className="rounded-md bg-secondary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
        >
          Add product
        </Link>
        <button
          type="button"
          className="rounded-md bg-secondary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
        >
          Export {selectedCount > 0 ? selectedCount : "all"}
        </button>
      </div>
    </PageHeader>
  );
};

export default function Products(props) {
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
}
