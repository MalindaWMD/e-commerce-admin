import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import EDataTables from "../components/extended/EDataTable";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import { users } from "../data/users";
import UserFormSlideOver from "../components/users/UserFormSlideOver";
import { useEffect } from "react";
import { isCurrentUrl } from "../utils/url";

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
    name: "Groups",
    sortable: true,
    selector: (item) => {
      let groups = item.item?.groups || item.groups;

      return groups.map((group, idx) => {
        return (
          <span key={'group-' + idx} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
            {group}
          </span>
        );
      });
    },
  },
  {
    name: "Status",
    sortable: true,
    selector: (item) => {
      return (
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-200 text-gray-800 capitalize">
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
            className="text-blue-600 mr-3 font-medium hover:text-indigo-900"
            onClick={() => editAction(item.item?.id || item.id)}
          >
            Edit
          </button>
        </div>
      );
    },
  },
];
}

const Header = ({ addUserAction }) => {
  return (
    <PageHeader>
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
          Users
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
        <Link
          to="/users/permissions"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Manage roles
        </Link>
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          onClick={addUserAction}
        >
          Add user
        </button>
      </div>
    </PageHeader>
  );
};

export default function Users() {
  const searchFields = ["name", "email", "phone_no", "groups", "status"];

  const [openUserForm, setOpenUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  const loadUsers = () => {
    return users;
  };

  const addUserAction = () => {
    setSelectedUser(null);
    setOpenUserForm(true);
  }

  const editUserAction = (userId) => {
    if( ! userId){
      return;
    }

    let userObj = users.filter(user => {
      return user.id === userId;
    })[0];


    setSelectedUser(userObj);
    setOpenUserForm(true);
  }

  return (
    <Layout>
      <Header as="page-header" addUserAction={addUserAction}/>
      <EDataTables
        data={users}
        columns={columns(editUserAction)}
        searchFields={searchFields}
        filterable={true}
        loadDataFunction={loadUsers}
      />

      <UserFormSlideOver open={openUserForm} setOpen={setOpenUserForm} user={selectedUser}/>
    </Layout>
  );
}
