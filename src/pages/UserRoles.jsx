import { useState } from "react";
import { classNames } from "../utils/css";
import { TrashIcon } from "@heroicons/react/24/outline";
import { permissions } from "../routes/permissions";
import ConfirmationModal from "../components/common/ConfirmationModal";
import PageHeader from "../components/layout/PageHeader";
import Layout from "../components/layout/Layout";

const roles = ["Admin", "Marketing", "Front desk"];


const Header = () => {
  return (
    <PageHeader> 
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
          User roles
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
      </div>
    </PageHeader>
  );
};

export default function UserRoles() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleDeleteClick = () => {
    setOpenConfirmationModal(true);
  };

  return (
    <Layout>
      <Header as="page-header"/>
      <div className="mt-8">
          <div className="flex flex-col">
            <div className="relative -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="bg-white flex flex-1 overflow-hidden relative rounded-md shadow-md z-0">
                  <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
                    <div className="px-6 pt-6 pb-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        User Roles
                      </h2>
                      <div className="mt-6 flex items-start space-x-4">
                        <div className="flex-1 min-w-0">
                          <label htmlFor="search" className="sr-only">
                            Create New
                          </label>
                          <div className="">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="off"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="Role Name"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="inline-flex justify-center px-3.5 py-2 border border-indigo-500 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                    {/* Directory list */}
                    <nav
                      className="flex-1 min-h-0 overflow-y-auto"
                      aria-label="Directory"
                    >
                      <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-500">
                        <ul className="relative z-0 divide-y divide-gray-200">
                          {roles.map((role, idx) => {
                            return (
                              <li key={"role-" + idx} className="w-full focus:outline-none cursor-pointer"
                              onClick={() => setSelectedRole(role)}>
                                
                                  <div
                                    className={classNames(
                                      selectedRole && selectedRole === role
                                        ? "bg-indigo-600 text-white"
                                        : "hover:bg-gray-50 text-gray-900",
                                      "relative px-6 py-3 flex items-center space-x-3 "
                                    )}
                                  >
                                    <div className="flex flex-1 items-center justify-between min-w-0">
                                      <p className="text-sm font-medium">
                                        {role}
                                      </p>

                                      <button
                                        className="text-gray-400 hover:text-red-500"
                                        onClick={handleDeleteClick}
                                      >
                                        <TrashIcon className="h-5 w-5 " />
                                      </button>
                                    </div>
                                  </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </nav>
                  </aside>
                  <main className="flex flex-1 flex-col focus:outline-none items-start justify-start overflow-y-auto relative xl:order-last z-0">
                    <div className="flex-1 p-6">
                      <h2 className="text-lg font-medium text-gray-900">
                        Role Permissions
                      </h2>

                      <div className="mt-6 grid grid-cols-2 ap-4">
                        {selectedRole ? (
                          permissions.map((group, idx) => {
                            return (
                              <fieldset
                                key={"permission-group-" + idx}
                                className="m-3 rounded-md border border-gray-200 p-2"
                              >
                                <legend className="text-gray-800">
                                  {group.group}
                                </legend>
                                <div className="mt-3 grid grid-cols-2 gap-3">
                                  {group.routes.map((permission, idx) => {
                                    return (
                                      <div key={"permission-" + idx}>
                                        <label className="font-medium text-sm text-gray-700 cursor-pointer">
                                          <input
                                            name={permission.name}
                                            type="checkbox"
                                            className="focus:outline-none outline-none h-4 w-4 text-indigo-600 border-gray-300 rounded mr-3"
                                          />
                                          <span>{permission.displayName}</span>
                                        </label>
                                      </div>
                                    );
                                  })}
                                </div>
                              </fieldset>
                            );
                          })
                        ) : (
                          <div className="text-gray-500">
                            Select a role to load abilities
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:px-6 text-right w-full">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
      </div>
      <ConfirmationModal
        open={openConfirmationModal}
        setOpen={setOpenConfirmationModal}
        content={{
          title: "Delete Role",
          content: "Are you sure you want to delete this role?",
          id: null,
        }}
        onConfirm={() => {}}
      />
    </Layout>
  );
}
