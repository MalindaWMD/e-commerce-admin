import { useState } from "react";
import { rankItem } from "@tanstack/match-sorter-utils";
import { Link } from "react-router-dom";
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Table from "../components/common/Table";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";
import OrderTableFilters from "../components/orders/OrderTableFilters";
import { orders } from "../data/orders";
import { PrinterIcon } from "@heroicons/react/24/outline";
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
            className="h-4 w-4 rounded border-gray-400 text-indigo-600 focus:ring-indigo-600"
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
          className="h-4 w-4 rounded border-gray-400 text-indigo-600 focus:ring-indigo-600"
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
  columnHelper.accessor("customer", {
    header: () => <span>Customer</span>,
    cell: (item) => item.getValue(),
  }),
  columnHelper.accessor("date", {
    header: () => <div className="w-16">Date</div>,
    cell: (item) => <div className="w-16">{item.getValue()}</div>,
  }),
  columnHelper.accessor("total", {
    header: () => <div className="text-center">Total</div>,
    cell: (item) => <div className="pr-8 text-right">${item.getValue()}</div>,
  }),
  columnHelper.accessor("status", {
    header: () => <span>Status</span>,
    cell: (item) => <OrderStatusBadge status={item.getValue()} />,
  }),
  {
    id: "actions",
    header: null,
    cell: ({ row }) => (
      <Link
        to={"/orders/" + row.original.id}
        className="mr-3 font-medium text-indigo-600 hover:text-indigo-900"
      >
        Edit
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
          Orders
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
        {selectedCount > 0 && (
          <button
            type="button"
            className="inline-flex rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PrinterIcon className="mr-2 h-5 w-5 text-gray-600" />
            Print labels
          </button>
        )}

        <button
          type="button"
          className="rounded-md bg-cyan-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          Export {selectedCount > 0 ? selectedCount : "all"}
        </button>
      </div>
    </PageHeader>
  );
};

export default function Orders(props) {
  let data = orders;

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

      <OrderTableFilters
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
