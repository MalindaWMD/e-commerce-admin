import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/common/Table";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import UserFormSlideOver from "../components/users/UserFormSlideOver";
import { users } from "../data/users";
import { fuzzyFilter } from "../utils/table";
import { getGroupFromValue } from "../utils/users";
import { user_groups } from "../data/user_groups";

const columnHelper = createColumnHelper();

const getColumns = (editAction) => {
  return [
    columnHelper.accessor("id", {
      header: () => <span>ID</span>,
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
    columnHelper.accessor("group", {
      header: () => <span>Group</span>,
      cell: (item) => (
        <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            {getGroupFromValue(item.getValue(), user_groups)?.label}
          </span>
      ),
    }),
    columnHelper.accessor("created_at", {
      header: () => <span>Created at</span>,
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
    {
      id: "actions",
      header: null,
      cell: ({ row }) => (
        <button
                className="mr-3 font-medium text-blue-600 hover:text-primary-900"
                onClick={() => editAction(row.original.id)}
              >
                Edit
              </button>
      ),
    },
  ];
}


const Header = ({ addUserAction }) => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Users
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
        <Link
          to="/users/permissions"
          className="rounded-md bg-secondary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
        >
          Manage roles
        </Link>
        <button
          className="rounded-md bg-secondary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
          onClick={addUserAction}
        >
          Add user
        </button>
      </div>
    </PageHeader>
  );
};

export default function Users() {
    let data = users;

  const [openUserForm, setOpenUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const addUserAction = () => {
    setSelectedUser(null);
    setOpenUserForm(true);
  };

  const editUserAction = (userId) => {
    if (!userId) {
      return;
    }

    let userObj = users.filter((user) => {
      return user.id === userId;
    })[0];

    setSelectedUser(userObj);
    setOpenUserForm(true);
  };

  let columns = getColumns(editUserAction);

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
      <Header as="page-header" addUserAction={addUserAction} />
      
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <Table table={table} />
      </div>

      <UserFormSlideOver
        open={openUserForm}
        setOpen={setOpenUserForm}
        user={selectedUser}
      />
    </Layout>
  );
}
