import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import EDataTables from "../components/extended/EDataTable";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import { users } from "../data/users";
import UserFormSlideOver from "../components/users/UserFormSlideOver";
import { useEffect } from "react";
import { isCurrentUrl } from "../utils/url";
import { user_groups } from "../data/user_groups";
import { getGroupFromValue } from "../utils/users";

const columns = (editAction) => {
  return [
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
      name: "Email",
      sortable: true,
      selector: (item) => {
        return item.item?.email || item.email;
      },
    },
    {
      name: "Phone no",
      sortable: true,
      selector: (item) => {
        return item.item?.phone_no || item.phone_no;
      },
    },
    {
      name: "group",
      sortable: true,
      selector: (item) => (
        <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
          {getGroupFromValue(item.item?.group || item.group, user_groups)?.label}
        </span>
      ),
    },
    {
      name: "Status",
      sortable: true,
      selector: (item) => {
        return (
          <div className="inline-flex items-center rounded-md bg-blue-200 px-2.5 py-0.5 text-xs font-medium capitalize text-gray-800">
            {item.item?.status || item.status}
          </div>
        );
      },
    },
    {
      name: "",
      sortable: false,
      selector: (item) => {
        return (
          <div>
            <button
              className="mr-3 font-medium text-blue-600 hover:text-indigo-900"
              onClick={() => editAction(item.item?.id || item.id)}
            >
              Edit
            </button>
          </div>
        );
      },
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
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
        <Link
          to="/users/permissions"
          className="focus:ring-primary-500 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Manage roles
        </Link>
        <button
          className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          onClick={addUserAction}
        >
          Add user
        </button>
      </div>
    </PageHeader>
  );
};

export default function Users() {
  const searchFields = ["name", "email", "phone_no", "group", "status"];

  const [openUserForm, setOpenUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  const loadUsers = () => {
    return users;
  };

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

  return (
    <Layout>
      <Header as="page-header" addUserAction={addUserAction} />
      <EDataTables
        data={users}
        columns={columns(editUserAction)}
        searchFields={searchFields}
        filterable={true}
        loadDataFunction={loadUsers}
      />

      <UserFormSlideOver
        open={openUserForm}
        setOpen={setOpenUserForm}
        user={selectedUser}
      />
    </Layout>
  );
}
