import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
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
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { isMobile } from "../utils/window";

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
        <div className="inline-flex items-center rounded-sm bg-blue-200 px-2.5 py-0.5 text-xs font-medium capitalize text-gray-800">
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
          className="hover:text-denim-900 mr-3 font-medium text-blue-600"
          onClick={() => editAction(row.original.id)}
        >
          Edit
        </button>
      ),
    },
  ];
};

const Header = ({ addPromotionAction }) => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Promotions
        </h1>
      </div>
      <div className="flex space-x-3 sm:mt-6 md:ml-4 md:mt-0">
        <button
          className="bg-rose-500 hover:bg-rose-400 focus-visible:outline-rose-600 rounded-sm px-2.5 py-1.5 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={addPromotionAction}
        >
          New promotion
        </button>
      </div>
    </PageHeader>
  );
};

const MobileComponent = ({ addAction, editAction }) => {
  return (
    <Layout>
      <Header as="page-header" addPromotionAction={addAction} />

      <div className="mt-4 shadow sm:hidden">
        <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
          {promotions.map((promotion) => (
            <li key={promotion.id}>
              <a
                href="#"
                className="block bg-white px-4 py-4 hover:bg-gray-50"
                onClick={() => editAction(promotion.id)}
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    <span className="flex flex-col truncate text-sm text-gray-500">
                      <span className="truncate font-medium text-gray-600">
                        {promotion.title}
                      </span>
                      <span className="font-medium ">
                        {capitalize(promotion.method)}
                      </span>
                      <span className="mt-1 w-fit rounded-full bg-blue-200 px-2.5 py-0.5 text-xs font-medium capitalize text-gray-800">
                        {promotion.status}
                      </span>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

const DesktopComponent = ({ addAction, editAction }) => {
  let data = promotions;

  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  let columns = useMemo(() => getColumns(editAction), []);

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
      <Header as="page-header" addPromotionAction={addAction} />

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-sm">
        <Table table={table} />
      </div>
    </Layout>
  );
};

export default function Promotions(props) {
  const [openPromotionForm, setOpenPromotionForm] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState();

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

  let Component = isMobile() ? MobileComponent : DesktopComponent;
  return (
    <>
      <Component
        addAction={addPromotionAction}
        editAction={editPromotionAction}
      />
      <PromotionFormSlideOver
        open={openPromotionForm}
        setOpen={setOpenPromotionForm}
        promotion={selectedPromotion}
      />
    </>
  );
}
