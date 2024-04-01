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
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          User roles
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0"></div>
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
      <Header as="page-header" />
      <div className="mt-8">
        <div className="flex flex-col">
          <div className="relative -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="relative z-0 flex flex-1 overflow-hidden rounded-md bg-white shadow-md">
                <aside className="hidden w-96 flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
                  <div className="px-6 pb-4 pt-6">
                    <h2 className="text-lg font-medium text-gray-900">
                      User Roles
                    </h2>
                    <div className="mt-6 flex items-start space-x-4">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="search" className="sr-only">
                          Create New
                        </label>
                        <div className="">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="off"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Role Name"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-indigo-500 bg-indigo-500 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                  {/* Directory list */}
                  <nav
                    className="min-h-0 flex-1 overflow-y-auto"
                    aria-label="Directory"
                  >
                    <div className="sticky top-0 z-10 border-b border-t border-gray-200 bg-gray-50 text-sm font-medium text-gray-500">
                      <ul className="relative z-0 divide-y divide-gray-200">
                        {roles.map((role, idx) => {
                          return (
                            <li
                              key={"role-" + idx}
                              className="w-full cursor-pointer focus:outline-none"
                              onClick={() => setSelectedRole(role)}
                            >
                              <div
                                className={classNames(
                                  selectedRole && selectedRole === role
                                    ? "bg-indigo-600 text-white"
                                    : "text-gray-900 hover:bg-gray-50",
                                  "relative flex items-center space-x-3 px-6 py-3 ",
                                )}
                              >
                                <div className="flex min-w-0 flex-1 items-center justify-between">
                                  <p className="text-sm font-medium">{role}</p>

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
                <main className="relative z-0 flex flex-1 flex-col items-start justify-start overflow-y-auto focus:outline-none xl:order-last">
                  <div className="flex-1 p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                      Role Permissions
                    </h2>

                    <div className="ap-4 mt-6 grid grid-cols-2">
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
                                      <label className="cursor-pointer text-sm font-medium text-gray-700">
                                        <input
                                          name={permission.name}
                                          type="checkbox"
                                          className="mr-3 h-4 w-4 rounded border-gray-300 text-indigo-600 outline-none focus:outline-none"
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
                        <div className="text-sm text-gray-500 ">
                          Select a role to load abilities
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="w-full bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
