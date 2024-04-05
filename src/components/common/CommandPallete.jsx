import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  ArchiveBoxIcon,
  FolderIcon,
  HashtagIcon,
  InboxStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const suggestions = [
  { id: 1, name: "Users", url: "/users" },
  { id: 3, name: "Manage user roles", url: "/users/permissions" },
  { id: 4, name: "Completed orders", url: "/orders?status=delivered" },
  { id: 5, name: "Product details", url: "/products" },
  { id: 6, name: "Add product", url: "/products/add" },
  { id: 7, name: "Orders", url: "/orders" },
  { id: 8, name: "Customers", url: "/customers" },
  { id: 9, name: "Home/Dashboard", url: "/" },
];

const recent = suggestions.slice(0, 3);

const quickActions = [
  { name: "Products...", icon: ArchiveBoxIcon, url: "/products" },
  { name: "Orders...", icon: InboxStackIcon, url: "/orders" },
  { name: "Customers...", icon: UserIcon, url: "/customers" },
];

export default function CommandPallete({ open = false, setOpen }) {
  const [query, setQuery] = useState("");

  const filteredSuggestions =
    query === ""
      ? []
      : suggestions.filter((suggestion) => {
          return suggestion.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-45 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <div>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {(query === "" || filteredSuggestions.length > 0) && (
                  <div className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto">
                    <li className="p-2">
                      {query === "" && (
                        <h2 className="mb-2 mt-4 px-3 text-xs font-semibold text-gray-500">
                          Common searches
                        </h2>
                      )}
                      <ul className="text-sm text-gray-700">
                        {(query === "" ? recent : filteredSuggestions).map(
                          (suggestion) => (
                            <Link
                              to={suggestion.url}
                              key={suggestion.id}
                              className="hover:bg-primary-600 group flex cursor-pointer select-none items-center rounded-md px-3 py-2 hover:text-white"
                            >
                              <HashtagIcon
                                className="h-6 w-6 flex-none text-gray-400 group-hover:text-white"
                                aria-hidden="true"
                              />
                              <span className="ml-3 flex-auto truncate">
                                {suggestion.name}
                              </span>
                              <span className="text-primary-100 ml-3 hidden flex-none group-hover:block">
                                Jump to...
                              </span>
                            </Link>
                          ),
                        )}
                      </ul>
                    </li>
                    {query === "" && (
                      <li className="p-2">
                        <h2 className="sr-only">Quick actions</h2>
                        <ul className="text-sm text-gray-700">
                          {quickActions.map((action, idx) => (
                            <Link
                              key={"action-" + idx}
                              to={action.url}
                              className="hover:bg-primary-600 group flex cursor-pointer select-none items-center rounded-md px-3 py-2 hover:text-white"
                            >
                              <action.icon
                                className="h-6 w-6 flex-none text-gray-400 group-hover:text-white"
                                aria-hidden="true"
                              />

                              <span className="ml-3 flex-auto truncate">
                                {action.name}
                              </span>
                            </Link>
                          ))}
                        </ul>
                      </li>
                    )}
                  </div>
                )}

                {query !== "" && filteredSuggestions.length === 0 && (
                  <div className="px-6 py-14 text-center sm:px-14">
                    <FolderIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm text-gray-900">
                      We couldn't find any suggestions with that term. Please
                      try again.
                    </p>
                  </div>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
