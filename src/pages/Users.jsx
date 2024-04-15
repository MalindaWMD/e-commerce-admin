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
import UserFormSlideOver from "../components/users/UserFormSlideOver";
import { users } from "../data/users";
import { fuzzyFilter } from "../utils/table";
import { getGroupFromValue } from "../utils/users";
import { user_groups } from "../data/user_groups";
import { ChevronRightIcon, UserIcon } from "@heroicons/react/24/outline";
import { isMobile } from "../utils/window";

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
        <span className="inline-flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
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
        <div className="inline-flex items-center rounded-sm bg-blue-200 px-2.5 py-0.5 text-xs font-medium capitalize text-gray-800">
          {item.getValue()}
        </div>
      ),
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

const Header = ({ addUserAction }) => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Users
        </h1>
      </div>
      <div className="flex space-x-3 sm:mt-6 md:ml-4 md:mt-0">
        <Link
          to="/users/permissions"
          className="bg-rose-500 hover:bg-rose-400 focus-visible:outline-rose-600 rounded-sm px-2.5 py-1.5 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Manage roles
        </Link>
        <button
          className="bg-rose-500 hover:bg-rose-400 focus-visible:outline-rose-600 rounded-sm px-2.5 py-1.5 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={addUserAction}
        >
          Add user
        </button>
      </div>
    </PageHeader>
  );
};

const MobileComponent = ({ addAction, editAction }) => {
  return (
    <Layout>
      <Header as="page-header" addUserAction={addAction}/>
      <div className="mt-4 shadow sm:hidden">
        <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
          {users.map((user) => (
            <li key={user.id}>
              <a
                href="#"
                className="block bg-white px-4 py-4 hover:bg-gray-50"
                onClick={() => editAction(user.id)}
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    <UserIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col truncate text-sm text-gray-500">
                      <span className="truncate font-medium text-gray-600">
                        {user.name}
                      </span>
                      <span className="font-medium ">{user.email}</span>
                      <span className="inline-flex">
                        <span className="mr-1 mt-1 w-fit items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          {getGroupFromValue(user.group, user_groups)?.label}
                        </span>
                        <span className="mt-1 w-fit items-center rounded-full bg-blue-200 px-2.5 py-0.5 text-xs font-medium capitalize text-gray-800">
                          {user.status}
                        </span>
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

const DesktopComponent = ({ addAction, editAction}) => {
  let data = users;

  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  let columns = getColumns(editAction);

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
      <Header as="page-header" addUserAction={addAction} />

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-sm">
        <Table table={table} />
      </div>
    </Layout>
  );
};

export default function Users() {
  const [openUserForm, setOpenUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

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


  let Component = isMobile() ? MobileComponent : DesktopComponent;
  return <>
    <Component addAction={addUserAction} editAction={editUserAction}/>

    <UserFormSlideOver
        open={openUserForm}
        setOpen={setOpenUserForm}
        user={selectedUser}
      />
  </>;
}
