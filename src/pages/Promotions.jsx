import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/common/Table";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import UserFormSlideOver from "../components/users/UserFormSlideOver";
import { users } from "../data/users";
import { fuzzyFilter } from "../utils/table";
import { getGroupFromValue } from "../utils/users";
import { user_groups } from "../data/user_groups";
import { promotions } from "../data/promotions";
import { capitalize } from "../utils/string";
import PromotionFormSlideOver from "../components/promotions/PromotionFormSlideOver";

const columnHelper = createColumnHelper();

const getColumns = (editAction) => {
  return [
    columnHelper.accessor("title", {
      header: () => <span>Title</span>,
      cell: (item) => item.getValue(),
    }),
    columnHelper.accessor("status", {
      header: () => <span>Status</span>,
      cell: (item) => (
        <div className="inline-flex items-center rounded-md bg-blue-200 px-2.5 py-0.5 text-xs font-medium capitalize text-gray-800">
              {item.getValue()}
            </div>
      ),
    }),
    columnHelper.accessor("method", {
      header: () => <span>Method</span>,
      cell: (item) => capitalize(item.getValue()),
    }),
    {
      id: "actions",
      header: null,
      cell: ({ row }) => (
        <button
                className="mr-3 font-medium text-blue-600 hover:text-indigo-900"
                onClick={() => editAction(row.original.id)}
              >
                Edit
              </button>
      ),
    },
  ];
}


const Header = ({ addPromotionAction }) => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Promotions
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
        <button
          className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          onClick={addPromotionAction}
        >
          New promotion
        </button>
      </div>
    </PageHeader>
  );
};

export default function Promotions() {
    let data = promotions;

  const [openPromotionForm, setOpenPromotionForm] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState();

  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const addPromotionAction = () => {
    setSelectedPromotion(null);
    setOpenPromotionForm(true);
  };

  const editPromotionAction = (promoId) => {
    if (!promoId) {
      return;
    }

    let promoObj = promotions.filter((promo) => {
      return promo.id === promoId;
    })[0];

    setSelectedPromotion(promoObj);
    setOpenPromotionForm(true);
  };

  let columns = useMemo( () => getColumns(editPromotionAction), [selectedPromotion]);

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
      <Header as="page-header" addPromotionAction={addPromotionAction} />
      
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <Table table={table} />
      </div>

      <PromotionFormSlideOver
        open={openPromotionForm}
        setOpen={setOpenPromotionForm}
        promotion={selectedPromotion}
      />
    </Layout>
  );
}
