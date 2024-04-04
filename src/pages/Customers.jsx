import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import { customers } from "../data/customers";
import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { fuzzyFilter } from "../utils/table";
import Table from "../components/common/Table";

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
  columnHelper.accessor("email", {
    header: () => <span>Email</span>,
    cell: (item) => item.getValue(),
  }),
  columnHelper.accessor("phone_no", {
    header: () => <span>Phone no</span>,
    cell: (item) => item.getValue(),
  }),
  columnHelper.accessor("order_count", {
    header: () => <span>Order count</span>,
    cell: (item) => item.getValue(),
  }),
  {
    id: "actions",
    header: null,
    cell: ({ row }) => (
      <Link
            to={"/customers/" + row.original.id}
            className="mr-3 font-medium text-primary-600 hover:text-primary-900"
          >
            View
          </Link>
    ),
  },
];


const Header = ({ selected }) => {
  const selectedCount = Object.keys(selected).length;

  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Customers
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
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

export default function Customers(props) {
  let data = customers;

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
      
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <Table table={table} />
      </div>
    </Layout>
  );
}
